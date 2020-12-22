<?php
include 'bd/conexion.php';
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['id'])) {
        $query = "SELECT * FROM contacto WHERE id=". $_GET['id_producto'];
        $resultado = getBD($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    } else {
        $query = "SELECT * FROM contacto";
        $resultado = getBD($query);
        echo json_encode($resultado->fetchAll());
    }
    header("HTTP/1.1 200 OK");
    exit();
}
if ($_POST['METHOD'] == 'POST') {
    unset($_POST['METHOD']);
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];
    $query = "INSERT INTO contacto (usuario, email, mensaje) VALUES ('$nombre','$email','$mensaje')";
    $queryIncrement = 'SELECT MAX(id) AS id FROM contacto';
    $resultado = postBD($query, $queryIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}
if ($_POST['METHOD'] == 'DELETE') {
    unset($_POST['METHOD']);
    $id = $_GET['id'];
    $query = "DELETE FROM contacto WHERE id = '$id'";
    $resultado = deleteBD($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}
header('HTTP/1.1 400 Bad Request');
