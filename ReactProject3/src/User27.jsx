
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User27 = () => {
    let [user,setUser]=useState({
         profile:"https://wallpapers.com/images/hd/chhatrapati-shivaji-maharaj-golden-statue-l9bgnnmig8a6gfhh.jpg",
         name:"Chatarpati Shivaji Maharaj",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJne_L2BRO1foAf-PhEHcSQqw8l2oPOmAkaw&s",
            name:"Iron man",
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

export default User27
