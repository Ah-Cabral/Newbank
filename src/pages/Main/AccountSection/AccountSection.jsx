import React from 'react'

import './account-section.css'

import WomanImage from '../../../images/woman-photo.jpg'

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
                <div>
                    <Tilt className="tilt" options={{ max: 5 }}>
                        <div className="img-wrapper">
                            <img src={WomanImage} alt="" />
                        </div>
                    </Tilt>


                </div>
            </div>
        </section >
    )
}

export default AccountSection
