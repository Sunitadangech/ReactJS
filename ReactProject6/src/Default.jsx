import React from 'react'
import Car6 from './assets/Car6.jpg'
import style from './navbar.module.css'

const Default = () => {
  return (
    <div className={style.default}>
    <img className={style.i1} src = {Car6} alt="Image Not Found"/>
    <h1 className={style.msg}>Oopsssss, Something Went Wrong!!!!!Please try again after sometime.</h1>
  </div>
  )
}

export default Default