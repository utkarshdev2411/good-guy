import React from 'react'
import  './results.css'

import Line from '../Line/line'
import img1 from '../../image/img1.png'
import img2 from '../../image/img2.png'

import img3 from '../../image/img3.png'

import img4 from '../../image/img4.png'

import img5 from '../../image/img5.png'


const Results = () => {
  return (
    <div className='results'>
      <Line/>
      <h1>Our Results</h1>
      <div className='r-images'>
              <div className='images-c1' > 
              <div className='img3'><img src={img3}></img></div>
              <div className='img2'> <img src={img2}></img>
</div>
             
              </div>
              <div className='images-c2 img1' >
              <img src={img1}></img>
              </div>

              <div className='images-c3'>  <div className='img4'><img src={img4}></img></div>
                <div className='img5'><img src={img5}></img>
    </div></div>
              
      </div>
    </div>
  )
}

export default Results
