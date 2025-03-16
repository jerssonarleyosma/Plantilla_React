import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GlobalData } from './context/GlobalContext.jsx';


import { Dibujos } from './components/Tutoriales/dibujos/Dibujos.jsx';
import { Portfolio } from './components/pages/Portfolio/Portfolio.jsx';

import { SchemeButtonA } from './components/atoms/SchemeButons/SchemeButtonA/SchemeButtonA.jsx';

const App = () => {

  
  return (
    <GlobalData>
      <SchemeButtonA/>
      <Router>
        <Routes>
          <Route path="/dibujos" element={<Dibujos/>} />
          <Route path='/porfolio' element={<Portfolio/>}/>
        </Routes>
      </Router>
      
    </GlobalData>
  );
};

export { App };
