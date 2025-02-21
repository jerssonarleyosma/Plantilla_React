import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GlobalData } from './context/GlobalContext.jsx';

import { SchemeButtonA } from './components/atoms/SchemeButons/SchemeButtonA/SchemeButtonA.jsx';
import { Dibujos } from './components/Tutoriales/dibujos/Dibujos.jsx';

const App = () => {

  
  return (
    <GlobalData>

      < SchemeButtonA />
      
      <Router>
        <Routes>
          <Route path="/" element={<Dibujos/>} />
        
        </Routes>
      </Router>
      
    </GlobalData>
  );
};

export { App };
