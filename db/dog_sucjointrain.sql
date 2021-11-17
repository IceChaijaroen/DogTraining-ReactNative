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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'adb7a3b9-0fa5-11ec-a30f-42010a940002:1-333917';

--
-- Table structure for table `sucjointrain`
--

DROP TABLE IF EXISTS `sucjointrain`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sucjointrain` (
  `idjoin` int(11) NOT NULL AUTO_INCREMENT,
  `sumstep` int(11) DEFAULT NULL,
  `uid` tinytext,
  `idexer` int(11) DEFAULT NULL,
  `udogid` tinytext,
  PRIMARY KEY (`idjoin`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sucjointrain`
--

LOCK TABLES `sucjointrain` WRITE;
/*!40000 ALTER TABLE `sucjointrain` DISABLE KEYS */;
INSERT INTO `sucjointrain` VALUES (1,21,'1',1,'1'),(2,170,'1',2,'1'),(11,280,'1',3,'1'),(12,310,'1',3,'2'),(13,350,'1',1,'2'),(14,120,'3',3,'3'),(19,7,'5',5,'5'),(20,4,'3',5,'5'),(21,6,'6',6,'6'),(22,2,'11',1,'6'),(23,5,'11',5,'6'),(24,6,'1',1,'7'),(25,7,'1',1,'10'),(26,11,'1',5,'10'),(27,7,'1',5,'1'),(28,3,'1',5,'2'),(29,13,'14',1,'11'),(30,10,'14',5,'11'),(31,1,'4619909001400302',1,'13'),(32,22,'11',1,'11'),(33,21,'11',2,'11'),(34,21,'11',2,'11'),(35,21,'11',2,'11'),(36,21,'11',2,'11'),(37,21,'11',2,'11'),(38,21,'11',2,'11'),(39,21,'11',2,'11'),(40,21,'11',2,'11'),(41,21,'11',2,'11'),(42,21,'11',2,'11'),(43,4,'11',1,'11'),(44,4,'11',1,'11'),(45,10,'20',1,'17'),(46,8,'20',5,'17'),(47,21,'21',1,'20'),(48,20,'21',5,'20'),(49,20,'21',2,'20'),(50,21,'21',6,'20'),(51,20,'21',7,'20'),(52,20,'21',5,'21'),(53,20,'21',3,'20'),(54,20,'21',8,'20'),(55,21,'21',1,'21'),(56,20,'21',2,'21'),(57,20,'21',6,'21'),(58,20,'21',7,'21'),(59,20,'21',1,'22'),(60,24,'21',5,'22'),(61,1,'26',5,'23'),(62,1,'27',5,'24');
/*!40000 ALTER TABLE `sucjointrain` ENABLE KEYS */;
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

-- Dump completed on 2021-11-17 11:24:58
