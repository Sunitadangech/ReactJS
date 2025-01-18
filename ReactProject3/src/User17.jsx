
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User17 = () => {
    let [user,setUser]=useState({
         profile:"https://rukminim2.flixcart.com/image/850/1000/kvr01ow0/poster/f/n/k/medium-shivaji-chhatrapati-shivaji-maharaj-portrait-of-shivaji-original-imag8kufgjf9wsd2.jpeg?q=90&crop=false",
         name:"Chatarpati Shivaji Maharaj",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/z/p/x/medium-na-chatrapati-shivaji-maharaj-poster-396191-hu-enterprise-original-imagz6x2bghahhgh.jpeg?q=90&crop=false",
            name:"Chatarpati Shivaji Maharaj",
            age:50,
        })
    }



  return (
    <div>
    <div className={Hero.body}>
    <img className={Hero.img} src={user?.profile} alt="" height={200} width={250}/>
    <h3>Name:{user.name}</h3>
    <h3>Age:{user.age}</h3>
    <button className={Hero.btn} onClick={changeUser}>Change Avenger</button>
    </div>

</div>

  )
}

export default User17
