import { BrowserRouter, Routes, Route , Link } from "react-router-dom";
import {Container} from "@mui/material"
import Header from '../componentes/Header';
import Footer from '../componentes/Footer/index2';
import Detalle from '../pages/Detalle';
import Principal from '../pages/Principal';
import Login from '../pages/login';
import Carrito from '../componentes/Carrito/Flotante'
import Private from "../private"
const Router = () => {
  // como esto es un componente tenemos que usar return para poder crear las rutas
  return (
    <BrowserRouter basename="/proyecto-hiraoka-react/">  
      <Header/>
      <Routes>
        <Route path="/" element ={<Principal/>}/>
        <Route path="/login" element ={<Login/>}/>
        
        <Route path="/detalle/:codigo" element ={<Detalle/>}/>
        
      </Routes>
      <Carrito />
      <Footer/>   
    </BrowserRouter>
  );
};
export default Router;