import React from 'react'
import logoNubank from '../../../images/nubank-purple-logo.svg'
import './para-voce-section.css'

const ParaVoceSection = () => {
    return (
        <section className="para-voce-container" id="para-voce">
            <div className="img-and-text">
                <h2>Por quê Nubank é Perfeito Para Você?</h2>

                <div className="icons para-voce-icons">
                    <div className="icon-and-text">
                        <i className="fas fa-money-check"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Amet atque soluta quaerat in corporis laboriosam consectetur.
                        </p>
                    </div>
                    <div className="icon-and-text">
                        <i className="fas fa-shield-alt"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Amet atque soluta quaerat in corporis laboriosam consectetur.
                        </p>
                    </div>
                    <div className="icon-and-text">
                        <i className="far fa-clock"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Amet atque soluta quaerat in corporis laboriosam consectetur.
                        </p>
                    </div>
                    <div className="icon-and-text">
                        <i className="fas fa-cog"></i>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Amet atque soluta quaerat in corporis laboriosam consectetur.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ParaVoceSection
