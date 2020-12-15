import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles/Contact.css';

const useStyles = makeStyles((theme) => ({
  Contact: {
    margin: "20vh auto",
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '60vw',
    },
  },
}));
function Contact() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.Contact}>
        <form className="rooot" noValidate autoComplete="off">
          <h2>Contactános</h2>
          <TextField id="outlined-basic" className="input" label="Nombre completo" name="Nombre" required variant="outlined" />
          <TextField id="outlined-basic" className="input" label="Correo Electrónico" name="Email" required variant="outlined" />
          <TextField id="outlined-basic" className="input" label="Mensaje" name="Mensaje" required variant="outlined" />
          <Button variant="contained" color="default" className="button">
            Enviar
</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

