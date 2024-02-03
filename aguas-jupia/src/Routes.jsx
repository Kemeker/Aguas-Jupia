// Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';  
import FonteFerradura from '../src/pages/FonteFerradura'
import SobreNos from '../src/pages/SobreNos'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/FonteFerradura" element={<FonteFerradura />} />
<<<<<<< HEAD
      <Route path='/SobreNos' element={<SobreNos />} />
=======
      <Route path="/SobreNos" element={<SobreNos />} />
>>>>>>> 4ad81944e3784080d1f3d4bf47e2aa921d0bc110
      
    </Routes>
  );
};

export default AppRoutes;


