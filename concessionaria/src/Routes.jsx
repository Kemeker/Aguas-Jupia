// Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewHome from '../src/pages/NewHome';  
import PageFonte from '../src/pages/PageFonte'





const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NewHome />} /> 
      <Route path="/Fonte" element={<PageFonte />} />
      
    </Routes>
  );
};

export default AppRoutes;


/*
      <Route path="/PageFonte" element={<PageFonte />} />
      <Route path="/SobreNos" element={<SobreNos />} />
*/      