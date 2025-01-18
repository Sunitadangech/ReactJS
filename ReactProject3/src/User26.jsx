
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User26 = () => {
    let [user,setUser]=useState({
         profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_qcT17mET6_VshMz12aPs4S9YFW1-oYngw&s",
         name:"Chatarpati Shivaji Maharaj",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://wallpapers.com/images/hd/chhatrapati-shivaji-maharaj-sitting-on-throne-zaafwnxmx87yx6s0.jpg",
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

export default User26
