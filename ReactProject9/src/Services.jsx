import React from 'react'
import services from './assets/ferrari.jpg'
import { Link, Outlet, useNavigate } from 'react-router-dom'
const Services = () => {
  let navigate = useNavigate()
  let handleSubmit = (e) => {
    alert("Logout Successfull!")
    navigate("/home");
  }
 let st={
   color: "red", fontStyle: "italic", fontWeight: "bold", textDecoration: "none", border: "1px solid black", padding: "5px", width: "200px", textAlign: 'center', background: "white"
 }
  return (
    <div>
      <h1>Services Page</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <aside style={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly", fontSize: "20px", alignItems: "center", border: "5px solid red", height: "500px", width: "30%" }}>
          <Link style={st} to="/services/booknow">Book Now</Link>
          <Link style={st} to="/services/buynow">Buy Now</Link>
          <Link style={st} to="/services/care">Customer Care</Link>
          <Link style={st} to="/services/details">Car Details</Link>
        </aside>
        <aside style={{ border: "5px solid red", height: "500px", width: "65%" ,overflow:"scroll",scrollbarWidth:"none"}}>
          <Outlet />
        </aside>
      </div>
    </div>
  )
}

export default Services
