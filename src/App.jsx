import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'


import Home from './pages/Home'
import Profile from './pages/Profile'
import Messenger from './pages/Messenger'
import Team from './pages/Team'
import EditProfile from './pages/EditProfile'

export default function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/messages" element={<Messenger />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/edit" element={<EditProfile />}/>
        <Route path="/team" element={<Team />}/>
      </Routes>
    </>
  );
}

