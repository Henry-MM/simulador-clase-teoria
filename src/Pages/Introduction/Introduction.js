import React from 'react'
import { Link } from 'react-router-dom'
import Content from '../../Components/Content/Content'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import Button from '../../Components/Button/Button'
import Dev from '../../Components/Dev/Dev'

import './Introduction.css'
import isLogo from '../../Assets/images/logoIs.png'
import unahLogo from '../../Assets/images/logo-unah.png'
import henry from '../../Assets/images/Henry.jpg'
import denzell from '../../Assets/images/denzell.png'
import mauri from '../../Assets/images/mauri.png'
import fernando from '../../Assets/images/fernando.jpg'
import andrea from '../../Assets/images/Andrea.png'


const Introduction = () => {
    return (
        <div className="Introduction">
            <Header />
            <Content className="Introduction__content">
                <div className="Introduction__logos">
                    <img src={isLogo} alt="S.I." />
                    <img src={unahLogo} alt="UNAH" />
                </div>
                <div className="Introduction__project_info">
                    <div>
                        <h4>Asignatura:&nbsp;</h4>
                        <span>Teoría de la Simulación</span>
                    </div>
                    <div>
                        <h4>Catedrático:&nbsp;</h4>
                        <span>Ing. Francisco Nuñez</span>
                    </div>
                </div>
                <div className="Introduction__devs_container">
                    <h3>Elaborado por:&nbsp;</h3>
                    <div className="devs__wrapper">
                        <Dev 
                            photoURL={henry}
                            alt="developer"
                            name="Henry Espinoza"/>
                        <Dev 
                            photoURL={denzell}
                            alt="developer"
                            name="Denzell Griffith"/>
                        <Dev 
                            photoURL={andrea}
                            alt="developer"
                            name="Andrea Calix"/>
                        <Dev 
                            photoURL={mauri}
                            alt="developer"
                            name="Olvin Ramos"/>
                        <Dev 
                            photoURL={fernando}
                            alt="developer"
                            name="Fernando Garcia"/>
                    </div>
                </div>
                <div className="Introduction__buttons_container">
                    <Link to="./simulator">
                        <Button className="start_btn">Iniciar Simulacíon</Button>
                    </Link>
                </div>
            </Content>
            <Footer />
        </div>
    )
}

export default Introduction