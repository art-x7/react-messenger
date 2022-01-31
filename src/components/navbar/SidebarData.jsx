import React from 'react'

import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as CgIcons from 'react-icons/cg'


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
{
  title: 'Profile',
  path: '/profile',
  icon: <CgIcons.CgProfile />,
  cName: 'nav-text'
},
{
  title: 'Team',
  path: '/team',
  icon: <IoIcons.IoMdPeople />,
  cName: 'nav-text'
},
{
  title: 'Messages',
  path: '/messages',
  icon: <FaIcons.FaEnvelopeOpenText />,
  cName: 'nav-text'
},
{
  title: 'Support',
  path: '/support',
  icon: <IoIcons.IoMdHelpCircle />,
  cName: 'nav-text'
},

]