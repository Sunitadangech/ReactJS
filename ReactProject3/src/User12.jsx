
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User12 = () => {
    let [user,setUser]=useState({
         profile:"https://static.vecteezy.com/system/resources/thumbnails/021/774/593/small_2x/beautifull-pink-flowers-with-green-leaves-free-png.png",
         name:"Flower",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://cms.interiorcompany.com/wp-content/uploads/2024/01/aster-attractive-flower-images.jpg",
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

export default User12
