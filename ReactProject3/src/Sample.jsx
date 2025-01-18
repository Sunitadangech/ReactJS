import React from 'react'

const Sample = () => {
    function printName(name){
        console.log("Hello "+ name);
        
    }

    function nameOnpage(){
        // document.write("Hello Me");
        console.log("Hello Balkrushana");
        
    }

    function nameOnpage1(){
        // document.write("Hello Me");
        console.log("Hello Sunita");
        
    }

  return (
    <div>
      {/*Direct calling function inside event */}
      <button onClick={()=>alert("Hello Suraj")}>Cllick Me !!!!!</button>

      {/*Parametrized  function calling inside event */}
      <button onClick={()=>{printName("Anita")}}>Cllick Me Again !!!!!</button>

      {/*Non parameterized function*/}
      <button onClick={nameOnpage}>Cllick Me Again n Again !!!!!</button>

      <button onClick={nameOnpage1}>Cllick Me Again n Again Again!!!!!</button>
    </div>
  );
};

export default Sample
