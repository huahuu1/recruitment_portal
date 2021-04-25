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
  `apply_date` datetime DEFAULT NULL COMMENT 'Ngày ứng tuyển',
  `total_correct_answer` int(11) DEFAULT NULL COMMENT 'tổng số câu trả lời đúng',
  `total_question` int(11) DEFAULT NULL COMMENT 'tổng số câu hỏi',
  `status` int(11) DEFAULT NULL COMMENT 'Trạng thái apply: 0 - Mới nộp hồ sơ, 1 - đã liên lạc phỏng vấn, 2 - chờ phỏng vấn, 3 - chờ kết quả phỏng vấn, 4 - Pass, 5 - Fail',
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
  `status` int(11) DEFAULT NULL COMMENT 'Trạng thái: 0 - ẩn, 1 hiện',
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
  `name` varchar(255) NOT NULL COMMENT 'tên công ty',
  `code` varchar(255) DEFAULT NULL COMMENT 'Mã số thuế',
  `scope_work` varchar(255) DEFAULT NULL COMMENT 'Lĩnh vực hoạt động',
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL COMMENT 'Logo',
  `website` varchar(255) DEFAULT NULL,
  `description` text COMMENT 'Mô tả công ty',
  `company_size` bigint(20) DEFAULT NULL COMMENT 'Quy mô công ty: 0 - dưới 10 người, 1 - 10 - 20 người,...',
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
  `type` int(11) DEFAULT NULL COMMENT '0 - cv phụ, 1 - cv chính',
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
  `content` text COMMENT 'Mô tả công việc',
  `deadline` datetime DEFAULT NULL,
  `salary` bigint(20) DEFAULT NULL COMMENT 'Mức lương: 0 - dưới 3M, 1 - 3 đến 5M, 2 - 5 đến 7M, 3 - 7 đến 10M, 4 - 10 - 12M, 5 - 12-15M, 6 - 15-20M, 7 - 20-25M, 8 - Trên 25M, 9 - Thỏa thuận',
  `job_type` bigint(20) DEFAULT NULL COMMENT '0 - toàn thời gian, 1 - bán thời gian, 2 - thực tập, 3 - remote làm việc từ xa',
  `recruite_number` bigint(20) DEFAULT NULL COMMENT 'Số lượng tuyển dụng',
  `experience` int(11) DEFAULT NULL COMMENT 'Yêu cầu kinh nghiệm',
  `position` varchar(255) DEFAULT NULL COMMENT 'Chức vụ',
  `skill` varchar(255) DEFAULT NULL COMMENT 'Danh sách kĩ năng cần thiết',
  `location_id` varchar(5) DEFAULT NULL COMMENT 'Địa điểm làm việc',
  `company_id` bigint(20) DEFAULT NULL,
  `test_id` bigint(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT 'Trạng thái: 0 dừng tuyển, 1 - đang tuyển',
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
  `thumbnail` varchar(255) DEFAULT NULL COMMENT 'Link ảnh đại diện',
  `status` int(11) DEFAULT NULL COMMENT '0 - ẩn, 1 - hiện',
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
  `skill` varchar(255) DEFAULT NULL COMMENT 'Kĩ năng',
  `experience` int(11) DEFAULT NULL COMMENT 'Kinh nghiệm: 0-chưa có kinh nghiệm, 1-dưới 1 năm, 2 - 1 năm, 3 - 2 năm, 4-3 năm, 5 - 4 năm, 6-5 năm, 7 - trên 5 năm',
  `interests` varchar(255) DEFAULT NULL COMMENT 'Sở thích',
  `job_expect` varchar(255) DEFAULT NULL COMMENT 'Công việc mong muốn',
  `description` text COMMENT 'Mô tả bản thân/mong muốn',
  `qualification` bigint(20) DEFAULT NULL COMMENT 'Trình độ chuyên môn: 0 - sinh viên, 1 - mới ra trường, 2-có kinh nghiệm, 3-trưởng nhóm, 4 quản lý/giám sát, 5 - chuyên gia, 6 - giám đốc',
  `english_skill` bigint(20) DEFAULT NULL COMMENT 'Trình độ tiếng anh: 0-không biết, 1 - đọc hiểu cơ bản, 2-đọc hiểu tài liệu, 3 - giao tiếp tốt, 4-thành thạo mọi kĩ năng',
  `cv_id` bigint(20) DEFAULT NULL COMMENT 'ID CV',
  `job_type` bigint(20) DEFAULT NULL COMMENT '0 - toàn thời gian, 1 - bán thời gian, 2 - thực tập, 3 - remote làm việc từ xa',
  `salary_expect` bigint(20) DEFAULT NULL COMMENT 'Mức lương mong muốn: 0 - dưới 3M, 1 - 3 đến 5M, 2 - 5 đến 7M, 3 - 7 đến 10M, 4 - 10 - 12M, 5 - 12-15M, 6 - 15-20M, 7 - 20-25M, 8 - Trên 25M, 9 - Thỏa thuận',
  `career` varchar(255) DEFAULT NULL COMMENT 'Ngành nghề',
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
INSERT INTO `provinces` VALUES ('01', 'Thành phố Hà Nội', 'Thành phố Trung ương');
INSERT INTO `provinces` VALUES ('02', 'Tỉnh Hà Giang', 'Tỉnh');
INSERT INTO `provinces` VALUES ('04', 'Tỉnh Cao Bằng', 'Tỉnh');
INSERT INTO `provinces` VALUES ('06', 'Tỉnh Bắc Kạn', 'Tỉnh');
INSERT INTO `provinces` VALUES ('08', 'Tỉnh Tuyên Quang', 'Tỉnh');
INSERT INTO `provinces` VALUES ('10', 'Tỉnh Lào Cai', 'Tỉnh');
INSERT INTO `provinces` VALUES ('11', 'Tỉnh Điện Biên', 'Tỉnh');
INSERT INTO `provinces` VALUES ('12', 'Tỉnh Lai Châu', 'Tỉnh');
INSERT INTO `provinces` VALUES ('14', 'Tỉnh Sơn La', 'Tỉnh');
INSERT INTO `provinces` VALUES ('15', 'Tỉnh Yên Bái', 'Tỉnh');
INSERT INTO `provinces` VALUES ('17', 'Tỉnh Hoà Bình', 'Tỉnh');
INSERT INTO `provinces` VALUES ('19', 'Tỉnh Thái Nguyên', 'Tỉnh');
INSERT INTO `provinces` VALUES ('20', 'Tỉnh Lạng Sơn', 'Tỉnh');
INSERT INTO `provinces` VALUES ('22', 'Tỉnh Quảng Ninh', 'Tỉnh');
INSERT INTO `provinces` VALUES ('24', 'Tỉnh Bắc Giang', 'Tỉnh');
INSERT INTO `provinces` VALUES ('25', 'Tỉnh Phú Thọ', 'Tỉnh');
INSERT INTO `provinces` VALUES ('26', 'Tỉnh Vĩnh Phúc', 'Tỉnh');
INSERT INTO `provinces` VALUES ('27', 'Tỉnh Bắc Ninh', 'Tỉnh');
INSERT INTO `provinces` VALUES ('30', 'Tỉnh Hải Dương', 'Tỉnh');
INSERT INTO `provinces` VALUES ('31', 'Thành phố Hải Phòng', 'Thành phố Trung ương');
INSERT INTO `provinces` VALUES ('33', 'Tỉnh Hưng Yên', 'Tỉnh');
INSERT INTO `provinces` VALUES ('34', 'Tỉnh Thái Bình', 'Tỉnh');
INSERT INTO `provinces` VALUES ('35', 'Tỉnh Hà Nam', 'Tỉnh');
INSERT INTO `provinces` VALUES ('36', 'Tỉnh Nam Định', 'Tỉnh');
INSERT INTO `provinces` VALUES ('37', 'Tỉnh Ninh Bình', 'Tỉnh');
INSERT INTO `provinces` VALUES ('38', 'Tỉnh Thanh Hóa', 'Tỉnh');
INSERT INTO `provinces` VALUES ('40', 'Tỉnh Nghệ An', 'Tỉnh');
INSERT INTO `provinces` VALUES ('42', 'Tỉnh Hà Tĩnh', 'Tỉnh');
INSERT INTO `provinces` VALUES ('44', 'Tỉnh Quảng Bình', 'Tỉnh');
INSERT INTO `provinces` VALUES ('45', 'Tỉnh Quảng Trị', 'Tỉnh');
INSERT INTO `provinces` VALUES ('46', 'Tỉnh Thừa Thiên Huế', 'Tỉnh');
INSERT INTO `provinces` VALUES ('48', 'Thành phố Đà Nẵng', 'Thành phố Trung ương');
INSERT INTO `provinces` VALUES ('49', 'Tỉnh Quảng Nam', 'Tỉnh');
INSERT INTO `provinces` VALUES ('51', 'Tỉnh Quảng Ngãi', 'Tỉnh');
INSERT INTO `provinces` VALUES ('52', 'Tỉnh Bình Định', 'Tỉnh');
INSERT INTO `provinces` VALUES ('54', 'Tỉnh Phú Yên', 'Tỉnh');
INSERT INTO `provinces` VALUES ('56', 'Tỉnh Khánh Hòa', 'Tỉnh');
INSERT INTO `provinces` VALUES ('58', 'Tỉnh Ninh Thuận', 'Tỉnh');
INSERT INTO `provinces` VALUES ('60', 'Tỉnh Bình Thuận', 'Tỉnh');
INSERT INTO `provinces` VALUES ('62', 'Tỉnh Kon Tum', 'Tỉnh');
INSERT INTO `provinces` VALUES ('64', 'Tỉnh Gia Lai', 'Tỉnh');
INSERT INTO `provinces` VALUES ('66', 'Tỉnh Đắk Lắk', 'Tỉnh');
INSERT INTO `provinces` VALUES ('67', 'Tỉnh Đắk Nông', 'Tỉnh');
INSERT INTO `provinces` VALUES ('68', 'Tỉnh Lâm Đồng', 'Tỉnh');
INSERT INTO `provinces` VALUES ('70', 'Tỉnh Bình Phước', 'Tỉnh');
INSERT INTO `provinces` VALUES ('72', 'Tỉnh Tây Ninh', 'Tỉnh');
INSERT INTO `provinces` VALUES ('74', 'Tỉnh Bình Dương', 'Tỉnh');
INSERT INTO `provinces` VALUES ('75', 'Tỉnh Đồng Nai', 'Tỉnh');
INSERT INTO `provinces` VALUES ('77', 'Tỉnh Bà Rịa - Vũng Tàu', 'Tỉnh');
INSERT INTO `provinces` VALUES ('79', 'Thành phố Hồ Chí Minh', 'Thành phố Trung ương');
INSERT INTO `provinces` VALUES ('80', 'Tỉnh Long An', 'Tỉnh');
INSERT INTO `provinces` VALUES ('82', 'Tỉnh Tiền Giang', 'Tỉnh');
INSERT INTO `provinces` VALUES ('83', 'Tỉnh Bến Tre', 'Tỉnh');
INSERT INTO `provinces` VALUES ('84', 'Tỉnh Trà Vinh', 'Tỉnh');
INSERT INTO `provinces` VALUES ('86', 'Tỉnh Vĩnh Long', 'Tỉnh');
INSERT INTO `provinces` VALUES ('87', 'Tỉnh Đồng Tháp', 'Tỉnh');
INSERT INTO `provinces` VALUES ('89', 'Tỉnh An Giang', 'Tỉnh');
INSERT INTO `provinces` VALUES ('91', 'Tỉnh Kiên Giang', 'Tỉnh');
INSERT INTO `provinces` VALUES ('92', 'Thành phố Cần Thơ', 'Thành phố Trung ương');
INSERT INTO `provinces` VALUES ('93', 'Tỉnh Hậu Giang', 'Tỉnh');
INSERT INTO `provinces` VALUES ('94', 'Tỉnh Sóc Trăng', 'Tỉnh');
INSERT INTO `provinces` VALUES ('95', 'Tỉnh Bạc Liêu', 'Tỉnh');
INSERT INTO `provinces` VALUES ('96', 'Tỉnh Cà Mau', 'Tỉnh');
COMMIT;

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `question_title` varchar(255) DEFAULT NULL COMMENT 'Câu hỏi',
  `correct_answer` int(11) DEFAULT NULL COMMENT 'Đáp án đúng',
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
  `time` bigint(20) DEFAULT NULL COMMENT 'Thời gian làm: tính bằng phút',
  `status` int(11) DEFAULT NULL COMMENT 'Trạng thái bộ đề: 0 - ẩn, 1 - hiện',
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
  `answer` int(11) DEFAULT NULL COMMENT 'Câu trả lời của người dùng tương ứng với câu hỏi có question id',
  `job_id` bigint(20) DEFAULT NULL COMMENT 'Bài test trong job nào',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL COMMENT 'Người làm',
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
