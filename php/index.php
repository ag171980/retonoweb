<?php
include 'bd/conexion.php';


header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: *');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['id_producto'])) {
        $query = "SELECT * FROM producto WHERE id_producto=". $_GET['id_producto'];
        $resultado = getBD($query);
        echo json_encode($resultado->fetch(PDO::FETCH_ASSOC));
    } else {
        $query = "SELECT * FROM producto";
        $resultado = getBD($query);
        echo json_encode($resultado->fetchAll());
    }
    header("HTTP/1.1 200 OK");
    exit();
}


if ($_POST['METHOD'] == 'POST') {
    unset($_POST['METHOD']);
    $nombreProducto = $_POST['nombre_producto'];
    $descripcionProducto = $_POST['descripcion_producto'];
    $cantidadProducto = $_POST['cantidad_producto'];
    $fotoProducto = $_POST['foto_producto'];
    $precioProducto = $_POST['precio_producto'];
    $query = "INSERT INTO producto (nombre_producto,descripcion_producto,cantidad_producto,foto_producto,precio_producto) VALUES ('$nombreProducto','$descripcionProducto','$cantidadProducto','$fotoProducto','$precioProducto)";
    $queryIncrement = 'SELECT MAX(id_producto) AS id_producto FROM producto';
    $resultado = postBD($query, $queryIncrement);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if ($_POST['METHOD'] == 'PUT') {
    $id_Producto = $_GET['id_producto'];
    $nombreProducto = $_POST['nombre_producto'];
    $descripcionProducto = $_POST['descripcion_producto'];
    $cantidadProducto = $_POST['cantidad_producto'];
    $query = "UPDATE producto SET nombre_producto = '$nombreProducto', descripcion_producto = '$descripcionProducto', cantidad_producto = '$cantidadProducto', foto_producto = '$fotoProducto', precio_producto = '$precioProducto' WHERE id_producto = '$id_Producto'";
    $resultado = putBD($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

if ($_POST['METHOD'] == 'DELETE') {
    unset($_POST['METHOD']);
    $id_Producto = $_GET['id_producto'];
    $query = "DELETE FROM producto WHERE id_producto = '$id_Producto'";
    $resultado = deleteBD($query);
    echo json_encode($resultado);
    header("HTTP/1.1 200 OK");
    exit();
}

header('HTTP/1.1 400 Bad Request');
?>