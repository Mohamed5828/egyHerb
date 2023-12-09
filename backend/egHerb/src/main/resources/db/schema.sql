CREATE DATABASE IF NOT EXISTS `products_directory`;
USE `products_directory`;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `product_category`;
DROP TABLE IF EXISTS `user_address`;
DROP TABLE IF EXISTS `cart_items`;
DROP TABLE IF EXISTS `payment_details`;
DROP TABLE IF EXISTS `order_items`;
DROP TABLE IF EXISTS `products`;
DROP TABLE IF EXISTS `brand`;
DROP TABLE IF EXISTS `order_details`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `category`;

CREATE TABLE `brand` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) ,
  `brand_url` VARCHAR(255) ,
  PRIMARY KEY (`id`)
);


CREATE TABLE `products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_url` VARCHAR(255) ,
  `title` VARCHAR(100) DEFAULT NULL,
  `description` TEXT DEFAULT NULL,
  `suggested_use` TEXT DEFAULT NULL,
  `other_ingredients` TEXT DEFAULT NULL,
  `categories_description` TEXT DEFAULT NULL,
  `category_id` INT DEFAULT NULL,
  `popularity` INT ,
  `rating_count` INT ,
  `first_image` VARCHAR(255) DEFAULT  NULL,
  `second_image` VARCHAR(255) DEFAULT NULL,
  `weight` VARCHAR(10) DEFAULT  NULL,
  `quantity` VARCHAR(15) DEFAULT  NULL,
  `price_eg` DECIMAL,
  `price_us` DECIMAL  NULL,
  `dimensions` VARCHAR(45) DEFAULT  NULL,
  `expiry_date` VARCHAR(15) DEFAULT  NULL,
  `brand_id` INT ,
  `modified_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`)
  FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
);


CREATE TABLE `category` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100),
);

CREATE TABLE `product_category` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `product_id` INT,
  `category_id` INT,
  UNIQUE KEY `unique_product_category` (`product_id`, `category_id`), -- Add a unique constraint
  FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
);

-- -- Index on product_category.product_id
-- CREATE INDEX idx_product_category_product_id ON products_directory.product_category (product_id);

-- -- Index on product_category.category_id
-- CREATE INDEX idx_product_category_category_id ON products_directory.product_category (category_id);

-- SELECT C.category_name
-- FROM products_directory.category AS C
-- INNER JOIN products_directory.product_category AS PC ON C.id = PC.category_id
-- WHERE PC.product_id = 4;

-- SELECT P.*
-- FROM products_directory.products AS P
-- INNER JOIN products_directory.product_category AS PC ON P.id = PC.product_id
-- WHERE PC.category_id = 1;



CREATE TABLE `user` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  password TEXT,
  first_name VARCHAR(20),
  last_name VARCHAR(20),
  email VARCHAR(255) NOT NULL,
  mobile INT,
  app_user_role VARCHAR(50) NOT NULL,
  created_at TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  CONSTRAINT unique_email UNIQUE (email)

);



CREATE TABLE `cart_items`(
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  quantity INT,
  created_at TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (product_id) REFERENCES products(id),
  FOREIGN KEY (user_id) REFERENCES app_user(id)
);



CREATE TABLE `order_details` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  total INT,
  payment_id INT,
  created_at TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES app_user(id)
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
  status VARCHAR(50),
  created_at TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id) REFERENCES order_details(id)
);





CREATE TABLE `user_address` (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  address_line1 VARCHAR(255),
  address_line2 VARCHAR(255),
  city VARCHAR(20),
  area VARCHAR(30),
  mobile INT,
  FOREIGN KEY (user_id) REFERENCES app_user(id)
);

