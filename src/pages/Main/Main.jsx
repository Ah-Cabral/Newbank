import React from 'react'
//Importando Componente header
import Header from '../../components/Header'
//Importando CSS
import '../../styles/css/main.css'
import AccountSection from './AccountSection/AccountSection'
import HomeSection from './HomeSection/HomeSection'



const Main = () => {
    return (
        <>
            <Header />
            <main className="main-container">
                <HomeSection />
                <AccountSection />
            </main>
        </>
    )
}

export default Main
