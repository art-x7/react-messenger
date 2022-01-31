import React from 'react'
import './Messenger.css'
import Conversation from '../components/messenger/Conversation'
import Message from '../components/messenger/Message'
import ChatOnline from '../components/messenger/ChatOnline'


export default function Messenger () {
  return (
    <>
      <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWrapper'>
          <input placeholder='Search for friends' className='chatMenuInput'/>
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxWrapper'>
            <div className='chatBoxTop'>
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
            <Message own={true}/>
            <Message />
            <Message />
            <Message own={true}/>
            <Message />
            </div>
            <div className='chatBoxBottom'>
              <textarea className='chatMessageInput' placeholder='Write something...'></textarea>
              <button className='chatSubmitButton'>Send</button>
            </div>
          </div>
        </div>
        <div className='chatOnline'>
          <div className='chatOnlineWrapper'>
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  )
}