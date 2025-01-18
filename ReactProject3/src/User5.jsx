
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User5 = () => {
    let [user,setUser]=useState({
         profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhD41ZrZcjhRG1lH7aRFqbqQjaHEFSKghovA&s",
         name:"Flower",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://media.istockphoto.com/id/1645602428/photo/perfect-light-purple-and-pink-dahlia-enlarged-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=ABKNUR2jF5EYk8Kdrkc2fumcO3LS5nuhbWoQmbHW3Bo=",
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

export default User5
