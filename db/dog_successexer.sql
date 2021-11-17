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
-- Table structure for table `successexer`
--

DROP TABLE IF EXISTS `successexer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `successexer` (
  `idsuccess` int(11) NOT NULL AUTO_INCREMENT,
  `sumexer` int(11) DEFAULT NULL,
  `step` int(11) DEFAULT NULL,
  `idtrain` int(11) DEFAULT NULL,
  `uid` tinytext,
  `udogid` tinytext,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`idsuccess`)
) ENGINE=InnoDB AUTO_INCREMENT=1412 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `successexer`
--

LOCK TABLES `successexer` WRITE;
/*!40000 ALTER TABLE `successexer` DISABLE KEYS */;
INSERT INTO `successexer` VALUES (1,33,30,3,'1','1','2021-01-12'),(2,46,30,3,'1','1','2021-01-09'),(3,65,20,1,'1','1','2021-01-25'),(4,36,20,1,'1','1','2021-09-02'),(5,12,30,1,'1','1','2021-09-12'),(6,23,20,1,'1','1','2021-09-17'),(7,27,30,1,'1','1','2021-09-09'),(8,12,30,1,'1','1','2021-08-29'),(11,27,30,1,'1','1','2021-02-28'),(12,87,20,2,'1','1','2021-02-14'),(1146,55,20,2,'1','1','2021-02-02'),(1147,17,20,1,'1','1','2021-07-22'),(1148,23,30,1,'1','1','2021-07-12'),(1149,17,30,1,'1','1','2021-03-10'),(1150,55,20,2,'1','1','2021-03-10'),(1151,55,20,2,'1','1','2021-08-23'),(1152,11,20,1,'1','1','2021-09-05'),(1153,11,30,2,'1','1','2021-08-24'),(1155,33,30,3,'1','1','2020-08-24'),(1156,31,30,3,'1','1','2020-05-24'),(1157,31,30,3,'1','1','2021-09-22'),(1158,30,30,3,'1','1','2021-09-21'),(1159,342,20,3,'1','1','2021-09-20'),(1160,20,30,3,'1','1','2021-08-29'),(1161,46,30,3,'1','2',NULL),(1162,22,30,3,'1','2',NULL),(1163,100,20,3,'1','2',NULL),(1164,11,30,2,'1','1',NULL),(1165,162,20,1,'1','1',NULL),(1166,20,30,3,'1','1',NULL),(1167,29,30,1,'1','2',NULL),(1168,56,20,1,'1','2',NULL),(1169,24,30,3,'3','3',NULL),(1170,29,30,3,'3','3',NULL),(1171,29,30,3,'3','3',NULL),(1172,29,30,3,'3','3',NULL),(1173,29,30,2,'1','1',NULL),(1174,97,20,3,'1','1',NULL),(1175,55,20,4,'4','4',NULL),(1232,49,30,4,'4','4',NULL),(1233,49,60,4,'4','4',NULL),(1234,49,90,4,'4','4',NULL),(1238,10,1,5,'3','5','2021-10-01'),(1239,5,4,5,'3','5','2021-10-02'),(1240,4,8,5,'3','5','2021-10-03'),(1241,2,12,5,'3','5','2021-10-04'),(1242,1,16,5,'3','5','2021-10-05'),(1243,4,20,5,'3','5','2021-10-01'),(1244,3,24,5,'3','5','2021-10-01'),(1245,6,26,5,'3','5','2021-10-01'),(1246,10,1,5,'3','5','2021-10-01'),(1247,10,1,5,'3','5','2020-10-01'),(1248,10,1,5,'3','5','2020-10-01'),(1249,5,4,5,'3','5','2020-10-01'),(1250,3,4,5,'3','5','2020-10-01'),(1251,5,7,5,'3','5','2020-10-01'),(1252,3,4,5,'3','5','2020-10-01'),(1253,32,1,1,'11','6','2021-10-09'),(1254,17,2,1,'11','6','2021-10-20'),(1255,4,4,5,'11','6','2021-10-20'),(1256,9,5,5,'11','6','2021-10-20'),(1257,24,6,1,'11','9','2021-10-20'),(1258,24,7,1,'11','9','2021-10-20'),(1259,24,8,1,'11','9','2021-10-20'),(1260,9,1,1,'1','7','2021-10-20'),(1261,4,5,5,'1','7','2021-10-20'),(1262,2,9,1,'1','7','2021-10-20'),(1263,7,1,1,'1','10','2021-10-20'),(1264,5,4,1,'1','10','2021-10-20'),(1265,6,6,1,'1','7','2021-10-20'),(1266,8,7,1,'1','10','2021-10-20'),(1267,8,1,5,'1','10','2021-10-20'),(1268,11,2,5,'1','10','2021-10-20'),(1269,7,3,5,'1','10','2021-10-20'),(1270,7,4,5,'1','10','2021-10-20'),(1271,5,7,5,'1','10','2021-10-20'),(1272,4,11,5,'1','10','2021-10-20'),(1273,5,14,5,'1','7','2021-10-20'),(1274,5,17,5,'1','7','2021-10-20'),(1275,6,19,5,'1','7','2021-10-21'),(1276,8,20,5,'1','7','2021-10-21'),(1277,6,22,5,'1','7','2021-10-21'),(1278,6,24,5,'1','7','2021-10-21'),(1279,8,1,5,'1','1','2021-10-21'),(1280,5,3,5,'1','2','2021-10-21'),(1281,8,4,5,'1','1','2021-10-21'),(1282,7,1,1,'14','11','2021-10-22'),(1283,7,2,1,'14','11','2021-10-22'),(1285,73,7,1,'14','11','2021-10-22'),(1286,4,4,5,'14','11','2021-10-22'),(1288,5,10,1,'14','11','2021-10-22'),(1289,2,8,5,'14','11','2021-10-22'),(1290,5,13,1,'14','11','2021-10-22'),(1291,6,10,5,'14','11','2021-10-22'),(1292,10,21,1,'1','1','2021-10-22'),(1293,5,7,5,'1','1','2021-10-22'),(1294,69,1,1,'4619909001400302','13','2021-10-27'),(1322,3,4,1,'11','11','2021-10-28'),(1323,3,4,1,'20','17','2021-10-28'),(1324,2,8,1,'20','17','2021-10-28'),(1325,8,9,1,'20','17','2021-10-28'),(1326,5,3,5,'20','17','2021-10-28'),(1327,22,10,1,'20','17','2021-11-02'),(1328,16,4,5,'20','17','2021-11-08'),(1329,8,5,5,'20','17','2021-11-08'),(1330,6,7,5,'20','17','2021-11-08'),(1331,10,8,5,'20','17','2021-11-09'),(1332,19,25,5,'1','7','2021-11-09'),(1333,9,1,1,'21','20','2021-11-10'),(1334,3,4,5,'21','20','2021-11-10'),(1335,2,8,5,'21','20','2021-11-10'),(1336,2,12,5,'21','20','2021-11-10'),(1337,3,16,5,'21','20','2021-11-10'),(1338,1,20,5,'21','20','2021-11-10'),(1339,4,5,1,'21','20','2021-11-10'),(1340,1,9,1,'21','20','2021-11-10'),(1341,0,13,1,'21','20','2021-11-10'),(1342,2,17,1,'21','20','2021-11-10'),(1343,1,21,1,'21','20','2021-11-10'),(1344,2,4,2,'21','20','2021-11-10'),(1345,2,4,6,'21','20','2021-11-10'),(1346,2,4,7,'21','20','2021-11-10'),(1347,3,8,2,'21','20','2021-11-10'),(1348,0,12,2,'21','20','2021-11-10'),(1349,8,5,6,'21','20','2021-11-10'),(1350,2,4,5,'21','21','2021-11-10'),(1351,3,8,7,'21','20','2021-11-10'),(1352,0,12,7,'21','20','2021-11-10'),(1353,0,16,2,'21','20','2021-11-10'),(1354,0,20,2,'21','20','2021-11-10'),(1355,2,9,6,'21','20','2021-11-10'),(1356,2,13,6,'21','20','2021-11-10'),(1357,4,17,6,'21','20','2021-11-10'),(1358,1,21,6,'21','20','2021-11-10'),(1359,1,16,7,'21','20','2021-11-10'),(1360,0,20,7,'21','20','2021-11-10'),(1361,3,4,3,'21','20','2021-11-10'),(1362,3,8,3,'21','20','2021-11-10'),(1363,0,12,3,'21','20','2021-11-10'),(1364,2,16,3,'21','20','2021-11-10'),(1365,0,20,3,'21','20','2021-11-10'),(1366,2,4,8,'21','20','2021-11-10'),(1367,2,8,8,'21','20','2021-11-10'),(1368,1,12,8,'21','20','2021-11-10'),(1369,2,16,8,'21','20','2021-11-10'),(1370,2,20,8,'21','20','2021-11-10'),(1371,0,8,5,'21','21','2021-11-10'),(1372,4,12,5,'21','21','2021-11-10'),(1373,1,16,5,'21','21','2021-11-10'),(1374,3,20,5,'21','21','2021-11-10'),(1375,3,4,1,'21','21','2021-11-10'),(1376,4,8,1,'21','21','2021-11-10'),(1377,16,9,1,'21','21','2021-11-10'),(1378,2,13,1,'21','21','2021-11-10'),(1379,1,17,1,'21','21','2021-11-10'),(1380,2,21,1,'21','21','2021-11-10'),(1381,8,1,2,'21','21','2021-11-10'),(1382,8,2,2,'21','21','2021-11-10'),(1383,11,3,2,'21','21','2021-11-10'),(1384,8,4,2,'21','21','2021-11-10'),(1385,3,8,2,'21','21','2021-11-10'),(1386,2,12,2,'21','21','2021-11-10'),(1387,0,4,6,'21','21','2021-11-10'),(1388,2,8,6,'21','21','2021-11-10'),(1389,1,16,2,'21','21','2021-11-10'),(1390,1,20,2,'21','21','2021-11-10'),(1391,1,12,6,'21','21','2021-11-10'),(1392,1,16,6,'21','21','2021-11-10'),(1393,1,20,6,'21','21','2021-11-10'),(1394,1,4,7,'21','21','2021-11-10'),(1395,2,8,7,'21','21','2021-11-10'),(1396,1,12,7,'21','21','2021-11-10'),(1397,1,16,7,'21','21','2021-11-10'),(1398,1,20,7,'21','21','2021-11-10'),(1399,1,4,1,'21','22','2021-11-10'),(1400,2,8,1,'21','22','2021-11-10'),(1401,2,12,1,'21','22','2021-11-10'),(1402,1,16,1,'21','22','2021-11-10'),(1403,0,20,1,'21','22','2021-11-10'),(1404,2,4,5,'21','22','2021-11-10'),(1405,3,8,5,'21','22','2021-11-10'),(1406,3,12,5,'21','22','2021-11-10'),(1407,2,16,5,'21','22','2021-11-10'),(1408,0,20,5,'21','22','2021-11-10'),(1409,2,24,5,'21','22','2021-11-10'),(1410,25,1,5,'26','23','2021-11-11'),(1411,12,1,5,'27','24','2021-11-11');
/*!40000 ALTER TABLE `successexer` ENABLE KEYS */;
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

-- Dump completed on 2021-11-17 11:24:48
