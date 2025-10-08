import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Github } from 'lucide-react' 
import logo from '../assets/logo.png'

export default function Header(){
  const navigate = useNavigate()
  return (
    <header className="header">
      <div className="container">
        <div className="logo" onClick={()=>navigate('/')} style={{cursor:'pointer'}}>
          <img src={logo} alt="logo" />
          <strong style={{color:'#6b21a8'}}>HERO.IO</strong>
        </div>

        <nav className="nav">
          <NavLink to="/" end className={({isActive})=>isActive? 'active':''}>Home</NavLink>
          <NavLink to="/apps" className={({isActive})=>isActive? 'active':''}>Apps</NavLink>
          <NavLink to="/installation" className={({isActive})=>isActive? 'active':''}>Installation</NavLink>
         
          <a className="contribute-btn" target="_blank" rel="noopener noreferrer" href="https://github.com/SRTonmoy/assignment-eight.git">
            <Github size={18} />
            <span>Contribute</span>
          </a>
        </nav>
      </div>
    </header>
  )
}