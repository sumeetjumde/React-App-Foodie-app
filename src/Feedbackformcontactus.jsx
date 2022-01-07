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
const useStyles = makeStyles((theme) => ({
    root: {
        margin:"10px 10px 10px 10px",
      },
      
  }));


const Feedbackform=()=>{
    const classes = useStyles();
    const[data,setData]=useState({
        name:"",
        email:"",
        contactno:"",
        staff:"",
        feedback:"",
        selectedValue:"",
    });

const{name,email,contactno,staff,feedback,selectedValue}=data;

const handlechange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
    
};

const handlesubmit= async(event)=>{
    event.preventDefault();
    if((name && email && contactno && staff && feedback)){ 
        
        try{
        const response = await fetch('https://v1.nocodeapi.com/sumeetjumde/google_sheets/PvIWKfrPcxmssvss?tabId=Sheet1',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify([
                [name,email,contactno,staff,feedback,new Date().toLocaleString(),selectedValue],
            ])
        }
        
        );
        await response.json()
        setData({...data,name:"",email:"",contactno:"",staff:"",feedback:"",selectedValue:""});
    }
    catch(err){
        console.log(err);
    }
        alert("data stored");
    }

    else{
        alert("plz fill data first");
    }

   
}
return(
    <Container className="container"> 
        <form>
            <Typography variant="h3" className="formHeading" style={{color:"orange"}}>Let us Known what u think <FavoriteIcon fontSize="large" style={{color:"red"}}/></Typography>
               <Card style={{margin:"10px 10px 10px 10px",padding:"50px 50px 50px 50px",background:"url('https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1531&q=80')"}}>
                    <Typography variant="h4" className="formHeading">Feedback</Typography>
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
                    {/* <div>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Rating
                                <RadioGroup row aria-label="position" name="position" defaultValue="a">
                                    <Radio
                                        default Checked={selectedValue === 'a'}
                                        onChange={handlechange}
                                        value="a"
                                        name="a"
                                        inputProps={{ 'aria-label': 'B' }}
                                    />
                                    <Radio
                                        Checked={selectedValue === 'b'}
                                        onChange={handlechange}
                                        value="b"
                                        name="b"
                                        inputProps={{ 'aria-label': 'B' }}
                                    />
                                    <Radio
                                        Checked={selectedValue === 'c'}
                                        onChange={handlechange}
                                        value="c"
                                        name="c"
                                        inputProps={{ 'aria-label': 'C' }}
                                    />
                                    <Radio
                                        Checked={selectedValue === 'd'}
                                        onChange={handlechange}
                                        value="d"
                                        name="d"
                                        inputProps={{ 'aria-label': 'D' }}
                                    />
                                </RadioGroup>
                            </FormLabel>
                        </FormControl>
                    </div> */}
                    <div className={classes.root}>
                        <Button
                            onClick={handlesubmit} 
                            variant="contained"
                            color="secondary"
                            startIcon={<SaveIcon />} 
                            style={{width:"30%"}}
                            disabled={!name || !email || !contactno || !staff ||!feedback}>
                            Submit
                        </Button> 
                    </div>
            
                </Card>
        </form>
       
    </Container>
  
)}

export default Feedbackform;