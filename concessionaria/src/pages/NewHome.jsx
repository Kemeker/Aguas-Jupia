import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Background from '../assets/aguateste.png'
import SequenciaCard from '../components/SequenciaCard'
import Card from '../components/Card'
import NavBar from "../components/NavBar";
import Tumb from '../components/Tumb'




function NewHome(){
    const styleFigure = {
        
        width: "100%",
        height: "100vh", 
        backgroundImage: `url(${Background})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',

    }
    const styleTumb = {
        height: "200px", 
        Width: "2000px"
        

    }
   



    return(
        <div>
    
            <NavBar  />
            <Tumb />
            <h1>Destaques</h1>
            
            
            
            
            
            
        </div>      
        
    

    )
}

export default NewHome