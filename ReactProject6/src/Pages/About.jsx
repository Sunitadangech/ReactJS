import React from 'react'
import Wrapper from '../Wrapper.jsx'
import Car2 from '../assets/Car2.jpg'

const About = () => {
    let desc="Whether you’re a die-hard car enthusiast, an aspiring gearhead, or simply someone who appreciates the beauty and power of these machines, these car quotes capture the essence of the automotive world. So, fasten your seatbelt, and let’s take a ride through some of the most iconic car quotes!"
  return (
    <div>
    
      <Wrapper 
      BgImg={Car2} 
      headBanner="Cars We Drive Say Lot About Us Cars We Drive Say Lot About Us!!!!!" 
      description={desc}/>
        
    </div>
  )
}

export default About
