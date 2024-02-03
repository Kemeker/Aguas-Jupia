import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css'
import logoImage from '../assets/AguaAmericas.jpg';
import iconeFonte from '../assets/iconeFonte.png';
import iconeWpp from '../assets/iconeWpp.png';
import iconeInsta from '../assets/iconeInsta.png';
import iconeHistoria from '../assets/iconeHistoria.png';

function Home() {
  return (
    <div className='container mx-auto'>
      <div className='card-body'>
        <img className='logo' src={logoImage} alt="logo"/>
        
        <ul className='social-links list-unstyled'>
          <li className='social-link fonte-ferradura'>
            <img className='icone1' src={iconeFonte} alt="fonte"/> 
            <Link to="/FonteFerradura" className=' fonte-ferradura' >Fonte Ferradura</Link>
          </li>
          
          <li className='social-link wpp'>
            <img className='icone' src={iconeWpp} alt="wpp"/>
            <a href="https://wa.me/49999518238" className='wpp' target='_blank' rel='noopener noreferrer'>Whatsapp</a>
          </li>

          <li className='social-link insta'>
            <img className='icone' src={iconeInsta} alt="insta"/>
            <a href="https://www.instagram.com/marcosandrecossa/" className='insta' target='_blank' rel='noopener noreferrer'>Instagram</a>
          </li>

          

          <li className='social-link history'>
            <img className='icone2' src={iconeHistoria} alt="historia"/>
            <Link to="/SobreNos" className=' history' >Sobre nós</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
