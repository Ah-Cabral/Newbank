import React from 'react'
import NubankLogo from '../images/nubank-purple-logo.svg'
import '../styles/components/header.css'

const Header = () => {
    return (
        <header className='Main-Header'>
            <div className="Left-Side">
                <img src={NubankLogo} alt="Logo Nubank" />
                <button className="Pattern">Seu Nubank <i class="fas fa-chevron-right"></i></button>
                <button className="Pattern">Conta Digital <i class="fas fa-chevron-right"></i></button>
                <button className="Pattern">Para Você <i class="fas fa-chevron-right"></i></button>
            </div>

            <div className="Right-Side">
                <button className="login Pattern">Login <i class="fas fa-sign-in-alt"></i></button>
                <button className="Purple">Quero Ser Nubank</button>
            </div>
        </header>
    )
}

export default Header
