import React, {useState} from 'react'

const Controlled = () => {
    let [user,setUser] = useState();
    let [password,setPassword] = useState();

    let handleSubmit = event =>{
        event.preventDefault();

        let details = {
            username:user,
            passcode:password,
        }
        console.log(details);
        // console.log(password);
        
    }
    
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={user} onChange={event => {setUser(event.target.value)}}/>
        <input type="password" placeholder="Password" value={password} onChange={event => {setPassword(event.target.value)}}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Controlled
