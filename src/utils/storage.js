export const STORAGE_KEY='installedApps';
export const getInstalled=()=>{try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||[]}catch{return []}};
export const isInstalled=id=>getInstalled().includes(id);
export const install=id=>{const cur=getInstalled(); if(!cur.includes(id)){localStorage.setItem(STORAGE_KEY,JSON.stringify([...cur,id]))}};
export const uninstall=id=>{const cur=getInstalled().filter(x=>x!==id); localStorage.setItem(STORAGE_KEY,JSON.stringify(cur))};