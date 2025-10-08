import React from 'react'
import apps from '../data/appsData'
import AppCard from '../components/AppCard'


export default function Home(){
const top8 = apps.slice(0,8)

const totalDownloads = apps.reduce((s,a)=>s+a.downloads,0)
const totalReviews = apps.reduce((s,a)=>s+a.reviews,0)
const activeApps = apps.length


const fmtBig = (n)=>{
if(n>=1000000) return (n/1000000).toFixed(1)+'M'
if(n>=1000) return (n/1000).toFixed(1)+'K'
return n
}


return (
<div>
<div className="banner">
<h1>We Build <span style={{color:'#7b46ff'}}>Productive</span> Apps</h1>
<p>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.</p>
<div className="cta">
<a href="https://play.google.com" target="_blank">Google Play</a>
<a href="https://www.apple.com/app-store/" target="_blank">App Store</a>
</div>


<div style={{width:'100%'}}>
<div style={{marginTop:32}} className="states">
<div className="state-card state-a">
<div className="small">Total Downloads</div>
<div className="stat-value">{fmtBig(totalDownloads)}</div>
<div style={{opacity:0.9,fontSize:13}}>21% More Than Last Month</div>
</div>
<div className="state-card state-b">
<div className="small">Total Reviews</div>
<div className="stat-value">{fmtBig(totalReviews)}</div>
<div style={{opacity:0.9,fontSize:13}}>46% More Than Last Month</div>
</div>
<div className="state-card state-c">
<div className="small">Active Apps</div>
<div className="stat-value">{activeApps}+</div>
<div style={{opacity:0.9,fontSize:13}}>31 More Will Launch</div>
</div>
</div>
</div>
</div>


<div className="container" style={{marginTop:36}}>
<h2 style={{textAlign:'center'}}>Trending Apps</h2>
<p style={{textAlign:'center',color:'#6b7280'}}>Explore All Trending Apps on the Market developed by us</p>


<div className="grid-4" style={{marginTop:18}}>
{top8.map(a=> <AppCard key={a.id} app={a} />)}
</div>


<div className="show-all">
<a className="btn-primary" href="/apps">Show All</a>
</div>
</div>
</div>
)
}