CREATE DATABASE IF NOT EXISTS `products_directory`;
USE `products_directory`;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `user_address`;
DROP TABLE IF EXISTS `cart_items`;
DROP TABLE IF EXISTS `payment_details`;
DROP TABLE IF EXISTS `order_items`;
DROP TABLE IF EXISTS `products`;
DROP TABLE IF EXISTS `category`;
DROP TABLE IF EXISTS `order_details`;
DROP TABLE IF EXISTS `user`;

CREATE TABLE `category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) ,
  `category_url` VARCHAR(255) ,
  PRIMARY KEY (`id`)
);


CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_url` VARCHAR(255) ,
  `title` VARCHAR(255) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `popularity` INT ,
  `first_image` VARCHAR(255) DEFAULT  NULL,
  `second_image` VARCHAR(255) DEFAULT NULL,
  `weight` VARCHAR(45) DEFAULT  NULL,
  `quantity` VARCHAR(45) DEFAULT  NULL,
  `price_eg` DECIMAL,
  `price_us` DECIMAL  NULL,
  `dimensions` VARCHAR(45) DEFAULT  NULL,
  `expiry_date` VARCHAR(45) DEFAULT  NULL,
  `category_id` INT ,
  `modified_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
);


--
-- Table structure for table `category`	


CREATE TABLE `user` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  password TEXT,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  mobile INT,
  created_at TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);



CREATE TABLE `cart_items`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  quantity INT,
  created_at TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);



CREATE TABLE `order_details` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  total INT,
  payment_id INT,
  created_at TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES user(id)
);


CREATE TABLE `order_items`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  product_id INT,
  created_at TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (order_id) REFERENCES order_details(id)
);


CREATE TABLE `payment_details` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  status VARCHAR(255),
  created_at TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES order_details(id)
);





CREATE TABLE `user_address` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(255),
  area VARCHAR(255),
  mobile INT,
  FOREIGN KEY (user_id) REFERENCES user(id)
);

