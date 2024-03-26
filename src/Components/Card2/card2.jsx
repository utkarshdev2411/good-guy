import React from 'react'
import './card2.css'
import web from '../../image/web.jpeg'

const Card2 = () => {
    return (
        <div className='card' id='section1' >
            <div className='c-content    ' >
                <h1>Video Editing </h1>

                <h3>Elevate your social media presence with stunning editing.</h3>
                <span>Real time delivery</span>
                <button className='c-button'><a href='#section2'>Continue</a></button>

            </div>

            <div className='image'> <img src={web}></img></div>




        </div>
    )
}

export default
    Card2
