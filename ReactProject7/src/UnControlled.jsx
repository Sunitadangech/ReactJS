import React, {useRef} from 'react'

const UnControlled = () => {
    const user = useRef();
    const password = useRef();

    let handleForm = e => {
        e.preventDefault();
        let username = user.current.value;
        let passWord = password.current.value;

        let formData ={
            Username:username,
            Password:passWord,
        }
        console.log(formData);
        
    }
  return (
    <div>
      <form action='' onSubmit={handleForm}>
        <input type='text' placeholder='Username' ref={user}/>
        <br/>
        <br/>
        <input type='password' placeholder='Password' ref={password}/>
        <br/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UnControlled
