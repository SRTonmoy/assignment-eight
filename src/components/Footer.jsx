import React from 'react'
import logo from '../assets/logo.png'


export default function Footer(){
return (
<footer className="footer">
<div className="container">
<div style={{display:'flex',alignItems:'center',gap:14}}>
<img src={logo} style={{height:36}} alt="logo" />
<div>
<div style={{fontWeight:700}}>HERO.IO</div>
<div style={{color:'#9aa4b2',fontSize:13}}>Copyright © 2025 - All right reserved</div>
</div>
</div>


<div style={{textAlign:'right'}}>
<div style={{color:'#d4e4f0'}}>Social Links</div>
<div style={{marginTop:8}}>
<a href="#" style={{marginRight:8}}>X</a>
<a href="#" style={{marginRight:8}}>in</a>
<a href="#">f</a>
</div>
</div>
</div>
</footer>
)
}