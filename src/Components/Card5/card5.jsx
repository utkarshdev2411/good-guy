import React from 'react'
import './card5.css'
import web from '../../image/web.jpeg'

const Card5 = () => {
    return (
        <div className='card' id='section1' >
            <div className='c-content    ' >
                <h1>Data Entry </h1>

                <h3>Streamline your operations with precise and efficient data entry services!</h3>
                <span>Real time delivery</span>
                <button className='c-button'><a href='#section2'>Continue</a></button>

            </div>

            <div className='image'> <img src={web}></img></div>




        </div>
    )
}

export default
    Card5
