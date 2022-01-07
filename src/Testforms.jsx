import React, { useState } from "react";
import { Container, Typography ,TextField, Button} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Card from '@material-ui/core/Card';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Form=()=>{
    
    const[user,setUser]=useState({
        name:"",
        email:"",
        address:"",
        contactno:"",
        message:"",
    });

const{name,email,address,contactno,message}=user;

const handlechange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setUser({...user,[name]:value})
}


const handlesubmit = async(event)=>{
    event.preventDefault();
        if((name && email && address && contactno && message)){

            const response = await fetch("https://foodie-app-feedback-form-default-rtdb.firebaseio.com/Foodieappfeedbackform.json",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                name,
                email,
                address,
                contactno,
                message,
                }) 
        
            }
        );
        if(response){
                setUser({
                    name:"",
                    email:"",
                    address:"",
                    contactno:"",
                    message:"",
                });

                alert("data stored");
            }
    }
        else{
        alert("plz fill data in form first");
        }

}



return(

    <Container className="container">   
        <Card style={{margin:"10px 10px 10px 10px",padding:"50px 50px 50px 50px"}}>
        <form method="POST">
             <TextField id="outlined-basic" 
                label="Name"
                variant="outlined"
                name="name"
                value={name}
                onChange={handlechange} 
                style={{width:"50%"}}
                
                />
            <TextField id="outlined-basic" 
                label="Email"
                variant="outlined"
                name="email"
                value={email}
                onChange={handlechange} 
                style={{width:"50%"}}
                />
            <TextField id="outlined-basic" 
                label="Address"
                variant="outlined"
                name="address"
                value={address}
                onChange={handlechange} 
                style={{width:"50%"}}
                />
            <TextField id="outlined-basic" 
                label="Contact No"
                variant="outlined"
                name="contactno"
                value={contactno}
                onChange={handlechange} 
                style={{width:"50%"}}
                />
            <TextField id="outlined-basic" 
                label="Message"
                variant="outlined"
                name="message"
                value={message}
                onChange={handlechange} 
                style={{width:"50%"}}
                />

            <Button
            onClick={handlesubmit}
            >
                Submit
            </Button></form>
        </Card>   
    </Container>
  
)}

export default Form;