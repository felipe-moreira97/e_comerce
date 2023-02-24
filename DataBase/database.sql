CREATE SCHEMA IF NOT EXISTS e_comerce;

CREATE TABLE IF NOT EXISTS e_comerce.category (
  id_category INT NOT NULL AUTO_INCREMENT,
  category VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_category),
  UNIQUE KEY (category)
  );

CREATE TABLE IF NOT EXISTS e_comerce.product (
  id_product INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  price FLOAT UNSIGNED NOT NULL,
  description VARCHAR(255) NULL,
  imagePath VARCHAR(255) NULL,
  quantity INT UNSIGNED NULL,
  id_category INT NOT NULL,
  PRIMARY KEY (id_product),
  UNIQUE KEY (id_product),
  UNIQUE KEY (name),
    FOREIGN KEY (id_category)
    REFERENCES e_comerce.category (id_category));

CREATE TABLE IF NOT EXISTS e_comerce.client (
  id_client INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  hash VARCHAR(60) NOT NULL,
  PRIMARY KEY (id_client),
  UNIQUE KEY (id_client),
  UNIQUE KEY (email));

  CREATE TABLE IF NOT EXISTS e_comerce.order (
  id_order INT NOT NULL AUTO_INCREMENT,
  status ENUM('PROCESSING', 'SENDING', 'DELIVERED') NOT NULL DEFAULT 'PROCESSING',
  timestamp TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  id_client INT UNSIGNED NOT NULL,
  PRIMARY KEY (id_order),
    FOREIGN KEY (id_client)
    REFERENCES e_comerce.client (id_client),
  UNIQUE KEY (id_order));

CREATE TABLE IF NOT EXISTS e_comerce.order_has_product (
  id_product INT NOT NULL,
  id_order INT NOT NULL,
  quantity INT UNSIGNED NOT NULL,
  PRIMARY KEY (id_product, id_order),
    FOREIGN KEY (id_product)
    REFERENCES e_comerce.product (id_product),
    FOREIGN KEY (id_order)
    REFERENCES e_comerce.order (id_order));

CREATE TABLE IF NOT EXISTS e_comerce.admin (
  id_admin INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  hash VARCHAR(60) NOT NULL,
  PRIMARY KEY (id_admin),
  UNIQUE KEY (id_admin),
  UNIQUE KEY (email));

INSERT INTO e_comerce.admin (name,email,hash)
VALUES ('admin','admin@email.com','$2b$10$k5iIf6JNjTidcqgUzt0m5evQupCC.3P2EXChdxeeV50UcNolip/HG');
