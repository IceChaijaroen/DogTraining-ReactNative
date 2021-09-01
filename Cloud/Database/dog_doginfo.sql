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
-- Table structure for table `doginfo`
--

DROP TABLE IF EXISTS `doginfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doginfo` (
  `iddoginfo` int(11) NOT NULL AUTO_INCREMENT,
  `dogname` varchar(200) DEFAULT NULL,
  `origin` text,
  `typeuse` text,
  `habit` text,
  `size` text,
  `ears` text,
  `body` text,
  `tail` text,
  `wool` text,
  `woolcolor` varchar(500) DEFAULT NULL,
  `care` text,
  `shower` varchar(500) DEFAULT NULL,
  `comb` varchar(500) DEFAULT NULL,
  `exercise` varchar(500) DEFAULT NULL,
  `caregiver` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`iddoginfo`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doginfo`
--

LOCK TABLES `doginfo` WRITE;
/*!40000 ALTER TABLE `doginfo` DISABLE KEYS */;
INSERT INTO `doginfo` VALUES (1,'โกลเด้น รีทรีฟเวอร์ (Golden retriever)','มีถิ่นกำเนิดในประเทศอังกฤษและสก๊อตแลนด์ โดยมีการบันทึกไว้ในช่วงทศวรรษที่ 1860   ซึ่งบันทึกไว้ว่าได้มีคณะละครสัตว์ของรัฐเซีย ได้นำฝูง สุนัข มาแสดง จนทำให้ท่านลอร์ด  ทวีดมัธ  ( Lord  Tweedmouth ) รู้สึกประทับใจ จึงได้ทำการขอซื้อ ไว้แล้วนำมาผสมพันธุ์หลายชั่วอายุจึงได้สายพันธุ์ โกลเด้น รีทรีฟเวอร์ ในที่สุดแต่การนำมาผสมกับสายพันธุ์ไหนนั้น ยังไม่มีหลักฐานสรุปที่แน่นอน แต่มีการสันนิษฐานว่า โกลเด้น มีสายเลือดผสมระหว่างสุนัขพันธุ์ Yellow Flat-Coated  Retriever และ Light-Coated Tweed Water Spaniels และอาจจะมีสายพันธุ์ ของ Newfoundland หรือ Bloodhound ผสมอยู่ด้วย','โกลเด้น รีทรีฟเวอร์ เป็นสุนัขที่มีความ เชี่ยวชาญทางน้ำ โดยแต่เดิมเป็น สุนัข ที่ใช้ในกีฬา ล่าสัตว์ นายพรานจะใช้ โกลเด้น ไปเก็บเป็ดน้ำที่ยิง ได้กลับมา เนื่องจากมีประสาทสัมผัสดีเลิศทั้งใน ด้านของการฟังเสียง การดมกลิ่นสะกดรอย นอกจากนี้ โกลเด้น ยังมีสายตาอันเฉียบคมและ แม่นยำ ด้วยเหตุนี้วงการทหารและตำรวจในหลายๆ ประเทศจึงได้นำ สุนัขพันธุ์โกลเด้น นี้มาฝึกเพื่อไว้ ช่วยงานราชการ อาทิเช่น ตรวจค้นยาเสพติด, ดมกลิ่นสะกดรอยคนร้าย, ยามรักษาความปลอดภัย แต่ที่ดูเหมือนจะได้รับความนิยมสูงสุด ก็เห็นจะได้ แก่ฝึกให้เป็น สุนัข นำทางคนตาบอด ทั้งนี้เพราะ โกลเด้น รีทรีฟเวอร์ เป็นสุนัขฉลาด และสุภาพ โกลเด้น รีทรีฟเวอร์ หรือที่บางคนเรียก เยลโล่ รีทรีฟเวอร์ ( YELLOW RETRIEVER ) เป็นที่รู้จักและนิยมเลี้ยงกันแพร่หลายในประเทศ อังกฤษ จนในปี ค.ศ. 1930 โกลเด้น ก็เริ่มเป็นที่ นิยมในสหรัฐอเมริกา โดยยุคนั้นชาวอเมริกันส่วน ใหญ่จะเลี้ยง โกลเด้น รีทรีฟเวอร์ ไว้เพื่อเป็นนักล่า ต่อมาในเดือนกรกฎาคม ค.ศ. 1977 ได้จัดให้มีการประกวดความสามารถและความ ฉลาดแสนรู้ของ สุนัข ซึ่งผลปรากฏว่า สุนัข ที่ได้ รางวัลที่ 1-3 ล้วนเป็น สุนัขพันธุ์โกลเด้น รีทรีฟเวอร์ ทั้งสิ้น จากผลการประกวดในครั้งนั้น ทำให้ชาวอเมริกันเริ่มเกิดความตื่นตัว และหันมา ให้ความสนใจเลี้ยง สุนัขพันธุ์โกลเด้น เป็นสัตว์เลี้ยง กันมากขึ้น','http://34.87.28.196/images/golden/','มีความสูงประมาณ 21 - 24 นิ้ว','หูตก','โครงสร้างลำตัวกระชับได้สัดส่วน ','ควรตั้งอยู่ในตำแหน่งสูงสุดต่อ','ขนดกแน่น สามารถปกป้องน้ำได้เป็นอย่างดี ',NULL,'                 โกลเด้นฯ เป็นสุนัขที่มีขนร่วงมาก ','1 - 2 ครั้ง ต่อสัปดาห์ ','แปรงและหวีขน','ควรแบ่งเวลาวันละ 5-10 นาที ','เป็นผู้รักสัตว์'),(2,'ลาบราเดอร์ รีทรีฟเวอร์ (Labrador Retriver','แหล่งกำเนิด Labrador','ประเภท Labrador','http://34.87.28.196/images/labrador/','wrewrfewf',NULL,'ewevdbfnrfn',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,'บีเกิ้ล (Begle)','เกิดไหนก็ได้ Begle','ประเภท Begle','http://34.87.28.196/images/beglever.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,'คอร์กี้ (Corgi)','แหล่งกำเนิด Corgi','ประเภท Corgi','http://34.87.28.196/images/corgiver.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'ชิบะ (Shiba)','แหล่งกำเนิด Shiba','ประเภท Shiba','http://34.87.28.196/images/8c759f4d1e7b70750e8766f098ce0029fb725465.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'เยอรมัน เชฟเฟิร์ด (Rottweiler)','แหล่งกำเนิด Rottweiler','ประเภท Rottweiler','http://34.87.28.196/images/rottweiler-1.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'ไซบีเรียน ฮัสกี (Siberian Husky)','แหล่งกำเนิด Siberian Husky','ประเภท Siberian Husky','http://34.87.28.196/images/goldenretrieversf1.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `doginfo` ENABLE KEYS */;
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

-- Dump completed on 2021-08-30 16:33:55
