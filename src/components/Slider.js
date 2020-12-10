import React, { useEffect } from "react";
import slideOne from '../fotos/image1.png';
import slideTwo from "../fotos/image2.png";
import slideThree from "../fotos/image3.png";
import '../styles/Slider.css';
import Glide, { Autoplay } from '@glidejs/glide/dist/glide.modular.esm';
function Slider() {
    useEffect(() => {
        const config = {
            type: "carousel",
            perView: 1,
            breakpoints: {
                600: {
                    perView: 1
                }
            },
            autoplay: 3800
        }
        new Glide('.glide', config).mount({ Autoplay })
    }, []);
    return (
        <div>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide"><img src={slideOne} alt="Imagen 1" /></li>
                        <li className="glide__slide"><img src={slideTwo} alt="Imagen 2" /></li>
                        <li className="glide__slide"><img src={slideThree} alt="Imagen 3" /></li>
                    </ul>
                </div>
            </div>
            <div className="green"></div>
            <div className="carrousel-title">
                <h1>Toallitas Ecológicas Retoño</h1>
                
            </div>
        </div>
    );
}
export default Slider;