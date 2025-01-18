import React,{useState} from 'react'
import style from "./Trainers.module.css";
import trainer1 from "./assets/P1.png";
import trainer2 from "./assets/P2.png";
import trainer3 from "./assets/P3.webp";
const Trainers = () => {
    const trainers = [
        {
          id: 1,
          name: "Suraj",
          avatar: trainer1,
          specialization: "Pharmacist",
        },
        {
          id: 2,
          name: "Anita",
          avatar: trainer2,
          specialization: "Job",
        },
        {
          id: 3,
          name: "Sunita",
          avatar: trainer3,
          specialization: "Engineering",
        },
      ];
    const [trainerIndex, setTrainerIndex] = useState(0);
    const currentTrainer = trainers[trainerIndex];
    
    const handleNext = () => {
      setTrainerIndex((prevIndex) => (prevIndex + 1) % trainers.length); 
    };
  
    const handlePrev = () => {
      setTrainerIndex((prevIndex) =>
        prevIndex === 0 ? trainers.length - 1 : prevIndex - 1
      ); 
    };
  return (
    <div className={style.card}>
            <h1>{currentTrainer.name}</h1>
            <img src={currentTrainer.avatar} alt={`${currentTrainer.name}'s Avatar`} height={200} width={200} />
            <p>Specialization: {currentTrainer.specialization}</p>
            
            <div className={style.btncontainer}>
                <button onClick={handlePrev} className={style.btn}>Previous Trainer</button>
                <button onClick={handleNext} className={style.btn} >Next Trainer</button>
            </div>
    </div>
  )
}

export default Trainers