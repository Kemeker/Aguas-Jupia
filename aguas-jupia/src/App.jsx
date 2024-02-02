import React from 'react'
import './App.css'
import logoImage from '../src/assets/AguaAmericas.jpg'


function App() {
  

  return (
    <>
      <div className='container mx-auto'>
        <div className='card-body'>
          <img className='logo' src={logoImage} alt="logo"/>
          
          <ul className='"social-links" class="list-unstyled"'>
            <li className='social-link fonte-ferradura'>
              <a href="#" className='btn btn-primary fonte-ferradura'>Fonte Ferradura</a>
            </li>
            <li className='social-link wpp'>
            <a href="#" className='btn btn-primary wpp'>Whatsapp</a>
            </li>
            <li className='social-link insta'>
            <a href="#" className='btn btn-primary insta'>Instagram</a>
            </li>
            <li className='social-link history'>
            <a href="#" className='btn btn-primary history'>Historia</a>
            </li>
          </ul>
        </div>
      </div>    
      
            
          
      
    </>
  )
}

export default App
