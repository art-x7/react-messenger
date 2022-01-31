import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'


export default function Profile () {
  return (
    <>
      <div className='profile'>
        <div className='card'>
          <h3 className='profileTitle'>Profile</h3>
          <img className='csardImages' src='src/static/images/front.jpg' alt='no found' />
          <div className='topCard'>
            <p>James Bond</p>
          </div>
          <div className='midCard'>
            <p>Art-x7</p>
          </div>
          <div className='botCard'>
            <p>This's my profile. I love Paris. Have a nice day!</p>
          </div>
          <div className='btnCard'>
            <Link to='/edit'>Edit
            </Link>
          </div>
        </div>   
      </div>
    </>
  )
}