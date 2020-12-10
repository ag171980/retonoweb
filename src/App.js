import "./styles/App.css";
import Header from "./components/Header.js";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Home from "./Home.js";
import Products from "./Products.js";
//import About from "./About.js";
//import Faq from "./Faq.js";
import Contact from "./Contact.js";
import Footer from "./components/Footer";

import { Route, Switch, BrowserRouter } from "react-router-dom";

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.container}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact from="/home" render={(props) => <Home {...props} />} />
            <Route
              exact
              from="/products"
              render={(props) => <Products {...props} />}
            />

            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props} />}
            />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
