import '../index.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from '../components/Header'
import Landing from './Landing'
import Show from "./Show";
import Dashboard from './Dashboard'
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:id" element={<Show />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default Home