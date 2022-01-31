import React from 'react'
import './Message.css'

export default function Message ({own}) {
  return (
    <>
      <div className={own ? 'message own' : 'message'}>
        <div className='messageTop'>
          <img className='messageImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNhPdQB6r2XYihv_KGEry58WZWDZ0l1N2oQ&usqp=CAU' alt='' />
        <p className='messageText'>Расширенные возможности. При регистрации на сервисе у вас будут расширены ограничения проверки, предназначенные для гостей, и вы получите возможность проверять гораздо большее количество текстов с помощью нашего сервиса плагиат онлайн.!</p>
        </div>
        <div className='messageBottom'>1 hour ago
        </div>
      </div>
    </>
  )
}