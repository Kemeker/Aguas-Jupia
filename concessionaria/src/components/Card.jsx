import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Drone2 from '../assets/Fotos/drone2.jpeg';


function Card({style}){
    return(
        /*
        <div className="card" style={style}>
            <img src={Drone2} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        */
        <div class="card text-bg-dark">
        <img src={Drone2} class="card-img" alt="..." />
        
        <div class="card-img-overlay">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">O melhor poço de agua mineral da regiao sul do Brasil. <br />
          PH de 9.1, a unica agua fluorificada naturalmente.
          </p>
          <p class="card-text"><small>Last updated 3 mins ago</small></p>
        </div>
      </div>



    )
}

export default Card