import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Background from '../assets/garrafa.png'
import SequenciaCard from '../components/SequenciaCard'
import Card from '../components/Card'
import NavBar from "../components/NavBar"
import Tumb from '../components/Tumb'
import Info from "../components/Infos"




function NewHome(){
    const style = {
        backgroundImage: `url(${Background})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center center', 
        backgroundRepeat: 'no-repeat',
        height: '74vh', 
        marginTop: '5px'
    }
    return(

        <div>
            
            <NavBar /> 
            
                <div style={style}>
                    <Tumb  /> 
                </div>
            <Info /> 
        </div>      
        
    

    )
}

export default NewHome