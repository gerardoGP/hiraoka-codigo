import {Button, TextField} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import Facebook from "../../assets/facebook.webp";
import Libro from "../../assets/libro_reclamaciones_indecopi2.webp"
import Youtube from "../../assets/youtube.webp"
import Instagram from "../../assets/instagram.webp"
import Twitter from "../../assets/twitter.webp"
import Blog from "../../assets/blog.webp"
//import './Footer.css'
const Footer = () => {
    return (
<footer>
        <div className="container-footer">
            <div className="column-footer">
                <h2>Redes Sociales</h2>  
                <div className="Redes">
                    <a href="#"><img src={Facebook} alt="icon"/></a>
                    <a href="#"><img src={Instagram} alt="icon"/></a>
                    <a href="#"><img src={Youtube}  alt="icon"/></a>
                    <a href="#"><img src={Twitter}  alt="icon"/></a>
                    <a href="#"><img src={Blog}  alt="icon"/></a>
                </div>
            </div>
            <div className="column-footer">
                <h2>
                    INFORMACION PARA EL CLIENTE
                </h2>
                    <a href="#">Quienes comos</a>
                    <a href="#">Cómo comprar</a>
                    <a href="#">Preguntas Frecuentes</a>
                    <a href="#">Atención al Cliente</a>
                    <a href="#">Consulta con el Experto Hiraoka</a>
                    <a href="#">Terminos y Condiciones</a>
                    <a href="#">Politica de Protección y Datos personales</a>
                    <a href="#">Fines Adicionales</a>
                    <a href="#">Cambios y Devoluciones</a>
                    <a href="#">Consultar Comprobante Electronico</a>
                    <a href="#">Servicio Técnico</a>
                    <a href="#">Libro de Reclamaciones</a>
                    <a href="#">Contáctanos</a>
                    <a href="#">Nuestras Tiendas</a>
                    <a href="#">Medidas Preventivas Covid - 19</a>
                    <a href="#">Sorteo de Aniversario</a>
            </div>
            <div className="column-footer">
                <h2>GESTIÓN DE CUENTA</h2>
                    <a href="#">Mi Cuenta</a>
                    <a href="#">Regístrate</a>
                    <a href="#">Actualizar Datos</a>
                    <a href="#">Cambio de Clave</a>
                    <a href="#">Recordar Clave</a>
                    <a href="#">control de Suscripciones</a>
                <h2>PROMOCIONES</h2>
                    <a href="#">Catalogo Hiraoka</a>
                    <a href="#">Cyber Wow</a>
                    <a href="#">Cyber Days</a>
                    <a href="#">Black Friday</a>
                <h2>REPARTO A PROVINCIAS</h2>
                    <a href="#">Arequipa</a>
                    <a href="#">Chiclayo</a>
                    <a href="#">Trujillo</a>
                    <a href="#">Piura</a>
                    <a href="#">Ica</a>
                    <a href="#">Cuzco</a>
                    <a href="#">Huancayo</a>
            </div>
            <div className="column-footer">
                <h2>MEDIOS DE PAGO</h2>
                <img src="./icons/niubus-logo-final_3.webp" alt=""/>
                <h2>LIBRO DE RECLAMACIONES</h2>
                <a href="#"><img src={Libro} alt=""/></a>
                <img src="./icons/250x100.webp" alt=""/>
                <h2>LEGAL</h2>
                <div className="terminos">
                    <p>@Hiraoka 2022</p>
                    <a href="#">Privacidad Terminos y Condiciones</a>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer
/* ultimo
    <footer>
        <div className="container-footer">
            <div className="column-footer">
                <h2>Redes Sociales</h2>  
                <div className="Redes">
                    <a href="#"><img src={Facebook} alt="icon"/></a>
                    <a href="#"><img src={Instagram} alt="icon"/></a>
                    <a href="#"><img src={Youtube}  alt="icon"/></a>
                    <a href="#"><img src={Twitter}  alt="icon"/></a>
                    <a href="#"><img src={Blog}  alt="icon"/></a>
                </div>
            </div>
            <div className="column-footer">
                <h2>
                    INFORMACION PARA EL CLIENTE
                </h2>
                    <a href="#">Quienes comos</a>
                    <a href="#">Cómo comprar</a>
                    <a href="#">Preguntas Frecuentes</a>
                    <a href="#">Atención al Cliente</a>
                    <a href="#">Consulta con el Experto Hiraoka</a>
                    <a href="#">Terminos y Condiciones</a>
                    <a href="#">Politica de Protección y Datos personales</a>
                    <a href="#">Fines Adicionales</a>
                    <a href="#">Cambios y Devoluciones</a>
                    <a href="#">Consultar Comprobante Electronico</a>
                    <a href="#">Servicio Técnico</a>
                    <a href="#">Libro de Reclamaciones</a>
                    <a href="#">Contáctanos</a>
                    <a href="#">Nuestras Tiendas</a>
                    <a href="#">Medidas Preventivas Covid - 19</a>
                    <a href="#">Sorteo de Aniversario</a>
            </div>
            <div className="column-footer">
                <h2>GESTIÓN DE CUENTA</h2>
                    <a href="#">Mi Cuenta</a>
                    <a href="#">Regístrate</a>
                    <a href="#">Actualizar Datos</a>
                    <a href="#">Cambio de Clave</a>
                    <a href="#">Recordar Clave</a>
                    <a href="#">control de Suscripciones</a>
                <h2>PROMOCIONES</h2>
                    <a href="#">Catalogo Hiraoka</a>
                    <a href="#">Cyber Wow</a>
                    <a href="#">Cyber Days</a>
                    <a href="#">Black Friday</a>
                <h2>REPARTO A PROVINCIAS</h2>
                    <a href="#">Arequipa</a>
                    <a href="#">Chiclayo</a>
                    <a href="#">Trujillo</a>
                    <a href="#">Piura</a>
                    <a href="#">Ica</a>
                    <a href="#">Cuzco</a>
                    <a href="#">Huancayo</a>
            </div>
            <div className="column-footer">
                <h2>MEDIOS DE PAGO</h2>
                <img src="./icons/niubus-logo-final_3.webp" alt=""/>
                <h2>LIBRO DE RECLAMACIONES</h2>
                <a href="#"><img src={Libro} alt=""/></a>
                <img src="./icons/250x100.webp" alt=""/>
                <h2>LEGAL</h2>
                <div className="terminos">
                    <p>@Hiraoka 2022</p>
                    <a href="#">Privacidad Terminos y Condiciones</a>
                </div>
            </div>
        </div>
    </footer>
*/
/* 
<footer>
        <div className="container-footer">
            <div className="column-footer">
                <h2>Redes Sociales</h2>  
                    <div className="Redes">
                    <a href="#"><img src={Facebook} alt="icon"/></a>
                    <a href="#"><img src={Instagram} alt="icon"/></a>
                    <a href="#"><img src={Youtube}  alt="icon"/></a>
                    <a href="#"><img src={Twitter}  alt="icon"/></a>
                    <a href="#"><img src={Blog}  alt="icon"/></a>
                    </div>
            </div>
            <div className="column-footer">
                <h2>
                    INFORMACION PARA EL CLIENTE
                </h2>
                    <a href="#">Quienes comos</a>
                    <a href="#">Cómo comprar</a>
                    <a href="#">Preguntas Frecuentes</a>
                    <a href="#">Atención al Cliente</a>
                    <a href="#">Consulta con el Experto Hiraoka</a>
                    <a href="#">Terminos y Condiciones</a>
                    <a href="#">Politica de Protección y Datos personales</a>
                    <a href="#">Fines Adicionales</a>
                    <a href="#">Cambios y Devoluciones</a>
                    <a href="#">Consultar Comprobante Electronico</a>
                    <a href="#">Servicio Técnico</a>
                    <a href="#">Libro de Reclamaciones</a>
                    <a href="#">Contáctanos</a>
                    <a href="#">Nuestras Tiendas</a>
                    <a href="#">Medidas Preventivas Covid - 19</a>
                    <a href="#">Sorteo de Aniversario</a>
            </div>
            <div className="column-footer">
                <h2>GESTIÓN DE CUENTA</h2>
                    <a href="#">Mi Cuenta</a>
                    <a href="#">Regístrate</a>
                    <a href="#">Actualizar Datos</a>
                    <a href="#">Cambio de Clave</a>
                    <a href="#">Recordar Clave</a>
                    <a href="#">control de Suscripciones</a>
                <h2>PROMOCIONES</h2>
                    <a href="#">Catalogo Hiraoka</a>
                    <a href="#">Cyber Wow</a>
                    <a href="#">Cyber Days</a>
                    <a href="#">Black Friday</a>
                <h2>REPARTO A PROVINCIAS</h2>
                    <a href="#">Arequipa</a>
                    <a href="#">Chiclayo</a>
                    <a href="#">Trujillo</a>
                    <a href="#">Piura</a>
                    <a href="#">Ica</a>
                    <a href="#">Cuzco</a>
                    <a href="#">Huancayo</a>
            </div>
            <div className="column-footer">
                <h2>MEDIOS DE PAGO</h2>
                <img src="./icons/niubus-logo-final_3.webp" alt=""/>
                <h2>LIBRO DE RECLAMACIONES</h2>
                <a href="#"><img src={Libro} alt=""/></a>
                <img src="./icons/250x100.webp" alt=""/>
                <h2>LEGAL</h2>
                <div className="terminos">
                    <p>@Hiraoka 2022</p>
                    <a href="#">Privacidad Terminos y Condiciones</a>
                </div>
            </div>
        </div>
        <div className="foot">
            <img src="./icons/logito2.png" alt="logofinal"/>
        </div>
    </footer>
*/