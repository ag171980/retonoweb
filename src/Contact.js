import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./styles/Contact.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  Contact: {
    margin: "16.65vh auto",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "60vw",
    },
  },
  form:{
    margin:"0 auto",
    backgroundColor:"white",
    width:"350px",
    borderRadius:"15px",
    border:"1px solid  rgba(157, 189, 99, 0.9)",
    boxShadow:"0px 0px 5px 0px rgba(0,0,0,0.75)",
  },
  input:{
    margin:"10px auto",
    width:"85%",
  },
  button:{
    backgroundColor:"rgba(157, 189, 99, 0.9)",
    color:"white",
    padding:"10px 20px",
    width:"85%",
    margin:"15px",
    "&:hover":{
      backgroundColor:"rgba(111, 151, 40, 0.9)",
    }
  },
}));
function Contact() {
  //const url = "http://localhost:80/apiRetonoweb/sendmail.php";
  const url = "https://ecoretono.000webhostapp.com/sendmail.php";
  const [emailMessage, setEmailMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const classes = useStyles();

  const peticionPost = async () => {
    var form = new FormData();
    form.append("name", emailMessage.name);
    form.append("email", emailMessage.email);
    form.append("message", emailMessage.message);
    form.append("METHOD", "POST");
    await axios.post(url, form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailMessage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(emailMessage);
  };
  return (
    <div>
      <div className={classes.Contact}>
        <form className={classes.form} noValidate autoComplete="off" method="post">
          <h2>Contactános</h2>
          <TextField
            id="outlined-basic"
            className={classes.input}
            label="Nombre completo"
            name="name"
            required
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            className={classes.input}
            label="Correo Electrónico"
            name="email"
            required
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            className={classes.input}
            label="Mensaje"
            name="message"
            required
            variant="outlined"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="default"
            className={classes.button}
            onClick={() => peticionPost()}
          >
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
