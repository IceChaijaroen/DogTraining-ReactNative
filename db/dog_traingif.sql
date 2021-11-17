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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'adb7a3b9-0fa5-11ec-a30f-42010a940002:1-333916';

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
  `gif` longtext,
  `descrip` varchar(200) DEFAULT NULL,
  `gifid` int(10) DEFAULT NULL,
  `trainimg` longtext,
  `step` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idgif`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `traingif`
--

LOCK TABLES `traingif` WRITE;
/*!40000 ALTER TABLE `traingif` DISABLE KEYS */;
INSERT INTO `traingif` VALUES (1,'ฝึกการตั้งตัวเป็นจ่าฝูง','','https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg','เรียกชื่อสุนัขของคุณ ด้วยน้ำเสียงที่มีความสุข',1,'http://34.87.28.196/images/trainimg/sergeant.PNG','1'),(2,'ฝึกการตั้งตัวเป็นจ่าฝูง',NULL,'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg','เมื่อสุนัขมองมา ให้รางวัลแก่สุนัข',1,'http://34.87.28.196/images/trainimg/sergeant.PNG','2'),(4,'เรียกชื่อสุนัข',NULL,'http://35.187.253.40/images/giftrain/sit/01.gif','ล่อขนมไว้ตรงจมูกสุนัข',2,'http://34.87.28.196/images/trainimg/sit.png','1'),(5,'เรียกชื่อสุนัข',NULL,'http://35.187.253.40/images/giftrain/sit/02.gif','เมื่อุนัขสนใจขนม ให้กดก้นสุนัขลงแล้วพูดว่า \"นั่ง\"',2,'http://34.87.28.196/images/trainimg/sit.png','2'),(7,NULL,NULL,'http://35.187.253.40/images/giftrain/askhand/01.gif','ซ่อนขนมไว้ในมือ จากนั้นถือไปใกล้ๆสุนัขของคุณ รอให้สุนัขยกมือขึ้นมา',3,NULL,'1'),(8,NULL,NULL,'http://35.187.253.40/images/giftrain/askhand/02.gif','ถ้าสุนัขทำได้ดียกมือให้สูงขึ้นไปอีก',3,NULL,'2'),(10,NULL,NULL,'http://35.187.253.40/images/giftrain/lookeye/01.gif','ถือขนมไว้ตรงจมูกของสุนัข',5,NULL,'1'),(11,NULL,NULL,'http://35.187.253.40/images/giftrain/lookeye/02.gif','ดึงขนมกลับมาที่ดวงตา',5,NULL,'2'),(13,NULL,NULL,'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg','ให้สุนัขหมอบอยู่ตรงหน้าคุณ ใช้ขนมหลอกล่อให้มันพลิกตัวไปด้านข้างและหมุนตัว',4,NULL,'1'),(14,NULL,NULL,'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg','หลอกล่อมันต่อโดยให้มันนอนหงายและให้ค้างอยู่แบบนั้น',4,NULL,'2'),(15,NULL,NULL,'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg','ในขณะที่สุนัขนั่งอยู่ ให้ถือขนมไว้ตรงจมูกของสุนัข จากนั้นวางขนมไว้บนพื้น',6,NULL,'1'),(16,NULL,NULL,'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg','หากสุนัขคุณยืนขึ้น ให้เลื่อนขนมออกไปเพื่อให้สุนัขอยู่ในท่าที่ไม่สบาย',6,NULL,'2'),(17,NULL,NULL,'http://35.187.253.40/images/giftrain/waiting/01.gif','ให้สุนัขนั่ง จากนั้นยกฝ่ามือของคุณแล้วพูดว่า \"รอ\"',7,NULL,'1'),(18,NULL,NULL,'http://35.187.253.40/images/giftrain/waiting/02.gif','ยกมือของคุณไว้ ก้าวถอยหลัง 1 ก้าว และก้าวไปข้างหน้า 1 ก้าว ',7,NULL,'2'),(19,NULL,NULL,'http://35.187.253.40/images/giftrain/release/01.gif','ถือขนมให้สุนัขเห็น แล้วพูดว่าปล่อย พูดซ้ำไปเรื่อยๆจนกว่าสุนัขจะปล่อย',8,NULL,'1'),(20,NULL,NULL,'http://35.187.253.40/images/giftrain/release/02.gif','เมื่อสุนัขปล่อยแล้ว ให้รางวัลสุนัข',8,NULL,'2'),(21,NULL,NULL,'http://35.187.253.40/images/giftrain/snap/01.gif','กรีดลูกเทนนิสไว้เป็นรอยแยก จากนั้นใส่ขนมไว้ข้างใน',9,NULL,'1'),(22,NULL,NULL,'http://35.187.253.40/images/giftrain/snap/02.gif','โยนลูกบอล เพื่อให้สุนัขวิ่งไปคาบ',9,NULL,'2'),(23,NULL,NULL,'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg','(ยังไม่มี)',10,NULL,'1'),(24,NULL,NULL,'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg','(ยังไม่มี)',10,NULL,'2'),(26,NULL,NULL,'http://35.187.253.40/images/giftrain/lookeye/03.gif','ยื่นขนมกลับไปที่ปากสุนัข',5,NULL,'3'),(27,NULL,NULL,'http://35.187.253.40/images/giftrain/snap/03.gif','เมื่อสุนัขคาบบอล ให้เรียกสุนัขให้กลับมาหา',9,NULL,'3'),(28,NULL,NULL,'http://35.187.253.40/images/giftrain/waiting/01.gif','ให้อาหารสุนัขและชมว่าเก่งมาก',7,NULL,'3'),(29,NULL,NULL,'http://35.187.253.40/images/giftrain/askhand/03.gif','ยืนขึ้นและให้บอกสุนัขของคุณว่า “จับมือ” จากนั้นให้รางวัล',3,NULL,'3'),(30,NULL,NULL,'http://35.187.253.40/images/giftrain/snap/04.gif','ให้รางวัลสุนัข',9,NULL,'4'),(31,NULL,NULL,'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg','เมื่อสุนัขนอนหงายได้แล้ว ให้รางวัล',4,NULL,'3'),(32,NULL,NULL,'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg','หากสุนัขก้มหัวลง ให้ถือขนมไว้นิ่งๆหรือดันขนมเข้าหาจนกระทั่งสุนัขของคุณหมอบ',6,NULL,'3'),(33,NULL,NULL,'http://35.187.253.40/images/giftrain/sit/03.gif','ให้รางวัลสุนัข',2,NULL,'3');
/*!40000 ALTER TABLE `traingif` ENABLE KEYS */;
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

-- Dump completed on 2021-11-17 11:24:51
