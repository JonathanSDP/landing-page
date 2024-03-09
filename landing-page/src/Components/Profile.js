import React from 'react'
import "./Profile.css"

const Profile = () => {
  return (
    <div className='container-profile'>
        <section className='main-Section'>
            <h1 className='profile-title'>
                Jonathan Pojomovsky,<br/>
                Developer Fullstack.
            </h1>
            <p className='profile-desc'>Soy un apasionado por la tecnologia y 
            orientado a resultados , de momento cuento como experiencia como Freelancer
            y busco mi primera oportunidad para ingresar a desarrollar a una empresa y seguir
            creciendo laboralmente.</p>
            <img src={require("../Assets/main-photo.png")}></img>
        </section>
        <section className='skills-container'>
            <h2 className='skills-subtitle'>
                 Mis habilidades
            </h2>
            <p className='skills-desc'>
                Tengo conocimientos en HTML,CSS,JAVASCRIPT,<br/>
                REACT,PHP,SQL,PLSQL,<br/>
                DATASTAGE,C++ y UNREALENGINE
            </p>
            <div className='wrap-skills'>
                <div className='skill'>
                    <h3 className='skill-name'>
                        HTML,CSS,JAVASCRIPT
                    </h3>
                    <p className='skill-desc'>
                        Tengo conocimientos intermedios de HTML, CSS y JS,
                        desarrollando diferentes tipos de webs.
                    </p>
                </div>
                <div className='skill'>
                <h3 className='skill-name'>
                        SQL Server/PLSQL
                    </h3>
                    <p className='skill-desc'>
                        Tengo conocimientos intermedios/avanzados en estructuras <br/>
                        de bases de datos y ejecucion de jobs mediante DataStage.
                    </p>
                </div>
                <div className='skill'>
                <h3 className='skill-name'>
                        C++
                    </h3>
                    <p className='skill-desc'>
                        Conocimientos intermedios de C++ y desarrollo de videojuegos
                        con Unreal engine 4/5
                    </p>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Profile