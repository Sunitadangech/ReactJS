
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User25 = () => {
    let [user,setUser]=useState({
         profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDq8GgtkYmBdyLfaldScI2-TW8lri6t6z18Q&s",
         name:"Chatarpati Shivaji Maharaj",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://mrwallpaper.com/images/hd/shivaji-maharaj-statue-with-garlands-hd-s2g4axsjame3uk9k.jpg",
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

export default User25
