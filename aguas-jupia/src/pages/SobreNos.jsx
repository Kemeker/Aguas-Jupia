import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Analise from '../assets/Fotos/analise.jpeg'
import Drone2 from '../assets/Fotos/drone2.jpeg'
import Drone from '../assets/Fotos/drone.jpeg'



function SobreNos(){
    return(
        <div id="carouselExampleIndicators" className="carousel slide">
            <div className='carousel-indicators'>
                <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className='carousel-inner'>
                <div className='carousel-item active'>
                    <img className='class="d-block w-100"' src={Drone2} alt="analise" />
                </div>
                    
                <div className='carousel-item'>
                    <img className='class="d-block w-100"' src={Drone2} alt="drone" />
                </div>
                <div className='carousel-item'>
                    <img className='class="d-block w-100"' src={Drone} alt="drone" /> 
                </div>
            </div>
            <button className='carousel-control-prev' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                <span className='visually-hidden'></span>
            </button>
            <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className='carousel-control-next-icon' aria-hidden="true"></span>
                <span className='visually-hidden'></span>
            </button>
        </div>
        

                



            


        
        
    )

        
        



        




        
    
}

export default SobreNos