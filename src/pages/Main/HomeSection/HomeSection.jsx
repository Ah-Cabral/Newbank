import React from 'react'
import Tilt from 'react-vanilla-tilt'

import { PurpleCard } from '../../../components/Cards'

import './home-section.css'


function homeSection() {
    return (
        <section>
            <div className="home-section-container">

                <div className="gray-ball ball"></div>
                <div className="purple-ball ball"></div>

                <section className="welcome-section">
                    <h1>Você no controle do seu dinheiro</h1>
                    <h3>Controle total do cartão de crédito e da conta 100% digital</h3>
                    <button>Saiba Mais</button>
                </section>

                <Tilt className="tilt">
                    <div className="div-card">
                        <PurpleCard name='Arthur Cabral' />
                    </div>
                </Tilt>

                {/*<BlackCard name='Bem vindo ;)' />*/}

            </div>

        </section>
    )
}

export default homeSection
