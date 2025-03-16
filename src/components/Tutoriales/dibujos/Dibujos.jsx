import React, { useEffect, useState } from 'react'
import './styles/dibujos.scss'

const Dibujos = () => {


  useEffect(() => {
    
    const elementos = document.querySelectorAll('.dibujos__contenedor');
    

   
    const nuevosDibujos = Array.from(elementos).map((el) => {
      const width = el.offsetWidth; 
      const height = el.offsetHeight;

     
      const cols = Math.ceil(width / 100);
      const rows = Math.ceil(height / 100);

      
      const className = `${cols}x${rows}`;
     

      return {
        element: el,
        className: className, 
      };
    });
    
    nuevosDibujos.forEach(({ element, className }) => {
      element.classList.add(getClassFromSize(className));
    });


    
  }, []);


  // Función para convertir nombres dinámicos en clases CSS
  const getClassFromSize = (size) => {

    const sizeMap = {
      '1x1': 'OnexOne',
      '1x2': 'OnexTwo',
      '1x3': 'OnexThree',
      '1x4': 'OnexFour',
      '2x1': 'TwoxOne',
      '2x2': 'TwoxTwo',
      '2x3': 'TwoxThree',
      '2x4': 'TwoxFour',
      '3x1': 'ThreexOne',
      '3x2': 'ThreexTwo',
      '3x3': 'ThreexThree',
      '3x4': 'ThreexFour',
      '4x1': 'FourxOne',
      '4x2': 'FourxTwo',
      '4x3': 'FourxThree',
      '4x4': 'FourxFour',
    };
    return sizeMap[size] || 'OnexOne'; // Si no hay coincidencia, asignamos OnexOne por defecto
  };


  return (
    <section className="dibujos">

      <div className='dibujos__contenedor pokeball'>
        <div className='pokeball__back'></div>
        <div className='pokeball__top'></div>
        <div className='pokeball__bottom'></div>
        <div className='pokeball__mid'></div>
        <div className='pokeball__circle'></div>
        <img className='pokeball__img' src="../../../../src/assets/images/dibujos/pokeball.png" alt="" />
      </div>

      <div className='dibujos__contenedor htmlLogo'>
        <img className='htmlLogo__img' src="../../../../src/assets/images/dibujos/HTML5.png" alt="" />
        <div className='htmlLogo__tittle'>HTML</div>
        <div className='htmlLogo__back'></div>      
        <div className='htmlLogo__between'></div>
        <div className='htmlLogo__number'></div>
      </div>

      <div className='dibujos__contenedor cssLogo'>
        <div className='cssLogo__tittle'>CSS</div>
        <div className='cssLogo__back'></div>      
        <div className='cssLogo__between'></div>
        <div className='cssLogo__number'></div>
        <img className='cssLogo__img' src="../../../../src/assets/images/dibujos/LogoCSS.png" alt="" />
      </div>

      <div className='dibujos__contenedor mike'>
        
      </div>

      <div className='dibujos__contenedor'>
        
      </div>

      <div className='dibujos__contenedor'>
        
      </div>

      <div className='dibujos__contenedor'>
        
      </div>

      <div className='dibujos__contenedor'>
        
      </div>

      <div className='dibujos__contenedor'>
        
      </div>

      <div className='dibujos__contenedor'>
        
      </div>

      <div className='dibujos__contenedor'>
        
      </div>

      <div className='dibujos__contenedor'>
        
      </div>

    </section>
  )
}

export  { Dibujos }
