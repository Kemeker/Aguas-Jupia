// Routes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewHome from '../src/pages/NewHome';  



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<NewHome />} /> 
    </Routes>
  );
};

export default AppRoutes;


/*
      <Route path="/FonteFerradura" element={<FonteFerradura />} />
      <Route path="/SobreNos" element={<SobreNos />} />
*/      