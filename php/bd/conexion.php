<?php
$host = "localhost";
$user = "root";
$pass = "";
$bd = "retonoweb";
$servidor = 'mysql:dbname=' . $bd . ';host=' . $host . '.';

function conectarBD()
{
    try {
        $GLOBALS['pdo'] = new PDO($GLOBALS['servidor'], $GLOBALS['user'], $GLOBALS['pass']);
        $GLOBALS['pdo']->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo 'conexion a la base de datos fallida.';
        echo $e;
        die();
    }
}
function desconectarBD()
{
    $GLOBALS['pdo'] = null;
}
function getBD($query)
{
    try {
        conectarBD();
        $consulta = $GLOBALS['pdo']->prepare($query);
        $consulta->setFetchMode(PDO::FETCH_ASSOC);
        $consulta->execute();
        desconectarBD();
        return $consulta;
    } catch (PDOException $e) {
        die('error: '.$e);
    }
}

function postBD($query,$queryIncrement)
{
    try {
        conectarBD();
        $consulta = $GLOBALS['pdo']->prepare($query);
        $consulta->execute();
        $idIncrement = getBD($queryIncrement)->fetch(PDO::FETCH_ASSOC);
        $resultado = array_merge($idIncrement,$_POST);
        $consulta->closeCursor();
        desconectarBD();
        return $resultado;
    } catch (PDOException $e) {
        die('error: '.$e);
    }
}

function putBD($query)
{
    try {
        conectarBD();
        $consulta = $GLOBALS['pdo']->prepare($query);
        $consulta->execute();
        $resultado = array_merge($_GET,$_POST);
        $consulta->closeCursor();
        desconectarBD();
        return $resultado;
    } catch (PDOException $e) {
        die('error: '.$e);
    }
}

function deleteBD($query)
{
    try {
        conectarBD();
        $consulta = $GLOBALS['pdo']->prepare($query);
        $consulta->execute();
        $consulta->closeCursor();
        desconectarBD();
        return $_GET['id_producto'];
    } catch (PDOException $e) {
        die('error: '.$e);
    }
}