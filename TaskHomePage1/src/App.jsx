import React, { useState } from "react";
import styles from "./User.module.css"; 
import Headphone from './assets/h1.jpg'
import Bluetooth from './assets/h2.webp'
import LoginPage from './LoginPage'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let price=400;
  let price1=200; 

  
  let [count,setCount]=useState(0);
  let [count1,setCount1]=useState(0);

  function total(price,price1) {
    return (price*count)+(price1*count1);
     
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div>


        <nav className={styles.nav}>
            <h1>PRODUCT SECTION</h1>
        </nav>


        <section className={styles.sec}>
            <aside className={styles.aside}>
           <div className={styles.card}>
            <img src={Headphone} height={150} width={150} style={{marginLeft:50}}></img>
           
           <h4 className={styles.hesd}>Price={price}</h4>
           <button className={styles.but}>BUY</button>
           <button className={styles.but} onClick={()=>{setCount(count+1)}}>ADD</button></div>
           <div className={styles.card}>
            <img src={Bluetooth} height={150} width={150} style={{marginLeft:50}}></img>
            <h4 className={styles.hesd}>Price={price1}</h4>
           <button className={styles.but}>BUY</button>
           <button className={styles.but} onClick={()=>{setCount1(count1+1)}}>ADD</button></div>
            </aside>
            <bside className={styles.aside}>
            <div className={styles.div1}><button className={styles.but1}> Product1</button>
            <button className={styles.but1} onClick={()=>{setCount(count+1)}}>+</button>
            <button className={styles.but1}>{count}</button>
            <button className={styles.but1} onClick={()=>{if(count>0)setCount(count-1)}}>-</button><br/>
            <button className={styles.but1}> Product2</button>
            <button className={styles.but1} onClick={()=>{setCount1(count1+1)}}>+</button>
            <button className={styles.but1}>{count1}</button>
            <button className={styles.but1} onClick={()=>{if(count1>0)setCount1(count1-1)}}>-</button><br/>
            
            <button className={styles.but1}>TOTAL={total(price,price1)}</button>
            </div>
            
            </bside>
        </section>


         <footer className={styles.foot}><prev>Contact Us</prev></footer>


        </div>
      )}
    </div>
  );
};

export default App;
