import './Carousel.css'
import img1 from '../../assets/carousel1.webp';
import img2 from '../../assets/carousel2.webp';
import img3 from '../../assets/carousel3.webp';
import img4 from '../../assets/carousel4.webp';
import img5 from '../../assets/carousel5.webp';
import img6 from '../../assets/carousel6.webp';
import img7 from '../../assets/carousel7.webp';
import img8 from '../../assets/carousel8.webp';
import img9 from '../../assets/carousel9.webp';
import { useState } from 'react';
import {Container,Grid} from "@mui/material"

const Carousel = () => {
    return (
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel">
          <div className="carousel-item active" data-bs-interval="900000">
            <a href="#"> <img src={img1} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img2} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img3} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img4} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img5} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img6} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img7} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img8} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img9} className="d-block w-100 hful" alt="..."/></a>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}
export default Carousel

/*
<div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel">
          <div className="carousel-item active" data-bs-interval="900000">
            <a href="#"> <img src={img1} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img2} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img3} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img4} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img5} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img6} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img7} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img8} className="d-block w-100 hful" alt="..."/></a>
          </div>
          <div className="carousel-item" data-bs-interval="900000">
            <a href="#"><img src={img9} className="d-block w-100 hful" alt="..."/></a>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
*/

/* 
<div id="Indicators" className="carousel slide" data-bs-ride="carousel" >
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#Indicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"><span></span></button>
                <button type="button" data-bs-target="#Indicators" data-bs-slide-to="1" aria-label="Slide 2"><span></span></button>
                <button type="button" data-bs-target="#Indicators" data-bs-slide-to="2" aria-label="Slide 3"><span></span></button>
                <button type="button" data-bs-target="#Indicators" data-bs-slide-to="3" aria-label="Slide 4"><span></span></button>
                <button type="button" data-bs-target="#Indicators" data-bs-slide-to="4" aria-label="Slide 5"><span></span></button>
                <button type="button" data-bs-target="#Indicators" data-bs-slide-to="5" aria-label="Slide 6"><span></span></button>
                <button type="button" data-bs-target="#Indicators" data-bs-slide-to="6" aria-label="Slide 7"><span></span></button>
                <button type="button" data-bs-target="#Indicators" data-bs-slide-to="7" aria-label="Slide 8"><span></span></button>
                <button type="button" data-bs-target="#Indicators" data-bs-slide-to="8" aria-label="Slide 9"><span></span></button>
              </div>
              <div className="carousel-inner" >
                <div className="carousel-item active">
                  <a href="#"> <img src={img1} className="d-block w-100" alt="..."/></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src={img2} className="d-block w-100" alt="..."/></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src={img3} className="d-block w-100" alt="..."/></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src={img4} className="d-block w-100" alt="..."/></a>
                </div>
                <div className="carousel-item">
                <a href="#"> <img src={img5} className="d-block w-100" alt="..."/></a>
                </div>
                <div className="carousel-item">
                  <a href="#"><img src={img6} className="d-block w-100" alt="..."/></a>
                </div>
                <div className="carousel-item">
                <a href="#"><img src={img7} className="d-block w-100" alt="..."/></a> 
                </div>
                <div className="carousel-item">
                  <a href="#"><img src={img8} className="d-block w-100" alt="..."/></a>
                </div>
                <div className="carousel-item">
                <a href="#"> <img src={img9} className="d-block w-100" alt="..."/></a>
                </div>
                
              </div>
              
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
              
            </div>
*/