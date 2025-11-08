import React from 'react'
export default function Footer(){
  return (<footer className="footer">
    <div className="container inner">
      <div className="flex">
        <img src="/assets/logo.png" width="24" height="24" alt="logo"/>
        <div>© {new Date().getFullYear()} — HERO.IO</div>
      </div>
      <div className="flex" style={{gap:16}}>
        <a href="https://play.google.com" target="_blank" rel="noreferrer">Play Store</a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">App Store</a>
        <a href="https://github.com/nazibmahmud30" target="_blank" rel="noreferrer">Github</a>
      </div>
    </div>
  </footer>)
}