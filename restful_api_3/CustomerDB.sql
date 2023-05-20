/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : CustomerDB

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 04/03/2023 22:47:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for CustomerTB
-- ----------------------------
DROP TABLE IF EXISTS `CustomerTB`;
CREATE TABLE `CustomerTB` (
  `customerID` int NOT NULL AUTO_INCREMENT,
  `customerName` varchar(45) DEFAULT NULL,
  `sex` varchar(5) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `departmentID` int DEFAULT NULL,
  PRIMARY KEY (`customerID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of CustomerTB
-- ----------------------------
BEGIN;
INSERT INTO `CustomerTB` (`customerID`, `customerName`, `sex`, `email`, `departmentID`) VALUES (3, 'Pham Nam Long 1', 'Nam', 'longpham@iuh.vn', 1);
COMMIT;

-- ----------------------------
-- Table structure for DepartmentTB
-- ----------------------------
DROP TABLE IF EXISTS `DepartmentTB`;
CREATE TABLE `DepartmentTB` (
  `departmentID` int NOT NULL,
  `departmentName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`departmentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of DepartmentTB
-- ----------------------------
BEGIN;
INSERT INTO `DepartmentTB` (`departmentID`, `departmentName`) VALUES (1, 'Hồ Chí Minh');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
