import React, { useEffect, useState } from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Logo from "../fotos/LogoRetonoo.png";

/*routes*/
import Home from "../Home.js";
import Productos from "../Products.js";
import Contact from "../Contact.js";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "#707070",
  },
  logo: {
    height: "80px",
    width: "125px",
    padding: "5px",
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "#707070",
    color: "white",
    padding: "20px 35px",
    fontSize: "21px",
    transition: "0.2s all",
    "&:hover": {
      backgroundColor: "#808080",
      cursor: "pointer",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
}));

function Header(props) {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
      component: Home,
    },
    {
      menuTitle: "Products",
      pageURL: "/products",
      component: Productos,
    },
    {
      menuTitle: "Contact",
      pageURL: "/contact",
      component: Contact,
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.Toolbar}>
          <img className={classes.logo} src={Logo} alt="Logo de la pagina " />
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          ) : (
              <div className={classes.headerOptions}>
                <a
                  variant="contained"
                  className={classes.button}
                  onClick={() => handleButtonClick("/")}
                >
                  Inicio
              </a>
                <a
                  variant="contained"
                  className={classes.button}
                  onClick={() => handleButtonClick("/products")}
                >
                  Productos
              </a>
                <a
                  variant="contained"
                  className={classes.button}
                  onClick={() => handleButtonClick("/contact")}
                >
                  Contacto
              </a>
              </div>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
