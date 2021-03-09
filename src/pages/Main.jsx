import React from 'react'
import { BlackCard, PurpleCard } from '../components/Cards'
//Importando Ccomponente header
import Header from '../components/Header'
//Importando CSS
import '../styles/css/main.css'

const Main = () => {
    return (
        <>
            <Header />
            <main className="main-container">

                {/*<BlackCard name='Bem vindo ;)' />*/}

                <PurpleCard name='Arthur Cabral' />

                <section className="welcome-section">
                    <h1>Você no controle do seu dinheiro</h1>
                    <h3>Controle total do cartão de crédito e da conta 100% digital</h3>
                    <button>Saiba Mais</button>
                </section>

                <div className="balls">
                    <div className="gray-ball ball"></div>
                    <div className="purple-ball ball"></div>
                </div>
            </main>
        </>
    )
}

export default Main
