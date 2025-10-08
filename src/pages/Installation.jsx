import React, { useEffect, useMemo, useState } from 'react'
import appsData from '../data/appsData'
import { getInstalled, uninstallApp } from '../utils/localStorage'
import { toast } from 'react-toastify'


function fmt(n){
if(n>=1000000) return (n/1000000).toFixed(1)+'M'
if(n>=1000) return (n/1000).toFixed(1)+'K'
return n
}


export default function Installation(){
const [installedIds, setInstalledIds] = useState(getInstalled())
const [sortMode, setSortMode] = useState('none')


useEffect(()=>{
setInstalledIds(getInstalled())
},[])


const installedApps = useMemo(()=>{
let arr = appsData.filter(a=>installedIds.includes(a.id))
if(sortMode==='high-low') arr = arr.sort((a,b)=>b.downloads-a.downloads)
if(sortMode==='low-high') arr = arr.sort((a,b)=>a.downloads-b.downloads)
return arr
},[installedIds, sortMode])


const handleUninstall = (id)=>{
uninstallApp(id)
const next = getInstalled()
setInstalledIds(next)
toast.info('App uninstalled')
}


return (
<div className="container">
<h2>My Installation</h2>
<div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:18}}>
<div><strong>{installedApps.length} Apps Found</strong></div>
<div>
<select value={sortMode} onChange={e=>setSortMode(e.target.value)} style={{padding:8,borderRadius:8}}>
<option value="none">Sort By</option>
<option value="high-low">High-Low (downloads)</option>
<option value="low-high">Low-High (downloads)</option>
</select>
</div>
</div>


<div style={{display:'flex',flexDirection:'column',gap:12}}>
{installedApps.length===0 && <div className="card">No apps installed yet</div>}
{installedApps.map(a=> (
<div key={a.id} className="app-row">
<div className="meta">
<img src={a.image} alt={a.title} />
<div>
<div style={{fontWeight:700}}>{a.title}</div>
<div className="small">⬇ {fmt(a.downloads)} · ⭐ {a.ratingAvg} · {a.size} MB</div>
</div>
</div>


<div>
<button onClick={()=>handleUninstall(a.id)} style={{background:'#10b981',color:'#fff',padding:'10px 12px',borderRadius:8,border:'none'}}>Uninstall</button>
</div>
</div>
))}
</div>
</div>
)
}