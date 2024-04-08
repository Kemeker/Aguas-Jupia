import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../css/SequenciaCard.css'
import Analise from '../assets/Fotos/analise.jpeg'
import Analise2 from '../assets/Fotos/analise2.jpeg'
import Drone from '../assets/Fotos/drone.jpeg'
import Drone2 from '../assets/Fotos/drone2.jpeg'
import Fonte from '../assets/Fotos/agua.jpeg'
import Bomba from '../assets/Fotos/bomba.jpeg'
import Bomba2 from '../assets/Fotos/bomba2.jpeg'

function SequenciaCard({style}){
    return(

        <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100">
                    <img src={Drone} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Fonte</h5>
                        <p className="card-text">Fonte Ferradura, interior de Jupiá.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={Drone2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Analise da Água</h5>
                        <p className="card-text">Realizado procedimento de analise da água no dia 00/00/0000.</p>
                    </div>Name
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={Analise} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={Analise2} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                </div>

                    


    )
}
export default SequenciaCard










