import React from 'react'
//Importando Componente header
import Header from '../../components/Header'
//Importando CSS
import '../../styles/css/main.css'
import AccountSection from './AccountSection/AccountSection'
import HomeSection from './HomeSection/HomeSection'
import ParaVoceSection from './ParaVoceSection/ParaVoceSection'
import FinalFooter from './Footer/FinalFooter'



const Main = () => {
    return (
        <>
            <main className="main-container">
                <Header />
                <HomeSection />
                <AccountSection />
                <ParaVoceSection />
                <FinalFooter />
            </main>
        </>
    )
}

export default Main
