import React from 'react'

import MastercardIcon from '../images/mastercard-icon.svg'
import ChipCard from '../images/chip-card.png'
import Signal from '../images/signal.svg'
import NubankLogoWhite from '../images/nubank-white-logo.svg'

import '../styles/components/cards.css'

//Componente referente ao card normal
const PurpleCard = ({ name }) => {
    return (
        <div className="simple-purple-card card">
            <div className="mastercard-div"><img src={MastercardIcon} alt="Logo-Mastercard" /></div>
            <div className="chipcard-div"><img src={ChipCard} alt="" className="chip" /> <img src={Signal} alt="" /></div>
            <div className="logoname-div"><img src={NubankLogoWhite} alt="" /><h3>{name}</h3></div>
        </div>

    )
}

//Componente referente ao black card
const BlackCard = ({ name }) => {
    return (
        <div className="black-purple-card card">
            <div className="mastercard-div"><img src={MastercardIcon} alt="Logo-Mastercard" /></div>
            <div className="chipcard-div"><img src={ChipCard} alt="" className="chip" /> <img src={Signal} alt="" /></div>
            <div className="logoname-div"><img src={NubankLogoWhite} alt="" /><h3>{name}</h3></div>
        </div>

    )
}

//Exportando os dois componentes separadamente dentro do mesmo arquivo.jsx
export { PurpleCard, BlackCard }
