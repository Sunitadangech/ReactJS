import React, {useEffect, useState} from 'react'
import axios from 'axios'

const SeparatedUser1 = () => {
    let [userData, setUserData] = useState("")
    let [userId, setUserId] = useState(1)
    useEffect(() => {
        let fetchData = async () => {
            let {data} = await axios.get(`https://api.github.com/user/${userId}`)
            console.log(data);
            setUserData(data)
            
        }
        fetchData()
    },[userId])
  return (
    <div>
      <h1>{userData?.login}</h1>
      <img src={userData?.avatar_url}  alt='' height={250} width={250}></img><br/>
      <button onClick={() => {setUserId(userId-1)}}>Previous User</button>
      <button onClick={() => {setUserId(userId+1)}}>Next User</button> 
    </div>
  )
}

export default SeparatedUser1
