import React from 'react'
import home from './assets/bmw.jpg'
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
    let navigate=useNavigate();
    let handleSubmit=(e)=>{
        alert("Login Successfull!")
        // e.preventDefault();
        navigate("/services");
    }
    return (
        <div>
            <h1>
                Home Page
            </h1>
            {/* <img src={home}/> */}
            <br></br>
            <br></br>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='UserName'></input>
                            <br/>
                            <br/>
            <input type='text' placeholder='Password'></input>
                            <br/>
                            <br/>
            {/* <Link to="/services"> */}
            <button type='submit'>Click To Services</button>
            {/* </Link> */}
            </form>
        </div>
    )
}

export default Home
