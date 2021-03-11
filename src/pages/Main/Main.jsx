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
            <main className="main-container">
                <Header />
                <HomeSection />
                <AccountSection />
            </main>
        </>
    )
}

export default Main
