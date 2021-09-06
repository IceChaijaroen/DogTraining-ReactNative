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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '159102f3-c868-11eb-86fe-42010a940004:1-549926';

--
-- Table structure for table `traindescrip`
--

DROP TABLE IF EXISTS `traindescrip`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `traindescrip` (
  `iddes` int(11) NOT NULL AUTO_INCREMENT,
  `desname` varchar(45) DEFAULT NULL,
  `des1` longtext,
  `des2` longtext,
  `des3` longtext,
  `des4` longtext,
  `des5` longtext,
  `des6` longtext,
  `gifall` varchar(100) DEFAULT NULL,
  `gif1` varchar(100) DEFAULT NULL,
  `gif2` varchar(100) DEFAULT NULL,
  `gif3` varchar(100) DEFAULT NULL,
  `gif4` varchar(100) DEFAULT NULL,
  `gif5` varchar(100) DEFAULT NULL,
  `gif6` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`iddes`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traindescrip`
--

LOCK TABLES `traindescrip` WRITE;
/*!40000 ALTER TABLE `traindescrip` DISABLE KEYS */;
INSERT INTO `traindescrip` VALUES (1,'นั่ง','1.ส่งสัญญาณให้สุนัขนั่ง','2.เมื่อสุนัขนั่งแล้ว ให้สุนัขคอย','3.ให้ขนมแล้วชมว่าเก่งมาก',NULL,NULL,NULL,'http://34.87.28.196/images/trainimg/gif/testgif.gif','http://34.87.28.196/images/trainimg/gif/test1.gif','http://34.87.28.196/images/trainimg/gif/test2.gif',NULL,NULL,NULL,NULL),(2,'คอย','1.คอย1','2.คอย','3.คอย','4.คอย','5.คอย',NULL,'http://34.87.28.196/images/trainimg/gif/test2.gif',NULL,NULL,NULL,NULL,NULL,NULL),(3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'http://34.87.28.196/images/trainimg/gif/testgif.gif',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `traindescrip` ENABLE KEYS */;
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

-- Dump completed on 2021-09-06 17:47:18
