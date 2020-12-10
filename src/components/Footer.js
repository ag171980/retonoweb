import React from "react";
import Logo from "../fotos/LogoRetono.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhoneAlt, faMapPin } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-item">
                <img src={Logo} alt="" height="150" />
            </div>
            <div className="footer-item">
                <h3>Redes Sociales</h3>
                <div className="item">
                    <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
                        Facebook
                        </a>
                </div>
                <div className="item">
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
                        Instagram
                        </a>
                </div>
            </div>
            <div className="footer-item">
                <h3>Ubicacion</h3>
                <div className="item">
                    <FontAwesomeIcon icon={faMapPin} className="icon" />
                    <a
                        href="https://www.google.com.ar/maps/place/Parque+Centenario/@-34.6064952,-58.4378278,17z/data=!3m1!4b1!4m5!3m4!1s0x95bcca688994eb61:0xd055df0a7dafa86e!8m2!3d-34.6064996!4d-58.4356338"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Parque Centenario
                        </a>
                </div>
            </div>
            <div className="footer-item">
                <h3>Contacto</h3>
                <div className="item">
                    <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                    <a href="tel:+5491123892614" rel="noreferrer" target="_blank">
                        Teléfono
                        </a>
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faAt} className="icon" />
                    <a href="mailto:ag171980@gmail.com" rel="noreferrer" target="_blank">
                        Email
            </a>
                </div>
            </div>
        </div>

    );
}
export default Footer;