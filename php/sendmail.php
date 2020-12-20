<?php
include 'bd/conexion.php';

if ($_POST['METHOD'] == 'POST') {
    unset($_POST['METHOD']);
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['message'];
    $query = "INSERT INTO contact (usuario, email, mensaje) VALUES ('$name','$email','$mensaje')";
    $queryIncrement = 'SELECT MAX(id) AS id FROM contact';
    $resultado = postBD($query, $queryIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
?>