<?php
$user = "b13485117d853f";
$port = 3306;
$socket = "";
$password = "c651365d";
$host = "us-cdbr-east-02.cleardb.com";
$dbname = "heroku_643e41ebdbc1038";
$servidor = 'mysql:dbname=' . $dbname . ';host=' . $host . '.';

function conectarBD()
{
    try {
        $GLOBALS['pdo'] = new PDO($GLOBALS['servidor'], $GLOBALS['user'], $GLOBALS['password'],$GLOBALS['port']);
        $GLOBALS['pdo']->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo '<script>console.log("Todo OK")</script>';
    } catch (PDOException $e) {
        echo 'conexion a la base de datos fallida.';
        echo '<script>console.log("FAIL")</script>';
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