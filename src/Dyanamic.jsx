import React, { useState } from "react";
import { Container, Typography ,TextField, Button, DialogContentText} from "@material-ui/core";
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
import NewDyanamic from "./Tessst";
import { DialogTitle,DialogContent,Dialog,DialogActions } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        margin:"10px 10px 10px 10px",
      },
      
  }));


export const Dyanamic=()=>{
    const classes = useStyles();
    const[data,setData]=useState([{
        name:"",
        email:"",
        contactno:"",
        staff:"",
        feedback:"",
        scroll:""
    },]);


// const{name,email,contactno,staff,feedback}=data;

const handlechange=(index,event)=>{
    const values=[...data];
    values[index][event.target.name]=event.target.value;
    setData(values);
    console.log(values);
};

// const handleadd =()=>{
//     setData([...data,{name:"",email:"", contactno:"", staff:"", feedback:"",scroll:"",
//    }])
// }
// const handlesubmit= async(event)=>{
  
// }


return(

                    <form> 

                    { data.map((datas,index)=>( 
                        <div className={classes.root} key={index}> 

                        <div className={classes.root}>
                        <TextField id="outlined-basic" 
                            label="Name"
                            variant="outlined"
                            name="name"
                            value={datas.name}
                            onChange={handlechange} 
                            style={{width:"50%"}}
                        />
                    </div>

                    <div className={classes.root}>
                        <TextField id="outlined-basic" 
                            label="Email"
                            variant="outlined"
                            name="email"
                            value={datas.email}
                            onChange={handlechange} 
                            style={{width:"50%"}}
                        />
                    </div>

                    <div className={classes.root}>
                        <TextField id="outlined-basic" 
                            label="Contact No"
                            variant="outlined"
                            name="contactno"
                            value={datas.contactno}
                            onChange={handlechange}
                            style={{width:"50%"}}
                        />
                    </div>

                    <div className={classes.root}>
                    <TextField id="outlined-basic"
                    label="Name of Staff who served you"
                    variant="outlined"
                    name="staff"
                    value={datas.staff}
                    onChange={handlechange}
                    style={{width:"50%"}}
                    />
                    </div>

                    <div className={classes.root}>
                        <TextField id="outlined-basic" 
                            label="Feedback"
                            variant="outlined"
                            name="feedback"
                            value={datas.feedback}
                            onChange={handlechange} 
                            style={{width:"50%"}}
                        />
                    </div>
                        </div>
                   ))   } 
                            
                    </form>
                
        
       
   
  
    )
 }                 
 

export const Dyanamic2 =()=>{

    return(

        <>
                <NewDyanamic/>
        </>
    )
}




export const Dyanamic3 =()=>{
    const[data,setData]=useState([{
        name:"",
        email:"",
        contactno:"",
        staff:"",
        feedback:"",
        scroll:"",
        
    },]);

const[edit,newEdit]=useState({
    label:""
});
const[open,setOpen]=useState(false);
const handleclose=()=>{
    setOpen(false);
}
const{name,email,contactno,staff,feedback,label}=data;

const handlechange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData({...data,[name]:value});
    
};
const handleEdit=(event)=>{
    const value=event.target.value;
    newEdit({label:value})
}

    return(
        
        <>  <Card>
                <TextField id="outlined-basic" 
                    label={edit.label}
                    variant="outlined"
                    name="name"
                    value={name}
                    onChange={handlechange} 
                    
                />
                <Button onClick={()=>{setOpen(true)}}>OPen Edit Mode</Button>
                <Dialog
                open={open}
                onClose={handleclose}
                >
                <DialogTitle>
                    Edit Form
                </DialogTitle>
                <DialogContent>
                <DialogContentText>
                   <TextField
                    label="Lable"
                    variant="outlined"
                    name="name"
                    value={edit.label}
                    onChange={handleEdit}
                    fullWidth
                   /> 
                    {/* <TextField
                    label="Enter name for field"
                    variant="outlined"
                    name="name"
                    value={edit.label}
                    onChange={handleEdit}
                    fullWidth
                   />  */}
                   </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleclose} variant="contained" color="secondary">Close</Button>
                    <Button onClick={handleclose} variant="contained" color="primary">Done</Button>
                </DialogActions>
               

                </Dialog>
            </Card>
        </>
    )
}