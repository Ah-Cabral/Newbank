import React, { Component } from 'react'
import LogoNubank from '../../../images/nubank-purple-logo.svg'



import './para-voce-section.css'


export class ParaVoceSection extends Component {
    render() {
        return (
            <section className="para-voce-container">
                <div className="img-and-text">
                    <h2>Por quê Nubank é Perfeito Para Você?</h2>

                    <div className="icons">
                        <i class="fas fa-money-check"></i>
                        <i class="fas fa-shield-alt"></i>
                        <i class="far fa-clock"></i>
                        <i class="fas fa-cog"></i>
                    </div>
                </div>
            </section>
        )
    }
}

export default ParaVoceSection
