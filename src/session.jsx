import React from "react";
import MultipleReturns from "./tutorial/3-conditional-rendering/setup/1-multiple-returns"
import Forms from './forms';
import Apps from './newdesign';
import UseStateCounter from "./tutorial/1-useState/setup/5-useState-counter"
import ScrollToLeft from "./scroll";
import Hookcounter from "./learning/Hookcounter";
import Automaticounter from "./learning/UseEffect.js";
import Form from "./Testforms";
import NewDyanamic from "./newform";


const AllApps=()=>{
    return(
    <>
    <UseStateCounter/>
  
  <MultipleReturns/>
  <Forms/>
    <ScrollToLeft/>
  <Apps/>
  <Hookcounter/>

  <Automaticounter/>
  <Form/>
  

    </>
)
}

export default AllApps;