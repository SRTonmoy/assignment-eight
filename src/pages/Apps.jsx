import React, { useEffect, useMemo, useState } from 'react'
import appsData from '../data/appsData'
import AppCard from '../components/AppCard'
import Loader from '../components/Loader'

export default function Apps(){
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(appsData)
  const [isSearching, setIsSearching] = useState(false)

  useEffect(()=>{
    setIsSearching(true)
    const t = setTimeout(()=>{
      const s = search.trim().toLowerCase()
      if(!s) {
        setFiltered(appsData)
      } else {
        setFiltered(appsData.filter(a => 
          a.title.toLowerCase().includes(s) || 
          a.companyName.toLowerCase().includes(s) ||
          a.description.toLowerCase().includes(s)
        ))
      }
      setIsSearching(false)
    }, 300)
    return ()=>clearTimeout(t)
  },[search])

  // Calculate displayed count based on search
  const displayedCount = isSearching ? appsData.length : filtered.length

  return (
    <div className="container">
      <div className="apps-header">
        <h2>Discover Amazing Apps</h2>
        <p>Browse through our collection of productivity apps designed to enhance your daily life</p>
      </div>
      
      <div className="search-row">
        <div className="apps-count">
          <strong>{displayedCount} {displayedCount === 1 ? 'App' : 'Apps'} Found</strong>
          {search && !isSearching && (
            <span className="search-results-text">
              for "<strong>{search}</strong>"
            </span>
          )}
        </div>
        <div className="search-container">
          <input 
            className="search-input" 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)} 
            placeholder="Search by app name, company, or description..." 
          />
          {search && (
            <button 
              className="clear-search"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {isSearching ? (
        <div className="search-loading">
          <div className="search-loader">
            <div className="search-loader-spinner">
              <div className="logo-spin"></div>
            </div>
            <p>Searching apps...</p>
          </div>
        </div>
      ) : (
        <div className="apps-grid">
          {filtered.length ? filtered.map(a => (
            <AppCard key={a.id} app={a} showInstallStatus={true} />
          )) : (
            <div className="no-apps-found">
              <div className="no-apps-icon">🔍</div>
              <h3>No Apps Found</h3>
              <p>We couldn't find any apps matching "<strong>{search}</strong>"</p>
              <button 
                className="btn-primary"
                onClick={() => setSearch('')}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}