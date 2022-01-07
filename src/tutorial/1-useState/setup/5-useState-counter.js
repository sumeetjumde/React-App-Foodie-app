import React, { useState } from 'react';

const UseStateCounter = () => {
  const[value,setValue]=useState(0);

  const reset=()=>{
    setValue(0);
  }

  const handleclick=()=>{
    setTimeout(()=>{
      setValue((prevState)=>{
        return prevState+1;
      })
    },2000)
  }
  
  return (
    <>
    <section style={{margin:"4rem 0 5rem 5rem"}}>
      <h2>regular counter</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={()=>setValue(value-1)}>decrease</button>  
      <button className="btn" onClick={()=>setValue(value+1)}>increcrease</button>  
      <button className="btn" onClick={reset}>reset</button>  
    </section>

    <section style={{margin:"4rem 0 5rem 5rem"}}>
      <h2>regular counter with prevstate and 2 sec delay</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={handleclick}>increment with prevState</button>  
      
    </section>
    </>

  )
};

export default UseStateCounter;
