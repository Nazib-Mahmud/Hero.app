import React from 'react'
import { Link } from 'react-router-dom'
export default function AppCard({app}){
  return (<Link to={`/apps/${app.id}`} className="card" title={app.title}>
    <img className="img-cover" src={app.image} alt={app.title}/>
    <div className="body">
      <div className="app-title" style={{fontWeight:600,margin:'8px 0 4px'}}>{app.title}</div>
      <div className="kpis">
        <span className="badge"><img src="/assets/icon-downloads.png" width="12" height="12" style={{marginRight:6}}/>{Intl.NumberFormat().format(app.downloads)}</span>
        <span className="badge"><img src="/assets/icon-ratings.png" width="12" height="12" style={{marginRight:6}}/>{app.ratingAvg}</span>
      </div>
    </div>
  </Link>)
}