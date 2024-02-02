// Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';  
import FonteFerradura from '../src/pages/FonteFerradura'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/FonteFerradura" element={<FonteFerradura />} />
      
    </Routes>
  );
};

export default AppRoutes;


