import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import fundoImage from '../src/assets/fundo3.jpeg'
import './App.css'
import SocialCard from '../src/components/socialCard';

function App() {
  

  return (
    <>
    <div class="card-body">
      <img src={fundoImage} alt="fundo3"/>
      <SocialCard/>
     </div>
    </>
  )
}

export default App
