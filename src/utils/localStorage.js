// src/utils/localStorage.js
const KEY = 'heroio_installed'

export function getInstalled(){
  try{
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  }catch(e){
    return []
  }
}

export function isInstalled(id){
  const all = getInstalled()
  return all.includes(Number(id))
}

export function installApp(id){
  const all = getInstalled()
  if(!all.includes(Number(id))){
    all.push(Number(id))
    localStorage.setItem(KEY, JSON.stringify(all))
    return true
  }
  return false
}

export function uninstallApp(id){
  let all = getInstalled()
  all = all.filter(i=>i!==Number(id))
  localStorage.setItem(KEY, JSON.stringify(all))
}