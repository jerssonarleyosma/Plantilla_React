import React, { useState, useEffect } from 'react';
import './SchemeButton.scss';
import { SvgMoon } from './assets/SvgMoon';
import { SvgSun } from './assets/SvgSun';

const SchemeButton = () => {

    //trae de localStorage si existe una clave llamada theme si no existe retorna light
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    //despues de renderizar toma el atrinbuto del html
    //le cambia los datos del atributo data-theme por la variable theme
    // despues guarda el dato en local storage
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    // alterna el contenido de theme segun su valor ocacionando que useEffect se renderice de nuevo
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };
    
    return (
        <React.Fragment>
            <label className='scheme-button' htmlFor="scheme-button" style={{ backgroundColor: theme === 'light' ? 'hsl(56, 100%, 64%)' : 'hsl(198, 96%, 26%)' }}>
                <span className={theme === 'dark' ? 'scheme-button__tittle-light hidden' : 'scheme-button__tittle-light'}>Light</span>
                <span className={theme === 'light' ? 'scheme-button__tittle-dark hidden' : 'scheme-button__tittle-dark'}>Dark</span>
                <div className='scheme-button__circle' style={{ transform: theme === 'light' ? 'translateX(53px)' : 'translateX(5px)', background: theme === 'light' ? 'white': 'hsl(198, 77%, 51%)'}}>
                    <span>
                        <SvgSun className={theme === 'dark' ? 'hidden' : ''} />
                    </span>
                    <span>
                        <SvgMoon className={theme === 'light' ? 'hidden' : ''} />
                    </span>
                </div>
                <input 
                    id="scheme-button" 
                    type="checkbox" 
                    onChange={toggleTheme} 
                    checked={theme === 'dark'} 
                    className='hidden'
                />
            </label> 
        </React.Fragment>
    );
}

export { SchemeButton };
