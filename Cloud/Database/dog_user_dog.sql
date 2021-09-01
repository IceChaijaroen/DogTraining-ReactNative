-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 34.87.79.237    Database: dog
-- ------------------------------------------------------
-- Server version	5.7.34-google-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '159102f3-c868-11eb-86fe-42010a940004:1-493916';

--
-- Table structure for table `user_dog`
--

DROP TABLE IF EXISTS `user_dog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_dog` (
  `udogid` int(11) NOT NULL AUTO_INCREMENT,
  `udogname` varchar(100) DEFAULT NULL,
  `udogsex` varchar(10) DEFAULT NULL,
  `udogbreed` varchar(200) DEFAULT NULL,
  `udogbd` date DEFAULT NULL,
  `udoglevel` int(11) DEFAULT NULL,
  `udogprocess` varchar(45) DEFAULT NULL,
  `udogsuccess` varchar(45) DEFAULT NULL,
  `udogimg` varchar(100) DEFAULT NULL,
  `udogstatus` varchar(45) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  PRIMARY KEY (`udogid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_dog`
--

LOCK TABLES `user_dog` WRITE;
/*!40000 ALTER TABLE `user_dog` DISABLE KEYS */;
INSERT INTO `user_dog` VALUES (1,'baba','ผู้','golden','1111-11-11',79,NULL,NULL,'http://34.87.28.196/images/user/userdog/golden.png','เสร็จสิ้นแล้ว',1),(2,'ganme',NULL,NULL,NULL,NULL,NULL,NULL,'http://34.87.28.196/images/user/userdog/rotwai.png','กำลังดำเนินการ',1),(3,'สุนัขของuser 3','เมีย','begle',NULL,12,NULL,NULL,NULL,'กำลังดำเนินการ',3),(4,'สุนัขของuser 3','ผู้','dutchun',NULL,55,NULL,NULL,NULL,'กำลังดำเนินการ',3),(5,'user3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,3);
/*!40000 ALTER TABLE `user_dog` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-30 16:33:51
