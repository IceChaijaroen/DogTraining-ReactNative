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

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'adb7a3b9-0fa5-11ec-a30f-42010a940002:1-333919';

--
-- Table structure for table `caregiver`
--

DROP TABLE IF EXISTS `caregiver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caregiver` (
  `idcaregiver` int(11) NOT NULL AUTO_INCREMENT,
  `descrip` mediumtext,
  `img` longtext,
  `iddoginfo` int(11) DEFAULT NULL,
  PRIMARY KEY (`idcaregiver`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caregiver`
--

LOCK TABLES `caregiver` WRITE;
/*!40000 ALTER TABLE `caregiver` DISABLE KEYS */;
INSERT INTO `caregiver` VALUES (1,'มีพื้นที่กว้าง','https://static8.depositphotos.com/1526816/1048/v/600/depositphotos_10485957-stock-illustration-back-yard.jpg',1),(2,'เป็นผู้รักสัตว์','https://cdn3.vectorstock.com/i/1000x1000/83/47/cute-cartoon-dog-is-thinking-to-love-vector-2498347.jpg',1),(3,'หมั่นดูแลเรื่องขนและกลิ่นตัว','https://media.istockphoto.com/vectors/dog-sniffs-a-flower-five-senses-smell-vector-id1291954925?k=20&m=1291954925&s=612x612&w=0&h=Lk_FAQ2uCni1rAhAFgOg_t5eTJNoG5VlNCFSmLItI6Q=',1),(4,'สามารถพาสุนัขออกกำลังกายทุกวัน','https://media.istockphoto.com/vectors/dog-running-in-treadmill-to-get-bone-training-dog-to-run-or-walk-in-vector-id1225743691?k=20&m=1225743691&s=612x612&w=0&h=RtmPOPd_EK1FNlLPUIX3jipCSf6_9qWvmXAgfoyZCX8=',1),(13,'มีพื้นที่กว้าง','https://static8.depositphotos.com/1526816/1048/v/600/depositphotos_10485957-stock-illustration-back-yard.jpg',2),(14,'เป็นผู้รักสัตว์','https://cdn3.vectorstock.com/i/1000x1000/83/47/cute-cartoon-dog-is-thinking-to-love-vector-2498347.jpg',2),(15,'ใส่ใจเรื่องสุขภาพเป็นพิเศษ','https://media.istockphoto.com/vectors/dog-sniffs-a-flower-five-senses-smell-vector-id1291954925?k=20&m=1291954925&s=612x612&w=0&h=Lk_FAQ2uCni1rAhAFgOg_t5eTJNoG5VlNCFSmLItI6Q=',2),(16,'สามารถพาสุนัขออกกำลังกายทุกวัน','https://media.istockphoto.com/vectors/dog-running-in-treadmill-to-get-bone-training-dog-to-run-or-walk-in-vector-id1225743691?k=20&m=1225743691&s=612x612&w=0&h=RtmPOPd_EK1FNlLPUIX3jipCSf6_9qWvmXAgfoyZCX8=',2),(17,'มีคอกที่ใหญ่และมีรั้วสูงล้อมรอบ ในฤดูร้อนก็ควรมีพื้นที่มีร่มเงาสำหรับสุนัขพันธุ์นี้ด้วย','https://i.pinimg.com/originals/42/4c/b8/424cb87adcd9b09566d640600a1abb3c.jpg',2),(18,'การเลี้ยงดูสุนัขจำเป็นต้องอยู่ในบริเวณที่มีรั้วรอบขอบชิด','https://i.pinimg.com/originals/42/4c/b8/424cb87adcd9b09566d640600a1abb3c.jpg',3),(19,'มีเวลาให้บีเกิ้ล ไม่ควรปล่อยบีเกิลอยู่ตามลำพัง ','https://thumbs.dreamstime.com/b/child-girl-play-dog-happy-kid-child-girl-play-dog-happy-kid-pet-spend-time-together-friendship-animal-139717858.jpg',3),(20,'สามารถพาสุนัขออกกำลังกายทุกวัน','https://media.istockphoto.com/vectors/dog-running-in-treadmill-to-get-bone-training-dog-to-run-or-walk-in-vector-id1225743691?k=20&m=1225743691&s=612x612&w=0&h=RtmPOPd_EK1FNlLPUIX3jipCSf6_9qWvmXAgfoyZCX8=',3),(21,'ควรมีเวลาน้องหมาไปออกกำลังกาย เดินเล่น เพื่อปลดปล่อยพลังงานอย่างเหมาะสม','https://media.istockphoto.com/vectors/dog-running-in-treadmill-to-get-bone-training-dog-to-run-or-walk-in-vector-id1225743691?k=20&m=1225743691&s=612x612&w=0&h=RtmPOPd_EK1FNlLPUIX3jipCSf6_9qWvmXAgfoyZCX8=',4),(22,'ควรให้ความรักและความใกล้ชิดเขามากๆ','https://cdn3.vectorstock.com/i/1000x1000/83/47/cute-cartoon-dog-is-thinking-to-love-vector-2498347.jpg',4),(23,'อย่าปล่อยให้น้องหมาอยู่เพียงลำพังบ่อยๆ เพราะคอร์กี้เป็นสุนัขขี้เหงา และต้องการความรักความเอาใจใส่จากเจ้าของเป็นอย่างมากนั่นเอง','https://thumbs.dreamstime.com/b/child-girl-play-dog-happy-kid-child-girl-play-dog-happy-kid-pet-spend-time-together-friendship-animal-139717858.jpg',4),(24,'สามารถพาสุนัขคอร์กี้ออกกำลังกายประจำทุกวัน','https://media.istockphoto.com/vectors/dog-running-in-treadmill-to-get-bone-training-dog-to-run-or-walk-in-vector-id1225743691?k=20&m=1225743691&s=612x612&w=0&h=RtmPOPd_EK1FNlLPUIX3jipCSf6_9qWvmXAgfoyZCX8=',4),(25,'มีเวลาพาสุนัขออกกำลังกายทุกวันเป็นประจำ','https://media.istockphoto.com/vectors/dog-running-in-treadmill-to-get-bone-training-dog-to-run-or-walk-in-vector-id1225743691?k=20&m=1225743691&s=612x612&w=0&h=RtmPOPd_EK1FNlLPUIX3jipCSf6_9qWvmXAgfoyZCX8=',5),(26,'มีพื้นที่บ้านพื้นที่โล่งกว้างให้เขาได้วิ่งเล่นเขาจะรู้สึกดีมากๆ แต่ควรมีรั้งรอบขอบชิด','https://static8.depositphotos.com/1526816/1048/v/600/depositphotos_10485957-stock-illustration-back-yard.jpg',5),(27,'ต้องมีความอดทนต่อการฝึกพวกเขา','https://www.pikpng.com/pngl/m/473-4732797_dog-training-clipart-png-transparent-png.png',5),(28,'พวกเขาต้องการความรักและอยู่ร่วมกับครอบครัว ดังนั้นผู้เลี้ยงจึงต้องมีเวลาและเอาใจใส่','https://cdn3.vectorstock.com/i/1000x1000/83/47/cute-cartoon-dog-is-thinking-to-love-vector-2498347.jpg',5),(29,'มีกำลังทรัพย์พอต่อการเลี้ยง','https://zycrypto.com/wp-content/uploads/2018/04/A-view-at-the-Top-People-who-Became-filthy-Rich-from-Bitcoin-Technology.png',6),(30,'ไม่ว่าจะผู้อยู่คนเดียว หรือครอบครัวก็สามารถเลี้ยงได้','https://image.pngaaa.com/39/491039-middle.png',6),(31,'ผู้เลี้ยงที่เหมาะสมก็จะต้องมีเวลาในการดูแล','https://thumbs.dreamstime.com/b/child-girl-play-dog-happy-kid-child-girl-play-dog-happy-kid-pet-spend-time-together-friendship-animal-139717858.jpg',6),(32,'สุนัขไซบีเรียน ฮัสกี ไม่เหมาะกับผู้เลี้ยงสุนัขมือใหม่ หรือคนที่อยากเลี้ยงสุนัขเพียงเพราะรูปลักษณ์ภายนอก โดยไม่ศึกษาข้อมูลให้ดีก่อน เพราะความยากอันดับต้น ๆ คือเรื่องการควบคุมสุนัข และปัญหาที่ตามมาเมื่อสุนัขไม่ได้รับการออกกำลังกายที่เพียงพอ','https://media.istockphoto.com/vectors/dog-running-in-treadmill-to-get-bone-training-dog-to-run-or-walk-in-vector-id1225743691?k=20&m=1225743691&s=612x612&w=0&h=RtmPOPd_EK1FNlLPUIX3jipCSf6_9qWvmXAgfoyZCX8=',7),(33,'สุนัขไซบีเรียน ฮัสกี เหมาะสำหรับผู้ที่รักการทำกิจกรรมกลางแจ้ง การออกกำลังกายอย่างหนัก หรือชอบการวิ่งในระยะทางไกล ๆ','https://media.istockphoto.com/vectors/dog-running-in-treadmill-to-get-bone-training-dog-to-run-or-walk-in-vector-id1225743691?k=20&m=1225743691&s=612x612&w=0&h=RtmPOPd_EK1FNlLPUIX3jipCSf6_9qWvmXAgfoyZCX8=',7),(34,'สุนัขไซบีเรียน ฮัสกี เหมาะกับการเลี้ยงในสถานที่ที่มีรั้วรอบขอบชิด และแข็งแรงเพียงพอที่สุนัขจะไม่สามารถหลบหนีออกไปได้','https://static8.depositphotos.com/1526816/1048/v/600/depositphotos_10485957-stock-illustration-back-yard.jpg',7),(35,'คุณควรมีเวลาจัดการเรื่องขนของสุนัขไซบีเรียน ฮัสกี ทั้งการแปรงขนและกำจัดขนที่ติดอยู่ตามมุมต่าง ๆ ของบ้าน','https://w7.pngwing.com/pngs/948/743/png-transparent-time-management-time-attendance-clocks-organization-time-thumbnail.png',7),(36,'คุณสามารถเลี้ยงสุนัขไซบีเรียน ฮัสกี ร่วมกับสุนัขสายพันธุ์อื่น ๆ ได้ แต่ไม่แนะนำให้เลี้ยงร่วมกับสัตว์เลี้ยงชนิดอื่น ๆ','https://image.freepik.com/free-vector/cute-siberian-husky-dog-paws-up-wall-cartoon_42750-520.jpg',7);
/*!40000 ALTER TABLE `caregiver` ENABLE KEYS */;
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

-- Dump completed on 2021-11-17 11:25:07
