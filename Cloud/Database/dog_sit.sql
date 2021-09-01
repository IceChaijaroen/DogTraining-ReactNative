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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '159102f3-c868-11eb-86fe-42010a940004:1-493917';

--
-- Table structure for table `sit`
--

DROP TABLE IF EXISTS `sit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sit` (
  `idsit` int(11) NOT NULL AUTO_INCREMENT,
  `seconds` float DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `exerid` int(11) DEFAULT NULL,
  PRIMARY KEY (`idsit`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sit`
--

LOCK TABLES `sit` WRITE;
/*!40000 ALTER TABLE `sit` DISABLE KEYS */;
INSERT INTO `sit` VALUES (1,5,1,1,1),(2,4,2,1,1),(3,5,3,1,1),(4,4,4,1,1),(5,3,5,1,1),(6,4,6,1,1),(7,10,7,1,1),(8,4,8,1,1),(9,5,9,1,1),(10,11,10,1,1),(11,1,11,NULL,1),(12,1,12,NULL,1),(13,1,13,NULL,1),(14,1,14,NULL,1),(15,1,15,NULL,1),(16,1,16,NULL,1),(17,1,17,NULL,1),(18,1,18,NULL,1),(19,1,19,NULL,1),(20,1,20,NULL,1),(21,1,21,NULL,1),(22,1,22,NULL,1),(23,1,23,NULL,1),(24,1,24,NULL,1),(25,1,25,NULL,1),(26,1,26,NULL,1),(27,1,27,NULL,1),(49,21,28,1,NULL),(66,0,29,1,NULL),(68,NULL,30,NULL,NULL);
/*!40000 ALTER TABLE `sit` ENABLE KEYS */;
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

-- Dump completed on 2021-08-30 16:33:53