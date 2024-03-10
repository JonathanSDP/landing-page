import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
    <div className='container-exp'>
        <h2 className='experience-title'>
            Mi experiencia
        </h2>
        <p className='experience-desc'>
            Como comente poseo experiencia Freelancer en diseño y desarrollo web 
            Frontend y Backend y mas abajo voy a ir subiendo los proyectos
            en los que estoy trabajando. Gracias!
        </p>
        <div className='gitdiv'>
        <a href="https://github.com/JonathanSDP" className='github'>Github</a>
        </div>
        <div className='job-container'>
            <div className='job'>
                <img className='job-img' src={require("../Assets/landing.jpg")}></img>
                <h3 className='job-title'><a href="#">Landing Page</a></h3>
                <p className='job-desc'>Desarrollo de una Landing Page
                tomando como ejemplo el desafio de holajuniors.com desarrollada en 
                HTML, CSS y JAVASCRIPT, con REACT</p>
            </div>
            <div className='job'>
                <img className='job-img' src={require("../Assets/Crud.jpg")}></img>
                <h3 className='job-title'><a href="https://github.com/JonathanSDP/CRUD-PHP">Crud PHP-PDO</a></h3>
                <p className='job-desc'>Desarrollo de un CRUD realizado con php y PDO
                con MVC</p>
            </div>
            <div className='job'>
                <img className='job-img' src={require("../Assets/UniverseBlog.jpg")}></img>
                <h3 className='job-title'><a href="https://bloguniverse.netlify.app/">Blog tematico del Universo</a></h3>
                <p className='job-desc'>Desarrollo de un Blog realizado con HTML,  con animaciones CSS En REACT</p>
            </div>
            <div className='job'>
                <img className='job-img' src={require("../Assets/proximamente.png")}></img>
                <h3 className='job-title'>Proximamente!</h3>
                <p className='job-desc'>Proximamente añadire un nuevo proyecto, estate atento/a!!</p>
            </div>
            <div className='job'>
                <img className='job-img' src={require("../Assets/proximamente.png")}></img>
                <h3 className='job-title'>Proximamente!</h3>
                <p className='job-desc'>Proximamente añadire un nuevo proyecto, estate atento/a!!</p>
            </div>
            <div className='job'>
                <img className='job-img' src={require("../Assets/proximamente.png")}></img>
                <h3 className='job-title'>Proximamente!</h3>
                <p className='job-desc'>Proximamente añadire un nuevo proyecto, estate atento/a!!</p>
            </div>
        </div>
    </div>

  )
}

export default Experience