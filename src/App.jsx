import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'

import Products from './pages/Products'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Messenger from './pages/Messenger'

export default function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/products" element={<Products />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/messages" element={<Messenger />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </>
  );
}

