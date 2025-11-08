import React, { useEffect, useMemo, useState } from 'react'
import data from '../data/apps.json'
import AppCard from '../components/AppCard'
import SearchBar from '../components/SearchBar'
import Loader from '../components/Loader'

export default function Apps(){
  const [q,setQ]=useState('')
  const [loading,setLoading]=useState(false)
  useEffect(()=>{ if(q===''){setLoading(false);return} setLoading(true); const t=setTimeout(()=>setLoading(false),400); return ()=>clearTimeout(t) },[q])
  const filtered=useMemo(()=>{ const t=q.trim().toLowerCase(); if(!t) return data; return data.filter(a=>a.title.toLowerCase().includes(t)) },[q])

  return (<div className="container" style={{paddingTop:24}}>
    <div className="center">
      <h2>Our All Applications</h2>
      <div style={{color:'#475569'}}>Explore All Trending Apps in the Market developed by us.</div>
    </div>
    <div className="topbar">
      <div>{filtered.length} Apps Found</div>
      <SearchBar value={q} setValue={setQ}/>
    </div>
    {loading? <Loader/> : (filtered.length? <div className="grid cols-4">{filtered.map(a=><AppCard key={a.id} app={a}/>)}</div> :
      <div className="center"><img src="/assets/error-app.png" alt="" style={{maxWidth:240}}/><h3>No App Found</h3></div>)}
  </div>)
}