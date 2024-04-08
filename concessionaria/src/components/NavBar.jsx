import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Logo from '../assets/fiveicon.png'
import { Link } from 'react-router-dom';


function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            
            <div className="container-fluid">
                <img src={Logo} alt="" width="45" height="43" class="d-inline-block align-text-top" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                    <span class="navbar-toggler-icon"></span>
                    
                </button>    
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                       <Link to='/Fonte' className="nav-link active">Fonte</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://wa.me/49999518238" target='_blank' rel='noopener noreferrer'>WhatsApp</a>
                    </li>
                    
                </ul>
            </div>
            
            
  
        </nav>

        
        
    )
}

export default NavBar