import React from 'react'
import { useNavigate } from 'react-router-dom'
import { isInstalled } from '../utils/localStorage'

export default function AppCard({ app, showInstallStatus = false }){
  const navigate = useNavigate()
  const installed = showInstallStatus && isInstalled(app.id)
  
  const fmt = (n)=>{
    if(n>=1000000) return Math.round(n/1000000)+'M'
    if(n>=1000) return Math.round(n/1000)+'K'
    return n
  }
  
  return (
    <div role="button" onClick={()=>navigate(`/apps/${app.id}`)} className="card" style={{cursor:'pointer', position: 'relative'}}>
      {installed && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: '#10b981',
          color: 'white',
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 'bold'
        }}>
          ✓
        </div>
      )}
      <img className="app-image" src={app.image} alt={app.title} />
      <div style={{fontWeight:700,marginBottom:6}}>{app.title}</div>
      <div className="app-meta">
        <div className="small">⬇ {fmt(app.downloads)}</div>
        <div style={{fontWeight:700}}>{app.ratingAvg}</div>
      </div>
    </div>
  )
}