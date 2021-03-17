import React, { Component } from 'react'
import LogoNubank from '../../../images/nubank-purple-logo.svg'

import './para-voce-section.css'


export class ParaVoceSection extends Component {
    render() {
        return (
            <section className="para-voce-container">
                <div className="img-and-text">
                    <img src={LogoNubank} alt="Logo Nubank" />
                    <h2>
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum is a kind of aleatory text.
                    </h2>
                </div>
            </section>
        )
    }
}

export default ParaVoceSection
