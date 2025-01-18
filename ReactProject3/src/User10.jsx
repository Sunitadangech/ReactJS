
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User10 = () => {
    let [user,setUser]=useState({
         profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77xGIoe-cYX-PqEJ2_IzwLgUv9O5twcteOg&s",
         name:"Flower",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://cdn.firstcry.com/education/2022/12/12101916/Flower-Names-In-English-For-Kids.jpg",
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

export default User10
