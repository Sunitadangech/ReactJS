import React from 'react'
import style from './navbar.module.css'

const Button = ({btnText, bgColor}) => {
  return (
    <div>
      <button className={style.btn} style={{backgroundColor:bgColor}}>{btnText}</button>
    </div>
  )
}

export default Button
