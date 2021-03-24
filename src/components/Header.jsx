import React from 'react'
import NubankLogo from '../images/nubank-purple-logo.svg'
import '../styles/components/css/header.css'

const Header = () => {

    function dispBotao(id) {
        if (id === null || id === undefined) {
            return console.log('ID não especificado')
        }
        let moveSection = document.getElementById(id)
        if (moveSection === null || moveSection === undefined) {
            return console.log('Erro na MoveSection, moveSection Null ou Undefined')
        } else {
            scroll(moveSection.offsetTop)
        }
    }

    function scroll(qtdPixels) {
        window.scroll({ top: qtdPixels, behavior: 'smooth' })
    }

    return (
        <header className='Main-Header'>
            <div className="Left-Side">
                <img src={NubankLogo} alt="Logo Nubank" />
                <button className="Pattern" onClick={(e) => dispBotao("digital-account")}>Conta Digital <i className="fas fa-chevron-right"></i></button>
                <button className="Pattern" onClick={(e) => dispBotao("para-voce")}>Para Você <i className="fas fa-chevron-right"></i></button>
                <button className="Pattern" onClick={(e) => dispBotao("digital-account")}>Você no Controle <i className="fas fa-chevron-right"></i></button>
            </div>

            <div className="Right-Side">
                <button className="login Pattern">Login <i className="fas fa-sign-in-alt"></i></button>
                <button className="Purple">Quero Ser Nubank</button>
            </div>
        </header>
    )
}

export default Header
