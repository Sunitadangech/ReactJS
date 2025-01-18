
import React,{useState} from 'react'
import Hero from "./User.module.css";
const User21 = () => {
    let [user,setUser]=useState({
         profile:"https://www.jiomart.com/images/product/original/rv9xtirbrk/surmul-chhatrapati-shivaji-maharaj-with-horse-unframed-multicolor-pvc-wall-sticker-product-images-orv9xtirbrk-p600855130-1-202304241047.jpg?im=Resize=(420,420)",
         name:"Chatarpati Shivaji Maharaj",
         age:250
    });



    let changeUser = () => {
        setUser({
            profile:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPwz-vWlJ2Kkm5AqJn20hue_SV7gXbFiJgQ&s",
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

export default User21
