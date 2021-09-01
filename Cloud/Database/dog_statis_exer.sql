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
-- Table structure for table `statis_exer`
--

DROP TABLE IF EXISTS `statis_exer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statis_exer` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `sit` int(11) DEFAULT NULL,
  `askinghand` int(11) DEFAULT NULL,
  `wait` int(11) DEFAULT NULL,
  `count` int(11) DEFAULT NULL,
  `idtrain` int(11) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=397 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statis_exer`
--

LOCK TABLES `statis_exer` WRITE;
/*!40000 ALTER TABLE `statis_exer` DISABLE KEYS */;
INSERT INTO `statis_exer` VALUES (1,11,NULL,NULL,1,NULL,NULL),(2,3,NULL,NULL,2,NULL,1),(3,2,NULL,NULL,3,NULL,1),(4,1,NULL,NULL,4,NULL,1),(5,1,NULL,NULL,5,NULL,1),(6,1,NULL,NULL,6,NULL,1),(365,5,NULL,NULL,7,NULL,NULL),(366,8,NULL,NULL,8,NULL,NULL),(367,4,NULL,NULL,9,NULL,NULL),(368,5,NULL,NULL,10,NULL,NULL),(369,6,NULL,NULL,11,NULL,NULL),(370,12,NULL,NULL,12,NULL,NULL),(371,1,NULL,NULL,13,NULL,NULL),(372,4,NULL,NULL,14,NULL,NULL),(373,5,NULL,NULL,15,NULL,NULL),(374,7,NULL,NULL,16,NULL,NULL),(375,5,NULL,NULL,17,NULL,NULL),(376,0,NULL,NULL,18,NULL,NULL),(377,10,NULL,NULL,19,NULL,NULL),(378,20,NULL,NULL,20,NULL,NULL),(379,17,NULL,NULL,21,NULL,NULL),(380,11,NULL,NULL,22,NULL,NULL),(381,2,NULL,NULL,23,NULL,NULL),(382,5,NULL,NULL,24,NULL,NULL),(383,4,NULL,NULL,25,NULL,NULL),(384,7,NULL,NULL,26,NULL,NULL),(385,9,NULL,NULL,27,NULL,NULL),(386,10,NULL,NULL,28,NULL,NULL),(387,11,NULL,NULL,29,NULL,NULL),(388,9,NULL,NULL,30,NULL,NULL),(389,11,NULL,NULL,31,NULL,NULL),(390,12,NULL,NULL,32,NULL,NULL),(391,18,NULL,NULL,33,NULL,NULL),(392,1,NULL,NULL,34,NULL,1),(393,3,NULL,NULL,35,NULL,1),(394,4,NULL,NULL,36,NULL,1),(395,1,NULL,NULL,37,NULL,1),(396,1,NULL,NULL,38,NULL,1);
/*!40000 ALTER TABLE `statis_exer` ENABLE KEYS */;
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

-- Dump completed on 2021-08-30 16:33:58
