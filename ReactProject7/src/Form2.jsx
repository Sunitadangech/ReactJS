import React, {useState} from 'react'

const Form2 = () => {
    let [data,setData] = useState({
        username:"",
        password:"",
        message:"",
        email:"",
        gender:"",
        favFood:"",
        place:""
    })

    let{username ,password, message,email,favFood} = data

    let handleChange = event => {
        setData ({
          ...data,
            [event.target.name] : event.target.value,
        })
        console.log(data);    
      }

      // let handleSubmit = e =>{
      //   e.preventDefault();
      //   console.log(data);
      // }

      let [place,setPlace] = useState({
        Dharashiv:false,
        ShambhajiNagar:false,
        pune:false
      })

      let {Dharashiv , ShambhajiNagar ,pune} =place;

      let handlePlace = event =>{
        setPlace({
          ...place,
          [event.target.name]: event.target.checked
        })
      }
      let handleSubmit = e =>{
        e.preventDefault();
        console.log(data);
        console.log(place);
        
        
      }
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Username" value={username} name="username" onChange={handleChange}/><br/><br/>
        <input type="password" placeholder="Password" value={password} name="password" onChange={handleChange}/><br/><br/>
        <input type="message" placeholder="Message" value={message} name="message" onChange={handleChange}/><br/><br/>
        <input type="email" placeholder="Email" value={email} name="email" onChange={handleChange}/><br/><br/>
        <div>
        <input type="radio" name="gender" value="male" onChange={handleChange}/>Male<br/><br/>
        <input type="radio" name="gender" value="female" onChange={handleChange}/>Female<br/><br/>
         </div>

         <div>
          <select name='favFood' id='' value={favFood} onChange={handleChange}>
          <option value='PavBhaji'>PavBhaji</option>
          <option value='PanePuri'>PanePuri</option>
          <option value='Idly'>Idly</option>
          <option value='PuranPoli'>PuranPoli</option>
          </select>
         </div>
         <br/>

         <div>
          <input type="checkbox" name="Dharashiv" value={Dharashiv} onChange={handleChange}/>Dharashiv<br/>
          <input type="checkbox" name="SambhajiNagar" value={ShambhajiNagar} onChange={handleChange}/>Dharashiv<br/>
          <input type="checkbox" name="Dharashiv" value={pune} onChange={handleChange}/>Dharashiv<br/>
         </div>


        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form2
