import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/SobreNos.css'
import Analise from '../assets/Fotos/analise.jpeg'
import Analise2 from '../assets/Fotos/analise2.jpeg'
import Drone2 from '../assets/Fotos/drone2.jpeg'
import Drone from '../assets/Fotos/drone.jpeg'
import Bomba from '../assets/Fotos/bomba.jpeg'
import Bomba2 from '../assets/Fotos/bomba2.jpeg'



function SobreNos(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className='carousel-indicators'>
                <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img className="d-block" src={Drone2} alt="analise" />
                </div>
                    
                <div className="carousel-item">
                    <img className="d-block" src={Drone} alt="analise" />
                </div>

                <div className='carousel-item'>
                    <img className="d-block" src={Analise} alt="analise" />
                </div>

                <div className='carousel-item'>
                    <img className="d-block" src={Analise2} alt="analise" />
                </div>
                
                <div className='carousel-item'>
                    <img className="d-block" src={Bomba} alt="analise" />
                </div>
                <div className='carousel-item'>
                    <img className="d-block" src={Bomba2} alt="analise" />
                </div>

            </div>
            <button className='carousel-control-prev' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className='carousel-control-next-icon' aria-hidden="true"></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    )
}

export default SobreNos