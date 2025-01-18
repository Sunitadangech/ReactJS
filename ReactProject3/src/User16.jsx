
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User16 = () => {
    let [user,setUser]=useState({
         profile:"https://cdn.magicdecor.in/com/2023/10/31154204/Chhatrapati-Shivaji-Maharaj-Riding-Horse-and-Holding-Sword-Silhouette-Wallpaper.jpg",
         name:"Chatarpati Shivaji Maharaj",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://waahkart.com/image/cache/catalog/shivaji%20mural/chhatrapati-shivaji-maharaj-mural-website-ddd-800x800.jpg",
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

export default User16
