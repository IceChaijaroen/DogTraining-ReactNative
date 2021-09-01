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
-- Table structure for table `dogtrain`
--

DROP TABLE IF EXISTS `dogtrain`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dogtrain` (
  `idtrain` int(11) NOT NULL AUTO_INCREMENT,
  `trainname` varchar(100) DEFAULT NULL,
  `trainlevel` int(11) DEFAULT NULL,
  `traindescrip` varchar(500) DEFAULT NULL,
  `trainimg` varchar(500) DEFAULT NULL,
  `traingif` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`idtrain`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dogtrain`
--

LOCK TABLES `dogtrain` WRITE;
/*!40000 ALTER TABLE `dogtrain` DISABLE KEYS */;
INSERT INTO `dogtrain` VALUES (1,'ฝึกการตั้งตัวเป็นจ่าฝูง',0,'ยังไม่มีฝึกการตั้งตัวเป็นจ่าฝูง','http://34.87.28.196/images/trainimg/sergeant.PNG',NULL),(2,'ฝึกนั่ง',1,'ยังไม่มีฝึกนั่ง','http://34.87.28.196/images/trainimg/sit.png',NULL),(3,'ขอมือ',2,'ยังไม่มีขอมือ','http://34.87.28.196/images/trainimg/handgrey.png',NULL),(4,'โดนยิง',3,'ยังไม่มีโดนยิง','http://34.87.28.196/images/trainimg/gun.png',NULL),(5,'เรียกชื่อสุนัข',0,'ยังไม่มีเรียกชื่อสุนัข','http://34.87.28.196/images/trainimg/callname.png',NULL);
/*!40000 ALTER TABLE `dogtrain` ENABLE KEYS */;
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

-- Dump completed on 2021-08-30 16:33:49
