<?php
    $link = mysqli_connect("127.0.0.1", "root", "", "retonoweb")
    or die("Ha sucedido un error inexperado en la conexion de la base de datos");
    
    $query = "select * from producto";

    if(!$result = mysqli_query($link, $query)) die();

    $product = array();

    while($row = mysqli_fetch_array($result)){
        $id = $row["IdProducto"];
        $nombre = $row["NomProducto"];
        $descripcion = $row["DesProducto"];
        $categoria = $row["CatProducto"];
        $foto = $row["FotoProducto"];

        $product[] = array("IdProducto" => $id, "NomProducto" => $nombre, "DesProducto" => $descripcion, "CatProducto" => $categoria, "FotoProducto" => $foto);
    }

    $close = mysqli_close($link)
    or die("Ha sucedido un error inexperado en la desconexion de la base de datos");

    $json_string = json_encode($product);
    echo $json_string;
?>