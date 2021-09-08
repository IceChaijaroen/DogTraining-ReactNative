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


--
-- GTID state at the beginning of the backup 
--



--
-- Table structure for table `traingif`
--

DROP TABLE IF EXISTS `traingif`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `traingif` (
  `idgif` int(11) NOT NULL AUTO_INCREMENT,
  `gifname` varchar(100) DEFAULT NULL,
  `gifall` varchar(100) DEFAULT NULL,
  `gif` varchar(100) DEFAULT NULL,
  `descrip` varchar(200) DEFAULT NULL,
  `gifid` int(10) DEFAULT NULL,
  `trainimg` varchar(200) DEFAULT NULL,
  `step` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idgif`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traingif`
--

LOCK TABLES `traingif` WRITE;
/*!40000 ALTER TABLE `traingif` DISABLE KEYS */;
INSERT INTO `traingif` VALUES (1,'ฝึกการตั้งตัวเป็นจ่าฝูง','','http://34.87.28.196/images/trainimg/gif/test1.gif','ให้สุนัขเดินเข้าออกประตู หลังเราเสมอ คือ ฝึกให้สุนัขนั่งรอก่อน เราเดินเข้า แล้วค่อยเรียกให้สุนัขตามเข้ามา',1,'http://34.87.28.196/images/trainimg/sergeant.PNG','ขั้นตอนที่ 1'),(2,'ฝึกการตั้งตัวเป็นจ่าฝูง',NULL,'http://34.87.28.196/images/trainimg/gif/test2.gif','เวลาเดินในสายจูง ต้องไม่ให้สุนัขดึงเรา เราเดินนำหน้าเสมอ (ต้องฝึก)',1,'http://34.87.28.196/images/trainimg/sergeant.PNG','ขั้นตอนที่ 2'),(3,'ฝึกการตั้งตัวเป็นจ่าฝูง',NULL,'http://34.87.28.196/images/trainimg/gif/testgif.gif','ฝึกเรียกให้มาหาเรา (Recall) เราจะไม่เดินหรือวิ่งตามสุนัข จ่าฝูงไม่เคยเดินตามลูกฝูง',1,'http://34.87.28.196/images/trainimg/sergeant.PNG','ขั้นตอนที่ 3'),(4,'เรียกชื่อสุนัข',NULL,'http://34.87.28.196/images/trainimg/gif/test2.gif','เรียกให้มาหา',2,'http://34.87.28.196/images/trainimg/sit.png','ขั้นตอนที่ 1'),(5,'เรียกชื่อสุนัข',NULL,'http://34.87.28.196/images/trainimg/gif/testgif.gif','บอกให้นั่ง',2,'http://34.87.28.196/images/trainimg/sit.png','ขั้นตอนที่ 2'),(6,'เรียกชื่อสุนัข',NULL,'http://34.87.28.196/images/trainimg/gif/test1.gif','ให้อาหาร',2,'http://34.87.28.196/images/trainimg/sit.png','ขั้นตอนที่ 3'),(7,NULL,NULL,NULL,NULL,3,NULL,NULL),(8,NULL,NULL,NULL,NULL,3,NULL,NULL);
/*!40000 ALTER TABLE `traingif` ENABLE KEYS */;
UNLOCK TABLES;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-06 17:47:27
