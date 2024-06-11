import React, { useEffect, useState } from 'react';
import './styles/TextWrinting.scss';

const TextWriting = ({ text, size }) => {
  const characters = Array.from(text);
  const totalDuration = 4;
  const [key, setKey] = useState(0); // key para forzar re-render poniendolo en el div para que se tenga que renderizar el componente a partir de ahi

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1); // incrementa key para re-render
    }, 10000); // reinicia cada 15 segundos

    return () => clearInterval(interval); // limpia el intervalo
  }, []);

  return (
    <div className="textwriting" style={{ fontSize: size }} key={key}>
      {characters.map((char, index) => {
        const delay = `${index * (totalDuration / characters.length)}s`; 
        return (
          <p key={index} style={{
            animation: `typing 0.1s ease-in ${delay} 1 forwards`,
            width: char === " " ? '8px' : undefined
          }}>
            {char}
          </p>
        );
      })}
    </div>
  );
}

export { TextWriting };
