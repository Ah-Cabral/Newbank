import React from 'react'
//Importando Ccomponente header
import Header from '../components/Header'
//Importando CSS
import '../styles/css/main.css'

const Main = () => {
    return (
        <>
            <Header />
            <main className="main-container">
                <div className="balls">
                    <div className="gray-ball ball"></div>
                    <div className="purple-ball ball"></div>
                </div>
            </main>
        </>
    )
}

export default Main
