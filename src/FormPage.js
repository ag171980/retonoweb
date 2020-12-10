import "./styles/App.css";
//import Appbar from "./components/menuItem.js";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Appbar from "./components/menuItem.js";
import AddProducts from "./components/AddProducts.js";

function FormPage() {
  return (
    <div>
      <div></div>
      <div>
        <AddProducts />
      </div>
    </div>
  );
}

export default FormPage;
