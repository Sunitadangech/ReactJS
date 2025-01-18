// import React,{useState,useEffect} from 'react';
// import {Employeedata} from "./EData.jsx";
// const App = () => {
//   let [data,setData] = useState([]);
//   let [id,setId] = useState(0);
//   let [firstName, setFirstName] = useState("");
//   let [lastName,setLastName] = useState("");
//   let [age,setAge] = useState(0);

//   useEffect(()=>
//   {
//     setData(Employeedata);
//     console.log(Employeedata);
    
//   },[])

//   let handleDelete = id =>{

//           if(id>0){
//             if(window.confirm("Are you sure to delete this item")){
//               const dt = data.filter(ele => ele.id !== id);
//               setData(dt);
//             };
//           };
//   };

//   let handleSave = (e) => {
//     e.preventDefault()

//     let dt = [...data]
//     let newEmployee ={
//       id :id,
//       firstName:firstName,
//       lastName:lastName,
//       Age:age,
//     }
//     dt.push(newEmployee)
//     setData(dt)
//   }
//   //Handling Edit Operation
//   let handleEdit = id => {
//     let dt = data.filter(ele => ele.id == id)
//     if(dt !== undefined){
//      setId(id)
//      setFirstName(dt[0].firstName)
//      setLastName(dt[0].lastName);
//      setAge(dt[0].age)
      
//     }
//   }

//   let handleClear = () => {
//      setId(0);
//      setFirstName("");
//      setLastName("");
//      setAge(0);
//      };

//   return (
//     <div>
//         <h1>
//           <span style={{color:"orange"}}>Q</span>spiders Employee Management
//         </h1>
//         <section className="Create-Op">
//             <form action=''>
//               <input type='text' placeholder='Emp ID' onChange={(e)=>{setId(e.target.value)}} value={id}/>
//               <input type='text' placeholder='First Name' onChange={(e)=>{setFirstName(e.target.value)}} value={firstName}/>
//               <input type='text' placeholder='Last Name' onChange={(e)=>{setLastName(e.target.value)}} value={lastName}/>
//               <input type='text' placeholder=' Emp Age' onChange={(e)=>{setAge(e.target.value)}} value={age}/>
              
//               <button className='btn btn-success' onClick={(e)=>handleSave(e)}>Save</button>
//               <button className='btn btn-warning' onClick={() =>handleClear(e)}>Clear</button>
//               <button className='btn btn-warning' onClick={() =>handleUpdate(e)}>Update</button>
//             </form>
//         </section>

//         <section className='tableSection'>
//           <table className="table table-hover">
//             <thead>
//               <tr>
//                 <th>Sr.NO</th>
//                 <th>Employee ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Age</th>
//               </tr>
//             </thead>
//             <tbody>
//               {
//                 data && data?.map((ele,index)=>{
//                   return <tr key={index}>
//                     <td>{index+1}</td>
//                     <td>{ele.id}</td>
//                     <td>{ele.firstName}</td>
//                     <td>{ele.lastName}</td>
//                     <td>{ele.Age}</td>
//                     <td>
//                     <button className="btn btn-primary" onClick={()=>{handleEdit(ele.id)}}>Edit</button>
//                     <button className="btn btn-danger" onClick={()=>{handleDelete(ele.id)}}>Delete</button>
//                     </td>
                    
//                   </tr>
//                 })
//               }
//             </tbody>
//           </table>
//         </section>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Navbar from './Navbar'
const App = () => {
  return (
    <div>
    <Navbar/>
    </div>
  )
}

export default App