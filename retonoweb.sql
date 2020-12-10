-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 06-12-2020 a las 16:55:37
-- Versión del servidor: 10.4.16-MariaDB
-- Versión de PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `retonoweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `IdAdmin` int(11) NOT NULL,
  `UsuarioAdmin` int(11) NOT NULL,
  `ContraseñaAdmin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carga`
--

CREATE TABLE `carga` (
  `IdCarga` int(11) NOT NULL,
  `IdAdmin` int(11) NOT NULL,
  `IdProducto` int(11) NOT NULL,
  `FechaDeCarga` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre_producto` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion_producto` text CHARACTER SET utf8 COLLATE utf8_spanish2_ci NOT NULL,
  `cantidad_producto` int(55) NOT NULL,
  `foto_producto` text NOT NULL,
  `precio_producto` float NOT NULL,
  `absorcion_producto` int(11) NOT NULL,
  `tipo_producto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `nombre_producto`, `descripcion_producto`, `cantidad_producto`, `foto_producto`, `precio_producto`, `absorcion_producto`, `tipo_producto`) VALUES
(1, 'Toallitas regulares', 'Toallitas regulares de 23CM. Posee 3 capas absorbentes de formato estandar o less.', 12, '', 0, 1, 'higiene intima'),
(2, 'Toallita Nocturna', 'Toallita nocturna/post parto/ incontinencia leve de 30CM. Posee 7 capas absorbentes.', 12, '', 0, 3, 'cuidado corporal'),
(3, 'Protector Estandar', 'Protector estandar 15cm. Posee 2 capas absorbentes', 100, '', 0, 2, 'combos'),
(4, 'Protector LESS', 'Protector LESS de 17CM', 32, '', 0, 0, 'accesorios'),
(6, 'Toallita Maxi', 'Toallita Maxi 25CM. Posee 5 capas absorbentes', 43, 'sdf45', 34, 0, 'regala'),
(7, 'Kit x3 unidades', 'Este kit contiene 3 unidades mas una bolsita de lienzo.', 25, '', 100, 0, '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`IdAdmin`);

--
-- Indices de la tabla `carga`
--
ALTER TABLE `carga`
  ADD PRIMARY KEY (`IdCarga`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `admin`
--
ALTER TABLE `admin`
  MODIFY `IdAdmin` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carga`
--
ALTER TABLE `carga`
  MODIFY `IdCarga` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
