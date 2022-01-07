import React, { useState } from "react";

const Forms=()=>{
  const[name,setName]=useState(""); 
  const[fullname,setFullname]=useState();


  const[lname,setLname]=useState("");
  const[lastname,setLastname]=useState();
  
  const Clickhandler=(event)=>{
    setFullname(name);
    setLastname(lname);
    event.preventDefault();
    console.log(fullname);
  }
  
  const inputevent=(event)=>{
  
  setName(event.target.value);
}
const inputeventtwo=(event)=>{
  setLname(event.target.value);
  
}


    return(
        <div>
        <form onSubmit={Clickhandler}>
          <h1>Hello {fullname}{lastname} </h1> 
          <input type="text" placeholder="Enter your name" onChange={inputevent} value={name}></input>
          <input type="text" placeholder="lastname" onChange={inputeventtwo} value={lname}></input>
          <button onClick={Clickhandler}>Click</button>
          </form>
        </div>


    )
}


export default Forms;