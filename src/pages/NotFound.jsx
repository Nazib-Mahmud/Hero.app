import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
export default function NotFound(){
  return (<div className="container center" style={{paddingTop:24}}>
    <Breadcrumb items={[{label:'Home',to:'/'},{label:'Error'}]}/>
    <img src="/assets/error-404.png" alt="404" style={{maxWidth:420,width:'100%'}}/>
    <h2>Oops, page not found!</h2>
    <a href="/" className="button">Go Home</a>
  </div>)
}