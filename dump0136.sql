-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        5.6.36 - MySQL Community Server (GPL)
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- appjamhy 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `appjamhy` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `appjamhy`;

-- 테이블 appjamhy.starlist 구조 내보내기
CREATE TABLE IF NOT EXISTS `starlist` (
  `ip` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `light` int(11) NOT NULL DEFAULT '5',
  `w` double NOT NULL,
  `g` double NOT NULL,
  `file` varchar(255) DEFAULT NULL,
  `text` varchar(255) DEFAULT ' ',
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  KEY `uid` (`uid`),
  KEY `FK_starlist_user` (`ip`),
  CONSTRAINT `FK_starlist_user` FOREIGN KEY (`ip`) REFERENCES `user` (`ip`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- 내보낼 데이터가 선택되어 있지 않습니다.
-- 테이블 appjamhy.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `ip` varchar(50) NOT NULL,
  PRIMARY KEY (`ip`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 내보낼 데이터가 선택되어 있지 않습니다.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
