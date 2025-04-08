import React from 'react'
import './styles/Portfolio.scss'
import IconMail from '@atoms/IconSvg/IconMail.jsx'
import IconLinkedin from '@atoms/IconSvg/IconLinkedin.jsx'
import IconGitHub from '@atoms/IconSvg/IconGitHub.jsx'
import IconDownload from '@atoms/IconSvg/IconDownload.jsx'
import imgproyect from '@images/portfolio/proyectos.jpg'
import { TextWriting } from '@atoms/Texts/TextWriting/TextWriting'


const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className='portfolio__introduction introduction'>
       
        <h3 className='introduction__name'>Jersson osma</h3>
        <p className='introduction__paragraph'>
          <span>👋</span> <span>Desarrollador Frontend</span> <br /><span>🔧</span> <span>Mi enfoque principal es JavaScript y la maquetación precisa de diseños web.</span>
        </p>
        <img className='introduction__image' src='/src/assets/images/portfolio/perfil.jpg' alt="Perfil" />
        <div className='introduction__social social-link'>
            <div className='social-link__item' onClick={() => {navigator.clipboard.writeText('jerssonarleyosma@gmail.com')}}>
              <span><IconMail/> Correo</span>
            </div>
            <div className='social-link__item'>
              <a href="https://www.linkedin.com/in/jersson-osma-3236bb2a9/" target='__blank'><IconLinkedin/> linkeding</a>
            </div>
            <div className='social-link__item'>
              <a href="https://github.com/jerssonarleyosma" target='__blank'><IconGitHub/> GitHub</a> 
            </div>

        </div>
        <a  className='introduction__button' href="/src/assets/images/portfolio/perfil.jpg"  download="jersson osma CV"><span><IconDownload/></span>Descargar CV</a>

      </div>
      
      <div className='portfolio__projects projects'>
        <div className='projects__tittle'>
          <TextWriting text='Proyectos' size='2rem' height='35px' duration={0.7} restart={15000} boldtext={[0,1,2,3,4,5,6,7,8]} />
        </div>

        <div className='projects__content content'>
          

          <div className='content__wrap wrap'>
            
            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>
            
            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

            <div className='wrap__card card'>
              <div className='card__imagen'>
                <img src={imgproyect} alt="" />

              </div>
              <div className='card__description'>
                <h3>Nombre Del Proyecto</h3>
                <p>Descripción del proyecto corta y concisa para lectura rapida</p>
                <div>
                  <span>html</span><span>css</span><span>javascript</span><span>Sass</span><span>React</span><span>Vite</span>
                </div>
                <div>
                  <a href="">Ver Código</a>
                  <a href="">Ver Proyecto</a>
                </div>
              </div>
              <div></div>
            </div>

          </div>

        </div>

        

      </div>

      <div className='portfolio__contact contact'>
        <form action="post" className='contact__form'>
          <h3>Escribeme</h3>
      
          <input type="text" name="name" id="name" placeholder='Nombre' required onInvalid={(e) => e.target.setCustomValidity('Por favor ingresa tu nombre')} onInput={(e) => e.target.setCustomValidity('')}/>
       
     
          <input type="email" name="email" id="email" placeholder='Correo' required/>
         
        
          <textarea name="message" id="message" placeholder='Mensaje' required onInvalid={(e) => e.target.setCustomValidity('Por favor ingresa tu mensaje para comunicarme contigo')} onInput={(e) => e.target.setCustomValidity('')} ></textarea>
   
          <button type="submit">Enviar mensaje</button>

        </form>
      </div>


      <div className='borders'></div>
      <div className='borders'></div>
      <div className='borders'></div>
    </section>
  )
}

export { Portfolio } 
