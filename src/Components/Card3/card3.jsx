import React from 'react'
import './card3.css'
import web from '../../image/web.jpeg'

const Card3 = () => {
    return (
        <div className='card' id='section1' >
            <div className='c-content    ' >
                <h1>SEO Managemnt </h1>

                <h3>Boost your online visibility with expert SEO management solutions today!</h3>
                <span>Real time delivery</span>
                <button className='c-button'><a href='#section2'>Continue</a></button>

            </div>

            <div className='image'> <img src={web}></img></div>




        </div>
    )
}

export default
    Card3
