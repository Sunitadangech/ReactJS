
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User15 = () => {
    let [user,setUser]=useState({
         profile:"https://cdn.pixabay.com/photo/2024/02/19/08/49/hibiscus-8582876_1280.jpg",
         name:"Flower",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://i.pinimg.com/736x/90/40/03/9040034f5d635f46a4fb92128964fcca.jpg",
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

export default User15
