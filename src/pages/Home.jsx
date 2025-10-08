import React from 'react'
import apps from '../data/appsData'
import AppCard from '../components/AppCard'
import heroImage from '../assets/hero.png'

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
      {/* Hero Section */}
      <div className="banner">
        <div className="banner-content">
          <h1>We Build <span style={{color:'#7b46ff'}}>Productive</span> Apps</h1>
          <p>At HEROLO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
          
          <div className="cta">
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">Google Play</a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">App Store</a>
          </div>

          {/* Hero Image with Attached Trust Card */}
          <div className="trust-section">
            <div className="banner-image">
              <img src={heroImage} alt="Hero App Showcase" />
            </div>
            
            {/* Trust Card attached to hero image */}
            <div className="trust-card">
              <p className="trust-text">Trusted By Millions, Built For You</p>
              
              <div className="stats-section">
                <div className="stats-item">
                  <span className="stats-value">{fmtBig(totalDownloads)}</span>
                  <span className="stats-label">Total Downloads</span>
                  <span className="stats-trend">21% More Than Last Month</span>
                </div>
                
                <div className="stats-item">
                  <span className="stats-value">{fmtBig(totalReviews)}</span>
                  <span className="stats-label">Total Reviews</span>
                  <span className="stats-trend">45% More Than Last Month</span>
                </div>
                
                <div className="stats-item">
                  <span className="stats-value">{activeApps}+</span>
                  <span className="stats-label">Active Apps</span>
                  <span className="stats-trend">31 More Yet Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Apps Section */}
      <div className="container">
        <div className="trending-header">
          <h2>Trending Apps</h2>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>

        <div className="grid-4">
          {top8.map(a=> <AppCard key={a.id} app={a} />)}
        </div>

        <div className="show-all">
          <a className="btn-primary" href="/apps">Show All</a>
        </div>
      </div>
    </div>
  )
}