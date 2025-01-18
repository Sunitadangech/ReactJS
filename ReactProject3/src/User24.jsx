
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User24 = () => {
    let [user,setUser]=useState({
         profile:"https://www.bamcef.org.in/wp-content/uploads/2017/08/Chhatrapati-Shivaji-Maharaj.jpg",
         name:"Chatarpati Shivaji Maharaj",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/d/d/w/small-chhatrapati-shivaji-maharaj-poster-hd-god-religious-poster-original-imaghnzxph4pbkt2.jpeg?q=20&crop=false",
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

export default User24
