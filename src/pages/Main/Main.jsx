import React from 'react'
//Importando Componente header
import Header from '../../components/Header'
//Importando CSS
import '../../styles/css/main.css'
import HomeSection from './Components/HomeSection'
import AccountSection from './Components/AccountSection'



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
