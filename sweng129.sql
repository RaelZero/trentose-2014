-- --------------------------------------------------------
-- Host:                         didattica.science.unitn.it
-- Server version:               5.5.35-0ubuntu0.12.04.2 - (Ubuntu)
-- Server OS:                    debian-linux-gnu
-- HeidiSQL version:             7.0.0.4053
-- Date/time:                    2014-05-20 13:20:07
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;

-- Dumping database structure for db_sweng129
USE `trentose`;


-- Dumping structure for table db_sweng129.agenda
CREATE TABLE IF NOT EXISTS `agenda` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `event` varchar(256) NOT NULL,
  `hour` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.cluster
CREATE TABLE IF NOT EXISTS `cluster` (
  `cluster_id` int(11) NOT NULL,
  `creation_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`cluster_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.cluster_places
CREATE TABLE IF NOT EXISTS `cluster_places` (
  `places_place_id` bigint(20) NOT NULL,
  `cluster_cluster_id` int(11) NOT NULL,
  `purpose_purpose_id` int(11) NOT NULL,
  `value` int(11) DEFAULT NULL,
  PRIMARY KEY (`places_place_id`,`cluster_cluster_id`,`purpose_purpose_id`),
  KEY `fk_places_has_cluster_cluster1_idx` (`cluster_cluster_id`),
  KEY `fk_places_has_cluster_places1_idx` (`places_place_id`),
  KEY `fk_cluster_places_purpose1_idx` (`purpose_purpose_id`),
  CONSTRAINT `fk_places_has_cluster_places1` FOREIGN KEY (`places_place_id`) REFERENCES `places` (`place_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_places_has_cluster_cluster1` FOREIGN KEY (`cluster_cluster_id`) REFERENCES `cluster` (`cluster_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_cluster_places_purpose1` FOREIGN KEY (`purpose_purpose_id`) REFERENCES `purpose` (`purpose_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.friendship
CREATE TABLE IF NOT EXISTS `friendship` (
  `user_a_id` bigint(20) NOT NULL,
  `user_b_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_a_id`,`user_b_id`),
  KEY `fk_users_has_users_users2_idx` (`user_b_id`),
  KEY `fk_users_has_users_users1_idx` (`user_a_id`),
  CONSTRAINT `fk_users_has_users_users1` FOREIGN KEY (`user_a_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_users_users2` FOREIGN KEY (`user_b_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.places
CREATE TABLE IF NOT EXISTS `places` (
  `place_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `picture` varchar(2000) DEFAULT NULL,
  `loc_street` varchar(500) DEFAULT NULL,
  `loc_city` varchar(150) DEFAULT NULL,
  `loc_state` varchar(150) DEFAULT NULL,
  `loc_country` varchar(100) DEFAULT NULL,
  `loc_latitude` decimal(13,10) DEFAULT NULL,
  `loc_longitude` decimal(13,10) DEFAULT NULL,
  PRIMARY KEY (`place_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.places_tag
CREATE TABLE IF NOT EXISTS `places_tag` (
  `place_id` bigint(20) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`place_id`,`tag_id`),
  KEY `fk_places_has_tag_tag1_idx` (`tag_id`),
  KEY `fk_places_has_tag_places1_idx` (`place_id`),
  CONSTRAINT `fk_places_has_tag_places1` FOREIGN KEY (`place_id`) REFERENCES `places` (`place_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_places_has_tag_tag1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`tag_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.purpose
CREATE TABLE IF NOT EXISTS `purpose` (
  `purpose_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`purpose_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.ratings
CREATE TABLE IF NOT EXISTS `ratings` (
  `place_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `purpose_id` int(11) NOT NULL,
  `value` int(11) NOT NULL DEFAULT '0',
  `comment` varchar(1000) DEFAULT NULL,
  `creation_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`place_id`,`user_id`,`purpose_id`),
  KEY `rating_user_idx` (`user_id`),
  KEY `rating_place_idx` (`place_id`),
  KEY `purpose_fk_idx` (`purpose_id`),
  CONSTRAINT `places_fk` FOREIGN KEY (`place_id`) REFERENCES `places` (`place_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `purpose_fk` FOREIGN KEY (`purpose_id`) REFERENCES `purpose` (`purpose_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `users_fk` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.runnr
CREATE TABLE IF NOT EXISTS `runnr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_type` varchar(45) NOT NULL,
  `time_spent` int(11) NOT NULL,
  `calories` int(11) NOT NULL,
  `distance` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.tag
CREATE TABLE IF NOT EXISTS `tag` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.users
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(500) DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `bday` date DEFAULT NULL,
  `first_login` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fb_extid` varchar(100) DEFAULT NULL,
  `trustful` smallint(6) DEFAULT '0',
  `loc_city` varchar(45) DEFAULT NULL,
  `loc_country` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.


-- Dumping structure for table db_sweng129.users_cluster
CREATE TABLE IF NOT EXISTS `users_cluster` (
  `user_id` bigint(20) NOT NULL,
  `cluster_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`cluster_id`),
  KEY `fk_users_has_cluster_cluster1_idx` (`cluster_id`),
  KEY `fk_users_has_cluster_users1_idx` (`user_id`),
  CONSTRAINT `fk_users_has_cluster_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_cluster_cluster1` FOREIGN KEY (`cluster_id`) REFERENCES `cluster` (`cluster_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Data exporting was unselected.
/*!40014 SET FOREIGN_KEY_CHECKS=1 */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
