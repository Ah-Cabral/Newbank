import React from 'react'

//Componente referente ao card normal
const PurpleCard = () => {
    return (
        <div className="simple-purple-card">
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}

//Componente referente ao black card
const BlackCard = () => {
    return (
        <div className="black-purple-card">
            <div></div>
            <div></div>
            <div></div>
        </div>

    )
}

//Exportando os dois componentes separadamente dentro do mesmo arquivo.jsx
export { PurpleCard, BlackCard }
