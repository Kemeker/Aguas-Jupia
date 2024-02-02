import React from 'react'
import './App.css'
import logoImage from '../src/assets/AguaAmericas.jpg'
import iconeFonte from '../src/assets/iconeFonte.png'
import iconeWpp from '../src/assets/iconeWpp.png'
import iconeInsta from '../src/assets/iconeInsta.png'
import iconeHistoria from '../src/assets/iconeHistoria.png'



function App() {
  

  return (
    <>
      <div className='container mx-auto'>
        <div className='card-body'>
          <img className='logo' src={logoImage} alt="logo"/>
          
          <ul className='"social-links" class="list-unstyled"'>
            <li className='social-link fonte-ferradura'>
              <img className='icone1' src={iconeFonte} alt="fonte"/> 
              <a href="#" className='btn btn-primary fonte-ferradura' target='blank'>Fonte Ferradura</a>
            </li>
            
            <li className='social-link wpp'>
              <img className='icone' src={iconeWpp} alt="wpp"/>
              <a href="https://wa.me/49999518238" className='btn btn-primary wpp' target='blank'>Whatsapp</a>
            </li>

            <li className='social-link insta'>
              <img className='icone' src={iconeInsta} alt="insta"/>
              <a href="https://www.instagram.com/marcosandrecossa/" className='btn btn-primary insta' target='blank'>Instagram</a>
            </li>

            <li className='social-link history'>
              <img className='icone' src={iconeHistoria} alt="historia"/>
              <a href="#" className='btn btn-primary history' target='blank'>Historia</a>
            </li>

          </ul>
        </div>
      </div>    
      
            
     
      
    </>
  )
}

export default App
