import React, { useEffect } from 'react';
import './css/style.css'
import { Card } from './components/Card'
import { works } from './data/works'

function App() {

  return (
    <div classNameName="App">
        <section id="header">
            <div className="header container">
            <div className="nav-bar">
                <div className="brand">
                <a href="#hero"><h1><span>J</span>azmin <span>T</span>rujillo</h1></a>
                </div>
                <div className="nav-list">
                <div className="hamburger"><div className="bar"></div></div>
                <ul>
                    <li><a href="#hero" data-after="Home">Inicio</a></li>
                    <li><a href="#projects" data-after="Projects">Proyectos</a></li>
                    <li><a href="#about" data-after="About">Sobre mi</a></li>
                    <li><a href="#contact" data-after="Contact">Contacto</a></li>
                </ul>
                </div>
            </div>
            </div>
        </section>

        <section id="hero">
            <div className="hero container">
            <div>
                <h1>Hola, <span></span></h1>
                <h1>soy<span></span></h1>
                <h1>Jazmin Trujillo <span></span></h1>
                <a href="#projects" type="button" className="cta">Portfolio</a>
            </div>
            </div>
        </section>

        <section id="projects">
            <div className="projects container">
                <div className="projects-header">
                    <h1 className="section-title">Proyectos <span>Recientes</span></h1>
                </div>
                <div className="grid-system">
                {
                    works.map( work => {
                        return <Card title={work.title} desc={work.desc} url={work.url}/>
                    } )
                }
                </div>

            </div>
        </section>

        <section id="about">
            <div className="about container">
            <div className="col-left">
                <div className="about-img">
                <img src='https://i.imgur.com/viFDGup.jpg' alt="img"></img>
                </div>
            </div>
            <div className="col-right">
                <h1 className="section-title">Sobre <span>mi</span></h1>
                <h2>Front End Developer</h2>
                <p>Me considero una persona responsable, organizada, puntual y respetuosa. En cuanto al trabajo en equipo me siento bastante cómoda, tengo la habilidad de adaptarme fácilmente a la necesidad que se requiera. Igualmente puedo trabajar administrando mi tiempo y sin supervisión. Me encanta aprender cosas nuevas y mejorar las habilidades que ya poseo.  Tengo ansias de  aplicar los conocimientos que he adquirido hasta ahora.</p>
            </div>
            </div>
        </section>

        <section id="contact">
            <div className="contact container">
            <div><h1 className="section-title">Información de <span>Contacto</span></h1></div>
            <div className="contact-items">
                <div className="contact-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" alt="contact"/></div>
                <div className="contact-info">
                    <h1>Teléfono</h1>
                    <h2>+56935067371</h2>
                    <h2>+56958039062</h2>
                </div>
                </div>
                <div className="contact-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" alt="contact"/></div>
                <div className="contact-info">
                    <h1>Correo</h1>
                    <h2>jazmin.jahazieltru@gmail.com</h2>
                    <h2>jazmin.jahatrujillo@outlook.com</h2>
                </div>
                </div>
                <div className="contact-item">
                <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" alt="contact"/></div>
                <div className="contact-info">
                    <h1>Dirección</h1>
                    <h2>Viña del mar, Valparaiso, Chile.</h2>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section id="footer">
            <div className="footer container">
            <div className="brand"><h1><span>J</span>asmine <span>T</span>rujillo</h1></div>
            <h2>By: JazmineTrujillo</h2>
            </div>
        </section>
    </div>
  );
}

export default App;
