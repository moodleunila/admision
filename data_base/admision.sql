-- MySQL dump 10.16  Distrib 10.1.26-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: admision
-- ------------------------------------------------------
-- Server version	10.1.26-MariaDB-0+deb9u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cat_campus`
--

DROP TABLE IF EXISTS `cat_campus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_campus` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `activo` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_campus`
--

LOCK TABLES `cat_campus` WRITE;
/*!40000 ALTER TABLE `cat_campus` DISABLE KEYS */;
INSERT INTO `cat_campus` VALUES (1,'Sur','(55) 9171 9670','Pedro Henríquez Ureña 173,Col. Los Reyes Del. Coyoacán, México DF. ','2018-07-02 00:00:00','2018-07-02 00:00:00','',1),(2,'Roma','(55) 36 40 08 70','Chihuahua 202, Col. Roma, Del. Cuauhtémoc, México DF. ','2018-07-02 00:00:00','2018-07-02 00:00:00','',1),(3,'Cuautla','(735) 352 4697 y 354 5120','Carretera Federal México-Oaxaca 1060, Col. Hermenegildo Galeana, Cuautla, Morelos.','2018-07-02 00:00:00','2018-07-02 00:00:00','',1),(4,'Cuernavaca','(777) 160 1020 al 49','Vicente Guerrero 1806, Col. Las Maravillas, Cuernavaca, Morelos. ','2018-07-02 00:00:00','2018-07-02 00:00:00','',1);
/*!40000 ALTER TABLE `cat_campus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_modalidad`
--

DROP TABLE IF EXISTS `cat_modalidad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_modalidad` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `activo` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_modalidad`
--

LOCK TABLES `cat_modalidad` WRITE;
/*!40000 ALTER TABLE `cat_modalidad` DISABLE KEYS */;
INSERT INTO `cat_modalidad` VALUES (1,'Matutino','Turno de hora x - y','2018-07-03 00:00:00','2018-07-03 00:00:00',1),(2,'Vespertino','Turno de hora v - w','2018-07-03 00:00:00','2018-07-03 00:00:00',1),(3,'SUA','Sistema de Universidad Abierta','2018-07-03 00:00:00','2018-07-03 00:00:00',1),(4,'EAD','Educación a Distancia','2018-07-03 00:00:00','2018-07-03 00:00:00',0);
/*!40000 ALTER TABLE `cat_modalidad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_nivel_educativo`
--

DROP TABLE IF EXISTS `cat_nivel_educativo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_nivel_educativo` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `activo` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_nivel_educativo`
--

LOCK TABLES `cat_nivel_educativo` WRITE;
/*!40000 ALTER TABLE `cat_nivel_educativo` DISABLE KEYS */;
INSERT INTO `cat_nivel_educativo` VALUES (1,'Básico','','2018-07-02 00:00:00','2018-07-02 00:00:00',1),(2,'Medio Superior','','2018-07-02 00:00:00','2018-07-02 00:00:00',1),(3,'Superior','','2018-07-02 00:00:00','2018-07-02 00:00:00',1),(4,'Posgrado','','2018-07-02 00:00:00','2018-07-02 00:00:00',1);
/*!40000 ALTER TABLE `cat_nivel_educativo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_plan_estudios`
--

DROP TABLE IF EXISTS `cat_plan_estudios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_plan_estudios` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime NOT NULL,
  `activo` tinyint(1) NOT NULL,
  `fk_nivel_educativo` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_nivel_educativo` (`fk_nivel_educativo`),
  CONSTRAINT `cat_plan_estudios_ibfk_1` FOREIGN KEY (`fk_nivel_educativo`) REFERENCES `cat_nivel_educativo` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_plan_estudios`
--

LOCK TABLES `cat_plan_estudios` WRITE;
/*!40000 ALTER TABLE `cat_plan_estudios` DISABLE KEYS */;
INSERT INTO `cat_plan_estudios` VALUES (0,'todos','registro ocupado en el home','2018-07-03 00:00:00','2018-07-03 00:00:00',1,1),(1,'Secundaria','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,1),(2,'Bachillerato Tecnológico en Comunicación - DGTI','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,2),(3,'Bachillerato Tecnológico en Informática - DGTI','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,2),(4,'Bachillerato Tecnológico en Turismo - DGTI','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,2),(5,'Bachillerato Tecnológico en Ventas - DGTI','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,2),(6,'Preparatoria - UNAM','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,2),(7,'Colegio de Ciencias y Humanidades - UNAM','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,2),(8,'Licenciatura en Derecho - UNAM','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(9,'Licenciatura en Administración  - UNAM','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(10,'Licenciatura en Psicología  - UNAM','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(11,'Licenciatura en Informática  - UNAM','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(12,'Licenciatura en Pedagogía  - UNAM','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(13,'Licenciatura en Contaduría y Gestión Financiera - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(14,'Licenciatura en Gastronomía y Administración Operativa - UNAM','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(15,'Licenciatura en Ciencias de la Comunicación y Periodismo - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(16,'Licenciatura en Mercadotecnia y Publicidad - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(17,'Licenciatura en Turismo - UNAM','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(18,'Maestría en Administración de Negocios - SEP','','2018-07-01 00:00:00','2018-07-02 00:00:00',1,4),(19,'Maestría en Alta Dirección en Mercadotecnia - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,4),(20,'Maestría en Comunicación Digital - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,4),(21,'Maestría en Derecho Penal con Énfasis en Juicios Adversariales - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,4),(22,'Maestría en Docencia - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,4),(23,'Maestría en Gestión y Finanzas Públicas - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,4),(24,'Maestría en Recursos Humanos - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,4),(25,'Doctorado en Educación - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,4),(26,'Licenciatura en Derecho - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,3),(27,'Especialidad en Publicidad - SEP','','2018-07-02 00:00:00','2018-07-02 00:00:00',1,4);
/*!40000 ALTER TABLE `cat_plan_estudios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_lead`
--

DROP TABLE IF EXISTS `tbl_lead`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tbl_lead` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(512) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `celular` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `fk_plan_estudios` bigint(20) NOT NULL,
  `fk_campus` bigint(20) NOT NULL,
  `fk_modalidad` bigint(20) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `asunto` varchar(255) COLLATE utf8_spanish_ci NOT NULL,
  `mensaje` varchar(1500) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_plan_estudios` (`fk_plan_estudios`,`fk_campus`),
  KEY `fk_campus` (`fk_campus`),
  KEY `fk_modalidad` (`fk_modalidad`),
  CONSTRAINT `tbl_lead_ibfk_1` FOREIGN KEY (`fk_plan_estudios`) REFERENCES `cat_plan_estudios` (`id`),
  CONSTRAINT `tbl_lead_ibfk_2` FOREIGN KEY (`fk_campus`) REFERENCES `cat_campus` (`id`),
  CONSTRAINT `tbl_lead_ibfk_3` FOREIGN KEY (`fk_modalidad`) REFERENCES `cat_modalidad` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_lead`
--

LOCK TABLES `tbl_lead` WRITE;
/*!40000 ALTER TABLE `tbl_lead` DISABLE KEYS */;
/*!40000 ALTER TABLE `tbl_lead` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-04 13:18:23
