import React from "react";

/*Imports of Components*/
import Slider from '../src/components/Slider.js';

import Abouts from '../src/components/Abouts.js';
import Faq from '../src/components/Faq.js';
import Footer from '../src/components/Footer.js';

/*Import StyleSheet CSS*/
import "../src/styles/Home.css";


function Home() {
  
  return (

    <div>
      <Slider />
      
      <h2>Sobre Nosotros</h2>
      <Abouts />
      <h2>Preguntas Frecuentes</h2>
      <Faq />
    </div>

  );
}

export default Home;
