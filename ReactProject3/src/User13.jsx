
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User13 = () => {
    let [user,setUser]=useState({
         profile:"https://images.unsplash.com/photo-1724263820069-87ebe021adc8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZmxvd2VyfGVufDB8fDB8fHww",
         name:"Flower",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpSupiI7Tw289HomG-whiYwnXcB15Gb0U0A&s",
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

export default User13
