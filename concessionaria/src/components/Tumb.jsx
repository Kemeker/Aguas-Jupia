import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Image from '../assets/tumb.jpg'


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