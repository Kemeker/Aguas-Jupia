import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Logo from '../assets/fiveicon.png'


function NavBar(){
    return(
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={Logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Concessionária de Água Jupiá
                </a>
            </div>
        </nav>

        
        
    )
}

export default NavBar