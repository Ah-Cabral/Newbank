import React from 'react'

import { BlackCard, PurpleCard } from '../../../components/Cards'


function homeSection() {
    return (
        <section>
            <div className="balls">

                <div className="gray-ball ball"></div>
                <div className="purple-ball ball"></div>

                <section className="welcome-section">
                    <h1>Você no controle do seu dinheiro</h1>
                    <h3>Controle total do cartão de crédito e da conta 100% digital</h3>
                    <button>Saiba Mais</button>
                </section>

                <div className="div-card">
                    <PurpleCard name='Arthur Cabral' />
                </div>
                {/*<BlackCard name='Bem vindo ;)' />*/}

            </div>

        </section>
    )
}

export default homeSection
