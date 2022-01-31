import React from 'react'
import './ChatOnline.css'

export default function ChatOnline () {
  return (
    <>
      <div className='chatOnline'>
        <div className='chatOnlineFriend'>
          <div className='chatOnlineImgContainer'>
            <img className='chatOnlineImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNhPdQB6r2XYihv_KGEry58WZWDZ0l1N2oQ&usqp=CAU' alt=''/>
            <div className='chatOnlineBadge'></div>
          </div>
          <span className='chatOnlineName'>Artem Pasko</span>
        </div>
      </div>
    </>
  )
}