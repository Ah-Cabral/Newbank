import React from 'react'
//Importando Ccomponente header
import Header from '../../components/Header'
//Importando CSS
import '../../styles/css/main.css'
import HomeSection from './Components/HomeSection'


const Main = () => {
    return (
        <>
            <Header />
            <main className="main-container">
                <HomeSection />
            </main>
        </>
    )
}

export default Main
