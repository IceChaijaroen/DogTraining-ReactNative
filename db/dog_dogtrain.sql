-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 35.187.225.30    Database: dog
-- ------------------------------------------------------
-- Server version	5.7.36-google-log

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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'adb7a3b9-0fa5-11ec-a30f-42010a940002:1-333915';

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
  `trainimg` longtext,
  `trainall` longtext,
  PRIMARY KEY (`idtrain`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dogtrain`
--

LOCK TABLES `dogtrain` WRITE;
/*!40000 ALTER TABLE `dogtrain` DISABLE KEYS */;
INSERT INTO `dogtrain` VALUES (1,'สอนให้สุนัขรู้จักชื่อตัวเอง',0,'http://35.187.253.40/images/trainimg/callname.png',NULL),(2,'ฝึกนั่ง',1,'http://35.187.253.40/images/giftrain/sit/font.png','http://35.187.253.40/images/giftrain/sit/all.gif'),(3,'ขอมือ',2,'http://35.187.253.40/images/giftrain/askhand/font.png','http://35.187.253.40/images/giftrain/askhand/all.gif'),(4,'โดนยิง',3,'http://35.187.253.40/images/trainimg/gun.png',NULL),(5,'สอนสุนัขสบตา',0,'http://35.187.253.40/images/giftrain/lookeye/font.png','http://35.187.253.40/images/giftrain/lookeye/all.gif'),(6,'หมอบ',1,'https://image.picscut.com/png-clipart/20210511/ourlarge/picscut-corgi-clipart-prone-position-dog-animal-png-image_23413.jpg',NULL),(7,'คอย',1,'http://35.187.253.40/images/giftrain/waiting/font.png','http://35.187.253.40/images/giftrain/waiting/all.gif'),(8,'ปล่อย',2,'http://35.187.253.40/images/giftrain/release/font.png','http://35.187.253.40/images/giftrain/release/all.gif'),(9,'เกมคาบบอล',3,'http://35.187.253.40/images/giftrain/snap/font.png','http://35.187.253.40/images/giftrain/snap/all.gif'),(10,'ท่าสวัสดี',3,'https://i.pinimg.com/originals/4c/c1/16/4cc116b78b0e461ba9fb604d8ce67b98.png',NULL);
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

-- Dump completed on 2021-11-17 11:24:46
