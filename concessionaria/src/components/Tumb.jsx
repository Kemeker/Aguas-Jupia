import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Image from '../assets/AguaAmericas.jpg'
import Drone from '../assets/Fotos/drone.jpeg'

function Tumb(){

  
    return(
        <div className="container">
            <img
            className='img-fluid' 
            src={Image} 
            alt="tumb" 
            />
        </div>




    )
}
export default Tumb