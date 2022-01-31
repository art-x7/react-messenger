import React from 'react'
import './Team.css'

import * as TiIcons from 'react-icons/ti'



export default function Team () {
  return (
    <> 
      <div className='team'>
        <div className='teamPortfolio'>
          <div className='teamIntro'>
            <h1>Our Amazing Team</h1>
          </div>
          <div className='teamColumn'>
            <div className='memberCard'>
              <img className='images' src='src/static/images/front.jpg' alt='no found' />
              <div className='frontend'>
                <p className='teamMember'>Art-x7</p>
                <p class="title">Front-End</p>
              </div>
              <div className='links'> 
                <TiIcons.TiSocialFacebook />
                <TiIcons.TiSocialTwitter />
                <TiIcons.TiSocialInstagram />
              </div>
            </div>
          </div>
          <div className='teamColumn'>
            <div className='memberCard'>
              <img className='images' src='src/static/images/back.jpg' alt='no found' />
              <div className='frontend'>
                <p className='teamMember'>Funny_octopus</p>
                <p class="title">Back-End</p>
              </div>
              <div className='links'> 
                <TiIcons.TiSocialFacebook />
                <TiIcons.TiSocialTwitter />
                <TiIcons.TiSocialInstagram />
              </div>
            </div>
          </div> 
        </div>  
      </div>
    </>
  )
}