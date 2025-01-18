
import React from "react";
//import Props from "./Props.jsx";
//import Props2 from "./Props2.jsx";
import Props3 from "./Props3.jsx";
import propStyle from "./Props.module.css";

const App = () => {
    function info() {
      return "She is one of the unique personality whome she's also not understood. "
    }
    function info2(){
      return "She's such a Sweethearts"
    }
    

  return (
    <div className={propStyle.main}>
      {/* <Props text="Sakshi"/>
      <Props text="Priti"/>
      <Props text="Nida"/>
      <Props text="Nikita"/>
      <Props text="Tejal"/>

      <Props2 text="Sakshi" color="green"/>
      <Props2 text="Priti" color="blue"/>
      <Props2 text="Nida" color="crimson"/>
      <Props2 text="Nikita" color="yellow"/>
      <Props2 text="Tejal" color="grey"/> */}

      <Props3 name="Sunita" age={22} isMarried={false} myHobbies={["Cooking","Gymming","Reading","travelling"]} address={{Place:"Koshimbe",State:"Maharashtra"}} msg={info2()}/>
      <Props3 name="Anita" age={22} isMarried={true} myHobbies={["eating","eating","eating","eating"]} address={{Place:"Gaurav's Heart",State:"Rajput Family" }} msg={info()}/>
      <Props3 name="Vaishanvi" age={22} isMarried={false} myHobbies={["Cooking","Gymming","Reading","talking"]} address={{Place:"Dhanore",State:"Maharashtra"}} msg={info2()}/>
      <Props3 name="Pooja" age={22} isMarried={false} myHobbies={["Cooking","Gymming","Reading","sleeping"]} address={{Place:"Dhanore",State:"Maharashtra"}} msg={info2()}/>

    </div>
  )
}
export default App;
