import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Logo from '../assets/fiveicon.png'


function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            
            <div className="container-fluid">
                <img src={Logo} alt="" width="50" height="46" class="d-inline-block align-text-top" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                    <span class="navbar-toggler-icon"></span>
                    
                </button>    
            </div>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Fonte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Whatsapp</a>
                    </li>
                    
                </ul>
            </div>
            
            
  
        </nav>

        
        
    )
}

export default NavBar