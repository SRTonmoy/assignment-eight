import React, { useEffect, useMemo, useState } from 'react'
import appsData from '../data/appsData'
import AppCard from '../components/AppCard'


export default function Apps(){
const [search, setSearch] = useState('')
const [filtered, setFiltered] = useState(appsData)
const [isSearching, setIsSearching] = useState(false)


useEffect(()=>{
setIsSearching(true)
const t = setTimeout(()=>{
const s = search.trim().toLowerCase()
if(!s) setFiltered(appsData)
else setFiltered(appsData.filter(a=>a.title.toLowerCase().includes(s)))
setIsSearching(false)
}, 300)
return ()=>clearTimeout(t)
},[search])


return (
<div className="container">
<h2>Your Installed Apps</h2>
<div className="search-row">
<div><strong>{appsData.length} Apps Found</strong></div>
<div style={{display:'flex',gap:12,alignItems:'center'}}>
<input className="search-input" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search apps..." />
</div>
</div>


{isSearching ? (
<div style={{minHeight:200,display:'flex',alignItems:'center',justifyContent:'center'}}>Loading search...</div>
) : (
<div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:18}}>
{filtered.length ? filtered.map(a=>(

<AppCard key={a.id} app={a} showInstallStatus={true} />
)) : (
<div style={{padding:20,background:'#fff',borderRadius:8}}>No App Found</div>
)}
</div>
)}
</div>
)
}