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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Box from '@material-ui/core/Box';

import { Dyanamic, Dyanamic2 ,Dyanamic3 } from "./Dyanamic";
const useStyles = makeStyles((theme) => ({
    root: {
        margin:"10px 10px 10px 10px",
      },
      
  }));


const NewDyanamic=()=>{
    const classes = useStyles();

// const handleadd =()=>{
//     setData([...data,{name:"",email:"", contactno:"", staff:"", feedback:"",scroll:"",
//    }])
const handlechangenewfield=(index,event)=>{
    const values = [...field];
    values[index][event.target.name]=event.target.value;
    newField(values);
}
const handleadd=()=>{
    newField([...field,{newField:"",description:""}])
}
// const handlesubmit= async(event)=>{
  
// }

const handleremove=(index)=>{
    const values=[...field];
    values.splice(index,1);
    newField(values);
}
const[field,newField]=useState([
    {
        NewField:"",description:"",
    }
]);





const [value,setValue]=useState("")

const handleChange=(e)=>{
    setValue(e.target.value);
    
}

const[data,setData]=useState({
        name:"",
        email:"",
        contactno:"",
        staff:"",
        feedback:"",
        nickname:"",
        hobbies:"",
        interest:"",
        job:"",
        address:"",
        sports:"",
        act:"",
        skill:"",
        resume:"",
        joy:"",
        passtime:"",
        lag:"",
    });

const{name,email,contactno,staff,feedback,nickname,hobbies,interest,job,address,sports,act,skill,resume,joy,passtime,lag}=data;

const handlechange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData({...data,[name]:value});
    
};

const handlesubmit = async(event)=>{
 event.preventDefault();



        const response = await fetch("https://v1.nocodeapi.com/sumeetjumde/google_sheets/pOshyWoJyvNouwzZ?tabId=Sheet1",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify([[
                name,
                email,
                contactno,
                staff,
                feedback,
                nickname,
                hobbies,
                interest,
                job,
                address,
                sports,
                act,
                skill,
                resume,
                joy,
                passtime,
                lag,
            ]]) 

        }
    );
    if(response){
            setData({
                name:"",
                email:"",
                contactno:"",
                staff:"",
                feedback:"",
                nickname:"",
                hobbies:"",
                interest:"",
                job:"",
                address:"",
                sports:"",
                act:"",
                skill:"",
                resume:"",
                joy:"",
                passtime:"",
                lag:"",
            });

            alert("data stored");
        }



}
    

//firebase
//  if((name && email && staff && contactno && feedback)){

//     const response = await fetch("https://dynamic-form-da373-default-rtdb.firebaseio.com/dynamicforms.json",
//     {
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json",
//         },
//         body:JSON.stringify({
//         name,
//         email,
//         contactno,
//         staff,
//         feedback,
//         }) 

//     }
// );
// if(response){
//         setData({
//             name:"",
//             email:"",
//             contactno:"",
//             staff:"",
//             feedback:"",
//         });

//         alert("data stored");
//     }
// }
// else{
// alert("plz fill data in form first");
// }

// }
    
   


return(
        <Container className="container"> 
        
          
               <Card style={{margin:"10px 10px 10px 10px",padding:"50px 50px 50px 50px"}}>
                    <form method="POST">
                        {/* <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={value}
                            name="scroll"
                            onChange={handleChange}
                            
                        >
                            <MenuItem value="Epic">Epic</MenuItem>
                            <MenuItem value="Story">Story</MenuItem>
                            <MenuItem value="Deal">Deal</MenuItem>
                        </Select> 
                        <h3>Mandatory fields</h3>

                        <div className={classes.root}>
                            <TextField id="outlined-basic" 
                                label="Name"
                                variant="outlined"
                                name="name"
                                value={name}
                                onChange={handlechange} 
                                style={{width:"50%"}}
                                
                            />
                        </div>

                        <div className={classes.root}>
                            <TextField id="outlined-basic" 
                                label="Email"
                                variant="outlined"
                                name="email"
                                value={email}
                                onChange={handlechange} 
                                style={{width:"50%"}}
                            />
                        </div>

                        <div className={classes.root}>
                            <TextField id="outlined-basic" 
                                label="Contact No"
                                variant="outlined"
                                name="contactno"
                                value={contactno}
                                onChange={handlechange}
                                style={{width:"50%"}}
                            />
                        </div>

                        <div className={classes.root}>
                        <TextField id="outlined-basic"
                        label="Name of Staff who served you"
                        variant="outlined"
                        name="staff"
                        value={staff}
                        onChange={handlechange}
                        style={{width:"50%"}}
                        />
                        </div>

                        <div className={classes.root}>
                            <TextField id="outlined-basic" 
                                label="Feedback"
                                variant="outlined"
                                name="feedback"
                                value={feedback}
                                onChange={handlechange} 
                                style={{width:"50%"}}
                            />
                        </div>
                        <h3>Dyanamic fields</h3> 

                        {
                            value ==="Epic"  ?(
                             <>
                             <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Nickname"
                                    variant="outlined"
                                    name="nickname"
                                    value={nickname}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Hobbies"
                                    variant="outlined"
                                    name="hobbies"
                                    value={hobbies}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Interest"
                                    variant="outlined"
                                    name="interest"
                                    value={interest}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Job"
                                    variant="outlined"
                                    name="job"
                                    value={job}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                             </>   
                            ):("")
                        }

                        {
                            value ==="Story"? (
                            <>
                            <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Address"
                                    variant="outlined"
                                    name="address"
                                    value={address}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Sports"
                                    variant="outlined"
                                    name="sports"
                                    value={sports}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Act"
                                    variant="outlined"
                                    name="act"
                                    value={act}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Skill"
                                    variant="outlined"
                                    name="skill"
                                    value={skill}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                            </>
                ):("")
                        }

                        {
                            value ==="Deal" ? (
                               <>
                               <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Resume"
                                    variant="outlined"
                                    name="resume"
                                    value={resume}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Joy"
                                    variant="outlined"
                                    name="joy"
                                    value={joy}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Pass Time"
                                    variant="outlined"
                                    name="passtime"
                                    value={passtime}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                            <div className={classes.root}>
                                <TextField id="outlined-basic" 
                                    label="Language"
                                    variant="outlined"
                                    name="lag"
                                    value={lag}
                                    onChange={handlechange} 
                                    style={{width:"50%"}}
                                />
                            </div>
                               </> 

                            ):("")
                        }
                        
                        <h3> New Dyanamic fields</h3> 
                  {
                        field.map((newFielddata,index)=>( 
                            <div className={classes.root} key={index}>
                                <TextField id="outlined-basic" 
                                    label="NewField"
                                    variant="outlined"
                                    name="NewField"
                                    value={newFielddata.NewField}
                                    onChange={event=>handlechangenewfield(index,event)} 
                                    style={{width:"20%"}}
                                    className={classes.root}
    
                                />
                                
                                <TextField id="outlined-basic" 
                                    label="Description "
                                    variant="outlined"
                                    name="description"
                                    value={newFielddata.description}
                                    onChange={event=>handlechangenewfield(index,event)} 
                                    style={{width:"20%"}}
                                    className={classes.root}

                                />
                                <TextField id="outlined-basic" 
                                    label="Description "
                                    variant="outlined"
                                    name="description"
                                    value={newFielddata.description}
                                    onChange={event=>handlechangenewfield(index,event)} 
                                    style={{width:"20%"}}
                                    multiline
                                    rows={3}
                                    className={classes.root}
                                />
                                 <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={value}
                                    name="scroll"
                                    onChange={handleChange}
                                    style={{width:"10%"}}
                                    className={classes.root}
                                    >
                                    <MenuItem value="Completed">Completed</MenuItem>
                                    <MenuItem value="Pending">Pending</MenuItem>
                                    <MenuItem value="Review">Review</MenuItem>
                                </Select><Button className={classes.root} onClick={()=>handleremove(field.index)}>Remove</Button>
                            </div>



                        ))

                    }
                    <Button onClick={handleadd}>Add</Button>
                  
                            
                            
                    
                        <Button onClick={handlesubmit}  color="primary"
                        disabled={!name || !email || !contactno || !staff || !feedback}
                        >submit</Button> */}

                    <Dyanamic3/>
                    <Dyanamic2/>
                    </form>
                   
                </Card>
        
       
        </Container>
  
    )
}                 
export default NewDyanamic;


