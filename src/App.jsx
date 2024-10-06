import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { GlobalData } from './components/context/GlobalContext.jsx';
import { SchemeButtonA } from '@atoms/SchemeButons/SchemeButtonA/SchemeButtonA.jsx';
import { Triki } from '@tutoriales/Triki/Triki.jsx';


const App = () => {

  
  return (
    <GlobalData>

      <SchemeButtonA />

      <Router>
        <Routes>
          <Route path="/tutoriales/triki" element={<Triki />} />
        </Routes>
      </Router>
      
    </GlobalData>
  );
};

export { App };
