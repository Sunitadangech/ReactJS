
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User7 = () => {
    let [user,setUser]=useState({
         profile:"https://wallpapers.com/images/featured/flower-pictures-unpxbv1q9kxyqr1d.jpg",
         name:"Flower",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCy5vH-tH9FdQYUUr1G_-CJ84VhlSN_Zy5A&s",
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

export default User7
