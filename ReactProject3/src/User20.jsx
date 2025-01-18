
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User20 = () => {
    let [user,setUser]=useState({
         profile:"https://www.hindujagruti.org/wp-content/uploads/2017/01/Shivaji_615.jpg",
         name:"Chatarpati Shivaji Maharaj",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://i.pinimg.com/236x/03/27/68/0327689e16da2b6f366119f1c52fa706.jpg",
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

export default User20
