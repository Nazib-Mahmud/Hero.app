import React from 'react'
export default function SortDropdown({value,setValue}){
  return (<select value={value} onChange={e=>setValue(e.target.value)} className="button secondary" style={{appearance:'none'}}>
    <option value="hl">Sort: High → Low</option>
    <option value="lh">Sort: Low → High</option>
  </select>)
}