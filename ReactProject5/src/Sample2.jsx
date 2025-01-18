import React, {useState} from 'react'

const Sample2 = () => {
    let [data,setData]=useState("");
    (
        [
           {name:"Anita", age:26},
           {name:"Balkrushana", age:24},
           {name:"Sunita", age:22},
        ]
       );
  return (
    <div>
      <section>
      {data && data?.map(ele => {
        return(
            <li>
                Name:{ele.name}--Age:{ele.age}
            </li>
        )
      })}
      </section>
    </div>
  )
}

export default Sample2
