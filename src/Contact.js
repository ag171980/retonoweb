import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./styles/Contact.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  Contact: {
    margin: "20vh auto",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "60vw",
    },
  },
}));
function Contact() {
  const url = "http://localhost:80/apiRetonoweb/sendmail.php";
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
        <form className="rooot" noValidate autoComplete="off" method="post">
          <h2>Contactános</h2>
          <TextField
            id="outlined-basic"
            className="input"
            label="Nombre completo"
            name="name"
            required
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            className="input"
            label="Correo Electrónico"
            name="email"
            required
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic"
            className="input"
            label="Mensaje"
            name="message"
            required
            variant="outlined"
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="default"
            className="button"
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
