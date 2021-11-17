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
-- Table structure for table `graphevo`
--

DROP TABLE IF EXISTS `graphevo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `graphevo` (
  `idgraph` int(11) NOT NULL AUTO_INCREMENT,
  `evovalue` varchar(45) DEFAULT NULL,
  `uid` tinytext,
  `udogid` tinytext,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`idgraph`)
) ENGINE=InnoDB AUTO_INCREMENT=90 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `graphevo`
--

LOCK TABLES `graphevo` WRITE;
/*!40000 ALTER TABLE `graphevo` DISABLE KEYS */;
INSERT INTO `graphevo` VALUES (1,'4','20','17','2021-10-28'),(2,'8','20','17','2021-10-28'),(3,'9','20','17','2021-10-28'),(4,'12','20','17','2021-10-28'),(5,'13','20','17','2021-11-02'),(6,'14','20','17','2021-11-08'),(7,'15','20','17','2021-11-08'),(8,'17','20','17','2021-11-08'),(9,'18','20','17','2021-11-09'),(10,'1','1','7','2021-11-09'),(11,'1','21','20','2021-11-10'),(12,'5','21','20','2021-11-10'),(13,'9','21','20','2021-11-10'),(14,'13','21','20','2021-11-10'),(15,'17','21','20','2021-11-10'),(16,'21','21','20','2021-11-10'),(17,'25','21','20','2021-11-10'),(18,'29','21','20','2021-11-10'),(19,'33','21','20','2021-11-10'),(20,'37','21','20','2021-11-10'),(21,'41','21','20','2021-11-10'),(22,'45','21','20','2021-11-10'),(23,'49','21','20','2021-11-10'),(24,'53','21','20','2021-11-10'),(25,'57','21','20','2021-11-10'),(26,'61','21','20','2021-11-10'),(27,'62','21','20','2021-11-10'),(28,'4','21','21','2021-11-10'),(29,'66','21','20','2021-11-10'),(30,'70','21','20','2021-11-10'),(31,'74','21','20','2021-11-10'),(32,'78','21','20','2021-11-10'),(33,'82','21','20','2021-11-10'),(34,'86','21','20','2021-11-10'),(35,'90','21','20','2021-11-10'),(36,'94','21','20','2021-11-10'),(37,'98','21','20','2021-11-10'),(38,'102','21','20','2021-11-10'),(39,'106','21','20','2021-11-10'),(40,'110','21','20','2021-11-10'),(41,'114','21','20','2021-11-10'),(42,'118','21','20','2021-11-10'),(43,'122','21','20','2021-11-10'),(44,'126','21','20','2021-11-10'),(45,'130','21','20','2021-11-10'),(46,'134','21','20','2021-11-10'),(47,'138','21','20','2021-11-10'),(48,'142','21','20','2021-11-10'),(49,'8','21','21','2021-11-10'),(50,'12','21','21','2021-11-10'),(51,'16','21','21','2021-11-10'),(52,'20','21','21','2021-11-10'),(53,'24','21','21','2021-11-10'),(54,'28','21','21','2021-11-10'),(55,'29','21','21','2021-11-10'),(56,'33','21','21','2021-11-10'),(57,'37','21','21','2021-11-10'),(58,'41','21','21','2021-11-10'),(59,'42','21','21','2021-11-10'),(60,'43','21','21','2021-11-10'),(61,'44','21','21','2021-11-10'),(62,'45','21','21','2021-11-10'),(63,'49','21','21','2021-11-10'),(64,'53','21','21','2021-11-10'),(65,'57','21','21','2021-11-10'),(66,'61','21','21','2021-11-10'),(67,'65','21','21','2021-11-10'),(68,'69','21','21','2021-11-10'),(69,'73','21','21','2021-11-10'),(70,'77','21','21','2021-11-10'),(71,'81','21','21','2021-11-10'),(72,'85','21','21','2021-11-10'),(73,'89','21','21','2021-11-10'),(74,'93','21','21','2021-11-10'),(75,'97','21','21','2021-11-10'),(76,'101','21','21','2021-11-10'),(77,'4','21','22','2021-11-10'),(78,'8','21','22','2021-11-10'),(79,'12','21','22','2021-11-10'),(80,'16','21','22','2021-11-10'),(81,'20','21','22','2021-11-10'),(82,'24','21','22','2021-11-10'),(83,'28','21','22','2021-11-10'),(84,'32','21','22','2021-11-10'),(85,'36','21','22','2021-11-10'),(86,'40','21','22','2021-11-10'),(87,'44','21','22','2021-11-10'),(88,'1','26','23','2021-11-11'),(89,'1','27','24','2021-11-11');
/*!40000 ALTER TABLE `graphevo` ENABLE KEYS */;
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

-- Dump completed on 2021-11-17 11:24:59