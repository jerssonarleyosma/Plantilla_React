import React from 'react';
import { GlobalData } from './components/context/GlobalContext.jsx';
import { SchemeButtonA } from '@atoms/SchemeButons/SchemeButtonA/SchemeButtonA.jsx';
import { Triki } from '@tutoriales/Triki/Triki.jsx';


const App = () => {
  return (
    <GlobalData>
      <SchemeButtonA />
      <Triki />
    </GlobalData>
  );
};

export { App };
