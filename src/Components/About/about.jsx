import React from 'react'
import * as Unicons from '@iconscout/react-unicons';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import { CIcon } from '@coreui/icons-react';
import { cilList, cilShieldAlt } from '@coreui/icons';
import './about.css'

import { CrisisAlert } from '@mui/icons-material'
import Line from '../Line/line';
const About = () => {
  return (

    <div className='about'>
    <Line/>
      <div className='vision'>
        <div className='about-c'>

          <h2>Ready to discuss your project?
            We use data-driven digital marketing to grow businesses</h2>


          <p> We’re an independent software company & digital marketing agency based in Raipur, Chhattisgarh India. We have expertise in build, market & grow any online business.</p>

          <p>The Good Guy team combines years of varied experience in online marketing, SEO, social media, lead generation, eCommerce marketing, content marketing, and conversion rate optimization. At Good Guy we are intensively solution-oriented. We have the most experienced and creative team to get insight solutions of each & every aspect. One of the keys to our success is our calmness and mental clarity to refuse to spend a single second worrying or becoming angry about something that you cannot change. Our only real antidote for worry is purposeful forward action.</p>

          <p>We work with a diverse client base including Nuvoco (formerly Lafarge Cement), Frankfinn, Lalluram.com, ZeroMileMark, Bonzelo and Government of Chhattisgarh. Each brand is unique, and each strategy custom-built with a data-first approach.</p>

        </div>
        <div className='about-g'>


          <div className='goal1'>
            <div className='icon-g'><Unicons.UilCrosshair Animated color="rgb(39,41,61)" size='55px' />
            </div>
            <div className='content-g'>
              <h3>
                Determining Business Goal</h3>
              <p>We Determine what objectives will help you reach your long-range or ultimate goals</p>
            </div>
          </div>

          <div className='goal2'>
            <div className='icon-g'><Unicons.UilUsersAlt Animated color="rgb(39,41,61)" size='55px' /></div>
            <div className='content-g'>
              <h3>Audience Research
              </h3>
              <p>Once we get marketing goals, we do research about buyer personas (your ideal customers)</p>
            </div>
          </div>

          <div className='goal3'>
            <div className='icon-g'><Unicons.UilPresentation Animated color="rgb(39,41,61)" size='55px' /></div>
            <div className='content-g'>
              <h3>Personalized Marketing Campaigns
              </h3>
              <p>It’s essential that business convey the right message, to the right audience, at the right time</p>
            </div>
          </div>





        </div>
      </div>

      <div>

      </div>

    </div>
  )
}

export default About
