import React from 'react'
export default function SearchBar({value,setValue,placeholder='Search apps...'}){
  return (<div className="search">
    <span className="icon">🔎</span>
    <input value={value} onChange={e=>setValue(e.target.value)} placeholder={placeholder}/>
  </div>)
}