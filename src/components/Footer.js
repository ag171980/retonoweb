import React from "react";
import American from '../fotos/american.png';
import BBVA from '../fotos/bbva.png';
import Dinners from '../fotos/dinners.png';
import MasterCard from '../fotos/mastercard.png';
import MercadoPago from '../fotos/mercadopago.png';
import PagoFacil from '../fotos/pagofacil.png';
import PayPal from '../fotos/paypal.png';
import RapiPago from '../fotos/rapipago.png';
import Visa from '../fotos/visa.png';
import WesterUnion from '../fotos/westernunion.png';
import Logo from "../fotos/LogoRetono.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faPhoneAlt, faMapPin, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className="footer">
            <div className="footer-item">
                <img src={Logo} alt="" height="150" />
            </div>
            <div className="footer-item">
                <h3>Contacto</h3>
                <div className="item">
                    <FontAwesomeIcon icon={faMobileAlt} className="icon" />
                    <a href="tel:+5491123892614" rel="noreferrer" target="_blank">
                        Celular
                    </a>
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
                    <a href="tel:20112244" rel="noreferrer" target="_blank">
                        Teléfono
                    </a>
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faAt} className="icon" />
                    <a href="mailto:ag171980@gmail.com" rel="noreferrer" target="_blank">
                        Email
                    </a>
                </div>
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
                <h3>Formas de pago</h3>
                <div className="pagos">
                    <img src={American} className="pago" alt=""/>
                    <img src={BBVA} className="pago" alt="" />
                    <img src={Dinners} className="pago" alt="" />
                    <img src={MasterCard} className="pago" alt="" />
                    <img src={MercadoPago} className="pago" alt="" />
                    <img src={PagoFacil} className="pago" alt="" />
                    <img src={PayPal} className="pago" alt="" />
                    <img src={RapiPago} className="pago" alt="" />
                    <img src={Visa} className="pago" alt="" />
                    <img src={WesterUnion} className="pago" alt="Imagen " />
                </div>
            </div>
            <div className="footer-item">
                <h3>Redes sociales</h3>

                <div className="item">
                    <FontAwesomeIcon icon={faFacebookSquare} className="icon" />
                    <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
                        Facebook
                    </a>
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faInstagramSquare} className="icon" />
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
                        Instagram
                    </a>
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faTwitterSquare} className="icon" />
                    <a href="https://twitter.com" rel="noreferrer" target="_blank">
                        Twitter
                    </a>
                </div>
            </div>
        </div>

    );
}
export default Footer;