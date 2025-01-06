// Este componente se encargara de cambiar de forma visual el dakmode 
import { useEffect } from "react"
import { useState } from "react"
export function Switch() {
  const [theme,setTheme] = useState('light')
  
  const changeTheme = ()=>{
    setTheme(theme === 'light' ? 'dark':'light')
  }

  useEffect(()=>{document.body.setAttribute('theme',theme)},[theme])

  return (
    <div className="container-switch">
      <span>Change Theme</span>
      <label className="switch">
        <input type="checkbox" onChange={changeTheme} checked={theme === 'dark'}/>
        <span className="slider"></span>
      </label>
    </div>
  )
}