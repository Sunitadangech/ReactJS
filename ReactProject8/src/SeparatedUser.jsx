import React, {useEffect, useState} from 'react'
import axios from 'axios'

const SeparatedUser = () => {
    let [usertData, setUserData] = useState("")
    useEffect(() => {
        let fetchData = async () => {
            let res = await axios.get("https://api.github.com/users")
            console.log(res);
            
        }
        fetchData()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default SeparatedUser
