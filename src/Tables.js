import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import '../src/styles/tabla.css';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
        margin: "5vh auto",
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    add: {
        backgroundColor: "#46DC61",
        marginTop: "15vh",
        color: "white",
        padding: "12px",
        fontSize: "15px",
        border: "none",
        borderRadius: "5px",
        boxShadow: "0px 0px 1.5px 0px rgba(0,0,0,0.75)",
        transition: ".4s all",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#0E8E25",
        }
    },
    edit: {
        backgroundColor: "#09A2FF",
        color: "white",
        fontSize: "15px",
        margin: "5px auto",
        padding: "12px",
        border: "none",
        borderRadius: "5px",
        boxShadow: "0px 0px 1.5px 0px rgba(0,0,0,0.75)",
        transition: ".4s all",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#80CFFF",
        }
    },
    options: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        padding: "15px   "
    },
    textdelete: {
        fontSize: "20px"
    },
    delete: {
        backgroundColor: "#F82C2C",
        color: "white",
        fontSize: "15px",
        margin: "5px",
        padding: "12px 18px",
        border: "none",
        borderRadius: "5px",
        boxShadow: "0px 0px 1.5px 0px rgba(0,0,0,0.75)",
        transition: ".4s all",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#FF6868",
        }
    },
    nodelete: {
        background: "none",
        border: "none",
        color: "red",
        margin: "0px 15px",
        "&:hover": {
            cursor: "pointer",
        }
    },
    icon: {
        margin: "0 auto",
    },
    form: {
        display: "flex",
        flexDirection: "column"
    },
    actions: {
        margin: ""
    },
    input: {
        margin: "15px 0px"
    }

}));

function Tables(props) {
    const classes = useStyles();
    //const url = "http://localhost:80/apiRetonoweb/";
    const url = "https://ecoretono.000webhostapp.com/index.php";
    const noEjecutes = true;
    const [abrirEditar, setAbrirEditar] = React.useState(false);
    const [abrirEliminar, setAbrirEliminar] = React.useState(false);
    const [abrirAgregar, setAbrirAgregar] = React.useState(false);
    const [product, setProduct] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState({
        id_producto: '',
        nombre_producto: "",
        descripcion_producto: "",
        cantidad_producto: "",
        foto_producto: "",
        precio_producto: "",
        absorcion_producto: "",
        tipo_producto: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductoSeleccionado((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(productoSeleccionado);
    };

    //Modal
    const AbrirModalAgregar = () => {
        setAbrirAgregar(true);
    };
    const CerrarModalAgregar = () => {
        setAbrirAgregar(false);
    };
    const AbrirModalEditar = () => {
        setAbrirEditar(true);
    };
    const CerrarModalEditar = () => {
        setAbrirEditar(false);
    };

    const AbrirModalEliminar = () => {
        setAbrirEliminar(true);
    };
    const CerrarModalEliminar = () => {
        setAbrirEliminar(false);
    };

    const seleccionarProducto = (producto, caso) => {
        setProductoSeleccionado(producto);
        (caso === "Editar") ?
            AbrirModalEditar() :
            AbrirModalEliminar()

    };
    //traer por GET la tabla Productos
    const requestGet = async () => {
        await axios.get(url).then((response) => {
            console.log(response.data);
            setProduct(response.data);
        });
    };
    //Enviar mediante form los datos
    const requestPost = async () => {
        var form = new FormData();
        form.append("nombre_producto", productoSeleccionado.nombre_producto);
        form.append("descripcion_producto", productoSeleccionado.descripcion_producto);
        form.append("cantidad_producto", productoSeleccionado.cantidad_producto);
        form.append("foto_producto", productoSeleccionado.foto_producto);
        form.append("precio_producto", productoSeleccionado.precio_producto);
        form.append("absorcion_producto", productoSeleccionado.absorcion_producto);
        form.append("tipo_producto", productoSeleccionado.tipo_producto);
        form.append("METHOD", "POST");
        await axios.post(url, form).then((response) => {
            setProduct(product.concat(response.data));
            CerrarModalAgregar();
            console.log(response.data);
        });
    };

    const requestPut = async () => {
        var form = new FormData();
        form.append("nombre_producto", productoSeleccionado.nombre_producto);
        form.append("descripcion_producto", productoSeleccionado.descripcion_producto);
        form.append("cantidad_producto", productoSeleccionado.cantidad_producto);
        form.append("foto_producto", productoSeleccionado.foto_producto);
        form.append("precio_producto", productoSeleccionado.precio_producto);
        form.append("absorcion_producto", productoSeleccionado.absorcion_producto);
        form.append("tipo_producto", productoSeleccionado.tipo_producto);
        form.append("METHOD", "PUT");
        await axios.post(url, form, { params: { id_producto: productoSeleccionado.id_producto } }).then((response) => {
            var dataNueva = product;
            dataNueva.map(producto => {
                if (producto.id_producto === productoSeleccionado.id_producto) {
                    producto.nombre_producto = productoSeleccionado.nombre_producto;
                    producto.descripcion_producto = productoSeleccionado.descripcion_producto;
                    producto.cantidad_producto = productoSeleccionado.cantidad_producto;
                    producto.foto_producto = productoSeleccionado.foto_producto;
                    producto.precio_producto = productoSeleccionado.precio_producto;
                    producto.absorcion_producto = productoSeleccionado.absorcion_producto;
                    producto.tipo_producto = productoSeleccionado.tipo_producto;
                }
            });
            setProduct(dataNueva);
            CerrarModalEditar();
            //console.log(response.data);
        });
    };
    const requestDelete = async () => {
        var form = new FormData();
        form.append("METHOD", "DELETE");
        await axios.post(url, form, { params: { id_producto: productoSeleccionado.id_producto } })
            .then((response) => {
                setProduct(product.filter(producto => producto.id_producto !== productoSeleccionado.id_producto));
                //console.log(response.data); 
                CerrarModalEliminar();
            }).catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        requestGet();
    }, [noEjecutes]);
    return (
        <div>
            <button type="button" className={classes.add} onClick={AbrirModalAgregar}>
                Agregar Producto
            </button>
            <TableContainer className={classes.table}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Cantidad</TableCell>
                            <TableCell>Foto</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Absorcion</TableCell>
                            <TableCell>Tipo</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {product.map(producto => (
                            <TableRow key={producto.id_producto}>
                                <TableCell component="th" scope="row">{producto.id_producto}</TableCell>
                                <TableCell>{producto.nombre_producto}</TableCell>
                                <TableCell>{producto.descripcion_producto}</TableCell>
                                <TableCell>{producto.cantidad_producto}</TableCell>
                                <TableCell>{producto.foto_producto}</TableCell>
                                <TableCell>${producto.precio_producto}</TableCell>
                                <TableCell>{producto.absorcion_producto}</TableCell>
                                <TableCell>{producto.tipo_producto}</TableCell>
                                <TableCell className={classes.actions}>
                                    <button className={classes.edit} type="button" onClick={() => seleccionarProducto(producto, "Editar")} ><FontAwesomeIcon className={classes.icon} icon={faEdit} /></button>
                                    <button className={classes.delete} type="button" onClick={() => seleccionarProducto(producto, "Eliminar")}><FontAwesomeIcon className={classes.icon} icon={faTimes} /></button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={abrirAgregar}
                onClose={CerrarModalAgregar}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 350, }}
            >
                <Fade in={abrirAgregar}>
                    <div className={classes.paper}>
                        <form className={classes.form}>
                            <h2>Agregar Productos</h2>
                            <TextField id="outlined-basic" label="Nombre" variant="outlined" className={classes.input} name="nombre_producto" onChange={handleChange} />
                            <TextField id="outlined-basic" label="Descripcion" variant="outlined" className={classes.input} name="descripcion_producto" onChange={handleChange} />
                            <TextField id="outlined-basic" label="Cantidad" variant="outlined" className={classes.input} name="cantidad_producto" onChange={handleChange} />
                            <TextField id="outlined-basic" label="foto" variant="outlined" className={classes.input} name="foto_producto" onChange={handleChange} />
                            <TextField id="outlined-basic" label="precio" variant="outlined" className={classes.input} name="precio_producto" onChange={handleChange} />
                            <TextField id="outlined-basic" label="Absorcion" variant="outlined" className={classes.input} name="absorcion_producto" onChange={handleChange} />
                            <TextField id="outlined-basic" label="Tipo" variant="outlined" className={classes.input} name="tipo_producto" onChange={handleChange} />
                            <Button variant="contained" color="primary" onClick={() => requestPost()}>Agregar</Button>
                        </form>
                    </div>
                </Fade>
            </Modal>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={abrirEditar}
                onClose={CerrarModalEditar}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 350, }}
            >
                <Fade in={abrirEditar}>
                    <div className={classes.paper}>
                        <form className={classes.form}>
                            <h2>Editar Producto</h2>
                            <TextField id="outlined-basic" label="Nombre" variant="outlined" className={classes.input} name="nombre_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.nombre_producto} />
                            <TextField id="outlined-basic" label="Descripcion" variant="outlined" className={classes.input} name="descripcion_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.descripcion_producto} />
                            <TextField id="outlined-basic" label="Cantidad" variant="outlined" className={classes.input} name="cantidad_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.cantidad_producto} />
                            <TextField id="outlined-basic" label="foto" variant="outlined" className={classes.input} name="foto_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.foto_producto} />
                            <TextField id="outlined-basic" label="precio" variant="outlined" className={classes.input} name="precio_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.precio_producto} />
                            <TextField id="outlined-basic" label="Absorcion" variant="outlined" className={classes.input} name="absorcion_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.absorcion_producto} />
                            <TextField id="outlined-basic" label="Tipo" variant="outlined" className={classes.input} name="tipo_producto" onChange={handleChange} value={productoSeleccionado && productoSeleccionado.tipo_producto} />
                            <Button variant="contained" color="primary" onClick={() => requestPut()}>Editar</Button>
                        </form>
                    </div>
                </Fade>
            </Modal>





            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={abrirEliminar}
                onClose={CerrarModalEliminar}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 350, }}
            >
                <Fade in={abrirEliminar}>
                    <div className={classes.paper}>
                        <p className={classes.textdelete}>Esta seguro de que desea eliminar este producto?</p>
                        <div className={classes.options}>
                            <button className={classes.delete} onClick={() => requestDelete()}>Si</button>
                            <button className={classes.nodelete} type="button" onClick={CerrarModalEliminar}>No</button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
export default Tables;