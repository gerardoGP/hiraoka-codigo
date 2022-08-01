import React,{useState} from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import {Link} from "react-router-dom"
import {Button} from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Splash from "../SplashScreen";
import {ThemeProvider} from "styled-components";
const LightTheme = {
    pageBackground: "white",
    titleColor: "green",
    tagLineColor: "black"
  };
  
  const DarkTheme = {
    pageBackground: "#282c36",
    titleColor: "lightgreen",
    tagLineColor: "lavender"
  };
  
  const themes = {
    light: LightTheme,
    dark: DarkTheme,
  }
const Header = () =>{
    const [theme, setTheme] = useState("light")
    return (
        <header className="shadow">
            <div className="oferta">
                <b>¡Empezó Cyber Wow!</b> Del 27 julio al 15 de agosto encuentra las mejores ofertas
            </div>
            <div className="nav">
                <figure>
                    <Link to="/"><img className="logo" src={logo}/></Link>
                </figure>
                <ul className="nav-container">
                    <li className="nav-item"><Link to="/"><Button>Principal</Button></Link></li>
                    <li className="nav-item">
                        <Link to="/login">
                            <Button >Iniciar Sesion</Button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="offcanvas" aria-controls="offcanvasRight" href="#offcanvasRight">
                            <ShoppingCartIcon/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default(Header);