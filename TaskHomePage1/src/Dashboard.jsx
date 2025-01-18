import React, { useState } from 'react'
import Style from './login.module.css'
import Headphone from './assets/headphone.jpg'
import Bluetooth from './assets/blutooth.webp'


const Dashboard = () => {
  // let count=0;
let price=400;
  let price1=200;  
  
    let [count,setCount]=useState(0);
    let [count1,setCount1]=useState(0);
    function total(price,price1) {
      return (price*count)+(price1*count1);
      
    }
  return (
    
    <div>
        <nav className={Style.nav}>
            <h1>PRODUCT SECTION</h1>
        </nav>
        <section className={Style.sec}>
            <aside className={Style.aside}>
           <div className={Style.card}>
            <img src={Headphone} height={150} width={150} style={{marginLeft:50}}></img>
           
           <h4 className={Style.hesd}>Price={price}</h4>
           <button className={Style.but}>BUY</button>
           <button className={Style.but} onClick={()=>{setCount(count+1)}}>ADD</button></div>
           <div className={Style.card}>
            <img src={Bluetooth} height={150} width={150} style={{marginLeft:50}}></img>
            <h4 className={Style.hesd}>Price={price1}</h4>
           <button className={Style.but}>BUY</button>
           <button className={Style.but} onClick={()=>{setCount1(count1+1)}}>ADD</button></div>
            </aside>
            <bside className={Style.aside}>
            <div className={Style.div1}><button className={Style.but1}> Product1</button>
            <button className={Style.but1} onClick={()=>{setCount(count+1)}}>+</button>
            <button className={Style.but1}>{count}</button>
            <button className={Style.but1} onClick={()=>{if(count>0)setCount(count-1)}}>-</button><br/>
            <button className={Style.but1}> Product2</button>
            <button className={Style.but1} onClick={()=>{setCount1(count1+1)}}>+</button>
            <button className={Style.but1}>{count1}</button>
            <button className={Style.but1} onClick={()=>{if(count1>0)setCount1(count1-1)}}>-</button><br/>
            
            <button className={Style.but1}>TOTAL={total(price,price1)}</button>
            </div>
            
            </bside>
        </section>
        <footer className={Style.foot}><prev>Contact Us</prev></footer>
    </div>
  )
}

export default Dashboard