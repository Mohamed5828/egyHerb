CREATE DATABASE IF NOT EXISTS `products_directory`;
USE `products_directory`;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `productsproducts`;

CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `popularity` INT DEFAULT NULL,
  `first_image` VARCHAR(255) DEFAULT NULL,
  `second_image` VARCHAR(255) DEFAULT NULL,
  `weight` VARCHAR(45) DEFAULT NULL,
  `quantity` VARCHAR(45) DEFAULT NULL,
  `price_us` FLOAT DEFAULT NULL,
  `price_eg` FLOAT DEFAULT NULL,
  `dimensions` VARCHAR(45) DEFAULT NULL,
  `expiry_date` VARCHAR(45) DEFAULT NULL,
  `category_id` INT NOT NULL,
  `modified_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  INDEX `idx_category_id` (`category_id`),
  CONSTRAINT `fk_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;


--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;