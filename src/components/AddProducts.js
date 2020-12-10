import axios from "axios";
import React, { useEffect, useState } from "react";

import "../styles/Product.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
function AddProducts() {
  const url = "http://localhost:80/apiRetonoweb/";
  const [product, setProduct] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState({
    nombreProducto: "",
    descripcionProducto: "",
    cantidadProducto: "",
    fotoProducto: "",
    precioProducto: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(productoSeleccionado);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    input: {
      display: "none",
    },
  }));
  const classes = useStyles();

  const peticionPost = async () => {
    var form = new FormData();
    form.append("nombre_producto", productoSeleccionado.nombreProducto);
    form.append(
      "descripcion_producto",
      productoSeleccionado.descripcionProducto
    );
    form.append("cantidad_producto", productoSeleccionado.cantidadProducto);
    form.append("foto_producto", productoSeleccionado.fotoProducto);
    form.append("precio_producto", productoSeleccionado.precioProducto);
    form.append("METHOD", "POST");
    await axios.post(url, form).then((response) => {
      setProduct(product.concat(response.data));
    });
  };

  return (
    <div>
      <form className={classes.root}>
        <h2>Agregar Productos</h2>
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          className="nombreProducto"
          name="nombreProducto"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Descripcion"
          variant="outlined"
          className="descripcionProducto"
          name="descripcionProducto"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Cantidad"
          variant="outlined"
          className="cantidadProducto"
          name="cantidadProducto"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="foto"
          variant="outlined"
          className="fotoProducto"
          name="fotoProducto"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="precio"
          variant="outlined"
          className="precioProducto"
          name="precioProducto"
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => peticionPost()}
        >
          Agregar
        </Button>
      </form>
    </div>
  );
}

export default AddProducts;
