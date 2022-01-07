import React, { useState } from 'react';

const UseStateObject = () => {
  const[person,setPerson]=useState({
    name:"sumeet",
    age:22,
    message:"HEllo how are you",
  })

  const changedata=()=>{
    setPerson({...person, name:"sumit"})
  }
  return(
  <> 
  <h2>{person.name}</h2>
  <h2>{person.age}</h2>
  <h2>{person.message}</h2>
  <button onClick={changedata}>click to change</button>
  </>
  );
};

export default UseStateObject;
