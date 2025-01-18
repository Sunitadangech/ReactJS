// import React, {useRef} from 'react'
// import audio1 from './assets/audio1.mp3'
// import audio2 from './assets/audio2.mp3'
// const MediaPlayer = () => {


//     let audioRef = useRef ();

//     let handlePlay = () =>{
//       audioRef.current.play();
//     }

//     let handlePause = () =>{
//       audioRef.current.pause();
//     }

//     let handleChange = () => {
//       audioRef.current.src =audio2
//       audioRef.current.play()
//     }

//   return (
//     <div>
//       <audio src={audio1} controls ref={audioRef}></audio>

//       <br/>

//       <br/>


//       <div style ={{padding:"10px"}}>
//         <button style={{marginLeft:"10px", height:"25px", width:"500",backgroundColor:"orange"}} onClick={handlePlay}>   Play</button>
//         <button style={{marginLeft:"10px", backgroundColor:"red"}}   onClick={handlePause}>    Pause</button>
//         <button style={{marginLeft:"10px",backgroundColor:"brown"}}  onClick={handleChange}>   Change</button>
//       </div>
//     </div>
//   )
// }

// export default MediaPlayer



import React , {useRef,useState} from 'react'
import audio1 from "./assets/audio1.mp3";
import audio2 from "./assets/audio2.mp3";
import audio3 from "./assets/audio3.mp3";
import audio4 from "./assets/audio4.mp3";
import audio5 from "./assets/audio5.mp3";
import style from "./User.module.css";
const MediaPlayer = () => {
  let [index,setIndex] = useState(0);
  let playlist = [audio1,audio2,audio3,audio4,audio5]
  let audioRef=useRef();

  let handlePlay = () =>{
    audioRef.current.play();
  }

  let handlePause= () =>{
    audioRef.current.pause();
  }

  let handleChange = () => {
    // audioRef.current.src=audio2;
    // audioRef.current.src=playList(index);
    const nextIndex = (index + 1) % playlist.length; 
    setIndex(nextIndex); 
    audioRef.current.src = playlist[nextIndex]; 
    audioRef.current.play(); 
  }
  return (
        <div className={style.head}>
        <audio src={audio1} controls ref={audioRef}></audio>
        <br/><br/>
        <section >
        <button style={{marginLeft:"10px", height:"25px", width:"100",backgroundColor:"orange"}} onClick={handlePlay}>   Play</button>
        <button style={{marginLeft:"10px", height:"25px", width:"100",backgroundColor:"red"}}   onClick={handlePause}>    Pause</button>
        <button style={{marginLeft:"10px",height:"25px", width:"100",backgroundColor:"brown"}}  onClick={handleChange}>   Change</button>
        </section>
    </div>
  )
}

export default MediaPlayer