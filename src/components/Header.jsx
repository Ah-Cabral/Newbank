import React from 'react'
import NubankLogo from '../images/nubank-purple-logo.svg'
const Header = () => {
    return (
        <header className='Main-Header'>
            <div className="Left-Side">
                <img src={NubankLogo} alt="Logo Nubank" />
                <button>Seu Nubank</button>
                <button>Conta Digital</button>
                <button>Para Você</button>
            </div>

            <div className="Right-Side">
                <button>Login</button>
                <button>Quero Ser Nubank</button>
            </div>
        </header>
    )
}

export default Header
