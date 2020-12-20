import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
//Imports Stylsheets
import "./styles/Product.css";
//Imports Images 
import Toallita from "../src/fotos/toallita1.jpg";
import Gota1 from "../src/fotos/gota1.png";
import Gota2 from "../src/fotos/gota2.png";
import Gota3 from "../src/fotos/gota3.png";
/*-----*/
//Imports Material UI Design
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
//Imports Axios
import Axios from "axios";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#f44336',
    },
  },
});
const useStyles = makeStyles((theme) => ({
  gota: {
    height: "15px",
    width: "15px",
  },
  gota2: {
    height: "15px",
    width: "35px",
  },
  gota3: {
    height: "15px",
    width: "55px",
  },

  searchIcon: {
    padding: "11px 15px",
    zIndex: "19",
    "&:hover": {
      cursor: "pointer",
    },
  },
  icon: {
    color: "#80BD5B",
    height: "100%",
  },
  inputRoot: {
    color: "#80BD5B",
    padding: "4px",
  },
  inputInput: {

    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "30em",
    },
  },
  label: {
    fontSize: "19px",
    color: "white",
    padding: "8px 0px",

  },

  absorcion: {
    position: "absolute",
    top: "120px",
    right: "20px",
  },
  text: {
    color: 'white',
    fontSize: '16px',
    fontFamily: 'Raleway, sans-serif',
    padding: '5px 0px',
  },
  precio: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '120px',
    fontSize: '30px',
  }

}));

function Products(props) {
  const classes = useStyles();
  const url = "https://ecoretono.000webhostapp.com/index.php";
  //const url = "http://localhost:80/apiRetonoweb/";
  const [product, setProduct] = useState([]);
  const [productBackup, setProductBackup] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const noEjecutes = true;

  const requestGet = async () => {
    await Axios.get(url).then((response) => {
      console.log(response.data);
      setProduct(response.data);
      setProductBackup(response.data);
    });
  };
  useEffect(() => {
    requestGet();
  
  }, [noEjecutes]);

  useEffect(() => {
    //console.log("filteredProduct", filteredProduct);

    if (filteredProduct.length === 0) {
      setProduct(productBackup);
      //console.log("initial product:", product);

    } else {
      setProduct(
        productBackup.filter(tipo =>
          filteredProduct.some(category => [tipo.tipo_producto].flat().includes(category))
        )
      )
    }
    //console.log("filtered product", product);
  }, [filteredProduct]);

  const handleInputChange = (event) => {
    var text = event.target.value;
    const data = productBackup;
    const newData = data.filter(function (item) {
      const itemData = item.nombre_producto.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    //console.log(newData);
    setProduct(newData);
    let noResult = document.getElementById("noProducts");
    if (newData.length === 0) {
      noResult.style.opacity = "1";
      noResult.textContent = "No hay resultados para: " + text;
    } else {
      noResult.style.opacity = "0";
    }
  };

  const handleCheckBoxChange = (event) => {
    const checked = event.target.checked;
    const value = event.target.value;
    //console.log(checked);
    //console.log(value);

    if (checked) {
      setFilteredProduct([...filteredProduct, value]);
    } else {
      setFilteredProduct(filteredProduct.filter(id => id !== value));
    }

  };

  function absortion(props) {
    if (props == 1) {
      return <img className={classes.gota} src={Gota1} />;
    }
    if (props == 2) {
      return <img className={classes.gota2} src={Gota2} />;
    }
    if (props == 3) {
      return <img className={classes.gota3} src={Gota3} />;
    }
  }

  return (
    <div>

      <div className="Products">
        <h2 className="subtitulo">Nuestros Productos</h2>
        <div className="buscador">
          <InputBase
            placeholder="Buscar..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={
              (e) =>
                handleInputChange(e)
            }
          />
          <Button className={classes.searchIcon}>
            <SearchIcon className={classes.icon} />
          </Button>

        </div>

        <div className="secciones">
          <FormControl component="fieldset" className="filtros">
            <h4>Filtrar por: </h4>
            <FormGroup aria-label="position" className="formGroup">
              <FormControlLabel
                control={
                  <Checkbox
                    value="higiene intima"
                    onChange={(e) => handleCheckBoxChange(e)}
                    color="default"
                  />
                }
                value="Higiene intima"
                label={<Typography variant="body2" color="textPrimary" className={classes.label}>Higiene íntima</Typography>}
                className={classes.controlLabel}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="cuidado corporal"
                    onChange={(e) => handleCheckBoxChange(e)}
                    color="default"
                  />
                }
                value="Cuidado corporal"
                label={<Typography variant="body2" color="textPrimary" className={classes.label}>Cuidado corporal</Typography>}
                className={classes.controlLabel}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="accesorios"
                    onChange={(e) => handleCheckBoxChange(e)}
                    color="default"
                  />
                }
                value="Accesorios"
                label={<Typography variant="body2" color="textPrimary" className={classes.label}>Accesorios</Typography>}
                className={classes.controlLabel}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="combos"
                    onChange={(e) => handleCheckBoxChange(e)}
                    color="default"
                  />
                }
                value="Combos"
                label={<Typography variant="body2" color="textPrimary" className={classes.label}>Combos</Typography>}
                className={classes.controlLabel}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    value="regala"
                    onChange={(e) => handleCheckBoxChange(e)}
                    color="default"
                  />
                }
                value="Regala"
                label={<Typography variant="body2" color="textPrimary" className={classes.label}>Regala</Typography>}
                className={classes.controlLabel}
              />

            </FormGroup>
          </FormControl>

          <div className="productos">
            <p id="noProducts"></p>
            <div className="cards">
              {product.map((producto, index) => (
                <Card key={index} className="root">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={producto.descripcion_producto}
                      height="400"
                      image={process.env.PUBLIC_URL+'/productos/'+producto.foto_producto}
                      className={classes.img}
                      title={producto.nombre_producto}
                    />
                    <CardContent className="card">
                      <Typography className="titulo" variant="h5" component="h3">
                        {producto.nombre_producto}
                      </Typography>
                      <Typography
                        className={classes.text}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {producto.descripcion_producto}
                      </Typography>
                      <Typography
                        className={classes.precio}
                        variant="h4"
                        color="textSecondary"
                        component="h2"
                      >
                        ${producto.precio_producto}
                      </Typography>
                      <Typography
                        className={classes.absorcion}
                        variant="h4"
                        color="textSecondary"
                        component="p"
                      >
                        {absortion(producto.absorcion_producto)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
