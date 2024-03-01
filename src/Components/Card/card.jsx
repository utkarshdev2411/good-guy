import React from 'react'
import './card.css'
import web from '../../image/web.jpeg'

const Card = () => {
    return (
        <div className='card' id='section1' >
            <div className='c-content    ' >
                <h1>Web Development </h1>

                <h3>Functional website, Responsive,
                    Hosting Setup, Optimization, Branding
                    and many more.</h3>
                <span>Real time delivery</span>
                <button className='c-button'><a href='#section2'>Continue</a></button>

            </div>

            <div className='image'> <img src={web}></img></div>




        </div>
    )
}

export default
    Card
