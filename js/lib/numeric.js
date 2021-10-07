// seedrandom.js version 2.0.
// Author: David Bau 4/2/2011
//
// Defines a method Math.seedrandom() that, when called, substitutes
// an explicitly seeded RC4-based algorithm for Math.random().  Also
// supports automatic seeding from local or network sources of entropy.
//
// Usage:
//
//   <script src=http://davidbau.com/encode/seedrandom-min.js></script>
//
//   Math.seedrandom('yipee'); Sets Math.random to a function that is
//                             initialized using the given explicit seed.
//
//   Math.seedrandom();        Sets Math.random to a function that is
//                             seeded using the current time, dom state,
//                             and other accumulated local entropy.
//                             The generated seed string is returned.
//
//   Math.seedrandom('yowza', true);
//                             Seeds using the given explicit seed mixed
//                             together with accumulated entropy.
//
//   <script src="http://bit.ly/srandom-512"></script>
//                             Seeds using physical random bits downloaded
//                             from random.org.
//
//   <script src="https://jsonlib.appspot.com/urandom?callback=Math.seedrandom">
//   </script>                 Seeds using urandom bits from call.jsonlib.com,
//                             which is faster than random.org.
//
// Examples:
//
//   Math.seedrandom("hello");            // Use "hello" as the seed.
//   document.write(Math.random());       // Always 0.5463663768140734
//   document.write(Math.random());       // Always 0.43973793770592234
//   var rng1 = Math.random;              // Remember the current prng.
//
//   var autoseed = Math.seedrandom();    // New prng with an automatic seed.
//   document.write(Math.random());       // Pretty much unpredictable.
//
//   Math.random = rng1;                  // Continue "hello" prng sequence.
//   document.write(Math.random());       // Always 0.554769432473455
//
//   Math.seedrandom(autoseed);           // Restart at the previous seed.
//   document.write(Math.random());       // Repeat the 'unpredictable' value.
//
// Notes:
//
// Each time seedrandom('arg') is called, entropy from the passed seed
// is accumulated in a pool to help generate future seeds for the
// zero-argument form of Math.seedrandom, so entropy can be injected over
// time by calling seedrandom with explicit data repeatedly.
//
// On speed - This javascript implementation of Math.random() is about
// 3-10x slower than the built-in Math.random() because it is not native
// code, but this is typically fast enough anyway.  Seeding is more expensive,
// especially if you use auto-seeding.  Some details (timings on Chrome 4):
//
// Our Math.random()            - avg less than 0.002 milliseconds per call
// seedrandom('explicit')       - avg less than 0.5 milliseconds per call
// seedrandom('explicit', true) - avg less than 2 milliseconds per call
// seedrandom()                 - avg about 38 milliseconds per call
//
// LICENSE (BSD):
//
// Copyright 2010 David Bau, all rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   1. Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//
//   2. Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
//
//   3. Neither the name of this module nor the names of its contributors may
//      be used to endorse or promote products derived from this software
//      without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//

var numeric = "undefined" == typeof exports ? function () {} : exports;
"undefined" != typeof global && (global.numeric = numeric),
  (numeric.version = "1.2.6"),
  (numeric.bench = function (r, n) {
    var e, i, t, u;
    for (void 0 === n && (n = 15), t = 0.5, e = new Date(); ; ) {
      for (t *= 2, u = t; u > 3; u -= 4) r(), r(), r(), r();
      for (; u > 0; ) r(), u--;
      if ((i = new Date()) - e > n) break;
    }
    for (u = t; u > 3; u -= 4) r(), r(), r(), r();
    for (; u > 0; ) r(), u--;
    return (i = new Date()), (1e3 * (3 * t - 1)) / (i - e);
  }),
  (numeric._myIndexOf = function (r) {
    var n,
      e = this.length;
    for (n = 0; n < e; ++n) if (this[n] === r) return n;
    return -1;
  }),
  (numeric.myIndexOf = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : numeric._myIndexOf),
  (numeric.Function = Function),
  (numeric.precision = 4),
  (numeric.largeArray = 50),
  (numeric.prettyPrint = function (r) {
    function n(r) {
      if (0 === r) return "0";
      if (isNaN(r)) return "NaN";
      if (r < 0) return "-" + n(-r);
      if (isFinite(r)) {
        var e = Math.floor(Math.log(r) / Math.log(10)),
          i = r / Math.pow(10, e),
          t = i.toPrecision(numeric.precision);
        return (
          10 === parseFloat(t) &&
            (e++, (i = 1), (t = i.toPrecision(numeric.precision))),
          parseFloat(t).toString() + "e" + e.toString()
        );
      }
      return "Infinity";
    }
    function e(r) {
      var t;
      if (void 0 === r)
        return i.push(Array(numeric.precision + 8).join(" ")), !1;
      if ("string" == typeof r) return i.push('"' + r + '"'), !1;
      if ("boolean" == typeof r) return i.push(r.toString()), !1;
      if ("number" == typeof r) {
        var u = n(r),
          o = r.toPrecision(numeric.precision),
          c = parseFloat(r.toString()).toString(),
          a = [u, o, c, parseFloat(o).toString(), parseFloat(c).toString()];
        for (t = 1; t < a.length; t++) a[t].length < u.length && (u = a[t]);
        return (
          i.push(Array(numeric.precision + 8 - u.length).join(" ") + u), !1
        );
      }
      if (null === r) return i.push("null"), !1;
      if ("function" == typeof r) {
        i.push(r.toString());
        var f = !1;
        for (t in r)
          r.hasOwnProperty(t) &&
            (f ? i.push(",\n") : i.push("\n{"),
            (f = !0),
            i.push(t),
            i.push(": \n"),
            e(r[t]));
        return f && i.push("}\n"), !0;
      }
      if (r instanceof Array) {
        if (r.length > numeric.largeArray)
          return i.push("...Large Array..."), !0;
        var f = !1;
        for (i.push("["), t = 0; t < r.length; t++)
          t > 0 && (i.push(","), f && i.push("\n ")), (f = e(r[t]));
        return i.push("]"), !0;
      }
      i.push("{");
      var f = !1;
      for (t in r)
        r.hasOwnProperty(t) &&
          (f && i.push(",\n"), (f = !0), i.push(t), i.push(": \n"), e(r[t]));
      return i.push("}"), !0;
    }
    var i = [];
    return e(r), i.join("");
  }),
  (numeric.parseDate = function (r) {
    function n(r) {
      if ("string" == typeof r) return Date.parse(r.replace(/-/g, "/"));
      if (!(r instanceof Array))
        throw new Error("parseDate: parameter must be arrays of strings");
      var e,
        i = [];
      for (e = 0; e < r.length; e++) i[e] = n(r[e]);
      return i;
    }
    return n(r);
  }),
  (numeric.parseFloat = function (r) {
    function n(r) {
      if ("string" == typeof r) return parseFloat(r);
      if (!(r instanceof Array))
        throw new Error("parseFloat: parameter must be arrays of strings");
      var e,
        i = [];
      for (e = 0; e < r.length; e++) i[e] = n(r[e]);
      return i;
    }
    return n(r);
  }),
  (numeric.parseCSV = function (r) {
    var n,
      e,
      i = r.split("\n"),
      t = [],
      u = /(([^'",]*)|('[^']*')|("[^"]*")),/g,
      o =
        /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/,
      c = 0;
    for (e = 0; e < i.length; e++) {
      var a,
        f = (i[e] + ",").match(u);
      if (f.length > 0) {
        for (t[c] = [], n = 0; n < f.length; n++)
          (a = (function (r) {
            return r.substr(0, r.length - 1);
          })(f[n])),
            o.test(a) ? (t[c][n] = parseFloat(a)) : (t[c][n] = a);
        c++;
      }
    }
    return t;
  }),
  (numeric.toCSV = function (r) {
    var n,
      e,
      i,
      t,
      u,
      o = numeric.dim(r);
    for (i = o[0], o[1], u = [], n = 0; n < i; n++) {
      for (t = [], e = 0; e < i; e++) t[e] = r[n][e].toString();
      u[n] = t.join(", ");
    }
    return u.join("\n") + "\n";
  }),
  (numeric.getURL = function (r) {
    var n = new XMLHttpRequest();
    return n.open("GET", r, !1), n.send(), n;
  }),
  (numeric.imageURL = function (r) {
    function n(r, n, e) {
      void 0 === n && (n = 0), void 0 === e && (e = r.length);
      var i,
        t = [
          0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615,
          3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864,
          162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666,
          4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639,
          325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465,
          4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242,
          1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684,
          3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665,
          651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731,
          3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812,
          795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534,
          2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059,
          2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813,
          2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878,
          1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704,
          2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405,
          1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311,
          2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856,
          1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306,
          3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015,
          1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873,
          3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842,
          3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804,
          225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377,
          4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355,
          426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852,
          4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558,
          953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859,
          3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669,
          829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366,
          3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608,
          733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221,
          2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151,
          1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112,
          2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610,
          1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567,
          2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745,
          1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938,
          2808555105, 3495958263, 1231636301, 1047427035, 2932959818,
          3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863,
          817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493,
          3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746,
          711928724, 3020668471, 3272380065, 1510334235, 755167117,
        ],
        u = -1,
        o = 0;
      r.length;
      for (i = n; i < e; i++) (o = 255 & (u ^ r[i])), (u = (u >>> 8) ^ t[o]);
      return -1 ^ u;
    }
    var e,
      i,
      t,
      u,
      o,
      c,
      a,
      f,
      m,
      s,
      h = r[0].length,
      l = r[0][0].length,
      p = [
        137,
        80,
        78,
        71,
        13,
        10,
        26,
        10,
        0,
        0,
        0,
        13,
        73,
        72,
        68,
        82,
        (l >> 24) & 255,
        (l >> 16) & 255,
        (l >> 8) & 255,
        255 & l,
        (h >> 24) & 255,
        (h >> 16) & 255,
        (h >> 8) & 255,
        255 & h,
        8,
        2,
        0,
        0,
        0,
        -1,
        -2,
        -3,
        -4,
        -5,
        -6,
        -7,
        -8,
        73,
        68,
        65,
        84,
        8,
        29,
      ];
    for (
      s = n(p, 12, 29),
        p[29] = (s >> 24) & 255,
        p[30] = (s >> 16) & 255,
        p[31] = (s >> 8) & 255,
        p[32] = 255 & s,
        e = 1,
        i = 0,
        a = 0;
      a < h;
      a++
    ) {
      for (
        a < h - 1 ? p.push(0) : p.push(1),
          o = (3 * l + 1 + (0 === a)) & 255,
          c = ((3 * l + 1 + (0 === a)) >> 8) & 255,
          p.push(o),
          p.push(c),
          p.push(255 & ~o),
          p.push(255 & ~c),
          0 === a && p.push(0),
          f = 0;
        f < l;
        f++
      )
        for (t = 0; t < 3; t++)
          (o = r[t][a][f]),
            (o = o > 255 ? 255 : o < 0 ? 0 : Math.round(o)),
            (e = (e + o) % 65521),
            (i = (i + e) % 65521),
            p.push(o);
      p.push(0);
    }
    return (
      (m = (i << 16) + e),
      p.push((m >> 24) & 255),
      p.push((m >> 16) & 255),
      p.push((m >> 8) & 255),
      p.push(255 & m),
      (u = p.length - 41),
      (p[33] = (u >> 24) & 255),
      (p[34] = (u >> 16) & 255),
      (p[35] = (u >> 8) & 255),
      (p[36] = 255 & u),
      (s = n(p, 37)),
      p.push((s >> 24) & 255),
      p.push((s >> 16) & 255),
      p.push((s >> 8) & 255),
      p.push(255 & s),
      p.push(0),
      p.push(0),
      p.push(0),
      p.push(0),
      p.push(73),
      p.push(69),
      p.push(78),
      p.push(68),
      p.push(174),
      p.push(66),
      p.push(96),
      p.push(130),
      "data:image/png;base64," +
        (function (r) {
          var n,
            e,
            i,
            t,
            u,
            o,
            c,
            a,
            f = r.length,
            m =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            s = "";
          for (n = 0; n < f; n += 3)
            (e = r[n]),
              (i = r[n + 1]),
              (t = r[n + 2]),
              (u = e >> 2),
              (o = ((3 & e) << 4) + (i >> 4)),
              (c = ((15 & i) << 2) + (t >> 6)),
              (a = 63 & t),
              n + 1 >= f ? (c = a = 64) : n + 2 >= f && (a = 64),
              (s += m.charAt(u) + m.charAt(o) + m.charAt(c) + m.charAt(a));
          return s;
        })(p)
    );
  }),
  (numeric._dim = function (r) {
    for (var n = []; "object" == typeof r; ) n.push(r.length), (r = r[0]);
    return n;
  }),
  (numeric.dim = function (r) {
    var n, e;
    return "object" == typeof r
      ? ((n = r[0]),
        "object" == typeof n
          ? ((e = n[0]),
            "object" == typeof e ? numeric._dim(r) : [r.length, n.length])
          : [r.length])
      : [];
  }),
  (numeric.mapreduce = function (r, n) {
    return Function(
      "x",
      "accum",
      "_s",
      "_k",
      'if(typeof accum === "undefined") accum = ' +
        n +
        ';\nif(typeof x === "number") { var xi = x; ' +
        r +
        '; return accum; }\nif(typeof _s === "undefined") _s = numeric.dim(x);\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i,xi;\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) {\n        accum = arguments.callee(x[i],accum,_s,_k+1);\n    }    return accum;\n}\nfor(i=_n-1;i>=1;i-=2) { \n    xi = x[i];\n    ' +
        r +
        ";\n    xi = x[i-1];\n    " +
        r +
        ";\n}\nif(i === 0) {\n    xi = x[i];\n    " +
        r +
        "\n}\nreturn accum;"
    );
  }),
  (numeric.mapreduce2 = function (r, n) {
    return Function(
      "x",
      "var n = x.length;\nvar i,xi;\n" +
        n +
        ";\nfor(i=n-1;i!==-1;--i) { \n    xi = x[i];\n    " +
        r +
        ";\n}\nreturn accum;"
    );
  }),
  (numeric.same = function r(n, e) {
    var i, t;
    if (!(n instanceof Array && e instanceof Array)) return !1;
    if ((t = n.length) !== e.length) return !1;
    for (i = 0; i < t; i++)
      if (n[i] !== e[i]) {
        if ("object" != typeof n[i]) return !1;
        if (!r(n[i], e[i])) return !1;
      }
    return !0;
  }),
  (numeric.rep = function (r, n, e) {
    void 0 === e && (e = 0);
    var i,
      t = r[e],
      u = Array(t);
    if (e === r.length - 1) {
      for (i = t - 2; i >= 0; i -= 2) (u[i + 1] = n), (u[i] = n);
      return -1 === i && (u[0] = n), u;
    }
    for (i = t - 1; i >= 0; i--) u[i] = numeric.rep(r, n, e + 1);
    return u;
  }),
  (numeric.dotMMsmall = function (r, n) {
    var e, i, t, u, o, c, a, f, m, s, h;
    for (
      u = r.length, o = n.length, c = n[0].length, a = Array(u), e = u - 1;
      e >= 0;
      e--
    ) {
      for (f = Array(c), m = r[e], t = c - 1; t >= 0; t--) {
        for (s = m[o - 1] * n[o - 1][t], i = o - 2; i >= 1; i -= 2)
          (h = i - 1), (s += m[i] * n[i][t] + m[h] * n[h][t]);
        0 === i && (s += m[0] * n[0][t]), (f[t] = s);
      }
      a[e] = f;
    }
    return a;
  }),
  (numeric._getCol = function (r, n, e) {
    var i,
      t = r.length;
    for (i = t - 1; i > 0; --i) (e[i] = r[i][n]), --i, (e[i] = r[i][n]);
    0 === i && (e[0] = r[0][n]);
  }),
  (numeric.dotMMbig = function (r, n) {
    var e,
      i,
      t,
      u = numeric._getCol,
      o = n.length,
      c = Array(o),
      a = r.length,
      f = n[0].length,
      m = new Array(a),
      s = numeric.dotVV;
    for (--o, --a, i = a; -1 !== i; --i) m[i] = Array(f);
    for (--f, i = f; -1 !== i; --i)
      for (u(n, i, c), t = a; -1 !== t; --t) 0, (e = r[t]), (m[t][i] = s(e, c));
    return m;
  }),
  (numeric.dotMV = function (r, n) {
    var e,
      i = r.length,
      t = (n.length, Array(i)),
      u = numeric.dotVV;
    for (e = i - 1; e >= 0; e--) t[e] = u(r[e], n);
    return t;
  }),
  (numeric.dotVM = function (r, n) {
    var e, i, t, u, o, c, a;
    for (t = r.length, u = n[0].length, o = Array(u), i = u - 1; i >= 0; i--) {
      for (c = r[t - 1] * n[t - 1][i], e = t - 2; e >= 1; e -= 2)
        (a = e - 1), (c += r[e] * n[e][i] + r[a] * n[a][i]);
      0 === e && (c += r[0] * n[0][i]), (o[i] = c);
    }
    return o;
  }),
  (numeric.dotVV = function (r, n) {
    var e,
      i,
      t = r.length,
      u = r[t - 1] * n[t - 1];
    for (e = t - 2; e >= 1; e -= 2)
      (i = e - 1), (u += r[e] * n[e] + r[i] * n[i]);
    return 0 === e && (u += r[0] * n[0]), u;
  }),
  (numeric.dot = function (r, n) {
    var e = numeric.dim;
    switch (1e3 * e(r).length + e(n).length) {
      case 2002:
        return n.length < 10
          ? numeric.dotMMsmall(r, n)
          : numeric.dotMMbig(r, n);
      case 2001:
        return numeric.dotMV(r, n);
      case 1002:
        return numeric.dotVM(r, n);
      case 1001:
        return numeric.dotVV(r, n);
      case 1e3:
        return numeric.mulVS(r, n);
      case 1:
        return numeric.mulSV(r, n);
      case 0:
        return r * n;
      default:
        throw new Error("numeric.dot only works on vectors and matrices");
    }
  }),
  (numeric.diag = function (r) {
    var n,
      e,
      i,
      t,
      u = r.length,
      o = Array(u);
    for (n = u - 1; n >= 0; n--) {
      for (t = Array(u), e = n + 2, i = u - 1; i >= e; i -= 2)
        (t[i] = 0), (t[i - 1] = 0);
      for (i > n && (t[i] = 0), t[n] = r[n], i = n - 1; i >= 1; i -= 2)
        (t[i] = 0), (t[i - 1] = 0);
      0 === i && (t[0] = 0), (o[n] = t);
    }
    return o;
  }),
  (numeric.getDiag = function (r) {
    var n,
      e = Math.min(r.length, r[0].length),
      i = Array(e);
    for (n = e - 1; n >= 1; --n) (i[n] = r[n][n]), --n, (i[n] = r[n][n]);
    return 0 === n && (i[0] = r[0][0]), i;
  }),
  (numeric.identity = function (r) {
    return numeric.diag(numeric.rep([r], 1));
  }),
  (numeric.pointwise = function (r, n, e) {
    void 0 === e && (e = "");
    var i,
      t,
      u = [],
      o = /\[i\]$/,
      c = "",
      a = !1;
    for (i = 0; i < r.length; i++)
      o.test(r[i])
        ? ((t = r[i].substring(0, r[i].length - 3)), (c = t))
        : (t = r[i]),
        "ret" === t && (a = !0),
        u.push(t);
    return (
      (u[r.length] = "_s"),
      (u[r.length + 1] = "_k"),
      (u[r.length + 2] =
        'if(typeof _s === "undefined") _s = numeric.dim(' +
        c +
        ');\nif(typeof _k === "undefined") _k = 0;\nvar _n = _s[_k];\nvar i' +
        (a ? "" : ", ret = Array(_n)") +
        ";\nif(_k < _s.length-1) {\n    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee(" +
        r.join(",") +
        ",_s,_k+1);\n    return ret;\n}\n" +
        e +
        "\nfor(i=_n-1;i!==-1;--i) {\n    " +
        n +
        "\n}\nreturn ret;"),
      Function.apply(null, u)
    );
  }),
  (numeric.pointwise2 = function (r, n, e) {
    void 0 === e && (e = "");
    var i,
      t,
      u = [],
      o = /\[i\]$/,
      c = "",
      a = !1;
    for (i = 0; i < r.length; i++)
      o.test(r[i])
        ? ((t = r[i].substring(0, r[i].length - 3)), (c = t))
        : (t = r[i]),
        "ret" === t && (a = !0),
        u.push(t);
    return (
      (u[r.length] =
        "var _n = " +
        c +
        ".length;\nvar i" +
        (a ? "" : ", ret = Array(_n)") +
        ";\n" +
        e +
        "\nfor(i=_n-1;i!==-1;--i) {\n" +
        n +
        "\n}\nreturn ret;"),
      Function.apply(null, u)
    );
  }),
  (numeric._biforeach = function r(n, e, i, t, u) {
    if (t === i.length - 1) return void u(n, e);
    var o,
      c = i[t];
    for (o = c - 1; o >= 0; o--)
      r(
        "object" == typeof n ? n[o] : n,
        "object" == typeof e ? e[o] : e,
        i,
        t + 1,
        u
      );
  }),
  (numeric._biforeach2 = function r(n, e, i, t, u) {
    if (t === i.length - 1) return u(n, e);
    var o,
      c = i[t],
      a = Array(c);
    for (o = c - 1; o >= 0; --o)
      a[o] = r(
        "object" == typeof n ? n[o] : n,
        "object" == typeof e ? e[o] : e,
        i,
        t + 1,
        u
      );
    return a;
  }),
  (numeric._foreach = function r(n, e, i, t) {
    if (i === e.length - 1) return void t(n);
    var u,
      o = e[i];
    for (u = o - 1; u >= 0; u--) r(n[u], e, i + 1, t);
  }),
  (numeric._foreach2 = function r(n, e, i, t) {
    if (i === e.length - 1) return t(n);
    var u,
      o = e[i],
      c = Array(o);
    for (u = o - 1; u >= 0; u--) c[u] = r(n[u], e, i + 1, t);
    return c;
  }),
  (numeric.ops2 = {
    add: "+",
    sub: "-",
    mul: "*",
    div: "/",
    mod: "%",
    and: "&&",
    or: "||",
    eq: "===",
    neq: "!==",
    lt: "<",
    gt: ">",
    leq: "<=",
    geq: ">=",
    band: "&",
    bor: "|",
    bxor: "^",
    lshift: "<<",
    rshift: ">>",
    rrshift: ">>>",
  }),
  (numeric.opseq = {
    addeq: "+=",
    subeq: "-=",
    muleq: "*=",
    diveq: "/=",
    modeq: "%=",
    lshifteq: "<<=",
    rshifteq: ">>=",
    rrshifteq: ">>>=",
    bandeq: "&=",
    boreq: "|=",
    bxoreq: "^=",
  }),
  (numeric.mathfuns = [
    "abs",
    "acos",
    "asin",
    "atan",
    "ceil",
    "cos",
    "exp",
    "floor",
    "log",
    "round",
    "sin",
    "sqrt",
    "tan",
    "isNaN",
    "isFinite",
  ]),
  (numeric.mathfuns2 = ["atan2", "pow", "max", "min"]),
  (numeric.ops1 = { neg: "-", not: "!", bnot: "~", clone: "" }),
  (numeric.mapreducers = {
    any: ["if(xi) return true;", "var accum = false;"],
    all: ["if(!xi) return false;", "var accum = true;"],
    sum: ["accum += xi;", "var accum = 0;"],
    prod: ["accum *= xi;", "var accum = 1;"],
    norm2Squared: ["accum += xi*xi;", "var accum = 0;"],
    norminf: [
      "accum = max(accum,abs(xi));",
      "var accum = 0, max = Math.max, abs = Math.abs;",
    ],
    norm1: ["accum += abs(xi)", "var accum = 0, abs = Math.abs;"],
    sup: ["accum = max(accum,xi);", "var accum = -Infinity, max = Math.max;"],
    inf: ["accum = min(accum,xi);", "var accum = Infinity, min = Math.min;"],
  }),
  (function () {
    var r, n;
    for (r = 0; r < numeric.mathfuns2.length; ++r)
      (n = numeric.mathfuns2[r]), (numeric.ops2[n] = n);
    for (r in numeric.ops2)
      if (numeric.ops2.hasOwnProperty(r)) {
        n = numeric.ops2[r];
        var e,
          i,
          t = "";
        -1 !== numeric.myIndexOf.call(numeric.mathfuns2, r)
          ? ((t = "var " + n + " = Math." + n + ";\n"),
            (e = function (r, e, i) {
              return r + " = " + n + "(" + e + "," + i + ")";
            }),
            (i = function (r, e) {
              return r + " = " + n + "(" + r + "," + e + ")";
            }))
          : ((e = function (r, e, i) {
              return r + " = " + e + " " + n + " " + i;
            }),
            (i = numeric.opseq.hasOwnProperty(r + "eq")
              ? function (r, e) {
                  return r + " " + n + "= " + e;
                }
              : function (r, e) {
                  return r + " = " + r + " " + n + " " + e;
                })),
          (numeric[r + "VV"] = numeric.pointwise2(
            ["x[i]", "y[i]"],
            e("ret[i]", "x[i]", "y[i]"),
            t
          )),
          (numeric[r + "SV"] = numeric.pointwise2(
            ["x", "y[i]"],
            e("ret[i]", "x", "y[i]"),
            t
          )),
          (numeric[r + "VS"] = numeric.pointwise2(
            ["x[i]", "y"],
            e("ret[i]", "x[i]", "y"),
            t
          )),
          (numeric[r] = Function(
            "var n = arguments.length, i, x = arguments[0], y;\nvar VV = numeric." +
              r +
              "VV, VS = numeric." +
              r +
              "VS, SV = numeric." +
              r +
              'SV;\nvar dim = numeric.dim;\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof x === "object") {\n      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n  else ' +
              i("x", "y") +
              "\n}\nreturn x;\n"
          )),
          (numeric[n] = numeric[r]),
          (numeric[r + "eqV"] = numeric.pointwise2(
            ["ret[i]", "x[i]"],
            i("ret[i]", "x[i]"),
            t
          )),
          (numeric[r + "eqS"] = numeric.pointwise2(
            ["ret[i]", "x"],
            i("ret[i]", "x"),
            t
          )),
          (numeric[r + "eq"] = Function(
            "var n = arguments.length, i, x = arguments[0], y;\nvar V = numeric." +
              r +
              "eqV, S = numeric." +
              r +
              'eqS\nvar s = numeric.dim(x);\nfor(i=1;i!==n;++i) { \n  y = arguments[i];\n  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n  else numeric._biforeach(x,y,s,0,S);\n}\nreturn x;\n'
          ));
      }
    for (r = 0; r < numeric.mathfuns2.length; ++r)
      (n = numeric.mathfuns2[r]), delete numeric.ops2[n];
    for (r = 0; r < numeric.mathfuns.length; ++r)
      (n = numeric.mathfuns[r]), (numeric.ops1[n] = n);
    for (r in numeric.ops1)
      numeric.ops1.hasOwnProperty(r) &&
        ((t = ""),
        (n = numeric.ops1[r]),
        -1 !== numeric.myIndexOf.call(numeric.mathfuns, r) &&
          Math.hasOwnProperty(n) &&
          (t = "var " + n + " = Math." + n + ";\n"),
        (numeric[r + "eqV"] = numeric.pointwise2(
          ["ret[i]"],
          "ret[i] = " + n + "(ret[i]);",
          t
        )),
        (numeric[r + "eq"] = Function(
          "x",
          'if(typeof x !== "object") return ' +
            n +
            "x\nvar i;\nvar V = numeric." +
            r +
            "eqV;\nvar s = numeric.dim(x);\nnumeric._foreach(x,s,0,V);\nreturn x;\n"
        )),
        (numeric[r + "V"] = numeric.pointwise2(
          ["x[i]"],
          "ret[i] = " + n + "(x[i]);",
          t
        )),
        (numeric[r] = Function(
          "x",
          'if(typeof x !== "object") return ' +
            n +
            "(x)\nvar i;\nvar V = numeric." +
            r +
            "V;\nvar s = numeric.dim(x);\nreturn numeric._foreach2(x,s,0,V);\n"
        )));
    for (r = 0; r < numeric.mathfuns.length; ++r)
      (n = numeric.mathfuns[r]), delete numeric.ops1[n];
    for (r in numeric.mapreducers)
      numeric.mapreducers.hasOwnProperty(r) &&
        ((n = numeric.mapreducers[r]),
        (numeric[r + "V"] = numeric.mapreduce2(n[0], n[1])),
        (numeric[r] = Function(
          "x",
          "s",
          "k",
          n[1] +
            'if(typeof x !== "object") {    xi = x;\n' +
            n[0] +
            ';\n    return accum;\n}if(typeof s === "undefined") s = numeric.dim(x);\nif(typeof k === "undefined") k = 0;\nif(k === s.length-1) return numeric.' +
            r +
            "V(x);\nvar xi;\nvar n = x.length, i;\nfor(i=n-1;i!==-1;--i) {\n   xi = arguments.callee(x[i]);\n" +
            n[0] +
            ";\n}\nreturn accum;\n"
        )));
  })(),
  (numeric.truncVV = numeric.pointwise(
    ["x[i]", "y[i]"],
    "ret[i] = round(x[i]/y[i])*y[i];",
    "var round = Math.round;"
  )),
  (numeric.truncVS = numeric.pointwise(
    ["x[i]", "y"],
    "ret[i] = round(x[i]/y)*y;",
    "var round = Math.round;"
  )),
  (numeric.truncSV = numeric.pointwise(
    ["x", "y[i]"],
    "ret[i] = round(x/y[i])*y[i];",
    "var round = Math.round;"
  )),
  (numeric.trunc = function (r, n) {
    return "object" == typeof r
      ? "object" == typeof n
        ? numeric.truncVV(r, n)
        : numeric.truncVS(r, n)
      : "object" == typeof n
      ? numeric.truncSV(r, n)
      : Math.round(r / n) * n;
  }),
  (numeric.inv = function (r) {
    var n,
      e,
      i,
      t,
      u,
      o,
      c,
      r,
      a = numeric.dim(r),
      f = Math.abs,
      m = a[0],
      s = a[1],
      h = numeric.clone(r),
      l = numeric.identity(m);
    for (o = 0; o < s; ++o) {
      var p = -1,
        y = -1;
      for (u = o; u !== m; ++u) (c = f(h[u][o])) > y && ((p = u), (y = c));
      for (
        e = h[p],
          h[p] = h[o],
          h[o] = e,
          t = l[p],
          l[p] = l[o],
          l[o] = t,
          r = e[o],
          c = o;
        c !== s;
        ++c
      )
        e[c] /= r;
      for (c = s - 1; -1 !== c; --c) t[c] /= r;
      for (u = m - 1; -1 !== u; --u)
        if (u !== o) {
          for (n = h[u], i = l[u], r = n[o], c = o + 1; c !== s; ++c)
            n[c] -= e[c] * r;
          for (c = s - 1; c > 0; --c)
            (i[c] -= t[c] * r), --c, (i[c] -= t[c] * r);
          0 === c && (i[0] -= t[0] * r);
        }
    }
    return l;
  }),
  (numeric.det = function (r) {
    var n = numeric.dim(r);
    if (2 !== n.length || n[0] !== n[1])
      throw new Error("numeric: det() only works on square matrices");
    var e,
      i,
      t,
      u,
      o,
      c,
      a,
      f,
      m = n[0],
      s = 1,
      h = numeric.clone(r);
    for (i = 0; i < m - 1; i++) {
      for (t = i, e = i + 1; e < m; e++)
        Math.abs(h[e][i]) > Math.abs(h[t][i]) && (t = e);
      for (
        t !== i && ((a = h[t]), (h[t] = h[i]), (h[i] = a), (s *= -1)),
          u = h[i],
          e = i + 1;
        e < m;
        e++
      ) {
        for (o = h[e], c = o[i] / u[i], t = i + 1; t < m - 1; t += 2)
          (f = t + 1), (o[t] -= u[t] * c), (o[f] -= u[f] * c);
        t !== m && (o[t] -= u[t] * c);
      }
      if (0 === u[i]) return 0;
      s *= u[i];
    }
    return s * h[i][i];
  }),
  (numeric.transpose = function (r) {
    var n,
      e,
      i,
      t,
      u,
      o = r.length,
      c = r[0].length,
      a = Array(c);
    for (e = 0; e < c; e++) a[e] = Array(o);
    for (n = o - 1; n >= 1; n -= 2) {
      for (t = r[n], i = r[n - 1], e = c - 1; e >= 1; --e)
        (u = a[e]),
          (u[n] = t[e]),
          (u[n - 1] = i[e]),
          --e,
          (u = a[e]),
          (u[n] = t[e]),
          (u[n - 1] = i[e]);
      0 === e && ((u = a[0]), (u[n] = t[0]), (u[n - 1] = i[0]));
    }
    if (0 === n) {
      for (i = r[0], e = c - 1; e >= 1; --e)
        (a[e][0] = i[e]), --e, (a[e][0] = i[e]);
      0 === e && (a[0][0] = i[0]);
    }
    return a;
  }),
  (numeric.negtranspose = function (r) {
    var n,
      e,
      i,
      t,
      u,
      o = r.length,
      c = r[0].length,
      a = Array(c);
    for (e = 0; e < c; e++) a[e] = Array(o);
    for (n = o - 1; n >= 1; n -= 2) {
      for (t = r[n], i = r[n - 1], e = c - 1; e >= 1; --e)
        (u = a[e]),
          (u[n] = -t[e]),
          (u[n - 1] = -i[e]),
          --e,
          (u = a[e]),
          (u[n] = -t[e]),
          (u[n - 1] = -i[e]);
      0 === e && ((u = a[0]), (u[n] = -t[0]), (u[n - 1] = -i[0]));
    }
    if (0 === n) {
      for (i = r[0], e = c - 1; e >= 1; --e)
        (a[e][0] = -i[e]), --e, (a[e][0] = -i[e]);
      0 === e && (a[0][0] = -i[0]);
    }
    return a;
  }),
  (numeric._random = function r(n, e) {
    var i,
      t,
      u = n[e],
      o = Array(u);
    if (e === n.length - 1) {
      for (t = Math.random, i = u - 1; i >= 1; i -= 2)
        (o[i] = t()), (o[i - 1] = t());
      return 0 === i && (o[0] = t()), o;
    }
    for (i = u - 1; i >= 0; i--) o[i] = r(n, e + 1);
    return o;
  }),
  (numeric.random = function (r) {
    return numeric._random(r, 0);
  }),
  (numeric.norm2 = function (r) {
    return Math.sqrt(numeric.norm2Squared(r));
  }),
  (numeric.linspace = function (r, n, e) {
    if ((void 0 === e && (e = Math.max(Math.round(n - r) + 1, 1)), e < 2))
      return 1 === e ? [r] : [];
    var i,
      t = Array(e);
    for (e--, i = e; i >= 0; i--) t[i] = (i * n + (e - i) * r) / e;
    return t;
  }),
  (numeric.getBlock = function (r, n, e) {
    function i(r, u) {
      var o,
        c = n[u],
        a = e[u] - c,
        f = Array(a);
      if (u === t.length - 1) {
        for (o = a; o >= 0; o--) f[o] = r[o + c];
        return f;
      }
      for (o = a; o >= 0; o--) f[o] = i(r[o + c], u + 1);
      return f;
    }
    var t = numeric.dim(r);
    return i(r, 0);
  }),
  (numeric.setBlock = function (r, n, e, i) {
    function t(r, i, o) {
      var c,
        a = n[o],
        f = e[o] - a;
      if (o === u.length - 1) for (c = f; c >= 0; c--) r[c + a] = i[c];
      for (c = f; c >= 0; c--) t(r[c + a], i[c], o + 1);
    }
    var u = numeric.dim(r);
    return t(r, i, 0), r;
  }),
  (numeric.getRange = function (r, n, e) {
    var i,
      t,
      u,
      o,
      c = n.length,
      a = e.length,
      f = Array(c);
    for (i = c - 1; -1 !== i; --i)
      for (f[i] = Array(a), u = f[i], o = r[n[i]], t = a - 1; -1 !== t; --t)
        u[t] = o[e[t]];
    return f;
  }),
  (numeric.blockMatrix = function (r) {
    var n = numeric.dim(r);
    if (n.length < 4) return numeric.blockMatrix([r]);
    var e,
      i,
      t,
      u,
      o,
      c = n[0],
      a = n[1];
    for (e = 0, i = 0, t = 0; t < c; ++t) e += r[t][0].length;
    for (u = 0; u < a; ++u) i += r[0][u][0].length;
    var f = Array(e);
    for (t = 0; t < e; ++t) f[t] = Array(i);
    var m,
      s,
      h,
      l,
      p,
      y = 0;
    for (t = 0; t < c; ++t) {
      for (m = i, u = a - 1; -1 !== u; --u)
        for (o = r[t][u], m -= o[0].length, h = o.length - 1; -1 !== h; --h)
          for (p = o[h], s = f[y + h], l = p.length - 1; -1 !== l; --l)
            s[m + l] = p[l];
      y += r[t][0].length;
    }
    return f;
  }),
  (numeric.tensor = function (r, n) {
    if ("number" == typeof r || "number" == typeof n) return numeric.mul(r, n);
    var e = numeric.dim(r),
      i = numeric.dim(n);
    if (1 !== e.length || 1 !== i.length)
      throw new Error("numeric: tensor product is only defined for vectors");
    var t,
      u,
      o,
      c,
      a = e[0],
      f = i[0],
      m = Array(a);
    for (u = a - 1; u >= 0; u--) {
      for (t = Array(f), c = r[u], o = f - 1; o >= 3; --o)
        (t[o] = c * n[o]),
          --o,
          (t[o] = c * n[o]),
          --o,
          (t[o] = c * n[o]),
          --o,
          (t[o] = c * n[o]);
      for (; o >= 0; ) (t[o] = c * n[o]), --o;
      m[u] = t;
    }
    return m;
  }),
  (numeric.T = function (r, n) {
    (this.x = r), (this.y = n);
  }),
  (numeric.t = function (r, n) {
    return new numeric.T(r, n);
  }),
  (numeric.Tbinop = function (r, n, e, i, t) {
    numeric.indexOf;
    if ("string" != typeof t) {
      var u;
      t = "";
      for (u in numeric)
        numeric.hasOwnProperty(u) &&
          (r.indexOf(u) >= 0 ||
            n.indexOf(u) >= 0 ||
            e.indexOf(u) >= 0 ||
            i.indexOf(u) >= 0) &&
          u.length > 1 &&
          (t += "var " + u + " = numeric." + u + ";\n");
    }
    return Function(
      ["y"],
      "var x = this;\nif(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n" +
        t +
        "\nif(x.y) {  if(y.y) {    return new numeric.T(" +
        i +
        ");\n  }\n  return new numeric.T(" +
        e +
        ");\n}\nif(y.y) {\n  return new numeric.T(" +
        n +
        ");\n}\nreturn new numeric.T(" +
        r +
        ");\n"
    );
  }),
  (numeric.T.prototype.add = numeric.Tbinop(
    "add(x.x,y.x)",
    "add(x.x,y.x),y.y",
    "add(x.x,y.x),x.y",
    "add(x.x,y.x),add(x.y,y.y)"
  )),
  (numeric.T.prototype.sub = numeric.Tbinop(
    "sub(x.x,y.x)",
    "sub(x.x,y.x),neg(y.y)",
    "sub(x.x,y.x),x.y",
    "sub(x.x,y.x),sub(x.y,y.y)"
  )),
  (numeric.T.prototype.mul = numeric.Tbinop(
    "mul(x.x,y.x)",
    "mul(x.x,y.x),mul(x.x,y.y)",
    "mul(x.x,y.x),mul(x.y,y.x)",
    "sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))"
  )),
  (numeric.T.prototype.reciprocal = function () {
    var r = numeric.mul,
      n = numeric.div;
    if (this.y) {
      var e = numeric.add(r(this.x, this.x), r(this.y, this.y));
      return new numeric.T(n(this.x, e), n(numeric.neg(this.y), e));
    }
    return new T(n(1, this.x));
  }),
  (numeric.T.prototype.div = function (r) {
    if ((r instanceof numeric.T || (r = new numeric.T(r)), r.y))
      return this.mul(r.reciprocal());
    var n = numeric.div;
    return this.y
      ? new numeric.T(n(this.x, r.x), n(this.y, r.x))
      : new numeric.T(n(this.x, r.x));
  }),
  (numeric.T.prototype.dot = numeric.Tbinop(
    "dot(x.x,y.x)",
    "dot(x.x,y.x),dot(x.x,y.y)",
    "dot(x.x,y.x),dot(x.y,y.x)",
    "sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))"
  )),
  (numeric.T.prototype.transpose = function () {
    var r = numeric.transpose,
      n = this.x,
      e = this.y;
    return e ? new numeric.T(r(n), r(e)) : new numeric.T(r(n));
  }),
  (numeric.T.prototype.transjugate = function () {
    var r = numeric.transpose,
      n = this.x,
      e = this.y;
    return e
      ? new numeric.T(r(n), numeric.negtranspose(e))
      : new numeric.T(r(n));
  }),
  (numeric.Tunop = function (r, n, e) {
    return (
      "string" != typeof e && (e = ""),
      Function(
        "var x = this;\n" + e + "\nif(x.y) {  " + n + ";\n}\n" + r + ";\n"
      )
    );
  }),
  (numeric.T.prototype.exp = numeric.Tunop(
    "return new numeric.T(ex)",
    "return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))",
    "var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;"
  )),
  (numeric.T.prototype.conj = numeric.Tunop(
    "return new numeric.T(x.x);",
    "return new numeric.T(x.x,numeric.neg(x.y));"
  )),
  (numeric.T.prototype.neg = numeric.Tunop(
    "return new numeric.T(neg(x.x));",
    "return new numeric.T(neg(x.x),neg(x.y));",
    "var neg = numeric.neg;"
  )),
  (numeric.T.prototype.sin = numeric.Tunop(
    "return new numeric.T(numeric.sin(x.x))",
    "return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));"
  )),
  (numeric.T.prototype.cos = numeric.Tunop(
    "return new numeric.T(numeric.cos(x.x))",
    "return x.exp().add(x.neg().exp()).div(2);"
  )),
  (numeric.T.prototype.abs = numeric.Tunop(
    "return new numeric.T(numeric.abs(x.x));",
    "return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));",
    "var mul = numeric.mul;"
  )),
  (numeric.T.prototype.log = numeric.Tunop(
    "return new numeric.T(numeric.log(x.x));",
    "var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\nreturn new numeric.T(numeric.log(r.x),theta.x);"
  )),
  (numeric.T.prototype.norm2 = numeric.Tunop(
    "return numeric.norm2(x.x);",
    "var f = numeric.norm2Squared;\nreturn Math.sqrt(f(x.x)+f(x.y));"
  )),
  (numeric.T.prototype.inv = function () {
    var r = this;
    if (void 0 === r.y) return new numeric.T(numeric.inv(r.x));
    var n,
      e,
      i,
      t,
      u,
      o,
      c,
      a,
      f,
      m,
      s,
      n,
      e,
      i,
      h,
      l,
      p,
      y,
      g,
      v,
      d,
      x = r.x.length,
      b = numeric.identity(x),
      w = numeric.rep([x, x], 0),
      M = numeric.clone(r.x),
      k = numeric.clone(r.y);
    for (n = 0; n < x; n++) {
      for (
        p = M[n][n], y = k[n][n], h = p * p + y * y, i = n, e = n + 1;
        e < x;
        e++
      )
        (p = M[e][n]),
          (y = k[e][n]),
          (l = p * p + y * y) > h && ((i = e), (h = l));
      for (
        i !== n &&
          ((d = M[n]),
          (M[n] = M[i]),
          (M[i] = d),
          (d = k[n]),
          (k[n] = k[i]),
          (k[i] = d),
          (d = b[n]),
          (b[n] = b[i]),
          (b[i] = d),
          (d = w[n]),
          (w[n] = w[i]),
          (w[i] = d)),
          t = M[n],
          u = k[n],
          a = b[n],
          f = w[n],
          p = t[n],
          y = u[n],
          e = n + 1;
        e < x;
        e++
      )
        (g = t[e]),
          (v = u[e]),
          (t[e] = (g * p + v * y) / h),
          (u[e] = (v * p - g * y) / h);
      for (e = 0; e < x; e++)
        (g = a[e]),
          (v = f[e]),
          (a[e] = (g * p + v * y) / h),
          (f[e] = (v * p - g * y) / h);
      for (e = n + 1; e < x; e++) {
        for (
          o = M[e], c = k[e], m = b[e], s = w[e], p = o[n], y = c[n], i = n + 1;
          i < x;
          i++
        )
          (g = t[i]),
            (v = u[i]),
            (o[i] -= g * p - v * y),
            (c[i] -= v * p + g * y);
        for (i = 0; i < x; i++)
          (g = a[i]),
            (v = f[i]),
            (m[i] -= g * p - v * y),
            (s[i] -= v * p + g * y);
      }
    }
    for (n = x - 1; n > 0; n--)
      for (a = b[n], f = w[n], e = n - 1; e >= 0; e--)
        for (
          m = b[e], s = w[e], p = M[e][n], y = k[e][n], i = x - 1;
          i >= 0;
          i--
        )
          (g = a[i]),
            (v = f[i]),
            (m[i] -= p * g - y * v),
            (s[i] -= p * v + y * g);
    return new numeric.T(b, w);
  }),
  (numeric.T.prototype.get = function (r) {
    var n,
      e = this.x,
      i = this.y,
      t = 0,
      u = r.length;
    if (i) {
      for (; t < u; ) (n = r[t]), (e = e[n]), (i = i[n]), t++;
      return new numeric.T(e, i);
    }
    for (; t < u; ) (n = r[t]), (e = e[n]), t++;
    return new numeric.T(e);
  }),
  (numeric.T.prototype.set = function (r, n) {
    var e,
      i = this.x,
      t = this.y,
      u = 0,
      o = r.length,
      c = n.x,
      a = n.y;
    if (0 === o)
      return a ? (this.y = a) : t && (this.y = void 0), (this.x = i), this;
    if (a) {
      for (
        t || ((t = numeric.rep(numeric.dim(i), 0)), (this.y = t));
        u < o - 1;

      )
        (e = r[u]), (i = i[e]), (t = t[e]), u++;
      return (e = r[u]), (i[e] = c), (t[e] = a), this;
    }
    if (t) {
      for (; u < o - 1; ) (e = r[u]), (i = i[e]), (t = t[e]), u++;
      return (
        (e = r[u]),
        (i[e] = c),
        c instanceof Array
          ? (t[e] = numeric.rep(numeric.dim(c), 0))
          : (t[e] = 0),
        this
      );
    }
    for (; u < o - 1; ) (e = r[u]), (i = i[e]), u++;
    return (e = r[u]), (i[e] = c), this;
  }),
  (numeric.T.prototype.getRows = function (r, n) {
    var e,
      i,
      t = n - r + 1,
      u = Array(t),
      o = this.x,
      c = this.y;
    for (e = r; e <= n; e++) u[e - r] = o[e];
    if (c) {
      for (i = Array(t), e = r; e <= n; e++) i[e - r] = c[e];
      return new numeric.T(u, i);
    }
    return new numeric.T(u);
  }),
  (numeric.T.prototype.setRows = function (r, n, e) {
    var i,
      t = this.x,
      u = this.y,
      o = e.x,
      c = e.y;
    for (i = r; i <= n; i++) t[i] = o[i - r];
    if (c)
      for (
        u || ((u = numeric.rep(numeric.dim(t), 0)), (this.y = u)), i = r;
        i <= n;
        i++
      )
        u[i] = c[i - r];
    else if (u)
      for (i = r; i <= n; i++) u[i] = numeric.rep([o[i - r].length], 0);
    return this;
  }),
  (numeric.T.prototype.getRow = function (r) {
    var n = this.x,
      e = this.y;
    return e ? new numeric.T(n[r], e[r]) : new numeric.T(n[r]);
  }),
  (numeric.T.prototype.setRow = function (r, n) {
    var e = this.x,
      i = this.y,
      t = n.x,
      u = n.y;
    return (
      (e[r] = t),
      u
        ? (i || ((i = numeric.rep(numeric.dim(e), 0)), (this.y = i)),
          (i[r] = u))
        : i && (i = numeric.rep([t.length], 0)),
      this
    );
  }),
  (numeric.T.prototype.getBlock = function (r, n) {
    var e = this.x,
      i = this.y,
      t = numeric.getBlock;
    return i
      ? new numeric.T(t(e, r, n), t(i, r, n))
      : new numeric.T(t(e, r, n));
  }),
  (numeric.T.prototype.setBlock = function (r, n, e) {
    e instanceof numeric.T || (e = new numeric.T(e));
    var i = this.x,
      t = this.y,
      u = numeric.setBlock,
      o = e.x,
      c = e.y;
    if (c)
      return (
        t || ((this.y = numeric.rep(numeric.dim(this), 0)), (t = this.y)),
        u(i, r, n, o),
        u(t, r, n, c),
        this
      );
    u(i, r, n, o), t && u(t, r, n, numeric.rep(numeric.dim(o), 0));
  }),
  (numeric.T.rep = function (r, n) {
    var e = numeric.T;
    n instanceof e || (n = new e(n));
    var i = n.x,
      t = n.y,
      u = numeric.rep;
    return t ? new e(u(r, i), u(r, t)) : new e(u(r, i));
  }),
  (numeric.T.diag = function (r) {
    r instanceof numeric.T || (r = new numeric.T(r));
    var n = r.x,
      e = r.y,
      i = numeric.diag;
    return e ? new numeric.T(i(n), i(e)) : new numeric.T(i(n));
  }),
  (numeric.T.eig = function () {
    if (this.y) throw new Error("eig: not implemented for complex matrices.");
    return numeric.eig(this.x);
  }),
  (numeric.T.identity = function (r) {
    return new numeric.T(numeric.identity(r));
  }),
  (numeric.T.prototype.getDiag = function () {
    var r = numeric,
      n = this.x,
      e = this.y;
    return e ? new r.T(r.getDiag(n), r.getDiag(e)) : new r.T(r.getDiag(n));
  }),
  (numeric.house = function (r) {
    var n = numeric.clone(r),
      e = r[0] >= 0 ? 1 : -1,
      i = e * numeric.norm2(r);
    n[0] += i;
    var t = numeric.norm2(n);
    if (0 === t) throw new Error("eig: internal error");
    return numeric.div(n, t);
  }),
  (numeric.toUpperHessenberg = function (r) {
    var n = numeric.dim(r);
    if (2 !== n.length || n[0] !== n[1])
      throw new Error(
        "numeric: toUpperHessenberg() only works on square matrices"
      );
    var e,
      i,
      t,
      u,
      o,
      c,
      a,
      f,
      m,
      s,
      h = n[0],
      l = numeric.clone(r),
      p = numeric.identity(h);
    for (i = 0; i < h - 2; i++) {
      for (u = Array(h - i - 1), e = i + 1; e < h; e++) u[e - i - 1] = l[e][i];
      if (numeric.norm2(u) > 0) {
        for (
          o = numeric.house(u),
            c = numeric.getBlock(l, [i + 1, i], [h - 1, h - 1]),
            a = numeric.tensor(o, numeric.dot(o, c)),
            e = i + 1;
          e < h;
          e++
        )
          for (f = l[e], m = a[e - i - 1], t = i; t < h; t++)
            f[t] -= 2 * m[t - i];
        for (
          c = numeric.getBlock(l, [0, i + 1], [h - 1, h - 1]),
            a = numeric.tensor(numeric.dot(c, o), o),
            e = 0;
          e < h;
          e++
        )
          for (f = l[e], m = a[e], t = i + 1; t < h; t++)
            f[t] -= 2 * m[t - i - 1];
        for (c = Array(h - i - 1), e = i + 1; e < h; e++) c[e - i - 1] = p[e];
        for (a = numeric.tensor(o, numeric.dot(o, c)), e = i + 1; e < h; e++)
          for (s = p[e], m = a[e - i - 1], t = 0; t < h; t++) s[t] -= 2 * m[t];
      }
    }
    return { H: l, Q: p };
  }),
  (numeric.epsilon = 2.220446049250313e-16),
  (numeric.QRFrancis = function (r, n) {
    void 0 === n && (n = 1e4), (r = numeric.clone(r));
    var e,
      i,
      t,
      u,
      o,
      c,
      a,
      f,
      m,
      s,
      h,
      l,
      p,
      y,
      g,
      v,
      d,
      x,
      b = (numeric.clone(r), numeric.dim(r)),
      w = b[0],
      M = numeric.identity(w);
    if (w < 3) return { Q: M, B: [[0, w - 1]] };
    var k = numeric.epsilon;
    for (x = 0; x < n; x++) {
      for (v = 0; v < w - 1; v++)
        if (
          Math.abs(r[v + 1][v]) <
          k * (Math.abs(r[v][v]) + Math.abs(r[v + 1][v + 1]))
        ) {
          var A = numeric.QRFrancis(numeric.getBlock(r, [0, 0], [v, v]), n),
            T = numeric.QRFrancis(
              numeric.getBlock(r, [v + 1, v + 1], [w - 1, w - 1]),
              n
            );
          for (l = Array(v + 1), g = 0; g <= v; g++) l[g] = M[g];
          for (p = numeric.dot(A.Q, l), g = 0; g <= v; g++) M[g] = p[g];
          for (l = Array(w - v - 1), g = v + 1; g < w; g++) l[g - v - 1] = M[g];
          for (p = numeric.dot(T.Q, l), g = v + 1; g < w; g++)
            M[g] = p[g - v - 1];
          return { Q: M, B: A.B.concat(numeric.add(T.B, v + 1)) };
        }
      if (
        ((t = r[w - 2][w - 2]),
        (u = r[w - 2][w - 1]),
        (o = r[w - 1][w - 2]),
        (c = r[w - 1][w - 1]),
        (f = t + c),
        (a = t * c - u * o),
        (m = numeric.getBlock(r, [0, 0], [2, 2])),
        f * f >= 4 * a)
      ) {
        var j, S;
        (j = 0.5 * (f + Math.sqrt(f * f - 4 * a))),
          (S = 0.5 * (f - Math.sqrt(f * f - 4 * a))),
          (m = numeric.add(
            numeric.sub(numeric.dot(m, m), numeric.mul(m, j + S)),
            numeric.diag(numeric.rep([3], j * S))
          ));
      } else
        m = numeric.add(
          numeric.sub(numeric.dot(m, m), numeric.mul(m, f)),
          numeric.diag(numeric.rep([3], a))
        );
      for (
        e = [m[0][0], m[1][0], m[2][0]],
          i = numeric.house(e),
          l = [r[0], r[1], r[2]],
          p = numeric.tensor(i, numeric.dot(i, l)),
          g = 0;
        g < 3;
        g++
      )
        for (h = r[g], y = p[g], d = 0; d < w; d++) h[d] -= 2 * y[d];
      for (
        l = numeric.getBlock(r, [0, 0], [w - 1, 2]),
          p = numeric.tensor(numeric.dot(l, i), i),
          g = 0;
        g < w;
        g++
      )
        for (h = r[g], y = p[g], d = 0; d < 3; d++) h[d] -= 2 * y[d];
      for (
        l = [M[0], M[1], M[2]], p = numeric.tensor(i, numeric.dot(i, l)), g = 0;
        g < 3;
        g++
      )
        for (s = M[g], y = p[g], d = 0; d < w; d++) s[d] -= 2 * y[d];
      var _;
      for (v = 0; v < w - 2; v++) {
        for (d = v; d <= v + 1; d++)
          if (
            Math.abs(r[d + 1][d]) <
            k * (Math.abs(r[d][d]) + Math.abs(r[d + 1][d + 1]))
          ) {
            var A = numeric.QRFrancis(numeric.getBlock(r, [0, 0], [d, d]), n),
              T = numeric.QRFrancis(
                numeric.getBlock(r, [d + 1, d + 1], [w - 1, w - 1]),
                n
              );
            for (l = Array(d + 1), g = 0; g <= d; g++) l[g] = M[g];
            for (p = numeric.dot(A.Q, l), g = 0; g <= d; g++) M[g] = p[g];
            for (l = Array(w - d - 1), g = d + 1; g < w; g++)
              l[g - d - 1] = M[g];
            for (p = numeric.dot(T.Q, l), g = d + 1; g < w; g++)
              M[g] = p[g - d - 1];
            return { Q: M, B: A.B.concat(numeric.add(T.B, d + 1)) };
          }
        for (
          _ = Math.min(w - 1, v + 3), e = Array(_ - v), g = v + 1;
          g <= _;
          g++
        )
          e[g - v - 1] = r[g][v];
        for (
          i = numeric.house(e),
            l = numeric.getBlock(r, [v + 1, v], [_, w - 1]),
            p = numeric.tensor(i, numeric.dot(i, l)),
            g = v + 1;
          g <= _;
          g++
        )
          for (h = r[g], y = p[g - v - 1], d = v; d < w; d++)
            h[d] -= 2 * y[d - v];
        for (
          l = numeric.getBlock(r, [0, v + 1], [w - 1, _]),
            p = numeric.tensor(numeric.dot(l, i), i),
            g = 0;
          g < w;
          g++
        )
          for (h = r[g], y = p[g], d = v + 1; d <= _; d++)
            h[d] -= 2 * y[d - v - 1];
        for (l = Array(_ - v), g = v + 1; g <= _; g++) l[g - v - 1] = M[g];
        for (p = numeric.tensor(i, numeric.dot(i, l)), g = v + 1; g <= _; g++)
          for (s = M[g], y = p[g - v - 1], d = 0; d < w; d++) s[d] -= 2 * y[d];
      }
    }
    throw new Error(
      "numeric: eigenvalue iteration does not converge -- increase maxiter?"
    );
  }),
  (numeric.eig = function (r, n) {
    var e,
      i,
      t,
      u,
      o,
      c,
      a,
      f,
      m,
      s,
      h,
      l,
      p,
      y,
      g,
      v,
      d,
      x = numeric.toUpperHessenberg(r),
      b = numeric.QRFrancis(x.H, n),
      w = numeric.T,
      M = r.length,
      k = b.B,
      A = numeric.dot(b.Q, numeric.dot(x.H, numeric.transpose(b.Q))),
      T = new w(numeric.dot(b.Q, x.Q)),
      j = k.length,
      S = Math.sqrt;
    for (i = 0; i < j; i++)
      if ((e = k[i][0]) === k[i][1]);
      else {
        if (
          ((u = e + 1),
          (o = A[e][e]),
          (c = A[e][u]),
          (a = A[u][e]),
          (f = A[u][u]),
          0 === c && 0 === a)
        )
          continue;
        (m = -o - f),
          (s = o * f - c * a),
          (h = m * m - 4 * s),
          h >= 0
            ? ((l = m < 0 ? -0.5 * (m - S(h)) : -0.5 * (m + S(h))),
              (v = (o - l) * (o - l) + c * c),
              (d = a * a + (f - l) * (f - l)),
              v > d
                ? ((v = S(v)), (y = (o - l) / v), (g = c / v))
                : ((d = S(d)), (y = a / d), (g = (f - l) / d)),
              (t = new w([
                [g, -y],
                [y, g],
              ])),
              T.setRows(e, u, t.dot(T.getRows(e, u))))
            : ((l = -0.5 * m),
              (p = 0.5 * S(-h)),
              (v = (o - l) * (o - l) + c * c),
              (d = a * a + (f - l) * (f - l)),
              v > d
                ? ((v = S(v + p * p)),
                  (y = (o - l) / v),
                  (g = c / v),
                  (l = 0),
                  (p /= v))
                : ((d = S(d + p * p)),
                  (y = a / d),
                  (g = (f - l) / d),
                  (l = p / d),
                  (p = 0)),
              (t = new w(
                [
                  [g, -y],
                  [y, g],
                ],
                [
                  [l, p],
                  [p, -l],
                ]
              )),
              T.setRows(e, u, t.dot(T.getRows(e, u))));
      }
    var _ = T.dot(r).dot(T.transjugate()),
      M = r.length,
      V = numeric.T.identity(M);
    for (u = 0; u < M; u++)
      if (u > 0)
        for (i = u - 1; i >= 0; i--) {
          var P = _.get([i, i]),
            q = _.get([u, u]);
          numeric.neq(P.x, q.x) || numeric.neq(P.y, q.y)
            ? ((l = _.getRow(i).getBlock([i], [u - 1])),
              (p = V.getRow(u).getBlock([i], [u - 1])),
              V.set([u, i], _.get([i, u]).neg().sub(l.dot(p)).div(P.sub(q))))
            : V.setRow(u, V.getRow(i));
        }
    for (u = 0; u < M; u++) (l = V.getRow(u)), V.setRow(u, l.div(l.norm2()));
    return (
      (V = V.transpose()),
      (V = T.transjugate().dot(V)),
      { lambda: _.getDiag(), E: V }
    );
  }),
  (numeric.ccsSparse = function (r) {
    var n,
      e,
      i,
      t,
      u = r.length,
      o = [];
    for (i = u - 1; -1 !== i; --i) {
      e = r[i];
      for (t in e) {
        for (t = parseInt(t); t >= o.length; ) o[o.length] = 0;
        0 !== e[t] && o[t]++;
      }
    }
    var n = o.length,
      c = Array(n + 1);
    for (c[0] = 0, i = 0; i < n; ++i) c[i + 1] = c[i] + o[i];
    var a = Array(c[n]),
      f = Array(c[n]);
    for (i = u - 1; -1 !== i; --i) {
      e = r[i];
      for (t in e)
        0 !== e[t] && (o[t]--, (a[c[t] + o[t]] = i), (f[c[t] + o[t]] = e[t]));
    }
    return [c, a, f];
  }),
  (numeric.ccsFull = function (r) {
    var n,
      e,
      i,
      t,
      u = r[0],
      o = r[1],
      c = r[2],
      a = numeric.ccsDim(r),
      f = a[0],
      m = a[1],
      s = numeric.rep([f, m], 0);
    for (n = 0; n < m; n++)
      for (i = u[n], t = u[n + 1], e = i; e < t; ++e) s[o[e]][n] = c[e];
    return s;
  }),
  (numeric.ccsTSolve = function (r, n, e, i, t) {
    function u(r) {
      var n;
      if (0 === e[r]) {
        for (e[r] = 1, n = o[r]; n < o[r + 1]; ++n) u(c[n]);
        (t[s] = r), ++s;
      }
    }
    var o = r[0],
      c = r[1],
      a = r[2],
      f = o.length - 1,
      m = Math.max,
      s = 0;
    void 0 === i && (e = numeric.rep([f], 0)),
      void 0 === i && (i = numeric.linspace(0, e.length - 1)),
      void 0 === t && (t = []);
    var h, l, p, y, g, v, d;
    for (h = i.length - 1; -1 !== h; --h) u(i[h]);
    for (t.length = s, h = t.length - 1; -1 !== h; --h) e[t[h]] = 0;
    for (h = i.length - 1; -1 !== h; --h) (l = i[h]), (e[l] = n[l]);
    for (h = t.length - 1; -1 !== h; --h) {
      for (l = t[h], p = o[l], y = m(o[l + 1], p), g = p; g !== y; ++g)
        if (c[g] === l) {
          e[l] /= a[g];
          break;
        }
      for (d = e[l], g = p; g !== y; ++g)
        (v = c[g]) !== l && (e[v] -= d * a[g]);
    }
    return e;
  }),
  (numeric.ccsDFS = function (r) {
    (this.k = Array(r)), (this.k1 = Array(r)), (this.j = Array(r));
  }),
  (numeric.ccsDFS.prototype.dfs = function (r, n, e, i, t, u) {
    var o,
      c,
      a,
      f = 0,
      m = t.length,
      s = this.k,
      h = this.k1,
      l = this.j;
    if (0 === i[r])
      for (i[r] = 1, l[0] = r, s[0] = c = n[r], h[0] = a = n[r + 1]; ; )
        if (c >= a) {
          if (((t[m] = l[f]), 0 === f)) return;
          ++m, --f, (c = s[f]), (a = h[f]);
        } else
          (o = u[e[c]]),
            0 === i[o]
              ? ((i[o] = 1),
                (s[f] = c),
                ++f,
                (l[f] = o),
                (c = n[o]),
                (h[f] = a = n[o + 1]))
              : ++c;
  }),
  (numeric.ccsLPSolve = function (r, n, e, i, t, u, o) {
    var c,
      a,
      f,
      m,
      s,
      h,
      l,
      p,
      y,
      g = r[0],
      v = r[1],
      d = r[2],
      x = (g.length, n[0]),
      b = n[1],
      w = n[2];
    for (a = x[t], f = x[t + 1], i.length = 0, c = a; c < f; ++c)
      o.dfs(u[b[c]], g, v, e, i, u);
    for (c = i.length - 1; -1 !== c; --c) e[i[c]] = 0;
    for (c = a; c !== f; ++c) (m = u[b[c]]), (e[m] = w[c]);
    for (c = i.length - 1; -1 !== c; --c) {
      for (m = i[c], s = g[m], h = g[m + 1], l = s; l < h; ++l)
        if (u[v[l]] === m) {
          e[m] /= d[l];
          break;
        }
      for (y = e[m], l = s; l < h; ++l)
        (p = u[v[l]]) !== m && (e[p] -= y * d[l]);
    }
    return e;
  }),
  (numeric.ccsLUP1 = function (r, n) {
    var e,
      i,
      t,
      u,
      o,
      c,
      a,
      f = r[0].length - 1,
      m = [numeric.rep([f + 1], 0), [], []],
      s = [numeric.rep([f + 1], 0), [], []],
      h = m[0],
      l = m[1],
      p = m[2],
      y = s[0],
      g = s[1],
      v = s[2],
      d = numeric.rep([f], 0),
      x = numeric.rep([f], 0),
      b = numeric.ccsLPSolve,
      w = (Math.max, Math.abs),
      M = numeric.linspace(0, f - 1),
      k = numeric.linspace(0, f - 1),
      A = new numeric.ccsDFS(f);
    for (void 0 === n && (n = 1), e = 0; e < f; ++e) {
      for (
        b(m, r, d, x, e, k, A), u = -1, o = -1, i = x.length - 1;
        -1 !== i;
        --i
      )
        (t = x[i]) <= e || ((c = w(d[t])) > u && ((o = t), (u = c)));
      for (
        w(d[e]) < n * u &&
          ((i = M[e]),
          (u = M[o]),
          (M[e] = u),
          (k[u] = e),
          (M[o] = i),
          (k[i] = o),
          (u = d[e]),
          (d[e] = d[o]),
          (d[o] = u)),
          u = h[e],
          o = y[e],
          a = d[e],
          l[u] = M[e],
          p[u] = 1,
          ++u,
          i = x.length - 1;
        -1 !== i;
        --i
      )
        (t = x[i]),
          (c = d[t]),
          (x[i] = 0),
          (d[t] = 0),
          t <= e
            ? ((g[o] = t), (v[o] = c), ++o)
            : ((l[u] = M[t]), (p[u] = c / a), ++u);
      (h[e + 1] = u), (y[e + 1] = o);
    }
    for (i = l.length - 1; -1 !== i; --i) l[i] = k[l[i]];
    return { L: m, U: s, P: M, Pinv: k };
  }),
  (numeric.ccsDFS0 = function (r) {
    (this.k = Array(r)), (this.k1 = Array(r)), (this.j = Array(r));
  }),
  (numeric.ccsDFS0.prototype.dfs = function (r, n, e, i, t, u, o) {
    var c,
      a,
      f,
      m = 0,
      s = t.length,
      h = this.k,
      l = this.k1,
      p = this.j;
    if (0 === i[r])
      for (i[r] = 1, p[0] = r, h[0] = a = n[u[r]], l[0] = f = n[u[r] + 1]; ; ) {
        if (isNaN(a)) throw new Error("Ow!");
        if (a >= f) {
          if (((t[s] = u[p[m]]), 0 === m)) return;
          ++s, --m, (a = h[m]), (f = l[m]);
        } else
          (c = e[a]),
            0 === i[c]
              ? ((i[c] = 1),
                (h[m] = a),
                ++m,
                (p[m] = c),
                (c = u[c]),
                (a = n[c]),
                (l[m] = f = n[c + 1]))
              : ++a;
      }
  }),
  (numeric.ccsLPSolve0 = function (r, n, e, i, t, u, o, c) {
    var a,
      f,
      m,
      s,
      h,
      l,
      p,
      y,
      g,
      v = r[0],
      d = r[1],
      x = r[2],
      b = (v.length, n[0]),
      w = n[1],
      M = n[2];
    for (f = b[t], m = b[t + 1], i.length = 0, a = f; a < m; ++a)
      c.dfs(w[a], v, d, e, i, u, o);
    for (a = i.length - 1; -1 !== a; --a) (s = i[a]), (e[o[s]] = 0);
    for (a = f; a !== m; ++a) (s = w[a]), (e[s] = M[a]);
    for (a = i.length - 1; -1 !== a; --a) {
      for (s = i[a], y = o[s], h = v[s], l = v[s + 1], p = h; p < l; ++p)
        if (d[p] === y) {
          e[y] /= x[p];
          break;
        }
      for (g = e[y], p = h; p < l; ++p) e[d[p]] -= g * x[p];
      e[y] = g;
    }
  }),
  (numeric.ccsLUP0 = function (r, n) {
    var e,
      i,
      t,
      u,
      o,
      c,
      a,
      f = r[0].length - 1,
      m = [numeric.rep([f + 1], 0), [], []],
      s = [numeric.rep([f + 1], 0), [], []],
      h = m[0],
      l = m[1],
      p = m[2],
      y = s[0],
      g = s[1],
      v = s[2],
      d = numeric.rep([f], 0),
      x = numeric.rep([f], 0),
      b = numeric.ccsLPSolve0,
      w = (Math.max, Math.abs),
      M = numeric.linspace(0, f - 1),
      k = numeric.linspace(0, f - 1),
      A = new numeric.ccsDFS0(f);
    for (void 0 === n && (n = 1), e = 0; e < f; ++e) {
      for (
        b(m, r, d, x, e, k, M, A), u = -1, o = -1, i = x.length - 1;
        -1 !== i;
        --i
      )
        (t = x[i]) <= e || ((c = w(d[M[t]])) > u && ((o = t), (u = c)));
      for (
        w(d[M[e]]) < n * u &&
          ((i = M[e]),
          (u = M[o]),
          (M[e] = u),
          (k[u] = e),
          (M[o] = i),
          (k[i] = o)),
          u = h[e],
          o = y[e],
          a = d[M[e]],
          l[u] = M[e],
          p[u] = 1,
          ++u,
          i = x.length - 1;
        -1 !== i;
        --i
      )
        (t = x[i]),
          (c = d[M[t]]),
          (x[i] = 0),
          (d[M[t]] = 0),
          t <= e
            ? ((g[o] = t), (v[o] = c), ++o)
            : ((l[u] = M[t]), (p[u] = c / a), ++u);
      (h[e + 1] = u), (y[e + 1] = o);
    }
    for (i = l.length - 1; -1 !== i; --i) l[i] = k[l[i]];
    return { L: m, U: s, P: M, Pinv: k };
  }),
  (numeric.ccsLUP = numeric.ccsLUP0),
  (numeric.ccsDim = function (r) {
    return [numeric.sup(r[1]) + 1, r[0].length - 1];
  }),
  (numeric.ccsGetBlock = function (r, n, e) {
    var i = numeric.ccsDim(r),
      t = i[0],
      u = i[1];
    void 0 === n
      ? (n = numeric.linspace(0, t - 1))
      : "number" == typeof n && (n = [n]),
      void 0 === e
        ? (e = numeric.linspace(0, u - 1))
        : "number" == typeof e && (e = [e]);
    var o,
      c,
      a,
      f,
      m,
      s = n.length,
      h = e.length,
      l = numeric.rep([u], 0),
      p = [],
      y = [],
      g = [l, p, y],
      v = r[0],
      d = r[1],
      x = r[2],
      b = numeric.rep([t], 0),
      w = 0,
      M = numeric.rep([t], 0);
    for (c = 0; c < h; ++c) {
      f = e[c];
      var k = v[f],
        A = v[f + 1];
      for (o = k; o < A; ++o) (a = d[o]), (M[a] = 1), (b[a] = x[o]);
      for (o = 0; o < s; ++o)
        (m = n[o]), M[m] && ((p[w] = o), (y[w] = b[n[o]]), ++w);
      for (o = k; o < A; ++o) (a = d[o]), (M[a] = 0);
      l[c + 1] = w;
    }
    return g;
  }),
  (numeric.ccsDot = function (r, n) {
    var e,
      i,
      t,
      u,
      o,
      c,
      a,
      f,
      m,
      s,
      h,
      l = r[0],
      p = r[1],
      y = r[2],
      g = n[0],
      v = n[1],
      d = n[2],
      x = numeric.ccsDim(r),
      b = numeric.ccsDim(n),
      w = x[0],
      M = (x[1], b[1]),
      k = numeric.rep([w], 0),
      A = numeric.rep([w], 0),
      T = Array(w),
      j = numeric.rep([M], 0),
      S = [],
      _ = [],
      V = [j, S, _];
    for (t = 0; t !== M; ++t) {
      for (u = g[t], o = g[t + 1], m = 0, i = u; i < o; ++i)
        for (s = v[i], h = d[i], c = l[s], a = l[s + 1], e = c; e < a; ++e)
          (f = p[e]),
            0 === A[f] && ((T[m] = f), (A[f] = 1), (m += 1)),
            (k[f] = k[f] + y[e] * h);
      for (u = j[t], o = u + m, j[t + 1] = o, i = m - 1; -1 !== i; --i)
        (h = u + i),
          (e = T[i]),
          (S[h] = e),
          (_[h] = k[e]),
          (A[e] = 0),
          (k[e] = 0);
      j[t + 1] = j[t] + m;
    }
    return V;
  }),
  (numeric.ccsLUPSolve = function (r, n) {
    var e = r.L,
      i = r.U,
      t = (r.P, n[0]),
      u = !1;
    "object" != typeof t &&
      ((n = [[0, n.length], numeric.linspace(0, n.length - 1), n]),
      (t = n[0]),
      (u = !0));
    var o,
      c,
      a,
      f,
      m,
      s,
      h = n[1],
      l = n[2],
      p = e[0].length - 1,
      y = t.length - 1,
      g = numeric.rep([p], 0),
      v = Array(p),
      d = numeric.rep([p], 0),
      x = Array(p),
      b = numeric.rep([y + 1], 0),
      w = [],
      M = [],
      k = numeric.ccsTSolve,
      A = 0;
    for (o = 0; o < y; ++o) {
      for (m = 0, a = t[o], f = t[o + 1], c = a; c < f; ++c)
        (s = r.Pinv[h[c]]), (x[m] = s), (d[s] = l[c]), ++m;
      for (x.length = m, k(e, d, g, x, v), c = x.length - 1; -1 !== c; --c)
        d[x[c]] = 0;
      if ((k(i, g, d, v, x), u)) return d;
      for (c = v.length - 1; -1 !== c; --c) g[v[c]] = 0;
      for (c = x.length - 1; -1 !== c; --c)
        (s = x[c]), (w[A] = s), (M[A] = d[s]), (d[s] = 0), ++A;
      b[o + 1] = A;
    }
    return [b, w, M];
  }),
  (numeric.ccsbinop = function (r, n) {
    return (
      void 0 === n && (n = ""),
      Function(
        "X",
        "Y",
        "var Xi = X[0], Xj = X[1], Xv = X[2];\nvar Yi = Y[0], Yj = Y[1], Yv = Y[2];\nvar n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\nvar Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\nvar x = numeric.rep([m],0),y = numeric.rep([m],0);\nvar xk,yk,zk;\nvar i,j,j0,j1,k,p=0;\n" +
          n +
          "for(i=0;i<n;++i) {\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Xj[j];\n    x[k] = 1;\n    Zj[p] = k;\n    ++p;\n  }\n  j0 = Yi[i]; j1 = Yi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Yj[j];\n    y[k] = Yv[j];\n    if(x[k] === 0) {\n      Zj[p] = k;\n      ++p;\n    }\n  }\n  Zi[i+1] = p;\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n  j0 = Zi[i]; j1 = Zi[i+1];\n  for(j=j0;j!==j1;++j) {\n    k = Zj[j];\n    xk = x[k];\n    yk = y[k];\n" +
          r +
          "\n    Zv[j] = zk;\n  }\n  j0 = Xi[i]; j1 = Xi[i+1];\n  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n  j0 = Yi[i]; j1 = Yi[i+1];\n  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n}\nreturn [Zi,Zj,Zv];"
      )
    );
  }),
  (function () {
    var k, A, B, C;
    for (k in numeric.ops2)
      (A = isFinite(eval("1" + numeric.ops2[k] + "0"))
        ? "[Y[0],Y[1],numeric." + k + "(X,Y[2])]"
        : "NaN"),
        (B = isFinite(eval("0" + numeric.ops2[k] + "1"))
          ? "[X[0],X[1],numeric." + k + "(X[2],Y)]"
          : "NaN"),
        (C =
          isFinite(eval("1" + numeric.ops2[k] + "0")) &&
          isFinite(eval("0" + numeric.ops2[k] + "1"))
            ? "numeric.ccs" + k + "MM(X,Y)"
            : "NaN"),
        (numeric["ccs" + k + "MM"] = numeric.ccsbinop(
          "zk = xk " + numeric.ops2[k] + "yk;"
        )),
        (numeric["ccs" + k] = Function(
          "X",
          "Y",
          'if(typeof X === "number") return ' +
            A +
            ';\nif(typeof Y === "number") return ' +
            B +
            ";\nreturn " +
            C +
            ";\n"
        ));
  })(),
  (numeric.ccsScatter = function (r) {
    var n,
      e = r[0],
      i = r[1],
      t = r[2],
      u = numeric.sup(i) + 1,
      o = e.length,
      c = numeric.rep([u], 0),
      a = Array(o),
      f = Array(o),
      m = numeric.rep([u], 0);
    for (n = 0; n < o; ++n) m[i[n]]++;
    for (n = 0; n < u; ++n) c[n + 1] = c[n] + m[n];
    var s,
      h,
      l = c.slice(0);
    for (n = 0; n < o; ++n)
      (h = i[n]), (s = l[h]), (a[s] = e[n]), (f[s] = t[n]), (l[h] = l[h] + 1);
    return [c, a, f];
  }),
  (numeric.ccsGather = function (r) {
    var n,
      e,
      i,
      t,
      u,
      o = r[0],
      c = r[1],
      a = r[2],
      f = o.length - 1,
      m = c.length,
      s = Array(m),
      h = Array(m),
      l = Array(m);
    for (u = 0, n = 0; n < f; ++n)
      for (i = o[n], t = o[n + 1], e = i; e !== t; ++e)
        (h[u] = n), (s[u] = c[e]), (l[u] = a[e]), ++u;
    return [s, h, l];
  }),
  (numeric.sdim = function r(n, e, i) {
    if ((void 0 === e && (e = []), "object" != typeof n)) return e;
    void 0 === i && (i = 0),
      i in e || (e[i] = 0),
      n.length > e[i] && (e[i] = n.length);
    var t;
    for (t in n) n.hasOwnProperty(t) && r(n[t], e, i + 1);
    return e;
  }),
  (numeric.sclone = function r(n, e, i) {
    void 0 === e && (e = 0), void 0 === i && (i = numeric.sdim(n).length);
    var t,
      u = Array(n.length);
    if (e === i - 1) {
      for (t in n) n.hasOwnProperty(t) && (u[t] = n[t]);
      return u;
    }
    for (t in n) n.hasOwnProperty(t) && (u[t] = r(n[t], e + 1, i));
    return u;
  }),
  (numeric.sdiag = function (r) {
    var n,
      e,
      i = r.length,
      t = Array(i);
    for (n = i - 1; n >= 1; n -= 2)
      (e = n - 1), (t[n] = []), (t[n][n] = r[n]), (t[e] = []), (t[e][e] = r[e]);
    return 0 === n && ((t[0] = []), (t[0][0] = r[n])), t;
  }),
  (numeric.sidentity = function (r) {
    return numeric.sdiag(numeric.rep([r], 1));
  }),
  (numeric.stranspose = function (r) {
    var n,
      e,
      i,
      t = [];
    r.length;
    for (n in r)
      if (r.hasOwnProperty(n)) {
        i = r[n];
        for (e in i)
          i.hasOwnProperty(e) &&
            ("object" != typeof t[e] && (t[e] = []), (t[e][n] = i[e]));
      }
    return t;
  }),
  (numeric.sLUP = function (r, n) {
    throw new Error(
      "The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead."
    );
  }),
  (numeric.sdotMM = function (r, n) {
    var e,
      i,
      t,
      u,
      o,
      c,
      a,
      f = r.length,
      m = (n.length, numeric.stranspose(n)),
      s = m.length,
      h = Array(f);
    for (t = f - 1; t >= 0; t--) {
      for (a = [], e = r[t], o = s - 1; o >= 0; o--) {
        (c = 0), (i = m[o]);
        for (u in e) e.hasOwnProperty(u) && u in i && (c += e[u] * i[u]);
        c && (a[o] = c);
      }
      h[t] = a;
    }
    return h;
  }),
  (numeric.sdotMV = function (r, n) {
    var e,
      i,
      t,
      u,
      o = r.length,
      c = Array(o);
    for (i = o - 1; i >= 0; i--) {
      (e = r[i]), (u = 0);
      for (t in e) e.hasOwnProperty(t) && n[t] && (u += e[t] * n[t]);
      u && (c[i] = u);
    }
    return c;
  }),
  (numeric.sdotVM = function (r, n) {
    var e,
      i,
      t,
      u,
      o = [];
    for (e in r)
      if (r.hasOwnProperty(e)) {
        (t = n[e]), (u = r[e]);
        for (i in t)
          t.hasOwnProperty(i) && (o[i] || (o[i] = 0), (o[i] += u * t[i]));
      }
    return o;
  }),
  (numeric.sdotVV = function (r, n) {
    var e,
      i = 0;
    for (e in r) r[e] && n[e] && (i += r[e] * n[e]);
    return i;
  }),
  (numeric.sdot = function (r, n) {
    var e = numeric.sdim(r).length,
      i = numeric.sdim(n).length;
    switch (1e3 * e + i) {
      case 0:
        return r * n;
      case 1001:
        return numeric.sdotVV(r, n);
      case 2001:
        return numeric.sdotMV(r, n);
      case 1002:
        return numeric.sdotVM(r, n);
      case 2002:
        return numeric.sdotMM(r, n);
      default:
        throw new Error(
          "numeric.sdot not implemented for tensors of order " + e + " and " + i
        );
    }
  }),
  (numeric.sscatter = function (r) {
    var n,
      e,
      i,
      t,
      u = r[0].length,
      o = r.length,
      c = [];
    for (e = u - 1; e >= 0; --e)
      if (r[o - 1][e]) {
        for (t = c, i = 0; i < o - 2; i++)
          (n = r[i][e]), t[n] || (t[n] = []), (t = t[n]);
        t[r[i][e]] = r[i + 1][e];
      }
    return c;
  }),
  (numeric.sgather = function r(n, e, i) {
    void 0 === e && (e = []), void 0 === i && (i = []);
    var t, u, o;
    t = i.length;
    for (u in n)
      if (n.hasOwnProperty(u))
        if (((i[t] = parseInt(u)), "number" == typeof (o = n[u]))) {
          if (o) {
            if (0 === e.length) for (u = t + 1; u >= 0; --u) e[u] = [];
            for (u = t; u >= 0; --u) e[u].push(i[u]);
            e[t + 1].push(o);
          }
        } else r(o, e, i);
    return i.length > t && i.pop(), e;
  }),
  (numeric.cLU = function (r) {
    var n,
      e,
      i,
      t,
      u,
      o,
      c = r[0],
      a = r[1],
      f = r[2],
      m = c.length,
      s = 0;
    for (n = 0; n < m; n++) c[n] > s && (s = c[n]);
    s++;
    var h,
      l,
      p,
      y = Array(s),
      g = Array(s),
      v = numeric.rep([s], 1 / 0),
      d = numeric.rep([s], -1 / 0);
    for (i = 0; i < m; i++)
      (n = c[i]), (e = a[i]), e < v[n] && (v[n] = e), e > d[n] && (d[n] = e);
    for (n = 0; n < s - 1; n++) d[n] > d[n + 1] && (d[n + 1] = d[n]);
    for (n = s - 1; n >= 1; n--) v[n] < v[n - 1] && (v[n - 1] = v[n]);
    var x = 0,
      b = 0;
    for (n = 0; n < s; n++)
      (g[n] = numeric.rep([d[n] - v[n] + 1], 0)),
        (y[n] = numeric.rep([n - v[n]], 0)),
        (x += n - v[n] + 1),
        (b += d[n] - n + 1);
    for (i = 0; i < m; i++) (n = c[i]), (g[n][a[i] - v[n]] = f[i]);
    for (n = 0; n < s - 1; n++)
      for (t = n - v[n], h = g[n], e = n + 1; v[e] <= n && e < s; e++)
        if (((u = n - v[e]), (o = d[n] - n), (l = g[e]), (p = l[u] / h[t]))) {
          for (i = 1; i <= o; i++) l[i + u] -= p * h[i + t];
          y[e][n - v[e]] = p;
        }
    var m,
      w,
      M,
      h = [],
      l = [],
      k = [],
      A = [],
      T = [],
      j = [];
    for (m = 0, w = 0, n = 0; n < s; n++) {
      for (t = v[n], u = d[n], M = g[n], e = n; e <= u; e++)
        M[e - t] && ((h[m] = n), (l[m] = e), (k[m] = M[e - t]), m++);
      for (M = y[n], e = t; e < n; e++)
        M[e - t] && ((A[w] = n), (T[w] = e), (j[w] = M[e - t]), w++);
      (A[w] = n), (T[w] = n), (j[w] = 1), w++;
    }
    return { U: [h, l, k], L: [A, T, j] };
  }),
  (numeric.cLUsolve = function (r, n) {
    var e,
      i,
      t = r.L,
      u = r.U,
      o = numeric.clone(n),
      c = t[0],
      a = t[1],
      f = t[2],
      m = u[0],
      s = u[1],
      h = u[2],
      l = m.length,
      p = (c.length, o.length);
    for (i = 0, e = 0; e < p; e++) {
      for (; a[i] < e; ) (o[e] -= f[i] * o[a[i]]), i++;
      i++;
    }
    for (i = l - 1, e = p - 1; e >= 0; e--) {
      for (; s[i] > e; ) (o[e] -= h[i] * o[s[i]]), i--;
      (o[e] /= h[i]), i--;
    }
    return o;
  }),
  (numeric.cgrid = function (r, n) {
    "number" == typeof r && (r = [r, r]);
    var e,
      i,
      t,
      u = numeric.rep(r, -1);
    if ("function" != typeof n)
      switch (n) {
        case "L":
          n = function (n, e) {
            return n >= r[0] / 2 || e < r[1] / 2;
          };
          break;
        default:
          n = function (r, n) {
            return !0;
          };
      }
    for (t = 0, e = 1; e < r[0] - 1; e++)
      for (i = 1; i < r[1] - 1; i++) n(e, i) && ((u[e][i] = t), t++);
    return u;
  }),
  (numeric.cdelsq = function (r) {
    var n,
      e,
      i,
      t,
      u,
      o = [
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0],
      ],
      c = numeric.dim(r),
      a = c[0],
      f = c[1],
      m = [],
      s = [],
      h = [];
    for (n = 1; n < a - 1; n++)
      for (e = 1; e < f - 1; e++)
        if (!(r[n][e] < 0)) {
          for (i = 0; i < 4; i++)
            (t = n + o[i][0]),
              (u = e + o[i][1]),
              r[t][u] < 0 || (m.push(r[n][e]), s.push(r[t][u]), h.push(-1));
          m.push(r[n][e]), s.push(r[n][e]), h.push(4);
        }
    return [m, s, h];
  }),
  (numeric.cdotMV = function (r, n) {
    var e,
      i,
      t,
      u = r[0],
      o = r[1],
      c = r[2],
      a = u.length;
    for (t = 0, i = 0; i < a; i++) u[i] > t && (t = u[i]);
    for (t++, e = numeric.rep([t], 0), i = 0; i < a; i++)
      e[u[i]] += c[i] * n[o[i]];
    return e;
  }),
  (numeric.Spline = function (r, n, e, i, t) {
    (this.x = r), (this.yl = n), (this.yr = e), (this.kl = i), (this.kr = t);
  }),
  (numeric.Spline.prototype._at = function (r, n) {
    var r,
      e,
      i,
      t,
      u = this.x,
      o = this.yl,
      c = this.yr,
      a = this.kl,
      f = this.kr,
      m = numeric.add,
      s = numeric.sub,
      h = numeric.mul;
    (e = s(h(a[n], u[n + 1] - u[n]), s(c[n + 1], o[n]))),
      (i = m(h(f[n + 1], u[n] - u[n + 1]), s(c[n + 1], o[n]))),
      (t = (r - u[n]) / (u[n + 1] - u[n]));
    var l = t * (1 - t);
    return m(
      m(m(h(1 - t, o[n]), h(t, c[n + 1])), h(e, l * (1 - t))),
      h(i, l * t)
    );
  }),
  (numeric.Spline.prototype.at = function (r) {
    if ("number" == typeof r) {
      var n,
        e,
        i,
        t = this.x,
        u = t.length,
        o = Math.floor;
      for (n = 0, e = u - 1; e - n > 1; )
        (i = o((n + e) / 2)), t[i] <= r ? (n = i) : (e = i);
      return this._at(r, n);
    }
    var c,
      u = r.length,
      a = Array(u);
    for (c = u - 1; -1 !== c; --c) a[c] = this.at(r[c]);
    return a;
  }),
  (numeric.Spline.prototype.diff = function () {
    var r,
      n,
      e,
      i = this.x,
      t = this.yl,
      u = this.yr,
      o = this.kl,
      c = this.kr,
      a = t.length,
      f = o,
      m = c,
      s = Array(a),
      h = Array(a),
      l = numeric.add,
      p = numeric.mul,
      y = numeric.div,
      g = numeric.sub;
    for (r = a - 1; -1 !== r; --r)
      (n = i[r + 1] - i[r]),
        (e = g(u[r + 1], t[r])),
        (s[r] = y(l(p(e, 6), p(o[r], -4 * n), p(c[r + 1], -2 * n)), n * n)),
        (h[r + 1] = y(l(p(e, -6), p(o[r], 2 * n), p(c[r + 1], 4 * n)), n * n));
    return new numeric.Spline(i, f, m, s, h);
  }),
  (numeric.Spline.prototype.roots = function () {
    var r = [],
      n = this.x,
      e = this.yl,
      i = this.yr,
      t = this.kl,
      u = this.kr;
    "number" == typeof e[0] && ((e = [e]), (i = [i]), (t = [t]), (u = [u]));
    var o,
      c,
      a,
      f,
      m,
      s,
      h,
      l,
      p,
      y,
      g,
      v,
      d,
      x,
      b,
      w,
      M,
      k,
      A,
      T,
      j,
      S,
      _,
      V = e.length,
      P = n.length - 1,
      r = Array(V),
      q = Math.sqrt;
    for (o = 0; o !== V; ++o) {
      for (
        f = e[o], m = i[o], s = t[o], h = u[o], l = [], c = 0;
        c !== P;
        c++
      ) {
        for (
          c > 0 && m[c] * f[c] < 0 && l.push(n[c]),
            w = n[c + 1] - n[c],
            n[c],
            g = f[c],
            v = m[c + 1],
            p = s[c] / w,
            y = h[c + 1] / w,
            b =
              (function (r) {
                return r * r;
              })(p - y + 3 * (g - v)) +
              12 * y * g,
            d = y + 3 * g + 2 * p - 3 * v,
            x = 3 * (y + p + 2 * (g - v)),
            b <= 0
              ? ((k = d / x),
                (M =
                  k > n[c] && k < n[c + 1]
                    ? [n[c], k, n[c + 1]]
                    : [n[c], n[c + 1]]))
              : ((k = (d - q(b)) / x),
                (A = (d + q(b)) / x),
                (M = [n[c]]),
                k > n[c] && k < n[c + 1] && M.push(k),
                A > n[c] && A < n[c + 1] && M.push(A),
                M.push(n[c + 1])),
            j = M[0],
            k = this._at(j, c),
            a = 0;
          a < M.length - 1;
          a++
        )
          if (((S = M[a + 1]), (A = this._at(S, c)), 0 !== k))
            if (0 === A || k * A > 0) (j = S), (k = A);
            else {
              for (var F = 0; ; ) {
                if ((_ = (k * S - A * j) / (k - A)) <= j || _ >= S) break;
                if ((T = this._at(_, c)) * A > 0)
                  (S = _), (A = T), -1 === F && (k *= 0.5), (F = -1);
                else {
                  if (!(T * k > 0)) break;
                  (j = _), (k = T), 1 === F && (A *= 0.5), (F = 1);
                }
              }
              l.push(_), (j = M[a + 1]), (k = this._at(j, c));
            }
          else l.push(j), (j = S), (k = A);
        0 === A && l.push(S);
      }
      r[o] = l;
    }
    return "number" == typeof this.yl[0] ? r[0] : r;
  }),
  (numeric.spline = function (r, n, e, i) {
    var t,
      u = r.length,
      o = [],
      c = [],
      a = [],
      f = numeric.sub,
      m = numeric.mul,
      s = numeric.add;
    for (t = u - 2; t >= 0; t--)
      (c[t] = r[t + 1] - r[t]), (a[t] = f(n[t + 1], n[t]));
    ("string" != typeof e && "string" != typeof i) || (e = i = "periodic");
    var h = [[], [], []];
    switch (typeof e) {
      case "undefined":
        (o[0] = m(3 / (c[0] * c[0]), a[0])),
          h[0].push(0, 0),
          h[1].push(0, 1),
          h[2].push(2 / c[0], 1 / c[0]);
        break;
      case "string":
        (o[0] = s(
          m(3 / (c[u - 2] * c[u - 2]), a[u - 2]),
          m(3 / (c[0] * c[0]), a[0])
        )),
          h[0].push(0, 0, 0),
          h[1].push(u - 2, 0, 1),
          h[2].push(1 / c[u - 2], 2 / c[u - 2] + 2 / c[0], 1 / c[0]);
        break;
      default:
        (o[0] = e), h[0].push(0), h[1].push(0), h[2].push(1);
    }
    for (t = 1; t < u - 1; t++)
      (o[t] = s(
        m(3 / (c[t - 1] * c[t - 1]), a[t - 1]),
        m(3 / (c[t] * c[t]), a[t])
      )),
        h[0].push(t, t, t),
        h[1].push(t - 1, t, t + 1),
        h[2].push(1 / c[t - 1], 2 / c[t - 1] + 2 / c[t], 1 / c[t]);
    switch (typeof i) {
      case "undefined":
        (o[u - 1] = m(3 / (c[u - 2] * c[u - 2]), a[u - 2])),
          h[0].push(u - 1, u - 1),
          h[1].push(u - 2, u - 1),
          h[2].push(1 / c[u - 2], 2 / c[u - 2]);
        break;
      case "string":
        h[1][h[1].length - 1] = 0;
        break;
      default:
        (o[u - 1] = i), h[0].push(u - 1), h[1].push(u - 1), h[2].push(1);
    }
    o = "number" != typeof o[0] ? numeric.transpose(o) : [o];
    var l = Array(o.length);
    if ("string" == typeof e)
      for (t = l.length - 1; -1 !== t; --t)
        (l[t] = numeric.ccsLUPSolve(
          numeric.ccsLUP(numeric.ccsScatter(h)),
          o[t]
        )),
          (l[t][u - 1] = l[t][0]);
    else
      for (t = l.length - 1; -1 !== t; --t)
        l[t] = numeric.cLUsolve(numeric.cLU(h), o[t]);
    return (
      (l = "number" == typeof n[0] ? l[0] : numeric.transpose(l)),
      new numeric.Spline(r, n, n, l, l)
    );
  }),
  (numeric.fftpow2 = function r(n, e) {
    var i = n.length;
    if (1 !== i) {
      var t,
        u,
        o = Math.cos,
        c = Math.sin,
        a = Array(i / 2),
        f = Array(i / 2),
        m = Array(i / 2),
        s = Array(i / 2);
      for (u = i / 2, t = i - 1; -1 !== t; --t)
        --u, (m[u] = n[t]), (s[u] = e[t]), --t, (a[u] = n[t]), (f[u] = e[t]);
      r(a, f), r(m, s), (u = i / 2);
      var h,
        l,
        p,
        y = -6.283185307179586 / i;
      for (t = i - 1; -1 !== t; --t)
        --u,
          -1 === u && (u = i / 2 - 1),
          (h = y * t),
          (l = o(h)),
          (p = c(h)),
          (n[t] = a[u] + l * m[u] - p * s[u]),
          (e[t] = f[u] + l * s[u] + p * m[u]);
    }
  }),
  (numeric._ifftpow2 = function r(n, e) {
    var i = n.length;
    if (1 !== i) {
      var t,
        u,
        o = Math.cos,
        c = Math.sin,
        a = Array(i / 2),
        f = Array(i / 2),
        m = Array(i / 2),
        s = Array(i / 2);
      for (u = i / 2, t = i - 1; -1 !== t; --t)
        --u, (m[u] = n[t]), (s[u] = e[t]), --t, (a[u] = n[t]), (f[u] = e[t]);
      r(a, f), r(m, s), (u = i / 2);
      var h,
        l,
        p,
        y = 6.283185307179586 / i;
      for (t = i - 1; -1 !== t; --t)
        --u,
          -1 === u && (u = i / 2 - 1),
          (h = y * t),
          (l = o(h)),
          (p = c(h)),
          (n[t] = a[u] + l * m[u] - p * s[u]),
          (e[t] = f[u] + l * s[u] + p * m[u]);
    }
  }),
  (numeric.ifftpow2 = function (r, n) {
    numeric._ifftpow2(r, n),
      numeric.diveq(r, r.length),
      numeric.diveq(n, n.length);
  }),
  (numeric.convpow2 = function (r, n, e, i) {
    numeric.fftpow2(r, n), numeric.fftpow2(e, i);
    var t,
      u,
      o,
      c,
      a,
      f = r.length;
    for (t = f - 1; -1 !== t; --t)
      (u = r[t]),
        (c = n[t]),
        (o = e[t]),
        (a = i[t]),
        (r[t] = u * o - c * a),
        (n[t] = u * a + c * o);
    numeric.ifftpow2(r, n);
  }),
  (numeric.T.prototype.fft = function () {
    var r,
      n,
      e = this.x,
      i = this.y,
      t = e.length,
      u = Math.log,
      o = u(2),
      c = Math.ceil(u(2 * t - 1) / o),
      a = Math.pow(2, c),
      f = numeric.rep([a], 0),
      m = numeric.rep([a], 0),
      s = Math.cos,
      h = Math.sin,
      l = -3.141592653589793 / t,
      p = numeric.rep([a], 0),
      y = numeric.rep([a], 0);
    Math.floor(t / 2);
    for (r = 0; r < t; r++) p[r] = e[r];
    if (void 0 !== i) for (r = 0; r < t; r++) y[r] = i[r];
    for (f[0] = 1, r = 1; r <= a / 2; r++)
      (n = l * r * r),
        (f[r] = s(n)),
        (m[r] = h(n)),
        (f[a - r] = s(n)),
        (m[a - r] = h(n));
    var g = new numeric.T(p, y),
      v = new numeric.T(f, m);
    return (
      (g = g.mul(v)),
      numeric.convpow2(g.x, g.y, numeric.clone(v.x), numeric.neg(v.y)),
      (g = g.mul(v)),
      (g.x.length = t),
      (g.y.length = t),
      g
    );
  }),
  (numeric.T.prototype.ifft = function () {
    var r,
      n,
      e = this.x,
      i = this.y,
      t = e.length,
      u = Math.log,
      o = u(2),
      c = Math.ceil(u(2 * t - 1) / o),
      a = Math.pow(2, c),
      f = numeric.rep([a], 0),
      m = numeric.rep([a], 0),
      s = Math.cos,
      h = Math.sin,
      l = 3.141592653589793 / t,
      p = numeric.rep([a], 0),
      y = numeric.rep([a], 0);
    Math.floor(t / 2);
    for (r = 0; r < t; r++) p[r] = e[r];
    if (void 0 !== i) for (r = 0; r < t; r++) y[r] = i[r];
    for (f[0] = 1, r = 1; r <= a / 2; r++)
      (n = l * r * r),
        (f[r] = s(n)),
        (m[r] = h(n)),
        (f[a - r] = s(n)),
        (m[a - r] = h(n));
    var g = new numeric.T(p, y),
      v = new numeric.T(f, m);
    return (
      (g = g.mul(v)),
      numeric.convpow2(g.x, g.y, numeric.clone(v.x), numeric.neg(v.y)),
      (g = g.mul(v)),
      (g.x.length = t),
      (g.y.length = t),
      g.div(t)
    );
  }),
  (numeric.gradient = function (r, n) {
    var e = n.length,
      i = r(n);
    if (isNaN(i)) throw new Error("gradient: f(x) is a NaN!");
    var t,
      u,
      o,
      c,
      a,
      f,
      m,
      s,
      h,
      l = Math.max,
      p = numeric.clone(n),
      y = Array(e),
      l = (numeric.div, numeric.sub, Math.max),
      g = Math.abs,
      v = Math.min,
      d = 0;
    for (t = 0; t < e; t++)
      for (var x = l(1e-6 * i, 1e-8); ; ) {
        if (++d > 20) throw new Error("Numerical gradient fails");
        if (
          ((p[t] = n[t] + x),
          (u = r(p)),
          (p[t] = n[t] - x),
          (o = r(p)),
          (p[t] = n[t]),
          isNaN(u) || isNaN(o))
        )
          x /= 16;
        else {
          if (
            ((y[t] = (u - o) / (2 * x)),
            (c = n[t] - x),
            (a = n[t]),
            (f = n[t] + x),
            (m = (u - i) / x),
            (s = (i - o) / x),
            (h = l(g(y[t]), g(i), g(u), g(o), g(c), g(a), g(f), 1e-8)),
            !(v(l(g(m - y[t]), g(s - y[t]), g(m - s)) / h, x / h) > 0.001))
          )
            break;
          x /= 16;
        }
      }
    return y;
  }),
  (numeric.uncmin = function (r, n, e, i, t, u, o) {
    var c = numeric.gradient;
    void 0 === o && (o = {}),
      void 0 === e && (e = 1e-8),
      void 0 === i &&
        (i = function (n) {
          return c(r, n);
        }),
      void 0 === t && (t = 1e3),
      (n = numeric.clone(n));
    var a,
      f,
      m = n.length,
      s = r(n);
    if (isNaN(s)) throw new Error("uncmin: f(x0) is a NaN!");
    var h = Math.max,
      l = numeric.norm2;
    e = h(e, numeric.epsilon);
    var p,
      y,
      g,
      v,
      d,
      x,
      b,
      w,
      M,
      k,
      A = o.Hinv || numeric.identity(m),
      T = numeric.dot,
      j = (numeric.inv, numeric.sub),
      S = numeric.add,
      _ = numeric.tensor,
      V = numeric.div,
      P = numeric.mul,
      q = numeric.all,
      F = numeric.isFinite,
      L = numeric.neg,
      N = 0,
      O = "";
    for (y = i(n); N < t; ) {
      if ("function" == typeof u && u(N, n, s, y, A)) {
        O = "Callback returned true";
        break;
      }
      if (!q(F(y))) {
        O = "Gradient has Infinity or NaN";
        break;
      }
      if (((p = L(T(A, y))), !q(F(p)))) {
        O = "Search direction has Infinity or NaN";
        break;
      }
      if ((k = l(p)) < e) {
        O = "Newton step smaller than tol";
        break;
      }
      for (
        M = 1, f = T(y, p), d = n;
        N < t &&
        !(M * k < e) &&
        ((v = P(p, M)),
        (d = S(n, v)),
        (a = r(d)) - s >= 0.1 * M * f || isNaN(a));

      )
        (M *= 0.5), ++N;
      if (M * k < e) {
        O = "Line search step size smaller than tol";
        break;
      }
      if (N === t) {
        O = "maxit reached during line search";
        break;
      }
      (g = i(d)),
        (x = j(g, y)),
        (w = T(x, v)),
        (b = T(A, x)),
        (A = j(
          S(A, P((w + T(x, b)) / (w * w), _(v, v))),
          V(S(_(b, v), _(v, b)), w)
        )),
        (n = d),
        (s = a),
        (y = g),
        ++N;
    }
    return {
      solution: n,
      f: s,
      gradient: y,
      invHessian: A,
      iterations: N,
      message: O,
    };
  }),
  (numeric.Dopri = function (r, n, e, i, t, u, o) {
    (this.x = r),
      (this.y = n),
      (this.f = e),
      (this.ymid = i),
      (this.iterations = t),
      (this.events = o),
      (this.message = u);
  }),
  (numeric.Dopri.prototype._at = function (r, n) {
    function e(r) {
      return r * r;
    }
    var i,
      t,
      u,
      o,
      c,
      a,
      r,
      f,
      m,
      s,
      h,
      l = this,
      p = l.x,
      y = l.y,
      g = l.f,
      v = l.ymid,
      d = (p.length, Math.floor, numeric.add),
      x = numeric.mul,
      b = numeric.sub;
    return (
      (i = p[n]),
      (t = p[n + 1]),
      (o = y[n]),
      (c = y[n + 1]),
      (f = t - i),
      (u = i + 0.5 * f),
      (a = v[n]),
      (m = b(g[n], x(o, 1 / (i - u) + 2 / (i - t)))),
      (s = b(g[n + 1], x(c, 1 / (t - u) + 2 / (t - i)))),
      (h = [
        (e(r - t) * (r - u)) / e(i - t) / (i - u),
        (e(r - i) * e(r - t)) / e(i - u) / e(t - u),
        (e(r - i) * (r - u)) / e(t - i) / (t - u),
        ((r - i) * e(r - t) * (r - u)) / e(i - t) / (i - u),
        ((r - t) * e(r - i) * (r - u)) / e(i - t) / (t - u),
      ]),
      d(d(d(d(x(o, h[0]), x(a, h[1])), x(c, h[2])), x(m, h[3])), x(s, h[4]))
    );
  }),
  (numeric.Dopri.prototype.at = function (r) {
    var n,
      e,
      i,
      t = Math.floor;
    if ("number" != typeof r) {
      var u = r.length,
        o = Array(u);
      for (n = u - 1; -1 !== n; --n) o[n] = this.at(r[n]);
      return o;
    }
    var c = this.x;
    for (n = 0, e = c.length - 1; e - n > 1; )
      (i = t(0.5 * (n + e))), c[i] <= r ? (n = i) : (e = i);
    return this._at(r, n);
  }),
  (numeric.dopri = function (r, n, e, i, t, u, o) {
    void 0 === t && (t = 1e-6), void 0 === u && (u = 1e3);
    var c,
      a,
      f,
      m,
      s,
      h,
      l,
      p,
      y,
      g,
      v,
      d,
      x,
      b = [r],
      w = [e],
      M = [i(r, e)],
      k = [],
      A = [0.075, 0.225],
      T = [44 / 45, -56 / 15, 32 / 9],
      j = [19372 / 6561, -25360 / 2187, 64448 / 6561, -212 / 729],
      S = [9017 / 3168, -355 / 33, 46732 / 5247, 49 / 176, -5103 / 18656],
      _ = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84],
      V = [
        0.10013431883002395, 0, 0.3918321794184259, -0.02982460176594817,
        0.05893268337240795, -0.04497888809104361, 0.023904308236133973,
      ],
      P = [0.2, 0.3, 0.8, 8 / 9, 1, 1],
      q = [
        -71 / 57600,
        0,
        71 / 16695,
        -71 / 1920,
        17253 / 339200,
        -22 / 525,
        0.025,
      ],
      F = 0,
      L = (n - r) / 10,
      N = 0,
      O = numeric.add,
      U = numeric.mul,
      D = (Math.max, Math.min),
      B = Math.abs,
      R = numeric.norminf,
      X = Math.pow,
      E = numeric.any,
      Y = numeric.lt,
      I = numeric.and,
      Q = (numeric.sub, new numeric.Dopri(b, w, M, k, -1, ""));
    for ("function" == typeof o && (v = o(r, e)); r < n && N < u; )
      if (
        (++N,
        r + L > n && (L = n - r),
        (c = i(r + P[0] * L, O(e, U(0.2 * L, M[F])))),
        (a = i(r + P[1] * L, O(O(e, U(A[0] * L, M[F])), U(A[1] * L, c)))),
        (f = i(
          r + P[2] * L,
          O(O(O(e, U(T[0] * L, M[F])), U(T[1] * L, c)), U(T[2] * L, a))
        )),
        (m = i(
          r + P[3] * L,
          O(
            O(O(O(e, U(j[0] * L, M[F])), U(j[1] * L, c)), U(j[2] * L, a)),
            U(j[3] * L, f)
          )
        )),
        (s = i(
          r + P[4] * L,
          O(
            O(
              O(O(O(e, U(S[0] * L, M[F])), U(S[1] * L, c)), U(S[2] * L, a)),
              U(S[3] * L, f)
            ),
            U(S[4] * L, m)
          )
        )),
        (y = O(
          O(
            O(O(O(e, U(M[F], L * _[0])), U(a, L * _[2])), U(f, L * _[3])),
            U(m, L * _[4])
          ),
          U(s, L * _[5])
        )),
        (h = i(r + L, y)),
        (l = O(
          O(
            O(
              O(O(U(M[F], L * q[0]), U(a, L * q[2])), U(f, L * q[3])),
              U(m, L * q[4])
            ),
            U(s, L * q[5])
          ),
          U(h, L * q[6])
        )),
        (g = "number" == typeof l ? B(l) : R(l)) > t)
      ) {
        if (((L = 0.2 * L * X(t / g, 0.25)), r + L === r)) {
          Q.msg = "Step size became too small";
          break;
        }
      } else {
        if (
          ((k[F] = O(
            O(
              O(
                O(O(O(e, U(M[F], L * V[0])), U(a, L * V[2])), U(f, L * V[3])),
                U(m, L * V[4])
              ),
              U(s, L * V[5])
            ),
            U(h, L * V[6])
          )),
          ++F,
          (b[F] = r + L),
          (w[F] = y),
          (M[F] = h),
          "function" == typeof o)
        ) {
          var C,
            Z,
            H = r,
            z = r + 0.5 * L;
          if (
            ((d = o(z, k[F - 1])),
            (x = I(Y(v, 0), Y(0, d))),
            E(x) ||
              ((H = z),
              (z = r + L),
              (v = d),
              (d = o(z, y)),
              (x = I(Y(v, 0), Y(0, d)))),
            E(x))
          ) {
            for (var G, $, W = 0, J = 1, K = 1; ; ) {
              if ("number" == typeof v)
                Z = (K * d * H - J * v * z) / (K * d - J * v);
              else
                for (Z = z, p = v.length - 1; -1 !== p; --p)
                  v[p] < 0 &&
                    d[p] > 0 &&
                    (Z = D(
                      Z,
                      (K * d[p] * H - J * v[p] * z) / (K * d[p] - J * v[p])
                    ));
              if (Z <= H || Z >= z) break;
              (C = Q._at(Z, F - 1)),
                ($ = o(Z, C)),
                (G = I(Y(v, 0), Y(0, $))),
                E(G)
                  ? ((z = Z),
                    (d = $),
                    (x = G),
                    (K = 1),
                    -1 === W ? (J *= 0.5) : (J = 1),
                    (W = -1))
                  : ((H = Z),
                    (v = $),
                    (J = 1),
                    1 === W ? (K *= 0.5) : (K = 1),
                    (W = 1));
            }
            return (
              (y = Q._at(0.5 * (r + Z), F - 1)),
              (Q.f[F] = i(Z, C)),
              (Q.x[F] = Z),
              (Q.y[F] = C),
              (Q.ymid[F - 1] = y),
              (Q.events = x),
              (Q.iterations = N),
              Q
            );
          }
        }
        (r += L), (e = y), (v = d), (L = D(0.8 * L * X(t / g, 0.25), 4 * L));
      }
    return (Q.iterations = N), Q;
  }),
  (numeric.LU = function (r, n) {
    n = n || !1;
    var e,
      i,
      t,
      u,
      o,
      c,
      a,
      f,
      m,
      s = Math.abs,
      h = r.length,
      l = h - 1,
      p = new Array(h);
    for (n || (r = numeric.clone(r)), t = 0; t < h; ++t) {
      for (a = t, c = r[t], m = s(c[t]), i = t + 1; i < h; ++i)
        (u = s(r[i][t])), m < u && ((m = u), (a = i));
      for (
        p[t] = a,
          a != t && ((r[t] = r[a]), (r[a] = c), (c = r[t])),
          o = c[t],
          e = t + 1;
        e < h;
        ++e
      )
        r[e][t] /= o;
      for (e = t + 1; e < h; ++e) {
        for (f = r[e], i = t + 1; i < l; ++i)
          (f[i] -= f[t] * c[i]), ++i, (f[i] -= f[t] * c[i]);
        i === l && (f[i] -= f[t] * c[i]);
      }
    }
    return { LU: r, P: p };
  }),
  (numeric.LUsolve = function (r, n) {
    var e,
      i,
      t,
      u,
      o,
      c = r.LU,
      a = c.length,
      f = numeric.clone(n),
      m = r.P;
    for (e = a - 1; -1 !== e; --e) f[e] = n[e];
    for (e = 0; e < a; ++e)
      for (
        t = m[e],
          m[e] !== e && ((o = f[e]), (f[e] = f[t]), (f[t] = o)),
          u = c[e],
          i = 0;
        i < e;
        ++i
      )
        f[e] -= f[i] * u[i];
    for (e = a - 1; e >= 0; --e) {
      for (u = c[e], i = e + 1; i < a; ++i) f[e] -= f[i] * u[i];
      f[e] /= u[e];
    }
    return f;
  }),
  (numeric.solve = function (r, n, e) {
    return numeric.LUsolve(numeric.LU(r, e), n);
  }),
  (numeric.echelonize = function (r) {
    var n,
      e,
      i,
      t,
      u,
      o,
      c,
      a,
      f = numeric.dim(r),
      m = f[0],
      s = f[1],
      h = numeric.identity(m),
      l = Array(m),
      p = Math.abs,
      y = numeric.diveq;
    for (r = numeric.clone(r), n = 0; n < m; ++n) {
      for (i = 0, u = r[n], o = h[n], e = 1; e < s; ++e)
        p(u[i]) < p(u[e]) && (i = e);
      for (l[n] = i, y(o, u[i]), y(u, u[i]), e = 0; e < m; ++e)
        if (e !== n) {
          for (c = r[e], a = c[i], t = s - 1; -1 !== t; --t) c[t] -= u[t] * a;
          for (c = h[e], t = m - 1; -1 !== t; --t) c[t] -= o[t] * a;
        }
    }
    return { I: h, A: r, P: l };
  }),
  (numeric.__solveLP = function (r, n, e, i, t, u, o) {
    var c,
      a,
      f,
      m,
      s = numeric.sum,
      h = (numeric.log, numeric.mul),
      l = numeric.sub,
      p = numeric.dot,
      y = numeric.div,
      g = numeric.add,
      v = r.length,
      d = e.length,
      x = !1,
      b = 1,
      w = (numeric.transpose(n), numeric.svd, numeric.transpose),
      M = (numeric.leq, Math.sqrt),
      k = Math.abs,
      A = (numeric.muleq, numeric.norminf, numeric.any, Math.min),
      T = numeric.all,
      j = numeric.gt,
      S = Array(v),
      _ = Array(d),
      V = (numeric.rep([d], 1), numeric.solve),
      P = l(e, p(n, u)),
      q = p(r, r);
    for (f = 0; f < t; ++f) {
      var F, L;
      for (F = d - 1; -1 !== F; --F) _[F] = y(n[F], P[F]);
      var N = w(_);
      for (F = v - 1; -1 !== F; --F) S[F] = s(N[F]);
      b = 0.25 * k(q / p(r, S));
      var O = 100 * M(q / p(S, S));
      for (
        (!isFinite(b) || b > O) && (b = O),
          m = g(r, h(b, S)),
          a = p(N, _),
          F = v - 1;
        -1 !== F;
        --F
      )
        a[F][F] += 1;
      L = V(a, y(m, b), !0);
      var U = y(P, p(n, L)),
        D = 1;
      for (F = d - 1; -1 !== F; --F) U[F] < 0 && (D = A(D, -0.999 * U[F]));
      if (((c = l(u, h(L, D))), (P = l(e, p(n, c))), !T(j(P, 0))))
        return { solution: u, message: "", iterations: f };
      if (((u = c), b < i)) return { solution: c, message: "", iterations: f };
      if (o) {
        var B = p(r, m),
          R = p(n, m);
        for (x = !0, F = d - 1; -1 !== F; --F)
          if (B * R[F] < 0) {
            x = !1;
            break;
          }
      } else x = !(u[v - 1] >= 0);
      if (x) return { solution: c, message: "Unbounded", iterations: f };
    }
    return {
      solution: u,
      message: "maximum iteration count exceeded",
      iterations: f,
    };
  }),
  (numeric._solveLP = function (r, n, e, i, t) {
    var u,
      o = r.length,
      c = e.length,
      a = (numeric.sum, numeric.log, numeric.mul, numeric.sub),
      f = numeric.dot,
      m = (numeric.div, numeric.add, numeric.rep([o], 0).concat([1])),
      s = numeric.rep([c, 1], -1),
      h = numeric.blockMatrix([[n, s]]),
      l = e,
      u = numeric
        .rep([o], 0)
        .concat(Math.max(0, numeric.sup(numeric.neg(e))) + 1),
      p = numeric.__solveLP(m, h, l, i, t, u, !1),
      y = numeric.clone(p.solution);
    if (((y.length = o), numeric.inf(a(e, f(n, y))) < 0))
      return { solution: NaN, message: "Infeasible", iterations: p.iterations };
    var g = numeric.__solveLP(r, n, e, i, t - p.iterations, y, !0);
    return (g.iterations += p.iterations), g;
  }),
  (numeric.solveLP = function (r, n, e, i, t, u, o) {
    if (
      (void 0 === o && (o = 1e3),
      void 0 === u && (u = numeric.epsilon),
      void 0 === i)
    )
      return numeric._solveLP(r, n, e, u, o);
    var c,
      a = i.length,
      f = i[0].length,
      m = n.length,
      s = numeric.echelonize(i),
      h = numeric.rep([f], 0),
      l = s.P,
      p = [];
    for (c = l.length - 1; -1 !== c; --c) h[l[c]] = 1;
    for (c = f - 1; -1 !== c; --c) 0 === h[c] && p.push(c);
    var y = numeric.getRange,
      g = numeric.linspace(0, a - 1),
      v = numeric.linspace(0, m - 1),
      d = y(i, g, p),
      x = y(n, v, l),
      b = y(n, v, p),
      w = numeric.dot,
      M = numeric.sub,
      k = w(x, s.I),
      A = M(b, w(k, d)),
      T = M(e, w(k, t)),
      j = Array(l.length),
      S = Array(p.length);
    for (c = l.length - 1; -1 !== c; --c) j[c] = r[l[c]];
    for (c = p.length - 1; -1 !== c; --c) S[c] = r[p[c]];
    var _ = M(S, w(j, w(s.I, d))),
      V = numeric._solveLP(_, A, T, u, o),
      P = V.solution;
    if (P !== P) return V;
    var q = w(s.I, M(t, w(d, P))),
      F = Array(r.length);
    for (c = l.length - 1; -1 !== c; --c) F[l[c]] = q[c];
    for (c = p.length - 1; -1 !== c; --c) F[p[c]] = P[c];
    return { solution: F, message: V.message, iterations: V.iterations };
  }),
  (numeric.MPStoLP = function (r) {
    function n(n) {
      throw new Error(
        "MPStoLP: " +
          n +
          "\nLine " +
          e +
          ": " +
          r[e] +
          "\nCurrent state: " +
          c[o] +
          "\n"
      );
    }
    r instanceof String && r.split("\n");
    var e,
      i,
      t,
      u,
      o = 0,
      c = [
        "Initial state",
        "NAME",
        "ROWS",
        "COLUMNS",
        "RHS",
        "BOUNDS",
        "ENDATA",
      ],
      a = r.length,
      f = 0,
      m = {},
      s = [],
      h = 0,
      l = {},
      p = 0,
      y = [],
      g = [],
      v = [];
    for (e = 0; e < a; ++e) {
      t = r[e];
      var d = t.match(/\S*/g),
        x = [];
      for (i = 0; i < d.length; ++i) "" !== d[i] && x.push(d[i]);
      if (0 !== x.length) {
        for (i = 0; i < c.length && t.substr(0, c[i].length) !== c[i]; ++i);
        if (i < c.length) {
          if (((o = i), 1 === i && (u = x[1]), 6 === i))
            return {
              name: u,
              c: y,
              A: numeric.transpose(g),
              b: v,
              rows: m,
              vars: l,
            };
        } else
          switch (o) {
            case 0:
            case 1:
              n("Unexpected line");
            case 2:
              switch (x[0]) {
                case "N":
                  0 === f ? (f = x[1]) : n("Two or more N rows");
                  break;
                case "L":
                  (m[x[1]] = h), (s[h] = 1), (v[h] = 0), ++h;
                  break;
                case "G":
                  (m[x[1]] = h), (s[h] = -1), (v[h] = 0), ++h;
                  break;
                case "E":
                  (m[x[1]] = h), (s[h] = 0), (v[h] = 0), ++h;
                  break;
                default:
                  n("Parse error " + numeric.prettyPrint(x));
              }
              break;
            case 3:
              l.hasOwnProperty(x[0]) ||
                ((l[x[0]] = p), (y[p] = 0), (g[p] = numeric.rep([h], 0)), ++p);
              var b = l[x[0]];
              for (i = 1; i < x.length; i += 2)
                if (x[i] !== f) {
                  var w = m[x[i]];
                  g[b][w] = (s[w] < 0 ? -1 : 1) * parseFloat(x[i + 1]);
                } else y[b] = parseFloat(x[i + 1]);
              break;
            case 4:
              for (i = 1; i < x.length; i += 2)
                v[m[x[i]]] = (s[m[x[i]]] < 0 ? -1 : 1) * parseFloat(x[i + 1]);
              break;
            case 5:
              break;
            case 6:
              n("Internal error");
          }
      }
    }
    n("Reached end of file without ENDATA");
  }),
  (numeric.seedrandom = { pow: Math.pow, random: Math.random }),
  (function (r, n, e, i, t, u, o) {
    function c(r) {
      var n,
        i,
        t = this,
        u = r.length,
        o = 0,
        c = (t.i = t.j = t.m = 0);
      for (t.S = [], t.c = [], u || (r = [u++]); o < e; ) t.S[o] = o++;
      for (o = 0; o < e; o++)
        (n = t.S[o]),
          (c = m(c + n + r[o % u])),
          (i = t.S[c]),
          (t.S[o] = i),
          (t.S[c] = n);
      (t.g = function (r) {
        var n = t.S,
          i = m(t.i + 1),
          u = n[i],
          o = m(t.j + u),
          c = n[o];
        (n[i] = c), (n[o] = u);
        for (var a = n[m(u + c)]; --r; )
          (i = m(i + 1)),
            (u = n[i]),
            (o = m(o + u)),
            (c = n[o]),
            (n[i] = c),
            (n[o] = u),
            (a = a * e + n[m(u + c)]);
        return (t.i = i), (t.j = o), a;
      }),
        t.g(e);
    }
    function a(r, n, e, i, t) {
      if (((e = []), (t = typeof r), n && "object" == t))
        for (i in r)
          if (i.indexOf("S") < 5)
            try {
              e.push(a(r[i], n - 1));
            } catch (r) {}
      return e.length ? e : r + ("string" != t ? "\0" : "");
    }
    function f(r, n, e, i) {
      for (r += "", e = 0, i = 0; i < r.length; i++)
        n[m(i)] = m((e ^= 19 * n[m(i)]) + r.charCodeAt(i));
      r = "";
      for (i in n) r += String.fromCharCode(n[i]);
      return r;
    }
    function m(r) {
      return r & (e - 1);
    }
    (n.seedrandom = function (i, m) {
      var s,
        h = [];
      return (
        (i = f(
          a(
            m
              ? [i, r]
              : arguments.length
              ? i
              : [new Date().getTime(), r, window],
            3
          ),
          h
        )),
        (s = new c(h)),
        f(s.S, r),
        (n.random = function () {
          for (var r = s.g(6), n = o, i = 0; r < t; )
            (r = (r + i) * e), (n *= e), (i = s.g(1));
          for (; r >= u; ) (r /= 2), (n /= 2), (i >>>= 1);
          return (r + i) / n;
        }),
        i
      );
    }),
      (o = n.pow(e, 6)),
      (t = n.pow(2, t)),
      (u = 2 * t),
      f(n.random(), r);
  })([], numeric.seedrandom, 256, 0, 52),
  (function (r) {
    function n(r) {
      if ("object" != typeof r) return r;
      var e,
        i = [],
        t = r.length;
      for (e = 0; e < t; e++) i[e + 1] = n(r[e]);
      return i;
    }
    function e(r) {
      if ("object" != typeof r) return r;
      var n,
        i = [],
        t = r.length;
      for (n = 1; n < t; n++) i[n - 1] = e(r[n]);
      return i;
    }
    function i(r, n, e) {
      var i, t, u, o, c;
      for (u = 1; u <= e; u += 1) {
        for (r[u][u] = 1 / r[u][u], c = -r[u][u], i = 1; i < u; i += 1)
          r[i][u] = c * r[i][u];
        if (((o = u + 1), e < o)) break;
        for (t = o; t <= e; t += 1)
          for (c = r[u][t], r[u][t] = 0, i = 1; i <= u; i += 1)
            r[i][t] = r[i][t] + c * r[i][u];
      }
    }
    function t(r, n, e, i) {
      var t, u, o, c;
      for (u = 1; u <= e; u += 1) {
        for (c = 0, t = 1; t < u; t += 1) c += r[t][u] * i[t];
        i[u] = (i[u] - c) / r[u][u];
      }
      for (o = 1; o <= e; o += 1)
        for (
          u = e + 1 - o, i[u] = i[u] / r[u][u], c = -i[u], t = 1;
          t < u;
          t += 1
        )
          i[t] = i[t] + c * r[t][u];
    }
    function u(r, n, e, i) {
      var t, u, o, c, a, f;
      for (u = 1; u <= e; u += 1) {
        if (((i[1] = u), (f = 0), (o = u - 1) < 1)) {
          if ((f = r[u][u] - f) <= 0) break;
          r[u][u] = Math.sqrt(f);
        } else {
          for (c = 1; c <= o; c += 1) {
            for (a = r[c][u], t = 1; t < c; t += 1) a -= r[t][u] * r[t][c];
            (a /= r[c][c]), (r[c][u] = a), (f += a * a);
          }
          if ((f = r[u][u] - f) <= 0) break;
          r[u][u] = Math.sqrt(f);
        }
        i[1] = 0;
      }
    }
    function o(r, n, e, o, c, a, f, m, s, h, l, p, y, g, v, d) {
      function x() {
        return (
          (v[P + y] = v[P + y + 1]),
          (v[P + y + 1] = 0),
          (p[y] = 0),
          (y -= 1),
          (g[2] = g[2] + 1),
          0
        );
      }
      var b,
        w,
        M,
        k,
        A,
        T,
        j,
        S,
        _,
        V,
        P,
        q,
        F,
        L,
        N,
        O,
        U,
        D,
        B,
        R,
        X,
        E,
        Y,
        I,
        Q,
        C,
        Z;
      (F = Math.min(o, h)),
        (M = 2 * o + (F * (F + 5)) / 2 + 2 * h + 1),
        (I = 1e-60);
      do {
        (I += I), (Q = 1 + 0.1 * I), (C = 1 + 0.2 * I);
      } while (Q <= 1 || C <= 1);
      for (b = 1; b <= o; b += 1) v[b] = n[b];
      for (b = o + 1; b <= M; b += 1) v[b] = 0;
      for (b = 1; b <= h; b += 1) p[b] = 0;
      if (((A = []), 0 === d[1])) {
        if ((u(r, e, o, A), 0 !== A[1])) return void (d[1] = 2);
        t(r, e, o, n), i(r, e, o);
      } else {
        for (w = 1; w <= o; w += 1)
          for (c[w] = 0, b = 1; b <= w; b += 1) c[w] = c[w] + r[b][w] * n[b];
        for (w = 1; w <= o; w += 1)
          for (n[w] = 0, b = w; b <= o; b += 1) n[w] = n[w] + r[w][b] * c[b];
      }
      for (a[1] = 0, w = 1; w <= o; w += 1)
        for (
          c[w] = n[w], a[1] = a[1] + v[w] * c[w], v[w] = 0, b = w + 1;
          b <= o;
          b += 1
        )
          r[b][w] = 0;
      for (
        a[1] = -a[1] / 2,
          d[1] = 0,
          j = o,
          S = j + o,
          P = S + F,
          _ = P + F + 1,
          V = _ + (F * (F + 1)) / 2,
          L = V + h,
          b = 1;
        b <= h;
        b += 1
      ) {
        for (O = 0, w = 1; w <= o; w += 1) O += f[w][b] * f[w][b];
        v[L + b] = Math.sqrt(O);
      }
      for (y = 0, g[1] = 0, g[2] = 0, Z = 0; ; ) {
        if (
          999 ===
          (Z = (function () {
            for (g[1] = g[1] + 1, M = V, b = 1; b <= h; b += 1) {
              for (M += 1, O = -m[b], w = 1; w <= o; w += 1)
                O += f[w][b] * c[w];
              if ((Math.abs(O) < I && (O = 0), b > l)) v[M] = O;
              else if (((v[M] = -Math.abs(O)), O > 0)) {
                for (w = 1; w <= o; w += 1) f[w][b] = -f[w][b];
                m[b] = -m[b];
              }
            }
            for (b = 1; b <= y; b += 1) v[V + p[b]] = 0;
            for (q = 0, N = 0, b = 1; b <= h; b += 1)
              v[V + b] < N * v[L + b] && ((q = b), (N = v[V + b] / v[L + b]));
            return 0 === q ? 999 : 0;
          })())
        )
          return;
        for (;;) {
          if (
            0 ===
            (Z = (function () {
              for (b = 1; b <= o; b += 1) {
                for (O = 0, w = 1; w <= o; w += 1) O += r[w][b] * f[w][q];
                v[b] = O;
              }
              for (k = j, b = 1; b <= o; b += 1) v[k + b] = 0;
              for (w = y + 1; w <= o; w += 1)
                for (b = 1; b <= o; b += 1)
                  v[k + b] = v[k + b] + r[b][w] * v[w];
              for (E = !0, b = y; b >= 1; b -= 1) {
                for (
                  O = v[b], M = _ + (b * (b + 3)) / 2, k = M - b, w = b + 1;
                  w <= y;
                  w += 1
                )
                  (O -= v[M] * v[S + w]), (M += w);
                if (((O /= v[k]), (v[S + b] = O), p[b] < l)) break;
                if (O < 0) break;
                (E = !1), (T = b);
              }
              if (!E)
                for (
                  U = v[P + T] / v[S + T], b = 1;
                  b <= y && !(p[b] < l) && !(v[S + b] < 0);
                  b += 1
                )
                  (N = v[P + b] / v[S + b]) < U && ((U = N), (T = b));
              for (O = 0, b = j + 1; b <= j + o; b += 1) O += v[b] * v[b];
              if (Math.abs(O) <= I) {
                if (E) return (d[1] = 1), 999;
                for (b = 1; b <= y; b += 1) v[P + b] = v[P + b] - U * v[S + b];
                return (v[P + y + 1] = v[P + y + 1] + U), 700;
              }
              for (O = 0, b = 1; b <= o; b += 1) O += v[j + b] * f[b][q];
              for (
                D = -v[V + q] / O,
                  Y = !0,
                  E || (U < D && ((D = U), (Y = !1))),
                  b = 1;
                b <= o;
                b += 1
              )
                (c[b] = c[b] + D * v[j + b]), Math.abs(c[b]) < I && (c[b] = 0);
              for (
                a[1] = a[1] + D * O * (D / 2 + v[P + y + 1]), b = 1;
                b <= y;
                b += 1
              )
                v[P + b] = v[P + b] - D * v[S + b];
              if (((v[P + y + 1] = v[P + y + 1] + D), !Y)) {
                for (O = -m[q], w = 1; w <= o; w += 1) O += c[w] * f[w][q];
                if (q > l) v[V + q] = O;
                else if (((v[V + q] = -Math.abs(O)), O > 0)) {
                  for (w = 1; w <= o; w += 1) f[w][q] = -f[w][q];
                  m[q] = -m[q];
                }
                return 700;
              }
              for (
                y += 1, p[y] = q, M = _ + ((y - 1) * y) / 2 + 1, b = 1;
                b <= y - 1;
                b += 1
              )
                (v[M] = v[b]), (M += 1);
              if (y === o) v[M] = v[o];
              else {
                for (
                  b = o;
                  b >= y + 1 &&
                  0 !== v[b] &&
                  ((B = Math.max(Math.abs(v[b - 1]), Math.abs(v[b]))),
                  (R = Math.min(Math.abs(v[b - 1]), Math.abs(v[b]))),
                  (N =
                    v[b - 1] >= 0
                      ? Math.abs(B * Math.sqrt(1 + (R * R) / (B * B)))
                      : -Math.abs(B * Math.sqrt(1 + (R * R) / (B * B)))),
                  (B = v[b - 1] / N),
                  (R = v[b] / N),
                  1 !== B);
                  b -= 1
                )
                  if (0 === B)
                    for (v[b - 1] = R * N, w = 1; w <= o; w += 1)
                      (N = r[w][b - 1]), (r[w][b - 1] = r[w][b]), (r[w][b] = N);
                  else
                    for (v[b - 1] = N, X = R / (1 + B), w = 1; w <= o; w += 1)
                      (N = B * r[w][b - 1] + R * r[w][b]),
                        (r[w][b] = X * (r[w][b - 1] + N) - r[w][b]),
                        (r[w][b - 1] = N);
                v[M] = v[y];
              }
              return 0;
            })())
          )
            break;
          if (999 === Z) return;
          if (700 === Z)
            if (T === y) x();
            else {
              for (;;)
                if (
                  ((function () {
                    if (
                      ((M = _ + (T * (T + 1)) / 2 + 1), (k = M + T), 0 === v[k])
                    )
                      return 798;
                    if (
                      ((B = Math.max(Math.abs(v[k - 1]), Math.abs(v[k]))),
                      (R = Math.min(Math.abs(v[k - 1]), Math.abs(v[k]))),
                      (N =
                        v[k - 1] >= 0
                          ? Math.abs(B * Math.sqrt(1 + (R * R) / (B * B)))
                          : -Math.abs(B * Math.sqrt(1 + (R * R) / (B * B)))),
                      (B = v[k - 1] / N),
                      (R = v[k] / N),
                      1 === B)
                    )
                      return 798;
                    if (0 === B) {
                      for (b = T + 1; b <= y; b += 1)
                        (N = v[k - 1]), (v[k - 1] = v[k]), (v[k] = N), (k += b);
                      for (b = 1; b <= o; b += 1)
                        (N = r[b][T]),
                          (r[b][T] = r[b][T + 1]),
                          (r[b][T + 1] = N);
                    } else {
                      for (X = R / (1 + B), b = T + 1; b <= y; b += 1)
                        (N = B * v[k - 1] + R * v[k]),
                          (v[k] = X * (v[k - 1] + N) - v[k]),
                          (v[k - 1] = N),
                          (k += b);
                      for (b = 1; b <= o; b += 1)
                        (N = B * r[b][T] + R * r[b][T + 1]),
                          (r[b][T + 1] = X * (r[b][T] + N) - r[b][T + 1]),
                          (r[b][T] = N);
                    }
                  })(),
                  797 !==
                    (Z = (function () {
                      for (k = M - T, b = 1; b <= T; b += 1)
                        (v[k] = v[M]), (M += 1), (k += 1);
                      return (
                        (v[P + T] = v[P + T + 1]),
                        (p[T] = p[T + 1]),
                        (T += 1),
                        T < y ? 797 : 0
                      );
                    })()))
                )
                  break;
              x();
            }
        }
      }
    }
    function c(r, i, t, u, c, a) {
      (r = n(r)), (i = n(i)), (t = n(t));
      var f,
        m,
        s,
        h,
        l,
        p,
        y = [],
        g = [],
        v = [],
        d = [],
        x = [];
      if (
        ((c = c || 0),
        (a = a ? n(a) : [void 0, 0]),
        (u = u ? n(u) : []),
        (m = r.length - 1),
        (s = t[1].length - 1),
        !u)
      )
        for (f = 1; f <= s; f += 1) u[f] = 0;
      for (f = 1; f <= s; f += 1) g[f] = 0;
      for (h = 0, l = Math.min(m, s), f = 1; f <= m; f += 1) v[f] = 0;
      for (y[1] = 0, f = 1; f <= 2 * m + (l * (l + 5)) / 2 + 2 * s + 1; f += 1)
        d[f] = 0;
      for (f = 1; f <= 2; f += 1) x[f] = 0;
      return (
        o(r, i, m, m, v, y, t, u, m, s, c, g, h, x, d, a),
        (p = ""),
        1 === a[1] && (p = "constraints are inconsistent, no solution!"),
        2 === a[1] &&
          (p = "matrix D in quadratic function is not positive definite!"),
        {
          solution: e(v),
          value: e(y),
          unconstrained_solution: e(i),
          iterations: e(x),
          iact: e(g),
          message: p,
        }
      );
    }
    r.solveQP = c;
  })(numeric),
  (numeric.svd = function (r) {
    function n(r, n) {
      return (
        (r = Math.abs(r)),
        (n = Math.abs(n)),
        r > n
          ? r * Math.sqrt(1 + (n * n) / r / r)
          : 0 == n
          ? r
          : n * Math.sqrt(1 + (r * r) / n / n)
      );
    }
    var e,
      i = numeric.epsilon,
      t = 1e-64 / i,
      u = 0,
      o = 0,
      c = 0,
      a = 0,
      f = 0,
      m = numeric.clone(r),
      s = m.length,
      h = m[0].length;
    if (s < h) throw "Need more rows than columns";
    var l = new Array(h),
      p = new Array(h);
    for (o = 0; o < h; o++) l[o] = p[o] = 0;
    var y = numeric.rep([h, h], 0),
      g = 0,
      v = 0,
      d = 0,
      x = 0,
      b = 0,
      w = 0,
      M = 0;
    for (o = 0; o < h; o++) {
      for (l[o] = v, M = 0, f = o + 1, c = o; c < s; c++)
        M += m[c][o] * m[c][o];
      if (M <= t) v = 0;
      else
        for (
          g = m[o][o],
            v = Math.sqrt(M),
            g >= 0 && (v = -v),
            d = g * v - M,
            m[o][o] = g - v,
            c = f;
          c < h;
          c++
        ) {
          for (M = 0, a = o; a < s; a++) M += m[a][o] * m[a][c];
          for (g = M / d, a = o; a < s; a++) m[a][c] += g * m[a][o];
        }
      for (p[o] = v, M = 0, c = f; c < h; c++) M += m[o][c] * m[o][c];
      if (M <= t) v = 0;
      else {
        for (
          g = m[o][o + 1],
            v = Math.sqrt(M),
            g >= 0 && (v = -v),
            d = g * v - M,
            m[o][o + 1] = g - v,
            c = f;
          c < h;
          c++
        )
          l[c] = m[o][c] / d;
        for (c = f; c < s; c++) {
          for (M = 0, a = f; a < h; a++) M += m[c][a] * m[o][a];
          for (a = f; a < h; a++) m[c][a] += M * l[a];
        }
      }
      (b = Math.abs(p[o]) + Math.abs(l[o])), b > x && (x = b);
    }
    for (o = h - 1; -1 != o; o += -1) {
      if (0 != v) {
        for (d = v * m[o][o + 1], c = f; c < h; c++) y[c][o] = m[o][c] / d;
        for (c = f; c < h; c++) {
          for (M = 0, a = f; a < h; a++) M += m[o][a] * y[a][c];
          for (a = f; a < h; a++) y[a][c] += M * y[a][o];
        }
      }
      for (c = f; c < h; c++) (y[o][c] = 0), (y[c][o] = 0);
      (y[o][o] = 1), (v = l[o]), (f = o);
    }
    for (o = h - 1; -1 != o; o += -1) {
      for (f = o + 1, v = p[o], c = f; c < h; c++) m[o][c] = 0;
      if (0 != v) {
        for (d = m[o][o] * v, c = f; c < h; c++) {
          for (M = 0, a = f; a < s; a++) M += m[a][o] * m[a][c];
          for (g = M / d, a = o; a < s; a++) m[a][c] += g * m[a][o];
        }
        for (c = o; c < s; c++) m[c][o] = m[c][o] / v;
      } else for (c = o; c < s; c++) m[c][o] = 0;
      m[o][o] += 1;
    }
    for (i *= x, a = h - 1; -1 != a; a += -1)
      for (var k = 0; k < 50; k++) {
        var A = !1;
        for (f = a; -1 != f; f += -1) {
          if (Math.abs(l[f]) <= i) {
            A = !0;
            break;
          }
          if (Math.abs(p[f - 1]) <= i) break;
        }
        if (!A) {
          (u = 0), (M = 1);
          var T = f - 1;
          for (
            o = f;
            o < a + 1 &&
            ((g = M * l[o]), (l[o] = u * l[o]), !(Math.abs(g) <= i));
            o++
          )
            for (
              v = p[o], d = n(g, v), p[o] = d, u = v / d, M = -g / d, c = 0;
              c < s;
              c++
            )
              (b = m[c][T]),
                (w = m[c][o]),
                (m[c][T] = b * u + w * M),
                (m[c][o] = -b * M + w * u);
        }
        if (((w = p[a]), f == a)) {
          if (w < 0) for (p[a] = -w, c = 0; c < h; c++) y[c][a] = -y[c][a];
          break;
        }
        if (k >= 49) throw "Error: no convergence.";
        for (
          x = p[f],
            b = p[a - 1],
            v = l[a - 1],
            d = l[a],
            g = ((b - w) * (b + w) + (v - d) * (v + d)) / (2 * d * b),
            v = n(g, 1),
            g =
              g < 0
                ? ((x - w) * (x + w) + d * (b / (g - v) - d)) / x
                : ((x - w) * (x + w) + d * (b / (g + v) - d)) / x,
            u = 1,
            M = 1,
            o = f + 1;
          o < a + 1;
          o++
        ) {
          for (
            v = l[o],
              b = p[o],
              d = M * v,
              v *= u,
              w = n(g, d),
              l[o - 1] = w,
              u = g / w,
              M = d / w,
              g = x * u + v * M,
              v = -x * M + v * u,
              d = b * M,
              b *= u,
              c = 0;
            c < h;
            c++
          )
            (x = y[c][o - 1]),
              (w = y[c][o]),
              (y[c][o - 1] = x * u + w * M),
              (y[c][o] = -x * M + w * u);
          for (
            w = n(g, d),
              p[o - 1] = w,
              u = g / w,
              M = d / w,
              g = u * v + M * b,
              x = -M * v + u * b,
              c = 0;
            c < s;
            c++
          )
            (b = m[c][o - 1]),
              (w = m[c][o]),
              (m[c][o - 1] = b * u + w * M),
              (m[c][o] = -b * M + w * u);
        }
        (l[f] = 0), (l[a] = g), (p[a] = x);
      }
    for (o = 0; o < p.length; o++) p[o] < i && (p[o] = 0);
    for (o = 0; o < h; o++)
      for (c = o - 1; c >= 0; c--)
        if (p[c] < p[o]) {
          for (u = p[c], p[c] = p[o], p[o] = u, a = 0; a < m.length; a++)
            (e = m[a][o]), (m[a][o] = m[a][c]), (m[a][c] = e);
          for (a = 0; a < y.length; a++)
            (e = y[a][o]), (y[a][o] = y[a][c]), (y[a][c] = e);
          o = c;
        }
    return { U: m, S: p, V: y };
  });
