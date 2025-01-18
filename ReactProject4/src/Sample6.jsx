// import React, {useState} from 'react'

// const Sample6 = () => {
//     let [food,setFood] = useState("");
//   return (
//     <div>
//       <section>
//       {food !==""? <h1>{food}</h1> : <h1>Choose Food</h1>}
//       <button onClick={()=>{setFood("Idly")}}>Idly</button>
//       <button onClick={()=>{setFood("Dosa")}}>Dosa</button>
//       </section>
//     </div>
//   )
// }

// export default Sample6



// import React, {useState} from 'react';
// import style from './App.css'

// const Sample6 = () => {
//     let [car,setCar] = useState("");
//   return (
//     <div>
//       <section>
//       {car !=""? <h1>{car}</h1> : <h1>Choose Car</h1>}
//       <button onClick={()=>{setCar("Tesla")}}>Tesla</button>
//       <button onClick={()=>{setCar("Mahindra")}}>Mahindra</button>
//       <button onClick={()=>{setCar("BMW")}}>BMW</button>
//       <button onClick={()=>{setCar("Tesla")}}>Tesla</button>
//       <button onClick={()=>{setCar("Mahindra")}}>Mahindra</button>
//       <button onClick={()=>{setCar("BMW")}}>BMW</button>
//       <button onClick={()=>{setCar("Tesla")}}>Tesla</button>
//       <button onClick={()=>{setCar("Mahindra")}}>Mahindra</button>
//       <button onClick={()=>{setCar("BMW")}}>BMW</button>
//       <button onClick={()=>{setCar("Tesla")}}>Tesla</button>
//       </section>
//     </div>
//   )
// }

// export default Sample6



// Using CSS
// import React, {useState} from 'react'

// const Sample6 = () => {
//     let [food,setFood] = useState("");
//   return (
//     <div>
//       <section>
//       {food !==""? <h1>{food}</h1> : <h1>Choose Food</h1>}
//       <button onClick={()=>{setFood("Idly")}}>Idly</button>
//       <button onClick={()=>{setFood("Dosa")}}>Dosa</button>
//       </section>
//     </div>
//   )
// }

// export default Sample6



import React, {useState} from 'react';
import styles from './Sample6.module.css'

const Sample6 = () => {
    let [car,setCar] = useState("");
  return (
    <div className='styles.container'>
      <section>
      {car !=""? <h1>{car}</h1> : <h1>Choose Car</h1>}
        <button className={`${styles.button} ${styles.tesla}`} onClick={() => setCar("Tesla")}>Tesla</button>
        <button className={`${styles.button} ${styles.mahindra}`} onClick={() => setCar("Mahindra")}>Mahindra</button>
        <button className={`${styles.button} ${styles.bmw}`} onClick={() => setCar("BMW")}>BMW</button>
        <button className={`${styles.button} ${styles.sedan}`} onClick={() => setCar("Sedan")}>Sedan</button>
        <button className={`${styles.button} ${styles.suv}`} onClick={() => setCar("SUV")}>SUV</button>
        <button className={`${styles.button} ${styles.jeep}`} onClick={() => setCar("Jeep")}>Jeep</button>
        <button className={`${styles.button} ${styles.hatchback}`} onClick={() => setCar("Hatchback")}>Hatchback</button>
        <button className={`${styles.button} ${styles.coupe}`} onClick={() => setCar("Coupe")}>Coupe</button>
        <button className={`${styles.button} ${styles.crossover}`} onClick={() => setCar("Crossover")}>Crossover</button>
        <button className={`${styles.button} ${styles.sportcars}`} onClick={() => setCar("Sportcars")}>Sportcars</button>
      </section>
    </div>
  )
}

export default Sample6

