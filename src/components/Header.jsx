import React from 'react'
import NubankLogo from '../images/nubank-purple-logo.svg'
import '../styles/components/header.css'

const Header = () => {
    return (
        <header className='Main-Header'>
            <div className="Left-Side">
                <img src={NubankLogo} alt="Logo Nubank" />
                <button>Seu Nubank <i class="fas fa-chevron-right"></i></button>
                <button>Conta Digital <i class="fas fa-chevron-right"></i></button>
                <button>Para Você <i class="fas fa-chevron-right"></i></button>
            </div>

            <div className="Right-Side">
                <button>Login <i class="fas fa-sign-in-alt"></i></button>
                <button className='Purple'>Quero Ser Nubank</button>
            </div>
        </header>
    )
}

export default Header
