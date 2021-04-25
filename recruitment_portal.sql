-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 21, 2021 at 09:38 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recruitment_portal`
--
CREATE DATABASE IF NOT EXISTS `recruitment_portal` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `recruitment_portal`;

-- --------------------------------------------------------

--
-- Table structure for table `apply_jobs`
--

DROP TABLE IF EXISTS `apply_jobs`;
CREATE TABLE IF NOT EXISTS `apply_jobs` (
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
  `mail_content` text,
  `sent_at` timestamp NULL DEFAULT NULL,
  `submit_at` timestamp NULL DEFAULT NULL,
  `apply_job_interview_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `job_id` (`job_id`),
  KEY `profile_id` (`profile_id`),
  KEY `cv_id` (`cv_id`),
  KEY `apply_jobs_job_id_profile_id_index` (`job_id`,`profile_id`),
  KEY `apply_job_interview_id` (`apply_job_interview_id`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `apply_jobs`
--

INSERT INTO `apply_jobs` (`id`, `job_id`, `cv_id`, `profile_id`, `apply_date`, `total_correct_answer`, `total_question`, `status`, `created_at`, `updated_at`, `deleted_at`, `token_id`, `mail_content`, `sent_at`, `submit_at`, `apply_job_interview_id`) VALUES
(35, 11, 5, 4, '2021-04-04 02:43:42', NULL, NULL, 1, '2021-04-03 19:43:42', NULL, '2021-04-03 19:49:05', NULL, NULL, NULL, NULL, NULL),
(41, 15, 7, 2, '2021-04-17 16:42:24', NULL, NULL, 3, '2021-04-17 09:42:24', '2021-04-17 11:23:37', NULL, NULL, NULL, NULL, NULL, 16),
(42, 14, 8, 2, '2021-04-17 16:44:14', NULL, NULL, 3, '2021-04-17 09:44:14', '2021-04-17 11:58:55', NULL, NULL, NULL, NULL, NULL, 17),
(43, 9, 9, 2, '2021-04-17 16:50:38', NULL, NULL, 3, '2021-04-17 09:50:38', '2021-04-17 11:56:04', NULL, NULL, NULL, NULL, NULL, 15),
(44, 18, 10, 5, '2021-04-19 04:41:56', NULL, NULL, 3, '2021-04-18 21:41:56', '2021-04-18 21:45:31', NULL, NULL, NULL, NULL, NULL, 20),
(45, 19, 11, 6, '2021-04-19 04:42:38', NULL, NULL, 3, '2021-04-18 21:42:38', '2021-04-18 21:45:03', NULL, NULL, NULL, NULL, NULL, 19),
(46, 18, 12, 7, '2021-04-19 04:43:22', NULL, NULL, 3, '2021-04-18 21:43:22', '2021-04-18 21:44:27', NULL, NULL, NULL, NULL, NULL, 18),
(47, 17, 14, 8, '2021-04-19 04:52:43', NULL, NULL, 5, '2021-04-18 21:52:43', '2021-04-20 19:26:26', NULL, NULL, NULL, NULL, NULL, 23),
(48, 17, 16, 9, '2021-04-19 04:53:59', NULL, NULL, 5, '2021-04-18 21:53:59', '2021-04-20 19:26:31', NULL, NULL, NULL, NULL, NULL, 22),
(49, 16, 17, 10, '2021-04-19 04:54:47', NULL, NULL, 3, '2021-04-18 21:54:47', '2021-04-18 21:55:23', NULL, NULL, NULL, NULL, NULL, 21),
(50, 21, 19, 12, '2021-04-19 05:00:17', NULL, NULL, 5, '2021-04-18 22:00:17', '2021-04-20 19:33:16', NULL, NULL, NULL, NULL, NULL, 26),
(51, 20, 20, 13, '2021-04-19 05:00:39', NULL, NULL, 5, '2021-04-18 22:00:39', '2021-04-20 19:33:20', NULL, NULL, NULL, NULL, NULL, 25),
(52, 21, 21, 14, '2021-04-19 05:01:04', NULL, NULL, 3, '2021-04-18 22:01:04', '2021-04-18 22:01:45', NULL, NULL, NULL, NULL, NULL, 24),
(53, 22, 18, 11, '2021-04-19 05:02:54', NULL, NULL, 5, '2021-04-18 22:02:54', '2021-04-20 19:37:02', NULL, NULL, NULL, NULL, NULL, 29),
(54, 22, 22, 15, '2021-04-19 05:03:46', NULL, NULL, 3, '2021-04-18 22:03:46', '2021-04-18 22:05:14', NULL, NULL, NULL, NULL, NULL, 28),
(55, 22, 24, 16, '2021-04-19 05:04:12', NULL, NULL, 3, '2021-04-18 22:04:12', '2021-04-18 22:04:58', NULL, NULL, NULL, NULL, NULL, 27),
(56, 24, 25, 17, '2021-04-19 05:06:26', NULL, NULL, 3, '2021-04-18 22:06:26', '2021-04-18 22:08:38', '2021-04-19 21:26:03', NULL, NULL, NULL, NULL, 32),
(57, 23, 26, 18, '2021-04-19 05:07:09', NULL, NULL, 5, '2021-04-18 22:07:09', '2021-04-20 19:39:01', NULL, NULL, NULL, NULL, NULL, 31),
(58, 23, 27, 19, '2021-04-19 05:07:31', NULL, NULL, 3, '2021-04-18 22:07:31', '2021-04-18 22:08:13', NULL, NULL, NULL, NULL, NULL, 30),
(59, 44, 10, 5, '2021-04-20 03:57:41', NULL, NULL, 3, '2021-04-19 20:57:41', '2021-04-19 21:53:28', NULL, NULL, NULL, NULL, NULL, 43),
(60, 34, 10, 5, '2021-04-20 03:58:38', NULL, NULL, 3, '2021-04-19 20:58:38', '2021-04-20 02:53:00', NULL, NULL, NULL, NULL, NULL, 66),
(61, 26, 10, 5, '2021-04-20 03:59:18', NULL, NULL, 3, '2021-04-19 20:59:18', '2021-04-19 21:45:49', NULL, NULL, NULL, NULL, NULL, 36),
(62, 7, 10, 5, '2021-04-20 03:59:39', NULL, NULL, 1, '2021-04-19 20:59:39', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(63, 52, 11, 6, '2021-04-20 04:01:45', NULL, NULL, 3, '2021-04-19 21:01:45', '2021-04-19 21:35:39', NULL, NULL, NULL, NULL, NULL, 35),
(64, 51, 11, 6, '2021-04-20 04:02:28', NULL, NULL, 3, '2021-04-19 21:02:28', '2021-04-20 02:53:28', NULL, NULL, NULL, NULL, NULL, 67),
(65, 47, 11, 6, '2021-04-20 04:02:38', NULL, NULL, 3, '2021-04-19 21:02:38', '2021-04-19 21:54:19', NULL, NULL, NULL, NULL, NULL, 44),
(66, 10, 11, 6, '2021-04-20 04:03:15', NULL, NULL, 1, '2021-04-19 21:03:15', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(67, 53, 12, 7, '2021-04-20 04:04:19', NULL, NULL, 6, '2021-04-19 21:04:19', '2021-04-20 19:33:26', NULL, NULL, NULL, NULL, NULL, 56),
(68, 49, 12, 7, '2021-04-20 04:04:28', NULL, NULL, 6, '2021-04-19 21:04:28', '2021-04-20 19:37:16', NULL, NULL, NULL, NULL, NULL, NULL),
(69, 44, 12, 7, '2021-04-20 04:04:42', NULL, NULL, 5, '2021-04-19 21:04:42', '2021-04-20 19:30:55', NULL, NULL, NULL, NULL, NULL, 45),
(70, 26, 12, 7, '2021-04-20 04:04:50', NULL, NULL, 3, '2021-04-19 21:04:50', '2021-04-19 21:47:07', NULL, NULL, NULL, NULL, NULL, 37),
(71, 48, 14, 8, '2021-04-20 04:07:01', NULL, NULL, 3, '2021-04-19 21:07:01', '2021-04-19 22:04:05', NULL, NULL, NULL, NULL, NULL, 53),
(72, 18, 14, 8, '2021-04-20 04:08:00', NULL, NULL, 3, '2021-04-19 21:08:00', '2021-04-19 22:05:25', NULL, NULL, NULL, NULL, NULL, 55),
(73, 36, 14, 8, '2021-04-20 04:08:10', NULL, NULL, 1, '2021-04-19 21:08:10', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(74, 49, 14, 8, '2021-04-20 04:08:27', NULL, NULL, 1, '2021-04-19 21:08:27', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(75, 52, 16, 9, '2021-04-20 04:12:56', NULL, NULL, 3, '2021-04-19 21:12:56', '2021-04-19 22:08:37', NULL, NULL, NULL, NULL, NULL, 57),
(76, 24, 16, 9, '2021-04-20 04:14:16', NULL, NULL, 5, '2021-04-19 21:14:16', '2021-04-20 19:39:18', NULL, NULL, NULL, NULL, NULL, 68),
(77, 16, 16, 9, '2021-04-20 04:14:34', NULL, NULL, 3, '2021-04-19 21:14:34', '2021-04-19 21:48:42', NULL, NULL, NULL, NULL, NULL, 38),
(78, 45, 16, 9, '2021-04-20 04:15:20', NULL, NULL, 3, '2021-04-19 21:15:20', '2021-04-19 22:04:51', NULL, NULL, NULL, NULL, NULL, 54),
(79, 47, 17, 10, '2021-04-20 04:15:59', NULL, NULL, 3, '2021-04-19 21:15:59', '2021-04-19 22:03:03', NULL, NULL, NULL, NULL, NULL, 52),
(80, 52, 17, 10, '2021-04-20 04:16:06', NULL, NULL, 3, '2021-04-19 21:16:06', '2021-04-19 22:12:20', NULL, NULL, NULL, NULL, NULL, 58),
(81, 24, 17, 10, '2021-04-20 04:16:38', NULL, NULL, 6, '2021-04-19 21:16:38', '2021-04-20 19:38:48', NULL, NULL, NULL, NULL, NULL, 69),
(82, 34, 17, 10, '2021-04-20 04:17:06', NULL, NULL, 1, '2021-04-19 21:17:06', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(83, 49, 18, 11, '2021-04-20 04:17:37', NULL, NULL, 1, '2021-04-19 21:17:37', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(84, 34, 18, 11, '2021-04-20 04:17:51', NULL, NULL, 3, '2021-04-19 21:17:51', '2021-04-20 03:04:12', NULL, NULL, NULL, NULL, NULL, 73),
(85, 7, 18, 11, '2021-04-20 04:18:01', NULL, NULL, 1, '2021-04-19 21:18:01', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(86, 26, 18, 11, '2021-04-20 04:18:13', NULL, NULL, 6, '2021-04-19 21:18:13', '2021-04-20 19:23:45', NULL, NULL, NULL, NULL, NULL, 39),
(87, 49, 19, 12, '2021-04-20 04:18:45', NULL, NULL, 3, '2021-04-19 21:18:45', '2021-04-20 03:04:40', NULL, NULL, NULL, NULL, NULL, 74),
(88, 52, 19, 12, '2021-04-20 04:18:53', NULL, NULL, 3, '2021-04-19 21:18:53', '2021-04-19 22:13:36', NULL, NULL, NULL, NULL, NULL, 59),
(89, 35, 19, 12, '2021-04-20 04:19:03', NULL, NULL, 6, '2021-04-19 21:19:03', '2021-04-20 19:36:47', NULL, NULL, NULL, NULL, NULL, 75),
(90, 48, 19, 12, '2021-04-20 04:19:10', NULL, NULL, 3, '2021-04-19 21:19:10', '2021-04-19 22:01:53', NULL, NULL, NULL, NULL, NULL, 51),
(91, 28, 20, 13, '2021-04-20 04:20:06', NULL, NULL, 3, '2021-04-19 21:20:06', '2021-04-19 22:01:08', NULL, NULL, NULL, NULL, NULL, 50),
(92, 23, 20, 13, '2021-04-20 04:20:16', NULL, NULL, 6, '2021-04-19 21:20:16', '2021-04-20 19:39:36', NULL, NULL, NULL, NULL, NULL, 70),
(93, 52, 20, 13, '2021-04-20 04:20:41', NULL, NULL, 3, '2021-04-19 21:20:41', '2021-04-19 22:15:00', NULL, NULL, NULL, NULL, NULL, 60),
(94, 8, 20, 13, '2021-04-20 04:20:59', NULL, NULL, 1, '2021-04-19 21:20:59', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(95, 27, 21, 14, '2021-04-20 04:21:36', NULL, NULL, 6, '2021-04-19 21:21:36', '2021-04-20 19:23:15', NULL, NULL, NULL, NULL, NULL, 40),
(96, 24, 21, 14, '2021-04-20 04:21:52', NULL, NULL, 6, '2021-04-19 21:21:52', '2021-04-20 19:38:54', NULL, NULL, NULL, NULL, NULL, 71),
(97, 23, 21, 14, '2021-04-20 04:21:58', NULL, NULL, 3, '2021-04-19 21:21:58', '2021-04-20 03:00:38', NULL, NULL, NULL, NULL, NULL, 72),
(98, 10, 21, 14, '2021-04-20 04:22:14', NULL, NULL, 1, '2021-04-19 21:22:14', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(99, 33, 22, 15, '2021-04-20 04:22:54', NULL, NULL, 6, '2021-04-19 21:22:54', '2021-04-20 19:33:43', NULL, NULL, NULL, NULL, NULL, 61),
(100, 38, 22, 15, '2021-04-20 04:23:01', NULL, NULL, 5, '2021-04-19 21:23:01', '2021-04-20 19:30:31', NULL, NULL, NULL, NULL, NULL, 49),
(101, 34, 22, 15, '2021-04-20 04:23:11', NULL, NULL, 3, '2021-04-19 21:23:11', '2021-04-20 03:05:26', NULL, NULL, NULL, NULL, NULL, 76),
(102, 29, 22, 15, '2021-04-20 04:23:21', NULL, NULL, 3, '2021-04-19 21:23:21', '2021-04-19 21:59:33', NULL, NULL, NULL, NULL, NULL, 48),
(103, 44, 24, 16, '2021-04-20 04:24:08', NULL, NULL, 1, '2021-04-19 21:24:08', NULL, '2021-04-19 21:24:33', NULL, NULL, NULL, NULL, NULL),
(104, 28, 24, 16, '2021-04-20 04:24:17', NULL, NULL, 3, '2021-04-19 21:24:17', '2021-04-19 21:58:55', NULL, NULL, NULL, NULL, NULL, 47),
(105, 52, 24, 16, '2021-04-20 04:24:25', NULL, NULL, 3, '2021-04-19 21:24:25', '2021-04-19 22:16:18', NULL, NULL, NULL, NULL, NULL, 62),
(106, 46, 24, 16, '2021-04-20 04:24:46', NULL, NULL, 3, '2021-04-19 21:24:46', '2021-04-19 21:56:18', NULL, NULL, NULL, NULL, NULL, 46),
(107, 51, 24, 16, '2021-04-20 04:24:57', NULL, NULL, 3, '2021-04-19 21:24:57', '2021-04-20 03:08:45', NULL, NULL, NULL, NULL, NULL, 77),
(108, 50, 25, 17, '2021-04-20 04:25:40', NULL, NULL, 3, '2021-04-19 21:25:40', '2021-04-20 03:22:47', NULL, NULL, NULL, NULL, NULL, 81),
(109, 44, 25, 17, '2021-04-20 04:25:47', NULL, NULL, 6, '2021-04-19 21:25:47', '2021-04-20 19:30:02', NULL, NULL, NULL, NULL, NULL, 42),
(110, 36, 25, 17, '2021-04-20 04:25:57', NULL, NULL, 3, '2021-04-19 21:25:57', '2021-04-20 03:20:25', NULL, NULL, NULL, NULL, NULL, 80),
(111, 45, 25, 17, '2021-04-20 04:26:09', NULL, NULL, 3, '2021-04-19 21:26:09', '2021-04-19 21:51:46', NULL, NULL, NULL, NULL, NULL, 41),
(112, 53, 25, 17, '2021-04-20 04:26:32', NULL, NULL, 3, '2021-04-19 21:26:32', '2021-04-19 22:17:08', NULL, NULL, NULL, NULL, NULL, 63),
(113, 49, 26, 18, '2021-04-20 04:26:56', NULL, NULL, 5, '2021-04-19 21:26:56', '2021-04-20 19:37:37', NULL, NULL, NULL, NULL, NULL, 79),
(114, 8, 26, 18, '2021-04-20 04:27:05', NULL, NULL, 1, '2021-04-19 21:27:05', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(115, 7, 26, 18, '2021-04-20 04:27:14', NULL, NULL, 1, '2021-04-19 21:27:14', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(116, 9, 26, 18, '2021-04-20 04:27:23', NULL, NULL, 1, '2021-04-19 21:27:23', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(117, 52, 26, 18, '2021-04-20 04:27:29', NULL, NULL, 3, '2021-04-19 21:27:29', '2021-04-20 02:44:56', NULL, NULL, NULL, NULL, NULL, 64),
(118, 51, 27, 19, '2021-04-20 04:28:06', NULL, NULL, 1, '2021-04-19 21:28:06', NULL, '2021-04-19 21:28:28', NULL, NULL, NULL, NULL, NULL),
(119, 49, 27, 19, '2021-04-20 04:28:12', NULL, NULL, 3, '2021-04-19 21:28:12', '2021-04-20 03:10:21', NULL, NULL, NULL, NULL, NULL, 78),
(120, 44, 27, 19, '2021-04-20 04:28:21', NULL, NULL, 1, '2021-04-19 21:28:21', NULL, '2021-04-19 21:30:12', NULL, NULL, NULL, NULL, NULL),
(121, 53, 27, 19, '2021-04-20 04:29:46', NULL, NULL, 3, '2021-04-19 21:29:46', '2021-04-20 02:49:37', NULL, NULL, NULL, NULL, NULL, 65),
(122, 50, 27, 19, '2021-04-20 04:30:08', NULL, NULL, 3, '2021-04-19 21:30:08', '2021-04-20 03:09:47', NULL, NULL, NULL, NULL, NULL, 34),
(123, 46, 27, 19, '2021-04-20 04:30:28', NULL, NULL, 6, '2021-04-19 21:30:28', '2021-04-20 19:29:51', NULL, NULL, NULL, NULL, NULL, 33),
(124, 50, 29, 5, '2021-04-20 16:34:57', NULL, NULL, 1, '2021-04-20 09:34:57', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(126, 52, 31, 21, '2021-04-21 09:32:56', NULL, NULL, 5, '2021-04-21 02:32:56', '2021-04-21 02:35:55', NULL, NULL, NULL, NULL, NULL, NULL),
(127, 49, 31, 21, '2021-04-21 09:33:05', NULL, NULL, 1, '2021-04-21 02:33:05', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(128, 44, 31, 21, '2021-04-21 09:33:13', NULL, NULL, 6, '2021-04-21 02:33:13', '2021-04-21 02:36:24', NULL, NULL, NULL, NULL, NULL, NULL),
(129, 34, 31, 21, '2021-04-21 09:33:21', NULL, NULL, 1, '2021-04-21 02:33:21', NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(130, 24, 31, 21, '2021-04-21 09:33:40', NULL, NULL, 3, '2021-04-21 02:33:40', '2021-04-21 02:37:21', NULL, NULL, NULL, NULL, NULL, 83),
(131, 21, 31, 21, '2021-04-21 09:34:01', NULL, NULL, 1, '2021-04-21 02:34:01', NULL, '2021-04-21 02:35:44', NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `apply_job_interviews`
--

DROP TABLE IF EXISTS `apply_job_interviews`;
CREATE TABLE IF NOT EXISTS `apply_job_interviews` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `interview_time` timestamp NULL DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `interviewer` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL COMMENT 'Người hẹn phỏng vấn',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `apply_job_interviews`
--

INSERT INTO `apply_job_interviews` (`id`, `interview_time`, `address`, `interviewer`, `user_id`, `created_at`, `updated_at`, `deleted_at`) VALUES
(10, '2021-04-24 01:24:00', 'Tầng 6 Số 118 Hai Bà Trưng', 'Anh Đức', 3, '2021-04-17 07:25:34', '2021-04-17 09:13:43', NULL),
(11, '2021-04-29 20:00:00', '141 Chiến Thắng Trần Phú', NULL, 3, '2021-04-17 07:34:09', '2021-04-17 08:55:07', NULL),
(12, '2021-04-23 21:00:00', 'Tân triều mới thay đổi', 'Anh Đức nè', 3, '2021-04-17 07:51:49', '2021-04-17 08:17:57', NULL),
(13, '2021-04-28 21:00:00', '118 Trương Định', 'Anh Đức test', 3, '2021-04-17 08:18:54', '2021-04-17 08:19:16', NULL),
(14, '2021-04-16 17:04:08', 'Oke nè', 'Okef nè', 3, '2021-04-17 08:53:20', NULL, NULL),
(15, '2021-04-18 07:00:00', 'Thanh Xuân HN đổi nhé', 'Anh Hải Đẹp trai', 3, '2021-04-17 10:25:58', '2021-04-17 11:56:04', NULL),
(16, '2021-04-21 17:00:02', '12121', '121212', 3, '2021-04-17 11:23:37', NULL, NULL),
(17, '2021-04-21 23:03:02', 'dsdsdsd', 'sdsdsd', 3, '2021-04-17 11:58:55', NULL, NULL),
(18, '2021-04-30 06:30:00', 'Ho Chi Minh City', 'Duc Huy', 25, '2021-04-18 21:44:27', NULL, NULL),
(19, '2021-04-29 01:00:00', 'Ho Chi Minh City', 'Tuan Huu', 25, '2021-04-18 21:45:03', NULL, NULL),
(20, '2021-04-30 02:00:00', 'Ho Chi Minh City', 'Duy Khanh', 25, '2021-04-18 21:45:31', NULL, NULL),
(21, '2021-04-29 03:00:00', 'Ho Chi Minh City', 'Tuan Huu', 24, '2021-04-18 21:55:23', NULL, NULL),
(22, '2021-04-29 03:00:00', 'Ho Chi Minh City', 'Duy Khanh', 24, '2021-04-18 21:55:50', NULL, NULL),
(23, '2021-04-29 02:00:00', 'Ho Chi Minh City', 'Duc Huy', 24, '2021-04-18 21:56:08', NULL, NULL),
(24, '2021-05-01 03:00:00', 'Ho Chi Minh City', 'Tuan Huu', 26, '2021-04-18 22:01:45', NULL, NULL),
(25, '2021-05-01 03:00:00', 'Ho Chi Minh City', 'Duc Huy', 26, '2021-04-18 22:02:06', '2021-04-19 21:34:32', NULL),
(26, '2021-05-01 07:00:00', 'Da Nang City', 'Duy Khanh', 26, '2021-04-18 22:02:26', '2021-04-19 21:34:02', NULL),
(27, '2021-04-29 01:00:00', 'Ha Noi', 'Duc Phat', 27, '2021-04-18 22:04:58', NULL, NULL),
(28, '2021-04-29 01:00:00', 'Ha Noi', 'Duc Phat', 27, '2021-04-18 22:05:14', NULL, NULL),
(29, '2021-04-29 01:00:00', 'Ha Noi', 'Duc Phat', 27, '2021-04-18 22:05:30', NULL, NULL),
(30, '2021-04-28 04:00:00', 'Binh Duong Province', 'Huu Hanh', 28, '2021-04-18 22:08:13', NULL, NULL),
(31, '2021-04-29 06:00:00', 'Binh Duong Province', 'Huu Hanh', 28, '2021-04-18 22:08:24', NULL, NULL),
(32, '2021-04-30 09:00:00', 'Binh Duong Province', 'Huu Hanh', 28, '2021-04-18 22:08:38', NULL, NULL),
(33, '2021-05-07 03:00:00', 'Vinh Long Province', 'Minh Hoang', 25, '2021-04-19 21:32:10', '2021-04-19 21:51:20', NULL),
(34, '2021-05-24 04:00:00', 'Ca Mau Province', 'Phuong Anh', 27, '2021-04-19 21:32:48', '2021-04-20 03:09:47', NULL),
(35, '2021-05-20 01:00:00', 'Ha Tinh Province', 'Interviewer 1', 26, '2021-04-19 21:35:39', NULL, NULL),
(36, '2021-05-20 03:00:00', 'Son La Province', 'Interview 2', 24, '2021-04-19 21:45:49', NULL, NULL),
(37, '2021-05-12 01:00:00', 'Quang Ngai Province', 'Phat Sinh', 24, '2021-04-19 21:47:07', NULL, NULL),
(38, '2021-05-14 06:00:00', 'Thanh Hoa Province', 'Duy Khanh', 24, '2021-04-19 21:48:42', NULL, NULL),
(39, '2021-05-22 05:00:00', 'Hai Phong City', 'Tuan Huu', 24, '2021-04-19 21:49:18', NULL, NULL),
(40, '2021-04-30 03:00:00', 'Ho Chi Minh City', 'Thanh Hoai', 24, '2021-04-19 21:49:49', NULL, NULL),
(41, '2021-04-30 09:00:00', 'Can Tho City', 'Phi Hung', 25, '2021-04-19 21:51:46', NULL, NULL),
(42, '2021-05-18 05:00:00', 'Kien Giang Province', 'Huu Hanh', 25, '2021-04-19 21:52:29', NULL, NULL),
(43, '2021-05-11 03:00:00', 'Hau Giang Province', 'Quang Thinh', 25, '2021-04-19 21:53:28', NULL, NULL),
(44, '2021-05-21 08:00:00', 'Nghe An Province', 'Van Thuan', 25, '2021-04-19 21:54:19', NULL, NULL),
(45, '2021-05-16 02:00:00', 'Ho Chi Minh City', 'Interview 3', 25, '2021-04-19 21:55:23', NULL, NULL),
(46, '2021-05-19 03:00:00', 'Binh Thanh District, Ho Chi Minh City', 'Hong Nhung', 25, '2021-04-19 21:56:18', NULL, NULL),
(47, '2021-05-24 07:00:00', 'Vung Tau City, Ba Ria - Vung Tau Province', 'Huu Hanh', 25, '2021-04-19 21:58:55', NULL, NULL),
(48, '2021-05-06 03:00:00', 'District 1, Ho Chi Minh City', 'Interview 3', 25, '2021-04-19 21:59:33', NULL, NULL),
(49, '2021-05-20 02:00:00', 'District 2, Ho Chi Minh City', 'Quoc Phong', 25, '2021-04-19 22:00:33', NULL, NULL),
(50, '2021-05-26 04:00:00', 'District 5, Ho Chi Minh City', 'Duy Khanh', 25, '2021-04-19 22:01:08', NULL, NULL),
(51, '2021-05-16 02:00:00', 'Thu Duc City, Ho Chi Minh City', 'Thanh Thinh', 25, '2021-04-19 22:01:53', NULL, NULL),
(52, '2021-05-16 03:00:00', 'District 8, Ho Chi Minh City', 'Huu Hanh', 25, '2021-04-19 22:03:03', NULL, NULL),
(53, '2021-05-12 01:00:00', 'District 10, Ho Chi Minh City', 'Duc Thinh', 25, '2021-04-19 22:04:05', NULL, NULL),
(54, '2021-05-22 04:00:00', 'Thanh Xuan District, Ha Noi', 'Duc Huy', 25, '2021-04-19 22:04:51', NULL, NULL),
(55, '2021-05-23 03:00:00', 'Ba Dinh District, Ha Noi', 'Duy Khanh', 25, '2021-04-19 22:05:25', NULL, NULL),
(56, '2021-05-12 03:00:00', 'Hai Phong City', 'Khanh Quang', 26, '2021-04-19 22:07:10', NULL, NULL),
(57, '2021-05-13 01:00:00', 'Nghe An Province', 'Phi Hung', 26, '2021-04-19 22:08:37', NULL, NULL),
(58, '2021-05-15 05:00:00', 'District 4, Ho Chi Minh City', 'Minh Phuc', 26, '2021-04-19 22:12:20', NULL, NULL),
(59, '2021-05-16 05:00:00', 'District 2, Ho Chi Minh City', 'Tuan Huu', 26, '2021-04-19 22:13:36', NULL, NULL),
(60, '2021-05-08 02:00:00', 'Hau Giang Province', 'Thai An', 26, '2021-04-19 22:15:01', NULL, NULL),
(61, '2021-05-18 02:00:00', 'Online Interview (Skype)', 'Duc Phat', 26, '2021-04-19 22:15:55', NULL, NULL),
(62, '2021-05-25 05:00:00', 'Online Interview (Skype)', 'Duy Khanh', 26, '2021-04-19 22:16:18', NULL, NULL),
(63, '2021-05-11 17:00:00', 'Online Interview (Zoom)', 'Duy Khanh', 26, '2021-04-19 22:17:08', NULL, NULL),
(64, '2021-05-14 03:00:00', 'Cao Bang Province', 'Duy Khanh', 26, '2021-04-20 02:44:56', NULL, NULL),
(65, '2021-05-06 01:00:00', 'Vinh Phuc Province', 'Phi Hung', 26, '2021-04-20 02:49:37', NULL, NULL),
(66, '2021-05-12 03:00:00', 'Hai Duong Province', 'Quoc Hung', 27, '2021-04-20 02:53:00', NULL, NULL),
(67, '2021-05-05 03:00:00', 'Hai Duong Province', 'Duc Huy', 27, '2021-04-20 02:53:29', NULL, NULL),
(68, '2021-05-30 07:00:00', 'Ho Chi Minh City', 'Tuan Huu', 28, '2021-04-20 02:55:24', NULL, NULL),
(69, '2021-05-14 04:00:00', 'Ho Chi Minh City', 'Duc Huy', 28, '2021-04-20 02:55:49', NULL, NULL),
(70, '2021-05-05 01:00:00', 'Thu Dau Mot City, Binh Duong Province', 'Duc Phat', 28, '2021-04-20 02:56:14', NULL, NULL),
(71, '2021-05-20 05:00:00', 'Thu Dau Mot City, Binh Duong Province', 'Phi Hung', 28, '2021-04-20 02:58:13', NULL, NULL),
(72, '2021-05-16 07:00:00', 'Thu Dau Mot City, Binh Duong ', 'Quang Thinh', 28, '2021-04-20 03:00:38', NULL, NULL),
(73, '2021-05-13 01:00:00', 'Ho Chi Minh City', 'Van Thuan', 27, '2021-04-20 03:04:12', NULL, NULL),
(74, '2021-05-11 02:00:00', 'Ho Chi Minh City', 'Van Thuan', 27, '2021-04-20 03:04:40', NULL, NULL),
(75, '2021-05-13 01:00:00', 'Ho Chi Minh City', 'Van Thuan', 27, '2021-04-20 03:05:02', NULL, NULL),
(76, '2021-05-13 03:00:00', 'Ho Chi Minh City', 'Van Thuan', 27, '2021-04-20 03:05:26', NULL, NULL),
(77, '2021-05-13 08:00:00', 'Ho Chi Minh City', 'Van Thuan', 27, '2021-04-20 03:08:45', NULL, NULL),
(78, '2021-05-22 07:00:00', 'Binh Duong Province', 'Phi Hung', 27, '2021-04-20 03:10:21', NULL, NULL),
(79, '2021-05-18 01:00:00', 'Binh Duong Province', 'Quang Thinh', 27, '2021-04-20 03:14:40', NULL, NULL),
(80, '2021-05-05 00:00:00', 'Ho Chi Minh City', 'Minh Phuc', 27, '2021-04-20 03:20:25', NULL, NULL),
(81, '2021-05-19 02:00:00', 'Binh Duong Province', 'Duy Khanh', 27, '2021-04-20 03:22:47', NULL, NULL),
(82, '2021-04-30 12:00:00', 'Ho Chi Minh City', 'Van Thuan', 25, '2021-04-21 01:10:37', NULL, NULL),
(83, '2021-05-13 06:00:00', 'Ho Chi Minh City', 'Tuan Huu', 28, '2021-04-21 02:37:21', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `authority`
--

DROP TABLE IF EXISTS `authority`;
CREATE TABLE IF NOT EXISTS `authority` (
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `authority`
--

INSERT INTO `authority` (`name`) VALUES
('ROLE_ADMIN'),
('ROLE_EMPLOYER'),
('ROLE_USER');

-- --------------------------------------------------------

--
-- Table structure for table `careers`
--

DROP TABLE IF EXISTS `careers`;
CREATE TABLE IF NOT EXISTS `careers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varbinary(255) NOT NULL,
  `status` int(11) DEFAULT NULL COMMENT 'Trạng thái: 0 - ẩn, 1 hiện',
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `careers`
--

INSERT INTO `careers` (`id`, `title`, `status`, `type`) VALUES
(1, 0x4f636375706174696f6e616c20536166657479, 1, NULL),
(2, 0x507265737320262054656c65766973696f6e, 1, NULL),
(3, 0x496e666f726d6174696f6e20546563686e6f6c6f6779, 1, NULL),
(4, 0x536f66747761726520546563686e6f6c6f6779, 1, NULL),
(5, 0x52657461696c2053616c6573, 1, NULL),
(6, 0x4163636f756e74696e672046696e616e6369616c, 1, NULL),
(7, 0x4d61726b6574696e67, 1, NULL),
(8, 0x4175746f6d6174696f6e, 1, NULL),
(16, 0x456475636174696f6e, 1, NULL),
(17, 0x53616c65732f20427573696e657373, 1, NULL),
(19, 0x496e73757272616e6365, 1, NULL),
(20, 0x496e746572707265746572, 1, NULL),
(21, 0x506f737420262054656c65636f6d6d756e69636174696f6e, 1, NULL),
(22, 0x436174746c652052616e6368696e672f20566574, 1, NULL),
(23, 0x53656375726974696573, 1, NULL),
(24, 0x42696f746563686e6f6c6f6779, 1, NULL),
(25, 0x466f6f6420546563686e6f6c6f6779, 1, NULL),
(27, 0x506574726f6c65756d202620476173, 1, NULL),
(28, 0x5465787469746c652f20466f6f74776561722f2046617368696f6e, 1, NULL),
(29, 0x437573746f6d65722053657276696365, 1, NULL),
(30, 0x546f757269736d, 1, NULL),
(31, 0x506861726d61636575746963616c20496e647573747279, 1, NULL),
(33, 0x456c656374726963616c202f20456c656374726f6e6963202f2052656672696765726174696f6e, 1, NULL),
(34, 0x576f6f64776f726b, 1, NULL),
(35, 0x456e7465727461696e6d656e74, 1, NULL),
(36, 0x486f757365686f6c6420676f6f6473202f20506572736f6e616c2063617265, 1, NULL),
(37, 0x41646d6972616c7479, 1, NULL),
(38, 0x4176696174696f6e, 1, NULL),
(39, 0x457865637574697665207374616666202f20536563726574617279, 1, NULL),
(40, 0x4368656d6973747279, 1, NULL),
(41, 0x5072696e74696e67202f205075626c697368696e67, 1, NULL),
(42, 0x4d696e6572616c, 1, NULL),
(43, 0x417263686974656374757265, 1, NULL),
(44, 0x556e736b696c6c6564206c61626f72, 1, NULL),
(45, 0x466f726573747279, 1, NULL),
(46, 0x4c6177, 1, NULL),
(47, 0x456e7669726f6e6d656e74616c20456e67696e656572696e67, 1, NULL),
(48, 0x4e65776c7920477261647561746564202f20496e7465726e73686970, 1, NULL),
(49, 0x4172742f2044657369676e, 1, NULL),
(50, 0x42616e6b696e67, 1, NULL),
(51, 0x52657374617572616e74202f20486f74656c, 1, NULL),
(52, 0x48756d616e205265736f75726365, 1, NULL),
(53, 0x496e746572696f7220616e64206578746572696f72, 1, NULL),
(54, 0x4167726963756c74757265, 1, NULL),
(55, 0x4e6f6e2d676f7665726e6d656e74202f204e6f6e2d70726f666974, 1, NULL),
(56, 0x5175616c697479206d616e6167656d656e74, 1, NULL),
(57, 0x457865637574697665206d616e6167656d656e74, 1, NULL),
(58, 0x4164766572746973696e67202f20466f726569676e20416666616972202f204d65646961, 1, NULL),
(59, 0x4d616e75666163747572696e67202f204d616e75666163747572696e67206f7065726174696f6e73, 1, NULL),
(60, 0x46696e616e6369616c202f20496e766573746d656e74, 1, NULL),
(61, 0x537461746973746963, 1, NULL),
(62, 0x50757263686173696e67202f20537570706c696573, 1, NULL),
(63, 0x49727269676174696f6e, 1, NULL),
(64, 0x466973686572696573, 1, NULL),
(65, 0x4c696272617279, 1, NULL),
(66, 0x466f6f642026204472696e6b, 1, NULL),
(67, 0x4f6e6c696e65204d61726b6574696e67, 1, NULL),
(68, 0x4576656e74204f7267616e697a6174696f6e, 1, NULL),
(69, 0x47656f6c6f676963616c, 1, NULL),
(71, 0x436f6e73756c74696e67, 1, NULL),
(72, 0x5368697070696e672f204c6f67697374696373, 1, NULL),
(73, 0x436f6e737472756374696f6e, 1, NULL),
(74, 0x496d706f727420616e64204578706f7274, 1, NULL),
(75, 0x4865616c74682043617265, 1, NULL),
(76, 0x4d61696e74656e616e6365, 1, NULL),
(77, 0x4f74686572204a6f6273, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`, `description`, `created_at`, `updated_at`, `deleted_at`) VALUES
(23, 'High Salary Job', 'High Salary Job', '2021-04-01 20:27:17', '2021-04-18 20:36:04', NULL),
(24, 'Tips Maketing', 'Tips Maketing', '2021-04-01 20:28:15', NULL, NULL),
(25, 'Developing Tips', 'Developing Tips', '2021-04-01 20:28:37', '2021-04-18 20:35:51', NULL),
(26, 'Tester Tips', 'Tester Tips', '2021-04-01 20:28:51', '2021-04-18 20:36:21', NULL),
(27, 'Job Seeking Tips', 'Job Seeking Tips', NULL, NULL, NULL),
(28, 'General Tips', 'General Tips', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
CREATE TABLE IF NOT EXISTS `companies` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT 'tên công ty',
  `code` varchar(255) DEFAULT NULL COMMENT 'Mã số thuế',
  `scope_work` varchar(255) DEFAULT NULL COMMENT 'Lĩnh vực hoạt động',
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL COMMENT 'Logo',
  `website` varchar(255) DEFAULT NULL,
  `description` text COMMENT 'Mô tả công ty',
  `company_size` bigint(20) DEFAULT NULL COMMENT 'Quy mô công ty: 0 - dưới 10 người, 1 - 10 - 20 người,...',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `code`, `scope_work`, `address`, `phone`, `email`, `logo`, `website`, `description`, `company_size`, `created_at`, `updated_at`, `deleted_at`, `user_id`) VALUES
(11, 'VIEN DONG ELEVATOR JSC', '093332323235', NULL, 'C’Land Building, 156 Xa Dan 2, Nam Dong, Dong Da, Hanoi', '0977722123', 'vdcompany@gmail.com', 'image/4602b97a-591c-49f8-bb46-465a84566d55tintuc6ee5a6d763ad42aee5d9046e2b0cd610.jpg', 'viendong.com', '<p>Vien Dong Elevator Joint Stock Company operates in the field of installation, maintenance and repair of lifting equipment, elevators and escalators with famous brands in the world in Vietnam such as Hyundai, Otis and Schindler. With customer orientation, Vien Dong Elevator Joint Stock Company is committed to meeting and complying with safety procedures and technical requirements in equipment installation management to provide users with an elevator system. best quality while ensuring safety during operation. In addition, Vien Dong Elevator Joint Stock Company provides warranty &amp; periodical maintenance services for the works if required by the manufacturing unit. We understand that the satisfaction and safety of users is the success of our service provider. A good service system not only brings benefits to users but also ensures the reputation of the manufacturer in the Vietnamese market.</p>', 3, '2021-04-01 19:20:32', '2021-04-18 20:27:23', NULL, 15),
(12, 'Công ty CP Dịch vụ Goline', '048347443412', NULL, 'Tòa Nhà Kim Ánh, 78 Duy Tân, Cầu Giấy, Hà Nội', '0989823523', 'goline123@gmail.com', 'image/201834a2-c296-4280-b997-b03431d095c4download.jpeg', 'goline123.vn', '<p>Goline Corporation là công ty phát triển &amp; triển khai hệ thống phần mềm giao dịch chứng khoán hàng đầu tại VN; cung cấp các giải pháp cho các tổ chức tài chính, ngân hàng, chứng khoán và là đối tác tin cậy của các công ty phần mềm tài chính Nhật Bản</p><p>Đội ngũ nhân sự cấp cao của Goline đã tham gia phát triển và triển khai hệ thống PM giao dịch cho trên 20 công ty chứng khoán tại VN và sở hữu trên 30 chứng chỉ phát triển phần mềm các loại của Microsoft, Sun, Oracle và IBM</p><p>Goline là 1 môi trường thân thiện nhưng chuyên nghiệp và đã được tổ chức NQA của Vương Quốc Anh cấp chứng chỉ xác nhận hệ thống quản lý chất lượng ISO 9001:2015 và chứng chỉ an toàn bảo mật thông tin ISO 27001:1025</p>', 4, '2021-04-01 19:59:29', NULL, NULL, 16),
(13, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-03 18:51:35', NULL, NULL, 21),
(14, 'Dream Bean Cafe', '5400306054', NULL, '162 Nguyen An Ninh, Ward 8, District 3, Ho Chi Minh City', '0916359999', 'dreambeancafe@gmail.com', 'image/f8c6a19c-d513-4bda-a043-826a2acecb9acafe.jpg', 'https://www.dreambeancafe.com.vn', '<p>The menu of drinks and food is plentiful, the quality and the price is extremely reasonable, with airy and comfortable space, the bar view to the road is very suitable for all ages, the Japanese style table, the sitting area is very elaborate suitable for those who need a quiet, comfortable private space</p>', 2, '2021-04-18 03:40:17', '2021-04-18 07:38:13', NULL, 24),
(15, 'Nova Spin', '8168847168', NULL, 'Duc Thanh, Ward Ninh Hai, Nghi Son Town, Thanh Hoa Province', '8168847168', 'novaspin@gmail.com', 'image/0914a62f-a9d1-4651-900d-d17c90ade5cfb3c57faf-799a-4ca4-8d89-1a952ce38cd83D_company.jpg', 'https://www.novaspin.com.vn', '<p>In Vietnam, most companies have a common desire to find customers and increase profitability for products profit, this is only done when the businesses build their own brands on market. This is not a simple job because of the competition of many competitors in all different fields. Besides, advertising information about other products and brands is available in the media.</p><p><br></p><p>Nova Spin Company always considers bringing value benefits to customers from design products as a top factor in its development direction. Through images, colors and design styles… customers can see the class and brand vision of each business.</p><p><br></p><p>Graphic design is one of Nova Spin\'s strengths. This is a service for customers who require images that are not only of high aesthetic value, but also be impressive, creative, and bring expressive value to the content for the makerting campaign.</p><p><br></p><p>With a team of highly specialized, experienced and dedicated personnel, we always want to bring to our customers true values ​​through each product.</p>', 4, '2021-04-18 03:44:52', '2021-04-19 08:54:51', NULL, 25),
(16, 'Airline Travel', '3800234965', NULL, 'Area 4, Nhon Ly Village, Quy Nhon City, Binh Dinh Province, Viet Nam', '0355563330', 'airlinetravel@gmail.com', 'image/611a75c4-86bd-48b0-8f31-24a8c763b7ff3e6e789f-5597-4449-9810-a828364470faairlines.jpg', 'https://www.airlinetravel.com.vn', '<p>AIRLINE TRAVEL AND THE JOURNEY - \"MORE THAN ONE FLIGHT\"</p><p><br></p><p>With the mission of connecting tourist lands on the S-shaped land, elevating the image of the country and people of Vietnam on the international map, Airline Travel begins its journey to reach out, cooperating with leading brands in the world in the aviation industry.</p><p><br></p><p>“We have a very clear strategy to build Airline Travel into a 5-star standard airline, serving both domestic and international routes. In addition to the innovative operating model, we want to bring new service standards to bring comfort, relaxation and enjoyment on each journey for passengers ”- Chairman of Airline Travel Group Dang Hoang Minh.</p><p><br></p><p>Along with large investment and cooperation agreements are clear directions for brand development. At the same time, the process of preparing Airline Travel\\\'s profile with all necessary legal procedures also received a high consensus from government agencies.</p><p><br></p><p>With the desire to bring the dream of flying closer to all Vietnamese people and foreign tourists, we have built a very diverse and flexible ticket class policy including: Economy, Premium, Business.</p><p><br></p><p>In order to provide passengers with new experiences, especially the 5-star quality navigation experience, Airline Travel\'s air entertainment system will help passengers feel most comfortable during the flight.</p><p><br></p><p>In terms of aircraft interiors, with thousands of small details combined on Airline Travel\'s aircraft, we believe that every element of the interior can make a difference to passengers. From the selection of colors, types of seats, fabrics, leather types to the design space in the passenger compartment and the way the seats are arranged ... all show the effort to serve and create a sense of comfort, most convenient for customers.</p><p><br></p><p>With all the above preparations, Airline Travel wants to bring more experience than expected for customers, becoming the first 5-star service-oriented airline in Vietnam with first-class and advanced cabin. to the leading position in the Asian aviation industry in the coming journey.</p><p><br></p><p>Discovering Vietnam and the world at a reasonable price and friendly service derived from hospitality and utter meticulousness and devotion is what the operator can expect at Airline Travel. And we believe that means \"More than just a flight!\"</p>', 7, '2021-04-18 03:45:35', '2021-04-18 08:08:47', NULL, 26),
(17, 'Cinema & Co', '4000196705', NULL, 'Fourth Floor, Vincom Da Nang Mall, Ngo Quyen Street, Son Tra District, Da Nang City', '19006017', 'cinemaandco@gmail.com', 'image/14a0cb2c-077d-4aae-bc1f-65fba82514b45cfbfe01-2016-4b27-9524-59598e9d0fcbcinema.jpg', 'https://www.cinemaco.com.vn', '<p>Cinema &amp; Co is one of the top 5 largest movie theaters in the world and the largest publisher, cinema complex in Vietnam.Our goal is to be the typical corporate model contributing to the development. continuous development of the Vietnamese film industry.</p><p><br></p><p>Cinema &amp; Co has created a unique concept of transforming traditional cinemas into the “Cultureplex” cultural complex, where audiences not only come to enjoy diverse cinema through advanced technologies such as SCREENX, IMAX, STARIUM, 4DX, Dolby Atmos, and enjoy completely new and different cuisine while experiencing the highest quality service at Cinema &amp; Co.</p><p><br></p><p>Through efforts to build the program of Talented Writers, the Short Film Project Co, the TOTO Filmmaking Class, ArtHouse, and the sponsorship of major domestic film festival activities such as the International Film Festival In Hanoi, the Vietnam Film Festival hopes to explore and support the development of talented young Vietnamese filmmakers.</p><p><br></p><p>Cinema &amp; Co also focuses on audiences in regions that do not have much access to cinema, by providing opportunities for them to enjoy high-quality movies through shows. for communities such as Moon Laughter and Cinema for everyone.</p><p><br></p><p>Cinema &amp; Co will continue its persistent journey of contributing to building a stronger Vietnamese film industry with potential customers, filmmakers, and reputable business partners. and with society as a whole.</p>', 7, '2021-04-18 03:47:19', '2021-04-18 08:20:46', NULL, 27),
(18, 'Uni University', '51102967806', NULL, '504 Binh Duong Avenue, Hiep Thanh Ward, Thu Dau Mot City, Binh Duong Province', '02743820833', 'university@gmail.com', 'image/bd844dd7-ab35-4c0e-bb5a-97b71ac108e5902b12f7-1ac3-40c6-808f-b254af0864e1university.jpg', 'https://www.university.com.vn', '<p>ADMISSION AND EDUCATION</p><p>Over the past 20 years, Uni University has trained and granted diplomas to over 34,000 students. In which, over 16,000 students graduated from universities and colleges with regular training; over 13,000 students of distance, work-study, diploma 2 and university transfer, in addition, the University also provides more than 3,500 professional intermediate-level graduates for society. In addition, there are more than 400 masters graduated with different training majors, including 54 masters of the MBA program granted by Benedictine University in the United States.</p><p><br></p><p>In 2010, in order to create conditions for children in remote areas with many difficulties to continue to study to higher education, the school invested in building Uni University branch in Ca Mau, currently has more than 3,000 students. students study here.</p><p><br></p><p>Uni University has signed cooperation with more than 30 universities, research institutes and educational groups of 11 countries around the world, including: Russia, Poland, the United States, the UK, Korea, Japan, and Thailand. Lan, Belarus, China, Laos, Cambodia. The partners regularly and continuously send a team of qualified experts to Uni University to participate in teaching and scientific research.</p>', 6, '2021-04-18 03:48:45', '2021-04-18 08:30:38', NULL, 28),
(19, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-19 01:31:27', NULL, NULL, 44),
(20, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-20 20:18:52', NULL, NULL, 44),
(21, 'Mya Co', '56511417165', NULL, '16 Truong Tho, Thu Duc City, Ho Chi Minh City', '0826359498', 'tepbi1996@gmail.com', 'image/d8c4a590-8968-4cd8-9cc3-a7a5e078692acompany_logo.jpg', 'https://www.myaco.com.vn', '<p>Mya Co is a new company that provides expertise in search marketing solutions for businesses worldwide, including&nbsp;<a href=\"https://www.thebalancesmb.com/what-is-website-promotion-1794442\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: windowtext;\">website promotion,</a>&nbsp;online advertising, and&nbsp;<a href=\"https://www.thebalancesmb.com/search-engine-optimization-tutorial-1794804\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: windowtext;\">search engine optimization techniques</a>&nbsp;to improve its clients\'&nbsp;<a href=\"https://www.thebalancesmb.com/search-engine-optimization-2948419\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: windowtext;\">positioning in search engines</a>. We cater to the higher education market, including colleges, universities, and professional educational institutions.</p>', 5, '2021-04-20 20:22:18', NULL, NULL, 44);

-- --------------------------------------------------------

--
-- Table structure for table `company_career`
--

DROP TABLE IF EXISTS `company_career`;
CREATE TABLE IF NOT EXISTS `company_career` (
  `company_id` bigint(20) NOT NULL,
  `career_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company_career`
--

INSERT INTO `company_career` (`company_id`, `career_id`) VALUES
(12, 3),
(14, 66),
(14, 5),
(14, 29),
(16, 38),
(16, 29),
(17, 29),
(17, 17),
(18, 16),
(18, 65),
(11, 8),
(15, 49),
(15, 29),
(21, 7),
(21, 29);

-- --------------------------------------------------------

--
-- Table structure for table `cvs`
--

DROP TABLE IF EXISTS `cvs`;
CREATE TABLE IF NOT EXISTS `cvs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `url` text,
  `type` int(11) DEFAULT NULL COMMENT '0 - cv phụ, 1 - cv chính',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cvs`
--

INSERT INTO `cvs` (`id`, `title`, `url`, `type`, `created_at`, `updated_at`, `deleted_at`) VALUES
(5, 'abc.pdf', 'cv/ab91cc34-de86-4646-a3ec-dfc6080560f5abc.pdf', 1, '2021-04-03 19:37:25', NULL, NULL),
(7, 'Quy trinh shopee.pdf', 'cv/a1b5d952-a811-463f-b38b-e2f9b828b3adQuy trinh shopee.pdf', 0, '2021-04-17 09:39:43', NULL, NULL),
(8, '18. Quy trình triển khai học Online trên Skype.docx.pdf', 'cv/4c90883f-5dad-4758-b601-5305ad6ca5b818. Quy trình triển khai học Online trên Skype.docx.pdf', 0, '2021-04-17 09:44:14', NULL, NULL),
(9, '18. Quy trình triển khai học Online trên Skype.docx.pdf', 'cv/651d376c-6fb9-469a-8fbc-32aab33ecda018. Quy trình triển khai học Online trên Skype.docx.pdf', 1, '2021-04-17 09:50:09', NULL, NULL),
(10, 'ngoclinh.pdf', 'cv/0e5d6e7d-4170-4390-90ec-41311de36791ngoclinh.pdf', 0, '2021-04-18 05:46:59', NULL, NULL),
(11, 'minhtam.pdf', 'cv/2f641141-2bee-441b-8a88-554784aeb730minhtam.pdf', 1, '2021-04-18 05:56:59', NULL, NULL),
(12, 'myhanh.pdf', 'cv/3e6ad901-4b9b-487d-bcf0-d96b0107804cmyhanh.pdf', 1, '2021-04-18 06:16:51', NULL, NULL),
(13, 'thanhhung.pdf', 'cv/040927c0-0735-4bbb-9a83-d66961ae5150thanhhung.pdf', 0, '2021-04-18 06:21:01', NULL, NULL),
(14, 'thanhhung.pdf', 'cv/9fdea40c-ab5a-4bf3-aa37-aed79bb12a3ethanhhung.pdf', 1, '2021-04-18 06:21:12', NULL, NULL),
(15, 'tuanminh.pdf', 'cv/24cc4154-fe33-48cf-ad91-b188dbec5a8dtuanminh.pdf', 0, '2021-04-18 06:26:31', NULL, NULL),
(16, 'tuanminh.pdf', 'cv/59cafcff-8c1a-4524-8f82-ea82d2162ae6tuanminh.pdf', 1, '2021-04-18 06:27:39', NULL, NULL),
(17, 'chithien.pdf', 'cv/f6393737-b53d-4b13-8c23-4b597b290909chithien.pdf', 1, '2021-04-18 06:30:16', NULL, NULL),
(18, 'kimngan.pdf', 'cv/208226d2-0ccb-4211-b718-a6a6c57042cakimngan.pdf', 1, '2021-04-18 06:34:18', NULL, NULL),
(19, 'nguyemanh.pdf', 'cv/eed16dea-5e96-49a0-bd17-80c2599259f4nguyemanh.pdf', 1, '2021-04-18 06:37:35', NULL, NULL),
(20, 'tranlam.pdf', 'cv/315d1540-6ff1-4adb-bfcd-5cfdaff9d554tranlam.pdf', 1, '2021-04-18 06:41:49', NULL, NULL),
(21, 'quangtruc.pdf', 'cv/a984fe76-769f-4ecb-bff8-b3a76b839fefquangtruc.pdf', 1, '2021-04-18 06:47:25', NULL, NULL),
(22, 'minhhoai.pdf', 'cv/84ba79b2-fb1d-4a04-a625-c946dd604e76minhhoai.pdf', 1, '2021-04-18 06:52:12', NULL, NULL),
(23, 'ngochung.pdf', 'cv/78178a36-82f4-458a-8e71-bc049bcbfbdbngochung.pdf', 0, '2021-04-18 06:59:54', NULL, NULL),
(24, 'ngochung.pdf', 'cv/e3883ad3-dc21-4efe-a966-c91213eae723ngochung.pdf', 1, '2021-04-18 06:59:57', NULL, NULL),
(25, 'thedan.pdf', 'cv/92b88b23-82ad-4528-852e-088e7377db28thedan.pdf', 1, '2021-04-18 07:04:10', NULL, NULL),
(26, 'nguyentoan.pdf', 'cv/4641078c-e6f7-471b-b807-d08ccb665150nguyentoan.pdf', 1, '2021-04-18 07:06:46', NULL, NULL),
(27, 'thanhdo.pdf', 'cv/323bc8cb-991c-4548-bbea-66bef0560bf4thanhdo.pdf', 1, '2021-04-18 07:11:37', NULL, NULL),
(28, 'Nguyen-Duc-Huy-TopCV.vn-210119.211437.pdf', 'cv/388c42c6-1208-4a86-99e2-fa2e61323aeeNguyen-Duc-Huy-TopCV.vn-210119.211437.pdf', 1, '2021-04-19 21:38:18', NULL, NULL),
(29, 'ngoclinh.pdf', 'cv/9321673d-c6da-4951-9835-75901e75424cngoclinh.pdf', 1, '2021-04-20 09:34:46', NULL, NULL),
(30, 'Nguyen-Duc-Huy-TopCV.vn-210119.211437.pdf', 'cv/28dbc557-839f-4bc4-9683-0531ed061550Nguyen-Duc-Huy-TopCV.vn-210119.211437.pdf', 1, '2021-04-21 01:06:07', NULL, NULL),
(31, 'Nguyen-Duc-Huy-TopCV.vn-190319.150807.pdf', 'cv/7924056e-982a-4985-9ea4-5b562384f9b9Nguyen-Duc-Huy-TopCV.vn-190319.150807.pdf', 1, '2021-04-21 02:32:45', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `databasechangelog`
--

DROP TABLE IF EXISTS `databasechangelog`;
CREATE TABLE IF NOT EXISTS `databasechangelog` (
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

-- --------------------------------------------------------

--
-- Table structure for table `databasechangeloglock`
--

DROP TABLE IF EXISTS `databasechangeloglock`;
CREATE TABLE IF NOT EXISTS `databasechangeloglock` (
  `ID` int(11) NOT NULL,
  `LOCKED` bit(1) NOT NULL,
  `LOCKGRANTED` datetime DEFAULT NULL,
  `LOCKEDBY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
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
  `view` bigint(20) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  KEY `test_id` (`test_id`),
  KEY `location_id` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `content`, `deadline`, `salary`, `job_type`, `recruite_number`, `experience`, `position`, `skill`, `location_id`, `company_id`, `test_id`, `created_at`, `updated_at`, `deleted_at`, `status`, `view`, `title`) VALUES
(7, '<p>JOB DESCRIPTION</p><p>Sales of elevator products and maintenance services.</p><p><br></p><p>- Finding customers, consulting, introducing products, negotiating and signing contracts.</p><p>- Responsible for business for the company.</p><p>- Manage customer lists and detailed business plans.</p><p>- Collect feedback and take care of customers.</p><p><br></p><p>REQUEST CANDIDATES</p><p>- University graduate or higher block engineering or economics.</p><p>- Have skills and experience in the field of sales consulting.</p><p>- Ability to negotiate and convince customers.</p><p>- Passionate business, conscientious, honest, not afraid of difficulties.</p><p>- Scientific working style (planning), respect for working discipline.</p><p>- Priority to know how to use basic AutoCAD.</p><p>- Priority is given to young graduates who are eager to learn and improve their work experience</p><p><br></p><p>BENEFITS TO ENJOY</p><p><br></p><p>- Working time 8h30-12h, 13h30-17h30 afternoon, Saturday afternoon and Sunday afternoon break</p><p>- Attractive salary and bonus (exchange details during the interview)</p><p>- Subjected to professional training without experience.</p><p>- Enjoy the full benefits of labor law (Insurance premiums, public holidays according to the state\'s regulations) νe holiday bonus regime according to the company\'s regulations.</p>', '2021-04-23 00:00:00', 3, 1, 5, 2, 'Employee', 'Business, Sales, Marketing', '02', 11, NULL, '2021-04-01 19:21:57', '2021-04-19 06:36:06', NULL, 1, 13, 'Elevator business Staff'),
(8, '<p>JOB DESCRIPTION</p><p>- Working time 8h30-12h, 13h30-17h30 afternoon, Saturday afternoon and Sunday afternoon break</p><p>- Monthly maintenance and maintenance of elevators.</p><p>- Directly handle the elevator incident.</p><p>- Support other departments when requested by the direct manager.</p><p><br></p><p>REQUEST CANDIDATES</p><p>- No experience required. No training will yet</p><p>- Graduated from College, Intermediate career in mechanics &amp; electricity</p><p>- Requirements: Male</p><p><br></p><p>BENEFITS TO ENJOY</p><p>- Basic salary: 7-8 million depending on ability. Overtime + on duty the extra salary scale</p><p>- Professionally trained without experience.</p><p>- Enjoy the full benefits under the labor law (Insurance premiums, public holidays according to state regulations) and holiday bonuses according to the company\'s regulations.</p>', '2021-04-29 00:00:00', 2, 1, 1, 3, 'Employee', 'Elevator Maintenance Skill', '01', 11, NULL, '2021-04-01 19:54:37', '2021-04-18 20:30:11', NULL, 1, 11, 'Elevator Maintenance Staff'),
(9, '<p>JOB DESCRIPTION</p><p>- System programming applications on Java Core, Java Spring Boot and Middleware systems on java platform</p><p>- Building professional modules on the core system of securities and finance</p><p>- Development of financial products, securities, banking, fintech</p><p><br></p><p>REQUEST CANDIDATES</p><p>- Graduated from Information Technology engineer, computer science at universities, colleges or programmer training centers</p><p>- Have experience in Java, SQL programming for at least 06 months</p><p>- Priority in algorithmic thinking quality and passion for solving algorithm problems</p><p>- Have had at least 1 product running on a Production environment</p><p><br></p><p>BENEFITS TO ENJOY</p><p>Remuneration</p><p><br></p><p>- Hard salary + 13th month salary + bonus on holidays, New Year + salary for business performance;</p><p>- Enjoy social insurance, health insurance according to the regime issued by the State.</p><p>- Reward the project, review the work results every 6 months.</p><p>- Working week 5 days, off Saturday, Sunday and public holidays. Overtime work T7, CN are charged for overtime = 150% of normal days.</p><p><br></p><p>Cultural</p><p><br></p><p>- Open working environment, ready to share and help each other for mutual development</p><p>- Encourage members in the company to create ideas to help the project or company develop</p><p>- Respect for the freedom of individuals</p><p><br></p><p>Development opportunities</p><p><br></p><p>- The company specializes in developing financial and securities software solutions, aiming for long-term, stable, serious, intensive work.</p><p>- Total solution from Front Office - Middleware - Back Office with many specialized technologies J2EE, Sping Framework, jBase, Nodejs, Apache Kafka, Apache Spark, Hadoop, ElasticSearch, Oracle Database, SQL Server, Memory Database, Caching ... deployed in many leading financial and securities institutions in the world</p><p>- After a period of working at the company, you will grasp the total technology solution, and be able to develop according to your own orientation.</p><p>- A dynamic, professional environment, with many opportunities to develop into a key person in the company with attractive incentives.</p><p>- Participating in software projects, advanced application development models with leading Japanese partners: applications in finance, fintech, e-commerce</p><p>- Accessed and trained according to Japanese professional software project management processes such as ISO 9001: 2013, ISMS ISO 27001: 2013</p>', '2021-04-30 00:00:00', 4, 1, 2, 4, 'Official Employee', 'Java, Back end', '04', 12, 9, '2021-04-01 20:00:35', '2021-04-18 20:31:48', NULL, 1, 102, 'JAVA BACK-END DEVELOPERS'),
(10, '<p>JOB DESCRIPTION</p><p>BA / QC / Tester</p><p><br></p><p>- Coordinate with software development teams to understand the project and test objectives and requirements.</p><p>- Design and Build test cases</p><p>- Perform bug checks, log bugs, and track bug fix progress</p><p>- Quality control, make sure the system / product is built as designed and meets the professional requirements.</p><p>- Work closely with developers and designers in release plans.</p><p>- Training and user support.</p><p><br></p><p>REQUEST CANDIDATES</p><p>- Graduated from university specialized in IT or internship of IT schools or finance / banking</p><p>- Good mindset, capable of grasping business requirements</p><p>- Priority in implementing securities software projects, experience in securities is an advantage</p><p><br></p><p>BENEFITS TO ENJOY</p><p>Salary &amp; employment contract:</p><p><br></p><p>- Negotiated salary: 10,000,000-15,000,000 VND</p><p>- There is a special bonus mode for the most excellent employees in the year and quarter.</p><p>- Hot bonus for ideas with a revolutionary nature, bringing efficiency to production</p><p><br></p><p>Remuneration</p><p><br></p><p>- Hard salary + 13th month salary + bonus on holidays, New Year + salary for business performance;</p><p>- Enjoy social insurance, health insurance according to the regime issued by the State.</p><p>- Reward the project, review the work results every 6 months.</p><p>- Working week 5 days, off Saturday, Sunday and public holidays. Overtime work T7, CN are charged for overtime = 150% of normal days.</p><p><br></p><p>Development opportunities</p><p><br></p><p>- The company specializes in developing financial and securities software solutions, aiming for long-term, stable, serious, intensive work.</p><p>- Total solution from Front Office - Middleware - Back Office with many specialized technologies J2EE, Sping Framework, jBase, Nodejs, Apache Kafka, Apache Spark, Hadoop, ElasticSearch, Oracle Database, SQL Server, Memory Database, Caching ... deployed in many leading financial and securities institutions in the world</p><p>- After a period of working at the company, you will grasp the total technology solution, and be able to develop according to your own orientation.</p><p>- A dynamic, professional environment, with many opportunities to develop into a key person in the company with attractive incentives.</p><p>- Participating in software projects, advanced application development models with leading Japanese partners: applications in finance, fintech, e-commerce</p><p>- Accessed and trained according to Japanese professional software project management processes such as ISO 9001: 2013, ISMS ISO 27001: 2013</p><p><br></p><p>Cultural</p><p><br></p><p>- Open working environment, ready to share and help each other for mutual development</p><p>- Encourage members in the company to create ideas to help the project or company develop</p><p>- Respect for the freedom of individuals</p>', '2021-04-30 00:00:00', 2, 1, 1, 3, 'Official Employee', 'test, test case', '01', 12, 10, '2021-04-01 20:07:19', '2021-04-18 20:34:03', NULL, 1, 3, 'Tester'),
(11, '<p>JOB DESCRIPTION</p><p>- Web programming with Vuejs, Reactjs, financial products, securities, banking, e-commerce by design</p><p>- Develop in-depth on Web technology and Front in general</p><p>- Support the operator team to deploy and operate the system</p><p><br></p><p>REQUEST CANDIDATES</p><p>- Graduated from Information Technology engineer, computer science at universities, colleges or programmer training centers</p><p>- Vuejs - Required conditions: Experience web programming using Vuejs at least 06 months and Front-End programming at least 01 year</p><p>- Reactjs - Advantage: Have web programming experience using Reactjs for at least 01 year</p><p>- There are real products running on Production environment</p><p>- Priority to candidates with experience working with some new technologies / protocols: GRPC, MQTT, protobuf</p><p>- Candidates with experience in making large and multi-user applications are preferred</p><p><br></p><p>BENEFITS TO ENJOY</p><p>Remuneration</p><p><br></p><p>- Hard salary + 13th month salary + bonus on holidays, New Year + salary for business performance;</p><p>- Enjoy social insurance, health insurance according to the regime issued by the State.</p><p>- Reward the project, review the work results every 6 months.</p><p>- Working week 5 days, off Saturday, Sunday and public holidays. Overtime work T7, CN are charged for overtime = 150% of normal days.</p><p><br></p><p>Cultural</p><p><br></p><p>- Open working environment, ready to share and help each other for mutual development</p><p>- Encourage members in the company to create ideas to help the project or company develop</p><p>- Respect for the freedom of individuals</p><p><br></p><p>Development opportunities</p><p><br></p><p>- The company specializes in developing financial and securities software solutions, aiming for long-term, stable, serious, intensive work.</p><p>- Total solution from Front Office - Middleware - Back Office with many specialized technologies J2EE, Sping Framework, jBase, Nodejs, Apache Kafka, Apache Spark, Hadoop, ElasticSearch, Oracle Database, SQL Server, Memory Database, Caching ... deployed in many leading financial and securities institutions in the world</p><p>- After a period of working at the company, you will grasp the total technology solution, and be able to develop according to your own orientation.</p><p>- A dynamic, professional environment, with many opportunities to develop into a key person in the company with attractive incentives.</p><p>- Participating in software projects, advanced application development models with leading Japanese partners: applications in finance, fintech, e-commerce</p><p>- Accessed and trained according to Japanese professional software project management processes such as ISO 9001: 2013, ISMS ISO 27001: 2013</p>', '2021-04-20 00:00:00', 1, 2, 1, 2, 'Intership', 'html, css, js', '01', 12, 9, '2021-04-01 20:09:42', '2021-04-18 20:34:46', NULL, 1, 1, 'Front End Developer'),
(13, '<p>ssss1</p>', NULL, 1, 1, 1, 1, 'Giám đốc', 'Quản lý', '01', 13, NULL, '2021-04-03 18:53:06', '2021-04-03 19:52:26', '2021-04-03 19:55:33', 1, 1, 'job xxx'),
(14, '<p>s</p>', NULL, 1, 1, 1, 1, 'hk', 'Quản lý', '01', 13, NULL, '2021-04-03 19:56:21', '2021-04-17 00:14:21', '2021-04-19 09:51:06', 1, 3, 'job xxx'),
(15, '<p>1111</p>', '2021-04-16 00:00:00', 1, 1, 1, 4, 'Employee', 'Business, Sales, Marketing', '01', 11, NULL, '2021-04-05 08:55:06', '2021-04-18 20:30:45', NULL, 1, 5, 'Elevator business Staff'),
(16, '<p>Recruiting 10 staff members for Dream Bean Cafe.</p><p><br></p><p>Basic work: ensuring clean and tidy furniture when guests arrive, presenting menus and serving food and drinks.</p><p><br></p><p>Criteria to request: agile, polite and friendly.&lt;/p&gt;&lt;p&gt;&lt;br&gt;&lt;/p&gt;&lt;p&gt;Working time: 6:30 - 20:00. Divided into 2 shifts. Each shift 7 hours / day.</p><p><br></p><p>If you love communicating with customers, with a friendly, fun and professional working environment. Please contact Ms. Tam at 0908138545</p>', '2021-06-06 00:00:00', 2, 1, 10, 1, 'Official Employee', NULL, '79', 14, 18, '2021-04-18 20:42:53', '2021-04-18 20:49:07', NULL, 1, 2, 'CAFE SERVING EMPLOYEE'),
(17, '<p>Descrisption:</p><p>- Perform the work assigned by the chef.</p><p>- Responsible for preliminary processing and handling of foods of the dishes according to the requirements of the chef and customers.</p><p>- Arrange equipment in the kitchen.</p><p>- Cleaning the kitchen area.</p><p><br></p><p>Request&lt;/strong&gt;</p><p>- Have kitchen experience or no training will be.</p><p>- Inquisitive, hard-working, agile, resourceful, sociable</p><p>- Have a long-term orientation to stick.</p><p><br></p><p>Right:</p><p>- Basic salary + allowance (depending on the work shift, discussed directly at the interview)</p><p>- Hours of operation will be agreed</p><p>- Take the shift 1 day / week according to the management\'s arrangement</p><p>- Other benefits according to the company\'s regulations.</p><p>- 1 year salary increase 2 times.</p><p>- Annual company travel.</p><p><br></p><p>Profile:Priority is given to submitting online documents through the system of Job Market or send CV describing learning and working process on contact email.</p>', '2021-06-06 00:00:00', 3, 1, 1, 3, 'Official Employee', 'Cooking Knowledge', '79', 14, 19, '2021-04-18 20:48:54', NULL, NULL, 1, 2, 'COMMIS'),
(18, '<p>JOB DESCRIPTION</p><p>The Quality Control Manager will be responsible for overseeing the quality assurance operation and implementing the maintenance / development of the quality control system for the company\\\'s products and development. Main roles and responsibilities:</p><p><br></p><p>-Develop an annual quality management strategy and plan. Evaluate the problem and make an improvement plan.</p><p>-Develop and propose management tools, help to implement or evaluate quality effectively.</p><p>-Organize periodic and unscheduled reviews of the implementation of the Brand Standard in terms of customer service, property preservation status of facilities.</p><p>-Analysis and consulting support solutions after the evaluation; detect possible system problems, threats or problems for timely and thorough treatment.</p><p>-Monitoring quality improvement evaluation plan.</p><p>-Collecting, analyzing, assessing customer satisfaction and proposing solutions to improve service quality</p><p>-Make reporting and maintain database of department-related responses.</p><p>-Ensure that Quality Control Standards are clearly communicated to the included departments and new or updated standards.</p><p>-Training and training grassroots quality managers.</p><p><br></p><p>Responsibility of Department Supervision:</p><p>- Human resource organization and recruiting, training quality management staff.</p><p>- Monitoring the workflow and department schedule. Conduct timely and constructive performance reviews.</p><p>-Regularly organize training and guidance on professional knowledge / skills for lower-level staff.</p><p><br></p><p>JOB REQUIREMENTS</p><p>-Oral and written communication skills.</p><p>-Personal communication skills and good customer service.</p><p>-Good problem analysis and problem solving skills.</p><p>-Strong leadership and supervision skills.</p><p>-Planning and implementation skills</p>', '2021-06-07 00:00:00', 4, 1, 1, 4, 'Official Employee', 'Human Resource, Quality Control', '38', 15, 17, '2021-04-18 20:56:51', '2021-04-20 08:24:24', NULL, 1, 3, 'QUALITY CONTROL MANAGER'),
(19, '<p>Job description</p><p>1. Responsibility of work</p><p>-Responsible for designing banner, standee, flyer, publications, landing page ...</p><p>-Image design for Marketing campaigns on Ads-Facebook, Google ...</p><p><br></p><p>2. Content of work</p><p>-Think creatively and develop new concept designs, images and layouts.</p><p>-Stay up to date with the latest changes and trends in the field of fashion related design.</p><p>-Retouch photos taken from the studio.</p><p>-Collaborate with other members in the team (Photo, Content) to produce images and post them on social networks.</p><p>-Perform other professional work as assigned by the Head of Department.</p><p>-New image updates are received weekly.</p><p><br></p><p>3. Job KPIs</p><p>-Discussed in the interview.</p><p><br></p><p>Request candidates</p><p>1. Attitude / Personality</p><p>-Ability to work for a long time because the work is regular and regular.</p><p>-Love self-learning, agile and careful.</p><p><br></p><p>2. Skills</p><p>-Skills to work under high pressure, manage time, manage work.</p><p>-Good in teamwork.</p><p><br></p><p>3. Professional knowledge</p><p>-Having at least 6 months experience in the same position.</p><p>-Proficient in Photoshop, Illustrator, InDesign and other skills.</p><p><br></p><p>Additional information</p><p>-Candidates must have personal laptops.</p><p>-Working time: Monday - Saturday</p>', '2021-06-07 00:00:00', 4, 1, 4, 4, 'Official Employee', 'Photoshop, Video Editing, Designing', '38', 15, 16, '2021-04-18 21:05:37', '2021-04-20 08:25:38', NULL, 1, 1, 'GRAPHIC DESIGNER'),
(20, '<p>Recruitment standards, expected salary:</p><p><br></p><p>Aircraft engineers:</p><p>-Be a Vietnamese citizen; from full 18 years old to 35 years old (born from 01/01/1984 onwards); have a suitable appearance; do not have criminal record information as confirmed by the criminal record (form 2), have not suffered from social evils, have well observed the legal provisions as confirmed in the personal record; have a clear personal and family background; having health type 1 or 2 according to the health classification standards of the Ministry of Health, not having birth defects, not suffering from cardiovascular diseases.</p><p>-Qualification: graduated from regular university or higher technical majors. Having a certificate of completion of an aircraft maintenance basic training course at a training facility licensed, recognized or equivalent by the Civil Aviation Authority of Vietnam.</p><p>-English proficiency: Minimum 450 point TOEIC English test or minimum 470 point TOEFL or a 4.5 point minimum IELTS score.</p><p><br></p><p>Estimated salary after the probationary period:</p><p>+No certificate of authorization: From 12.3 million - 16.3 million, average income per month maximum 23.5 million.</p><p>+Authorized certificate: From 16.4 million VND - 37 million VND, average income per month is up to 54 million VND.</p><p><br></p><p>Application file:</p><p>-Registration form for labor recruitment (using the form in Appendix 01);</p><p>-Curriculum vitae (with photo 4x6 attached) certified by a competent authority;</p><p>-Authenticated copy of identity card / citizen identification card;&lt;/p&gt;&lt;p&gt;-Authenticated copy of birth certificate;</p><p>-Authenticated copy of permanent residence;</p><p>-Authenticated copy: diploma or certificate of graduation, transcript of academic results; driving license; TOEIC / TOEFL / IELTS English test results (with original for comparison) and other relevant qualifications and certificates.</p><p>-Health certificate at the medical facility of the district or equivalent or higher level (within 06 months from the date of submission);</p><p>-02 photos size 4x6 (color photo, new, with full name, date, month and year of birth after the photo).</p>', '2021-06-08 00:00:00', 4, 1, 4, 4, 'Official Employee', 'Aviation Knowledge, Communication Skills', '92', 16, 14, '2021-04-18 21:25:49', '2021-04-20 08:40:33', NULL, 1, 1, 'AVIATION ENGINEER'),
(21, '<p>Job description</p><p>The representative of the arline at the Binh Dinh branch is an employee who takes care of passengers and solves problems arising from irregularities during the procedure in accordance with the airline\\\'s regulations. Monitoring the aircraft\\\'s operations, ensuring proper service &amp; progress.</p><p><br></p><p>Salary and benefits</p><p>Wage agreements in the interview</p><p><br></p><p>Working time</p><p>Shift work (morning / evening)</p><p><br></p><p>Job requirements</p><p>-Graduated from university (regardless of major) and priority is given to applicants with aviation experience</p><p>-Diligent, responsible, capable of communicating with customers</p><p>-Office computing skills (MS Micrsoft Word, Excel, POWER POINT)</p>', '2021-06-08 00:00:00', 4, 1, 1, 1, 'Official Employee', 'Aviation Knowledge, Communication Skills, English communication, Customer care', '52', 16, 15, '2021-04-18 21:28:33', '2021-04-20 08:34:11', NULL, 1, 4, 'AIRLINE REPRESENTATIVE'),
(22, '<p>JOB DESCRIPTION:</p><p>-Coordinate and support the theater management board in supervising the daily operations of the theater.</p><p>-Manage and train staff to ensure service standards of the theater complex.</p><p>-Support customers, resolve customer complaints and questions about services / products at the rap cluster.</p><p>-Manage and operate the projector system in the theater.</p><p>-Perform other tasks assigned by theater management.</p><p><br></p><p>JOB REQUIREMENTS:</p><p>-Graduated from College / University.</p><p>-Experience in monitoring service activities at a restaurant / hotel.</p><p>-Confident and communicative well, capable of teamwork, collaboration, and customer service.</p><p>-Proactive, enthusiastic and responsible at work.</p><p>-Able to work in shifts and on holidays and Tet.&lt;/p&gt;</p><p>-Basic English communication skills.</p>', '2021-06-09 00:00:00', 4, 1, 1, 3, 'Official Employee', 'Quality Control, Documents Control', '48', 17, 67, '2021-04-18 21:33:46', '2021-04-20 08:38:22', NULL, 1, 3, 'SUPERVISOR OF CINEMA OPERATIONS'),
(23, '<p>Job description:</p><p>Teaching undergraduate curriculum in Foreign Languages;</p><p>Scientific research related to the area of ​​expertise;</p><p>Participating in professional development activities, developing training programs, fostering working capacity;</p><p>Building relationships with schools, agencies, departments and businesses in the area to provide the best training quality for students.</p><p>Developing extra-curricular work for students.</p><p><br></p><p>Request:</p><p>-Professional qualifications and certificates:</p><p>-Master\\\'s degree or higher, majoring in English Language, English Pedagogy;</p><p>-Pedagogical certificate.</p><p><br></p><p>Other requirements:</p><p>-Education: Master or higher specialized in English language, English pedagogy.</p><p>-Have a Certificate in Pedagogy.</p><p>-Office informatics certificate.</p><p>-Enjoy teaching and doing scientific research in a university environment.</p><p>-Have a long-term aspirations to work at the School.</p>', '2021-06-10 00:00:00', 5, 1, 1, 4, 'Official Employee', 'English Skills', '74', 18, 12, '2021-04-18 21:37:39', NULL, NULL, 1, 4, 'FACULTY OF FOREIGN LANGUAGE'),
(24, '<p>Job description:</p><p>-Website management and student reading room</p><p>-Manage newspapers, magazines, dissertations and reference services</p><p>-Information management, documents, property, clerical, stationery</p><p>-Manage engine room, audio-visual documents</p><p>-Inventory management</p><p>-Traditional document management</p><p>-Electronic document management</p><p><br></p><p>Request:</p><p>-Bachelor degree or higher, majoring in Library, Information Studies.</p><p>-Certificate in informatics, foreign language level B or higher.&lt;/p&gt;</p><p>-Communication skills, teamwork, handling and analysis of situations.</p><p>-Morality: Honest, careful, hard-working, progressive and eager to learn.</p>', '2021-06-10 00:00:00', 4, 1, 1, 4, 'Official Employee', 'Library Skills, Informatics', '74', 18, 12, '2021-04-18 21:40:02', '2021-04-20 08:23:29', NULL, 1, 6, 'LIBRARY STAFF'),
(25, '<p>We are looking for experienced, and locally based barista’s to join our coffee shop. Responsibilities include making and maintaining ratios/recipes of coffee extraction and generally ensuring the shop operates to the highest standards. Ability to work weekends is a must.</p><p>We offer a competitive salary based on experience, all the training you can handle with our coffee partners Caravan and plenty of wine tastings with our suppliers.</p><p>We would love to meet you! Please get in touch so we can arrange an interview.</p>', '2021-06-06 00:00:00', 3, 1, 1, 3, 'Official Employee', 'Making Drinks', '79', 14, 18, '2021-04-18 22:12:22', '2021-04-20 04:17:15', NULL, 1, NULL, 'BARISTA'),
(26, '<p>We are an independently owned dynamic company looking for a café manager. We are ambitious and are working to become a leader in the speciality coffee sector. We were founded to improve and develop the speciality coffee offering in areas where we see clear room for improvement.</p><p>This role will be for our second location. We have chosen the location because there is a clear need for a speciality coffee shop in the area and because of the historical and cultural significance of our neighbourhood. The café is housed within a beautiful newly renovated building.</p><p>We are looking for a candidate who is interested in furthering their career in the coffee/hospitality sector and is interested in building a long-term career with us. There will be plenty of opportunities to convey ideas, take initiative, and work independently. You will work very closely with the founder to implement and develop his vision. We truly believe that our people are our most important asset and as a manager, you will be a critical factor in this formula.</p>', '2021-06-06 00:00:00', 5, 1, 1, 5, 'Official Employee', 'Managing Skill', '79', 14, 18, '2021-04-18 22:14:32', '2021-04-20 04:17:16', NULL, 1, 3, 'CAFE MANAGER'),
(27, '<p>The opportunity:</p><p>Dream Beam Cafe has opened applications for the role of Assistant Manager. The ideal candidate will be motivated and passionate about continuing Dream Beam Cafe’s successful run down. We are looking for a multitalented individual who can prove themselves in both soft and hard skills. You will be driven to align with our mission and have no problem delivering on your responsibilities and beyond. We believe this to be a golden opportunity to join a team that loves what they do, whilst working with the best products we can possibly find. This job is demanding and extremely rewarding at the same time.</p><p>Responsibilities:</p><p>-Overall management of the cafe on a day to day basis</p><p>-Ensuring that the internal culture is educational, engaging and staff are proud of the hospitality they are providing.</p><p>-Supervision of the customer experience, making sure that the service is up to standard and staff are exceeding expectations</p><p>-Quality control of food and drinks, ensuring that each plate and cup represents Dream Beam Cafe’s identity</p><p>-Maintaining the cleanliness of the cafe, delegating tasks where necessary</p><p>-Assisting with all ordering, stock control and credit notes with the businesses finances in mind</p><p>-Helping manage staff rotas and holiday calendars</p><p>-Cashing up, banking and consolidating revenue reports</p><p>-Recruitment, induction training, staff reviews and fostering retention programs</p><p>-Execute weekly and monthly management meetings</p><p>-Communicating clearly with management, setting goals, create scorecards and understanding the actions that make them achievable</p><p>-Ensuring health and safety records are up to date</p><p><br></p><p>Experience: - 2 years in a similar role - Speciality coffee trained preferred</p>', '2021-06-06 00:00:00', 4, 1, 1, 4, 'Official Employee', NULL, '79', 14, 18, '2021-04-18 22:17:12', '2021-04-20 04:17:23', NULL, 1, 1, 'ASSITANT MANAGER'),
(28, '<p>Web designers play a key role in the development of a website, creating the pages, layout, and graphics for web pages. Web designers also design and develop the navigation design and structure of a site. A web designer must also make decisions regarding what content is included on a web page, where graphics, content, navigation, etc. are placed, and ensure continuity from one web page to the next. The requirements of a web designer job involve skill and training in computer graphics, graphic design, and the latest computer and Internet technology.</p><p><br></p><p>The growing need for talented web designers in today’s multimedia industry has led to substantial employment growth during recent years. Well-trained web designers are and will continue to be in high demand.</p>', '2021-06-07 00:00:00', 4, 1, 1, 4, 'Official Employee', NULL, '38', 15, 61, '2021-04-18 22:19:43', '2021-04-20 08:25:30', NULL, 1, 2, 'WEB DESIGNER'),
(29, '<p>Flash is a multimedia graphics program designed specifically for use on the web. Flash is a tool for creating interactive and animated websites using vector and raster graphics which enable the graphics to be scaled to any size without losing clarity or quality. The flash designer job description can vary from company to company.&nbsp;Training courses in Flash teach you how to create and customize dozens of different effects including text, navigation animation, video, and audio.</p><p><br></p><p>Today, Flash is becoming even more popular and widely used than ever before as it delivers a broader scope of tools for a web designer. Becoming a certified Flash designer is the best way to pursue a career in this field and ensure potential clients that you have the skills necessary to perform the task.</p>', NULL, 4, 1, 1, 5, 'Official Employee', NULL, '38', 15, 62, '2021-04-18 22:20:53', '2021-04-20 07:38:28', NULL, 1, 2, 'FLASH DESIGNER'),
(30, '<p>Creative/art directors are in charge of a creative team that produces artwork to be displayed on television, billboards, the Internet, or in magazines. Some would consider them to be advertising graphic design jobs because they work hand in hand with marketing.&nbsp;A creative team usually consists of graphic designers, artists, photographers, copywriters, and production staff. Art directors ensure that each member of the creative team completes their work on time and to the client’s satisfaction. Although most of the art director’s time is spent performing supervisory and administrative work, advanced training in graphic design is still required as art directors often do some of the artwork and design themselves.</p><p><br></p><p>Employment opportunities for art directors are often available through advertising agencies, magazines and newspapers, public relations firms, and manufacturers. Many art directors are also self-employed or freelance, which means that there are both in house graphic design jobs available or they can create their own company.</p>', '2021-06-07 00:00:00', 5, 1, 1, 6, 'Official Employee', NULL, '38', 15, 62, '2021-04-18 22:22:05', '2021-04-20 08:26:16', NULL, 1, NULL, 'CREATIVE/ ART DIRECTOR'),
(31, '<p>Airline Travel are looking to recruit Aircraft Sheet Metal Workers for a 6 week contract position with immediate starts available. This is to carry out base maintenance C-checks on B737NG.</p><p>Shifts are currently 5-on 3-off working 12 hour shifts.&nbsp;</p><p><br></p><p>Experience carrying out heavy base maintenance experience on B737NG or similar would be preferred for role.</p>', '2021-06-08 00:00:00', 4, 1, 1, 5, 'Official Employee', NULL, '01', 16, 15, '2021-04-18 22:24:14', '2021-04-20 08:40:43', NULL, 1, NULL, 'AIRCRAFT SHEET METAL WORKER'),
(32, '<p>On behalf of our client who deliver critical and vital services to the civil and defence sectors, we are looking to recruit a Mechanical Junior Supervisor (fast jets).</p><p><br></p><p><strong>Additional Information:&nbsp;</strong>Applicants should have fast jet maintenance experience/NVQ level 3 or equivalent in aeronautical engineering</p><p><br></p><p><strong>Purpose</strong></p><p>-To carry out Mechanical maintenance activities as directed on Hawk aircraft.</p>', '2021-06-08 00:00:00', 5, 1, 1, 5, 'Official Employee', NULL, '52', 16, 15, '2021-04-18 22:26:10', '2021-04-20 08:34:28', NULL, 1, NULL, 'MECHANICAL JUNIOR SUPERVISOR'),
(33, '<p><span style=\"color: rgb(51, 51, 51);\">Shorterm are recruiting for a diverse cleaner on a full time contract basis.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Must have Previous Cleaning experience, this is a very labour intensive job including crouching and bending for long periods at a time - some of the job will also be at heights</span></p>', '2021-06-08 00:00:00', 3, 1, 1, 3, 'Official Employee', NULL, '46', 16, 15, '2021-04-18 22:27:19', '2021-04-20 08:40:54', NULL, 1, 1, 'CLEANER'),
(34, '<p><strong>ACT 1 – THE ROLE</strong></p><p>Reporting into the General Manager, the role of a Cinema Manager is to manage the day-to-day running of the site, playing a key part in the successful delivery of the cinema’s commercial objectives, no two days will ever be the same!</p><p><br></p><p>You will ensure compliance with all legal requirements and company policies, delivering consistently high standards across all areas of the cinema. You’ll manage, motivate and develop a high performing team, ensuring they provide an excellent customer experience whilst maximising sales.</p><p><strong>ACT 2 – WHAT YOU’LL NEED</strong></p><p>-Previous management experience in a customer-facing, fast-paced business within the retail, hospitality or leisure sector, don’t worry if you’ve never worked in a cinema before, full training will be given</p><p>-Proven experience of managing teams to successfully deliver against business objective and KPI’s</p><p>-A commercial mind-set with experience of using reports to make business decisions</p><p>-Excellent planning and organisational skills with the ability to multi-task</p><p>-You’ll need to be flexible, confident and resilient - drive, enthusiasm and a good sense of humour are a must!</p><p>-Able to work early (7am start) and late shifts (3am finish) on a rota basis across all 7 days of the week</p><p><br></p>', '2021-06-09 00:00:00', 6, 1, 1, 7, 'Official Employee', NULL, '48', 17, 67, '2021-04-18 22:30:06', '2021-04-20 08:21:03', NULL, 1, 5, 'CINEMA MANAGER'),
(35, '<p><strong>Summary</strong></p><p>Our Finance &amp; Admin Assistant is a key support to our senior management team. They’re responsible for maintaining the cinema’s finances in collaboration with the Cinema Directors and external accountants. They also take an active role in related admin such as the cinema software and HR processes, and provide analysis and reporting on all business areas.</p><p>We’re looking for someone who is highly computer literate as we aim to automate and streamline as many processes as possible. We anticipate this role will have potential for some flexible and remote working.</p><p><br></p><p><strong>Responsibilities</strong></p><p>-Check, submit and accurately reconcile invoices, and cross reference with statements</p><p>-Maintain bookkeeping in Pleo, Dext and Xero</p><p>-Liaise with team members, customers and suppliers to resolve queries on a timely basis</p><p>-Liaise with senior management and external accountant to ensure staff wages and other payments are prepared and submitted in a timely manner</p><p>-Process payment runs for the cinema to ensure staff and suppliers are paid on time</p><p>-Work with the hires and events team to raise sales invoices and send to clients</p><p>-Organise refunds, including hire deposits</p><p>-Receive, reconcile and process all income, and investigate discrepancies</p><p>-Review outstanding debtors, issue reminders, and chase overdue amounts</p><p>-Administer the cinema’s petty cash and other cash out activities</p><p>-Develop a great working relationship with the external accountants, and provide information to them on a timely basis</p><p>-Draw upon experience to help to review, rethink and redesign processes and practices to create better, leaner, simplified and more automated ways of doing things</p><p>-Promote sustainable working practices and reduce the environmental impact of the cinema.</p><p>-Work with the Cinema Directors to ensure appropriate financial tracking and reporting</p><p>-Take an active role in administering the cinema &amp; bar software - updating attributes such as VAT rates, cost of stock and license fees, and providing insights, input and feedback</p><p>-Support the heads of departments (Programme, Hires, F&amp;B, Marketing, HR) with finance related tasks such as reconciliation, reporting and analysis</p><p>-Assist with other reporting such as PPL PRS</p><p>-Work with the Cinema Directors and technical team to automate and streamline processes wherever possible</p><p>-Support the Cinema Directors in developing fundraising strategies and documentation</p><p>-Develop a working understanding of the cinema’s operations, and a willingness to occasionally assist the team on shift.</p><p>-Be willing to undertake any necessary training or development in order to fulfill the role</p><p><br></p><p>This job description is indicative but not exhaustive. As such, in addition to the key responsibilities listed the post holder may be required to perform other duties commensurate with the scope and/or level of the role.</p>', '2021-06-09 00:00:00', 4, 1, 1, 5, 'Official Employee', NULL, '48', 17, 67, '2021-04-18 22:32:04', '2021-04-20 08:38:43', NULL, 1, 1, 'FINANCIAL AND ADMIN ASSISTANT'),
(36, '<p><strong>THE ROLE</strong></p><p>We have a unique and exciting opportunity for a Group Director of Cinema Technology to join our Group Technical Services function.</p><p>This newly created role will build a long term strategy for the development and evolution of Cinema Technology at Vue, ensuring we retain our reputation for delivering a best in class cinematic experience.</p><p>Main Responsibilities include:</p><p>-Oversee the investment into all Cinema Technology across the Group</p><p>-Analyse, evaluate, demonstrate and pilot new Cinema Technology solutions which may be of value</p><p>-Network with external providers that could support us in continuing to deliver a best-in-class cinematic experience</p><p>-Create minimum standards for sound and screen and ensure all Territories are upholding these standards (e.g. aspect ratios, projector placement/ventilation and sound &amp; light levels)</p><p>-Own the relationship with new and existing third party \'in-screen\' technology providers</p><p>-Act as the internal technical expert for screen and sound</p><p>-Work closely with the Group Technical Services Operations team to implement plans for \'in-cinema\' technology maintenance and support across the Group</p><p>-Inspire, motivate and lead the Group Cinema Technology Team, ensure they are aware of and working in line with business priorities and the overall Group Technical Services strategy</p><p>-Create synergy and efficiency across the Group by extending existing or rolling out new cinema technology suppliers across territories</p><p>-Create the annual Cinematic Technology budget</p><p><br></p><p><strong>WHAT SKILLS AND EXPERIENCE YOU’LL NEED</strong></p><p><strong>Essential</strong></p><p>-Extensive experience in a IT Systems Development role (ideally within the cinema industry)</p><p>-A proven track record of delivering complex technical projects on-time, within budget and to a high-standard within a leadership role</p><p>-Demonstrable experience building relationships, liaising with and influencing key business stakeholders</p><p>-Experience engaging and collaborating with multiple Directors</p><p>-Has managed a large number of outsourced suppliers</p><p>-Experienced in sourcing new suppliers and negotiating contracts and SLAs</p><p>-Has managed internal teams and direct reports with diverse backgrounds and responsibilities</p><p>-Budget management experience</p><p><strong>Desirable</strong></p><p>-Experience composing and presenting technical proposals to senior management and key stakeholders</p><p>-Knowledge of some of the below technologies:</p><p><br></p><p>+Sony Digital Projectors</p><p>+Barco/Cinionic Projectors</p><p>+Dolby Sound Processors</p><p>+QSC Sound Processors</p><p>+Theatre &amp; Preshow Management Systems (Sony, AAM, Unique)</p><p><br></p>', '2021-06-10 00:00:00', 6, 1, 1, 7, 'Official Employee', NULL, '48', 17, 67, '2021-04-18 22:34:35', '2021-04-20 08:38:53', NULL, 1, 2, 'GROUP DIRECTOR OF CINEMA TECHNOLOGY'),
(37, '<p>We are looking for an ambitious individual to join the team on a full time, permanent basis within the Accounts department.</p><p><br></p><p><strong>Working Hours:&nbsp;</strong>Monday - Friday, 9am - 5pm</p><p><br></p><p><strong>Duties &amp; Responsibilities:</strong></p><p>-Monitoring the bank feeds to customer payments</p><p>-Creating and crediting VAT refunds</p><p>-Creating vouchers and processing refunds whilst ensuring amounts and details are correct</p><p>-Dealing with chargeback cases, tracking payments and ensuring we receive reimbursements where required</p><p>-Checking high value sales orders and documentation to try and prevent fraud</p><p>-Creating and presenting a weekly report to the financial controller based on the above</p><p>-Assisting the Financial Controller in ad hoc audit tasks</p><p>-Dealing with any ad hoc administration work</p><p><br></p><p><strong>Experience &amp; Skills:</strong></p><p>-High level of both English &amp; Maths</p><p>-Use of Outlook</p><p>-Computer literate</p><p>-Excellent communication and interpersonal skills</p><p>-Ability to work independently as well as within a team</p><p>-Self-motivated and driven</p>', '2021-07-08 00:00:00', 3, 1, 3, 3, 'Official Employee', 'English, Mathematics', '38', 15, 66, '2021-04-19 06:46:13', '2021-04-20 08:09:58', NULL, 1, NULL, 'JUNIOR FINANCE ASSISTANT'),
(38, '<p><span style=\"color: rgb(51, 51, 51);\">The Legal Secretary/PA will support within the Employment Law department, specifically supporting lawyers that deal with a range of&nbsp;respondent employment work.&nbsp;</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">The Legal Secretary/PA role will include:</span></p><p>-Diary/schedule management</p><p>-Typing and admin support/document formatting/digital dictation</p><p>-Screening calls</p><p>-Inbox management</p><p>-Liaising with clients</p><p>-Travel and meeting arrangements</p><p>-Processing expenses</p><p>-Legal billing</p><p>-General upkeep of client files and administration</p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Previous Legal PA or Secretarial experience is essential, employment or corporate experience would be an advantage but by no means a pre requisite for the role</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">You should be a confident PA/Secretary with excellent IT skills and able to manage a demanding and busy workload.&nbsp;</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">There is a competitive salary on offer, excellent benefits, a high quality of work and a great team working environment.</span></p>', '2021-06-18 00:00:00', 7, 1, 1, 3, 'Official Employee', 'Law, Communication Skill', '79', 15, 66, '2021-04-19 07:09:40', '2021-04-20 08:26:58', NULL, 1, 1, 'LEGAL SECRETARY, EMPLOYMENT LAW'),
(39, '<p><strong>Responsibilities</strong></p><p>-Supervising the Purchase Ledger System</p><p>-Submission of VAT returns</p><p>-Paying Tax to HMRC on behalf of Partners</p><p>-Supervision and possible training of junior staff</p><p>-Reconciling the Office &amp; Client Bank Accounts on a daily basis</p><p>-Client Interest</p><p>-All aspects of Partners, Consultants &amp; Lawyers expenses</p><p>-Checking and reconciling all the firm’s credit cards</p><p>-Maintaining PKC, KPI &amp; Rekoop</p><p>-Running weekly Time Reports &amp; Chasing Fee Earners on Missing Time</p><p>-Processing Various Payments through the Bacs System</p><p>-Direct Debits</p><p>-Writing Off Bills &amp; Disbursements</p><p>-Posting &amp; Reconciling Petty Cash</p><p>-Posting various Office &amp; Client Payments, Receipts, Transfers &amp; Journals</p><p>-Reviewing Files that have a residual balance on them</p><p>-Creating Lawyers, Secretaries &amp; Admin on the Accounts System</p><p>-Running Month End &amp; Balancing all aspect of the Finance System</p><p>-Processing TT’s &amp; Overnight Payments through Bankline &amp; Bacs IP</p><p>-Liaising with Natwest on all Accounts</p><p>-Housekeeping of the Finance System</p><p>-Responsible for all aspects of Purchase Ledger</p><p>-Posting &amp; Paying Suppliers Invoices</p><p>-Reconciling Office &amp; Client Bank Accounts on a Daily Basis</p><p><br></p><p>Career progression will be available for the right person.</p>', '2021-07-28 00:00:00', 5, 1, 1, 4, 'Official Employee', 'Financial, Mathematics', '38', 15, 66, '2021-04-19 07:20:34', '2021-04-20 08:10:42', NULL, 1, NULL, 'LEGAL CASHIER'),
(40, '<p><strong>Amazing benefits and professional development</strong></p><p>We are looking for an enthusiastic and driven IT Support Engineer to join their ever-growing team. A vibrant personality and a passion for IT is a MUST!</p><p><br></p><p><strong>Key Skills:</strong></p><p>-Windows OS</p><p>-Server up to 2019</p><p>-Active Directory</p><p>-Hardware / Software</p><p>-Office 365</p><p>-VMWare</p><p>-DNS / DHCP</p><p>-Networking</p><p><br></p><p>This job will suit technically strong 1st / 2nd line support engineer who are feeling stagnant and are not getting the most out of their capabilities. If you are looking to utilise your technical skill set to its fullest and improve upon your abilities further, this position will equip you with the skills and experience required to do so.</p><p><br></p><p><strong>1st Line Support / 2nd Line Support / service desk / Windows Server / Office 365 / VMWare / Storage / Anti-Virus / Software / Hardware</strong></p>', '2021-07-28 00:00:00', 5, 1, 1, 4, 'Official Employee', 'Hardware, Software, Networking', '38', 15, 66, '2021-04-19 07:33:53', '2021-04-20 08:27:24', NULL, 1, NULL, ' IT SUPPORT ENGINEER'),
(41, '<p>A fantastic opportunity within field sales to have the autonomy to develop your own territory with an excellent progression and career development opportunities with a clearly defined promotion path. Strong commission/bonus structure in place.</p><p><br></p><p><strong>The Role</strong></p><p>Working within your designated region and reporting into the Regional Sales Manager, this is a field- based role with a focus on attracting new business and managing the existing relationships by account managing, cross selling and merchandising. You will have exclusivity in your own territory calling on independent retailers. Working with a wide range of retail stores you will build strong working relationships, with new and existing customers. Full product training is provided with this role.</p><p><br></p><p><strong>Key Responsibilities</strong></p><p>-Visiting new and potential customers offering and selling products into the retail industry and stores</p><p>-Existing account management/ developing existing customer accounts.</p><p>-Drive availability and development of the brand/prospect for new customers</p><p>-Work closely with the team to help drive the availability and distribution of the product.</p><p>-Work to understand the changing and evolving marketplace within your territory and feedback to ensure the company are ahead of competitors</p><p>-To maintain a healthy sales pipeline to ensure sales targets are achieved,</p><p>-To understand competitor sets and share learning with the field sales executives.</p><p><br></p><p><strong>Essential Criteria</strong></p><p>-Experience of working in a customer facing business sales environment and generating new business.</p><p>-Experience of working in a target driven environment.</p><p>-Positive outlook, with the ability to be tenacious and resilient within a competitive sales market.</p><p>-Confident dealing with objections.</p><p>-Able to act a brand ambassador taking ownership of company and product knowledge and providing excellent levels of sales and service at all times.</p><p>-Ability to travel across your regional daily</p><p><br></p><p><strong>Desirable but not essential</strong></p><p>-Field or retail Sales experience desirable but not essential</p><p>-CRM Experience desirable but not essential</p>', '2021-07-25 00:00:00', 4, 1, 1, 4, 'Official Employee', 'Communication Skills', '38', 15, 66, '2021-04-19 08:02:04', '2021-04-20 08:27:54', NULL, 1, NULL, 'FIELD SALES EXECUTIVE');
INSERT INTO `jobs` (`id`, `content`, `deadline`, `salary`, `job_type`, `recruite_number`, `experience`, `position`, `skill`, `location_id`, `company_id`, `test_id`, `created_at`, `updated_at`, `deleted_at`, `status`, `view`, `title`) VALUES
(42, '<p>Are you passionate about progressing your career?</p><p><br></p><p>Do you want to work for a forward thinking company?</p><p><br></p><p>Are you energetic yet professional?</p><p><br></p><p>If you answered yes to all these questions then this is the role for you!</p><p><br></p><p>Ideally, you will have an insurance, banking or customer service background, however, applicants who consider themselves confident with lots of personality and can fit into an upbeat and sales driven organisation.</p><p><br></p><p>On a daily basis you will be:</p><p><br></p><p>-Negotiating and sourcing insurance from leading insurance providers for client that may have properties that have previously been flooded, high sum insureds, previous subsidence issues or overseas holiday homes.</p><p>-You will be dealing with high net worth individuals</p><p>Whatever your goal, you’ll find a remarkable level of training and support in reaching it.</p><p><br></p><p>What ae we looking for?</p><p>-A talent for sales</p><p>-Solid customer services skills</p><p>-The ability to engage with a wide range of people.</p><p><br></p><p>In return, you can look forward to plenty of opportunities for career progression, plus a generous and highly competitive salary.</p>', '2021-07-15 00:00:00', 7, 1, 1, 5, 'Official Employee', 'Insurance Law', '74', 15, 66, '2021-04-19 08:38:57', '2021-04-20 08:28:14', NULL, 1, 1, 'INSURANCE CONSULTANT'),
(43, '<p><span style=\"color: rgb(51, 51, 51);\">The Role</span></p><p><span style=\"color: rgb(51, 51, 51);\">-Work on the execution and strategy of all Paid channels including Google, Bing, Affiliate, Display and Social</span></p><p><span style=\"color: rgb(51, 51, 51);\">-Optimise and deliver paid marketing activities in SEM and Affiliates for company\'s key brands</span></p><p><span style=\"color: rgb(51, 51, 51);\">-Support paid activities in social / YouTube as required</span></p><p><span style=\"color: rgb(51, 51, 51);\">-Drive the SEO acquisition agenda as required with the e-commerce team</span></p><p><span style=\"color: rgb(51, 51, 51);\">-Develop the weekly trading and KPI reporting suite</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Person</span></p><p><span style=\"color: rgb(51, 51, 51);\">-Strong working knowledge of Google suite including Merchant</span></p><p><span style=\"color: rgb(51, 51, 51);\">-Extensive experience of paid channels across paid search, Google shopping, affiliate and Facebook ads</span></p><p><span style=\"color: rgb(51, 51, 51);\">-Google analytics master</span></p><p><span style=\"color: rgb(51, 51, 51);\">-BIG on digital transformation</span></p><p><span style=\"color: rgb(51, 51, 51);\">-Strategic thinker to help deliver on ambitious growth plans</span></p><p><span style=\"color: rgb(51, 51, 51);\">-Goal focussed and puts the team before themselves</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">This is a fantastic opportunity for the right person, so get in touch and apply now!</span></p>', '2021-07-22 00:00:00', 5, 1, 1, 5, 'Official Employee', 'Digital Marketing', '38', 15, 64, '2021-04-19 09:31:22', '2021-04-20 08:28:31', NULL, 1, NULL, 'DIGITAL MARKETING MANAGER'),
(44, '<p><strong>The successful candidate MUST have:</strong></p><p>-Hands-on-agency experience in a PM role, working with big brands, managing multiple projects with a strong focus on digital content production, social content (animated videos and static)</p><p>-Good understanding of design standards and practices with a keen eye for detail.</p><p>-Managing multiple projects at the same time</p><p>-Highly proactive - you will need to own the projects you\'re managing and need to make sure that both the client and internal teams are all well informed about their responsibilities, deadlines and deliverables.</p><p>-Briefing sessions and communicating feedback to the team</p><p>-Experience managing the full project life cycle (including creative conception)</p><p>-Provide clear communication and support to all areas of production.</p><p>-Attention to detail</p><p>-Responsive and efficient with client requests</p><p>-Experience working across different time zones</p><p>-Experience working on large scale animation projects and live-action shoots is a bonus</p><p><br></p><p><strong>Reporting directly to the AD you will:</strong></p><p>-Manage the production of a range of digital deliverables with a strong focus on social, 2D and 3D video.</p><p>-Track and manage resource and anticipate possible issues</p><p>-Detailed timelines in conjunction with the creative and production teams</p><p>-Ability to work out project budgets</p><p>-Create and update project documentation including project plans, flowcharts and budget reconciliation reports</p><p>-Receive feedback and relay back to the team</p><p>-Internally manage the creative and production teams</p><p><br></p><p>Please apply with a recent CV</p>', '2021-07-31 00:00:00', 5, 1, 1, 6, 'Official Employee', 'Managing Skill', '38', 15, 64, '2021-04-19 09:36:13', '2021-04-20 07:31:02', NULL, 1, 8, 'PROJECT MANAGER'),
(45, '<p><strong>Supporting an effective editorial process</strong></p><p>Working closely with academic writers and production staff, you will have an important role to play in ensuring that files are supplied on time and to specification. From being involved in project management to carrying out critical editorial checks, you will use your strong communication skills to work closely with stakeholders throughout the process.</p><p><br></p><p><strong>What you’ll be doing</strong></p><p>-Maintaining accurate schedules throughout the publishing process</p><p>-Editing multiple projects to schedule and to the quality expected</p><p>-Co-ordinating the typesetting process in an effective and timely manner</p><p>-Working across MS Word and a content management system (CMS) to ensure final products have undergone quality editorial and proof checks</p><p>-Ensuring adequate instructions/briefs are provided to the typesetters, materials are tracked, and turnarounds are within the agreed timeframe</p><p>-Ensuring typesetter queries are responded to and all errors are recorded</p><p>-Ensuring that required checks and sign offs take place</p><p>-Liaising with stakeholders to ensure that authors give final QA approval before the product is published or sent to print</p><p>-Updating the internal scheduling system to accurately reflect the product status</p><p>-Supporting the Team Leader in taking on project management work</p><p><br></p><p><strong>What we’re looking for</strong></p><p>-Ability to recognise clear, concise, well-written and grammatically correct material</p><p>-Editorial experience</p><p>-Excellent communication skills</p><p>-Proactive and self-motivated</p><p>-Ability to work to tight deadlines and good time management</p><p>-Ability to self-manage when working in a demanding environment during peak publishing cycles</p><p>-Good MS Word skills</p><p>-Concentration, accuracy and an eye for detail</p><p>-Creativity along with the ability to approach work methodically</p><p>-Ideally, you will have some experience with content management systems; however, relevant training will be provided.</p><p><br></p><p><strong>Sound like the perfect fit?Apply today.</strong></p>', '2021-08-04 00:00:00', 3, 1, 4, 3, 'Official Employee', 'MS Office', '38', 15, 64, '2021-04-19 09:44:34', '2021-04-20 08:28:45', NULL, 1, 2, 'PROJECT EDITOR'),
(46, '<p><strong>Job Description:</strong></p><p>-You need to be flexible on working hours to meet work demands.</p><p>-You must have videography experience.</p><p>-You must have the ability to work fast and under pressure.</p><p><br></p><p><strong>Responsibilities:</strong></p><p>-Photograph homes listed for sale to meet the online marketing and print needs</p><p>-Meet clients on site and perform photo session</p><p>-Label and upload images to our in-house studio, the same day of the shoot</p><p>-Take photo shoots of interior space of residences - living room, bedrooms, bathrooms, kitchen, etc. and show the flow of the space</p><p>-Ensure good photo composition, angles and positioning of the space taken</p><p>-Editing and manipulating photos for lighting, contrast, and watermarks</p><p>-Edit videos for web content with navigation structures and text/graphic overlays</p><p><br></p><p><strong>Benefits:</strong></p><p>-Friendly, vibrant, and fun working environment</p><p>-Holidays</p><p>-Fantastic growth prospect within the organization</p><p>-Long term career and progression available</p><p>-Full Time, Permanent role</p>', '2021-07-07 00:00:00', 7, 1, 8, 3, 'Official Employee', 'Video Editing, Photograph', '01', 15, 63, '2021-04-19 09:50:15', '2021-04-20 08:29:44', NULL, 1, 3, 'FREELANCE VIDEOGRAPHER\\ PHOTOGRAPHER'),
(47, '<p><strong>Job Description:</strong></p><p>-You need to be flexible on working hours to meet work demands.</p><p>-You must have videography experience.</p><p>-You must have the ability to work fast and under pressure.</p><p><br></p><p><strong>Responsibilities:</strong></p><p>-Photograph homes listed for sale to meet the online marketing and print needs</p><p>-Meet clients on site and perform photo session</p><p>-Label and upload images to our in-house studio, the same day of the shoot</p><p>-Take photo shoots of interior space of residences - living room, bedrooms, bathrooms, kitchen, etc. and show the flow of the space</p><p>-Ensure good photo composition, angles and positioning of the space taken</p><p>-Editing and manipulating photos for lighting, contrast, and watermarks</p><p>-Edit videos for web content with navigation structures and text/graphic overlays</p><p><br></p><p><strong>Benefits:</strong></p><p>-Friendly, vibrant, and fun working environment</p><p>-Holidays</p><p>-Fantastic growth prospect within the organization</p><p>-Long term career and progression available</p><p>-Full Time, Permanent role</p>', '2021-08-08 00:00:00', 7, 1, 7, 3, 'Official Employee', 'Video, Photograph', '01', 15, 63, '2021-04-19 09:53:11', '2021-04-20 08:30:05', NULL, 1, 2, 'FREELANCE PHOTOGRAPHER / VIDEOGRAPHER POSITION'),
(48, '<p>Key Responsibilities/Role</p><p>-Covers a very diverse range of packaging solutions in retail, food &amp; drink and e-commerce areas.</p><p>-Applying clients pre-designed branding to various packaging items.</p><p>-Creating branding and logo development and applying to various packaging items.</p><p>-Creating digital proofs for client approval and transferring those to print ready artwork for suppliers.</p><p>-Strong skills in layout &amp; typography essential.</p><p>-Knowledge of print procedures and restrictions that go with various processes is critical.</p><p>-Product photography for both media platforms and company website.</p><p>-Excellent time management and organisational skills with the ability to manage multiple projects on a daily basis.</p><p><br></p><p>Skills</p><p>-2 years commercial design experience using graphic software in a similar environment</p><p>-Fluent in Adobe Creative Suite, excellent knowledge of Illustrator &amp; photo-shop is critical</p><p>-Experience in design for print with a working knowledge of Litho, Flexo &amp; screen print processes</p><p>-Exceptional communication skills, verbal, written &amp; visual with clients, colleagues &amp; suppliers</p><p>-Proven ability to work to tight deadlines under pressure whilst keeping an eye for detail and accuracy</p>', '2021-09-09 00:00:00', 4, 1, 1, 4, 'Official Employee', 'Art, Managing', '79', 15, 63, '2021-04-19 09:59:14', '2021-04-20 08:30:04', NULL, 1, 2, 'ART WORK CO-ORDINATOR'),
(49, '<p>You\'re a creative copywriter, at home with digital, print, and film. But really you\'re all about the concept - big, original, exciting, effective ideas that work across different media.</p><p><br></p><p>As an important member of the creative team, reporting to the Creative Director, you will be able to generate killer ideas, for integrated campaigns and one-offs, whilst consistently delivering crisp, compelling body copy.</p><p><br></p><p>If this sounds like something you can bring your creative flair to, simply click the button below to apply!</p><p><br></p><p><strong>Search is an equal opportunities recruiter and we welcome applications from all suitably skilled or qualified applicants, regardless of their race, sex, disability, religion/beliefs, sexual orientation or age.</strong></p>', '2021-08-06 00:00:00', 2, 1, 3, 3, 'Official Employee', 'Writing', '48', 17, 67, '2021-04-19 17:22:52', '2021-04-20 08:39:21', NULL, 1, 7, 'CREATIVE COPYWRITER'),
(50, '<p><strong>Why You?</strong></p><p>-The successful candidate will be an experienced motion graphics designer first and foremost along with possessing competent editing skills.</p><p>-Client and supplier relationship skills are required and you should also be comfortable delivering creative solutions and working to deadlines in a fast paced creative agency environment.</p><p>-You will be supporting client and internal stakeholders with the creative interpretation of briefs.</p><p><br></p><p><strong>You must have:</strong></p><p>-Experience of Final Cut Pro, Adobe After Effects, Premiere, Cinema 4D, Photoshop and Illustrator is essential.</p><p><br></p><p><strong>What\'s&nbsp;in it for you?</strong></p><p>You will be rewarded with an attractive salary and excellent company benefits along with career progression.</p>', '2021-06-30 00:00:00', 4, 1, 1, 4, 'Official Employee', 'Graphic Design', '48', 17, 67, '2021-04-19 17:34:23', '2021-04-20 08:39:30', NULL, 1, 3, 'DESIGNER'),
(51, '<p><strong>The Ideal Candidate:</strong></p><p>-Experience in a similar role is desirable but not essential as training will be given</p><p>-Must be flexible &amp; able to work as part of a team</p><p>-Would suit people with some knowledge of printing, but not essential</p><p>-Possess a ‘can-do’ attitude</p><p>-Live within a commutable distance</p><p><br></p><p><strong>If you feel you are the ideal candidate APPLY today!</strong></p>', '2021-06-23 00:00:00', 3, 1, 8, 1, 'Official Employee', NULL, '48', 17, 67, '2021-04-19 20:36:54', '2021-04-20 08:21:27', NULL, 1, 4, 'MACHINE OPERATOR - NIGHT SHIFT'),
(52, '<p><strong>Training and Support</strong></p><p>A full training and support programme is well established, encompassing online, webinar and seminar trainings.</p><p><br></p><p><strong>Skills/Experience</strong></p><p>-Good Social Media skills particularly Facebook, Instagram or Twitter</p><p>-Interested in helping others improve lifestyle</p><p>-Good at building relationships</p><p>-Good at networking with other people</p><p>-Able to work without supervision</p><p>-Self-motivated</p><p>-Independent</p><p>-Ambitious</p><p>-Keen to learn</p><p><br></p><p>To a large extent your background is not important, although experience in Social Media, particularly Instagram, Facebook and Twitter would be an advantage. The main thing is to have the motivation to work without supervision, to have a positive attitude, to be willing to learn and the drive to become successful.</p><p><br></p><p>This is an independent income opportunity, not a job or employment. The initial income is based on client orders, but after a month or two provides a consistent income from regular re-orders. It would be ideal to start part-time, but can be developed to provide a full-time income.</p>', '2021-06-10 00:00:00', 2, 1, 10, 1, 'Work from home', NULL, '48', 16, 15, '2021-04-19 20:42:55', '2021-04-20 04:18:33', NULL, 1, 9, 'WORK FROM HOME'),
(53, '<p><strong style=\"color: rgb(51, 51, 51);\">Job Description</strong></p><p><span style=\"color: rgb(51, 51, 51);\">We are looking to recruit an experienced and energetic Hangar Superintendent to supervise our newest client\'s Aviation Engineering Team. This is a \"hands on\" position as you will be involved with maintaining their aircraft as a key player within the Engineering Team.</span></p><p><br></p><p><br></p><p><strong style=\"color: rgb(51, 51, 51);\">Duties and Responsibilities</strong></p><p><span style=\"color: rgb(51, 51, 51);\">The successful candidate will be responsible for the day to day supervision of the Engineering Team providing full support and advice to the Engineering Manager on the levels of staff considered necessary to meet a continuing maintenance commitment. </span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">You will also liaise with our Technical Records Department to discuss and review maintenance forecast Workpacks.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Advising the Engineering Manager on levels of staff considered necessary to meet the maintenance commitment.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Liaising with Technical records department to discuss and review the maintenance \'forecast\' Workpacks, and correct job number issued for specific inspections.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Co-ordinating with Engineering Manager and allocation of Supervisor and engineering staff to specific work detail or aircraft maintenance (Scheduled or none scheduled) input(s).</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Daily supervision of staff on Base or Line maintenance tasks. To hold weekly table top Hangar meetings to discuss current progress or spares issues/procurement on current and forecast work load.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Alerting the Engineering Manager to any defects or shortages in the Hangar of any tooling, plant or equipment. Ensuring that all known/forecast spares required to complete a work input expediently have been established, \'in stock\', or \'ordered\' via company stores, prior to work.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Efficient daily oversight of supervisors and engineering staff, and advising the Engineering Manager of any matters affecting Finance, acceptable standards, company procedures.Ensuring that inspection continuity is maintained at all times when allocating tasks to the hangar personnel. </span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Ensuring that when the scheduled inspection, defect rectification, bay servicing or modification action has been completed, all worksheet entries are signed and the Certificate of release to Service is certified before the release of the aircraft or component into service.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Ensuring that all staff completes their daily hour\'s logs on worksheets/work packs.Ensuring the manpower per shift and Licenced supervision is maintained to support the airline operation in the event of sickness or leave from other staff members.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Ensuring Human Factors principles are taken into account when planning maintenance and that Health and Safety issues are bought to the attention of the Engineering Manager.</span></p><p><br></p><p><span style=\"color: rgb(51, 51, 51);\">Supervision of the Maintenance in unforeseen prolonged absence of the Engineering Manager.</span></p><p><br></p><p><br></p><p><strong style=\"color: rgb(51, 51, 51);\">Skills/Attributes</strong><span style=\"color: rgb(51, 51, 51);\">:You must be a licenced Engineer with current experience of DHC6-300 series and BN2A/B-26 aircraft, possessing a Part 66 B1 Engineering Licence with those aircraft included. Full group 3 aircraft included on your Licence, will be desirable, as would possession of a B2 licence. You must have excellent negotiation and interpersonal skills with strategic thinking capability and the ability to work on own initiative when required.You will also have:Strong IT skillsExcellent administrative skillsOrganised and self-motivatedBe a Team PlayerAll applications will be handled in the strictest confidence and unless you hear from us within 10 days of your application, please assume that you have been unsuccessful on this occasion.</span></p>', '2021-07-25 00:00:00', 4, 1, 3, 4, 'Official Employee', NULL, '54', 16, 15, '2021-04-19 20:48:49', '2021-04-20 08:41:25', NULL, 1, 4, 'HANGAR SUPERINTENDENT');

-- --------------------------------------------------------

--
-- Table structure for table `job_careers`
--

DROP TABLE IF EXISTS `job_careers`;
CREATE TABLE IF NOT EXISTS `job_careers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `job_id` bigint(20) NOT NULL,
  `career_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `job_id` (`job_id`),
  KEY `career_id` (`career_id`)
) ENGINE=InnoDB AUTO_INCREMENT=196 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `job_careers`
--

INSERT INTO `job_careers` (`id`, `job_id`, `career_id`) VALUES
(3, 17, 66),
(4, 17, 29),
(5, 16, 29),
(6, 16, 66),
(16, 23, 16),
(45, 29, 49),
(46, 29, 29),
(80, 25, 29),
(81, 25, 66),
(82, 26, 57),
(83, 26, 29),
(84, 26, 66),
(85, 27, 57),
(86, 27, 29),
(87, 27, 66),
(91, 52, 77),
(108, 44, 57),
(110, 37, 6),
(111, 37, 71),
(117, 39, 6),
(118, 39, 60),
(123, 34, 57),
(126, 51, 77),
(129, 24, 16),
(130, 24, 65),
(131, 18, 56),
(132, 18, 57),
(133, 28, 49),
(134, 28, 29),
(135, 28, 4),
(136, 28, 3),
(137, 19, 49),
(138, 19, 29),
(139, 19, 3),
(140, 19, 4),
(141, 30, 49),
(142, 30, 29),
(143, 30, 56),
(144, 30, 57),
(145, 38, 46),
(146, 38, 39),
(147, 38, 71),
(148, 40, 3),
(149, 40, 4),
(150, 40, 71),
(151, 41, 17),
(152, 41, 71),
(153, 42, 46),
(154, 42, 71),
(155, 42, 19),
(156, 43, 67),
(157, 43, 29),
(158, 43, 57),
(159, 45, 57),
(160, 46, 49),
(161, 46, 29),
(162, 48, 49),
(163, 48, 56),
(164, 47, 49),
(165, 47, 29),
(169, 21, 29),
(170, 21, 38),
(171, 32, 38),
(172, 32, 56),
(173, 32, 76),
(176, 22, 56),
(177, 22, 57),
(178, 35, 39),
(179, 35, 60),
(180, 36, 57),
(181, 36, 35),
(182, 49, 77),
(183, 50, 49),
(184, 50, 29),
(185, 20, 29),
(186, 20, 38),
(187, 20, 76),
(188, 31, 38),
(189, 31, 59),
(190, 31, 76),
(191, 33, 38),
(192, 33, 44),
(193, 53, 38),
(194, 53, 59);

-- --------------------------------------------------------

--
-- Table structure for table `persistent_audit_event`
--

DROP TABLE IF EXISTS `persistent_audit_event`;
CREATE TABLE IF NOT EXISTS `persistent_audit_event` (
  `event_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `principal` varchar(50) NOT NULL,
  `event_date` timestamp NULL DEFAULT NULL,
  `event_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`event_id`),
  KEY `idx_persistent_audit_event` (`principal`,`event_date`)
) ENGINE=InnoDB AUTO_INCREMENT=391 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `persistent_audit_event`
--

INSERT INTO `persistent_audit_event` (`event_id`, `principal`, `event_date`, `event_type`) VALUES
(14, 'admin', '2021-03-22 09:41:08', 'AUTHENTICATION_SUCCESS'),
(15, 'admin', '2021-03-22 20:01:23', 'AUTHENTICATION_SUCCESS'),
(16, 'admin', '2021-03-22 20:27:00', 'AUTHENTICATION_SUCCESS'),
(17, 'admin', '2021-03-22 20:34:37', 'AUTHENTICATION_SUCCESS'),
(18, 'admin', '2021-03-22 20:52:58', 'AUTHENTICATION_SUCCESS'),
(19, 'admin', '2021-03-22 21:48:28', 'AUTHENTICATION_SUCCESS'),
(20, 'admin', '2021-03-22 21:59:15', 'AUTHENTICATION_SUCCESS'),
(21, 'admin', '2021-03-22 23:44:04', 'AUTHENTICATION_SUCCESS'),
(22, 'admin', '2021-03-23 00:56:49', 'AUTHENTICATION_SUCCESS'),
(23, 'admin', '2021-03-23 03:03:35', 'AUTHENTICATION_SUCCESS'),
(24, 'admin', '2021-03-23 03:03:35', 'AUTHENTICATION_SUCCESS'),
(25, 'admin', '2021-03-23 03:03:37', 'AUTHENTICATION_SUCCESS'),
(26, 'admin', '2021-03-23 03:03:37', 'AUTHENTICATION_SUCCESS'),
(27, 'admin', '2021-03-23 03:12:07', 'AUTHENTICATION_SUCCESS'),
(28, 'admin', '2021-03-23 09:06:34', 'AUTHENTICATION_SUCCESS'),
(29, 'admin', '2021-03-23 09:31:18', 'AUTHENTICATION_SUCCESS'),
(30, 'admin', '2021-03-23 09:31:19', 'AUTHENTICATION_SUCCESS'),
(31, 'admin', '2021-03-23 09:40:08', 'AUTHENTICATION_SUCCESS'),
(32, 'admin', '2021-03-23 09:53:54', 'AUTHENTICATION_SUCCESS'),
(33, 'admin', '2021-03-24 02:28:10', 'AUTHENTICATION_SUCCESS'),
(34, 'admin', '2021-03-24 02:28:12', 'AUTHENTICATION_SUCCESS'),
(35, 'admin', '2021-03-24 04:57:58', 'AUTHENTICATION_SUCCESS'),
(36, 'admin', '2021-03-24 06:25:22', 'AUTHENTICATION_SUCCESS'),
(37, 'admin', '2021-03-24 07:13:05', 'AUTHENTICATION_SUCCESS'),
(38, 'admin', '2021-03-24 07:34:19', 'AUTHENTICATION_SUCCESS'),
(39, 'admin', '2021-03-24 09:17:42', 'AUTHENTICATION_SUCCESS'),
(40, 'admin', '2021-03-25 05:59:00', 'AUTHENTICATION_SUCCESS'),
(41, 'admin', '2021-03-25 05:59:03', 'AUTHENTICATION_SUCCESS'),
(42, 'admin', '2021-03-25 05:59:04', 'AUTHENTICATION_SUCCESS'),
(43, 'admin', '2021-03-25 06:45:37', 'AUTHENTICATION_SUCCESS'),
(44, 'admin', '2021-03-25 08:56:58', 'AUTHENTICATION_SUCCESS'),
(45, 'admin', '2021-03-25 10:36:35', 'AUTHENTICATION_SUCCESS'),
(46, 'admin', '2021-03-25 21:23:42', 'AUTHENTICATION_SUCCESS'),
(47, 'huahuu1', '2021-03-25 21:34:24', 'AUTHENTICATION_SUCCESS'),
(48, 'admin', '2021-03-25 21:39:31', 'AUTHENTICATION_SUCCESS'),
(49, 'huahuu1', '2021-03-25 21:39:53', 'AUTHENTICATION_SUCCESS'),
(50, 'admin', '2021-03-25 23:50:27', 'AUTHENTICATION_SUCCESS'),
(51, 'admin', '2021-03-25 23:55:49', 'AUTHENTICATION_SUCCESS'),
(52, 'admin', '2021-03-26 00:05:38', 'AUTHENTICATION_SUCCESS'),
(53, 'admin', '2021-03-26 00:17:50', 'AUTHENTICATION_SUCCESS'),
(54, 'admin', '2021-03-26 08:06:43', 'AUTHENTICATION_SUCCESS'),
(55, 'admin', '2021-03-26 08:55:48', 'AUTHENTICATION_SUCCESS'),
(56, 'admin', '2021-03-26 19:28:45', 'AUTHENTICATION_SUCCESS'),
(57, 'admin', '2021-03-26 19:39:31', 'AUTHENTICATION_SUCCESS'),
(58, 'admin', '2021-03-26 19:41:38', 'AUTHENTICATION_SUCCESS'),
(59, 'admin', '2021-03-26 19:43:05', 'AUTHENTICATION_SUCCESS'),
(60, 'admin', '2021-03-26 22:00:38', 'AUTHENTICATION_SUCCESS'),
(61, 'admin', '2021-03-26 23:44:17', 'AUTHENTICATION_SUCCESS'),
(62, 'admin', '2021-03-27 02:28:42', 'AUTHENTICATION_SUCCESS'),
(63, 'admin', '2021-03-27 02:32:11', 'AUTHENTICATION_SUCCESS'),
(64, 'admin', '2021-03-27 02:52:04', 'AUTHENTICATION_SUCCESS'),
(65, 'admin', '2021-03-27 03:23:38', 'AUTHENTICATION_SUCCESS'),
(66, 'admin', '2021-03-27 03:27:02', 'AUTHENTICATION_SUCCESS'),
(67, 'admin', '2021-03-27 09:11:20', 'AUTHENTICATION_SUCCESS'),
(68, 'admin', '2021-03-27 09:29:10', 'AUTHENTICATION_SUCCESS'),
(69, 'admin', '2021-03-27 09:35:55', 'AUTHENTICATION_SUCCESS'),
(70, 'admin', '2021-03-27 10:22:12', 'AUTHENTICATION_SUCCESS'),
(71, 'admin', '2021-03-27 10:24:03', 'AUTHENTICATION_SUCCESS'),
(72, 'admin', '2021-03-27 10:31:43', 'AUTHENTICATION_SUCCESS'),
(73, 'admin', '2021-03-27 10:34:13', 'AUTHENTICATION_SUCCESS'),
(74, 'admin', '2021-03-27 10:36:54', 'AUTHENTICATION_SUCCESS'),
(75, 'admin', '2021-03-27 10:39:42', 'AUTHENTICATION_SUCCESS'),
(76, 'admin', '2021-03-27 10:42:22', 'AUTHENTICATION_SUCCESS'),
(77, 'admin', '2021-03-27 10:53:39', 'AUTHENTICATION_SUCCESS'),
(78, 'admin', '2021-03-27 10:59:09', 'AUTHENTICATION_SUCCESS'),
(79, 'admin', '2021-03-27 19:43:36', 'AUTHENTICATION_SUCCESS'),
(80, 'admin', '2021-03-28 01:55:15', 'AUTHENTICATION_SUCCESS'),
(81, 'admin', '2021-03-28 01:58:07', 'AUTHENTICATION_SUCCESS'),
(82, 'admin', '2021-03-28 02:36:40', 'AUTHENTICATION_SUCCESS'),
(83, 'admin', '2021-03-29 01:34:30', 'AUTHENTICATION_SUCCESS'),
(84, 'admin', '2021-03-29 04:55:00', 'AUTHENTICATION_SUCCESS'),
(85, 'admin', '2021-03-29 05:05:50', 'AUTHENTICATION_SUCCESS'),
(86, 'admin', '2021-03-29 05:08:54', 'AUTHENTICATION_SUCCESS'),
(87, 'admin', '2021-03-29 06:22:33', 'AUTHENTICATION_SUCCESS'),
(88, 'admin', '2021-03-29 06:37:54', 'AUTHENTICATION_SUCCESS'),
(89, 'admin', '2021-03-29 06:38:03', 'AUTHENTICATION_SUCCESS'),
(90, 'admin', '2021-03-29 06:47:10', 'AUTHENTICATION_SUCCESS'),
(91, 'duc123', '2021-03-30 02:33:00', 'AUTHENTICATION_SUCCESS'),
(92, 'ductmkma', '2021-03-30 02:51:06', 'AUTHENTICATION_SUCCESS'),
(93, 'admin', '2021-03-30 02:54:08', 'AUTHENTICATION_SUCCESS'),
(94, 'admin', '2021-03-30 02:57:18', 'AUTHENTICATION_SUCCESS'),
(95, 'admin', '2021-03-30 03:06:18', 'AUTHENTICATION_SUCCESS'),
(96, 'admin', '2021-03-30 04:01:09', 'AUTHENTICATION_SUCCESS'),
(97, 'admin', '2021-03-30 04:29:23', 'AUTHENTICATION_SUCCESS'),
(98, 'admin', '2021-03-30 04:45:59', 'AUTHENTICATION_SUCCESS'),
(99, 'admin', '2021-03-31 01:23:22', 'AUTHENTICATION_SUCCESS'),
(100, 'adminx', '2021-03-31 01:50:12', 'AUTHENTICATION_FAILURE'),
(101, 'admin', '2021-03-31 01:51:16', 'AUTHENTICATION_SUCCESS'),
(102, 'admin', '2021-03-31 01:54:41', 'AUTHENTICATION_SUCCESS'),
(103, 'admin', '2021-03-31 01:54:58', 'AUTHENTICATION_SUCCESS'),
(104, 'admin', '2021-03-31 01:56:12', 'AUTHENTICATION_SUCCESS'),
(105, 'admin', '2021-03-31 01:56:48', 'AUTHENTICATION_SUCCESS'),
(106, 'admin', '2021-03-31 02:01:22', 'AUTHENTICATION_SUCCESS'),
(107, 'admin', '2021-03-31 02:04:48', 'AUTHENTICATION_SUCCESS'),
(108, 'admin', '2021-03-31 02:12:18', 'AUTHENTICATION_SUCCESS'),
(109, 'admin', '2021-03-31 02:23:53', 'AUTHENTICATION_SUCCESS'),
(110, 'admin', '2021-03-31 02:25:55', 'AUTHENTICATION_SUCCESS'),
(111, 'admin', '2021-03-31 02:45:42', 'AUTHENTICATION_SUCCESS'),
(112, 'admin', '2021-03-31 02:48:55', 'AUTHENTICATION_SUCCESS'),
(113, 'admin', '2021-03-31 03:08:45', 'AUTHENTICATION_SUCCESS'),
(114, 'admin', '2021-03-31 03:15:12', 'AUTHENTICATION_SUCCESS'),
(115, 'admin', '2021-03-31 03:18:05', 'AUTHENTICATION_SUCCESS'),
(116, 'admin', '2021-03-31 03:51:10', 'AUTHENTICATION_SUCCESS'),
(117, 'admin', '2021-03-31 03:58:14', 'AUTHENTICATION_SUCCESS'),
(118, 'admin', '2021-03-31 08:43:21', 'AUTHENTICATION_SUCCESS'),
(119, 'admin', '2021-03-31 08:43:22', 'AUTHENTICATION_SUCCESS'),
(120, 'admin', '2021-03-31 08:53:54', 'AUTHENTICATION_SUCCESS'),
(121, 'admin', '2021-03-31 09:10:28', 'AUTHENTICATION_SUCCESS'),
(122, 'admin', '2021-03-31 09:13:02', 'AUTHENTICATION_SUCCESS'),
(123, 'admin', '2021-03-31 09:47:49', 'AUTHENTICATION_SUCCESS'),
(124, 'admin', '2021-03-31 09:47:50', 'AUTHENTICATION_SUCCESS'),
(125, 'admin', '2021-03-31 10:08:44', 'AUTHENTICATION_SUCCESS'),
(126, 'admin', '2021-03-31 10:35:05', 'AUTHENTICATION_SUCCESS'),
(127, 'admin', '2021-03-31 10:45:49', 'AUTHENTICATION_SUCCESS'),
(128, 'admin', '2021-03-31 10:47:24', 'AUTHENTICATION_SUCCESS'),
(129, 'admin', '2021-03-31 17:35:29', 'AUTHENTICATION_SUCCESS'),
(130, 'admin', '2021-04-01 02:15:10', 'AUTHENTICATION_SUCCESS'),
(131, 'admin', '2021-04-01 02:15:50', 'AUTHENTICATION_SUCCESS'),
(132, 'admin', '2021-04-01 02:20:18', 'AUTHENTICATION_SUCCESS'),
(133, 'admin', '2021-04-01 02:26:47', 'AUTHENTICATION_SUCCESS'),
(134, 'admin', '2021-04-01 03:01:53', 'AUTHENTICATION_FAILURE'),
(135, 'admin', '2021-04-01 03:02:05', 'AUTHENTICATION_SUCCESS'),
(136, 'admin', '2021-04-01 03:05:25', 'AUTHENTICATION_SUCCESS'),
(137, 'admin', '2021-04-01 03:14:03', 'AUTHENTICATION_SUCCESS'),
(138, 'admin', '2021-04-01 03:15:29', 'AUTHENTICATION_SUCCESS'),
(139, 'admin', '2021-04-01 03:16:55', 'AUTHENTICATION_SUCCESS'),
(140, 'admin', '2021-04-01 03:18:30', 'AUTHENTICATION_SUCCESS'),
(141, 'admin', '2021-04-01 03:21:33', 'AUTHENTICATION_SUCCESS'),
(142, 'admin', '2021-04-01 04:21:53', 'AUTHENTICATION_SUCCESS'),
(143, 'admin', '2021-04-01 04:22:13', 'AUTHENTICATION_SUCCESS'),
(144, 'admin', '2021-04-01 04:23:40', 'AUTHENTICATION_SUCCESS'),
(145, 'admin', '2021-04-01 04:25:39', 'AUTHENTICATION_SUCCESS'),
(146, 'admin', '2021-04-01 04:31:16', 'AUTHENTICATION_SUCCESS'),
(147, 'admin', '2021-04-01 04:35:30', 'AUTHENTICATION_SUCCESS'),
(148, 'admin', '2021-04-01 07:11:21', 'AUTHENTICATION_SUCCESS'),
(149, 'admin', '2021-04-01 08:42:38', 'AUTHENTICATION_SUCCESS'),
(150, 'admin', '2021-04-01 16:28:28', 'AUTHENTICATION_SUCCESS'),
(151, 'admin', '2021-04-01 16:29:39', 'AUTHENTICATION_SUCCESS'),
(152, 'admin', '2021-04-01 16:47:47', 'AUTHENTICATION_SUCCESS'),
(153, 'ductm.td', '2021-04-01 16:54:39', 'AUTHENTICATION_FAILURE'),
(154, 'ductm.td', '2021-04-01 16:54:44', 'AUTHENTICATION_FAILURE'),
(155, 'ductm.ntd', '2021-04-01 16:54:52', 'AUTHENTICATION_SUCCESS'),
(156, 'ductm.ntd', '2021-04-01 19:16:58', 'AUTHENTICATION_FAILURE'),
(157, 'ductm.ntd', '2021-04-01 19:17:03', 'AUTHENTICATION_SUCCESS'),
(158, 'ductm.ntd2', '2021-04-01 19:56:59', 'AUTHENTICATION_SUCCESS'),
(159, 'admin', '2021-04-01 20:09:54', 'AUTHENTICATION_SUCCESS'),
(160, 'ductm.ntd2', '2021-04-01 20:34:54', 'AUTHENTICATION_FAILURE'),
(161, 'ductm.ntd2', '2021-04-01 20:34:58', 'AUTHENTICATION_SUCCESS'),
(162, 'ungvien', '2021-04-01 20:36:31', 'AUTHENTICATION_SUCCESS'),
(163, 'ungvien', '2021-04-01 21:19:21', 'AUTHENTICATION_SUCCESS'),
(164, 'ungvien', '2021-04-01 21:21:07', 'AUTHENTICATION_SUCCESS'),
(165, 'admin', '2021-04-01 21:22:08', 'AUTHENTICATION_SUCCESS'),
(166, 'ungvien', '2021-04-01 21:22:15', 'AUTHENTICATION_SUCCESS'),
(167, 'ungvien', '2021-04-03 03:01:26', 'AUTHENTICATION_SUCCESS'),
(168, 'admin', '2021-04-03 03:02:19', 'AUTHENTICATION_SUCCESS'),
(169, 'ungvien', '2021-04-03 03:12:34', 'AUTHENTICATION_SUCCESS'),
(170, 'ungvien', '2021-04-03 03:16:48', 'AUTHENTICATION_SUCCESS'),
(171, 'ungvien', '2021-04-03 03:19:06', 'AUTHENTICATION_SUCCESS'),
(172, 'ungvien', '2021-04-03 03:20:23', 'AUTHENTICATION_SUCCESS'),
(173, 'ungvien', '2021-04-03 03:24:12', 'AUTHENTICATION_SUCCESS'),
(174, 'ungvien', '2021-04-03 03:26:58', 'AUTHENTICATION_SUCCESS'),
(175, 'ungvien', '2021-04-03 03:29:56', 'AUTHENTICATION_SUCCESS'),
(176, 'ungvien', '2021-04-03 03:40:40', 'AUTHENTICATION_SUCCESS'),
(177, 'admin', '2021-04-03 18:06:12', 'AUTHENTICATION_SUCCESS'),
(178, 'admin', '2021-04-03 18:08:41', 'AUTHENTICATION_SUCCESS'),
(179, 'huyct', '2021-04-03 18:31:10', 'AUTHENTICATION_SUCCESS'),
(180, 'huyct1x', '2021-04-03 18:52:33', 'AUTHENTICATION_SUCCESS'),
(181, 'huyct2x', '2021-04-03 18:54:28', 'AUTHENTICATION_SUCCESS'),
(182, 'admin', '2021-04-03 19:22:49', 'AUTHENTICATION_SUCCESS'),
(183, 'admin', '2021-04-03 19:24:42', 'AUTHENTICATION_SUCCESS'),
(184, 'admin', '2021-04-03 19:27:47', 'AUTHENTICATION_SUCCESS'),
(185, 'huyct2x', '2021-04-03 19:36:20', 'AUTHENTICATION_SUCCESS'),
(186, 'huyct1x', '2021-04-03 19:49:24', 'AUTHENTICATION_SUCCESS'),
(187, 'admin', '2021-04-03 19:57:43', 'AUTHENTICATION_SUCCESS'),
(188, 'huyct', '2021-04-05 08:33:11', 'AUTHENTICATION_SUCCESS'),
(189, 'huyct', '2021-04-05 08:34:19', 'AUTHENTICATION_SUCCESS'),
(190, 'ductm.ntd', '2021-04-05 08:42:48', 'AUTHENTICATION_SUCCESS'),
(191, 'ductm.ntd', '2021-04-05 19:09:25', 'AUTHENTICATION_SUCCESS'),
(192, 'huyct', '2021-04-12 07:21:27', 'AUTHENTICATION_FAILURE'),
(193, 'huyct', '2021-04-12 07:21:27', 'AUTHENTICATION_FAILURE'),
(194, 'huyct', '2021-04-12 07:21:27', 'AUTHENTICATION_FAILURE'),
(195, 'huyct', '2021-04-12 07:21:27', 'AUTHENTICATION_FAILURE'),
(196, 'huyct', '2021-04-12 07:21:46', 'AUTHENTICATION_SUCCESS'),
(197, 'admin', '2021-04-12 07:45:29', 'AUTHENTICATION_SUCCESS'),
(198, 'admin', '2021-04-15 18:53:27', 'AUTHENTICATION_SUCCESS'),
(199, 'admin', '2021-04-15 19:16:40', 'AUTHENTICATION_SUCCESS'),
(200, 'duc123', '2021-04-15 20:10:50', 'AUTHENTICATION_SUCCESS'),
(201, 'admin', '2021-04-15 20:11:46', 'AUTHENTICATION_SUCCESS'),
(202, 'admin', '2021-04-15 21:01:12', 'AUTHENTICATION_SUCCESS'),
(203, 'admin', '2021-04-16 03:47:45', 'AUTHENTICATION_SUCCESS'),
(204, 'admin', '2021-04-16 04:03:25', 'AUTHENTICATION_SUCCESS'),
(205, 'admin', '2021-04-16 04:15:17', 'AUTHENTICATION_SUCCESS'),
(206, 'admin', '2021-04-16 05:37:08', 'AUTHENTICATION_SUCCESS'),
(207, 'admin', '2021-04-16 05:38:50', 'AUTHENTICATION_SUCCESS'),
(208, 'admin', '2021-04-16 10:03:24', 'AUTHENTICATION_SUCCESS'),
(209, 'admin', '2021-04-16 23:43:13', 'AUTHENTICATION_SUCCESS'),
(210, 'admin', '2021-04-17 00:10:39', 'AUTHENTICATION_SUCCESS'),
(211, 'admin', '2021-04-17 04:00:55', 'AUTHENTICATION_SUCCESS'),
(212, 'admin', '2021-04-17 05:55:45', 'AUTHENTICATION_SUCCESS'),
(213, 'admin', '2021-04-17 07:51:07', 'AUTHENTICATION_SUCCESS'),
(214, 'ungvien', '2021-04-17 09:15:22', 'AUTHENTICATION_SUCCESS'),
(215, 'admin', '2021-04-17 09:33:56', 'AUTHENTICATION_SUCCESS'),
(216, 'ungvien', '2021-04-17 09:36:09', 'AUTHENTICATION_SUCCESS'),
(217, 'admin', '2021-04-17 09:57:15', 'AUTHENTICATION_SUCCESS'),
(218, 'ungvien', '2021-04-17 10:26:44', 'AUTHENTICATION_SUCCESS'),
(219, 'admin', '2021-04-17 10:28:14', 'AUTHENTICATION_SUCCESS'),
(220, 'admin', '2021-04-17 10:31:01', 'AUTHENTICATION_SUCCESS'),
(221, 'admin', '2021-04-18 03:10:55', 'AUTHENTICATION_SUCCESS'),
(222, 'admin', '2021-04-18 03:36:20', 'AUTHENTICATION_SUCCESS'),
(223, 'ngoclinh22', '2021-04-18 05:40:46', 'AUTHENTICATION_SUCCESS'),
(224, 'minhtam17', '2021-04-18 05:50:38', 'AUTHENTICATION_SUCCESS'),
(225, 'ngoclinh22', '2021-04-18 05:53:36', 'AUTHENTICATION_SUCCESS'),
(226, 'myhanh26', '2021-04-18 05:59:27', 'AUTHENTICATION_SUCCESS'),
(227, 'thanhhung57', '2021-04-18 06:18:46', 'AUTHENTICATION_SUCCESS'),
(228, 'tuanminh.ntv1', '2021-04-18 06:23:39', 'AUTHENTICATION_SUCCESS'),
(229, 'tuanminh.ntv1', '2021-04-18 06:23:51', 'AUTHENTICATION_SUCCESS'),
(230, 'chithien.ntv2', '2021-04-18 06:28:19', 'AUTHENTICATION_SUCCESS'),
(231, 'kimngan.ntv3', '2021-04-18 06:31:28', 'AUTHENTICATION_SUCCESS'),
(232, 'nguyenmanh.ntv4', '2021-04-18 06:35:29', 'AUTHENTICATION_SUCCESS'),
(233, 'tranlam89', '2021-04-18 06:38:15', 'AUTHENTICATION_SUCCESS'),
(234, 'quangtruc.vaa12', '2021-04-18 06:45:42', 'AUTHENTICATION_SUCCESS'),
(235, 'minhhoai.tp2', '2021-04-18 06:49:17', 'AUTHENTICATION_SUCCESS'),
(236, 'ngochung.hn3', '2021-04-18 06:53:04', 'AUTHENTICATION_SUCCESS'),
(237, 'thedan.st4', '2021-04-18 07:02:14', 'AUTHENTICATION_SUCCESS'),
(238, 'nguyentoan.ii5', '2021-04-18 07:04:52', 'AUTHENTICATION_SUCCESS'),
(239, 'thanhdo.hcm5', '2021-04-18 07:08:30', 'AUTHENTICATION_SUCCESS'),
(240, 'dreambean.cafe', '2021-04-18 07:18:08', 'AUTHENTICATION_SUCCESS'),
(241, 'nova.spin', '2021-04-18 07:39:08', 'AUTHENTICATION_SUCCESS'),
(242, 'nova.spin', '2021-04-18 07:42:15', 'AUTHENTICATION_SUCCESS'),
(243, 'airline.travel', '2021-04-18 07:47:11', 'AUTHENTICATION_SUCCESS'),
(244, 'cinema.andco', '2021-04-18 08:09:22', 'AUTHENTICATION_SUCCESS'),
(245, 'uni.versity', '2021-04-18 08:22:13', 'AUTHENTICATION_SUCCESS'),
(246, 'uni.versity', '2021-04-18 08:30:51', 'AUTHENTICATION_SUCCESS'),
(247, 'airline.travel', '2021-04-18 08:59:55', 'AUTHENTICATION_SUCCESS'),
(248, 'airline.travel', '2021-04-18 16:13:34', 'AUTHENTICATION_SUCCESS'),
(249, 'nova.spin', '2021-04-18 16:24:36', 'AUTHENTICATION_SUCCESS'),
(250, 'admin', '2021-04-18 16:49:20', 'AUTHENTICATION_SUCCESS'),
(251, 'dreambean.cafe', '2021-04-18 17:26:52', 'AUTHENTICATION_SUCCESS'),
(252, 'ductm.ntd', '2021-04-18 20:26:01', 'AUTHENTICATION_SUCCESS'),
(253, 'ductm.ntd2', '2021-04-18 20:30:58', 'AUTHENTICATION_FAILURE'),
(254, 'ductm.ntd2', '2021-04-18 20:31:01', 'AUTHENTICATION_SUCCESS'),
(255, 'admin', '2021-04-18 20:35:29', 'AUTHENTICATION_SUCCESS'),
(256, 'dreambean.cafe', '2021-04-18 20:39:04', 'AUTHENTICATION_SUCCESS'),
(257, 'nova.spin', '2021-04-18 20:50:25', 'AUTHENTICATION_SUCCESS'),
(258, 'airline.travel', '2021-04-18 21:05:58', 'AUTHENTICATION_SUCCESS'),
(259, 'airline.travel', '2021-04-18 21:08:29', 'AUTHENTICATION_SUCCESS'),
(260, 'cinema.andco', '2021-04-18 21:30:03', 'AUTHENTICATION_SUCCESS'),
(261, 'uni.versity', '2021-04-18 21:34:25', 'AUTHENTICATION_SUCCESS'),
(262, 'admin', '2021-04-18 21:40:10', 'AUTHENTICATION_SUCCESS'),
(263, 'admin', '2021-04-18 21:40:50', 'AUTHENTICATION_SUCCESS'),
(264, 'ngoclinh22', '2021-04-18 21:41:31', 'AUTHENTICATION_SUCCESS'),
(265, 'minhtam17', '2021-04-18 21:42:30', 'AUTHENTICATION_SUCCESS'),
(266, 'myhanh26', '2021-04-18 21:43:14', 'AUTHENTICATION_SUCCESS'),
(267, 'nova.spin', '2021-04-18 21:43:37', 'AUTHENTICATION_SUCCESS'),
(268, 'thanhhung57', '2021-04-18 21:46:07', 'AUTHENTICATION_SUCCESS'),
(269, 'thanhhung57', '2021-04-18 21:47:18', 'AUTHENTICATION_SUCCESS'),
(270, 'thanhhung57', '2021-04-18 21:47:44', 'AUTHENTICATION_SUCCESS'),
(271, 'admin', '2021-04-18 21:51:50', 'AUTHENTICATION_SUCCESS'),
(272, 'thanhhung57', '2021-04-18 21:51:57', 'AUTHENTICATION_SUCCESS'),
(273, 'tuanminh.ntv1', '2021-04-18 21:53:47', 'AUTHENTICATION_SUCCESS'),
(274, 'chithien.ntv2', '2021-04-18 21:54:27', 'AUTHENTICATION_SUCCESS'),
(275, 'dreambean.cafe', '2021-04-18 21:54:59', 'AUTHENTICATION_SUCCESS'),
(276, 'nguyenmanh.ntv4', '2021-04-18 21:56:38', 'AUTHENTICATION_SUCCESS'),
(277, 'admin', '2021-04-18 21:59:48', 'AUTHENTICATION_SUCCESS'),
(278, 'nguyenmanh.ntv4', '2021-04-18 21:59:56', 'AUTHENTICATION_SUCCESS'),
(279, 'tranlam89', '2021-04-18 22:00:31', 'AUTHENTICATION_SUCCESS'),
(280, 'quangtruc.vaa12', '2021-04-18 22:00:58', 'AUTHENTICATION_SUCCESS'),
(281, 'airline.travel', '2021-04-18 22:01:18', 'AUTHENTICATION_SUCCESS'),
(282, 'kimngan.ntv3', '2021-04-18 22:02:47', 'AUTHENTICATION_SUCCESS'),
(283, 'minhhoai.tp2', '2021-04-18 22:03:31', 'AUTHENTICATION_SUCCESS'),
(284, 'ngochung.hn3', '2021-04-18 22:04:02', 'AUTHENTICATION_SUCCESS'),
(285, 'cinema.andco', '2021-04-18 22:04:27', 'AUTHENTICATION_SUCCESS'),
(286, 'thedan.st4', '2021-04-18 22:06:15', 'AUTHENTICATION_SUCCESS'),
(287, 'nguyentoan.ii5', '2021-04-18 22:06:42', 'AUTHENTICATION_SUCCESS'),
(288, 'thanhdo.hcm5', '2021-04-18 22:07:25', 'AUTHENTICATION_SUCCESS'),
(289, 'uni.versity', '2021-04-18 22:07:43', 'AUTHENTICATION_SUCCESS'),
(290, 'dreambean.cafe', '2021-04-18 22:09:27', 'AUTHENTICATION_SUCCESS'),
(291, 'nova.spin', '2021-04-18 22:17:37', 'AUTHENTICATION_SUCCESS'),
(292, 'airline.travel', '2021-04-18 22:22:22', 'AUTHENTICATION_SUCCESS'),
(293, 'cinema.andco', '2021-04-18 22:27:49', 'AUTHENTICATION_SUCCESS'),
(294, 'huy17', '2021-04-19 01:33:47', 'AUTHENTICATION_SUCCESS'),
(295, 'admin', '2021-04-19 01:35:11', 'AUTHENTICATION_SUCCESS'),
(296, 'dreambean.cafe', '2021-04-19 01:35:50', 'AUTHENTICATION_SUCCESS'),
(297, 'admin', '2021-04-19 01:45:35', 'AUTHENTICATION_SUCCESS'),
(298, 'dreambean.cafe', '2021-04-19 01:48:02', 'AUTHENTICATION_SUCCESS'),
(299, 'dreambean.cafe', '2021-04-19 02:01:15', 'AUTHENTICATION_SUCCESS'),
(300, 'admin', '2021-04-19 06:35:43', 'AUTHENTICATION_SUCCESS'),
(301, 'nova.spin', '2021-04-19 06:36:20', 'AUTHENTICATION_SUCCESS'),
(302, 'nova.spin', '2021-04-19 06:43:57', 'AUTHENTICATION_SUCCESS'),
(303, 'admin', '2021-04-19 09:37:05', 'AUTHENTICATION_SUCCESS'),
(304, 'admin', '2021-04-19 10:02:03', 'AUTHENTICATION_SUCCESS'),
(305, 'cinema.andco', '2021-04-19 16:59:03', 'AUTHENTICATION_SUCCESS'),
(306, 'cinema.andco', '2021-04-19 17:17:37', 'AUTHENTICATION_SUCCESS'),
(307, 'admin', '2021-04-19 18:36:58', 'AUTHENTICATION_SUCCESS'),
(308, 'admin', '2021-04-19 20:33:38', 'AUTHENTICATION_SUCCESS'),
(309, 'airline.travel', '2021-04-19 20:38:03', 'AUTHENTICATION_SUCCESS'),
(310, 'nova.spin', '2021-04-19 20:52:44', 'AUTHENTICATION_SUCCESS'),
(311, 'admin', '2021-04-19 20:55:02', 'AUTHENTICATION_SUCCESS'),
(312, 'ngoclinh22', '2021-04-19 20:56:52', 'AUTHENTICATION_SUCCESS'),
(313, 'minhtam17', '2021-04-19 21:01:16', 'AUTHENTICATION_SUCCESS'),
(314, 'myhanh26', '2021-04-19 21:04:10', 'AUTHENTICATION_SUCCESS'),
(315, 'thanhhung57', '2021-04-19 21:06:50', 'AUTHENTICATION_SUCCESS'),
(316, 'tuanminh.ntv1', '2021-04-19 21:12:26', 'AUTHENTICATION_SUCCESS'),
(317, 'chithien.ntv2', '2021-04-19 21:15:51', 'AUTHENTICATION_SUCCESS'),
(318, 'kimngan.ntv3', '2021-04-19 21:17:26', 'AUTHENTICATION_SUCCESS'),
(319, 'nguyenmanh.ntv4', '2021-04-19 21:18:37', 'AUTHENTICATION_SUCCESS'),
(320, 'tranlam89', '2021-04-19 21:19:50', 'AUTHENTICATION_SUCCESS'),
(321, 'quangtruc.vaa12', '2021-04-19 21:21:31', 'AUTHENTICATION_SUCCESS'),
(322, 'minhhoai.tp2', '2021-04-19 21:22:47', 'AUTHENTICATION_SUCCESS'),
(323, 'ngochung.hn3', '2021-04-19 21:23:55', 'AUTHENTICATION_SUCCESS'),
(324, 'thedan.st4', '2021-04-19 21:25:30', 'AUTHENTICATION_SUCCESS'),
(325, 'nguyentoan.ii5', '2021-04-19 21:26:47', 'AUTHENTICATION_SUCCESS'),
(326, 'thanhdo.hcm5', '2021-04-19 21:27:59', 'AUTHENTICATION_SUCCESS'),
(327, 'admin', '2021-04-19 21:36:09', 'AUTHENTICATION_SUCCESS'),
(328, 'huy17', '2021-04-19 21:37:46', 'AUTHENTICATION_SUCCESS'),
(329, 'huy17', '2021-04-19 21:39:52', 'AUTHENTICATION_SUCCESS'),
(330, 'nova.spin', '2021-04-19 21:41:25', 'AUTHENTICATION_SUCCESS'),
(331, 'huy17', '2021-04-19 21:41:50', 'AUTHENTICATION_SUCCESS'),
(332, 'dreambean.cafe', '2021-04-19 21:44:12', 'AUTHENTICATION_SUCCESS'),
(333, 'nova.spin', '2021-04-19 21:50:31', 'AUTHENTICATION_SUCCESS'),
(334, 'airline.travel', '2021-04-19 22:05:38', 'AUTHENTICATION_SUCCESS'),
(335, 'airline.travel', '2021-04-20 02:43:22', 'AUTHENTICATION_SUCCESS'),
(336, 'cinema.andco', '2021-04-20 02:49:55', 'AUTHENTICATION_SUCCESS'),
(337, 'uni.versity', '2021-04-20 02:54:39', 'AUTHENTICATION_SUCCESS'),
(338, 'admin', '2021-04-20 03:00:50', 'AUTHENTICATION_SUCCESS'),
(339, 'uni.versity', '2021-04-20 03:15:26', 'AUTHENTICATION_SUCCESS'),
(340, 'cinema.andco', '2021-04-20 03:19:57', 'AUTHENTICATION_SUCCESS'),
(341, 'nova.spin', '2021-04-20 03:23:08', 'AUTHENTICATION_SUCCESS'),
(342, 'nova.spin', '2021-04-20 04:07:28', 'AUTHENTICATION_SUCCESS'),
(343, 'dreambean.cafe', '2021-04-20 04:15:54', 'AUTHENTICATION_SUCCESS'),
(344, 'airline.travel', '2021-04-20 04:17:33', 'AUTHENTICATION_SUCCESS'),
(345, 'cinema.andco', '2021-04-20 04:18:58', 'AUTHENTICATION_SUCCESS'),
(346, 'uni.versity', '2021-04-20 04:19:09', 'AUTHENTICATION_SUCCESS'),
(347, 'admin', '2021-04-20 04:19:36', 'AUTHENTICATION_SUCCESS'),
(348, 'nova.spin', '2021-04-20 04:45:36', 'AUTHENTICATION_SUCCESS'),
(349, 'nova.spin', '2021-04-20 05:07:51', 'AUTHENTICATION_SUCCESS'),
(350, 'admin', '2021-04-20 07:32:17', 'AUTHENTICATION_SUCCESS'),
(351, 'nova.spin', '2021-04-20 07:38:05', 'AUTHENTICATION_SUCCESS'),
(352, 'cinema.andco', '2021-04-20 08:12:43', 'AUTHENTICATION_SUCCESS'),
(353, 'admin', '2021-04-20 08:21:41', 'AUTHENTICATION_SUCCESS'),
(354, 'uni.versity', '2021-04-20 08:23:16', 'AUTHENTICATION_SUCCESS'),
(355, 'dreambean.cafe', '2021-04-20 08:31:06', 'AUTHENTICATION_SUCCESS'),
(356, 'airline.travel', '2021-04-20 08:31:52', 'AUTHENTICATION_SUCCESS'),
(357, 'cinema.andco', '2021-04-20 08:35:28', 'AUTHENTICATION_SUCCESS'),
(358, 'airline.travel', '2021-04-20 08:40:11', 'AUTHENTICATION_SUCCESS'),
(359, 'uni.versity', '2021-04-20 08:41:43', 'AUTHENTICATION_SUCCESS'),
(360, 'admin', '2021-04-20 08:42:02', 'AUTHENTICATION_SUCCESS'),
(361, 'ngoclinh22', '2021-04-20 09:33:47', 'AUTHENTICATION_SUCCESS'),
(362, 'cinema.andco', '2021-04-20 09:35:38', 'AUTHENTICATION_SUCCESS'),
(363, 'dreambean.cafe', '2021-04-20 19:19:00', 'AUTHENTICATION_SUCCESS'),
(364, 'admin', '2021-04-20 19:25:54', 'AUTHENTICATION_SUCCESS'),
(365, 'nova.spin', '2021-04-20 19:27:04', 'AUTHENTICATION_SUCCESS'),
(366, 'admin', '2021-04-20 19:29:30', 'AUTHENTICATION_SUCCESS'),
(367, 'airline.travel', '2021-04-20 19:31:27', 'AUTHENTICATION_SUCCESS'),
(368, 'cinema.andco', '2021-04-20 19:36:11', 'AUTHENTICATION_SUCCESS'),
(369, 'uni.versity', '2021-04-20 19:38:17', 'AUTHENTICATION_SUCCESS'),
(370, 'admin', '2021-04-20 19:53:22', 'AUTHENTICATION_SUCCESS'),
(371, 'huy17', '2021-04-20 20:19:16', 'AUTHENTICATION_SUCCESS'),
(372, 'admin', '2021-04-20 20:22:50', 'AUTHENTICATION_SUCCESS'),
(373, 'admin', '2021-04-20 20:31:50', 'AUTHENTICATION_SUCCESS'),
(374, 'nova.spin', '2021-04-20 20:32:08', 'AUTHENTICATION_SUCCESS'),
(375, 'nova.spin', '2021-04-20 20:33:42', 'AUTHENTICATION_SUCCESS'),
(376, 'admin', '2021-04-20 20:35:00', 'AUTHENTICATION_FAILURE'),
(377, 'admin', '2021-04-20 20:35:04', 'AUTHENTICATION_SUCCESS'),
(378, 'huy17', '2021-04-21 01:03:54', 'AUTHENTICATION_SUCCESS'),
(379, 'nova.spin', '2021-04-21 01:06:40', 'AUTHENTICATION_SUCCESS'),
(380, 'huy17', '2021-04-21 01:07:48', 'AUTHENTICATION_SUCCESS'),
(381, 'huy17', '2021-04-21 01:21:33', 'AUTHENTICATION_SUCCESS'),
(382, 'myhanh26', '2021-04-21 01:21:49', 'AUTHENTICATION_SUCCESS'),
(383, 'admin', '2021-04-21 01:27:18', 'AUTHENTICATION_SUCCESS'),
(384, 'admin', '2021-04-21 02:26:32', 'AUTHENTICATION_SUCCESS'),
(385, 'duy.khanh', '2021-04-21 02:28:00', 'AUTHENTICATION_SUCCESS'),
(386, 'airline.travel', '2021-04-21 02:35:32', 'AUTHENTICATION_SUCCESS'),
(387, 'nova.spin', '2021-04-21 02:36:04', 'AUTHENTICATION_SUCCESS'),
(388, 'dreambean.cafe', '2021-04-21 02:36:34', 'AUTHENTICATION_SUCCESS'),
(389, 'uni.versity', '2021-04-21 02:36:51', 'AUTHENTICATION_SUCCESS'),
(390, 'duy.khanh', '2021-04-21 02:37:38', 'AUTHENTICATION_SUCCESS');

-- --------------------------------------------------------

--
-- Table structure for table `persistent_audit_evt_data`
--

DROP TABLE IF EXISTS `persistent_audit_evt_data`;
CREATE TABLE IF NOT EXISTS `persistent_audit_evt_data` (
  `event_id` bigint(20) NOT NULL,
  `name` varchar(150) NOT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`event_id`,`name`),
  KEY `idx_persistent_audit_evt_data` (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `persistent_audit_evt_data`
--

INSERT INTO `persistent_audit_evt_data` (`event_id`, `name`, `value`) VALUES
(100, 'message', 'Bad credentials'),
(100, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(134, 'message', 'Bad credentials'),
(134, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(153, 'message', 'Bad credentials'),
(153, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(154, 'message', 'Bad credentials'),
(154, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(156, 'message', 'Bad credentials'),
(156, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(160, 'message', 'Bad credentials'),
(160, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(192, 'message', 'Bad credentials'),
(192, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(193, 'message', 'Bad credentials'),
(193, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(194, 'message', 'Bad credentials'),
(194, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(195, 'message', 'Bad credentials'),
(195, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(253, 'message', 'Bad credentials'),
(253, 'type', 'org.springframework.security.authentication.BadCredentialsException'),
(376, 'message', 'Bad credentials'),
(376, 'type', 'org.springframework.security.authentication.BadCredentialsException');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
CREATE TABLE IF NOT EXISTS `posts` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description` text,
  `content` text,
  `thumbnail` varchar(255) DEFAULT NULL COMMENT 'Link ảnh đại diện',
  `status` int(11) DEFAULT NULL COMMENT '0 - ẩn, 1 - hiện',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  `tag` text,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `slug`, `description`, `content`, `thumbnail`, `status`, `created_at`, `updated_at`, `deleted_at`, `user_id`, `category_id`, `tag`) VALUES
(6, '20 TEST  TIPS BEFORE TESTING ANY SOFTWARE', '20-tip-kiem-thu-nay-truoc-khi-test-bat-kỳ-phan-mem-nao-1617334283897', '20 TEST  TIPS BEFORE TESTING ANY SOFTWARE', '<p>1) Test Tip 1 - Learn how to analyze your test results thoroughly</p><p>Do not ignore any test results. The final test result might be ‘pass‘ or ‘fail’, but fixing the root cause of ‘fail’ will give you the solution for future problems. Tester will be respected if you not only record the errors but also provide solutions.</p><p><br></p><p>2) Test Tip 2 - Maximize the range</p><p>Learn to maximize your test coverage every time you test any application. The test guarantee covers 100% of the issues, which sounds impossible but does not mean that it is impossible, the tester can always try to get close to it.</p><p><br></p><p>3) Test Tip 3 - Split up the sections</p><p>To ensure maximum test coverage, divide the application under test (AUT) into smaller functional modules. Write test cases on individual unit modules. Also the tester can still break the modules into smaller parts.</p><p><br></p><p>Example: Let\'s say that you have divided your website application into modules and ‘accept user information \'is one of those modules. You can divide this \'User Information\' screen into smaller sections to write test cases: divide it into sections like UI testing, security testing, form functionality testing \'User Information\', etc.</p><p><br></p><p class=\"ql-align-justify\">Apply all test samples of all sizes, negative test and validation on input fields and write all such test cases for maximum coverage.</p><p><br></p>', 'image/bfd9d977-1a34-411e-a52c-45d6e9c80132download.jpeg', 1, '2021-04-01 20:31:24', NULL, NULL, 3, 26, NULL),
(7, '4 fastest basic Java learning tips for Beginner Developer', '4-tips-hoc-java-co-ban-nhanh-nhat-danh-cho-beginner-developer-1617334374787', 'I signed up for a Java online course for 1 month and learned Android for 2 months. After finishing the course, I built the first app in my career with the ideas that I have always cherished before. However, looking back on this process I have some experience to be able to work better when starting with basic Java.', '<p>Experiences to learn basic Java effectively</p><p>1. Don\'t be in a hurry to start learning basic Java</p><p>Many of you think that the faster you go, the faster you will get results. However, the truth is, you shouldn\'t be in a hurry to learn to code. Learning slowly will give you more time to acquire knowledge and master Java basics. Then you can speed up the learning process as quickly as possible once you have the basics. There are many beginners who only briefly learn about knowledge with some highlights, so that you can not grasp the overall picture of basic Java.</p><p><br></p><p>See also Java Language: <em>It\'s never too late to learn more about it</em></p><p><br></p><p>If you learn in a sketch like this, it will become something that prevents you from learning new programming languages ​​and only slows the learning process. So spend a lot of time studying in the beginning to speed up learning later. Basic Java is almost the most important knowledge that you need to make sure you do not make mistakes later and learn it faster later.</p><p><br></p><p><em>See more attractive Tester vacancies at TopDev</em></p><p><br></p><p>2. Focus on researching the mistakes you make</p><p class=\"ql-align-justify\">Errors always happen when you first learn to code, but many developers simply ignore the error code and write new. You really need to learn about faulty code, to be able to research and find out why the code is not running, where the problem is, so you can find the lines of code. best for your program.</p><p><br></p>', 'image/7042b940-b365-41f4-adb4-cfc49efa9b00photo-1533090161767-e6ffed986c88.jpeg', 1, '2021-04-01 20:32:54', NULL, NULL, 3, 25, NULL),
(8, 'Kinh nghiệm làm việc được tính ?', 'kinh-nghiem-lam-viec-duoc-tính-?-1617337445602', 'Chuyện là trong lúc rảnh việc ở công ty, anh em mình thường có văn hóa nghiên cứu công nghệ mới. Trong một lần nghiên cứu về NodeJS, vừa làm xong chương trình “Hello world” thì một người nói vui rằng “thế là biết NodeJS rồi đó, giờ có thể tự tin ghi vào CV là có kinh nghiệm làm việc với NodeJS rồi“. Cả team phá lên cười, vì ai cũng hiểu rằng chương trình “Hello world” là bài học vỡ lòng của developer chứ ai lại coi nó là kinh nghiệm làm việc.', '<h2>I. KINH NGHIỆM LÀM VIỆC CÓ ĐƯỢC TÍNH BẰNG SỐ NĂM?</h2><p>Số năm làm việc có lẽ là thước đo kinh nghiệm được sử dụng nhiều nhất. Bạn đồng ý với mình điều này chứ? Bởi chúng ta vẫn gặp các tin tuyển dụng dạng như “Tuyển dev trên 1 năm kinh nghiệm”, hay như trong CV chúng ta (cả mình) cũng thường viết rằng có X năm kinh nghiệm làm việc với công nghệ ABC nào đó.</p><p>Thế nhưng việc “cân đo” kinh nghiệm bằng số năm liệu có chính xác? Theo mình thì không, nó chỉ là cách&nbsp;<strong>nhanh nhất</strong>&nbsp;để mô tả kinh nghiệm của bạn tới đối phương mà thôi, chứ nó không thể hiện rõ kinh nghiệm của bạn.</p><p>Ví dụ anh A nói rằng có 2 năm kinh nghiệm code PHP, nhưng trong suốt 2 năm anh A chỉ quanh quẩn xây dựng mấy cái web demo, chỉ cần chạy được, chẳng bao giờ phải quan tâm tới việc tối ưu query database, tối ưu thời gian phản hồi, và lượng kiến thức anh sử dụng để code PHP trong 2 năm đó hoàn toàn có thể học được trong vòng 2 tháng. Còn anh B (anh Bình đó :D) mới chỉ có 1 năm kinh nghiệm code PHP, nhưng anh thường xuyên phải giải quyết bài toán “hóc búa”, deadline gấp, đòi hỏi tốc độ phản hồi nhanh nên anh học được thêm rất nhiều “thủ thuật” mới phục vụ cho việc code cũng như cách làm việc sao cho hiệu quả.</p><p>Vậy rõ ràng nếu lấy số năm làm thước đo kinh nghiệm thì anh A (2 năm KN) ăn đứt anh B (1 năm KN). Nhưng so sánh dưới góc độ lượng kinh nghiệm thực tế tích lũy được thì anh B lại ăn đứt anh A.</p><p>Trường hợp giống anh A như ví dụ trên mình gặp khá nhiều. Nhiều nhất là ở các bạn sinh viên mới ra trường. Bởi trong trường ĐH, các bạn ý được học lập trình từ năm 1, năm 2, vậy nghiễm nhiên sau khi ra trường là có 2 – 5 năm code. Có bạn còn tự tin nhận mình là senior developer, deal&nbsp;<a href=\"https://phambinh.net/bai-viet/nhung-tin-tuyen-dung-nghin-do-yeu-cau-gi-o-web-developer/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: rgb(77, 178, 236);\">lương $1000</a>&nbsp;nhưng khi phỏng vấn thì trượt ngay ở mấy câu hỏi dành cho junior developer.</p>', 'image/415c1f9d-c95e-4d4e-b440-7f4bbb7eeef8avata.jpg', 1, '2021-04-01 21:24:05', NULL, '2021-04-18 03:11:24', 3, 23, NULL),
(9, '14 Job Hunting Tips To Get the Job You Want', '14-job-hunting-tips-to-get-the-job-you-want-1618933937790', 'Job hunting tips to focus your search', '<p>Job hunting involves more than searching for open positions and sending your resume to employers. You also need to make sure you’re a good fit for the job, can catch the hiring manager’s attention and are well-prepared to answer interview questions. Here are 14 tips that you can use to improve your chances of finding the employment you desire:</p><ol><li>Know your career goals.</li><li>Plan ahead.</li><li>Get resume and cover letter help.</li><li>Use all job search resources.</li><li>Customize your resume.</li><li>Research companies.</li><li>Apply with confidence.</li><li>Schedule informational interviews.</li><li>Succeed in your current job.</li><li>Network regularly.</li><li>Identify examples of your skills.</li><li>Prepare for interviews.</li><li>Follow up.</li><li>Expand your skills.</li></ol><p><br></p><h3><strong>1. Know your career goals.</strong></h3><p>First, identify what type of career you want. This is particularly important for people entering the workforce for the first time or changing careers. Get recommendations from family, professors, a career coach or former coworkers. Make sure you have a clear and realistic goal, determine how you plan to reach it and note what qualifies you for that career path. These steps can help you narrow your job search to positions you are passionate about and will help you advance professionally.</p><p><br></p><h3><strong>2. Plan ahead.</strong></h3><p>Organize yourself and your schedule to search for jobs more efficiently. Determine how many hours per day or what days of the week you will dedicate to job hunting or networking. Make sure your resume and cover letter are up to date. Have a list of two to three references and their contact information ready to provide employers.</p><p>Create or update your profile on professional networking websites and create a spreadsheet to note the jobs you have applied for and the interviews you have received. You might also choose to set up a professional email account to keep your job search messages separate and organized from your personal ones. Completing these steps before starting your job search can make the process faster and easier.</p><p><br></p><h3><strong>3. Get resume and cover letter help.</strong></h3><p>Ask a friend, family member, coworker, career counselor or other professional to proofread your resume and cover letter for errors, as well as to offer advice. Some job seekers even choose to work with a professional resume-writing service or resource to save time and enhance your resume and cover letter.</p><p><br></p><h3><strong>4. Use all job search resources.</strong></h3><p>Rather than limiting yourself to manual online searches, take advantage of all job search options. This might include reaching out to companies or hiring managers in person, attending career fairs, searching social media or using a career counseling service. Use job search engines to find openings on job boards, company websites, professional associations and more. Sign up for daily or weekly job alerts by email.&nbsp;</p><p><br></p><h3><strong>5. Customize your resume.</strong></h3><p>Adapt your resume to each job you apply for. Study the job description to determine why you are a great fit. Then, add your skills, experience and measurable achievements that are relevant to that position. Hiring managers who look through many resumes should be able to read yours and quickly know you have the skills for the position.</p><p>To simplify this step, have templates of your resume and cover letter ready to customize. Keep key sections such as your education and contact information the same, but personalize your abilities or past job duties to fit the job you are applying for.&nbsp;</p><p><br></p><h3><strong>6. Research companies.</strong></h3><p>As you find job listings that interest you, research the hiring companies before applying. This can provide you with information about their company culture, benefits and salary range, products and services and work environment. Your research will tell you whether you want to or are qualified to work for that company. It also gives you valuable information you can reference in your cover letter or interview.</p><p><br></p><h3><strong>7. Apply with confidence.</strong></h3><p>Apply for jobs you are interested in even if you only meet some of their requirements. Depending on the position, employers might hire motivated individuals who learn quickly and provide them with skills training on the job. If you meet a portion of a job’s qualifications but believe you can still succeed in that role, apply. Include examples of your work ethic and ability to learn new skills in your resume. Emphasize how your goals align with those of the company.</p><p><br></p><h3><strong>8. Schedule informational interviews.</strong></h3><p>Informational interviews are informal conversations with professionals in an industry or a company you might want to work for. Find out whether you are a good fit for a job by requesting informational interviews with someone working in a field that interests you. Search for potential interview subjects on professional networking sites or member organizations.&nbsp;</p><p><br></p><h3><strong>9. Succeed in your current job.</strong></h3><p>If you are currently employed and looking for a better or different career, continue to perform your current job with positivity and commitment. Maintain good relationships with your coworkers and managers as long as you’re working with them. Your professional attitude and efforts can result in job references or opportunities in the future.</p><p><br></p><h3><strong>10. Network regularly.</strong></h3><p>Interact with people and develop professional contacts both online and in person. Start conversations with people at seminars, social events or appointments. Let them know you’re looking for a job or want to work in a certain industry. They might have connections or advice that can help you in your job search. You might also discover unlisted job openings or people might recommend you for future opportunities.&nbsp;</p><p><br></p><h3><strong>11. Identify examples of your skills.</strong></h3><p>People tend to remember engaging stories and examples over lists of facts. Plan ahead by identifying personal experiences or accomplishments that highlight the skills needed for a certain job. Add these to your cover letter and use them during networking opportunities or job interviews. Use the STAR method—situation, task, action and result—to tell your story effectively.</p><p><br></p><h3><strong>12. Prepare for interviews.</strong></h3><p>Research common interview questions, create responses for them and practice those responses before you get invited to an interview. Ask a friend or professional contact to do a practice interview with you. If you are well-prepared, you will be more confident and comfortable when you go into your next interview.</p><p><br></p><h3><strong>13. Follow up.</strong></h3><p>Immediately after a job interview, send the hiring manager a thank-you note. If you have not heard back from them after a week, follow up with a phone call or an email. When doing so, show your excitement and interest in the job. While you wait for a response, continue searching for and applying to jobs that interest you.</p><p><br></p><h3><strong>14. Expand your skills.</strong></h3><p>If you are just entering the workforce or starting a new career, you might need more training or experience to get a job. Consider getting an internship or volunteering with an organization in your desired industry while applying for jobs. Use these opportunities to expand your network of contacts or advance to a full-time position. You might also take online courses or attend workshops to build certain skills or learn technologies and processes relevant to your industry. Update your resume as you gain more experience or accomplishments.</p>', 'image/f3a423a5-6185-472c-8579-86168cf9b3bdSearch-Jobs-Tips1.jpg', 1, '2021-04-20 08:52:18', NULL, NULL, 3, 27, NULL),
(10, '7 Interview Tips That Will Help You Get Hired', '7-interview-tips-that-will-help-you-get-hired-1618934316464', '7 Interview Tips That Will Help You Get Hired', '<p>Even when you have gone on more interviews than you can count, job interviewing never seems to get any easier. With each&nbsp;job interview, you are meeting new people, selling yourself and your skills, and often getting the third degree about what you know or don\'t know. And, you need to stay&nbsp;upbeat and enthusiastic through it all. This can be a challenge, especially when you\'re interviewing for a job you would love to get hired for.</p><p class=\"ql-align-center\"><br></p><p>That said, there are ways to&nbsp;make a job interview feel much less stressful. Just&nbsp;a little preparation time&nbsp;can go a long way. The more time you take in advance to get ready, the more comfortable you\'ll feel during the actual interview.</p><p><br></p><p>Remember, though, that a job interview is not an exam: you don’t need to study for hours on end. Rather, you just need to do due diligence in&nbsp;researching the company, understand exactly what they are looking for in a new hire, and ensure that you’re able to discuss your experience and what makes you a great fit for the job.</p><p><br></p><p>Ultimately, the key to effective interviewing is to project confidence, stay positive, and be able to share examples of your&nbsp;workplace skills&nbsp;and your qualifications for the job. Take the time to work on your&nbsp;interview skills&nbsp;so that you can develop effective strategies to use in all of your interviews.</p><p>With some advance preparation, you\'ll be able to nail the interview and showcase the experience that makes you the ideal candidate for the company\'s next new employee.</p><p><br></p><h2>Interview Tips That Will Help You Get Hired</h2><p>Here are some job interview tips that can help you interview effectively. Proper preparation will help alleviate some of the stress involved in&nbsp;job interviews&nbsp;and position you for a positive and successful interviewing experience.</p><p><br></p><h2>1. Practice and Prepare</h2><p>Review the typical&nbsp;job interview questions employers ask and practice your answers. Strong answers are those that are specific but concise, drawing on&nbsp;concrete examples that highlight your skills&nbsp;and back up your resume.</p><p><br></p><p><br></p><p>Your answers should also emphasize the skills that are most important to the employer and relevant to the position. Be sure to review the job listing, make a list of the requirements, and&nbsp;match them to your experience.</p><p class=\"ql-align-center\"><br></p><p>Even the most well-prepared response will fall short if it does not answer the exact question you are being asked.</p><p>While it’s important to familiarize yourself with&nbsp;the&nbsp;best answers, it’s equally important to&nbsp;listen carefully&nbsp;during your interview in order to ensure your responses give the interviewer the information they are looking for.</p><p class=\"ql-align-center\"><br></p><p>Also, have a list of your own&nbsp;questions to ask the employer&nbsp;ready. In almost every interview, you’ll be asked if you have any questions for the interviewer. It is important to have at least one or two questions prepared in order to demonstrate your interest in the organization. Otherwise, you might come across as apathetic, which is a major turnoff for hiring managers.</p><p class=\"ql-align-center\"><br></p><h2>2. Develop a Connection With the Interviewer</h2><p>In addition to indicating what you know about the company, you should also try to develop a connection with your interviewer. Know the interviewer\'s name, and use it during the job interview. If you\'re not sure of the name, call and ask prior to the interview. And, listen very carefully during introductions.</p><p class=\"ql-align-center\"><br></p><p>If you’re prone to forgetting names, jot it down somewhere discreet, like in small letters at the bottom of your notepad.</p><p>Ultimately, building rapport and making a&nbsp;personal connection with your interviewer&nbsp;can up your chances of getting hired. People tend to hire candidates they like and who seems to be a good fit for the&nbsp;company\'s culture.</p><p><br></p><h2>3. Research the Company, and Show What You Know</h2><p>Do your homework and research the employer and the industry, so you are ready for the interview question, \"What do you know about this company?\" If this question is not asked, you should try to demonstrate what you know about the company on your own.</p><p>You can do this by tying what you’ve learned about the company into your responses. For example, you might say:</p><p>I noticed that when you implemented a new software system last year, your customer satisfaction ratings improved dramatically. I am well-versed in the latest technologies from my experience with developing software at ABC, and appreciate a company who strives to be a leader in its industry.</p><p>You should be able to find out a lot of information about the company’s history, mission and values, staff, culture, and recent successes on its website. If the company has a blog and a social media presence, they can be useful places to look, too.</p><p><br></p><h2>4. Get Ready Ahead of Time</h2><p>Don\'t wait until the last minute to&nbsp;pick out an interview outfit, print extra copies of your resume, or find a notepad and pen. Have one good interview outfit ready, so you can interview on short notice without having to worry about what to wear.</p><p>When you have an interview lined up, get everything ready the night before.</p><p>Not only will planning out everything (from what shoes you will wear, to how you’ll&nbsp;style your hair, to what time you will leave and how you’ll get there) buy you time in the morning, it can&nbsp;help reduce job search anxiety, and it will also save you from having to make decisions, which means you can use that brainpower for your interview.</p><p>Make sure your&nbsp;interview attire&nbsp;is neat, tidy, and appropriate for the type of firm you are interviewing with. Bring a nice portfolio with extra copies of your&nbsp;resume. Include a pen and paper for note-taking.</p><p>If you\'re&nbsp;interviewing virtually, have all the technology set and ready in advance. Do a trial run to be sure everything is working properly, and you\'re comfortable with it.</p><p><br></p><h2>5. Be on Time (That Means Early)</h2><p>Be on time for the interview. On time means five to ten minutes early. If need be, drive to the interview location ahead of time so you know exactly where you are going and how long it will take to get there.</p><p>Take into account the time of your interview so you can adjust for local traffic patterns at that time. Give yourself a few extra minutes to visit the restroom, check your outfit, and calm your nerves.</p><p><br></p><h2>6. Try to Stay Calm</h2><p>During the job interview, try to relax and stay as calm as possible. Remember that your&nbsp;body language says as much about you&nbsp;as your answers to the questions. Proper preparation will allow you to exude confidence:</p><p>-As you answer questions, maintain eye contact with the interviewer.</p><p>-Be sure to pay attention to the question so that you don’t forget it, and listen to the entire question (using&nbsp;active listening) before you answer, so you know exactly what the interviewer is asking.</p><p>-Avoid cutting off the interviewer at all costs, especially when he or she is asking questions.</p><p>If you need to take a moment to think about your answer, that’s totally fine, and is a better option than starting out with multiple “ums” or “uhs.”</p><p><br></p><h2>7. Follow-Up After the Interview</h2><p>Always follow up with a&nbsp;thank-you&nbsp;note reiterating your interest in the position. You can also include any details you may have forgotten to mention during your interview.</p><p>If you interview with multiple people from the same company, send each one a personal note. Send your thank-you email within 24 hours of your interview.</p><p>It\'s worth the extra effort. A Robert Half survey reports that 80% of hiring managers said it was helpful or somewhat helpful to receive a thank-you note after an interview.</p>', 'image/43571424-f72e-4ae2-bc3f-cfa49e73f68epost_thumbnail.jpg', 1, '2021-04-20 08:58:37', NULL, NULL, 3, 27, NULL),
(11, '10 Personal Issues No One at Work Needs to Hear', '10-personal-issues-no-one-at-work-needs-to-hear-1618934478191', '10 Personal Issues No One at Work Needs to Hear', '<h2>1. Legal Troubles</h2><p>However unfair or inaccurate it may be, your ongoing legal issues imply two things to employers: You have poor judgment, and a litigious personality. Whether you\'re on the right side of the law or the wrong side, it\'s good policy to keep legal battles private.</p><p><br></p><h2>2. Relationship Disasters</h2><p>Messy divorce? Cheating boyfriend? Breakup that you just can\'t seem to get over? They may be part of life, but not part of appropriate workplace conversation. Rehashing your relationship disasters communicates that you have difficult time separating your personal and professional worlds — and that\'s a career-limiting trait.</p><p><br></p><h2>3. Previous Employment Drama</h2><p>No surprises here. Skip the stories about the boss who hated you, the coworker who stole your promotion, the office party that got out of hand, or the six-week strike you initiated. Employers tend to frown upon staff members with dramatic work histories, and they\'re rightfully concerned that certain types of employment issues might be contagious.</p><p><br></p><h2>4. Sex Life</h2><p>Tempted to break up a boring afternoon at the office with a tale of romantic misadventure? Abstain. Save the intimate details of your life for close friends, a night out with the guys or girls, or the journal in your nightstand. Beyond the TMI factor, you never know who\'s listening to your story or sharing it at the water cooler. Those amorous tales could be disastrous for your career.</p><p><br></p><h2>5. Family Crises</h2><p>Never-ending family issues suggest that you have a difficult time managing your personal life and setting clear boundaries — two qualities directly related to professionalism and productivity. Granted, nearly everyone deals with a sick kid or childcare challenges from time to time. Just make sure controlling the chaos at home doesn\'t become part of your daily work schedule.</p><p><br></p><h2>6. Money Matters</h2><p>Sure, we\'ve all had a lean month here and there, but broadcasting persistent money problems at work won\'t get you very far. Besides making employers question your discipline and ability to manage budgets, chronic money issues hint that you may soon be looking for a higher-paying job.</p><p><br></p><h2>7. Political Positions</h2><p>Politics is a divisive topic, especially during a contentious election cycle. Though everyone has strong opinions, it\'s smart strategy to stay neutral from 9-to-5. We\'re all human; sharing partisan views can directly or indirectly offend someone and limit your prospects for advancement.</p><p><br></p><h2>8. Religious Views</h2><p>Like politics, religion is a hot-button topic. It\'s extremely easy for a casual comment to negatively affect our professional opportunities. Assume nothing about the religious beliefs of those around you, exercise a high level of political correctness, and keep your personal beliefs out of the workplace.</p><p><br></p><h2>9. Health Problems</h2><p>Ideally, every workplace would be filled with compassionate team members genuinely concerned about each other\'s well-being. Sadly, that\'s not the case. Discussing ongoing medical issues at work may garner some sympathy and even a more flexible schedule. Still, it comes with its own set of risks. Managers tend to offer new projects and promotions to folks who they believe can handle the extra responsibility, workload, and associated stress.</p><p><br></p><h2>10. Obsessions</h2><p>Revealing a bit about ourselves and our personal interests can help build stronger work relationships. Still, there\'s a fine line between mentioning a hobby and endlessly talking about a time-consuming obsession. Being too focused on personal pursuits may lead employers to think that your career is a third or fourth priority.</p>', 'image/39ee4e77-f014-4b90-8377-b1f5a70ec84aiStock_93735987_LARGE.jpg', 1, '2021-04-20 09:01:18', NULL, NULL, 3, 28, NULL),
(12, '8 Negotiating Skills Everyone Should Master', '8-negotiating-skills-everyone-should-master-1618934676635', 'Knowing how to negotiate effectively can save you (and make you!) big bucks over a lifetime', '<h2>1. Confidence</h2><p>The relationship between buyers and sellers has been rigidly established from years of training and a culture where the price tag is almost always the last word. It takes a bit of fortitude to enter a conversation with someone over price, and try to get a better deal. If your confidence is shaky, start with low-stakes purchases at garage sales and flea markets, then work your way up to more significant purchases like cars or a house.</p><p><br></p><h2>2. Speed</h2><p>Sellers want to move merchandise and they often embrace a \"bird in the hand\" philosophy to making a deal. With that in mind, sometimes simply being first is all the advantage you need. Keeping your ear to the ground, combing the classifieds, and being the first in line puts you in a position to beat the competition and walk away with great bargains.</p><p><br></p><h2>3. Sociability</h2><p>Great deals can be made between adversaries, but not between enemies. No matter what side of the negotiating table you\'re on, the ability to establish a rapport and keep things friendly and light will serve you well. Remember, negotiation is more of a dance than a death match. The best deals are those where both parties get to walk away relatively pleased.</p><p><br></p><h2>4. The Poker Face</h2><p>Imagine you\'ve found the perfect antique hutch for a song at a local flea market. Congratulations. Now keep your emotions in check and start haggling. Remember, part of your leverage is not letting your enthusiasm show and subtly implying you have other options available. Admittedly, this is a fine line to walk and getting it right is more art than science. The key is to push just hard enough to sweeten the deal, but not so hard that it turns sour.</p><p><br></p><h2>5. Patience</h2><p>Negotiating can sometimes be awkward, especially for those new to the sport. Stay calm and try not to make the first offer. Why? Because if you\'re a seller, that price may be significantly less than the buyer was willing to pay. And if you\'re the buyer, that price may be significantly more than the seller was hoping for. I know, it sounds like a twisted game of chicken, but the person who throws out the first number is usually at a tactical disadvantage.</p><p><br></p><h2>6. Creativity</h2><p>Amazing bargains come in all shapes, so don\'t get hung up on just one way of striking a deal. Try bundling multiple items together for a better value or bartering goods for services and vice versa. Effective negotiation is a creative enterprise, so look for novel ways to make a great deal happen.</p><p><br></p><h2>7. Preparedness</h2><p>Successful negotiators may seem casual about it, but they\'re anything but. They\'ve done their homework, know what an item is worth, know what they\'re willing pay and — most importantly — have cash in-hand to make a deal.</p><p>If you\'re negotiating the price of a gently used dining room set for example, avoid dropping this infamous line: \"Sounds good, but I didn\'t bring any cash with me. Can I stop back tomorrow?\" An unprepared buyer is simply being a flirt — one of the&nbsp;worst types of buyers&nbsp;for serious sellers. Usually, not being able to pull the trigger on a deal means all other potential offers are still in play (and you\'ve wasted your time and the seller\'s time).</p><p><br></p><h2>8. Determination</h2><p>Negotiating can sometimes be a drawn-out process, so a little determination goes a long way. As long as both parties are engaged, keep the conversation going and try to find a middle ground that works for both parties.</p><p>A recent deal my mom made illustrates this point perfectly. In the market for a larger and more comfortable car, my 78-year-old mother negotiated at a local dealership for six full hours (seriously... the sales staff ordered lunch for her). Ultimately, she got the deal she wanted. Remember, if the terms aren\'t right, be willing to walk away (or in the case of my mom, stay for lunch, get your second wind, and keep on tryin\').</p>', 'image/62d69288-8f6c-46f8-b5bf-846f7a5d7a20iStock_88219469_LARGE.jpg', 1, '2021-04-20 09:04:37', NULL, NULL, 3, 28, NULL),
(13, '10 Small Gestures That Go a Long Way at Work', '10-small-gestures-that-go-a-long-way-at-work-1618934805475', '10 Small Gestures That Go a Long Way at Work', '<h2>1. Tidy Up</h2><p>Does the break room at your office look like a scene from&nbsp;<span style=\"color: rgb(0, 51, 102);\">Animal House</span>? Take a few minutes to wipe out the microwave, empty the dishwasher, or replenish supplies. If you\'re brave enough to dig deep into the refrigerator, send an email notifying everyone well in advance and provide a clear deadline for claiming any unmarked items. (People get very attached to the science projects they\'ve got growing in there.)</p><p><br></p><h2>2. Feed the Machine</h2><p>My favorite good deed is to make sure there\'s enough copy paper on hand and topping off the paper trays. The next person with an urgent, large-scale copy job will appreciate interruption-free — and panic-free — copying.</p><p><br></p><h2>3. Brew It Up</h2><p>Let\'s all agree — the world runs on coffee. Help everyone start their day off right by keeping this magic elixir flowing freely. Brew a fresh pot right before a big meeting or when you notice the supply running dangerously low. You\'ll be an instant hero and it might inspire some copycat kindness. Also, bringing in treats or doughnuts can give your coworkers a morning boost or turn the day around for someone who couldn\'t grab breakfast before dashing out the door.</p><p><br></p><h2>4. Raise Your Hand</h2><p>If your employer participates in charitable giving, volunteer to be the committee point person and spearhead your company\'s involvement with United Way, Habitat For Humanity, JDRF, or other worthy causes. Besides providing a valuable service, volunteering builds teamwork and taking a leadership role in volunteer activities can enrich your resume and expand your professional network.</p><p><br></p><h2>5. Get Social</h2><p>Help your coworkers blow off some steam and&nbsp;<span style=\"color: rgb(0, 51, 102);\">avoid career burnout</span>&nbsp;by organizing a group get-together. Work with management to schedule an off-site team building event, a potluck, or an end-of-the-quarter celebration. Remember, keep things light and make it fun.</p><p><br></p><h2>6. Offer Kudos</h2><p>Public acknowledgement of a job well-done is a simple, free, and powerful motivator. Send an email to your team as a shout-out to a colleague who pulled of a mini-miracle. Take it a step further by giving the coworker a stellar LinkedIn recommendation. Besides being the right thing to do, it\'s one of many&nbsp;<span style=\"color: rgb(0, 51, 102);\">ways to act like a leader</span>&nbsp;and move your career forward.</p><p><br></p><h2>7. Be the Minute Man (Or Woman)</h2><p>Volunteer to take the minutes at the next company-wide or team meeting. It\'ll provide a welcome respite for someone and showcase your listening, organization, and communication skills.</p><p><br></p><h2>8. Offer to \"Uber\"</h2><p>Channel your inner chauffeur. The next time your team is scheduled to attend an off-site meeting or event, offer to drive. The commute will spark conversations and relieve a few people of the stress of paying for parking, fighting traffic, or walking long distances.</p><p><br></p><h2>9. Give a Small Gift</h2><p>Did a coworker pitch in to help you get a difficult project out the door on time? Show your appreciation with a $5.00 gift card to their favorite coffee or dessert shop. Remember, it\'s not the amount you give, but the gesture that counts.</p><p><br></p><h2>10. Express Interest</h2><p>In the busyness of business, it\'s easy to forget that we\'re all human. Though some people prefer to draw a clear line between their professional and personal lives, most appreciate a little blurring of the two. Peek over that cube wall and ask how a vacation went, talk about a shared hobby, or briefly share a funny story. A little interest helps pass the time and makes work feel... well, less like work.</p>', 'image/c87f1110-5f58-4058-a46c-d5b956a51bd5iStock_000081177621_Large.jpg', 1, '2021-04-20 09:06:46', NULL, NULL, 3, 28, NULL),
(14, 'a', 'a-1618975993417', 'a', '<p>e</p>', NULL, 0, '2021-04-20 20:33:13', NULL, '2021-04-20 20:33:24', 3, 28, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
CREATE TABLE IF NOT EXISTS `profiles` (
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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `cv_id` (`cv_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `skill`, `experience`, `interests`, `job_expect`, `description`, `qualification`, `english_skill`, `cv_id`, `job_type`, `salary_expect`, `created_at`, `updated_at`, `deleted_at`, `user_id`) VALUES
(2, 'html,css,js', 2, 'Coder', 'LTV', 'Giỏi Code', 3, 2, 9, 2, 0, '2021-04-01 20:44:53', '2021-04-17 09:50:04', NULL, 17),
(3, NULL, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2021-04-03 18:06:40', '2021-04-03 18:06:40', NULL, 3),
(4, 'd', 2, NULL, NULL, NULL, NULL, NULL, 5, NULL, NULL, '2021-04-03 18:57:35', '2021-04-03 19:37:25', NULL, 22),
(5, 'Human Resource, Basic English Communication, Office Informatics', 7, 'Reading, Watching Movies, Photographing, Volunteering', 'Quality Control Manager', NULL, 3, 3, 29, 1, 4, '2021-04-18 05:46:59', '2021-04-20 09:34:46', NULL, 29),
(6, 'Photoshop, Corel, Design website and logos', 5, 'Drawing, Playing Sports, Volunteering, Traveling', 'Graphic Designer', NULL, 3, 3, 11, 1, 4, '2021-04-18 05:56:59', '2021-04-18 05:56:59', NULL, 30),
(7, 'Office Informatics, English Communication', 8, 'Listening to Music, Watching Movies, Reading Books', 'Quality Control Manager', NULL, 3, 3, 12, 1, 4, '2021-04-18 06:16:51', '2021-04-18 06:16:51', NULL, 31),
(8, 'Bartender, Team Work, Creative', 7, 'Reading Books, Traveling', NULL, NULL, 3, 2, 14, 1, 3, '2021-04-18 06:21:01', '2021-04-18 06:21:12', NULL, 32),
(9, 'Team Work, Decorating Food, Creative, Communication Skill', 8, 'Creating meals, Reading, Traveling', 'Commis', NULL, 3, 2, 16, 1, 3, '2021-04-18 06:26:31', '2021-04-18 06:27:39', NULL, 33),
(10, 'English Communication, Chinnese Communication, Office Informatics, Working under High Pressure', 4, 'Traveling, Cooking, Reading', NULL, NULL, 3, 3, 17, 1, 3, '2021-04-18 06:30:16', '2021-04-18 06:30:16', NULL, 34),
(11, 'Comunication Skill, English, Working under High Pressure', 8, 'Business, Volunteering, Traveling', 'Supervisor, Manager', NULL, 5, 4, 18, 1, 4, '2021-04-18 06:34:18', '2021-04-18 06:34:18', NULL, 35),
(12, 'Communication Skill, Solving Problems, Office Informatics, Working under High Pressure', 5, 'Traveling', 'Airline Representative', NULL, 3, 3, 19, 1, 4, '2021-04-18 06:37:35', '2021-04-18 06:37:35', NULL, 36),
(13, 'Office Informatics, Team Work, Communication Skill, Researching', 7, 'Traveling, Repairing, Watching Scientific Movies', NULL, NULL, 3, 3, 20, 1, 5, '2021-04-18 06:41:49', '2021-04-18 06:41:49', NULL, 37),
(14, 'English, Office Informatics, Team Work', 1, NULL, NULL, NULL, 2, 3, 21, 1, 3, '2021-04-18 06:47:25', '2021-04-18 06:47:25', NULL, 38),
(15, 'Office Informatics, Communication Skill, Planning, Meeting Organizaing', 3, NULL, NULL, NULL, 3, 3, 22, 1, 4, '2021-04-18 06:52:12', '2021-04-18 06:52:12', NULL, 39),
(16, 'Office Informatics, English Communication, Presentation, Planning, Organizing', 3, NULL, NULL, NULL, 3, 3, 24, 1, 3, '2021-04-18 06:59:54', '2021-04-18 06:59:57', NULL, 40),
(17, 'Library Organizing, Information Organizing, Soft Skills', 6, 'Cooking, Reading', NULL, NULL, 3, 5, 25, 1, 5, '2021-04-18 07:04:10', '2021-04-18 07:04:10', NULL, 41),
(18, NULL, NULL, NULL, NULL, NULL, 3, 5, 26, 1, 4, '2021-04-18 07:06:46', '2021-04-18 07:06:46', NULL, 42),
(19, 'English, Time Managing, Office Informatics, Class Organizing', 5, 'Traveling, Reading English News', NULL, NULL, 3, 5, 27, 1, 5, '2021-04-18 07:11:37', '2021-04-18 07:11:37', NULL, 43),
(21, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 31, NULL, NULL, '2021-04-21 02:32:45', '2021-04-21 02:32:45', NULL, 46);

-- --------------------------------------------------------

--
-- Table structure for table `profile_careers`
--

DROP TABLE IF EXISTS `profile_careers`;
CREATE TABLE IF NOT EXISTS `profile_careers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `profile_id` bigint(20) NOT NULL,
  `career_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `provinces`
--

DROP TABLE IF EXISTS `provinces`;
CREATE TABLE IF NOT EXISTS `provinces` (
  `id` varchar(5) CHARACTER SET utf8 NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `type` varchar(30) CHARACTER SET utf8 NOT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `provinces`
--

INSERT INTO `provinces` (`id`, `name`, `type`) VALUES
('01', 'Hanoi City', 'Central City'),
('02', 'Ha Giang Province', 'Province'),
('04', 'Cao Bang Province', 'Province'),
('06', 'Bac Kan province', 'Province'),
('08', 'Tuyen Quang Province', 'Province'),
('10', 'Lao Cai Province', 'Province'),
('11', 'Dien Bien Province', 'Province'),
('12', 'Lai Chau Province', 'Province'),
('14', 'Son La Province', 'Province'),
('15', 'Yen Bai Province', 'Province'),
('17', 'Hoa Binh Province', 'Province'),
('19', 'Thai Nguyen Province', 'Province'),
('20', 'Lang Son Province', 'Province'),
('22', 'Quang Ninh Province', 'Province'),
('24', 'Bac Giang Province', 'Province'),
('25', 'Phu Tho Province', 'Province'),
('26', 'Vinh Phuc Province', 'Province'),
('27', 'Bac Ninh Province', 'Province'),
('30', 'Hai Duong Province', 'Province'),
('31', 'Hai Phong City', 'Central City'),
('33', 'Hung Yen Province', 'Province'),
('34', 'Thai Binh Province', 'Province'),
('35', 'Ha Nam Province', 'Province'),
('36', 'Nam Dinh Province', 'Province'),
('37', 'Ninh Binh Province', 'Province'),
('38', 'Thanh Hoa Province', 'Province'),
('40', 'Nghe An Province', 'Province'),
('42', 'Ha Tinh Province', 'Province'),
('44', 'Quang Binh Province', 'Province'),
('45', 'Quang Tri Province', 'Province'),
('46', 'Thua Thien Hue Province', 'Province'),
('48', 'Danang City', 'Central City'),
('49', 'Quang Nam Province', 'Province'),
('51', 'Quang Ngai Province', 'Province'),
('52', 'Binh Dinh Province', 'Province'),
('54', 'Phu Yen Province', 'Province'),
('56', 'Khanh Hoa Province', 'Province'),
('58', 'Ninh Thuan Province', 'Province'),
('60', 'Binh Thuan Province', 'Province'),
('62', 'Kon Tum Province', 'Province'),
('64', 'Gia Lai Province', 'Province'),
('66', 'Dak Lak Province', 'Province'),
('67', 'Dak Nong Province', 'Province'),
('68', 'Lam Dong Province', 'Province'),
('70', 'Binh Phuoc Province', 'Province'),
('72', 'Tay Ninh Province', 'Province'),
('74', 'Binh Duong Province', 'Province'),
('75', 'Dong Nai Province', 'Province'),
('77', 'Ba Ria - Vung Tau Province', 'Province'),
('79', 'Ho Chi Minh City', 'Central City'),
('80', 'Long An Province', 'Province'),
('82', 'Tien Giang Province', 'Province'),
('83', 'Ben Tre Province', 'Province'),
('84', 'Tra Vinh Province', 'Province'),
('86', 'Vinh Long Province', 'Province'),
('87', 'Dong Thap Province', 'Province'),
('89', 'An Giang Province', 'Province'),
('91', 'Kien Giang Province', 'Province'),
('92', 'Can Tho City', 'Central City'),
('93', 'Hau Giang Province', 'Province'),
('94', 'Soc Trang Province', 'Province'),
('95', 'Bac Lieu Province', 'Province'),
('96', 'Cà Mau Province', 'Province');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
CREATE TABLE IF NOT EXISTS `questions` (
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
  KEY `test_id` (`test_id`)
) ENGINE=InnoDB AUTO_INCREMENT=172 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `question_title`, `correct_answer`, `answer_one`, `answer_two`, `answer_three`, `answer_four`, `created_at`, `updated_at`, `deleted_at`, `test_id`) VALUES
(18, 'Lập trình hướng đối tượng là gì ?', 2, 'Là lập trình hướng đối tượng 1', 'Là lập trình hướng đối tượng 2', 'Là lập trình hướng đối tượng 3', 'Là lập trình hướng đối tượng 4', '2021-04-01 20:02:55', NULL, '2021-04-18 20:22:18', 9),
(19, 'Có mấy tính chất trong lập trình hướng đối tượng', 4, '1', '2', '3', '4', '2021-04-01 20:02:55', NULL, '2021-04-18 20:22:20', 9),
(20, 'Kiểm thử phần mềm là gì ?', 1, 'Là kiểm thử phần mềm A', 'Là kiểm thử phần mềm B', 'Là kiểm thử phần mềm C', 'Là kiểm thử phần mềm D', '2021-04-01 20:06:05', NULL, '2021-04-18 20:23:50', 10),
(21, 'Test case là gì ?', 1, 'Là A', 'Là B', 'Là C', 'Là D', '2021-04-01 20:06:05', NULL, '2021-04-18 20:23:54', 10),
(22, 'c1', 1, '2', '3', '4', '5', '2021-04-12 07:27:58', NULL, '2021-04-12 07:29:42', 11),
(23, 'c2', 1, 'a', 'b', 'c', 'd', '2021-04-12 07:27:58', NULL, '2021-04-12 07:31:41', 11),
(24, 'c3', 1, '2', '3', '4', '5', '2021-04-12 07:31:54', '2021-04-18 20:25:19', NULL, 11),
(25, 'The children are seated on the carpet', 1, 'Standard English', 'Non-Standard English', NULL, NULL, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 12),
(26, 'I ain\'t got no money', 2, 'Standard English', 'Non-Standard English', NULL, NULL, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 12),
(27, 'May I order some drinks, please?', 1, 'Standard English', 'Non-Standard English', NULL, NULL, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 12),
(28, 'You were about ten years old at the time', 1, 'Standard English', 'Non-Standard English', NULL, NULL, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 12),
(29, 'You better shove off, mate', 2, 'Standard English', 'Non-Standard English', NULL, NULL, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 12),
(30, 'Aghast, he looked at the twins', 1, 'Standard English', 'Non-Standard English', NULL, NULL, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 12),
(31, 'Both spoken and written language are produced with an audience in mind', 1, 'True', 'False', NULL, NULL, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 12),
(32, 'Spaces between words are a feature of written, rather than spoken English', 1, 'True', 'False', NULL, NULL, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 12),
(33, 'Written and spoken language can often serve the same purpose', 1, 'True', 'False', NULL, NULL, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 12),
(34, 'Cohesion is a feature of spoken, rather than written, language', 2, 'True', 'False', NULL, NULL, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 12),
(35, 'For how long will librarian hold the reserved book for me?', 1, 'One day', 'One week', 'One month', 'Until I pick it up', '2021-04-18 08:59:28', '2021-04-20 08:22:58', NULL, 13),
(36, 'Eating and drinking is NOT allowed in the library', 1, 'True', 'False', NULL, NULL, '2021-04-18 08:59:28', '2021-04-20 08:22:58', NULL, 13),
(37, 'When I want a book that is issued to someone else at the moment, how do I ensure I will get it?', 3, 'I will just wish for it', 'I will find out from my friends who has it and then take it from that person', 'I will reserve the book and the librarian will hold it for me', 'I will just wait for it to come back', '2021-04-18 08:59:28', '2021-04-20 08:22:58', NULL, 13),
(38, 'Some books cannot be taken out of the library. These are dictionaries, encyclopaedias, etc. But what does the library call such kind of books?', 3, 'Forbidden books', 'Restricted books', 'Reference books', 'Non-checkout books', '2021-04-18 08:59:28', '2021-04-20 08:22:58', NULL, 13),
(39, 'How many layers is the TCP / IP protocol stack divided into?', 1, '4', '5', '6', '7', '2021-04-18 09:36:19', '2021-04-18 09:46:34', NULL, 14),
(40, 'The set of rules and conventions that require network elements to be followed when participating in communication activities is called:', 2, 'Topology', 'Protocol', 'Process', 'Environment', '2021-04-18 09:36:19', '2021-04-18 09:46:34', NULL, 14),
(41, 'The degree of attenuation depends most on', 1, 'Transmission range', 'Generator capacity', 'Receiver capacity', 'Type of signal transmitted', '2021-04-18 09:36:19', '2021-04-18 09:46:34', NULL, 14),
(42, 'Optical fiber loss is the phenomenon of partial light', 1, 'Amplified', 'Absorbed or refracted', 'Transformed to electrical signals', 'Phase reversal', '2021-04-18 09:36:19', '2021-04-18 09:46:34', NULL, 14),
(43, 'Radio transmission uses:', 1, 'Coax cable for transmission', 'No wires can also transmit', 'Fiber optic cable for transmission', 'Twisted pair copper cable for transmission', '2021-04-18 09:36:19', '2021-04-18 09:46:34', NULL, 14),
(44, 'UDP is the communication protocol ...', 3, 'Non-connection and reliable', 'Connection direction and reliable', 'Non-connection and unreliable', 'Connection direction and unreliable', '2021-04-18 09:36:19', '2021-04-18 09:46:34', NULL, 14),
(45, 'One important factor that limits the use of radio transmissions is:', 3, 'Cable cost', 'Cable length', 'Frequency resources', 'Complex system', '2021-04-18 09:36:19', '2021-04-18 09:46:34', NULL, 14),
(46, 'To counteract the phenomenon of loss, we often use', 1, 'Transmitter', 'Receiver', 'Repeater', 'Filter', '2021-04-18 09:36:19', '2021-04-18 09:46:34', NULL, 14),
(47, 'Which network configuration has information nodes connected to the control center?', 1, 'Star', 'Ring', 'BUS', NULL, '2021-04-18 09:36:19', '2021-04-18 09:46:34', NULL, 14),
(48, 'Switching digital channels includes the following types', 1, 'Switching channels and switching IP', 'Switching channels and switching S space', 'Channel switching and packet switching', 'T digital time switching and S digital space switching', '2021-04-18 09:46:34', NULL, NULL, 14),
(49, 'Under the provisions of Circular 17, airfield means:', 1, 'Take-off and rolling areas of aircraft', 'The takeoff and rolling areas of the aircraft and the terminal', 'The section of airports used for aircraft to take off, land and roll, including takeoff zones and aircraft parking lots', 'Airport section used for aircraft takeoffs, landings, taxiways, aprons and terminals', '2021-04-18 09:59:36', '2021-04-20 04:17:56', NULL, 15),
(50, 'Under the provisions of Circular 17, where is the waiting position for the runway (holding position)?', 1, 'A waiting position to take off', 'Selected location on runway', 'Selected positions on runways, taxiways, and aprons', 'Selected location on the taxiway or critical area of the ILS / MLS equipment system', '2021-04-18 09:59:36', '2021-04-20 04:17:56', NULL, 15),
(51, 'According to Circular 17, Aicraft Safety Area on the Parking:', 4, 'A restricted area within the boundary with black lines around the parking area of the aircraft', 'Is a restricted area within the boundary with yellow lines around the parking area of the aircraft', 'Is a restricted area within the boundary with red lines, black borders around the parking area of the aircraft', 'Is a restricted area located within the boundary with red lines around the parking area of the aircraft', '2021-04-18 09:59:36', '2021-04-20 04:17:56', NULL, 15),
(52, 'According to the provisions of Circular 17, which agencies are required to issue a certificate of technical eligibility for specialized aviation equipment and means to be put into operation in Vietnam?', 2, 'Airport operators', 'Vietnam Aviation Department', 'Department of Aviation', 'Ministry of Transportation', '2021-04-18 09:59:36', '2021-04-20 04:17:56', NULL, 15),
(53, 'According to the provisions of Circular 17, how is the inspection cycle for specialized aviation vehicles?', 2, 'Specialized aviation means are inspected every 12 months from the date of license plate issuance or from the previous inspection', 'Unused vehicles, the first inspection cycle is 24 months from the date of issuance of license plates; Used vehicles, the inspection cycle is 12 months from the date of issuance of the license plate or the previous inspection', 'Depending on the service frequency of that specialized aviation vehicle', 'Depending on each type of specialized aviation vehicle to define a specific inspection cycle for each type', '2021-04-18 09:59:36', '2021-04-20 04:17:56', NULL, 15),
(54, 'According to the provisions of Circular 17, which agencies and units are responsible for the inspection of technical safety and quality, and environmental protection of specialized aviation vehicles?', 1, 'The Civil Aviation Administration of Vietnam organizes the implementation or appoints a qualified organization to perform it', 'Vietnam Registry Department organize the implementation or appoint a qualified organization to perform', 'Safety, technical and environmental inspection council of the operator or technical inspection facility suitable to the type of vehicle operating in restricted areas of airports and aerodromes', 'Both A and B', '2021-04-18 16:23:58', '2021-04-20 04:17:56', NULL, 15),
(55, 'Under the provisions of Circular 17, in which case is the aviation vehicle or airport suspended from operating?', 1, 'Failure to inspect or fail to meet operational requirements according to vehicle technical documentation or cause aviation accidents', 'Failure to meet safety, technical and environmental standards', 'Cause air incidents and accidents', 'A and B', '2021-04-18 16:23:58', '2021-04-20 04:17:56', NULL, 15),
(56, 'Under the provisions of Circular 17, specifications for license plates of specialized vehicles operating at airports and aerodromes, the first number indicating the vehicle operator, the number 2 in the license plate is the vehicle of which agency?', 2, 'Vietnam Aviation Corporation', 'Airlines', 'Airport operators', 'Air service providers', '2021-04-18 16:23:58', '2021-04-20 04:17:56', NULL, 15),
(57, 'Under the provisions of Circular 17, specifications for license plates of specialized vehicles operating at airports and aerodromes, the first number indicating the vehicle operator: Number 1 in the license plate is the vehicle of which agencies?', 3, 'Vietnam Aviation Corporation', 'Airlines', 'Airport operators', 'Air service providers', '2021-04-18 16:23:58', '2021-04-20 04:17:56', NULL, 15),
(58, 'Under the provisions of Circular 17, the operation of vehicles operating in restricted areas of airports and airfields must comply with whose standard operating procedures?', 2, 'Manufacturers, operators of vehicles, ICAO\'s manuals to ensure safety during operation', 'The manufacturer, the vehicle operator, the IATA manuals to ensure safety during operation', 'Airport and airport operators, to ensure safety during operation', 'Manufacturers, operators of airports and aerodromes, and instructional documents to ensure safety during operation', '2021-04-18 16:23:58', '2021-04-20 04:17:56', NULL, 15),
(59, 'The default colors in Photoshop (Foreground / background) are:', 3, 'White/ Black', 'White / Transparent', 'Black/ White', 'Black/ Transparent', '2021-04-18 16:49:08', NULL, NULL, 16),
(60, 'The File \\\\ Open command allows you to open images in a format', 4, 'JPG', 'GIF', 'PSD', 'All formats above', '2021-04-18 16:49:08', NULL, NULL, 16),
(61, 'The Move Tool has the effect:', 1, 'Copy images', 'To move and align objects on layers', 'Create a border of the full area', 'Paint the image', '2021-04-18 16:49:08', NULL, NULL, 16),
(62, 'Which of the following statements is false about filling color of the selection', 4, 'Edit/Fill : Foreground', 'ALt + Backspace', 'Ctrl + Backspace', 'Image/ Dulipcate', '2021-04-18 16:49:08', NULL, NULL, 16),
(63, 'Here\'s how to use the Lasso Tool:', 2, 'Click a color on the image', 'Hold down the left mouse button and drag along the edge of the object to be selected', 'Press Alt for sampling', 'Click repeatedly', '2021-04-18 16:49:08', NULL, NULL, 16),
(64, 'Linear Gradient to color according to the shape', 4, 'Color varies according to radial pattern', 'Color varies with rhombus', 'Color is linearly symmetrical on one side of the starting point', 'The color varies from the beginning to the end of the image', '2021-04-18 16:49:08', NULL, NULL, 16),
(65, 'T is the shortcut of what tool', 1, 'Writing letters', 'Drawing straight lines', 'Rotating, transforming objects', 'Hiding the Tool Box tool in Photoshop', '2021-04-18 16:49:08', NULL, NULL, 16),
(66, 'How to draw along a horizontal line, vertical, angle 45 degrees with Pen Tool', 1, 'Hold down the Ctrl key', 'Hold down the Alt key', 'Hold down the Shift key', 'Hold down the Space Bar key', '2021-04-18 16:49:08', NULL, NULL, 16),
(67, 'Which of the following options is not available in the Position setting of the Layer Style\'s Stroke effect', 1, 'Outside', 'Inside', 'Center', 'Color', '2021-04-18 16:49:08', NULL, NULL, 16),
(68, 'Turn a path into a selection', 1, 'Ctrl + Enter', 'Shift + Enter', 'Alt + Enter', 'Enter', '2021-04-18 16:49:08', NULL, NULL, 16),
(69, 'I can use my mobile phone in the library', 2, 'True', 'False', NULL, NULL, '2021-04-18 16:50:57', '2021-04-20 08:22:58', NULL, 13),
(70, 'Order of handling incoming dispatch', 4, 'Sort, open, book, browse, distribute, transfer', 'Open, distribute, stamp, enter, browse, transfer, distribute', 'Stamp, open, distribute, book, browse, transfer, distribute', 'Sort, open, stamp, enter, browse, transfer, distribute', '2021-04-18 17:26:28', NULL, NULL, 17),
(71, 'General advisory function is?', 1, 'Synthesize, process and provide information about the organization\'s activities', 'Organize the management and use of funds and assets of the organization', 'Ensure facilities, facilities and working conditions of the organization', 'Be the communication hub of the organization', '2021-04-18 17:26:28', NULL, NULL, 17),
(72, 'The downside of one lead focus form?', 4, 'Easy to lead to a violation of the head regime\', \'Not suitable for highly concentrated work', 'It is difficult to operate the work', 'Not suitable for highly concentrated work', 'Difficult to specialize, difficult to properly focus on the importance of each type of job', '2021-04-18 17:26:28', NULL, NULL, 17),
(73, 'The role of information?', 4, 'Management aspect', 'The basis for making decisions', 'Important uses of administrators', 'All answers are correct', '2021-04-18 17:26:28', NULL, NULL, 17),
(74, 'What factors do not affect the working psychology of office workers?', 1, 'Weather', 'Light', 'Air', 'Sound', '2021-04-18 17:26:28', NULL, NULL, 17),
(75, 'Which of the following is the advantage of an open-space office layout?', 4, 'Save cost, space, priority in communication between departments', 'Job security', 'Ensure the privacy of each individual', 'Suitable for highly concentrated work', '2021-04-18 17:26:28', NULL, NULL, 17),
(76, 'How many roles are there in deciding role group:', 1, 'negotiate, allocate resources, keep order, initiate', 'negotiation, speech, leadership, supervision', 'allocating resources, keeping order, speaking, providing information', 'Negotiate, keep order, contact, represent', '2021-04-18 17:26:28', NULL, NULL, 17),
(77, 'Mistakes can be avoided when choosing a solution', 1, 'Hasty decisions, uneven participation, polarization, and myopic superficial plan of action', 'Hasty decisions, uneven participation', 'Hasty decisions, uneven participation, not self-awareness', 'Hasty decisions, the participation is uneven, and the staff opinion is lacking', '2021-04-18 17:26:28', NULL, NULL, 17),
(78, 'Which of the following strategies increases the challenge of performing on the job:', 2, 'Strategy to expand the scope of work', 'The strategy of increasing work depth', 'Salary by performance strategy', 'Flexible working hours strategy', '2021-04-18 17:26:28', NULL, NULL, 17),
(79, 'Functional activities to attract human resources do not include:', 3, 'Recruiting', 'Selection', 'Education', 'Planning', '2021-04-18 17:26:28', NULL, NULL, 17),
(80, 'What is the reason of contaminated food?', 4, 'Chemistry', 'Biological', 'Physical', 'All 3 answers above', '2021-04-18 18:33:33', '2021-04-18 18:57:46', NULL, 18),
(81, 'Who do you report to when you get food poisoning?', 2, 'Association of standards and customer protection', 'The nearest medical facility', 'The nearest administration or police station', 'No one', '2021-04-18 18:33:33', '2021-04-18 18:57:46', NULL, 18),
(82, 'Which of the following methods are used to kill common pathogenic bacteria?', 1, 'Use high temperature (cook at boiling point for at least 3 minutes)', 'Use low temperature (from 0 to 5 degrees Celsius)', NULL, NULL, '2021-04-18 18:33:33', '2021-04-18 18:57:46', NULL, 18),
(83, 'Is it allowed to use dead animals from diseases or epidemics as raw materials for food processing?', 2, 'Yes', 'No', NULL, NULL, '2021-04-18 18:33:33', '2021-04-18 18:57:46', NULL, 18),
(84, 'Food ingredients and products must be packed and stored at a minimum distance from the floor?', 1, '15 cm', '30 cm', NULL, NULL, '2021-04-18 18:33:33', '2021-04-18 18:57:46', NULL, 18),
(85, 'Food ingredients and products must be packed and stored at a minimum distance from the wall?', 2, '20 cm', '30 cm', NULL, NULL, '2021-04-18 18:33:33', '2021-04-18 18:57:46', NULL, 18),
(86, 'Food ingredients and products must be packed and stored at a minimum distance from the ceiling?', 2, '30 cm', '50 cm', NULL, NULL, '2021-04-18 18:33:33', '2021-04-18 18:57:46', NULL, 18),
(87, 'Which of the following major symptoms are considered to be food poisoning due to spoiled food?', 1, 'Abdominal pain, nausea, vomiting, diarrhea, headache', 'Cough, runny nose, difficulty breathing, sneezing, headache', NULL, NULL, '2021-04-18 18:33:33', '2021-04-18 18:57:46', NULL, 18),
(88, 'What groups of conditions must a food business have to meet?', 4, 'Facility conditions', 'Conditions of equipment and tools', 'Conditions about people', 'All 3 answers above', '2021-04-18 18:44:59', '2021-04-18 18:52:55', '2021-04-18 18:54:14', 19),
(89, 'During food processing, must people wear protective clothing?', 1, 'Yes', 'No', NULL, NULL, '2021-04-18 18:52:55', NULL, '2021-04-18 18:54:11', 19),
(90, 'The labor product of the cooking profession has:', 3, 'The dishes serve the daily needs of the family', 'The dishes are served at parties', 'Both A and B are true', 'Both A and B are wrong', '2021-04-18 18:52:55', '2021-04-18 20:21:47', NULL, 19),
(91, 'How to use and store plastic is:', 4, 'Do not store near the fire', 'Should not be used to store hot food', 'After using it should be washed with dishwashing liquid and dried', 'All 3 answers above', '2021-04-18 18:52:55', '2021-04-18 20:21:47', NULL, 19),
(92, 'Which of the following items are not required to perform kitchen tasks?', 2, 'Food cutting table', 'Desk', 'Table for just finished cooking pot', NULL, '2021-04-18 18:52:55', '2021-04-18 20:21:47', NULL, 19),
(93, 'What groups of conditions must a food business have to meet?', 4, 'Facility conditions', 'Conditions of equipment and tools', 'Conditions about people', 'All 3 answers above', '2021-04-18 18:57:46', NULL, NULL, 18),
(94, 'During food processing, must people wear protective clothing?', 1, 'Yes', 'No', NULL, NULL, '2021-04-18 18:57:46', NULL, NULL, 18),
(95, 'For lotus leaf salad, request onions:', 2, 'Do not soak', 'Soak before mixing 10-15 minutes', 'Soak before mixing 30-35 minutes', 'Other answer', '2021-04-18 20:20:58', '2021-04-18 20:21:47', NULL, 19),
(96, 'To ensure the sweetness of animal ingredients when cooking, it is necessary to:\', 3, \'Freshly cook animal ingredients', 1, 'Freshly cook animal ingredients', 'Boil animal ingredients before cooking', 'Fry animal ingredients before cooking', 'Other answer', '2021-04-18 20:20:58', '2021-04-18 20:21:47', NULL, 19),
(97, 'When cooking areca sweet soup, if there is no pulp can be replaced with:', 3, 'Flour', 'Rice flour', 'Kudzu flour', 'Other answer', '2021-04-18 20:20:58', '2021-04-18 20:21:47', NULL, 19),
(98, 'What is object oriented programming?', 2, 'Object Oriented Programming 1', 'Object Oriented Programming 2', 'Object Oriented Programming 3', 'Object Oriented Programming 4', '2021-04-18 20:23:28', NULL, NULL, 9),
(99, 'How many several properties are there in object oriented programming', 4, '1', '2', '3', '4', '2021-04-18 20:23:28', NULL, NULL, 9),
(100, 'What is software testing?', 1, 'Software Testing A', 'Software Testing B', 'Software Testing C', 'Software Testing D', '2021-04-18 20:25:09', NULL, NULL, 10),
(101, 'What is Test case?', 1, 'A', 'B', 'C', 'D', '2021-04-18 20:25:09', NULL, NULL, 10),
(102, 'a', 1, '1', '2', '3', '4', '2021-04-20 04:25:06', NULL, '2021-04-20 04:45:42', 50),
(103, 'haha', 1, '1', '2', '4', '3', '2021-04-20 04:47:43', NULL, '2021-04-20 04:48:03', 61),
(104, 'Using a blog', 1, '1', '2', '3', '4', '2021-04-20 04:48:10', NULL, '2021-04-20 04:48:15', 61),
(105, 'Which step in the Web site planning process includes determining the purpose and goals of a Web site?', 3, 'Determining content structure', 'A content builder', 'Assessing needs', 'A validator', '2021-04-20 04:49:24', '2021-04-20 05:05:15', NULL, 61),
(106, 'Which term is used to describe the combined use of audio, video, animation and interactivity?', 2, 'Compatibility', 'Multimedia', 'Web Design', 'Pixlr', '2021-04-20 04:52:15', '2021-04-20 05:05:15', NULL, 61),
(107, 'Evan’s boss has asked him to verify that the company Web site loads quickly, contains no \"broken\" links, and plays the introduction video correctly. Which design principle is Evan incorporating?', 4, 'Usability', 'Accessibility', 'Page Layout', 'Functionality', '2021-04-20 04:53:10', '2021-04-20 05:05:15', NULL, 61),
(108, 'Which of the following is an advantage offered by online or GUI Web editors for creating a Web site, which text editors do not offer?', 1, 'Pre-designed templates', 'Digital art', 'HTML coding practice', 'Pre-designed master', '2021-04-20 04:55:51', '2021-04-20 05:05:15', NULL, 61),
(109, 'Dante notices that pieces of HTML code appear with the content when he views his Web page in the browser. Which tool can he use to help him identify errors in his code?', 1, 'An automated validator', 'The ICANN', 'An HTML editor', 'A usability test', '2021-04-20 04:57:52', '2021-04-20 05:05:15', NULL, 61),
(110, 'Which statement correctly describes DHTML (Dynamic HTML)?', 1, 'A combination of technologies that creates dynamic interactive Web content.', 'A web standard for creating content that reacts to user events.', 'Technology that creates static web pages.', 'Creates static images.', '2021-04-20 04:59:51', '2021-04-20 05:05:15', NULL, 61),
(111, 'What of the following is a component of functional/usable design principles for web sites?', 1, 'Accessibility', 'Typography', 'layout', 'Design', '2021-04-20 05:05:15', NULL, NULL, 61),
(112, 'Which type of video can be copied and used on your personal Web page without violating any copyright rules?', 1, 'A video recorded at a music concert.', 'A video you recorded at you sister\'s birthday party.', 'A video you downloaded off the internet', 'Taking a video of a movie and posting it on the internet.', '2021-04-20 05:05:15', NULL, NULL, 61),
(113, 'Which of the following are you most likely to use DHTML for?', 2, 'To link Web pages together into a Web site.', 'To create animation in a Web page.', 'To create static Web pages.', 'To link static Web pages together.', '2021-04-20 05:05:15', NULL, NULL, 61),
(114, 'Which area of the page have visitors come to expect the main navigation to appear?', 1, 'At the top and/or down the left side of the page', 'On the right side or down at the bottom', 'Within the toolbars', 'Back button, Forward button, Reload Button', '2021-04-20 05:05:15', NULL, NULL, 61),
(115, 'which statement best describes creativity?', 2, 'the ability to acquire and apply knowledge and skills', 'the use of imagination or original ideas to create something; inventiveness', 'the scientific study of the human mind and its functions, especially those affecting behaviour in a given context', 'being able to bake bread', '2021-04-20 05:14:02', '2021-04-20 06:49:41', NULL, 62),
(116, 'creativity is a key component of?', 1, 'sleeping for 8 hours', 'eating fruit', 'seeing things in a new, imaginative way', 'shopping for Christmas', '2021-04-20 05:14:02', '2021-04-20 06:49:41', NULL, 62),
(117, 'View ______________ as ____________ that offer the opportunity to innovate.', 1, 'problems; challenges', 'customers; problems', 'challenges; problems', 'none of these', '2021-04-20 05:14:02', '2021-04-20 06:49:41', NULL, 62),
(118, '\"Creativity is natural, developmental and lifelong.\" What\'s the best answer to this statement?', 1, 'Definitely True', 'Definitely Not True', 'Creativity is not natural', NULL, '2021-04-20 05:14:02', '2021-04-20 06:49:41', NULL, 62),
(119, '\"Being open minded about new possibilities is critical to putting resourcefulness into action.\" What does it mean to be \"open minded\"?', 1, 'Being a good listener', 'Being willing to consider new ideas', NULL, NULL, '2021-04-20 06:35:17', '2021-04-20 06:49:41', NULL, 62),
(120, 'Before you can effectively resolve a problem you have to first do this?', 2, 'Propose different solutions', 'Clearly identify the problem', NULL, NULL, '2021-04-20 06:35:17', '2021-04-20 06:49:41', NULL, 62),
(121, 'Which subjects relate to creativity?', 4, 'Math', 'History', 'Visual Arts', 'All of the above', '2021-04-20 06:49:12', '2021-04-20 06:49:41', NULL, 62),
(122, 'There is not only \"one way\" to define creativity.', 1, 'True', 'False', NULL, NULL, '2021-04-20 06:49:12', '2021-04-20 06:49:41', NULL, 62),
(123, '\"Being open minded about new possibilities is critical to putting resourcefulness into action.\" What does it mean to be open minded?', 2, 'Being a good listener.', 'Willing to consider new ideas.', 'Being selective to new ideas.', 'Being objective.', '2021-04-20 06:49:12', '2021-04-20 06:49:41', NULL, 62),
(124, 'Brainstorming is one of the problem solving techniques.', 1, 'True', 'False', NULL, NULL, '2021-04-20 06:49:41', NULL, NULL, 62),
(125, 'Environmental Art has its origin in the 21st century.', 2, 'True', 'False', NULL, NULL, '2021-04-20 06:58:29', NULL, NULL, 63),
(126, 'Environmental landscape painting conventions were challenged by modernist theories which resisted art galleries exhibitions and sales.', 1, 'True', 'False', NULL, NULL, '2021-04-20 06:58:29', NULL, NULL, 63),
(127, 'What is art in nature?', 3, 'Works of art brought into museusm.', 'Canvas made of natural resourses.', 'Outdoor sculptures that are reshaped and ornamented with earth materials', NULL, '2021-04-20 06:58:29', NULL, NULL, 63),
(128, 'What is the main function of Ecological Art?', 1, 'Collaborating with environmental issues in service to the community and ecosystems.', 'Being Ecofriendly.', 'Encouraging and inspiring more artists to be respecful with nature.', NULL, '2021-04-20 06:58:29', NULL, NULL, 63),
(129, 'Primitive illustrations of animals, rain or lightning in the interior of their cave homes are not considered environmental art.', 2, 'True', 'False', NULL, NULL, '2021-04-20 06:58:29', NULL, NULL, 63),
(130, 'Alan Sonfist received critical acclaim for his innovative use of urban spaces to design havens of nature and green art.', 1, 'True', 'False', NULL, NULL, '2021-04-20 06:58:29', NULL, NULL, 63),
(131, 'The Brooklyn Bridge replica was constructed with nearly 10,000 single-use plastic water bottles.', 2, 'True', 'False', NULL, NULL, '2021-04-20 06:58:29', NULL, NULL, 63),
(132, 'Where did artists such as Robert Morris and Herbert Bayer move to continue with their works of art in the 80´s?', 3, 'They moved away to dessert areas.', 'They considered portraying their works of art in art galleries again.', 'They moved into the public landscape.', NULL, '2021-04-20 06:58:29', NULL, NULL, 63),
(133, 'Sustainable art is art in harmony with the key principles of sustainability, which include ecology, social justice, non-violence and grassroots democracy.', 1, 'True', 'False', NULL, NULL, '2021-04-20 06:58:29', NULL, NULL, 63),
(134, 'Which of the following is NOT a characteristic of Renaissance art?', 3, 'Perspective', 'Incorporation of nature', 'Flat/2-D', 'Realistic/3-D', '2021-04-20 06:58:29', NULL, NULL, 63),
(135, 'What is a managers responsibility?', 1, 'Direct Employees', 'Give Change', 'Make people feel welcome', 'Take orders', '2021-04-20 07:04:09', '2021-04-20 07:30:19', NULL, 64),
(136, 'A manager is like a', 2, 'Principal', 'Teacher', 'Student', NULL, '2021-04-20 07:30:19', NULL, NULL, 64),
(137, 'Which is an example of good communication?', 4, 'You are really bad at your job!!!!!!!!!', 'GO DO YOUR JOB', '...........................', '\"Can you go make the coffee orders please?\"', '2021-04-20 07:30:19', NULL, NULL, 64),
(138, 'Empathy is', 3, 'Understanding math', 'Understanding each others dislikes', 'Understanding each others feelings', NULL, '2021-04-20 07:30:19', NULL, NULL, 64),
(139, 'Luther is very shy, what job should you avoid giving him?', 1, 'Greeter', 'Cashier', 'Server', 'Delivery Person', '2021-04-20 07:30:19', NULL, NULL, 64),
(140, 'Jess loves making drinks and food, what job should you give her?', 1, 'Barista', 'Greeter', 'Server', 'Cashier', '2021-04-20 07:30:19', NULL, NULL, 64),
(141, 'Hart hates dirty dishes, what job should you avoid giving him?', 3, 'Barista', 'Cashier', 'Server', 'Greeter', '2021-04-20 07:30:19', NULL, NULL, 64),
(142, 'Tom loves walking, what job should you give him?', 4, 'Cashier', 'Server', 'Barista', 'Delivery person', '2021-04-20 07:30:19', NULL, NULL, 64),
(143, 'Recognition is important so', 2, 'Employees know what to do better', 'Employees know that they are doing a good job', 'Employees know you don\'t like them', NULL, '2021-04-20 07:30:19', NULL, NULL, 64),
(144, 'Which is an example of recognition?', 3, 'You did a really bad job', 'You did your job', 'You did such a nice job cleaning that mess up!', NULL, '2021-04-20 07:30:19', NULL, NULL, 64),
(145, 'I route inbound calls and determine the marketing source of the call.', 4, 'Customer Care Agent / Dialer', 'Junior Loan Consultant', 'Loan Consultant Assistant', 'ILA Receptionist', '2021-04-20 07:49:31', '2021-04-20 07:59:11', '2021-04-20 08:01:06', 65),
(146, 'I pre-screen inbound and outbound calls and route the customer to an ILA Loan Consultant.', 4, 'ILA Receptionist', 'Customer Service Specialist', 'Quality Control Auditor', 'Customer Care Agent / Dialer', '2021-04-20 07:59:11', NULL, '2021-04-20 08:01:06', 65),
(147, 'I have a NMLS # and my main focus is learning to originate loans.', 1, 'Junior Loan Consultant', 'Loan Consultant Assistant', 'Production Assistant', 'Junior Loan Processor', '2021-04-20 07:59:11', NULL, '2021-04-20 08:01:06', 65),
(148, 'I advise and assist borrowers with Refinance and Purchase home loans options. My focus is to originate loans.', 3, 'Loan Processor / Closer', 'Underwriter', 'Loan Consultant', 'Funder', '2021-04-20 07:59:11', NULL, '2021-04-20 08:01:06', 65),
(149, 'My focus is to ensure initial mortgage disclosures are sent out to the borrowers on time and accurate.', 2, 'Servicer', 'Mortgage Disclosure Specialist', 'Production Assistant', 'Junior Loan Processor', '2021-04-20 07:59:11', NULL, '2021-04-20 08:01:06', 65),
(150, 'I review loan files for completeness and work with the borrower to obtain any necessary documents needed to satisfy UW conditions.', 1, 'Loan Processor / Closer', 'Funder', 'Loan Consultant', 'Servicer', '2021-04-20 07:59:11', NULL, '2021-04-20 08:01:06', 65),
(151, 'I review and finalize all loan documentation to prepare the release of funds to all appropriate parties.', 3, 'Servicer', 'Underwriter', 'Funder', 'Post-Closer', '2021-04-20 07:59:11', NULL, '2021-04-20 08:01:06', 65),
(152, 'I review loan files and look at layered risk assessments. I condition loan files.  I sign off for final loan approval.', 4, 'Funder', 'Customer Service Specialist', 'Mortgage Disclosure Specialist', 'Underwriter', '2021-04-20 07:59:11', NULL, '2021-04-20 08:01:06', 65),
(153, 'The following are the basic skills in which contact center consultants should possess EXCEPT:', 4, 'Good listening and problem solving skills', 'Concentration', 'Patience', 'Frustration', '2021-04-20 08:02:09', '2021-04-20 08:09:43', NULL, 66),
(154, 'Contact center consultants receive incoming calls from customers on their queries/complaints. This is what we call “Inbound Contact Center”.', 1, 'True', 'False', NULL, NULL, '2021-04-20 08:06:12', '2021-04-20 08:09:43', NULL, 66),
(155, 'The following are things that contact center consultants should do if the customer verbally abuses him/her on call EXCEPT:', 4, 'Stay calm and listen to the customer’s problem', 'Be polite to calm the customer down, and offer them reassurance', 'Identify the root-cause of the problem and help the customer resolve them', 'Ensure it happens again', '2021-04-20 08:06:12', '2021-04-20 08:09:43', NULL, 66),
(156, 'The following are the correct ways for contact center consultants to turn down a request from a valued customer EXCEPT:', 4, 'Remain polite and well mannered', 'Gain the customer’s trust by being reliable, and confident', 'Adhere to company’s policies and explain the situation or reason for denial', 'Missing out on important information', '2021-04-20 08:06:12', '2021-04-20 08:09:43', NULL, 66),
(157, 'Contact center consultants should use the following scripts if they don’t know the answer to customers’ questions EXCEPT:', 3, '“Hold on while I look for the information”', '“I’ll get back to you shortly with some possible solution”', '“I don’t know”', '“I can answer that in part, but would like to consider it further and get back to you”', '2021-04-20 08:06:12', '2021-04-20 08:09:43', NULL, 66),
(158, 'The following are the reasons on the importance of active listening amongst contact center consultants EXCEPT:', 3, 'It helps build connections', 'It helps build trust', 'It results in missing critical information', 'It helps ensure the customer can feel that you are focused and engaged', '2021-04-20 08:09:43', NULL, NULL, 66),
(159, 'The following are actions required by contact center agents to handle customers’ emotions, reassurance and authenticity EXCEPT:', 4, 'Assess and acknowledge the customer’s emotion', 'Build trust by assuring the customer that he/she will resolve the issue', 'Authenticity to reassure the customer that he/she is dealing with the right person', 'Authenticity to reassure the customer that he/she is dealing with the right person', '2021-04-20 08:09:43', NULL, NULL, 66),
(160, 'While we do not always believe customers are always right, contact center consultants MUST always be polite and courteous with them at all times.', 1, 'True', 'False', NULL, NULL, '2021-04-20 08:09:43', NULL, NULL, 66),
(161, 'The boy who acts in theater, television or film is', 3, 'Editor', 'Director', 'Actor', NULL, '2021-04-20 08:20:26', NULL, NULL, 67),
(162, 'The person who films the scenes is...', 1, 'Cameraman', 'Extra', 'Editor', NULL, '2021-04-20 08:20:26', NULL, NULL, 67),
(163, 'The person who manages a film is...', 1, 'Actress', 'Director', 'Choreographer', NULL, '2021-04-20 08:20:26', NULL, NULL, 67),
(164, 'The girl who acts in a film is...', 2, 'Clothing designer', 'Actress', 'Reporter', NULL, '2021-04-20 08:20:26', NULL, NULL, 67),
(165, 'The person who teaches the actors and actresses to dance is..', 2, 'Cameraman', 'Choreographer', 'Hairstylist', NULL, '2021-04-20 08:20:26', NULL, NULL, 67),
(166, 'The person who uses special effects in the film is...', 1, 'Editor', 'Director', 'Reporter', NULL, '2021-04-20 08:20:26', NULL, NULL, 67),
(167, 'The actor or actress who appears with lot of people in the film is...', 1, 'Actor', 'Actress', 'Extra', NULL, '2021-04-20 08:20:26', NULL, NULL, 67),
(168, 'The person who cuts or beautifies hair is...', 1, 'Clothing designer', 'Hairstylist', 'Makeup artist', NULL, '2021-04-20 08:20:26', NULL, NULL, 67),
(169, 'The person who makes-up an actor/actress is...', 2, 'Cameraman', 'Makeup artist', 'Editor', NULL, '2021-04-20 08:20:26', NULL, NULL, 67),
(170, 'The person who interviews the director, actors, editor is....', 1, 'Reporter', 'Cameraman', 'Clothing designer', NULL, '2021-04-20 08:20:26', NULL, NULL, 67),
(171, '123', 1, '1', '2', '3', '4', '2021-04-20 20:34:44', NULL, '2021-04-20 20:34:48', 68);

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
CREATE TABLE IF NOT EXISTS `tests` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `time` bigint(20) DEFAULT NULL COMMENT 'Thời gian làm: tính bằng phút',
  `status` int(11) DEFAULT NULL COMMENT 'Trạng thái bộ đề: 0 - ẩn, 1 - hiện',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `name`, `time`, `status`, `created_at`, `updated_at`, `deleted_at`, `user_id`) VALUES
(9, 'Java Back End Test', 20, 1, '2021-04-01 20:02:55', '2021-04-18 20:23:28', NULL, 3),
(10, 'Software Testing', 20, 1, '2021-04-01 20:06:05', '2021-04-18 20:25:09', NULL, 3),
(11, 'kt1', 123, 1, '2021-04-12 07:27:58', '2021-04-18 20:25:19', NULL, 3),
(12, 'English Knowlegde', 30, 1, '2021-04-18 08:48:25', '2021-04-18 08:48:32', NULL, 28),
(13, 'Librabry Rules', 20, 1, '2021-04-18 08:59:28', '2021-04-20 08:22:58', NULL, 3),
(14, 'Aviation Technique Test', 60, 1, '2021-04-18 09:36:19', '2021-04-18 09:46:34', NULL, 26),
(15, 'Aviation Knowledge Test', 60, 1, '2021-04-18 09:59:36', '2021-04-20 04:17:56', NULL, 26),
(16, 'Photoshop Quiz', 60, 1, '2021-04-18 16:49:08', NULL, NULL, 25),
(17, 'Human Resources Administration Test', 60, 1, '2021-04-18 17:26:28', NULL, NULL, 25),
(18, 'Food Hygiene Safety', 30, 1, '2021-04-18 18:33:33', '2021-04-18 18:57:46', NULL, 24),
(19, 'Cookery', 60, 1, '2021-04-18 18:44:59', '2021-04-18 20:21:47', NULL, 24),
(50, 'Huy', 60, 1, '2021-04-20 04:25:06', NULL, '2021-04-20 04:45:42', 25),
(61, 'Web Design', 60, 1, '2021-04-20 04:47:43', '2021-04-20 05:05:15', NULL, 25),
(62, 'Creativity Test', 30, 1, '2021-04-20 05:14:02', '2021-04-20 06:49:41', NULL, 25),
(63, 'Art Test', 30, 1, '2021-04-20 06:58:29', NULL, NULL, 25),
(64, 'Manager Test', 40, 1, '2021-04-20 07:04:09', '2021-04-20 07:30:19', NULL, 25),
(65, 'Roles and Tasks', 40, 1, '2021-04-20 07:49:31', '2021-04-20 07:59:11', '2021-04-20 08:01:06', 25),
(66, 'Consultant Test', 40, 1, '2021-04-20 08:02:09', '2021-04-20 08:09:43', NULL, 25),
(67, 'Cinema Volcabulary', 30, 1, '2021-04-20 08:20:26', NULL, NULL, 27),
(68, 'a', 12, 1, '2021-04-20 20:34:44', NULL, '2021-04-20 20:34:48', 25);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
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
  `gender` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ux_user_login` (`login`),
  UNIQUE KEY `ux_user_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `login`, `password_hash`, `first_name`, `last_name`, `email`, `phone`, `address`, `birthday`, `image_url`, `activated`, `lang_key`, `activation_key`, `reset_key`, `created_by`, `created_date`, `reset_date`, `last_modified_by`, `last_modified_date`, `gender`) VALUES
(2, 'anonymoususer', '$2a$10$j8S5d7Sr7.8VTOYNviDPOeWX8KcYILUVJBsYV83Y5NtECayypx9lO', 'Anonymous', 'User', 'anonymous@localhost', NULL, NULL, NULL, '', b'1', 'en', NULL, NULL, 'system', NULL, NULL, 'system', NULL, NULL),
(3, 'admin', '$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC', 'Anh1', 'Trần1', 'ductm@zent.vn', '0985632458', 'hn', '1996-01-05', 'image/f6f97645-679b-4c6b-a01f-f813a37b753ephoto-1533090161767-e6ffed986c88.jpeg', b'1', 'en', NULL, NULL, 'system', '2021-03-29 13:03:08', NULL, 'admin', '2021-04-03 18:06:40', 2),
(15, 'ductm.ntd', '$2a$10$b3Z4Qd46HbKRyBUuVZSTuONXPwepamRzhnAZ8gVP.L08XK1JVo7fa', 'Tran', 'Duc', 'ductm.kma@gmail.com', '0989887889', 'Ha Noi', '2021-03-28', 'image/f6f97645-679b-4c6b-a01f-f813a37b753ephoto-1533090161767-e6ffed986c88.jpeg', b'1', 'vi', NULL, NULL, 'anonymousUser', '2021-04-01 16:53:30', NULL, 'ductm.ntd', '2021-04-18 20:26:26', NULL),
(16, 'ductm.ntd2', '$2a$10$t6rqthoaouJgTD4bM5Fja.8GjNmdtzUbo4z.Z2cwxJIVjG65yHEti', NULL, NULL, 'ductm.ntd2@gmail1.com', NULL, NULL, NULL, NULL, b'1', 'vi', NULL, NULL, 'anonymousUser', '2021-04-01 19:56:12', NULL, 'anonymousUser', '2021-04-01 19:56:12', NULL),
(17, 'ungvien', '$2a$10$BPYDEMtlj9OaF7n3AojI8eEh0f8VoddWpNYoW6/coXK3CweV9qKfe', 'Trần ', 'Minh Đức', 'ungvien@123.vn', NULL, NULL, NULL, NULL, b'1', 'vi', NULL, NULL, 'anonymousUser', '2021-04-01 20:36:02', NULL, 'ungvien', '2021-04-01 20:44:53', NULL),
(18, 'huyct', '$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC', NULL, NULL, 'huyct@gmail.com', NULL, NULL, NULL, NULL, b'1', 'vi', '', NULL, 'anonymousUser', '2021-04-03 18:29:38', NULL, 'anonymousUser', '2021-04-03 18:29:38', NULL),
(21, 'huyct1x', '$2a$10$gilmr/g4s3AD7n05VR1sVeLTiFlXQLeS1vkjktnGS/T2R2qaOIsEm', NULL, NULL, 'admin@localhost.vn', NULL, NULL, NULL, NULL, b'1', 'vi', '', NULL, 'anonymousUser', '2021-04-03 18:51:35', NULL, 'anonymousUser', '2021-04-03 18:51:35', NULL),
(22, 'huyct2x', '$2a$10$XWqamo0N9WW70nIVFsSqwePVoYD33FO7e5IYXlXwDjD/Amqbdg/SK', 'chu', 'anh', 'admin1@localhost.vn', NULL, NULL, '2021-04-04', 'image/d2926972-5702-45f8-83c8-90ec89f27cc2lll.png', b'1', 'vi', '', NULL, 'anonymousUser', '2021-04-03 18:54:02', NULL, 'huyct2x', '2021-04-03 19:21:38', 1),
(23, 'duc123', '$2a$10$XUduWHFQGI09GP0mwPwKyuvRjbHDfrhxyIttjY49w1sYhg2JJCEaO', NULL, NULL, 'ductm.info@gmail.com', NULL, NULL, NULL, NULL, b'1', 'en', NULL, NULL, 'admin', '2021-04-15 20:08:37', NULL, 'admin', '2021-04-15 20:09:53', NULL),
(24, 'dreambean.cafe', '$2a$10$smBBIxi6YiY3CC74Qv5cvuPmaPvXj2ee3txNk41v.llF8GfJ.Jd6W', 'Tran Duc', 'Quang', 'dreambeancafe@gmail.com', '0253869020', '162 Nguyen An Ninh, Ward 8, District 3, Ho Chi Minh City', '1990-05-04', 'image/cee420e4-5e44-4548-892d-66df06d7f7e7cafe.jpg', b'1', 'vi', '9xBx4Gce1SyIw3u2WR9F', NULL, 'anonymousUser', '2021-04-18 03:40:17', NULL, 'dreambean.cafe', '2021-04-18 07:32:10', NULL),
(25, 'nova.spin', '$2a$10$R2W03DneIrIIAUzMRs1RYe42hAT.S8H5cIbd4BVh73sScYBT8f8iK', 'Nguyen Van', 'Thinh', 'novaspin@gmail.com', '0989452789', 'Duc Thanh, Ward Ninh Hai, Nghi Son Town, Thanh Hoa Province', '1989-08-14', 'image/5eaee329-60f3-4c60-9ca4-fcf99fc0242ab3c57faf-799a-4ca4-8d89-1a952ce38cd83D_company.jpg', b'1', 'vi', 'yR89l5pwAll3BQ8gfyUB', NULL, 'anonymousUser', '2021-04-18 03:44:52', NULL, 'nova.spin', '2021-04-18 07:42:26', NULL),
(26, 'airline.travel', '$2a$10$7OFNpoW7xGn36fNtuOr79uCMX9GzQ.5ytLsFV0StGeMf8lx.1YFoe', 'Dang Minh', 'Quan', 'airlinetravel@gmail.com', '0364979031', 'Area 4, Nhon Ly Village, Quy Nhon City, Binh Dinh Province, Viet Nam', '1980-10-09', 'image/a46991da-379c-4926-bea6-88e1f44931b03e6e789f-5597-4449-9810-a828364470faairlines.jpg', b'1', 'vi', 'uwvH7fJ6NvRC1DLKZ6yj', NULL, 'anonymousUser', '2021-04-18 03:45:35', NULL, 'airline.travel', '2021-04-18 07:50:21', NULL),
(27, 'cinema.andco', '$2a$10$qiXH1rtjePZWWQxyopjnx.Nv3ri62tc67K/TZFrNIzrDL9NjO1xsS', 'Tran Thi Bich', 'Ha', 'cinemaandco@gmail.com', '09022329240', 'Fourth Floor, Vincom Da Nang Mall, Ngo Quyen Street, Son Tra District, Da Nang City', '1989-05-04', 'image/c478e045-5515-439d-805e-95de0d6be4f45cfbfe01-2016-4b27-9524-59598e9d0fcbcinema.jpg', b'1', 'vi', '5bVOMupztk4kvQbdQms7', NULL, 'anonymousUser', '2021-04-18 03:47:19', NULL, 'cinema.andco', '2021-04-18 08:15:09', NULL),
(28, 'uni.versity', '$2a$10$mdZLbPwzRuqPXtKMvDFt5ONQbRBg6jbrn12RODaF/mvEbkLIDLhga', 'Nguyen Van', 'Quang', 'university@gmail.com', '09022329240', '504 Binh Duong Avenue, Hiep Thanh Ward, Thu Dau Mot City, Binh Duong Province', '1980-01-06', 'image/082b1c9b-3494-4f28-b4c0-fc34e6bebfca902b12f7-1ac3-40c6-808f-b254af0864e1university.jpg', b'1', 'vi', 'hyVh8XhUTSHvDx1C9Dmh', NULL, 'anonymousUser', '2021-04-18 03:48:45', NULL, 'uni.versity', '2021-04-18 08:24:13', NULL),
(29, 'ngoclinh22', '$2a$10$rv/Bl2mLq4E53uKYTwGLv.tfbvAmBpuMV7I9/Hcm0HefqtjoKFmaC', 'Dang Hoang', 'Linh', 'danghoanglinh@gmail.com', NULL, NULL, '1992-05-19', 'image/814b9119-711a-44c4-aa04-46f268e0527angoclinh.jpg', b'1', 'en', 'hugf8HO1bT1qFJjr0eBZ', NULL, 'anonymousUser', '2021-04-18 03:53:11', NULL, 'ngoclinh22', '2021-04-20 09:34:46', NULL),
(30, 'minhtam17', '$2a$10$TrCFuH8QGDsaxpGx3xslUO4Cp1uhNYYGU.HzYEawi6sTnVzY41Gtq', 'Tran Dinh Minh', 'Tam', 'dinhminhtam@gmail.com', NULL, NULL, '1995-05-30', 'image/1551a3ed-bbea-432e-976a-ec77eb25f27bminhtam.jpg', b'1', 'en', 'RXUjuhStgOQToU0dxBP2', NULL, 'anonymousUser', '2021-04-18 03:55:02', NULL, 'minhtam17', '2021-04-18 05:57:00', 1),
(31, 'myhanh26', '$2a$10$DPq8Rixxi.ZlaHfmDrgdLuMRzQih3ECCN4J1o/YmbuFSYzCEKBaua', 'Nguyen Thi My', 'Hanh', 'myhanh@gmail.com', NULL, NULL, '1992-05-19', 'image/1282d1c9-1dcb-4d58-97fe-58e1fd840ec8myhanh.jpg', b'1', 'en', '8tW8BBuXXqQuey6PM3Mx', NULL, 'anonymousUser', '2021-04-18 03:59:57', NULL, 'myhanh26', '2021-04-18 06:16:51', 2),
(32, 'thanhhung57', '$2a$10$0PrTRUmL38Jfnuek9ur77eByVTQKcIJ16rwgf3r/7XqtH7.poCqrq', 'Tran Thanh', 'Hung', 'thanhhung@gmail.com', NULL, NULL, '1993-10-30', 'image/4a8e864b-5288-4ce3-afd1-3447ea5f430fthanhhung.jpg', b'1', 'en', 'N1n9DChdkeCFtgaxXf4W', NULL, 'anonymousUser', '2021-04-18 04:01:33', NULL, 'thanhhung57', '2021-04-18 06:21:12', 1),
(33, 'tuanminh.ntv1', '$2a$10$qsWUPAY1dvuHM3mzu.C54ukR1jF/iYpld1aen.9ReVaDXFj66t2ai', 'Nguyen Tuan', 'Minh', 'tuanminh@gmail.com', NULL, NULL, '1987-11-08', 'image/1c6e1882-b89c-40c8-babb-3befbd1725f4tuanminh.jpg', b'1', 'en', 'b3nkUNlIoecMOKqRlneJ', NULL, 'anonymousUser', '2021-04-18 04:09:54', NULL, 'tuanminh.ntv1', '2021-04-18 06:27:39', 1),
(34, 'chithien.ntv2', '$2a$10$55pHhj0FALSOIs3F5Pkt9u8YmAJua/Fqq2RjxxM.9LbJlbXHbmlsi', 'Nguyen Chi', 'Thien', 'chithien@gmail.com', NULL, NULL, '1996-09-28', 'image/55d3e254-17d5-4fe3-a1f9-5e92064a93ebchithien.jpg', b'1', 'en', '3fnMSaIQdbQ01UYJBwuM', NULL, 'anonymousUser', '2021-04-18 04:10:27', NULL, 'chithien.ntv2', '2021-04-18 06:30:16', 1),
(35, 'kimngan.ntv3', '$2a$10$RJPv0Pmg/XeNqJz/JmDUTeHqPVy22S3qVRlyvFL1pZ6jH37uCWiaS', 'Nguyen Kim', 'Ngan', 'kimngan@gmail.com', NULL, NULL, '1992-05-19', 'image/ee33618b-e034-4c87-bc57-1c1829d1acf9kimngan.jpg', b'1', 'en', '2R2C4PkfbDL7lzyzREGz', NULL, 'anonymousUser', '2021-04-18 04:13:25', NULL, 'kimngan.ntv3', '2021-04-18 06:34:18', 2),
(36, 'nguyenmanh.ntv4', '$2a$10$lNRAJYRhuGUg40Re9TaX7ewDSFePAcTIdDW61.VkujGyWA7PyDOVe', 'Tran Nguyen', 'Manh', 'nguyenmanh@gmail.com', NULL, NULL, '1995-05-02', 'image/bd423787-815d-400b-a437-be6c624e8136nguyenmanh.jpg', b'1', 'en', 'Dxk5UQsrRGVH4tqYjSCz', NULL, 'anonymousUser', '2021-04-18 04:13:51', NULL, 'nguyenmanh.ntv4', '2021-04-18 06:37:35', 1),
(37, 'tranlam89', '$2a$10$0u1bv9.60qp8Y9VDG5cvQuKy2ftuCJtOMM0W5GD6KRCmsZAC/jMGK', 'Nguyen Tran', 'Lam', 'tranlam@gmail.com', NULL, NULL, '1993-11-01', 'image/577d81bf-10e9-4fec-8505-8cd97cf9951ftranlam.jpg', b'1', 'en', 'XvJeOajhVGLBV7jiNbln', NULL, 'anonymousUser', '2021-04-18 04:14:07', NULL, 'tranlam89', '2021-04-18 06:41:49', 1),
(38, 'quangtruc.vaa12', '$2a$10$08ftQ6.TJ3QCkM/7XTGnu.sgHJ9/aVxZiffGkIiPiXuFW/sCbUKT6', 'Tran Quang', 'Truc', 'quangtruc@gmail.com', NULL, NULL, '1999-10-08', 'image/8d7b9c2a-1539-45ce-a598-18847d90a395quangtruc.jpg', b'1', 'en', 'wBHLAlWt6s4WzVKrEbI1', NULL, 'anonymousUser', '2021-04-18 04:16:21', NULL, 'quangtruc.vaa12', '2021-04-18 06:47:25', 1),
(39, 'minhhoai.tp2', '$2a$10$aCDdn.LZw6G7qgF/csZcUOrchSnUSmXBDAwxeYS01bsWexzEm9ZpW', 'Nguyen Minh', 'Hoai', 'minhhoai@gmail.com', NULL, NULL, '1997-08-29', 'image/7c9b9318-7443-4c48-99f0-7cf75bed2897minhhoai.jpg', b'1', 'en', '90XERuTW6NSXfX9aYU11', NULL, 'anonymousUser', '2021-04-18 04:16:56', NULL, 'minhhoai.tp2', '2021-04-18 06:52:12', 1),
(40, 'ngochung.hn3', '$2a$10$nYOmxph/eIe8u4JMwRhd7eVHBOR0RtRhtBWqM02KhrOs3upkpfa2.', 'Tran Ngoc', 'Hung', 'ngochung@gmail.com', NULL, NULL, '1997-08-29', 'image/e387ee27-5231-4e56-a5b1-c48f32f82d64ngochung.jpg', b'1', 'en', 'ea6oy6y4ptJ3QS3beKy8', NULL, 'anonymousUser', '2021-04-18 04:18:37', NULL, 'ngochung.hn3', '2021-04-18 06:59:57', 1),
(41, 'thedan.st4', '$2a$10$hvN9ju/un/zgoQsLpjx1Je2RcMGjSQaaWhN56ZJH3C./KOWaa1i0q', 'Nguyen The', 'Dan', 'thedan@gmail.com', NULL, NULL, '1992-11-07', 'image/d8b4f8c9-58d0-47c3-b4e0-4c7c14ad6807thedan.jpg', b'1', 'en', '8dselc1qz2rEQuRB16jE', NULL, 'anonymousUser', '2021-04-18 05:24:31', NULL, 'thedan.st4', '2021-04-18 07:04:10', 1),
(42, 'nguyentoan.ii5', '$2a$10$qMu/rdOCvo3l6D5TENbY0OC4CgXGI1GH5eqa1SU5oIt0xir630FGS', 'Nguyen Van', 'Toan', 'nguyentoan@gmail.com', NULL, NULL, NULL, 'image/447f4449-2067-4cc7-be1c-5d3ccce7832anguyentoan.jpg', b'1', 'en', 'bRWN7YngQAbLIAcAfe4t', NULL, 'anonymousUser', '2021-04-18 05:37:18', NULL, 'nguyentoan.ii5', '2021-04-18 07:06:46', 1),
(43, 'thanhdo.hcm5', '$2a$10$p4DnpXPG5StdWng1brnLCubmiKHzy75KnLP3QLFRckfQfid/gd4Ti', 'Le Thanh', 'Do', 'thanhdo@gmail.com', NULL, NULL, '1993-11-04', 'image/0c3906a0-f78a-4db3-8a24-cb6b0fe19a1dthanhdo.jpg', b'1', 'en', '64IndgrlmQjKWrNasJ8o', NULL, 'anonymousUser', '2021-04-18 05:37:38', NULL, 'admin', '2021-04-20 04:23:25', NULL),
(46, 'duy.khanh', '$2a$10$YIm1Xdw1bszyyz87unCqNOT/En6GrTDfT899MrKN9TqaqURDQ3ZX6', 'Tran Duy', 'Khanh', 'tepbi1796@gmail.com', NULL, NULL, NULL, 'image/05ff7e6a-41e0-4019-af1f-90a7cde0d782avatar_duykhanh.jpg', b'1', 'en', 'SAIpFDnNKGtNLeeA8uo4', NULL, 'anonymousUser', '2021-04-21 02:26:25', NULL, 'duy.khanh', '2021-04-21 02:32:45', 1);

-- --------------------------------------------------------

--
-- Table structure for table `user_authority`
--

DROP TABLE IF EXISTS `user_authority`;
CREATE TABLE IF NOT EXISTS `user_authority` (
  `user_id` bigint(20) NOT NULL,
  `authority_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`,`authority_name`),
  KEY `fk_authority_name` (`authority_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_authority`
--

INSERT INTO `user_authority` (`user_id`, `authority_name`) VALUES
(3, 'ROLE_ADMIN'),
(21, 'ROLE_ADMIN'),
(15, 'ROLE_EMPLOYER'),
(16, 'ROLE_EMPLOYER'),
(18, 'ROLE_EMPLOYER'),
(24, 'ROLE_EMPLOYER'),
(25, 'ROLE_EMPLOYER'),
(26, 'ROLE_EMPLOYER'),
(27, 'ROLE_EMPLOYER'),
(28, 'ROLE_EMPLOYER'),
(17, 'ROLE_USER'),
(22, 'ROLE_USER'),
(23, 'ROLE_USER'),
(29, 'ROLE_USER'),
(30, 'ROLE_USER'),
(31, 'ROLE_USER'),
(32, 'ROLE_USER'),
(33, 'ROLE_USER'),
(34, 'ROLE_USER'),
(35, 'ROLE_USER'),
(36, 'ROLE_USER'),
(37, 'ROLE_USER'),
(38, 'ROLE_USER'),
(39, 'ROLE_USER'),
(40, 'ROLE_USER'),
(41, 'ROLE_USER'),
(42, 'ROLE_USER'),
(43, 'ROLE_USER'),
(46, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Table structure for table `user_test_questions`
--

DROP TABLE IF EXISTS `user_test_questions`;
CREATE TABLE IF NOT EXISTS `user_test_questions` (
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
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `apply_jobs`
--
ALTER TABLE `apply_jobs`
  ADD CONSTRAINT `apply_jobs_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `apply_jobs_ibfk_2` FOREIGN KEY (`profile_id`) REFERENCES `profiles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `apply_jobs_ibfk_3` FOREIGN KEY (`cv_id`) REFERENCES `cvs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `apply_jobs_ibfk_4` FOREIGN KEY (`apply_job_interview_id`) REFERENCES `apply_job_interviews` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `apply_job_interviews`
--
ALTER TABLE `apply_job_interviews`
  ADD CONSTRAINT `apply_job_interviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jobs_ibfk_2` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `jobs_ibfk_3` FOREIGN KEY (`location_id`) REFERENCES `provinces` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `job_careers`
--
ALTER TABLE `job_careers`
  ADD CONSTRAINT `job_careers_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `job_careers_ibfk_2` FOREIGN KEY (`career_id`) REFERENCES `careers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `persistent_audit_evt_data`
--
ALTER TABLE `persistent_audit_evt_data`
  ADD CONSTRAINT `fk_evt_pers_audit_evt_data` FOREIGN KEY (`event_id`) REFERENCES `persistent_audit_event` (`event_id`);

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `posts_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `profiles`
--
ALTER TABLE `profiles`
  ADD CONSTRAINT `profiles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `profiles_ibfk_2` FOREIGN KEY (`cv_id`) REFERENCES `cvs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_authority`
--
ALTER TABLE `user_authority`
  ADD CONSTRAINT `fk_authority_name` FOREIGN KEY (`authority_name`) REFERENCES `authority` (`name`),
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `user_test_questions`
--
ALTER TABLE `user_test_questions`
  ADD CONSTRAINT `user_test_questions_ibfk_1` FOREIGN KEY (`test_id`) REFERENCES `tests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_test_questions_ibfk_2` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_test_questions_ibfk_3` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
