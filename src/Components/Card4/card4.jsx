import React from 'react'
import './card4.css'
import web from '../../image/web.jpeg'

const Card4 = () => {
    return (
        <div className='card' id='section1' >
            <div className='c-content    ' >
                <h1>Graphic Designing </h1>

                <h3>Illuminate your brand's identity with captivating graphic design solutions!</h3>
                <span>Real time delivery</span>
                <button className='c-button'><a href='#section2'>Continue</a></button>

            </div>

            <div className='image'> <img src={web}></img></div>




        </div>
    )
}

export default
    Card4
