import React from 'react'
import propStyle from "./Props.module.css";
const Props3 = ({name , age,isMarried,myHobbies,address,msg}) => {
     let style ={
        border : "2px solid black",
        
     };
     //console.log(isMarried);
     
  return (
    <div className={propStyle.parent}>
        <h1>Name:{name}</h1>
        <h1>Age:{age}</h1>
        <h2>Married:{isMarried?"Married but not officially":"Not married"}</h2>
        <h2>Hobbies: </h2>
        <ul>{myHobbies?.map((ele)=>{
            return<li>{ele}</li>
          })}
        </ul>
        <h2>Address: </h2>
        <h3>Place:{address?.Place}</h3>
        <h3>State:{address?.State}</h3>
        <h2>Message:{msg}</h2>
    </div>
  );
};

export default Props3