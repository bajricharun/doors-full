SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `frontdoors`
--

-- --------------------------------------------------------

--
-- Table structure for table `color_application`
--

CREATE TABLE `color_application` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf32_swedish_ci NOT NULL,
  `type` text COLLATE utf32_swedish_ci NOT NULL,
  `image_location` text COLLATE utf32_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `color_door_frame`
--

CREATE TABLE `color_door_frame` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf32_swedish_ci NOT NULL,
  `type` text COLLATE utf32_swedish_ci NOT NULL,
  `image_location` text COLLATE utf32_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `colours`
--

CREATE TABLE `colours` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf32_swedish_ci NOT NULL,
  `type` text COLLATE utf32_swedish_ci NOT NULL,
  `image_location` text COLLATE utf32_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `decorative_glass`
--

CREATE TABLE `decorative_glass` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf32_swedish_ci NOT NULL,
  `image_location` text COLLATE utf32_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `ornament_glass`
--

CREATE TABLE `ornament_glass` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf32_swedish_ci NOT NULL,
  `image_location` text COLLATE utf32_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_swedish_ci;

-- --------------------------------------------------------

--
-- Table structure for table `systems`
--

CREATE TABLE `systems` (
  `id` int(11) NOT NULL,
  `name` text COLLATE utf32_swedish_ci NOT NULL,
  `price` double NOT NULL,
  `image_location` text COLLATE utf32_swedish_ci NOT NULL,
  `description` text COLLATE utf32_swedish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_swedish_ci;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
