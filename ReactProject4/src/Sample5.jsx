import React,{useState} from "react";
const Sample5 = () => {
    let [food,setfood]=useState("idly");
  return (
    <div>
      {food == "idly" ? <h1>Idly is Good Food</h1> : <h1>Choose Food</h1>}
    </div>
  )
}

export default Sample5
