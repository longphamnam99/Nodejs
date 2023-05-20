/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : learn_sequelize

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 26/04/2023 00:34:36
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- ----------------------------
-- Records of categories
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_vietnamese_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `name`, `email`, `address`, `createdAt`, `updatedAt`) VALUES (1, 'Phạm Nam Long trường IUH', 'longnam@gmail.com', 'ha noi', '2023-04-25 17:19:59', '2023-04-25 17:21:15');
INSERT INTO `users` (`id`, `name`, `email`, `address`, `createdAt`, `updatedAt`) VALUES (2, 'Bành Lưu Danh Phước', 'phuoc@gmail.com', 'hcm', '2023-04-25 17:21:53', '2023-04-25 17:21:53');
INSERT INTO `users` (`id`, `name`, `email`, `address`, `createdAt`, `updatedAt`) VALUES (3, 'Huỳnh Đức', 'duc@gmail.com', 'hcm', '2023-04-25 17:22:08', '2023-04-25 17:22:08');
INSERT INTO `users` (`id`, `name`, `email`, `address`, `createdAt`, `updatedAt`) VALUES (4, 'Đạt Nguyễn', 'dat@gmail.com', 'hcm', '2023-04-25 17:22:23', '2023-04-25 17:22:23');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
