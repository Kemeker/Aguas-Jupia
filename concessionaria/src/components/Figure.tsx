import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Drone2 from '../assets/Fotos/drone2.jpeg';


function Figure(){
    return(
    <figure className="figure">
        <img src={Drone2} className="figure-img img-fluid rounded" alt="Fonte" />
        <figcaption className="figure-caption">Fonte Ferradura</figcaption>
    </figure>

    )
}

export default Figure