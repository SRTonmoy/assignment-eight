// import React from 'react'
import logo from '../assets/logo.png'


export default function Loader(){
return (
<div className="loader-overlay">
<div className="loader">
<div className="logo-spin" style={{backgroundImage:`url(${logo})`}}></div>
</div>
</div>
)
}