import React, { useEffect, useState } from "react";
import TabScrollButton from '@material-ui/core/TabScrollButton';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import transitions from "@material-ui/core/styles/transitions";
import { Button } from "@material-ui/core";


const ScrollToLeft=()=>{
const Scrollleft=()=>{
    window.scrollTo({left:0,behavior:"smooth"});
}
const Scrollright=()=>{
    window.scrollBy(1000, 0);
}
const setzoom=()=>{
   document.body.style.zoom = 0.7;
 }  
 
 const setzoomout=()=>{ 
     
    document.body.style.zoom = 1;
    

  } 


   return(
    <>
        <div id="div">
        <ZoomInIcon onClick={setzoomout}/>
        <ZoomOutIcon onClick={setzoom}/>
         <TabScrollButton direction="left" orientation="horizontal" onClick={Scrollleft}/>
         <TabScrollButton direction="right" orientation="horizontal" onClick={Scrollright}/>
        </div>
       
    </>
    )
}

export default ScrollToLeft;