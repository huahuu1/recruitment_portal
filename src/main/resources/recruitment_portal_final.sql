/*
 Navicat Premium Data Transfer

 Source Server         : DucTM - Media
 Source Server Type    : MySQL
 Source Server Version : 100322
 Source Host           : 150.95.115.118:3306
 Source Schema         : recruitment_portal

 Target Server Type    : MySQL
 Target Server Version : 100322
 File Encoding         : 65001

 Date: 02/04/2021 11:29:16
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
  `token_id` varchar(500) DEFAULT NULL,
  `mail_content` text DEFAULT NULL,
  `sent_at` timestamp NULL DEFAULT NULL,
  `submit_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `apply_jobs_token_id_uindex` (`token_id`),
  KEY `job_id` (`job_id`),
  KEY `profile_id` (`profile_id`),
  KEY `cv_id` (`cv_id`),
  KEY `apply_jobs_job_id_profile_id_index` (`job_id`,`profile_id`),
  CONSTRAINT `apply_jobs_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `apply_jobs_ibfk_2` FOREIGN KEY (`profile_id`) REFERENCES `profiles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `apply_jobs_ibfk_3` FOREIGN KEY (`cv_id`) REFERENCES `cvs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of apply_jobs
-- ----------------------------
BEGIN;
INSERT INTO `apply_jobs` VALUES (31, 9, 4, 2, '2021-04-02 03:48:29', NULL, NULL, 1, '2021-04-02 03:48:29', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `apply_jobs` VALUES (32, 11, 4, 2, '2021-04-02 03:54:37', NULL, NULL, 1, '2021-04-02 03:54:37', NULL, NULL, NULL, NULL, NULL, NULL);
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
INSERT INTO `authority` VALUES ('ROLE_EMPLOYER');
INSERT INTO `authority` VALUES ('ROLE_USER');
COMMIT;

-- ----------------------------
-- Table structure for careers
-- ----------------------------
DROP TABLE IF EXISTS `careers`;
CREATE TABLE `careers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varbinary(255) NOT NULL,
  `status` int(11) DEFAULT NULL COMMENT 'Trạng thái: 0 - ẩn, 1 hiện',
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of careers
-- ----------------------------
BEGIN;
INSERT INTO `careers` VALUES (1, 0x416E20746FC3A06E206C616F20C491E1BB996E67, 1, NULL);
INSERT INTO `careers` VALUES (2, 0x42C3A16F206368C3AD2074727579E1BB816E2068C3AC6E68, 1, NULL);
INSERT INTO `careers` VALUES (3, 0x43C3B46E67206E6768E1BB87207468C3B46E672074696E, 1, NULL);
INSERT INTO `careers` VALUES (4, 0x43C3B46E67206E6768E1BB87207068E1BAA76E206DE1BB816D, 1, NULL);
INSERT INTO `careers` VALUES (5, 0x42C3A16E2068C3A06E67206CE1BABB, 1, NULL);
INSERT INTO `careers` VALUES (6, 0x54C3A069206368C3AD6E68204BE1BABF20746FC3A16E, 1, NULL);
INSERT INTO `careers` VALUES (7, 0x4D61726B6574696E67, 1, NULL);
INSERT INTO `careers` VALUES (8, 0x54E1BBB120C491E1BB996E672068C3B361, 1, NULL);
COMMIT;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of categories
-- ----------------------------
BEGIN;
INSERT INTO `categories` VALUES (23, 'Việc lương cao', 'Việc lương cao', '2021-04-02 03:27:17', '2021-04-02 03:28:26', NULL);
INSERT INTO `categories` VALUES (24, 'Tips Maketing', 'Tips Maketing', '2021-04-02 03:28:15', NULL, NULL);
INSERT INTO `categories` VALUES (25, 'Tips Lập trình', 'Tips Lập trình', '2021-04-02 03:28:37', NULL, NULL);
INSERT INTO `categories` VALUES (26, 'Tips Tester', 'Tips Tester', '2021-04-02 03:28:51', NULL, NULL);
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
  `description` text DEFAULT NULL COMMENT 'Mô tả công ty',
  `company_size` bigint(20) DEFAULT NULL COMMENT 'Quy mô công ty: 0 - dưới 10 người, 1 - 10 - 20 người,...',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of companies
-- ----------------------------
BEGIN;
INSERT INTO `companies` VALUES (11, 'CTCP THANG MÁY VIỄN ĐÔNG', '093332323235', NULL, 'Tòa nhà C’Land, 156 Xã Đàn 2, Nam Đồng , Đống Đa, Hà Nội', '0977722123', 'vdcompany@gmail.com', 'image/4602b97a-591c-49f8-bb46-465a84566d55tintuc6ee5a6d763ad42aee5d9046e2b0cd610.jpg', 'viendong.com', '<p><span style=\"color: rgb(51, 51, 51);\">Công ty cổ phần Thang máy Viễn Đông hoạt động trong lĩnh vực lắp đặt, bảo trì và sửa chữa thiết bị nâng hạ, thang máy và thang cuốn các nhãn hiệu nổi tiếng trên thế giới tại Việt Nam như Hyundai, Otis và Schindler. Với định hướng khách hàng, Công ty cổ phần Thang máy Viễn Đông cam kết đáp ứng và thực hiện theo quy trình an toàn và yêu cầu kỹ thuật trong quản lý lắp đặt thiết bị nhằm cung cấp tới người sử dụng hệ thống thang máy có chất lượng tốt nhất đồng thời đảm bảo sự an toàn trong quá trình vận hành. Ngoài ra, Công ty cổ phần thang máy Viễn Đông cung cấp dịch vụ bảo hành &amp; bảo trì định kỳ cho các công trình nếu được yêu cầu bởi đơn vị sản xuất. Chúng tôi hiểu rằng sự hài lòng và an toàn của người sử dụng chính là thành công của đơn vị cung cấp dịch vụ. Một hệ thống dịch vụ tốt không chỉ mang lại lợi ích cho người sử dụng mà còn đảm bảo uy tín của đơn vị sản xuất tại thị trường Việt Nam.</span></p>', 3, '2021-04-02 02:20:32', NULL, NULL, 15);
INSERT INTO `companies` VALUES (12, 'Công ty CP Dịch vụ Goline', '048347443412', NULL, 'Tòa Nhà Kim Ánh, 78 Duy Tân, Cầu Giấy, Hà Nội', '0989823523', 'goline123@gmail.com', 'image/201834a2-c296-4280-b997-b03431d095c4download.jpeg', 'goline123.vn', '<p>Goline Corporation là công ty phát triển &amp; triển khai hệ thống phần mềm giao dịch chứng khoán hàng đầu tại VN; cung cấp các giải pháp cho các tổ chức tài chính, ngân hàng, chứng khoán và là đối tác tin cậy của các công ty phần mềm tài chính Nhật Bản</p><p>Đội ngũ nhân sự cấp cao của Goline đã tham gia phát triển và triển khai hệ thống PM giao dịch cho trên 20 công ty chứng khoán tại VN và sở hữu trên 30 chứng chỉ phát triển phần mềm các loại của Microsoft, Sun, Oracle và IBM</p><p>Goline là 1 môi trường thân thiện nhưng chuyên nghiệp và đã được tổ chức NQA của Vương Quốc Anh cấp chứng chỉ xác nhận hệ thống quản lý chất lượng ISO 9001:2015 và chứng chỉ an toàn bảo mật thông tin ISO 27001:1025</p>', 4, '2021-04-02 02:59:29', NULL, NULL, 16);
COMMIT;

-- ----------------------------
-- Table structure for company_career
-- ----------------------------
DROP TABLE IF EXISTS `company_career`;
CREATE TABLE `company_career` (
  `company_id` bigint(20) NOT NULL,
  `career_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of company_career
-- ----------------------------
BEGIN;
INSERT INTO `company_career` VALUES (11, 8);
INSERT INTO `company_career` VALUES (12, 3);
COMMIT;

-- ----------------------------
-- Table structure for cvs
-- ----------------------------
DROP TABLE IF EXISTS `cvs`;
CREATE TABLE `cvs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` text DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT '0 - cv phụ, 1 - cv chính',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cvs
-- ----------------------------
BEGIN;
INSERT INTO `cvs` VALUES (4, 'Quy trinh shopee.pdf', 'cv/bdcdc9c2-4a6e-4f37-b6f3-2262bb47ae46Quy trinh shopee.pdf', 1, '2021-04-02 03:44:53', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for databasechangelog
-- ----------------------------
DROP TABLE IF EXISTS `databasechangelog`;
CREATE TABLE `databasechangelog` (
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
-- Records of databasechangelog
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for databasechangeloglock
-- ----------------------------
DROP TABLE IF EXISTS `databasechangeloglock`;
CREATE TABLE `databasechangeloglock` (
  `ID` int(11) NOT NULL,
  `LOCKED` bit(1) NOT NULL,
  `LOCKGRANTED` datetime DEFAULT NULL,
  `LOCKEDBY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of databasechangeloglock
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of job_careers
-- ----------------------------
BEGIN;
INSERT INTO `job_careers` VALUES (6, 7, 5);
INSERT INTO `job_careers` VALUES (7, 8, 8);
INSERT INTO `job_careers` VALUES (9, 9, 3);
INSERT INTO `job_careers` VALUES (10, 10, 4);
INSERT INTO `job_careers` VALUES (11, 11, 4);
COMMIT;

-- ----------------------------
-- Table structure for jobs
-- ----------------------------
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` text DEFAULT NULL COMMENT 'Mô tả công việc',
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
  `view` bigint(20) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  KEY `test_id` (`test_id`),
  KEY `location_id` (`location_id`),
  CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `jobs_ibfk_2` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `jobs_ibfk_3` FOREIGN KEY (`location_id`) REFERENCES `provinces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jobs
-- ----------------------------
BEGIN;
INSERT INTO `jobs` VALUES (7, '<h2><strong>MÔ TẢ CÔNG VIỆC</strong></h2><p><strong>Kinh doanh sản phẩm thang máy và dịch vụ bảo trì.</strong></p><p>- Tìm kiếm khách hàng, tư vấn, giới thiệu sản phẩm, đàm phán và ký kết hợp đồng.</p><p>- Chịu trách nhiệm kinh doanh đối với công ty.</p><p>- Quản lý danh sách khách hàng và kế hoạch kinh doanh chi tiết.</p><p>- Thu thập thông tin phản hồi và chăm sóc khách hàng.</p><h2><strong>YÊU CẦU ỨNG VIÊN</strong></h2><p>- Tốt nghiệp ĐH trở lên khối ngành kỹ thuật hoặc kinh tế.</p><p>- Có kỹ năng, kinh nghiệm trong lĩnh vực tư vấn bán hàng.</p><p>- Có khả năng đàm phán và thuyết phục khách hàng.</p><p>- Đam mê kinh doanh, tận tâm, thật thà, không ngại khó.</p><p>- Phong cách làm việc khoa học (có kế hoạch), tôn trọng kỷ luật làm việc.</p><p>- Ưu tiên biết sử dụng cơ bản AutoCAD.</p><p>- Ưu tiên các bạn trẻ sinh viên mới tốt nghiệp, có tinh thần ham học hỏi, trau dồi kinh nghiệm làm&nbsp;</p><p><br></p><p>QUYỀN LỢI ĐƯỢC HƯỞNG</p><p>- Thời gian làm việc 8h30-12h , chiều 13<strong>h30-17h30, nghỉ chiều t7 và chủ nhật</strong></p><p><br></p><p>- Lương thưởng hấp dẫn (trao đổi chi tiết khi phỏng vấn)</p><p>- Được đào tạo chuуên môn khi chưa có kinh nghiệm.</p><p>- Hưởng đầу đủ các quуền lợi th℮o luật lao động( Đóng bảo hiểm, nghỉ lễ tết theo quу định của nhà nước) νà chế độ thưởng lễ theo quу chế của công tу.</p>', '2021-04-23 00:00:00', 3, 1, 5, 2, 'Nhân viên', 'Kinh doanh, sale, marketing', '01', 11, NULL, '2021-04-02 02:21:57', NULL, NULL, 1, NULL, 'NV Kinh doanh thang máy');
INSERT INTO `jobs` VALUES (8, '<h2><strong>MÔ TẢ CÔNG VIỆC</strong></h2><p><strong>- Thời gian làm việc 8h30-12h , chiều 13h30-17h30, nghỉ chiều t7 và chủ nhật</strong></p><p>- Bảo trì, bảo dưỡng định kỳ thang máy hàng tháng.</p><p>- Trực xử lý sự cố thang máy.</p><p>- Hỗ trợ các phòng ban khác khi có yêu cầu của người quản lý trực tiếp.</p><h2><strong>YÊU CẦU ỨNG VIÊN</strong></h2><p><strong>- Không yêu cầu kinh nghiệm. Chưa có sẽ được đào tạo</strong></p><p>- Tốt nghiệp Cao đẳng, Trung cấp các ngành nghề cơ khí &amp; điện</p><p><strong>- Yêu cầu: Nam</strong></p><h2><strong>QUYỀN LỢI ĐƯỢC HƯỞNG</strong></h2><p><strong>- Lương cơ bản: 7-8tr tùy năng lực. Tăng ca + trực sự cố thang thêm lương</strong></p><p>- Được đào tạo chuyên môn khi chưa có kinh nghiệm.</p><p>- Hưởng đầy đủ các quyền lợi theo luật lao động (Đóng bảo hiểm, nghỉ lễ tết theo quy định của nhà nước) và chế độ thưởng lễ theo quy chế của công ty.</p>', '2021-04-29 00:00:00', 2, 1, 1, 3, 'Nhân viên', 'Sửa chữa thang máy', '01', 11, NULL, '2021-04-02 02:54:37', NULL, NULL, 1, NULL, 'NV Bảo trì thang máy');
INSERT INTO `jobs` VALUES (9, '<h2><strong>MÔ TẢ CÔNG VIỆC</strong></h2><p>- Lập trình hệ thống các ứng dụng trên nền Java Core, Java Spring Boot và các hệ thống Middleware trên nền tảng java</p><p>- Xây dựng các phân hệ nghiệp vụ trên hệ thống core chứng khoán, tài chính</p><p>- Phát triển các sản phẩm về tài chính, chứng khoán, ngân hàng, fintech</p><h2><strong>YÊU CẦU ỨNG VIÊN</strong></h2><p>- Tốt nghiệp kỹ sư Công nghệ thông tin, toán tin các trường đại học, cao đẳng hoặc các trung tâm đào tạo lập trình viên</p><p>- Có kinh nghiệm lập trình Java, SQL ít nhất 06 tháng</p><p>- Ưu tiên có tố chất về tư duy thuật toán và đam mê xử lý các vấn đề thuật toán</p><p>- Đã từng có ít nhất 1 sản phẩm chạy trên môi trường Production</p><h2><strong>QUYỀN LỢI ĐƯỢC HƯỞNG</strong></h2><p><strong>Chế độ đãi ngộ</strong></p><p>- Lương cứng + lương tháng 13 + thưởng các dịp lễ, tết + lương hiệu quả kinh doanh;</p><p>- Hưởng bảo hiểm xã hội, bảo hiểm y tế theo chế độ nhà nước ban hành.</p><p>- Thưởng dự án, review kết quả công việc 6 tháng một lần.</p><p>- Tuần làm việc 5 ngày, nghỉ thứ bảy, chủ nhật và các ngày lễ tết. Làm thêm T7, CN được tính tiền làm thêm giờ = 150% ngày bình thường.</p><p><strong>Văn hóa</strong></p><p>- Môi trường làm việc cởi mở, sẵn sàng chia sẻ, giúp đỡ lẫn nhau để cùng phát triển</p><p>- Khuyến khích các thành viên trong công ty sáng tạo các ý tưởng giúp dự án, công ty phát triển</p><p>- Tôn trọng quyền tự do các nhân</p><p><strong>Cơ hội phát triển</strong></p><p>- Công ty chuyên phát triển giải pháp phần mềm tài chính, chứng khoán, hướng tới công việc lâu dài, ổn định, nghiêm túc, phát triển chuyên sâu</p><p>- Giải pháp tổng thể từ Front Office – Middleware – Back Office với nhiều công nghệ chuyên sâu J2EE, Sping Framework, jBase, Nodejs, Apache Kafka, Apache Spark, Hadoop, ElasticSearch, Oracle Database, SQL Server, Memory Database, Caching…được triển khai tại nhiều tổ chức tài chính, chứng khoán hàng đầu thế giới</p><p>- Sau một thời gian làm việc tại công ty, bạn sẽ nắm được về giải pháp công nghệ tổng thể, và có thể phát triển theo định hướng bản thân.</p><p>- Môi trường năng động, chuyên nghiệp, có nhiều cơ hội phát triển thành key person trong công ty với các đãi ngộ hấp dẫn.</p><p>- Được tham gia vào các dự án phần mềm, các mô hình phát triển ứng dụng tiên tiến với các đối tác hàng đầu Nhật Bản: các ứng dụng trong lĩnh vực tài chính, fintech, thương mại điện tử</p><p>- Được tiếp cận và đào tạo theo quy trình quản lý dự án phần mềm chuyên nghiệp theo chuẩn Nhật Bản như ISO 9001:2013, ISMS ISO 27001:2013</p>', '2021-04-30 00:00:00', 4, 1, 2, 4, 'Nhân viên chính thức', 'Java, Back end', '01', 12, 9, '2021-04-02 03:00:35', '2021-04-02 03:03:17', NULL, 1, NULL, 'JAVA BACK-END DEVELOPERS');
INSERT INTO `jobs` VALUES (10, '<h2><strong>MÔ TẢ CÔNG VIỆC</strong></h2><p><strong>BA/QC/Tester&nbsp;</strong></p><p>- Phối hợp với các đội phát triển phần mềm để hiểu rõ về dự án và mục tiêu kiểm thử cũng như các yêu cầu đưa ra.</p><p>- Thiết kế và Xây dựng các trường hợp kiểm thử</p><p>- Thực hiện kiểm tra, log lỗi, và theo dõi tiến độ fix bug</p><p>- Kiểm soát chất lượng, đảm bảo hệ thống/sản phẩm được xây dựng đúng như thiết kế hệ thống và đáp ứng được yêu cầu nghiệp vụ</p><p>- Phối hợp chặt chẽ với developers và designer trong các kế hoạch release.</p><p>- Đào tạo và hỗ trợ người sử dụng.</p><h2><strong>YÊU CẦU ỨNG VIÊN</strong></h2><p>- Tốt nghiệp đại học chuyên nghành CNTT hoặc thực tập của các trường CNTT hoặc tài chính/ngân hàng</p><p>- Tư duy tốt, có khả năng nắm bắt yêu cầu nghiệp vụ</p><p>- Ưu tiên đã từng triển khai dự án phần mềm chứng khoán, có kinh nghiệm về lĩnh vực chứng khoán là 1 lợi thế</p><h2><strong>QUYỀN LỢI ĐƯỢC HƯỞNG</strong></h2><p><strong>Lương &amp; hợp đồng làm việc:</strong></p><p>- Mức lương thỏa thuận: 1<strong>0.000.000-15.000.000 VNĐ</strong></p><p>- Có chế độ thưởng đặc biệt cho những nhân viên xuất sắc nhất trong năm, quý.</p><p>- Thưởng nóng cho những ý tưởng có tính chất cách mạng, mang lại hiệu quả cho sản xuất</p><p><strong>Chế độ đãi ngộ</strong></p><p>- Lương cứng + lương tháng 13 + thưởng các dịp lễ, tết + lương hiệu quả kinh doanh;</p><p>- Hưởng bảo hiểm xã hội, bảo hiểm y tế theo chế độ nhà nước ban hành.</p><p>- Thưởng dự án, review kết quả công việc 6 tháng một lần.</p><p>- Tuần làm việc 5 ngày, nghỉ thứ bảy, chủ nhật và các ngày lễ tết. Làm thêm T7, CN được tính tiền làm thêm giờ = 150% ngày bình thường.</p><p><strong>Cơ hội phát triển</strong></p><p>- Công ty chuyên phát triển giải pháp phần mềm tài chính, chứng khoán, hướng tới công việc lâu dài, ổn định, nghiêm túc, phát triển chuyên sâu</p><p>- Giải pháp tổng thể từ Front Office – Middleware – Back Office với nhiều công nghệ chuyên sâu J2EE, Sping Framework, jBase, Nodejs, Apache Kafka, Apache Spark, Hadoop, ElasticSearch, Oracle Database, SQL Server, Memory Database, Caching…được triển khai tại nhiều tổ chức tài chính, chứng khoán hàng đầu thế giới</p><p>- Sau một thời gian làm việc tại công ty, bạn sẽ nắm được về giải pháp công nghệ tổng thể, và có thể phát triển theo định hướng bản thân.</p><p>- Môi trường năng động, chuyên nghiệp, có nhiều cơ hội phát triển thành key person trong công ty với các đãi ngộ hấp dẫn.</p><p>- Được tham gia vào các dự án phần mềm, các mô hình phát triển ứng dụng tiên tiến với các đối tác hàng đầu Nhật Bản: các ứng dụng trong lĩnh vực tài chính, fintech, thương mại điện tử</p><p>- Được tiếp cận và đào tạo theo quy trình quản lý dự án phần mềm chuyên nghiệp theo chuẩn Nhật Bản như ISO 9001:2013, ISMS ISO 27001:2013</p><p><strong>Văn hóa</strong></p><p>- Môi trường làm việc cởi mở, sẵn sàng chia sẻ, giúp đỡ lẫn nhau để cùng phát triển</p><p>- Khuyến khích các thành viên trong công ty sáng tạo các ý tưởng giúp dự án, công ty phát triển</p><p>- Tôn trọng quyền tự do các nhân</p>', '2021-04-30 00:00:00', 2, 1, 1, 3, 'Nhân viên chính thức', 'test, test case', '01', 12, 10, '2021-04-02 03:07:19', NULL, NULL, 1, NULL, 'NV Kiểm thử PM Tester');
INSERT INTO `jobs` VALUES (11, '<h2><strong>MÔ TẢ CÔNG VIỆC</strong></h2><p>- Lập trình web bằng Vuejs, Reactjs các sản phẩm tài chính, chứng khoán, ngân hàng, thương mại điện tử theo thiết kế</p><p>- Phát triển chuyên sâu về công nghệ Web và Front nói chung</p><p>- Hỗ trợ nhóm vận hành để triển khai và vận hành hệ thống</p><h2><strong>YÊU CẦU ỨNG VIÊN</strong></h2><p>- Tốt nghiệp kỹ sư Công nghệ thông tin, toán tin các trường đại học, cao đẳng hoặc các trung tâm đào tạo lập trình viên</p><p>- Vuejs – Điều kiện bắt buộc: Có kinh nghiệm lập trình web sử dụng Vuejs ít nhất 06 tháng và lập trình Front-End ít nhất 01 năm</p><p>- Reactjs – Lợi thế: Có kinh nghiệm lập trình web sử dụng Reactjs ít nhất 01 năm</p><p>- Đã có sản phẩm chạy thực sự trên môi trường Production</p><p>- Ưu tiên các ứng viên có kinh nghiệm làm việc với một số công nghệ/giao thức thức mới: GRPC, MQTT, protobuf</p><p>- Ưu tiên ứng viên có kinh nghiệm làm các ứng dụng lớn, nhiều người dùng</p><h2><strong>QUYỀN LỢI ĐƯỢC HƯỞNG</strong></h2><p><strong>Chế độ đãi ngộ</strong></p><p>- Lương cứng + lương tháng 13 + thưởng các dịp lễ, tết + lương hiệu quả kinh doanh;</p><p>- Hưởng bảo hiểm xã hội, bảo hiểm y tế theo chế độ nhà nước ban hành.</p><p>- Thưởng dự án, review kết quả công việc 6 tháng một lần.</p><p>- Tuần làm việc 5 ngày, nghỉ thứ bảy, chủ nhật và các ngày lễ tết. Làm thêm T7, CN được tính tiền làm thêm giờ = 150% ngày bình thường.</p><p><strong>Văn hóa</strong></p><p>- Môi trường làm việc cởi mở, sẵn sàng chia sẻ, giúp đỡ lẫn nhau để cùng phát triển</p><p>- Khuyến khích các thành viên trong công ty sáng tạo các ý tưởng giúp dự án, công ty phát triển</p><p>- Tôn trọng quyền tự do các nhân</p><p><strong>Cơ hội phát triển</strong></p><p>- Công ty chuyên phát triển giải pháp phần mềm tài chính, chứng khoán, hướng tới công việc lâu dài, ổn định, nghiêm túc, phát triển chuyên sâu</p><p>- Giải pháp tổng thể từ Front Office – Middleware – Back Office với nhiều công nghệ chuyên sâu J2EE, Sping Framework, jBase, Nodejs, Apache Kafka, Apache Spark, Hadoop, ElasticSearch, Oracle Database, SQL Server, Memory Database, Caching…được triển khai tại nhiều tổ chức tài chính, chứng khoán hàng đầu thế giới</p><p>- Sau một thời gian làm việc tại công ty, bạn sẽ nắm được về giải pháp công nghệ tổng thể, và có thể phát triển theo định hướng bản thân.</p><p>- Môi trường năng động, chuyên nghiệp, có nhiều cơ hội phát triển thành key person trong công ty với các đãi ngộ hấp dẫn.</p><p>- Được tham gia vào các dự án phần mềm, các mô hình phát triển ứng dụng tiên tiến với các đối tác hàng đầu Nhật Bản: các ứng dụng trong lĩnh vực tài chính, fintech, thương mại điện tử</p><p>- Được tiếp cận và đào tạo theo quy trình quản lý dự án phần mềm chuyên nghiệp theo chuẩn Nhật Bản như ISO 9001:2013, ISMS ISO 27001:2013</p>', '2021-04-20 00:00:00', 1, 2, 1, 2, 'Thực tập sinh', 'html, css, js', '01', 12, 9, '2021-04-02 03:09:42', NULL, NULL, 1, NULL, 'Lập trình viên Front End');
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
) ENGINE=InnoDB AUTO_INCREMENT=167 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of persistent_audit_event
-- ----------------------------
BEGIN;
INSERT INTO `persistent_audit_event` VALUES (1, 'admin', '2021-03-17 07:16:55', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (2, 'user', '2021-03-17 07:19:57', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (3, 'admin', '2021-03-17 07:22:29', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (4, 'admin', '2021-03-21 12:55:31', 'AUTHENTICATION_FAILURE');
INSERT INTO `persistent_audit_event` VALUES (5, 'admin', '2021-03-21 13:00:37', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (6, 'user', '2021-03-21 14:39:04', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (7, 'admin', '2021-03-21 15:00:01', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (8, 'user', '2021-03-21 16:19:29', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (9, 'user', '2021-03-21 16:32:09', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (10, 'user', '2021-03-21 16:57:36', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (11, 'user', '2021-03-21 17:01:28', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (12, 'user', '2021-03-22 00:32:31', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (13, 'user', '2021-03-22 05:22:04', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (14, 'admin', '2021-03-22 16:41:08', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (15, 'admin', '2021-03-23 03:01:23', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (16, 'admin', '2021-03-23 03:27:00', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (17, 'admin', '2021-03-23 03:34:37', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (18, 'admin', '2021-03-23 03:52:58', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (19, 'admin', '2021-03-23 04:48:28', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (20, 'admin', '2021-03-23 04:59:15', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (21, 'admin', '2021-03-23 06:44:04', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (22, 'admin', '2021-03-23 07:56:49', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (23, 'admin', '2021-03-23 10:03:35', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (24, 'admin', '2021-03-23 10:03:35', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (25, 'admin', '2021-03-23 10:03:37', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (26, 'admin', '2021-03-23 10:03:37', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (27, 'admin', '2021-03-23 10:12:07', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (28, 'admin', '2021-03-23 16:06:34', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (29, 'admin', '2021-03-23 16:31:18', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (30, 'admin', '2021-03-23 16:31:19', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (31, 'admin', '2021-03-23 16:40:08', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (32, 'admin', '2021-03-23 16:53:54', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (33, 'admin', '2021-03-24 09:28:10', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (34, 'admin', '2021-03-24 09:28:12', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (35, 'admin', '2021-03-24 11:57:58', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (36, 'admin', '2021-03-24 13:25:22', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (37, 'admin', '2021-03-24 14:13:05', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (38, 'admin', '2021-03-24 14:34:19', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (39, 'admin', '2021-03-24 16:17:42', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (40, 'admin', '2021-03-25 12:59:00', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (41, 'admin', '2021-03-25 12:59:03', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (42, 'admin', '2021-03-25 12:59:04', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (43, 'admin', '2021-03-25 13:45:37', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (44, 'admin', '2021-03-25 15:56:58', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (45, 'admin', '2021-03-25 17:36:35', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (46, 'admin', '2021-03-26 04:23:42', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (47, 'huahuu1', '2021-03-26 04:34:24', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (48, 'admin', '2021-03-26 04:39:31', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (49, 'huahuu1', '2021-03-26 04:39:53', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (50, 'admin', '2021-03-26 06:50:27', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (51, 'admin', '2021-03-26 06:55:49', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (52, 'admin', '2021-03-26 07:05:38', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (53, 'admin', '2021-03-26 07:17:50', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (54, 'admin', '2021-03-26 15:06:43', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (55, 'admin', '2021-03-26 15:55:48', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (56, 'admin', '2021-03-27 02:28:45', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (57, 'admin', '2021-03-27 02:39:31', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (58, 'admin', '2021-03-27 02:41:38', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (59, 'admin', '2021-03-27 02:43:05', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (60, 'admin', '2021-03-27 05:00:38', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (61, 'admin', '2021-03-27 06:44:17', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (62, 'admin', '2021-03-27 09:28:42', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (63, 'admin', '2021-03-27 09:32:11', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (64, 'admin', '2021-03-27 09:52:04', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (65, 'admin', '2021-03-27 10:23:38', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (66, 'admin', '2021-03-27 10:27:02', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (67, 'admin', '2021-03-27 16:11:20', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (68, 'admin', '2021-03-27 16:29:10', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (69, 'admin', '2021-03-27 16:35:55', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (70, 'admin', '2021-03-27 17:22:12', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (71, 'admin', '2021-03-27 17:24:03', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (72, 'admin', '2021-03-27 17:31:43', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (73, 'admin', '2021-03-27 17:34:13', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (74, 'admin', '2021-03-27 17:36:54', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (75, 'admin', '2021-03-27 17:39:42', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (76, 'admin', '2021-03-27 17:42:22', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (77, 'admin', '2021-03-27 17:53:39', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (78, 'admin', '2021-03-27 17:59:09', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (79, 'admin', '2021-03-28 02:43:36', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (80, 'admin', '2021-03-28 08:55:15', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (81, 'admin', '2021-03-28 08:58:07', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (82, 'admin', '2021-03-28 09:36:40', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (83, 'admin', '2021-03-29 08:34:30', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (84, 'admin', '2021-03-29 11:55:00', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (85, 'admin', '2021-03-29 12:05:50', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (86, 'admin', '2021-03-29 12:08:54', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (87, 'admin', '2021-03-29 13:22:33', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (88, 'admin', '2021-03-29 13:37:54', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (89, 'admin', '2021-03-29 13:38:03', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (90, 'admin', '2021-03-29 13:47:10', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (91, 'duc123', '2021-03-30 09:33:00', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (92, 'ductmkma', '2021-03-30 09:51:06', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (93, 'admin', '2021-03-30 09:54:08', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (94, 'admin', '2021-03-30 09:57:18', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (95, 'admin', '2021-03-30 10:06:18', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (96, 'admin', '2021-03-30 11:01:09', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (97, 'admin', '2021-03-30 11:29:23', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (98, 'admin', '2021-03-30 11:45:59', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (99, 'admin', '2021-03-31 08:23:22', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (100, 'adminx', '2021-03-31 08:50:12', 'AUTHENTICATION_FAILURE');
INSERT INTO `persistent_audit_event` VALUES (101, 'admin', '2021-03-31 08:51:16', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (102, 'admin', '2021-03-31 08:54:41', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (103, 'admin', '2021-03-31 08:54:58', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (104, 'admin', '2021-03-31 08:56:12', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (105, 'admin', '2021-03-31 08:56:48', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (106, 'admin', '2021-03-31 09:01:22', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (107, 'admin', '2021-03-31 09:04:48', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (108, 'admin', '2021-03-31 09:12:18', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (109, 'admin', '2021-03-31 09:23:53', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (110, 'admin', '2021-03-31 09:25:55', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (111, 'admin', '2021-03-31 09:45:42', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (112, 'admin', '2021-03-31 09:48:55', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (113, 'admin', '2021-03-31 10:08:45', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (114, 'admin', '2021-03-31 10:15:12', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (115, 'admin', '2021-03-31 10:18:05', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (116, 'admin', '2021-03-31 10:51:10', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (117, 'admin', '2021-03-31 10:58:14', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (118, 'admin', '2021-03-31 15:43:21', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (119, 'admin', '2021-03-31 15:43:22', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (120, 'admin', '2021-03-31 15:53:54', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (121, 'admin', '2021-03-31 16:10:28', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (122, 'admin', '2021-03-31 16:13:02', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (123, 'admin', '2021-03-31 16:47:49', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (124, 'admin', '2021-03-31 16:47:50', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (125, 'admin', '2021-03-31 17:08:44', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (126, 'admin', '2021-03-31 17:35:05', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (127, 'admin', '2021-03-31 17:45:49', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (128, 'admin', '2021-03-31 17:47:24', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (129, 'admin', '2021-04-01 00:35:29', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (130, 'admin', '2021-04-01 09:15:10', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (131, 'admin', '2021-04-01 09:15:50', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (132, 'admin', '2021-04-01 09:20:18', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (133, 'admin', '2021-04-01 09:26:47', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (134, 'admin', '2021-04-01 10:01:53', 'AUTHENTICATION_FAILURE');
INSERT INTO `persistent_audit_event` VALUES (135, 'admin', '2021-04-01 10:02:05', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (136, 'admin', '2021-04-01 10:05:25', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (137, 'admin', '2021-04-01 10:14:03', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (138, 'admin', '2021-04-01 10:15:29', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (139, 'admin', '2021-04-01 10:16:55', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (140, 'admin', '2021-04-01 10:18:30', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (141, 'admin', '2021-04-01 10:21:33', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (142, 'admin', '2021-04-01 11:21:53', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (143, 'admin', '2021-04-01 11:22:13', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (144, 'admin', '2021-04-01 11:23:40', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (145, 'admin', '2021-04-01 11:25:39', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (146, 'admin', '2021-04-01 11:31:16', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (147, 'admin', '2021-04-01 11:35:30', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (148, 'admin', '2021-04-01 14:11:21', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (149, 'admin', '2021-04-01 15:42:38', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (150, 'admin', '2021-04-01 23:28:28', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (151, 'admin', '2021-04-01 23:29:39', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (152, 'admin', '2021-04-01 23:47:47', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (153, 'ductm.td', '2021-04-01 23:54:39', 'AUTHENTICATION_FAILURE');
INSERT INTO `persistent_audit_event` VALUES (154, 'ductm.td', '2021-04-01 23:54:44', 'AUTHENTICATION_FAILURE');
INSERT INTO `persistent_audit_event` VALUES (155, 'ductm.ntd', '2021-04-01 23:54:52', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (156, 'ductm.ntd', '2021-04-02 02:16:58', 'AUTHENTICATION_FAILURE');
INSERT INTO `persistent_audit_event` VALUES (157, 'ductm.ntd', '2021-04-02 02:17:03', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (158, 'ductm.ntd2', '2021-04-02 02:56:59', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (159, 'admin', '2021-04-02 03:09:54', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (160, 'ductm.ntd2', '2021-04-02 03:34:54', 'AUTHENTICATION_FAILURE');
INSERT INTO `persistent_audit_event` VALUES (161, 'ductm.ntd2', '2021-04-02 03:34:58', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (162, 'ungvien', '2021-04-02 03:36:31', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (163, 'ungvien', '2021-04-02 04:19:21', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (164, 'ungvien', '2021-04-02 04:21:07', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (165, 'admin', '2021-04-02 04:22:08', 'AUTHENTICATION_SUCCESS');
INSERT INTO `persistent_audit_event` VALUES (166, 'ungvien', '2021-04-02 04:22:15', 'AUTHENTICATION_SUCCESS');
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
INSERT INTO `persistent_audit_evt_data` VALUES (4, 'message', 'Bad credentials');
INSERT INTO `persistent_audit_evt_data` VALUES (4, 'type', 'org.springframework.security.authentication.BadCredentialsException');
INSERT INTO `persistent_audit_evt_data` VALUES (100, 'message', 'Bad credentials');
INSERT INTO `persistent_audit_evt_data` VALUES (100, 'type', 'org.springframework.security.authentication.BadCredentialsException');
INSERT INTO `persistent_audit_evt_data` VALUES (134, 'message', 'Bad credentials');
INSERT INTO `persistent_audit_evt_data` VALUES (134, 'type', 'org.springframework.security.authentication.BadCredentialsException');
INSERT INTO `persistent_audit_evt_data` VALUES (153, 'message', 'Bad credentials');
INSERT INTO `persistent_audit_evt_data` VALUES (153, 'type', 'org.springframework.security.authentication.BadCredentialsException');
INSERT INTO `persistent_audit_evt_data` VALUES (154, 'message', 'Bad credentials');
INSERT INTO `persistent_audit_evt_data` VALUES (154, 'type', 'org.springframework.security.authentication.BadCredentialsException');
INSERT INTO `persistent_audit_evt_data` VALUES (156, 'message', 'Bad credentials');
INSERT INTO `persistent_audit_evt_data` VALUES (156, 'type', 'org.springframework.security.authentication.BadCredentialsException');
INSERT INTO `persistent_audit_evt_data` VALUES (160, 'message', 'Bad credentials');
INSERT INTO `persistent_audit_evt_data` VALUES (160, 'type', 'org.springframework.security.authentication.BadCredentialsException');
COMMIT;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `content` text DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL COMMENT 'Link ảnh đại diện',
  `status` int(11) DEFAULT NULL COMMENT '0 - ẩn, 1 - hiện',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  `tag` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of posts
-- ----------------------------
BEGIN;
INSERT INTO `posts` VALUES (6, '20 TIP KIỂM THỬ NÀY TRƯỚC KHI TEST BẤT KỲ PHẦN MỀM NÀO', '20-tip-kiem-thu-nay-truoc-khi-test-bat-kỳ-phan-mem-nao-1617334283897', '20 TIP KIỂM THỬ NÀY TRƯỚC KHI TEST BẤT KỲ PHẦN MỀM NÀO', '<p class=\"ql-align-justify\"><strong>1) Tip kiểm thử 1 - Học cách phân tích kết quả kiểm thử của bạn một cách kỹ lưỡng</strong></p><p class=\"ql-align-justify\">Đừng bỏ qua bất kỳ kết quả kiểm thử. Kết quả kiểm thử cuối cùng có thể là ‘pass‘ hoặc ‘fail’, nhưng việc khắc phục nguyên nhân gốc của ‘fail’, sẽ cung cấp cho bạn giải pháp cho các vấn đề sau này. Tester sẽ được tôn trọng nếu bạn không chỉ ghi lại các lỗi mà còn cung cấp giải pháp.&nbsp;</p><p class=\"ql-align-justify\"><strong>2) Tip kiểm thử 2 – Tối đa hóa phạm vi</strong></p><p class=\"ql-align-justify\">Tìm hiểu để tối đa hóa phạm vi kiểm thử mỗi khi bạn kiểm thử bất kỳ ứng dụng nào. Đảm bảo kiểm thử bao quát 100% các vấn đề, điều này nghe có vẻ bất khả thi nhưng không có nghĩa là không làm được, tester luôn có thể cố gắng tiếp cận gần nó.</p><p class=\"ql-align-justify\"><strong>3) Tip kiểm thử 3 – Chia nhỏ các phần</strong></p><p class=\"ql-align-justify\">Để đảm bảo phạm vi kiểm thử tối đa, hãy chia ứng dụng đang được test (AUT) thành các module chức năng nhỏ hơn. Viết các trường hợp kiểm thử trên các module đơn vị cá nhân. Ngoài ra tester vẫn có thể phá vỡ các module thành các phần nhỏ hơn.</p><p class=\"ql-align-justify\">Ví dụ: Giả sử rằng bạn đã chia ứng dụng trang web của mình thành các module và ‘chấp nhận thông tin người dùng\' là một trong các module đó. Bạn có thể chia màn hình ‘Thông tin người dùng’ này thành các phần nhỏ hơn để viết các trường hợp kiểm thử: chia thành các phần như kiểm thử giao diện người dùng, kiểm thử bảo mật, kiểm thử chức năng của biểu mẫu&nbsp;‘Thông tin người dùng\', v.v.</p><p class=\"ql-align-justify\">Áp dụng tất cả các mẫu kiểm thử ở mọi kích thước, kiểm tra âm tính và xác nhận trên các trường đầu vào và viết tất cả các trường hợp kiểm thử như vậy để được bảo hiểm tối đa.</p><p><br></p>', 'image/bfd9d977-1a34-411e-a52c-45d6e9c80132download.jpeg', 1, '2021-04-02 03:31:24', NULL, NULL, 3, 26, NULL);
INSERT INTO `posts` VALUES (7, '4 tips học Java cơ bản nhanh nhất dành cho Beginner Developer', '4-tips-hoc-java-co-ban-nhanh-nhat-danh-cho-beginner-developer-1617334374787', 'ôi đăng ký khóa học Java online trong 1 tháng và học android trong 2 tháng. Sau khi kết thúc khóa học, tôi đã tự build được app đầu tiên trong sự nghiệp của mình với những idea mà mình vẫn luôn ấp ủ trước giờ. Tuy nhiên, nhìn lại quá trình này tôi rút ra một số kinh nghiệm để có thể làm việc tốt hơn khi bắt đầu với Java cơ bản.', '<h2>Những kinh nghiệm để học Java cơ bản hiệu quả</h2><h3 class=\"ql-align-justify\">1. Đừng vội vàng khi bắt đầu học Java cơ bản</h3><p class=\"ql-align-justify\">Nhiều bạn nghĩ rằng càng đi nhanh việc học sẽ càng đạt kết quả sớm hơn. Tuy nhiên sự thật là bạn không nên vội vàng khi học lập trình.&nbsp;<strong>Học một cách chậm rãi sẽ khiến bạn có nhiều thời gian để tiếp thu kiến thức cũng như nắm vững những vấn đề về Java cơ bản.</strong>&nbsp;Sau đó bạn có thể tăng tốc quá trình học một cách nhanh nhất có thể khi đã có căn bản. Có nhiều bạn khi mới bắt đầu học chỉ lướt sơ về kiến thức với một số điểm nổi bật, vì thế mà bạn không thể nắm được bức tranh tổng thể về&nbsp;<strong>Java cơ bản</strong>.</p><p><strong><em>Xem thêm&nbsp;</em></strong><a href=\"https://topdev.vn/blog/ngon-ngu-java-khong-bao-gio-la-qua-tre-de-hoc-them-ve-no/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(226, 74, 50);\"><strong><em>Ngôn ngữ Java: Không bao giờ là quá trễ để học thêm về nó</em></strong></a></p><p class=\"ql-align-justify\">Nếu học theo kiểu sơ sài như thế này, nó sẽ trở thành thứ ngăn cản bạn học thêm các ngôn ngữ lập trình mới và chỉ khiến quá trình tiếp thu kiến thức ngày càng chậm đi mà thôi. Vì vậy hãy dành nhiều thời gian học tập khi mới bắt đầu để đẩy tốc độ học về sau.&nbsp;<strong>Java cơ bản</strong>&nbsp;gần như là kiến thức tối quan trọng mà bạn cần nắm chắc để không mắc sai lầm về sau cũng như học nhanh hơn sau này.</p><p><strong><em>Xem thêm các&nbsp;việc làm</em></strong><a href=\"https://topdev.vn/viec-lam-it/tester-k\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(226, 74, 50);\"><strong>&nbsp;tuyển dụng Tester&nbsp;</strong></a><strong><em>hấp dẫn tại TopDev</em></strong></p><h3 class=\"ql-align-justify\">2. Tập trung nghiên cứu các lỗi sai bạn mắc phải</h3><p class=\"ql-align-justify\">Việc mắc lỗi luôn xảy ra khi mới bắt đầu học lập trình, tuy nhiên nhiều dev chỉ đơn giản bỏ qua những dòng code lỗi và viết mới. Bạn thật sự rất cần tìm hiểu về những code bị lỗi, để có thể nghiên cứu và tìm ra nguyên nhân tại sao code đó lại không chạy được, vấn đề đang nằm ở đâu, có như vậy bạn mới tìm ra được những dòng&nbsp;<a href=\"https://topdev.vn/blog/bi-kiep-giup-cac-coder-tien-bo-than-toc/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(226, 74, 50);\">code tốt nhất</a>&nbsp;cho chương trình của mình.</p><p><br></p>', 'image/7042b940-b365-41f4-adb4-cfc49efa9b00photo-1533090161767-e6ffed986c88.jpeg', 1, '2021-04-02 03:32:54', NULL, NULL, 3, 25, NULL);
INSERT INTO `posts` VALUES (8, 'Kinh nghiệm làm việc được tính ?', 'kinh-nghiem-lam-viec-duoc-tính-?-1617337445602', 'Chuyện là trong lúc rảnh việc ở công ty, anh em mình thường có văn hóa nghiên cứu công nghệ mới. Trong một lần nghiên cứu về NodeJS, vừa làm xong chương trình “Hello world” thì một người nói vui rằng “thế là biết NodeJS rồi đó, giờ có thể tự tin ghi vào CV là có kinh nghiệm làm việc với NodeJS rồi“. Cả team phá lên cười, vì ai cũng hiểu rằng chương trình “Hello world” là bài học vỡ lòng của developer chứ ai lại coi nó là kinh nghiệm làm việc.', '<h2>I. KINH NGHIỆM LÀM VIỆC CÓ ĐƯỢC TÍNH BẰNG SỐ NĂM?</h2><p>Số năm làm việc có lẽ là thước đo kinh nghiệm được sử dụng nhiều nhất. Bạn đồng ý với mình điều này chứ? Bởi chúng ta vẫn gặp các tin tuyển dụng dạng như “Tuyển dev trên 1 năm kinh nghiệm”, hay như trong CV chúng ta (cả mình) cũng thường viết rằng có X năm kinh nghiệm làm việc với công nghệ ABC nào đó.</p><p>Thế nhưng việc “cân đo” kinh nghiệm bằng số năm liệu có chính xác? Theo mình thì không, nó chỉ là cách&nbsp;<strong>nhanh nhất</strong>&nbsp;để mô tả kinh nghiệm của bạn tới đối phương mà thôi, chứ nó không thể hiện rõ kinh nghiệm của bạn.</p><p>Ví dụ anh A nói rằng có 2 năm kinh nghiệm code PHP, nhưng trong suốt 2 năm anh A chỉ quanh quẩn xây dựng mấy cái web demo, chỉ cần chạy được, chẳng bao giờ phải quan tâm tới việc tối ưu query database, tối ưu thời gian phản hồi, và lượng kiến thức anh sử dụng để code PHP trong 2 năm đó hoàn toàn có thể học được trong vòng 2 tháng. Còn anh B (anh Bình đó :D) mới chỉ có 1 năm kinh nghiệm code PHP, nhưng anh thường xuyên phải giải quyết bài toán “hóc búa”, deadline gấp, đòi hỏi tốc độ phản hồi nhanh nên anh học được thêm rất nhiều “thủ thuật” mới phục vụ cho việc code cũng như cách làm việc sao cho hiệu quả.</p><p>Vậy rõ ràng nếu lấy số năm làm thước đo kinh nghiệm thì anh A (2 năm KN) ăn đứt anh B (1 năm KN). Nhưng so sánh dưới góc độ lượng kinh nghiệm thực tế tích lũy được thì anh B lại ăn đứt anh A.</p><p>Trường hợp giống anh A như ví dụ trên mình gặp khá nhiều. Nhiều nhất là ở các bạn sinh viên mới ra trường. Bởi trong trường ĐH, các bạn ý được học lập trình từ năm 1, năm 2, vậy nghiễm nhiên sau khi ra trường là có 2 – 5 năm code. Có bạn còn tự tin nhận mình là senior developer, deal&nbsp;<a href=\"https://phambinh.net/bai-viet/nhung-tin-tuyen-dung-nghin-do-yeu-cau-gi-o-web-developer/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(77, 178, 236);\">lương $1000</a>&nbsp;nhưng khi phỏng vấn thì trượt ngay ở mấy câu hỏi dành cho junior developer.</p>', 'image/415c1f9d-c95e-4d4e-b440-7f4bbb7eeef8avata.jpg', 1, '2021-04-02 04:24:05', NULL, NULL, 3, 23, NULL);
COMMIT;

-- ----------------------------
-- Table structure for profile_careers
-- ----------------------------
DROP TABLE IF EXISTS `profile_careers`;
CREATE TABLE `profile_careers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `profile_id` bigint(20) NOT NULL,
  `career_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of profile_careers
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
  `description` text DEFAULT NULL COMMENT 'Mô tả bản thân/mong muốn',
  `qualification` bigint(20) DEFAULT NULL COMMENT 'Trình độ chuyên môn: 0 - sinh viên, 1 - mới ra trường, 2-có kinh nghiệm, 3-trưởng nhóm, 4 quản lý/giám sát, 5 - chuyên gia, 6 - giám đốc',
  `english_skill` bigint(20) DEFAULT NULL COMMENT 'Trình độ tiếng anh: 0-không biết, 1 - đọc hiểu cơ bản, 2-đọc hiểu tài liệu, 3 - giao tiếp tốt, 4-thành thạo mọi kĩ năng',
  `cv_id` bigint(20) DEFAULT NULL COMMENT 'ID CV',
  `job_type` bigint(20) DEFAULT NULL COMMENT '0 - toàn thời gian, 1 - bán thời gian, 2 - thực tập, 3 - remote làm việc từ xa',
  `salary_expect` bigint(20) DEFAULT NULL COMMENT 'Mức lương mong muốn: 0 - dưới 3M, 1 - 3 đến 5M, 2 - 5 đến 7M, 3 - 7 đến 10M, 4 - 10 - 12M, 5 - 12-15M, 6 - 15-20M, 7 - 20-25M, 8 - Trên 25M, 9 - Thỏa thuận',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `cv_id` (`cv_id`),
  CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `profiles_ibfk_2` FOREIGN KEY (`cv_id`) REFERENCES `cvs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of profiles
-- ----------------------------
BEGIN;
INSERT INTO `profiles` VALUES (2, 'html,css,js', 2, 'Coder', 'LTV', 'Giỏi Code', 3, 2, 4, 2, 0, '2021-04-02 03:44:53', '2021-04-02 03:44:53', NULL, 17);
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of questions
-- ----------------------------
BEGIN;
INSERT INTO `questions` VALUES (18, 'Lập trình hướng đối tượng là gì ?', 2, 'Là lập trình hướng đối tượng 1', 'Là lập trình hướng đối tượng 2', 'Là lập trình hướng đối tượng 3', 'Là lập trình hướng đối tượng 4', '2021-04-02 03:02:55', NULL, NULL, 9);
INSERT INTO `questions` VALUES (19, 'Có mấy tính chất trong lập trình hướng đối tượng', 4, '1', '2', '3', '4', '2021-04-02 03:02:55', NULL, NULL, 9);
INSERT INTO `questions` VALUES (20, 'Kiểm thử phần mềm là gì ?', 1, 'Là kiểm thử phần mềm A', 'Là kiểm thử phần mềm B', 'Là kiểm thử phần mềm C', 'Là kiểm thử phần mềm D', '2021-04-02 03:06:05', NULL, NULL, 10);
INSERT INTO `questions` VALUES (21, 'Test case là gì ?', 1, 'Là A', 'Là B', 'Là C', 'Là D', '2021-04-02 03:06:05', NULL, NULL, 10);
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
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tests
-- ----------------------------
BEGIN;
INSERT INTO `tests` VALUES (9, 'Java Back End Test', 20, 1, '2021-04-02 03:02:55', NULL, NULL, 16);
INSERT INTO `tests` VALUES (10, 'Bài test kiểm thử phần mềm ', 20, 1, '2021-04-02 03:06:05', NULL, NULL, 16);
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
  `phone` varchar(25) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `image_url` varchar(256) DEFAULT NULL,
  `activated` bit(1) NOT NULL,
  `lang_key` varchar(10) DEFAULT NULL,
  `activation_key` varchar(20) DEFAULT NULL,
  `reset_key` varchar(20) DEFAULT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_date` timestamp NULL DEFAULT NULL,
  `reset_date` timestamp NULL DEFAULT NULL,
  `last_modified_by` varchar(50) DEFAULT NULL,
  `last_modified_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_user_login` (`login`),
  UNIQUE KEY `ux_user_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (2, 'anonymoususer', '$2a$10$j8S5d7Sr7.8VTOYNviDPOeWX8KcYILUVJBsYV83Y5NtECayypx9lO', 'Anonymous', 'User', 'anonymous@localhost', NULL, NULL, NULL, '', b'1', 'en', NULL, NULL, 'system', NULL, NULL, 'system', NULL);
INSERT INTO `user` VALUES (3, 'admin', '$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC', 'Anh1', 'Trần1', 'ductm@zent.vn', '0985632458', 'hn', '1996-01-02', 'image/f6f97645-679b-4c6b-a01f-f813a37b753ephoto-1533090161767-e6ffed986c88.jpeg', b'1', 'en', NULL, NULL, 'system', '2021-03-29 20:03:08', NULL, 'admin', '2021-03-29 13:17:35');
INSERT INTO `user` VALUES (15, 'ductm.ntd', '$2a$10$b3Z4Qd46HbKRyBUuVZSTuONXPwepamRzhnAZ8gVP.L08XK1JVo7fa', 'Trần', 'Đức', 'ductm.kma@gmail.com', '0989887889', 'Hà Nội', '2021-03-28', 'image/f6f97645-679b-4c6b-a01f-f813a37b753ephoto-1533090161767-e6ffed986c88.jpeg', b'1', 'vi', NULL, NULL, 'anonymousUser', '2021-04-01 23:53:30', NULL, 'ductm.ntd', '2021-04-02 00:04:40');
INSERT INTO `user` VALUES (16, 'ductm.ntd2', '$2a$10$t6rqthoaouJgTD4bM5Fja.8GjNmdtzUbo4z.Z2cwxJIVjG65yHEti', NULL, NULL, 'ductm.ntd2@gmail1.com', NULL, NULL, NULL, NULL, b'1', 'vi', NULL, NULL, 'anonymousUser', '2021-04-02 02:56:12', NULL, 'anonymousUser', '2021-04-02 02:56:12');
INSERT INTO `user` VALUES (17, 'ungvien', '$2a$10$BPYDEMtlj9OaF7n3AojI8eEh0f8VoddWpNYoW6/coXK3CweV9qKfe', 'Trần ', 'Minh Đức', 'ungvien@123.vn', NULL, NULL, NULL, NULL, b'1', 'vi', NULL, NULL, 'anonymousUser', '2021-04-02 03:36:02', NULL, 'ungvien', '2021-04-02 03:44:53');
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
INSERT INTO `user_authority` VALUES (3, 'ROLE_ADMIN');
INSERT INTO `user_authority` VALUES (3, 'ROLE_EMPLOYER');
INSERT INTO `user_authority` VALUES (3, 'ROLE_USER');
INSERT INTO `user_authority` VALUES (15, 'ROLE_EMPLOYER');
INSERT INTO `user_authority` VALUES (16, 'ROLE_EMPLOYER');
INSERT INTO `user_authority` VALUES (17, 'ROLE_USER');
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
