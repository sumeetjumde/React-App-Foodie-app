import React from "react";
import { makeStyles, createStyles, Theme, } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Listfood from "./Listfoods";
import Foods from "./Foodcards";




export default function NestedGrid() {

    return (
      <React.Fragment>
       {Listfood.map(function ncard(val){
         return(
            <Foods 
              img={val.img}
              fname={val.fname}
              hname={val.hname}
              id={val.id}
              price={val.price}
              />
              
         )
       })   
        }
  
      </React.Fragment>
    );
  
}

