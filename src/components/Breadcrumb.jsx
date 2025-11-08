import React from 'react'
import { Link } from 'react-router-dom'
export default function Breadcrumb({items}){
  return (<div className="breadcrumb" style={{fontSize:13,color:'#64748b',margin:'8px 0 16px'}}>
    {items.map((it,i)=> (<span key={i}>{i>0 && ' / '}{it.to ? <Link to={it.to}>{it.label}</Link> : <span>{it.label}</span>}</span>))}
  </div>)
}