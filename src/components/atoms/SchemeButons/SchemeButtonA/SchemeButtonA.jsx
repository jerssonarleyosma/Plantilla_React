import React, { useContext } from 'react';
import './styles/SchemeButtonA.scss';
import { SvgMoon } from '@atoms/IconSvg/SvgMoon.jsx';
import { SvgSun } from '@atoms/IconSvg/SvgSun.jsx';
import { GlobalContext } from '../../../context/GlobalContext';

const SchemeButtonA = () => {

    const { theme, toggleTheme } = useContext(GlobalContext);


    return (
        <>
            <label className='scheme-buttonA' htmlFor="scheme-buttonA" style={{ backgroundColor: theme === 'light' ? 'hsl(56, 100%, 64%)' : 'hsl(198, 96%, 26%)' }}>
                <span className={theme === 'dark' ? 'scheme-buttonA__tittle-light hidden' : 'scheme-buttonA__tittle-light'}>Light</span>
                <span className={theme === 'light' ? 'scheme-buttonA__tittle-dark hidden' : 'scheme-buttonA__tittle-dark'}>Dark</span>
                <div className='scheme-buttonA__circle' style={{ transform: theme === 'light' ? 'translateX(53px)' : 'translateX(5px)', background: theme === 'light' ? 'white': 'hsl(198, 77%, 51%)'}}>
                    <span  className={theme === 'dark' ? 'hidden' : ''}>
                        <SvgSun />
                    </span>
                    <span className={theme === 'light' ? 'hidden' : ''}>
                        <SvgMoon />
                    </span>
                </div>
                <input 
                    id="scheme-buttonA" 
                    type="checkbox" 
                    onChange={toggleTheme}
                    className='hidden'
                />
            </label> 
        </>
    );
}

export { SchemeButtonA };
