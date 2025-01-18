
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User6 = () => {
    let [user,setUser]=useState({
         profile:"https://t4.ftcdn.net/jpg/05/70/26/97/360_F_570269737_Zb7wlzg77ZxGXbe1BfQVy0fK9lmXXEQe.jpg",
         name:"Flower",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqa31RHkU3oy-xdBRUPEhT-AztJgxITaP_rA&s",
            name:"Flower1",
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

export default User6
