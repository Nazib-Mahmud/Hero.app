import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Apps from './pages/Apps'
import Installation from './pages/Installation'
import AppDetails from './pages/AppDetails'
import NotFound from './pages/NotFound'
import { Toaster } from 'react-hot-toast'

export default function App(){
  const loc = useLocation()
  const [loading,setLoading] = useState(false)
  useEffect(()=>{ setLoading(true); const t=setTimeout(()=> setLoading(false), 350); return ()=> clearTimeout(t)},[loc.pathname])
  return (<div>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/apps" element={<Apps/>} />
        <Route path="/apps/:id" element={<AppDetails/>} />
        <Route path="/installation" element={<Installation/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </main>
    <Footer/>
    <Toaster position="top-right"/>
  </div>)
}