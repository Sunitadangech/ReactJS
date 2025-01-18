
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User23 = () => {
    let [user,setUser]=useState({
         profile:"https://rukminim2.flixcart.com/image/850/1000/xif0q/painting/5/h/x/20-1-chhatrapati-shivaji-maharaj-photo-jog-craft-original-imagwcgwtyp4wtgz.jpeg?q=20&crop=false",
         name:"Chatarpati Shivaji Maharaj",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://i.pinimg.com/550x/33/7a/c6/337ac6bb748197e65db9cda2629464e1.jpg",
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

export default User23
