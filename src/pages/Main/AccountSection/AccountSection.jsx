import React from 'react'

import './account-section.css'
import womanImage from "../../../images/woman-image.png"

import Tilt from 'react-vanilla-tilt'



function AccountSection() {
    return (
        <section className="account-section-container" >
            <div className="content-and-image">
                <div className="content">
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <h4>lorem consectueur dolor sit</h4>
                    <button>Lorem Ipsum</button>
                </div>
                <Tilt className="tilt" options={{ max: 10 }}>

                    <div className="image-woman">
                        <img src={womanImage} alt="" />
                    </div>
                </Tilt>
            </div>
        </section >
    )
}

export default AccountSection
