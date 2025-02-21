import { useEffect, useState } from 'react';
import './styles/TextWrinting.scss'


/// como usar
//funciona solo con text="string" o text={variablestring} el tamaño duracion y tiempo entre animaciones van por defecto
//si desea agregar mas props esta:
//width el cual es para darle el ancho al componente (su contenido se desborda) redive valores como '16px' '1.6rem'
//heidht funciona igual que el width
//size que da el tamaño de la letra recive valores como '16px' '1.6rem'
//boltext que le da fontweight al caracter deseado recive una array con los valores a poner en bold [0, 5,6,7,13..etc]
//blur funciona igual que boltext y agrega como neon al texto
//duration recive numeros planos y estos son representados en segundos en el codigo
//restar es el tiempo desde que inicia la animacion hasta que vuleva a iniciar y recive numeros planos que son representados en milisegundos, ejemplo 8000 son 8 segundos

const separateDataSize = (str) => {
    
    const match = str.match(/(\d+(\.\d+)?)([a-zA-Z%]*)/);

    if (match) {
        const number = parseFloat(match[1]); 
        const unit = match[3] || ''; 
        return [number, unit];
    }
    
    return [1.6, 'rem']; 
    
}

export const TextWriting = ({ text, width, height, size, boldtext, blur, duration, restart }) => {
    const characters = Array.from(text);
    const sise = size? separateDataSize(size) : [1.6, 'rem'];
    const totalDuration = duration? duration : 5;
    const [actu, setActu] = useState(0); // key para forzar re-render

    useEffect(() => {
        const interval = setInterval(() => {
            setActu(prev => prev + 1); // incrementa key para re-render
        }, restart? restart : 7000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="textwriting-container" style={{width: width? width : 'auto', height: height? height : 'auto'}} key={actu}>
            <div className="textwriting-container__line" style={{ borderRight: `${sise[0]/3}${sise[1]} solid light-dark(black, white)` }}>
                {characters.map((char, index) => {
                    const delay = `${index * (totalDuration / characters.length)}s`;
                    const isBold = boldtext? boldtext.includes(index) : false;
                    const isBlur = blur? blur.includes(index) : false;
                    return (
                        <p key={index} style={{
                            fontSize: size? size : '1.6rem',
                            animation: `typing 0.1s ease-in ${delay} 1 forwards`,
                            width: char === " " ? size? size : '1.6rem' : undefined,
                            fontWeight: isBold ? '800' : 'normal', 
                            textShadow: isBlur ? `0px 0px ${size? size : '1.6rem'} light-dark(#242424, #ffffff)` : '',
                        }}>
                            {char}
                        </p>
                    );
                })}
                
            </div>
            
        </div>
    )
}
