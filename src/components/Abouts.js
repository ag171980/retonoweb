import React from 'react';
import slideOne from "../fotos/image1.png";
import slideTwo from "../fotos/image2.png";
import slideThree from "../fotos/image3.png";
function Abouts() {
    return (
        <div>
            <div className="abouts">
                <div className="item-about">
                    <div className="item-images">
                        <img src={slideOne} alt="" />
                    </div>
                    <div className="item-text">
                        <h3>Nuestra Historia</h3>
                        <p>Toallitas Ecológicas Retoño es un emprendimiento familiar que surgió  pensando en la necesidad de muchas mujeres que desean incorporar productos ecológicos  a su vida para colaborar con el cuidado del medioambiente y preservar su salud evitando el contacto con químicos nocivos.
Desde nuestro lugar fomentamos, concientizamos y deseamos que muchas mujeres se sumen a este cambio necesario.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Abouts;