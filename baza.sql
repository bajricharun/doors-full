
CREATE TABLE `models` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image_loc` varchar(255) NOT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `models`
--

INSERT INTO `models` (`id`, `name`, `image_loc`, `price`) VALUES
(1, 'EUE 1', './media/model/eue_1.png', 100),
(2, 'EUP 1', './media/model/eup_1.png', 120),
(3, 'EUS 1', './media/model/eus_1.png', 150);

-- --------------------------------------------------------

--
-- Table structure for table `types`
--

CREATE TABLE `types` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image_loc` varchar(255) NOT NULL,
  `price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `types`
--

INSERT INTO `types` (`id`, `name`, `image_loc`, `price`) VALUES
(1, 'Ordinary doors', './media/type/gr1_1.png', 50),
(2, 'Ordinary doors with glass', './media/type/gr1_2.png', 70),
(3, 'Ordinary doors with top', './media/type/gr1_4.png', 70),
(4, 'Doors with left side glass', './media/type/gr2_2.png', 100),
(5, 'Double doors', './media/type/gr3_2.png', 120),
(6, 'Double doors with glass pane', './media/type/gr3_3.png', 150);

ALTER TABLE `models`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`id`);

-- AUTO_INCREMENT for table `models`
--
ALTER TABLE `models`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `types`
--
ALTER TABLE `types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;
