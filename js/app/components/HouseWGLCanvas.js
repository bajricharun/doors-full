define([
  "require",
  "backbone",
  "underscore",
  "app/models/Model",
  "app/events/KEvent",
  "app/util/Util",
  "app/util/ImageLoader",
  "numeric",
], function (t) {
  var e = t("backbone"),
    i = t("underscore"),
    r = t("app/models/Model"),
    s = t("app/events/KEvent"),
    o = t("app/util/Util");
  t("app/util/ImageLoader"), t("numeric");
  return e.View.extend({
    initialize: function () {
      i.bindAll(this, "loadScreenTexture"),
        (this.data = r.getInstance()),
        this.listenTo(s, s.HOUSE_DOOR_DONE, this.onHouseDoorImageDone),
        this.listenTo(s, s.HOUSE_COOR_UPDATE, this.redrawImg),
        (this.srcPoints = []),
        (this.qualityOptions = {}),
        (this.qualityOptions.anisotropicFiltering = !0),
        (this.qualityOptions.mipMapping = !0),
        (this.qualityOptions.linearFiltering = !0),
        (this.screenCanvasElement = this.el);
      var t = { antialias: !0, depth: !1, preserveDrawingBuffer: !0 };
      (this.gl =
        this.screenCanvasElement.getContext("webgl", t) ||
        this.screenCanvasElement.getContext("experimental-webgl", t)),
        this.gl || this.addError("Your browser doesn't seem to support WebGL."),
        (this.anisoExt =
          this.gl.getExtension("EXT_texture_filter_anisotropic") ||
          this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic")),
        this.anisoExt ||
          ((this.qualityOptions.anisotropicFiltering = !1),
          this.addError(
            "Your browser doesn't support anisotropic filtering. Ordinary MIP mapping will be used."
          )),
        (this.glResources = this.setupGlContext()),
        this.screenTextureSize;
    },
    setupGlContext: function () {
      var t = {},
        e = [
          "attribute vec2 aVertCoord;",
          "uniform mat4 uTransformMatrix;",
          "varying vec2 vTextureCoord;",
          "void main(void) {",
          "    vTextureCoord = aVertCoord;",
          "    gl_Position = uTransformMatrix * vec4(aVertCoord, 0.0, 1.0);",
          "}",
        ].join("\n"),
        i = this.gl.createShader(this.gl.VERTEX_SHADER);
      this.gl.shaderSource(i, e),
        this.gl.compileShader(i),
        this.gl.getShaderParameter(i, this.gl.COMPILE_STATUS) ||
          this.addError(
            "Failed to compile vertex shader:" + this.gl.getShaderInfoLog(i)
          );
      var r = [
          "precision mediump float;",
          "varying vec2 vTextureCoord;",
          "uniform sampler2D uSampler;",
          "void main(void)  {",
          "    gl_FragColor = texture2D(uSampler, vTextureCoord);",
          "}",
        ].join("\n"),
        s = this.gl.createShader(this.gl.FRAGMENT_SHADER);
      return (
        this.gl.shaderSource(s, r),
        this.gl.compileShader(s),
        this.gl.getShaderParameter(s, this.gl.COMPILE_STATUS) ||
          this.addError(
            "Failed to compile fragment shader:" + this.gl.getShaderInfoLog(s)
          ),
        (t.shaderProgram = this.gl.createProgram()),
        this.gl.attachShader(t.shaderProgram, i),
        this.gl.attachShader(t.shaderProgram, s),
        this.gl.linkProgram(t.shaderProgram),
        this.gl.getProgramParameter(t.shaderProgram, this.gl.LINK_STATUS) ||
          this.addError("Shader linking failed."),
        (t.vertexBuffer = this.gl.createBuffer()),
        this.gl.useProgram(t.shaderProgram),
        (t.vertAttrib = this.gl.getAttribLocation(
          t.shaderProgram,
          "aVertCoord"
        )),
        (t.transMatUniform = this.gl.getUniformLocation(
          t.shaderProgram,
          "uTransformMatrix"
        )),
        (t.samplerUniform = this.gl.getUniformLocation(
          t.shaderProgram,
          "uSampler"
        )),
        (t.screenTexture = this.gl.createTexture()),
        t
      );
    },
    loadScreenTexture: function (t) {
      if (this.gl && this.glResources) {
        var e = { w: t.width, h: t.height };
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.glResources.screenTexture);
        var i = document.createElement("canvas");
        (i.width = this.nextHighestPowerOfTwo(e.w)),
          (i.height = this.nextHighestPowerOfTwo(e.h));
        if (
          (i.getContext("2d").drawImage(t, 0, 0, t.width, t.height),
          this.gl.texImage2D(
            this.gl.TEXTURE_2D,
            0,
            this.gl.RGBA,
            this.gl.RGBA,
            this.gl.UNSIGNED_BYTE,
            i
          ),
          this.qualityOptions.linearFiltering
            ? (this.gl.texParameteri(
                this.gl.TEXTURE_2D,
                this.gl.TEXTURE_MIN_FILTER,
                this.qualityOptions.mipMapping
                  ? this.gl.LINEAR_MIPMAP_LINEAR
                  : this.gl.LINEAR
              ),
              this.gl.texParameteri(
                this.gl.TEXTURE_2D,
                this.gl.TEXTURE_MAG_FILTER,
                this.gl.LINEAR
              ))
            : (this.gl.texParameteri(
                this.gl.TEXTURE_2D,
                this.gl.TEXTURE_MIN_FILTER,
                this.qualityOptions.mipMapping
                  ? this.gl.NEAREST_MIPMAP_NEAREST
                  : this.gl.LINEAR
              ),
              this.gl.texParameteri(
                this.gl.TEXTURE_2D,
                this.gl.TEXTURE_MAG_FILTER,
                this.gl.NEAREST
              )),
          this.anisoExt)
        ) {
          var r = this.qualityOptions.anisotropicFiltering
            ? this.gl.getParameter(this.anisoExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
            : 1;
          this.gl.texParameterf(
            this.gl.TEXTURE_2D,
            this.anisoExt.TEXTURE_MAX_ANISOTROPY_EXT,
            r
          );
        }
        this.qualityOptions.mipMapping &&
          this.gl.generateMipmap(this.gl.TEXTURE_2D),
          this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        var s = e.w / i.width,
          o = e.h / i.height;
        this.srcPoints = [
          { x: 0, y: 0 },
          { x: s, y: 0 },
          { x: 0, y: o },
          { x: s, y: o },
        ];
        for (var a = [], h = 0; h < this.srcPoints.length; h++)
          a.push(this.srcPoints[h].x), a.push(this.srcPoints[h].y);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.glResources.vertexBuffer),
          this.gl.bufferData(
            this.gl.ARRAY_BUFFER,
            new Float32Array(a),
            this.gl.STATIC_DRAW
          ),
          this.redrawImg();
      }
    },
    isPowerOfTwo: function (t) {
      return 0 == (t & (t - 1));
    },
    nextHighestPowerOfTwo: function (t) {
      --t;
      for (var e = 1; e < 32; e <<= 1) t |= t >> e;
      return t + 1;
    },
    redrawImg: function (t, e) {
      if (this.gl && this.glResources && this.srcPoints) {
        t && (this.controlPoints = t);
        for (
          var i = this.screenCanvasElement.width,
            r = this.screenCanvasElement.height,
            o = [],
            a = 0;
          a < this.controlPoints.length;
          a++
        )
          o.push({
            x: (2 * this.controlPoints[a].x) / i - 1,
            y: (-2 * this.controlPoints[a].y) / r + 1,
          });
        var h = this.transformationFromQuadCorners(this.srcPoints, o);
        this.gl.clearColor(0, 0, 0, 0),
          this.gl.viewport(0, 0, i, r),
          this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT),
          this.gl.useProgram(this.glResources.shaderProgram),
          this.gl.bindBuffer(
            this.gl.ARRAY_BUFFER,
            this.glResources.vertexBuffer
          ),
          this.gl.enableVertexAttribArray(this.glResources.vertAttrib),
          this.gl.vertexAttribPointer(
            this.glResources.vertAttrib,
            2,
            this.gl.FLOAT,
            !1,
            0,
            0
          ),
          this.gl.uniformMatrix4fv(this.glResources.transMatUniform, !1, [
            h[0],
            h[1],
            0,
            h[2],
            h[3],
            h[4],
            0,
            h[5],
            0,
            0,
            0,
            0,
            h[6],
            h[7],
            0,
            1,
          ]),
          this.gl.activeTexture(this.gl.TEXTURE0),
          this.gl.bindTexture(
            this.gl.TEXTURE_2D,
            this.glResources.screenTexture
          ),
          this.gl.uniform1i(this.glResources.samplerUniform, 0),
          this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4),
          e && s.trigger(s.HOUSE_CANVAS_RESIZE_DONE),
          (this.data.houseImageLoading = !1);
      }
    },
    transformationFromQuadCorners: function (t, e) {
      for (
        var i = numeric.transpose([
            [e[0].x, e[0].y, e[1].x, e[1].y, e[2].x, e[2].y, e[3].x, e[3].y],
          ]),
          r = [],
          s = 0;
        s < t.length;
        s++
      )
        r.push([
          t[s].x,
          0,
          -e[s].x * t[s].x,
          t[s].y,
          0,
          -e[s].x * t[s].y,
          1,
          0,
        ]),
          r.push([
            0,
            t[s].x,
            -e[s].y * t[s].x,
            0,
            t[s].y,
            -e[s].y * t[s].y,
            0,
            1,
          ]);
      return numeric.transpose(numeric.dot(numeric.inv(r), i))[0];
    },
    onHouseDoorImageDone: function (t, e) {
      (this.controlPoints = t), this.loadScreenTexture(e);
    },
    addError: function (t) {
      o.log("WebGL canvas err", t);
    },
  });
});
