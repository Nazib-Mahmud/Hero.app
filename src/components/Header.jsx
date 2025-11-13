import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">

          {/* Logo */}
          <Link to="/" className="flex">
            <img src="/assets/logo.png" width="28" height="28" alt="logo"/>
            <span style={{fontWeight:700,marginLeft:8}}>HERO.IO</span>
          </Link>

          {/* Menu Items */}
          <div className="menu">
            <NavLink to="/" end className={({isActive})=> isActive? 'active':''}>Home</NavLink>
            <NavLink to="/apps" className={({isActive})=> isActive? 'active':''}>Apps</NavLink>
            <NavLink to="/installation" className={({isActive})=> isActive? 'active':''}>Installation</NavLink>
          </div>

          {/* Contribute Button — GitHub Link */}
          <a 
            className="button"
            href="https://github.com/Nazib-Mahmud"
            target="_blank"
            rel="noreferrer"
          >
            Contribute
          </a>
        </nav>
      </div>
    </header>
  )
}
