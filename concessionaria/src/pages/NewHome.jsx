import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Background from '../assets/aguateste.png'
import Figure from '../components/Figure'
import Card from '../components/Card'
import NavBar from "../components/NavBar";



function NewHome(){
    const styleFigure = {
        
        width: "100%",
        height: "100vh", 
        backgroundImage: `url(${Background})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',

    }
    const styleCard = {
        width: '18rem',
        

    }
   



    return(
        <div>
    
            <NavBar />
            
        </div>      
        
    

    )
}

export default NewHome