import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
    <div className='container-exp'>
        <h2 className='experience-title'>
            Mi experiencia
        </h2>
        <p className='experience-desc'>
            aca va la descripcion
        </p>
        <div className='gitdiv'>
        <a href="https://github.com/JonathanSDP" className='github'>Github</a>
        </div>
        <div className='job-container'>
            <div className='job'>
                <img className='job-img' src={require("../Assets/proximamente.png")}></img>
                <h3 className='job-title'>aca va el titulo</h3>
                <p className='job-desc'>aca va la descripcion del proyecto</p>
            </div>
            <div className='job'>
                <img className='job-img' src={require("../Assets/proximamente.png")}></img>
                <h3 className='job-title'>aca va el titulo</h3>
                <p className='job-desc'>aca va la descripcion del proyecto</p>
            </div>
            <div className='job'>
                <img className='job-img' src={require("../Assets/proximamente.png")}></img>
                <h3 className='job-title'>aca va el titulo</h3>
                <p className='job-desc'>aca va la descripcion del proyecto</p>
            </div>
            <div className='job'>
                <img className='job-img' src={require("../Assets/proximamente.png")}></img>
                <h3 className='job-title'>aca va el titulo</h3>
                <p className='job-desc'>aca va la descripcion del proyecto</p>
            </div>
            <div className='job'>
                <img className='job-img' src={require("../Assets/proximamente.png")}></img>
                <h3 className='job-title'>aca va el titulo</h3>
                <p className='job-desc'>aca va la descripcion del proyecto</p>
            </div>
            <div className='job'>
                <img className='job-img' src={require("../Assets/proximamente.png")}></img>
                <h3 className='job-title'>aca va el titulo</h3>
                <p className='job-desc'>aca va la descripcion del proyecto</p>
            </div>
        </div>
    </div>

  )
}

export default Experience