/*
 Navicat Premium Data Transfer

 Source Server         : LocalHost
 Source Server Type    : MySQL
 Source Server Version : 100137
 Source Host           : localhost:3306
 Source Schema         : recruitment_portal

 Target Server Type    : MySQL
 Target Server Version : 100137
 File Encoding         : 65001

 Date: 17/03/2021 20:55:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for DATABASECHANGELOG
-- ----------------------------
DROP TABLE IF EXISTS `DATABASECHANGELOG`;
CREATE TABLE `DATABASECHANGELOG` (
  `ID` varchar(255) NOT NULL,
  `AUTHOR` varchar(255) NOT NULL,
  `FILENAME` varchar(255) NOT NULL,
  `DATEEXECUTED` datetime NOT NULL,
  `ORDEREXECUTED` int(11) NOT NULL,
  `EXECTYPE` varchar(10) NOT NULL,
  `MD5SUM` varchar(35) DEFAULT NULL,
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  `COMMENTS` varchar(255) DEFAULT NULL,
  `TAG` varchar(255) DEFAULT NULL,
  `LIQUIBASE` varchar(20) DEFAULT NULL,
  `CONTEXTS` varchar(255) DEFAULT NULL,
  `LABELS` varchar(255) DEFAULT NULL,
  `DEPLOYMENT_ID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DATABASECHANGELOG
-- ----------------------------
BEGIN;
INSERT INTO `DATABASECHANGELOG` VALUES ('00000000000001', 'jhipster', 'config/liquibase/changelog/00000000000000_initial_schema.xml', '2021-03-17 14:15:51', 1, 'EXECUTED', '8:3d1b9d05f4cda17fa1b5f52af16fc0e4', 'createTable tableName=user; createTable tableName=authority; createTable tableName=user_authority; addPrimaryKey tableName=user_authority; addForeignKeyConstraint baseTableName=user_authority, constraintName=fk_authority_name, referencedTableName=...', '', NULL, '3.9.0', NULL, NULL, '5965350850');
COMMIT;

-- ----------------------------
-- Table structure for DATABASECHANGELOGLOCK
-- ----------------------------
DROP TABLE IF EXISTS `DATABASECHANGELOGLOCK`;
CREATE TABLE `DATABASECHANGELOGLOCK` (
  `ID` int(11) NOT NULL,
  `LOCKED` bit(1) NOT NULL,
  `LOCKGRANTED` datetime DEFAULT NULL,
  `LOCKEDBY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of DATABASECHANGELOGLOCK
-- ----------------------------
BEGIN;
INSERT INTO `DATABASECHANGELOGLOCK` VALUES (1, b'0', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for apply_jobs
-- ----------------------------
DROP TABLE IF EXISTS `apply_jobs`;
CREATE TABLE `apply_jobs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `job_id` bigint(20) NOT NULL,
  `cv_id` bigint(20) DEFAULT NULL,
  `profile_id` bigint(20) NOT NULL,
  `apply_date` datetime DEFAULT NULL COMMENT 'Ng??y ???ng tuy???n',
  `total_correct_answer` int(11) DEFAULT NULL COMMENT 't???ng s??? c??u tr??? l???i ????ng',
  `total_question` int(11) DEFAULT NULL COMMENT 't???ng s??? c??u h???i',
  `status` int(11) DEFAULT NULL COMMENT 'Tr???ng th??i apply: 0 - M???i n???p h??? s??, 1 - ???? li??n l???c ph???ng v???n, 2 - ch??? ph???ng v???n, 3 - ch??? k???t qu??? ph???ng v???n, 4 - Pass, 5 - Fail',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `job_id` (`job_id`),
  KEY `profile_id` (`profile_id`),
  KEY `cv_id` (`cv_id`),
  CONSTRAINT `apply_jobs_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `apply_jobs_ibfk_2` FOREIGN KEY (`profile_id`) REFERENCES `profiles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `apply_jobs_ibfk_3` FOREIGN KEY (`cv_id`) REFERENCES `cvs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of apply_jobs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for authority
-- ----------------------------
DROP TABLE IF EXISTS `authority`;
CREATE TABLE `authority` (
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of authority
-- ----------------------------
BEGIN;
INSERT INTO `authority` VALUES ('ROLE_ADMIN');
INSERT INTO `authority` VALUES ('ROLE_USER');
COMMIT;

-- ----------------------------
-- Table structure for careers
-- ----------------------------
DROP TABLE IF EXISTS `careers`;
CREATE TABLE `careers` (
  `id` bigint(20) NOT NULL,
  `title` varbinary(255) NOT NULL,
  `status` int(11) DEFAULT NULL COMMENT 'Tr???ng th??i: 0 - ???n, 1 hi???n',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of careers
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of categories
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for companies
-- ----------------------------
DROP TABLE IF EXISTS `companies`;
CREATE TABLE `companies` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT 't??n c??ng ty',
  `code` varchar(255) DEFAULT NULL COMMENT 'M?? s??? thu???',
  `scope_work` varchar(255) DEFAULT NULL COMMENT 'L??nh v???c ho???t ?????ng',
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL COMMENT 'Logo',
  `website` varchar(255) DEFAULT NULL,
  `description` text COMMENT 'M?? t??? c??ng ty',
  `company_size` bigint(20) DEFAULT NULL COMMENT 'Quy m?? c??ng ty: 0 - d?????i 10 ng?????i, 1 - 10 - 20 ng?????i,...',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of companies
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for cvs
-- ----------------------------
DROP TABLE IF EXISTS `cvs`;
CREATE TABLE `cvs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` text,
  `type` int(11) DEFAULT NULL COMMENT '0 - cv ph???, 1 - cv ch??nh',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cvs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for job_careers
-- ----------------------------
DROP TABLE IF EXISTS `job_careers`;
CREATE TABLE `job_careers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `job_id` bigint(20) NOT NULL,
  `career_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `job_id` (`job_id`),
  KEY `career_id` (`career_id`),
  CONSTRAINT `job_careers_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `job_careers_ibfk_2` FOREIGN KEY (`career_id`) REFERENCES `careers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of job_careers
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for jobs
-- ----------------------------
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` text COMMENT 'M?? t??? c??ng vi???c',
  `deadline` datetime DEFAULT NULL,
  `salary` bigint(20) DEFAULT NULL COMMENT 'M???c l????ng: 0 - d?????i 3M, 1 - 3 ?????n 5M, 2 - 5 ?????n 7M, 3 - 7 ?????n 10M, 4 - 10 - 12M, 5 - 12-15M, 6 - 15-20M, 7 - 20-25M, 8 - Tr??n 25M, 9 - Th???a thu???n',
  `job_type` bigint(20) DEFAULT NULL COMMENT '0 - to??n th???i gian, 1 - b??n th???i gian, 2 - th???c t???p, 3 - remote l??m vi???c t??? xa',
  `recruite_number` bigint(20) DEFAULT NULL COMMENT 'S??? l?????ng tuy???n d???ng',
  `experience` int(11) DEFAULT NULL COMMENT 'Y??u c???u kinh nghi???m',
  `position` varchar(255) DEFAULT NULL COMMENT 'Ch???c v???',
  `skill` varchar(255) DEFAULT NULL COMMENT 'Danh s??ch k?? n??ng c???n thi???t',
  `location_id` varchar(5) DEFAULT NULL COMMENT '?????a ??i???m l??m vi???c',
  `company_id` bigint(20) DEFAULT NULL,
  `test_id` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT 'Tr???ng th??i: 0 d???ng tuy???n, 1 - ??ang tuy???n',
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  KEY `test_id` (`test_id`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `jobs_ibfk_2` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `jobs_ibfk_3` FOREIGN KEY (`location_id`) REFERENCES `provinces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jobs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for persistent_audit_event
-- ----------------------------
DROP TABLE IF EXISTS `persistent_audit_event`;
CREATE TABLE `persistent_audit_event` (
  `event_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `principal` varchar(50) NOT NULL,
  `event_date` timestamp NULL DEFAULT NULL,
  `event_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `idx_persistent_audit_event` (`principal`,`event_date`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of persistent_audit_event
-- ----------------------------
BEGIN;
INSERT INTO `persistent_audit_event` VALUES (1, 'admin', '2021-03-17 07:16:55', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (2, 'user', '2021-03-17 07:19:57', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (3, 'admin', '2021-03-17 07:22:29', 'AUTHENTICATION_SUCCESS');
COMMIT;

-- ----------------------------
-- Table structure for persistent_audit_evt_data
-- ----------------------------
DROP TABLE IF EXISTS `persistent_audit_evt_data`;
CREATE TABLE `persistent_audit_evt_data` (
  `event_id` bigint(20) NOT NULL,
  `name` varchar(150) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`event_id`,`name`),
  KEY `idx_persistent_audit_evt_data` (`event_id`),
  CONSTRAINT `fk_evt_pers_audit_evt_data` FOREIGN KEY (`event_id`) REFERENCES `persistent_audit_event` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of persistent_audit_evt_data
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `content` text,
  `thumbnail` varchar(255) DEFAULT NULL COMMENT 'Link ???nh ?????i di???n',
  `status` int(11) DEFAULT NULL COMMENT '0 - ???n, 1 - hi???n',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of posts
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for profiles
-- ----------------------------
DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `skill` varchar(255) DEFAULT NULL COMMENT 'K?? n??ng',
  `experience` int(11) DEFAULT NULL COMMENT 'Kinh nghi???m: 0-ch??a c?? kinh nghi???m, 1-d?????i 1 n??m, 2 - 1 n??m, 3 - 2 n??m, 4-3 n??m, 5 - 4 n??m, 6-5 n??m, 7 - tr??n 5 n??m',
  `interests` varchar(255) DEFAULT NULL COMMENT 'S??? th??ch',
  `job_expect` varchar(255) DEFAULT NULL COMMENT 'C??ng vi???c mong mu???n',
  `description` text COMMENT 'M?? t??? b???n th??n/mong mu???n',
  `qualification` bigint(20) DEFAULT NULL COMMENT 'Tr??nh ????? chuy??n m??n: 0 - sinh vi??n, 1 - m???i ra tr?????ng, 2-c?? kinh nghi???m, 3-tr?????ng nh??m, 4 qu???n l??/gi??m s??t, 5 - chuy??n gia, 6 - gi??m ?????c',
  `english_skill` bigint(20) DEFAULT NULL COMMENT 'Tr??nh ????? ti???ng anh: 0-kh??ng bi???t, 1 - ?????c hi???u c?? b???n, 2-?????c hi???u t??i li???u, 3 - giao ti???p t???t, 4-th??nh th???o m???i k?? n??ng',
  `cv_id` bigint(20) DEFAULT NULL COMMENT 'ID CV',
  `job_type` bigint(20) DEFAULT NULL COMMENT '0 - to??n th???i gian, 1 - b??n th???i gian, 2 - th???c t???p, 3 - remote l??m vi???c t??? xa',
  `salary_expect` bigint(20) DEFAULT NULL COMMENT 'M???c l????ng mong mu???n: 0 - d?????i 3M, 1 - 3 ?????n 5M, 2 - 5 ?????n 7M, 3 - 7 ?????n 10M, 4 - 10 - 12M, 5 - 12-15M, 6 - 15-20M, 7 - 20-25M, 8 - Tr??n 25M, 9 - Th???a thu???n',
  `career` varchar(255) DEFAULT NULL COMMENT 'Ng??nh ngh???',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `cv_id` (`cv_id`),
  CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `profiles_ibfk_2` FOREIGN KEY (`cv_id`) REFERENCES `cvs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of profiles
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for provinces
-- ----------------------------
DROP TABLE IF EXISTS `provinces`;
CREATE TABLE `provinces` (
  `id` varchar(5) CHARACTER SET utf8 NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `type` varchar(30) CHARACTER SET utf8 NOT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of provinces
-- ----------------------------
BEGIN;
INSERT INTO `provinces` VALUES ('01', 'Th??nh ph??? H?? N???i', 'Th??nh ph??? Trung ????ng');
INSERT INTO `provinces` VALUES ('02', 'T???nh H?? Giang', 'T???nh');
INSERT INTO `provinces` VALUES ('04', 'T???nh Cao B???ng', 'T???nh');
INSERT INTO `provinces` VALUES ('06', 'T???nh B???c K???n', 'T???nh');
INSERT INTO `provinces` VALUES ('08', 'T???nh Tuy??n Quang', 'T???nh');
INSERT INTO `provinces` VALUES ('10', 'T???nh L??o Cai', 'T???nh');
INSERT INTO `provinces` VALUES ('11', 'T???nh ??i???n Bi??n', 'T???nh');
INSERT INTO `provinces` VALUES ('12', 'T???nh Lai Ch??u', 'T???nh');
INSERT INTO `provinces` VALUES ('14', 'T???nh S??n La', 'T???nh');
INSERT INTO `provinces` VALUES ('15', 'T???nh Y??n B??i', 'T???nh');
INSERT INTO `provinces` VALUES ('17', 'T???nh Ho?? B??nh', 'T???nh');
INSERT INTO `provinces` VALUES ('19', 'T???nh Th??i Nguy??n', 'T???nh');
INSERT INTO `provinces` VALUES ('20', 'T???nh L???ng S??n', 'T???nh');
INSERT INTO `provinces` VALUES ('22', 'T???nh Qu???ng Ninh', 'T???nh');
INSERT INTO `provinces` VALUES ('24', 'T???nh B???c Giang', 'T???nh');
INSERT INTO `provinces` VALUES ('25', 'T???nh Ph?? Th???', 'T???nh');
INSERT INTO `provinces` VALUES ('26', 'T???nh V??nh Ph??c', 'T???nh');
INSERT INTO `provinces` VALUES ('27', 'T???nh B???c Ninh', 'T???nh');
INSERT INTO `provinces` VALUES ('30', 'T???nh H???i D????ng', 'T???nh');
INSERT INTO `provinces` VALUES ('31', 'Th??nh ph??? H???i Ph??ng', 'Th??nh ph??? Trung ????ng');
INSERT INTO `provinces` VALUES ('33', 'T???nh H??ng Y??n', 'T???nh');
INSERT INTO `provinces` VALUES ('34', 'T???nh Th??i B??nh', 'T???nh');
INSERT INTO `provinces` VALUES ('35', 'T???nh H?? Nam', 'T???nh');
INSERT INTO `provinces` VALUES ('36', 'T???nh Nam ?????nh', 'T???nh');
INSERT INTO `provinces` VALUES ('37', 'T???nh Ninh B??nh', 'T???nh');
INSERT INTO `provinces` VALUES ('38', 'T???nh Thanh H??a', 'T???nh');
INSERT INTO `provinces` VALUES ('40', 'T???nh Ngh??? An', 'T???nh');
INSERT INTO `provinces` VALUES ('42', 'T???nh H?? T??nh', 'T???nh');
INSERT INTO `provinces` VALUES ('44', 'T???nh Qu???ng B??nh', 'T???nh');
INSERT INTO `provinces` VALUES ('45', 'T???nh Qu???ng Tr???', 'T???nh');
INSERT INTO `provinces` VALUES ('46', 'T???nh Th???a Thi??n Hu???', 'T???nh');
INSERT INTO `provinces` VALUES ('48', 'Th??nh ph??? ???? N???ng', 'Th??nh ph??? Trung ????ng');
INSERT INTO `provinces` VALUES ('49', 'T???nh Qu???ng Nam', 'T???nh');
INSERT INTO `provinces` VALUES ('51', 'T???nh Qu???ng Ng??i', 'T???nh');
INSERT INTO `provinces` VALUES ('52', 'T???nh B??nh ?????nh', 'T???nh');
INSERT INTO `provinces` VALUES ('54', 'T???nh Ph?? Y??n', 'T???nh');
INSERT INTO `provinces` VALUES ('56', 'T???nh Kh??nh H??a', 'T???nh');
INSERT INTO `provinces` VALUES ('58', 'T???nh Ninh Thu???n', 'T???nh');
INSERT INTO `provinces` VALUES ('60', 'T???nh B??nh Thu???n', 'T???nh');
INSERT INTO `provinces` VALUES ('62', 'T???nh Kon Tum', 'T???nh');
INSERT INTO `provinces` VALUES ('64', 'T???nh Gia Lai', 'T???nh');
INSERT INTO `provinces` VALUES ('66', 'T???nh ?????k L???k', 'T???nh');
INSERT INTO `provinces` VALUES ('67', 'T???nh ?????k N??ng', 'T???nh');
INSERT INTO `provinces` VALUES ('68', 'T???nh L??m ?????ng', 'T???nh');
INSERT INTO `provinces` VALUES ('70', 'T???nh B??nh Ph?????c', 'T???nh');
INSERT INTO `provinces` VALUES ('72', 'T???nh T??y Ninh', 'T???nh');
INSERT INTO `provinces` VALUES ('74', 'T???nh B??nh D????ng', 'T???nh');
INSERT INTO `provinces` VALUES ('75', 'T???nh ?????ng Nai', 'T???nh');
INSERT INTO `provinces` VALUES ('77', 'T???nh B?? R???a - V??ng T??u', 'T???nh');
INSERT INTO `provinces` VALUES ('79', 'Th??nh ph??? H??? Ch?? Minh', 'Th??nh ph??? Trung ????ng');
INSERT INTO `provinces` VALUES ('80', 'T???nh Long An', 'T???nh');
INSERT INTO `provinces` VALUES ('82', 'T???nh Ti???n Giang', 'T???nh');
INSERT INTO `provinces` VALUES ('83', 'T???nh B???n Tre', 'T???nh');
INSERT INTO `provinces` VALUES ('84', 'T???nh Tr?? Vinh', 'T???nh');
INSERT INTO `provinces` VALUES ('86', 'T???nh V??nh Long', 'T???nh');
INSERT INTO `provinces` VALUES ('87', 'T???nh ?????ng Th??p', 'T???nh');
INSERT INTO `provinces` VALUES ('89', 'T???nh An Giang', 'T???nh');
INSERT INTO `provinces` VALUES ('91', 'T???nh Ki??n Giang', 'T???nh');
INSERT INTO `provinces` VALUES ('92', 'Th??nh ph??? C???n Th??', 'Th??nh ph??? Trung ????ng');
INSERT INTO `provinces` VALUES ('93', 'T???nh H???u Giang', 'T???nh');
INSERT INTO `provinces` VALUES ('94', 'T???nh S??c Tr??ng', 'T???nh');
INSERT INTO `provinces` VALUES ('95', 'T???nh B???c Li??u', 'T???nh');
INSERT INTO `provinces` VALUES ('96', 'T???nh C?? Mau', 'T???nh');
COMMIT;

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `question_title` varchar(255) DEFAULT NULL COMMENT 'C??u h???i',
  `correct_answer` int(11) DEFAULT NULL COMMENT '????p ??n ????ng',
  `answer_one` varchar(255) DEFAULT NULL,
  `answer_two` varchar(255) DEFAULT NULL,
  `answer_three` varchar(255) DEFAULT NULL,
  `answer_four` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `test_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `test_id` (`test_id`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of questions
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for tests
-- ----------------------------
DROP TABLE IF EXISTS `tests`;
CREATE TABLE `tests` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `time` bigint(20) DEFAULT NULL COMMENT 'Th???i gian l??m: t??nh b???ng ph??t',
  `status` int(11) DEFAULT NULL COMMENT 'Tr???ng th??i b??? ?????: 0 - ???n, 1 - hi???n',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tests
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) NOT NULL,
  `password_hash` varchar(60) NOT NULL,
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `image_url` varchar(256) DEFAULT NULL,
  `activated` bit(1) NOT NULL,
  `lang_key` varchar(10) DEFAULT NULL,
  `activation_key` varchar(20) DEFAULT NULL,
  `reset_key` varchar(20) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_date` timestamp NULL,
  `reset_date` timestamp NULL DEFAULT NULL,
  `last_modified_by` varchar(50) DEFAULT NULL,
  `last_modified_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_user_login` (`login`),
  UNIQUE KEY `ux_user_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (1, 'system', '$2a$10$mE.qmcV0mFU5NcKh73TZx.z4ueI/.bDWbj0T1BYyqP481kGGarKLG', 'System', 'System', 'system@localhost', '', b'1', 'en', NULL, NULL, 'system', NULL, NULL, 'system', NULL);
INSERT INTO `user` VALUES (2, 'anonymoususer', '$2a$10$j8S5d7Sr7.8VTOYNviDPOeWX8KcYILUVJBsYV83Y5NtECayypx9lO', 'Anonymous', 'User', 'anonymous@localhost', '', b'1', 'en', NULL, NULL, 'system', NULL, NULL, 'system', NULL);
INSERT INTO `user` VALUES (3, 'admin', '$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC', 'Administrator', 'Administrator', 'admin@localhost', '', b'1', 'en', NULL, NULL, 'system', NULL, NULL, 'system', NULL);
INSERT INTO `user` VALUES (4, 'user', '$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K', 'User', 'User', 'user@localhost', '', b'1', 'en', NULL, NULL, 'system', NULL, NULL, 'system', NULL);
INSERT INTO `user` VALUES (5, 'ductm', '$2a$10$nlv1x2D0jxr9B/WEtE8wh.1lt.hungPaNoRLYKgT9M1LTrsQOD5za', NULL, NULL, 'ductm.at12@gmail.com', NULL, b'0', 'en', '8bZMrMS7j1l4StJu4sr8', NULL, 'anonymousUser', '2021-03-17 07:17:25', NULL, 'anonymousUser', '2021-03-17 07:17:25');
COMMIT;

-- ----------------------------
-- Table structure for user_authority
-- ----------------------------
DROP TABLE IF EXISTS `user_authority`;
CREATE TABLE `user_authority` (
  `user_id` bigint(20) NOT NULL,
  `authority_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`,`authority_name`),
  KEY `fk_authority_name` (`authority_name`),
  CONSTRAINT `fk_authority_name` FOREIGN KEY (`authority_name`) REFERENCES `authority` (`name`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_authority
-- ----------------------------
BEGIN;
INSERT INTO `user_authority` VALUES (1, 'ROLE_ADMIN');
INSERT INTO `user_authority` VALUES (1, 'ROLE_USER');
INSERT INTO `user_authority` VALUES (3, 'ROLE_ADMIN');
INSERT INTO `user_authority` VALUES (3, 'ROLE_USER');
INSERT INTO `user_authority` VALUES (4, 'ROLE_USER');
INSERT INTO `user_authority` VALUES (5, 'ROLE_USER');
COMMIT;

-- ----------------------------
-- Table structure for user_test_questions
-- ----------------------------
DROP TABLE IF EXISTS `user_test_questions`;
CREATE TABLE `user_test_questions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `test_id` bigint(20) DEFAULT NULL,
  `question_id` bigint(20) DEFAULT NULL,
  `answer` int(11) DEFAULT NULL COMMENT 'C??u tr??? l???i c???a ng?????i d??ng t????ng ???ng v???i c??u h???i c?? question id',
  `job_id` bigint(20) DEFAULT NULL COMMENT 'B??i test trong job n??o',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL COMMENT 'Ng?????i l??m',
  PRIMARY KEY (`id`),
  KEY `user_test_questions_ibfk_1` (`test_id`),
  KEY `question_id` (`question_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_test_questions_ibfk_1` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_test_questions_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_test_questions_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_test_questions
-- ----------------------------
BEGIN;
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
