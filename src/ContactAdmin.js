import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTimes } from "@fortawesome/free-solid-svg-icons";
const useStyles = makeStyles((theme) => ({
    title: {
        margin: "12vh auto",
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
    cards: {
        margin: "13.09vh auto",
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        justifyContent: "space-around",

    },
    card: {

        width: "300px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-around",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        borderRadius: "8px",
    },
    delete: {
        backgroundColor: "#F82C2C",
        color: "white",
        fontSize: "15px",
        margin: "15px",
        padding: "8px 12px",
        border: "none",
        borderRadius: "5px",
        boxShadow: "0px 0px 1.5px 0px rgba(0,0,0,0.75)",
        transition: ".4s all",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#FF6868",
        }
    },
    headerCard: {
    },
    bodyCard: {
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        margin: "7px auto",
        padding: "0px 30px",
    },
    answer: {
        textDecoration: "none",
        color: "white",
        padding: "12px 18px",
        backgroundColor: "#09A2FF",
        borderRadius: "5px",
        boxShadow: "0px 0px 1.5px 0px rgba(0,0,0,0.75)",
        transition: ".4s all",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: "#80CFFF",
        }
    },
    footerCard: {
        margin: "25px auto",
    }
}));

function Tables(props) {
    const classes = useStyles();
    //const url = "http://localhost:80/apiRetonoweb/";
    const url = "https://ecoretono.000webhostapp.com/sendmail.php";
    const noEjecutes = true;
    const [contact, setContact] = useState([]);
    const [abrirEliminar, setAbrirEliminar] = React.useState(false);
    const [contactoSeleccionado, setContactoSeleccionado] = useState({
        id: "",
        usuario: "",
        email: "",
        mensaje: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactoSeleccionado((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(contactoSeleccionado);
    };

    const AbrirModalEliminar = () => {
        setAbrirEliminar(true);
    };
    const CerrarModalEliminar = () => {
        setAbrirEliminar(false);
    };
    const seleccionarContacto = (contacto, option) => {
        setContactoSeleccionado(contacto);
        if (option === "Eliminar") { AbrirModalEliminar() }
    };

    const requestGet = async () => {
        await axios.get(url).then((response) => {
            console.log(response.data);
            setContact(response.data);
        });
    };

    const requestDelete = async () => {
        var form = new FormData();
        form.append("METHOD", "DELETE");
        await axios.post(url, form, { params: { id: contactoSeleccionado.id } })
            .then((response) => {
                setContact(contact.filter(contacto => contacto.id !== contactoSeleccionado.id));
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
            <h2 className={classes.title}>Lista de consultas</h2>
            <div className={classes.cards}>

                {contact.map((contacto, index) => (
                    <div key={index} className={classes.card}>
                        <div className={classes.headerCard}>
                            <button className={classes.delete} type="button" onClick={() => seleccionarContacto(contacto, "Eliminar")}>
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                        <div className={classes.bodyCard}>
                            <h3 className={classes.text}>{contacto.usuario}</h3>
                            <p className={classes.text}>{contacto.email}</p>
                            <p className={classes.text}>{contacto.mensaje}</p>
                        </div>
                        <div className={classes.footerCard}>
                            <a className={classes.answer} href={"mailto:" + contacto.email + "?subject=Consulta%20en%20Retono"}>Responder</a>
                        </div>
                    </div>
                ))
                }
            </div>

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