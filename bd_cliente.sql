-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           5.7.21 - MySQL Community Server (GPL)
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para bd_cliente
DROP DATABASE IF EXISTS `bd_cliente`;
CREATE DATABASE IF NOT EXISTS `bd_cliente` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `bd_cliente`;

-- Copiando estrutura para tabela bd_cliente.cliente
DROP TABLE IF EXISTS `cliente`;
CREATE TABLE IF NOT EXISTS `cliente` (
  `id` int(40) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) DEFAULT NULL,
  `cep` varchar(100) DEFAULT NULL,
  `endereco` varchar(100) DEFAULT NULL,
  `municipio` varchar(100) DEFAULT NULL,
  `estado` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela bd_cliente.cliente: ~3 rows (aproximadamente)
DELETE FROM `cliente`;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
INSERT INTO `cliente` (`id`, `nome`, `cep`, `endereco`, `municipio`, `estado`) VALUES
	(1, 'Dennis Henrique Velloso', '20520-055', 'Rua Conde de Bonfim - Tijuca', 'Rio de Janeiro', 'RJ'),
	(2, 'Fatima Meireles', '20511-390', 'Rua João Alfredo - Tijuca', 'Rio de Janeiro', 'RJ'),
	(3, 'Jupira Gomes', '22630-150', 'Rua Levi Carneiro - Barra da Tijuca', 'Rio de Janeiro', 'RJ'),
	(4, 'Dennis Henrique Velloso', '20520-055', 'Rua Conde de Bonfim - Tijuca', 'Rio de Janeiro', 'RJ'),
	(5, 'Fatima Meireles', '20511-390', 'Rua João Alfredo - Tijuca', 'Rio de Janeiro', 'RJ'),
	(6, 'Jupira Gomes', '22630-150', 'Rua Levi Carneiro - Barra da Tijuca', 'Rio de Janeiro', 'RJ');
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
