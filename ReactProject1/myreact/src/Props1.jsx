import React from "react";

const Props = props => {
    let style ={
        color :"white",
        backgroundColor:"hotpink",
        border:"2px groove black",
        textAlign:"center",
        borderRadius:"50px",
        padding: "20px",
        
    };
  return (
    <div>
        <h1 style={style}>{props.text}</h1>
    </div>
  );
};


export default Props