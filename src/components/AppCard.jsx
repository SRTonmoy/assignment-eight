import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function AppCard({app}){
const navigate = useNavigate()
const fmt = (n)=>{
if(n>=1000000) return Math.round(n/1000000)+'M'
if(n>=1000) return Math.round(n/1000)+'K'
return n
}
return (
<div role="button" onClick={()=>navigate(`/apps/${app.id}`)} className="card" style={{cursor:'pointer'}}>
<img className="app-image" src={app.image} alt={app.title} />
<div style={{fontWeight:700,marginBottom:6}}>{app.title}</div>
<div className="app-meta">
<div className="small">⬇ {fmt(app.downloads)}</div>
<div style={{fontWeight:700}}>{app.ratingAvg}</div>
</div>
</div>
)
}