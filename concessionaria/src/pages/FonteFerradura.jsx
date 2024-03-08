import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/Home.css'
import Analise from '../assets/Fotos/analise.jpeg'
import Analise2 from '../assets/Fotos/analise2.jpeg'
import Drone2 from '../assets/Fotos/drone2.jpeg'
import Drone from '../assets/Fotos/drone.jpeg'
import Bomba from '../assets/Fotos/bomba.jpeg'
import Bomba2 from '../assets/Fotos/bomba2.jpeg'
import Agua from '../assets/Fotos/agua.jpeg'
import Letreiro from '../assets/Fotos/ferradura.jpeg'



function FonteFerradura(){
    return(
            <>
                <div className="title-section">
                    <h1>Agua Mineral Jupia</h1>
                    <ul>
                        <ol>Fonte: Ferradura</ol>
                        <ol>Razão Social: Concessionaria de Agua Mineral Jupia Ltda</ol>
                        <ol>Endereço: Estrada Salete, Sn, Brcao - Rural - Jupia - SC | CEP: 89.839-000 </ol>
                        <ol>Email: aguasjupia@hotmail.com </ol>
                        <ol>Fone: (49) 3342-1194</ol>
                    </ul>
                    <hr className="separator-line" />
                </div>
        
                <div id="carouselExampleIndicators" className="carousel slide">
                

                    
                    <div className='carousel-indicators'>
                        <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type='button' data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    </div>
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <img 
                            className="d-block" 
                            src={Drone2} 
                            alt="drone" 
                            srcSet={`${Drone2} 300w, ${Drone2} 768w, ${Drone2} 1280w`}
                            sizes='(max-width: 300px) 280px, (max-width: 768px) 600px, 800px'
                            />
                        </div>
                            
                        <div className="carousel-item">
                            <img 
                            className="d-block" 
                            src={Drone} alt="drone" 
                            srcSet={`${Drone} 300w, ${Drone} 768w, ${Drone} 1280w`}
                            sizes='(max-width: 300px) 280px, (max-width: 768px) 600px, 800px'
                            />
                        </div>

                        <div className='carousel-item'>
                            <img 
                            className="d-block" 
                            src={Bomba}
                            alt="bomba d'agua"
                            srcSet={`${Bomba} 300w, ${Bomba} 768w, ${Bomba} 1280w`}
                            sizes='(max-width: 300px) 280px, (max-width: 768px) 600px, 800px' 
                            />
                        </div>

                        <div className='carousel-item'>
                            <img 
                            className="d-block" 
                            src={Bomba2} 
                            alt="bomba d'agua" 
                            srcSet={`${Bomba2} 300w, ${Bomba2} 768w, ${Bomba2} 1280w`}
                            sizes='(max-width: 300px) 280px, (max-width: 768px) 600px, 800px'
                            />
                        </div>
                        
                        <div className='carousel-item'>
                            <img 
                            className="d-block " 
                            src={Analise} 
                            alt="analise" 
                            srcSet={`${Analise} 300w, ${Analise} 768w, ${Analise} 1280w`}
                            sizes='(max-width: 300px) 280px, (max-width: 768px) 600px, 800px'
                            />
                        </div>

                        <div className='carousel-item'>
                            <img 
                            className="d-block" 
                            src={Analise2} 
                            alt="analise" 
                            srcSet={`${Analise2} 300w, ${Analise2} 768w, ${Analise2} 1280w`}
                            sizes='(max-width: 300px) 280px, (max-width: 768px) 600px, 800px'
                            />
                        </div>
                        
                        <div className='carousel-item'>
                            <img 
                            className="d-block" 
                            src={Agua} 
                            alt="agua"
                            srcSet={`${Agua} 300w, ${Agua} 768w, ${Agua} 1280w`}
                            sizes='(max-width: 300px) 280px, (max-width: 768px) 600px, 800px' 
                            />
                        </div>

                        <div className='carousel-item'>
                            <img 
                            className="d-block" 
                            src={Letreiro} 
                            alt="letreiro" 
                            srcSet={`${Letreiro} 300w, ${Letreiro} 768w, ${Letreiro} 1280w`}
                            sizes='(max-width: 300px) 280px, (max-width: 768px) 600px, 800px'
                            />
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
            </>
   

        
        
            
        
    )
}

export default FonteFerradura