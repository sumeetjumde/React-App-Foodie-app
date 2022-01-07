
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormState } from 'react-use-form-state';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import Card from '@material-ui/core/Card';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import firebase from './firebase';
import { purple } from '@material-ui/core/colors';
import { buildQueries } from '@testing-library/react';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import Link from '@material-ui/core/Link';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'auto',
    height: '600px',
    borderRadius: '10px'
  },
  card1: {
    backgroundColor: '#A9C9FF',
    backgroundImage: ' linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)',
    width: '1150px',
    borderRadius: '10px',
    margin: '10px 10px 10px 10px',
    textAlign: 'center'
  },
  card2: {
    backgroundColor: '#FAACA8',
    backgroundImage: ' linear-gradient(19deg, #FAACA8 0%, #DDD6F3 46%)',
    width: '180px',
    borderRadius: '10px',
    margin: '10px 10px 10px 10px',
    textAlign: 'center'
  },
  card3: {
    backgroundColor: '#A9C9FF',
    backgroundImage: ' linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)',
    width: '1350px',
    borderRadius: '10px',
    margin: '10px 10px 10px 10px',
    textAlign: 'center',
    

  },
  buttondiv: {
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#FAACA8',
    backgroundImage: 'linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)',
    borderRadius: '5px',
    padding: '5px 5px 5px 5px',
    margin: '5px 10px 10px 10px',
    height: '50px'
  },
  submit:{
    position:"relative",
    bottom:"0px"
    
  },
 
}));


//ORIGINAL CODE 

// const NewDyanamic=()=> {
//   const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo }] = useFormState();
//   // const names=[{
//   //   "name": "NAme",
//   //   "type": "text"
//   // },
//   // {
//   //   "name": "Age",
//   //   "type": "text"
//   // }]
  
  
  
//   //   var ref=firebase.database().ref('FormStructure');
//   //   ref.on("value",function(snapshot){
//   //   console.log(snapshot.val(),"sdadad"); //datebase
//   //   var Names=JSON.stringify(snapshot.val());  //JSON
//   //   console.log(Names,"Names");localStorage.setItem('user',Names);
//   // })
//   //   const Idks=JSON.parse(localStorage.getItem('user'));
//   //   console.log(Idks,"IDK");
    
  
//   const [dynamicInputs, setDynamicInputs] = useState([]);
//   const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo };
  
//   const DynamicForm=(props)=> {
  
//     const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo }] = useFormState();
//     const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo };
//     return (
//       <form>
//         {props.dynamicInputs.map((inp, idx) => (
//           inp.type==="typo"?(
//             <div>
//             <Typography key={idx} {...mappers[inp.type]} style={{padding: "12px 20px",margin: "8px 0"}}
  
//             >{inp.name}</Typography>
//            <CloseIcon onClick={()=>handleremove(idx)} style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>
//           ):(
//             <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//               name={inp.name}
//            />
//            <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>
  
//         )))}
//         {/* <pre>{Idks}</pre> */}
//         {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//         <pre>{JSON.stringify(formState.values)}</pre> 
        
//       </form>
//     );
//   }
  
//   const handleCreate=(event)=> {
//     event.preventDefault();
//     setDynamicInputs(p => [...p, formState.values]);
//   }
//   // const handlesubmit=(event)=> {
//   //   event.preventDefault();
//   //   var ref=firebase.database().ref('FormStructure');
//   //   ref.on("value",function(snapshot){
//   //   console.log(snapshot.val(),"sdadad"); //datebase
//   //   var Names=(snapshot.val());  //JSON
//   //   setDynamicInputs(Names);
//   // })
    
//   // }
//   const handlesave=()=>{
//     const newdynamicinput = dynamicInputs;
//     console.log(newdynamicinput);
//   }
//   const handleremove=(idx)=>{
//       const values=[...dynamicInputs];
//       values.splice(idx,1);
//       setDynamicInputs(values);
//   }
//   // const handlesubmit=(event)=>{
//   //   event.preventDefault();
//   //   console.log(formState.values,null,2);
//   // }
  
//           return(
//               <>
//                 <div className="App">
//                   <form onSubmit={handleCreate}>
//                     <TextField {...text("name")} label="Create" />
//                     <Radio {...radio("type", "text")}>Text</Radio>
//                     <Radio {...radio("type", "checkbox")}>Checkbox</Radio>
//                     <Radio {...radio("type", "number")}>Number</Radio>
//                     <Radio {...radio("type", "date")}>Date</Radio>
//                     <Radio {...radio("type", "range")}>Range</Radio>
//                     <Radio {...radio("type", "url")}>Url</Radio>
//                     <Radio {...radio("type", "tel")}>Tel</Radio>
//                     <Radio {...radio("type", "search")}>search</Radio>
//                     <Radio {...radio("type", "email")}>email</Radio>
//                     <Radio {...radio("type", "typo")}>typo</Radio>
//                     <Button type="submit" onClick={handleCreate}>create</Button>
//                     <Button onClick={handlesave}>save</Button>
  
//                     <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                     {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}
//                   </form>
//                   <h2>Dynamic form</h2>
//                   <DynamicForm dynamicInputs={dynamicInputs} />
//                   {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//               </div>
//               </>
//           )
//   }
  
//   export default NewDyanamic;



////Emergeany backuop original copy code
// // ORIGINAL CODE COPY

// const NewDyanamic=()=> {
//   const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo,time,week,month}] = useFormState();
//   // const names=[{
//   //   "name": "NAme",
//   //   "type": "text"
//   // },
//   // {
//   //   "name": "Age",
//   //   "type": "text"
//   // }]
  
  
  
//   //   var ref=firebase.database().ref('FormStructure');
//   //   ref.on("value",function(snapshot){
//   //   console.log(snapshot.val(),"sdadad"); //datebase
//   //   var Names=JSON.stringify(snapshot.val());  //JSON
//   //   console.log(Names,"Names");localStorage.setItem('user',Names);
//   // })
//   //   const Idks=JSON.parse(localStorage.getItem('user'));
//   //   console.log(Idks,"IDK");
//     console.log(formState);
  
//   const [dynamicInputs, setDynamicInputs] = useState([]);
//   const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo,time,week,month};
  
//   const DynamicForm=(props)=> {
  
//     const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo,time,week,month}] = useFormState();
//     const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo,time,week,month};
//     return (
//       <form>
//         {props.dynamicInputs.map((inp, idx) => (
//           inp.type==="typo"?(
//             <div>
//             <Typography key={idx} {...mappers[inp.type]} style={{padding: "12px 20px",margin: "8px 0"}}
  
//             >{inp.name}</Typography>
//            <CloseIcon onClick={()=>handleremove(idx)} style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>
//           ):(
//             <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//               name={inp.name} required
//            />
//            <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>
         
//         )))} 
//         {/* <pre>{Idks}</pre> */}
//         {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//         <pre>{JSON.stringify(formState.values)}</pre> 
        
//       </form>
//     );
//   }
  
//   const handleCreate=(event)=> {
//     event.preventDefault();
//     setDynamicInputs(p => [...p, formState.values]);
//   }
//   // const handlesubmit=(event)=> {
//   //   event.preventDefault();
//   //   var ref=firebase.database().ref('FormStructure');
//   //   ref.on("value",function(snapshot){
//   //   console.log(snapshot.val(),"sdadad"); //datebase
//   //   var Names=(snapshot.val());  //JSON
//   //   setDynamicInputs(Names);
//   // })
    
//   // }
//   const handlesave=()=>{
//     const newdynamicinput = dynamicInputs;
//     console.log(newdynamicinput);
//   }
//   const handleremove=(idx)=>{
//       const values=[...dynamicInputs];
//       values.splice(idx,1);
//       setDynamicInputs(values);
//   }
//   // const handlesubmit=(event)=>{
//   //   event.preventDefault();
//   //   console.log(formState.values,null,2);
//   // }
  
//           return(
//               <>
//                 <div className="App">
//                   <form onSubmit={handleCreate}>
//                     <TextField {...text("name")} label="Create" />
//                     <Radio {...radio("type", "text")}>Text</Radio>
//                     <Radio {...radio("type", "checkbox")}>Checkbox</Radio>
//                     <Radio {...radio("type", "number")}>Number</Radio>
//                     <Radio {...radio("type", "date")}>Date</Radio>
//                     <Radio {...radio("type", "range")}>Range</Radio>
//                     <Radio {...radio("type", "url")}>Url</Radio>
//                     <Radio {...radio("type", "tel")}>Tel</Radio>
//                     <Radio {...radio("type", "search")}>search</Radio>
//                     <Radio {...radio("type", "email")}>email</Radio>
//                     <Radio {...radio("type", "typo")}>typo</Radio>
//                     <Radio {...radio("type", "time")}>time</Radio>
//                     <Radio {...radio("type", "week")}>week</Radio>
//                     <Radio {...radio("type", "month")}>month</Radio>
//                     <Button type="submit" onClick={handleCreate}>create</Button>
//                     <Button onClick={handlesave}>save</Button>
  
//                     <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                     {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}
//                   </form>
//                   <h2>Dynamic form</h2>
//                   <form>
//                   <DynamicForm dynamicInputs={dynamicInputs} /> 
//                   {/* <Button onSubmit={handlesubmit}>submit</Button> */}
//                   </form>
//               </div>
//               </>
//           )
//   }
  
//   export default NewDyanamic;





// ORIGINAL CODE COPY (probmen statement 4 testing )

// const NewDyanamic=()=> {
// const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo,time,week,month}] = useFormState();
// // const names=[{
// //   "name": "NAme",
// //   "type": "text"
// // },
// // {
// //   "name": "Age",
// //   "type": "text"
// // }]



// //   var ref=firebase.database().ref('FormStructure');
// //   ref.on("value",function(snapshot){
// //   console.log(snapshot.val(),"sdadad"); //datebase
// //   var Names=JSON.stringify(snapshot.val());  //JSON
// //   console.log(Names,"Names");localStorage.setItem('user',Names);
// // })
// //   const Idks=JSON.parse(localStorage.getItem('user'));
// //   console.log(Idks,"IDK");
//   console.log(formState);

// const [dynamicInputs, setDynamicInputs] = useState([]);
// const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo,time,week,month};

// const DynamicForm=(props)=> {

//   const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo,time,week,month}] = useFormState();
//   const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo,time,week,month};
//   return (
//     <form>
//       {props.dynamicInputs.map((inp, idx) =>{
//         if(inp.type==="text"){
//           return(
//           <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             />
//             <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>
            
//           )
//         }
//         else if(inp.type==="checkbox"){
//          return(
//           <div>
//             <Typography>{inp.name}
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "5%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             /></Typography>
//             <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//             )
//           }
//         else if(inp.type==="number"){
//          return(
//           <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required  pattern="\d+" title="Please add only number here"
//             />
//             <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//             )
//           }
//         else if(inp.type==="date"){
//          return(
//           <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             />
//             <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//             )
//           }
//         else if(inp.type==="range"){
//          return(
//           <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             />
//             <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//             )
//           }
//         else if(inp.type==="url"){
//          return(
//           <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             />
//             <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//             )
//           }
//         else if(inp.type==="tel"){
//         return(
//           <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             />
//             <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//           )
//         }
//         else if(inp.type==="search"){
//           return(
//           <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             />
//             <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//             )
//           } 
//         else if(inp.type==="email"){
//          return(
//           <div>
//           <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             />
//           <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//             )
//           } 
//         else if(inp.type==="typo"){
//          return(
//           <div>
//           <Typography key={idx} {...mappers[inp.type]} style={{padding: "12px 20px",margin: "8px 0"}}
//           >{inp.name}</Typography>
//           <CloseIcon onClick={()=>handleremove(idx)} style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//             )
//           } 
//         else if(inp.type==="time"){
//         return(
//           <div>
//           <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             />
//           <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//           )
//         }
//         else if(inp.type==="week"){
//         return(
//           <div>
//           <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             />
//           <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//           )
//         } 
//         else if(inp.type==="month"){
//         return(
//           <div>
//           <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//              name={inp.name} required
//             />
//           <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>

//           )
//         } 
          

//         else{return(<>invalid input</>)}
//       })} 
//       {/* <pre>{Idks}</pre> */}
//       {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//       <pre>{JSON.stringify(formState.values)}</pre> 
      
//     </form>
//   );
// }

// const handleCreate=(event)=> {
//   event.preventDefault();
//   setDynamicInputs(p => [...p, formState.values]);
// }
// // const handlesubmit=(event)=> {
// //   event.preventDefault();
// //   var ref=firebase.database().ref('FormStructure');
// //   ref.on("value",function(snapshot){
// //   console.log(snapshot.val(),"sdadad"); //datebase
// //   var Names=(snapshot.val());  //JSON
// //   setDynamicInputs(Names);
// // })
  
// // }
// const handlesave=()=>{
//   const newdynamicinput = dynamicInputs;
//   console.log(newdynamicinput);
// }
// const handleremove=(idx)=>{
//     const values=[...dynamicInputs];
//     values.splice(idx,1);
//     setDynamicInputs(values);
// }
// // const handlesubmit=(event)=>{
// //   event.preventDefault();
// //   console.log(formState.values,null,2);
// // }

//         return(
//             <>
//               <div className="App">
//                 <form onSubmit={handleCreate}>
//                   <TextField {...text("name")} label="Create" />
//                   <Radio {...radio("type", "text")}>Text</Radio>
//                   <Radio {...radio("type", "checkbox")}>Checkbox</Radio>
//                   <Radio {...radio("type", "number")}>Number</Radio>
//                   <Radio {...radio("type", "date")}>Date</Radio>
//                   <Radio {...radio("type", "range")}>Range</Radio>
//                   <Radio {...radio("type", "url")}>Url</Radio>
//                   <Radio {...radio("type", "tel")}>Tel</Radio>
//                   <Radio {...radio("type", "search")}>search</Radio>
//                   <Radio {...radio("type", "email")}>email</Radio>
//                   <Radio {...radio("type", "typo")}>typo</Radio>
//                   <Radio {...radio("type", "time")}>time</Radio>
//                   <Radio {...radio("type", "week")}>week</Radio>
//                   <Radio {...radio("type", "month")}>month</Radio>
//                   <Button type="submit" onClick={handleCreate}>create</Button>
//                   <Button onClick={handlesave}>save</Button>

//                   <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                   {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}
//                 </form>
//                 <h2>Dynamic form</h2>
//                 <form>
//                 <DynamicForm dynamicInputs={dynamicInputs} /> 
//                 {/* <Button onSubmit={handlesubmit}>submit</Button> */}
//                 </form>
//             </div>
//             </>
//         )
// }

// export default NewDyanamic;


// // PRACTICE CODE

// const NewDyanamic=({ onSubmit })=> {
//     const [formState, { email, password,text }] = useFormState();
    

// const handelsubmit=(event)=>{
//   event.preventDefault();
//   console.log(formState.values);
// }
//     return (
//       <div>
//         <form onSubmit={handelsubmit}>
//         <input {...email('email')} required />
//         <input {...password('password')} required minLength="8" />
//         <input {...text('text')}type="text" id="country_code" name="country_code"
//           pattern="\d+" title="Three letter country code"/>
//         <button onSubmit={handelsubmit} >Login</button>
//         </form>
//       </div>
      
//     );
  
// }
// export default NewDyanamic;
  
  
  
  





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// UI For Creation of Form

const NewDyanamic = () => {
  const classes = useStyles();
  

  const [
    formState,
    {
      checkbox,
      text,
      radio,
      number,
      date,
      range,
      url,
      tel,
      search,
      email,
      typo,
      time,
      week,
      month
    }
  ] = useFormState();
  const [dynamicInputs, setDynamicInputs] = useState([]);
  const mappers = {
    checkbox,
    text,
    radio,
    number,
    date,
    range,
    url,
    tel,
    search,
    email,
    typo,
    time,
    week,
    month
  };

  const DynamicForm = props => {
    const [
      formState,
      {
        checkbox,
        text,
        radio,
        number,
        date,
        range,
        url,
        tel,
        search,
        email,
        typo,
        time,
        week,
        month
      }
    ] = useFormState();
    const mappers = {
      checkbox,
      text,
      radio,
      number,
      date,
      range,
      url,
      tel,
      search,
      email,
      typo,
      time,
      week,
      month
    };
    return (
      <form>
        {props.dynamicInputs.map((inp, idx) =>
          inp.type === 'typo' ? (
            <div>
              <Typography
                key={idx}
                {...mappers[inp.type]}
                style={{ padding: '12px 20px', margin: '8px 0' }}
               
              >
                {inp.name}
              </Typography>
              <CloseIcon
                onClick={() => handleremove(idx)}
                style={{
                  position: 'relative',
                  top: '12px',
                  left: '10px',
                  margin: '5px 5px 5px 5px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </CloseIcon>
            </div>
          ) : (
            <div>
              <input
                key={idx}
                {...mappers[inp.type](inp.name)}
                placeholder={inp.name} 
                style={{
                  width: '50%',
                  padding: '12px 20px',
                  margin: '8px 0',
                  boxSizing: ' border-box'
                }}
                name={inp.name} 
              />
              <CloseIcon
                onClick={() => handleremove(idx)}
                style={{
                  position: 'relative',
                  top: '12px',
                  left: '10px',
                  margin: '5px 5px 5px 5px',
                  cursor: 'pointer'
                }}
              >
                Remove
              </CloseIcon>
            </div>
          )
          
        )}
        {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
        {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
      </form>
    );
  };

  const handleCreate = event => {
    event.preventDefault();
    setDynamicInputs(p => [...p, formState.values]);
  };
  const handlereset = () => {
    setDynamicInputs([]);
  };
  const handleremove = idx => {
    const values = [...dynamicInputs];
    values.splice(idx, 1);
    setDynamicInputs(values);
  };
  const createForm = () => {
    // const formRef = firebase.database().ref('Form');
    // const form = {
    //    dynamicInputs
    // };
    // formRef.push(form);
    

    // mycode for overriding
    
    const database=firebase.database();
    database.ref('SurveyKshan/FormStructure').set({
      Boards:dynamicInputs
      });

  };

/////STRUCTRCTURE 
// const database=firebase.database();
//     database.ref('FormStructure').set({
//       Boards:dynamicInputs,
//       Data:{
//         Boards:
//         {Epic:"Epic",Story:"Story",Deal:"Deal",Lead:"lead"}
//       }
//       });




  // // initial code for overriding    
  //   const database=firebase.database();
  //   database.ref().set({
  //     FormStructure:dynamicInputs,
  //     Data:"Data"
  //     });

  // };
  // const handlesubmit=(event)=>{
  //   event.preventDefault();
  //   console.log(formState.values,null,2);
  // }
  return (
    <>
    
      <div className={classes.container}>
        <Card className={classes.card1}>
          <div>
            <div className="App">
              <form onSubmit={handleCreate}>
                <TextField
                  {...text('name')}
                  label="Create"
                  style={{ width: '100%',backgroundImage:"linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)"}}
                  variant="filled"
                  required
                  inputProps={{ pattern:"^[A-Za-z0-9 _-]*$" }}
                  title="CREATE"
                />
                {/* <Button type="submit">sdds</Button> */}
                {/* <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
                   <pre>{JSON.stringify(formState, null, 2)}</pre> */}
                   <Button type="submit" onSubmit={handleCreate} style={{ width: '100%' }}>
          Create
        </Button>
              </form>
              <Typography variant="h5">Dynamic Forms</Typography>
              <DynamicForm dynamicInputs={dynamicInputs} />
              {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
            </div>
          </div>
        </Card>
        <Card className={classes.card2}>
          <div style={{ marginTop: '10px' }}>
            <FormLabel component="legend">Select</FormLabel>
            <FormControlLabel
              label="Textfield"
              control={<Radio {...radio('type', 'text')}>Text</Radio>}
            />
            <FormControlLabel
              label="Checkbox"
              control={<Radio {...radio('type', 'checkbox')}>Checkbox</Radio>}
            />
            <FormControlLabel
              label="Number"
              control={<Radio {...radio('type', 'number')}>Number</Radio>}
            />
            <FormControlLabel
              label="Date"
              control={<Radio {...radio('type', 'date')}>Date</Radio>}
            />
            <FormControlLabel
              label="Range"
              control={<Radio {...radio('type', 'range')}>Range</Radio>}
            />
            <FormControlLabel
              label="Url"
              control={<Radio {...radio('type', 'url')}>Url</Radio>}
            />
            <FormControlLabel
              label="Label"
              control={<Radio {...radio('type', 'tel')}>Tel</Radio>}
            />
            <FormControlLabel
              label="Description"
              control={<Radio {...radio('type', 'search')}>Search</Radio>}
            />
            <FormControlLabel
              label="Email"
              control={<Radio {...radio('type', 'email')}>email</Radio>}
            />
            <FormControlLabel
              label="Typography"
              control={<Radio {...radio('type', 'typo')}>typo</Radio>}
            />
            <FormControlLabel
              label="Time"
              control={<Radio {...radio('type', 'time')}>Time</Radio>}
            />
            <FormControlLabel
              label="Week"
              control={<Radio {...radio('type', 'week')}>Week</Radio>}
            />
            <FormControlLabel
              label="Month"
              control={<Radio {...radio('type', 'month')}>Month</Radio>}
            />
          </div>
        </Card>
      </div>

      <Card className={classes.buttondiv}>
        <Button onClick={createForm} style={{ width: '100%' }}>
          Save
        </Button>
        <Button onClick={handlereset} style={{ width: '100%' }}>
          Reset
        </Button>
        <Button type="submit" onClick={handleCreate} style={{ width: '100%' }}>
          Create
        </Button>
      </Card>
      <br />
      <br />
      <ShowDynamic/>
    </>
  );
};

export default NewDyanamic;

// // UI For Form Filling

// const ShowDynamic = () => {
//   const classes = useStyles();
  

//   // const [
//   //   formState,
//   //   {
//   //     checkbox,
//   //     text,
//   //     radio,
//   //     number,
//   //     date,
//   //     range,
//   //     url,
//   //     tel,
//   //     search,
//   //     email,
//   //     typo
//   //   }
//   // ] = useFormState();
  
  
// //   var ref=firebase.database().ref('FormStructure');
// //   ref.on("value",function(snapshot){
// //   console.log(snapshot.val(),"sdadad");
// //   var Names=JSON.stringify(snapshot.val());
// //   console.log(Names);localStorage.setItem('user',Names);
// // })
// //   const IDK=JSON.parse(localStorage.getItem('user'));
  
// //   const [dynamicInputs, setDynamicInputs] = useState(IDK);


  
// const [dynamicInputs, setDynamicInputs] = useState([]);

// useEffect(()=>{
//   var ref=firebase.database().ref('FormStructure');
//   ref.on("value",function(snapshot){
//   console.log(snapshot.val(),"sdadad");
//   var Names=(snapshot.val());
//   setDynamicInputs(Names);
// })
  
// },[])


//   // const mappers = {
//   //   checkbox,
//   //   text,
//   //   radio,
//   //   number,
//   //   date,
//   //   range,
//   //   url,
//   //   tel,
//   //   search,
//   //   email,
//   //   typo
//   // };

//   const DynamicForm = props => {
//     const [
//       formState,
//       {
//         checkbox,
//         text,
//         radio,
//         number,
//         date,
//         range,
//         url,
//         tel,
//         search,
//         email,
//         typo
//       }
//     ] = useFormState();
    
// // const [
// //       formState2,
// //       {
// //         checkbox,
// //         text,
// //         radio,
// //         number,
// //         date,
// //         range,
// //         url,
// //         tel,
// //         search,
// //         email,
// //         typo
// //       }
// //     ] = useFormState();

//     const mappers = {
//       checkbox,
//       text,
//       radio,
//       number,
//       date,
//       range,
//       url,
//       tel,
//       search,
//       email,
//       typo
//     };
//     const handlesubmit=(event)=>{
//       event.preventDefault();
//       console.log(formState.values);
//       const database=firebase.database();
//       database.ref('Data').set({
//         UserData:formState.values
        
//         });
//       formState.reset(dynamicInputs);
      
//     }
//     return (
//     <>
//       <form>
//         {props.dynamicInputs.map((inp, idx) =>
//           inp.type === 'typo' ? ( 
//             <div>
//               <Typography
//                 key={idx}
//                 {...mappers[inp.type]}
//                 style={{ padding: '12px 20px', margin: '8px 0' }}
//               >
//                 {inp.name}
//               </Typography>
//             </div>
//           ) : (
//             <div>
//               <input
//                 key={idx}
//                 {...mappers[inp.type](inp.name)}
//                 placeholder={inp.name}
//                 style={{
//                   width: '50%',
//                   padding: '12px 20px',
//                   margin: '8px 0',
//                   boxSizing: ' border-box'
//                 }}
//                 name={inp.name} required
//               />
              
//             </div>
//           )
//         )}
//         {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//         {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
        
//       </form>
      
//         <Button type="submit" onClick={handlesubmit} style={{ width: '100%' }} className={classes.submit}>
//           Submit
//         </Button>
      
//     </>
//     );
//   };
// // var ref = firebase.database().ref();

// // ref.on("value", function(snapshot) {
// //    console.log(snapshot.val());
// // }, function (error) {
// //    console.log("Error: " + error.code);
// // });
// // var formRef = firebase.database().ref("dynamicInputs/");

// // formRef.on("child_added", function(data, prevChildKey) {
// //    var newField = data.val();
// //    console.log("Field: " + newField.name);
// //    console.log("Type: " + newField.type);

// //    console.log("Previous Player: " + prevChildKey);
// // });


// ///////////////////////////////////
// // var ref = firebase.database().ref();

// // ref.on("value", function(snapshot) {
// //    console.log(snapshot.val(),"sds");
// // }, function (error) {
// //    console.log("Error: " + error.code);
// // });

// // var ref=firebase.database().ref('FormStructure');
// // ref.on("value",function(snapshot){
// //   console.log(snapshot.val(),"sdadad");
// //   const Names=JSON.stringify(snapshot.val());
// //   console.log(Names,"JSON");
// // })






  
 
//   // const handlesubmit=(event)=>{
//   //   event.preventDefault();
//   //   console.log(formState.values);
//   //   const database=firebase.database();
//   //   database.ref('Data').set({
//   //     UserData:formState.values
      
//   //     });console.log(formState.errors);
//   // }
//   return (
//     <>
//       <div className={classes.container}>
//         <Card className={classes.card3}>
//           <div>
//             <div className="App">
//               <Typography variant="h5">Show Dynamic Forms</Typography>
//               <form>
//                 <DynamicForm dynamicInputs={dynamicInputs} />
//                 {/* <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                  <pre>{JSON.stringify(formState, null, 2)}</pre> */}
                 
//               </form>
              
              
//               {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//             </div>
//           </div>
//         </Card>
//       </div>

//       {/* <Card className={classes.buttondiv}>
//         <Button type="submit" onClick={handlesubmit} style={{ width: '100%' }}>
//           Submit
//         </Button>
//       </Card> */}
//     </>
//   );
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// /////PREV DATA IS SAVED BUT UI NOT CHANGE (REVIEW UNIT) (problem statement 4 testing)

// UI For Form Filling

const ShowDynamic = ({onSubmit}) => {
  const classes = useStyles();
   
  const [dynamicInputs, setDynamicInputs] = useState([]);
  

  useEffect(()=>{
    var ref=firebase.database().ref('SurveyKshan/FormStructure/Boards');
    ref.on("value",function(snapshot){
    console.log(snapshot.val(),"sdadad");
    var Names=(snapshot.val());
    setDynamicInputs(Names);
  })
    
  },[])
  
      const [
        formState,
        {
          checkbox,
          text,
          radio,
          number,
          date,
          range,
          url,
          tel,
          search,
          email,
          typo,
          time,
          week,
          month
        }
      ] = useFormState();
  
      const mappers = {
        checkbox,
        text,
        radio,
        number,
        date,
        range,
        url,
        tel,
        search,
        email,
        typo,
        time,
        week,
        month
      };
      const [age, setAge] = React.useState('');
      const [open, setOpen] = React.useState(false);
      const handleChange = (event) => {
        setAge(event.target.value);
      };
     
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
      

      const handlesubmit=(event)=>{
        event.preventDefault();
        console.log(formState.values);
        // const database=firebase.database();
        // database.ref('Data').set({
        //   UserData:formState.values
          
        //   });
        

        //Working 
        // const database=firebase.database().ref('Data');
        // const Data={
        //  UserData:formState.values
        // }
        // database.push(Data);
        
        // formState.reset(dynamicInputs);

        //firebase logic
        // const database=firebase.database().ref('Data');
        // const UserData=database.push();
        // UserData.set({
        //   Epic:formState.values,

        // });
        // formState.reset(dynamicInputs);
        
        //prev logic
      // const formRef = firebase.database().ref('Form');
      // const form = {
      //    dynamicInputs
      // };
      // formRef.push(form);

      if(age===10){
        const database=firebase.database().ref('SurveyKshan/Data/Group/Engineering');
        const UserData=database.push();
        UserData.set({
          UserData:formState.values,

        });
        formState.reset(dynamicInputs);
        setOpen(true);
      }
      else if(age===20){
        const database=firebase.database().ref('SurveyKshan/Data/Group/Medical');
        const UserData=database.push();
        UserData.set({
          UserData:formState.values,

        });
        formState.reset(dynamicInputs);
        setOpen(true);
      }
      else if(age===30){
        const database=firebase.database().ref('SurveyKshan/Data/Group/Arts');
        const UserData=database.push();
        UserData.set({
          UserData:formState.values,

        });
        formState.reset(dynamicInputs);
        setOpen(true);
      }
      else if(age===40){
        const database=firebase.database().ref('SurveyKshan/Data/Group/Commerce');
        const UserData=database.push();
        UserData.set({
          UserData:formState.values,

        });
        formState.reset(dynamicInputs);
        setOpen(true);
      }
      else{alert("Please Select Boards");}
      }
      
     
  
    return (
      <>
         <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}  anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
          <Alert onClose={handleClose} severity="success">
            Data saved successfully!
          </Alert>
        </Snackbar>

        <FormControl style={{width:"10%"}}>
        <InputLabel id="demo-simple-select-label">Boards</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Epic</MenuItem>
          <MenuItem value={20}>Story</MenuItem>
          <MenuItem value={30}>Deal</MenuItem>
          <MenuItem value={40}>Lead</MenuItem>
        </Select>
      </FormControl>

        <div className={classes.container}>
          <Card className={classes.card3}>
            <div>
              <div className="App">
                <Typography variant="h5">Show Dynamic Forms</Typography>
                <form onSubmit={handlesubmit}>
                {dynamicInputs.map((inp, idx) =>{
            if(inp.type==="text"){
              return(
              <div>
              
                <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} required label={inp.name} title={inp.name} variant="outlined"
                />
              
              </div>
                
              )
            }
            else if(inp.type==="checkbox"){
            return(
              <div>
                <Typography>{inp.name}
                <Checkbox key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "5%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} title={inp.name}
                /></Typography>
              
              </div>

                )
              }
            else if(inp.type==="number"){
            return(
              <div>
                <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} required  pattern="\d+" title="Please add only number here" label={inp.name} variant="outlined"
                />
              
              </div>

                )
              }
            else if(inp.type==="date"){
            return(
              <div> 
              
                <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} required label={inp.name} title={inp.name} variant="outlined"
                />
              
              </div>

                )
              }
            else if(inp.type==="range"){
            return(
              <div>
              <Typography>{inp.name} 
                <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} required label={inp.name} title={inp.name}
                />
              </Typography>
              </div>

                )
              }
            else if(inp.type==="url"){
            return(
              <div>
                <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} required label={inp.name} title={inp.name} variant="outlined"
                />
              
              </div>

                )
              }
            else if(inp.type==="tel"){///Using this For Label (Monitor Textfield in FormState.values as well as in database)
            return(
              <div>
                <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px", boxSizing:" border-box",background: "rgba(0, 0, 0, 0)",border:"none",fontSize:"20px"}}
                name={inp.name} disabled 
                />
              
              </div>

              )
            }
            else if(inp.type==="search"){///Using this For text multilined (type will be search in FormState.values as well as in database)
              return(
              <div>
                <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} multiline required label={inp.name} title={inp.name} variant="outlined"
                />
                
              </div>

                )
              } 
            else if(inp.type==="email"){
            return(
              <div>
              <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} required label={inp.name} title={inp.name} variant="outlined"
              />
            
              </div>

                )
              } 
            else if(inp.type==="typo"){
            return(
              <div>
              <Typography key={idx} {...mappers[inp.type]} style={{padding: "12px 20px",margin: "8px 0"}} variant="h4"
              >{inp.name}</Typography>
              
              </div>

                )
              } 
            else if(inp.type==="time"){
            return(
              <div>
             
              <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} required label={inp.name} title={inp.name} variant="outlined"
              />
              
              </div>

              )
            }
            else if(inp.type==="week"){
            return(
              <div>
              
              <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} required label={inp.name} title={inp.name} variant="outlined"
              />
              
              </div>

              )
            } 
            else if(inp.type==="month"){
            return(
              <div>
              
              <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} required label={inp.name} title={inp.name} variant="outlined"
              />
              
              {/* <Link href="#" target="_blank">{inp.name}</Link> */}
              {/* <FormControlLabel
               control={
              <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} 
                name={inp.name} required
                style={{width: "50%",padding:"10px",margin:"10px"}}
              />
              } 
              label={inp.name} labelPlacement="start" style={{width:"100%"}} /> */}
              {/* <InputLabel color="secondary">{inp.name}
              <TextField key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
                name={inp.name} required
              />
              </InputLabel> */}
              </div>

              )
            } 
              

            else{return(<>invalid input</>)}
      })}
                    {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
                    {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
                    <Button type="submit" onSubmit={handlesubmit} style={{ width: '100%' }}>
            Submit
          </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
  
        <Card className={classes.buttondiv}>
          <Button type="submit" onClick={handlesubmit} style={{ width: '100%' }}>
            Submit
          </Button>
        </Card>
      </>
    );
  };
  
  
// // /////PREV DATA IS SAVED BUT UI NOT CHANGE (REVIEW UNIT)

// // UI For Form Filling

// const ShowDynamic = ({onSubmit}) => {
// const classes = useStyles();
 
// const [dynamicInputs, setDynamicInputs] = useState([]);

// useEffect(()=>{
//   var ref=firebase.database().ref('FormStructure');
//   ref.on("value",function(snapshot){
//   console.log(snapshot.val(),"sdadad");
//   var Names=(snapshot.val());
//   setDynamicInputs(Names);
// })
  
// },[])

//     const [
//       formState,
//       {
//         checkbox,
//         text,
//         radio,
//         number,
//         date,
//         range,
//         url,
//         tel,
//         search,
//         email,
//         typo
//       }
//     ] = useFormState();

//     const mappers = {
//       checkbox,
//       text,
//       radio,
//       number,
//       date,
//       range,
//       url,
//       tel,
//       search,
//       email,
//       typo
//     };
//     const handlesubmit=(event)=>{
//       event.preventDefault();
//       console.log(formState.values);
//       const database=firebase.database();
//       database.ref('Data').set({
//         UserData:formState.values
        
//         });
      
//       formState.reset(dynamicInputs);
//     // const formRef = firebase.database().ref('Form');
//     // const form = {
//     //    dynamicInputs
//     // };
//     // formRef.push(form);
      
//     }
    

//   return (
//     <>
//       <div className={classes.container}>
//         <Card className={classes.card3}>
//           <div>
//             <div className="App">
//               <Typography variant="h5">Show Dynamic Forms</Typography>
//               <form onSubmit={handlesubmit}>
//                 {dynamicInputs.map((inp, idx) =>
//                   inp.type === 'typo' ? ( 
//                     <div>
//                       <Typography
//                         key={idx}
//                         {...mappers[inp.type]}
//                         style={{ padding: '12px 20px', margin: '8px 0' }}
//                       >
//                         {inp.name}
//                       </Typography>
//                     </div>
//                   ) : (
//                     <div>
//                       <input
//                         key={idx}
//                         {...mappers[inp.type](inp.name)}
//                         placeholder={inp.name}
//                         style={{
//                           width: '50%',
//                           padding: '12px 20px',
//                           margin: '8px 0',
//                           boxSizing: ' border-box'
//                         }}
//                         name={inp.name} required
//                       />
                      
//                     </div>
//                   )
//                 )}
//                   {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//                   {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
                 
//               </form>
//             </div>
//           </div>
//         </Card>
//       </div>

//       <Card className={classes.buttondiv}>
//         <Button type="submit" onClick={handlesubmit} style={{ width: '100%' }}>
//           Submit
//         </Button>
//       </Card>
//     </>
//   );
// };




















///// v3 with still incorrect button alingment but with formstate.reset option added
// UI For Form Filling

// const ShowDynamic = () => {
//   const classes = useStyles();
  

//   const [
//     formState,
//     {
//       checkbox,
//       text,
//       radio,
//       number,
//       date,
//       range,
//       url,
//       tel,
//       search,
//       email,
//       typo
//     }
//   ] = useFormState();
  
  
// //   var ref=firebase.database().ref('FormStructure');
// //   ref.on("value",function(snapshot){
// //   console.log(snapshot.val(),"sdadad");
// //   var Names=JSON.stringify(snapshot.val());
// //   console.log(Names);localStorage.setItem('user',Names);
// // })
// //   const IDK=JSON.parse(localStorage.getItem('user'));
  
// //   const [dynamicInputs, setDynamicInputs] = useState(IDK);


  
// const [dynamicInputs, setDynamicInputs] = useState([]);

// useEffect(()=>{
//   var ref=firebase.database().ref('FormStructure');
//   ref.on("value",function(snapshot){
//   console.log(snapshot.val(),"sdadad");
//   var Names=(snapshot.val());
//   setDynamicInputs(Names);
// })
  
// },[])


//   // const mappers = {
//   //   checkbox,
//   //   text,
//   //   radio,
//   //   number,
//   //   date,
//   //   range,
//   //   url,
//   //   tel,
//   //   search,
//   //   email,
//   //   typo
//   // };

//   const DynamicForm = props => {
//     const [
//       formState,
//       {
//         checkbox,
//         text,
//         radio,
//         number,
//         date,
//         range,
//         url,
//         tel,
//         search,
//         email,
//         typo
//       }
//     ] = useFormState();
    
// // const [
// //       formState2,
// //       {
// //         checkbox,
// //         text,
// //         radio,
// //         number,
// //         date,
// //         range,
// //         url,
// //         tel,
// //         search,
// //         email,
// //         typo
// //       }
// //     ] = useFormState();

//     const mappers = {
//       checkbox,
//       text,
//       radio,
//       number,
//       date,
//       range,
//       url,
//       tel,
//       search,
//       email,
//       typo
//     };
//     const handlesubmit=(event)=>{
//       event.preventDefault();
//       console.log(formState.values);
//       const database=firebase.database();
//       database.ref('Data').set({
//         UserData:formState.values
        
//         });
//       formState.reset(dynamicInputs);
      
//     }
//     return (
//     <>
//       <form>
//         {props.dynamicInputs.map((inp, idx) =>
//           inp.type === 'typo' ? ( 
//             <div>
//               <Typography
//                 key={idx}
//                 {...mappers[inp.type]}
//                 style={{ padding: '12px 20px', margin: '8px 0' }}
//               >
//                 {inp.name}
//               </Typography>
//             </div>
//           ) : (
//             <div>
//               <input
//                 key={idx}
//                 {...mappers[inp.type](inp.name)}
//                 placeholder={inp.name}
//                 style={{
//                   width: '50%',
//                   padding: '12px 20px',
//                   margin: '8px 0',
//                   boxSizing: ' border-box'
//                 }}
//                 name={inp.name} required
//               />
              
//             </div>
//           )
//         )}
//         {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//         {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
        
//       </form>
      
//         <Button type="submit" onClick={handlesubmit} style={{ width: '100%' }}>
//           Submit
//         </Button>
      
//     </>
//     );
//   };
// // var ref = firebase.database().ref();

// // ref.on("value", function(snapshot) {
// //    console.log(snapshot.val());
// // }, function (error) {
// //    console.log("Error: " + error.code);
// // });
// // var formRef = firebase.database().ref("dynamicInputs/");

// // formRef.on("child_added", function(data, prevChildKey) {
// //    var newField = data.val();
// //    console.log("Field: " + newField.name);
// //    console.log("Type: " + newField.type);

// //    console.log("Previous Player: " + prevChildKey);
// // });


// ///////////////////////////////////
// // var ref = firebase.database().ref();

// // ref.on("value", function(snapshot) {
// //    console.log(snapshot.val(),"sds");
// // }, function (error) {
// //    console.log("Error: " + error.code);
// // });

// // var ref=firebase.database().ref('FormStructure');
// // ref.on("value",function(snapshot){
// //   console.log(snapshot.val(),"sdadad");
// //   const Names=JSON.stringify(snapshot.val());
// //   console.log(Names,"JSON");
// // })






  
 
//   // const handlesubmit=(event)=>{
//   //   event.preventDefault();
//   //   console.log(formState.values);
//   //   const database=firebase.database();
//   //   database.ref('Data').set({
//   //     UserData:formState.values
      
//   //     });console.log(formState.errors);
//   // }
//   return (
//     <>
//       <div className={classes.container}>
//         <Card className={classes.card3}>
//           <div>
//             <div className="App">
//               <Typography variant="h5">Show Dynamic Forms</Typography>
//               <form>
//                 <DynamicForm dynamicInputs={dynamicInputs} />
//                 {/* <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                  <pre>{JSON.stringify(formState, null, 2)}</pre> */}
                 
//               </form>
              
              
//               {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//             </div>
//           </div>
//         </Card>
//       </div>

//       <Card className={classes.buttondiv}>
//         {/* <Button type="submit" onClick={handlesubmit} style={{ width: '100%' }}>
//           Submit
//         </Button> */}
//       </Card>
//     </>
//   );
// };























////BACKUP WORKING FORM FILLING CODE FOR WITH INCORRECT SUBMIT BUTTON FORMAT
// UI For Form Filling

// const ShowDynamic = () => {
//   const classes = useStyles();
  

//   const [
//     formState,
//     {
//       checkbox,
//       text,
//       radio,
//       number,
//       date,
//       range,
//       url,
//       tel,
//       search,
//       email,
//       typo
//     }
//   ] = useFormState();
  
  
// //   var ref=firebase.database().ref('FormStructure');
// //   ref.on("value",function(snapshot){
// //   console.log(snapshot.val(),"sdadad");
// //   var Names=JSON.stringify(snapshot.val());
// //   console.log(Names);localStorage.setItem('user',Names);
// // })
// //   const IDK=JSON.parse(localStorage.getItem('user'));
  
// //   const [dynamicInputs, setDynamicInputs] = useState(IDK);


  
// const [dynamicInputs, setDynamicInputs] = useState([]);

// useEffect(()=>{
//   var ref=firebase.database().ref('FormStructure');
//   ref.on("value",function(snapshot){
//   console.log(snapshot.val(),"sdadad");
//   var Names=(snapshot.val());
//   setDynamicInputs(Names);
// })
  
// },[])


//   // const mappers = {
//   //   checkbox,
//   //   text,
//   //   radio,
//   //   number,
//   //   date,
//   //   range,
//   //   url,
//   //   tel,
//   //   search,
//   //   email,
//   //   typo
//   // };

//   const DynamicForm = props => {
//     const [
//       formState,
//       {
//         checkbox,
//         text,
//         radio,
//         number,
//         date,
//         range,
//         url,
//         tel,
//         search,
//         email,
//         typo
//       }
//     ] = useFormState();
    
// // const [
// //       formState2,
// //       {
// //         checkbox,
// //         text,
// //         radio,
// //         number,
// //         date,
// //         range,
// //         url,
// //         tel,
// //         search,
// //         email,
// //         typo
// //       }
// //     ] = useFormState();

//     const mappers = {
//       checkbox,
//       text,
//       radio,
//       number,
//       date,
//       range,
//       url,
//       tel,
//       search,
//       email,
//       typo
//     };
//     const handlesubmit=(event)=>{
//       event.preventDefault();
//       console.log(formState.values);
//       const database=firebase.database();
//       database.ref('Data').set({
//         UserData:formState.values
        
//         });
//     }
//     return (
//       <form>
//         {props.dynamicInputs.map((inp, idx) =>
//           inp.type === 'typo' ? ( 
//             <div>
//               <Typography
//                 key={idx}
//                 {...mappers[inp.type]}
//                 style={{ padding: '12px 20px', margin: '8px 0' }}
//               >
//                 {inp.name}
//               </Typography>
//             </div>
//           ) : (
//             <div>
//               <input
//                 key={idx}
//                 {...mappers[inp.type](inp.name)}
//                 placeholder={inp.name}
//                 style={{
//                   width: '50%',
//                   padding: '12px 20px',
//                   margin: '8px 0',
//                   boxSizing: ' border-box'
//                 }}
//                 name={inp.name} required
//               />
              
//             </div>
//           )
//         )}
//         {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//         {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
//         <Button type="submit" onClick={handlesubmit} style={{ width: '100%' }} className={classes.submit}>
//           Submit
//         </Button>
//       </form>
//     );
//   };
// // var ref = firebase.database().ref();

// // ref.on("value", function(snapshot) {
// //    console.log(snapshot.val());
// // }, function (error) {
// //    console.log("Error: " + error.code);
// // });
// // var formRef = firebase.database().ref("dynamicInputs/");

// // formRef.on("child_added", function(data, prevChildKey) {
// //    var newField = data.val();
// //    console.log("Field: " + newField.name);
// //    console.log("Type: " + newField.type);

// //    console.log("Previous Player: " + prevChildKey);
// // });


// ///////////////////////////////////
// // var ref = firebase.database().ref();

// // ref.on("value", function(snapshot) {
// //    console.log(snapshot.val(),"sds");
// // }, function (error) {
// //    console.log("Error: " + error.code);
// // });

// // var ref=firebase.database().ref('FormStructure');
// // ref.on("value",function(snapshot){
// //   console.log(snapshot.val(),"sdadad");
// //   const Names=JSON.stringify(snapshot.val());
// //   console.log(Names,"JSON");
// // })






  
 
//   // const handlesubmit=(event)=>{
//   //   event.preventDefault();
//   //   console.log(formState.values);
//   //   const database=firebase.database();
//   //   database.ref('Data').set({
//   //     UserData:formState.values
      
//   //     });
//   // }
//   return (
//     <>
//       <div className={classes.container}>
//         <Card className={classes.card3}>
//           <div>
//             <div className="App">
//               <Typography variant="h5">Show Dynamic Forms</Typography>
//               <form>
//                 <DynamicForm dynamicInputs={dynamicInputs} />
//                 {/* <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                  <pre>{JSON.stringify(formState, null, 2)}</pre> */}
                 
//               </form>
              
              
//               {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//             </div>
//           </div>
//         </Card>
//       </div>

//       <Card className={classes.buttondiv}>
//         {/* <Button type="submit" onClick={handlesubmit} style={{ width: '100%' }}>
//           Submit
//         </Button> */}
//       </Card>
//     </>
//   );
// };





















/////BACKUP CODE FOR SHOEW DYNAMIC FORMS
// UI For Form Filling

// const ShowDynamic = () => {
//   const classes = useStyles();
  

//   const [
//     formState,
//     {
//       checkbox,
//       text,
//       radio,
//       number,
//       date,
//       range,
//       url,
//       tel,
//       search,
//       email,
//       typo
//     }
//   ] = useFormState();
  
  
// //   var ref=firebase.database().ref('FormStructure');
// //   ref.on("value",function(snapshot){
// //   console.log(snapshot.val(),"sdadad");
// //   var Names=JSON.stringify(snapshot.val());
// //   console.log(Names);localStorage.setItem('user',Names);
// // })
// //   const IDK=JSON.parse(localStorage.getItem('user'));
  
// //   const [dynamicInputs, setDynamicInputs] = useState(IDK);


  
// const [dynamicInputs, setDynamicInputs] = useState([]);

// useEffect(()=>{
//   var ref=firebase.database().ref('FormStructure');
//   ref.on("value",function(snapshot){
//   console.log(snapshot.val(),"sdadad");
//   var Names=(snapshot.val());
//   setDynamicInputs(Names);
// })
  
// },[])


//   // const mappers = {
//   //   checkbox,
//   //   text,
//   //   radio,
//   //   number,
//   //   date,
//   //   range,
//   //   url,
//   //   tel,
//   //   search,
//   //   email,
//   //   typo
//   // };

//   const DynamicForm = props => {
//     const [
//       formState,
//       {
//         checkbox,
//         text,
//         radio,
//         number,
//         date,
//         range,
//         url,
//         tel,
//         search,
//         email,
//         typo
//       }
//     ] = useFormState();
    
// // const [
// //       formState2,
// //       {
// //         checkbox,
// //         text,
// //         radio,
// //         number,
// //         date,
// //         range,
// //         url,
// //         tel,
// //         search,
// //         email,
// //         typo
// //       }
// //     ] = useFormState();

//     const mappers = {
//       checkbox,
//       text,
//       radio,
//       number,
//       date,
//       range,
//       url,
//       tel,
//       search,
//       email,
//       typo
//     };
//     return (
//       <form>
//         {props.dynamicInputs.map((inp, idx) =>
//           inp.type === 'typo' ? ( 
//             <div>
//               <Typography
//                 key={idx}
//                 {...mappers[inp.type]}
//                 style={{ padding: '12px 20px', margin: '8px 0' }}
//               >
//                 {inp.name}
//               </Typography>
//             </div>
//           ) : (
//             <div>
//               <input
//                 key={idx}
//                 {...mappers[inp.type](inp.name)}
//                 placeholder={inp.name}
//                 style={{
//                   width: '50%',
//                   padding: '12px 20px',
//                   margin: '8px 0',
//                   boxSizing: ' border-box'
//                 }}
//                 name={inp.name} 
//               />
              
//             </div>
//           )
//         )}
//         {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//         {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
//       </form>
//     );
//   };
// // var ref = firebase.database().ref();

// // ref.on("value", function(snapshot) {
// //    console.log(snapshot.val());
// // }, function (error) {
// //    console.log("Error: " + error.code);
// // });
// // var formRef = firebase.database().ref("dynamicInputs/");

// // formRef.on("child_added", function(data, prevChildKey) {
// //    var newField = data.val();
// //    console.log("Field: " + newField.name);
// //    console.log("Type: " + newField.type);

// //    console.log("Previous Player: " + prevChildKey);
// // });


// ///////////////////////////////////
// // var ref = firebase.database().ref();

// // ref.on("value", function(snapshot) {
// //    console.log(snapshot.val(),"sds");
// // }, function (error) {
// //    console.log("Error: " + error.code);
// // });

// // var ref=firebase.database().ref('FormStructure');
// // ref.on("value",function(snapshot){
// //   console.log(snapshot.val(),"sdadad");
// //   const Names=JSON.stringify(snapshot.val());
// //   console.log(Names,"JSON");
// // })






  
 
//   const handlesubmit=(event)=>{
//     event.preventDefault();
//     console.log(formState.values);
//     const database=firebase.database();
//     database.ref('Data').set({
//       UserData:formState.values
      
//       });
//   }
//   return (
//     <>
//       <div className={classes.container}>
//         <Card className={classes.card3}>
//           <div>
//             <div className="App">
//               <Typography variant="h5">Show Dynamic Forms</Typography>
//               <form onSubmit={handlesubmit}>
//                 <DynamicForm dynamicInputs={dynamicInputs} />
//                 {/* <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                  <pre>{JSON.stringify(formState, null, 2)}</pre> */}
                 
//               </form>
              
              
//               {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//             </div>
//           </div>
//         </Card>
//       </div>

//       <Card className={classes.buttondiv}>
//         <Button type="submit" onClick={handlesubmit} style={{ width: '100%' }}>
//           Submit
//         </Button>
//       </Card>
//     </>
//   );
// };











/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



















// import React, { useEffect, useState } from "react";
// import { Container, Typography, TextField, Button, AccordionSummary, AccordionDetails } from "@material-ui/core";
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import Card from '@material-ui/core/Card';
// import SaveIcon from '@material-ui/icons/Save';
// import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import { v4 as uuidv4 } from 'uuid';
// import InputLabel from '@material-ui/core/InputLabel';
// import CloseIcon from '@material-ui/icons/Close';
// import IconButton from '@material-ui/core/IconButton';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import { Accordion } from "@material-ui/core";
// import PropTypes from 'prop-types';

// import AppBar from '@material-ui/core/AppBar';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// import Box from '@material-ui/core/Box';
// import RemoveIcon from '@material-ui/icons/Remove';
// import AddIcon from '@material-ui/icons/Add';
// import Paper from '@material-ui/core/Paper';
// import CreateIcon from '@material-ui/icons/Create';
// import { Dyanamic, Dyanamic2, Dyanamic3 } from "./Dyanamic";
// import { Component } from "react";
// import { useFormState } from "react-use-form-state";
// import { typography } from "@material-ui/system";

// const useStyles = makeStyles((theme) => ({
//     container:{
//             display:"flex",
//             justifyContent:"space-between",
//             width:"100%",
//             height:"500px",
//             borderRadius:"10px",
            
//     },
//     card1:{
        
//         backgroundColor:"#A9C9FF",
//         backgroundImage:" linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)",
//         width:"1150px",
//         borderRadius:"10px",
//         margin:"10px 10px 10px 10px",
//         textAlign: "center",
          
//     },
//     card2:{
//         backgroundColor:"#FAACA8",
//         backgroundImage:" linear-gradient(19deg, #FAACA8 0%, #DDD6F3 46%)",
//         width:"180px",
//         borderRadius:"10px",
//         margin:"10px 10px 10px 10px",
//         textAlign:"center",
//     },
//     buttondiv:{
//         display:"flex",
//         justifyContent:"flex-end",
//         backgroundColor:"#FAACA8",
//         backgroundImage:"linear-gradient(19deg, #FAACA8 0%, #DDD6F3 100%)",
//         borderRadius:"5px",
//         padding:"5px 5px 5px 5px",
//         margin:"5px 10px 10px 10px",
//         height:"50px",
//     }

      
//   }));

  

// const NewDyanamic=()=> {
// const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo }] = useFormState();
// const [dynamicInputs, setDynamicInputs] = useState([]);   
// const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo };


// const DynamicForm=(props)=> {
  
//   const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo }] = useFormState();
//   const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo };
//   return (
//     <form>
//       {props.dynamicInputs.map((inp, idx) => (
//         inp.type==="typo"?(
//           <div>
//           <Typography key={idx} {...mappers[inp.type]} style={{padding: "12px 20px",margin: "8px 0"}}
            
//           >{inp.name}</Typography>
//          <CloseIcon onClick={()=>handleremove(idx)} style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//         </div>
//         ):(
//           <div>
//           <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//             name={inp.name} 
//          />
//          <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//         </div>
        
//       )))}
//       {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//       <pre>{JSON.stringify(formState.values)}</pre> 
//     </form>
//   );
// }

// const handleCreate=(event)=> {
//   event.preventDefault();
//   setDynamicInputs(p => [...p, formState.values]);
// }
// const handlesave=()=>{
//   const newdynamicinput = dynamicInputs;
//   console.log(newdynamicinput);
// }
// const handleremove=(idx)=>{
//     const values=[...dynamicInputs];
//     values.splice(idx,1);
//     setDynamicInputs(values);
// }
// // const handlesubmit=(event)=>{
// //   event.preventDefault();
// //   console.log(formState.values,null,2);
// // }

//         return(
//             <>      
//               <div className="App">
//                 <form onSubmit={handleCreate}>
//                   <TextField {...text("name")} label="Create" />
//                   <Radio {...radio("type", "text")}>Text</Radio>
//                   <Radio {...radio("type", "checkbox")}>Checkbox</Radio>
//                   <Radio {...radio("type", "number")}>Number</Radio>
//                   <Radio {...radio("type", "date")}>Date</Radio>
//                   <Radio {...radio("type", "range")}>Range</Radio>
//                   <Radio {...radio("type", "url")}>Url</Radio>
//                   <Radio {...radio("type", "tel")}>Tel</Radio>
//                   <Radio {...radio("type", "search")}>search</Radio>
//                   <Radio {...radio("type", "email")}>email</Radio>
//                   <Radio {...radio("type", "typo")}>typo</Radio>
//                   <Button type="submit" onClick={handleCreate}>create</Button>
//                   <Button onClick={handlesave}>save</Button>
                  
//                   <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                   <pre>{JSON.stringify(formState, null, 2)}</pre>
//                 </form>
//                 <h2>Dynamic form</h2>
//                 <DynamicForm dynamicInputs={dynamicInputs} />
//                 {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//             </div>
//             </>
//         )
// }

// export default NewDyanamic;











// // UI For Creation of Form

// const NewDyanamic=()=> {
//     const classes = useStyles();
    
//  const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo }] = useFormState();
// const [dynamicInputs, setDynamicInputs] = useState([]);   
// const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo };


// const DynamicForm=(props)=> {
  
//   const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo }] = useFormState();
//   const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo };
//   return (
//     <form>
//       {props.dynamicInputs.map((inp, idx) => (
//         inp.type==="typo"?(
//           <div>
//           <Typography key={idx} {...mappers[inp.type]} style={{padding: "12px 20px",margin: "8px 0"}}
            
//           >{inp.name}</Typography>
//          <CloseIcon onClick={()=>handleremove(idx)} style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//         </div>
//         ):(
//           <div>
//           <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//             name={inp.name} 
//          />
//          <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//         </div>
        
//       )))}
//       {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//       {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
//     </form>
//   );
// }

// const handleCreate=(event)=> {
//   event.preventDefault();
//   setDynamicInputs(p => [...p, formState.values]);
// }
// const[data,newdata]=useState([]);

// const handlesave=()=>{
//   const newdynamicinput = dynamicInputs;
//   console.log(newdynamicinput);
//   localStorage.setItem("mydata",newdynamicinput);
//   console.log(localStorage.getItem("mydata"));
// }

// const handleremove=(idx)=>{
//     const values=[...dynamicInputs];
//     values.splice(idx,1);
//     setDynamicInputs(values);
// }
// // const handlesubmit=(event)=>{
// //   event.preventDefault();
// //   console.log(formState.values,null,2);
// // }
//         return(
//             <>  
//             <div className={classes.container}>
//                 <Card className={classes.card1}>
//                    <div>
//                   <div className="App">
//                    <form onSubmit={handleCreate}>
//                      <TextField {...text("name")} label="Create" style={{width:"95%"}}/>
//                      <hr/>
//                      {/* <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                      <pre>{JSON.stringify(formState, null, 2)}</pre> */}
//                    </form>
//                    <Typography variant="h5">Dynamic Forms</Typography>
//                    <DynamicForm dynamicInputs={dynamicInputs} />
//                    {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//                    </div>
//                   </div>
//                 </Card>
//                 <Card className={classes.card2} >
//                     <div style={{marginTop:"20px"}}>
//                       <FormLabel component="legend">Select</FormLabel>
//                       <FormControlLabel label="Textfield" control={<Radio {...radio("type", "text")}>Text</Radio> }/>
//                       <FormControlLabel label="Checkbox" control={ <Radio {...radio("type", "checkbox")}>Checkbox</Radio>}/>
//                       <FormControlLabel label="Number" control={<Radio {...radio("type", "number")}>Number</Radio> }/>
//                       <FormControlLabel label="Date" control={ <Radio {...radio("type", "date")}>Date</Radio> }/>
//                       <FormControlLabel label="Range" control={<Radio {...radio("type", "range")}>Range</Radio> }/>
//                       <FormControlLabel label="Url" control={ <Radio {...radio("type", "url")}>Url</Radio> }/>
//                       <FormControlLabel label="TelPh" control={<Radio {...radio("type", "tel")}>Tel</Radio> }/>
//                       <FormControlLabel label="Search" control={ <Radio {...radio("type", "search")}>search</Radio>}/>
//                       <FormControlLabel label="Email" control={ <Radio {...radio("type", "email")}>email</Radio>}/>
//                       <FormControlLabel label="Typography" control={ <Radio {...radio("type", "typo")}>typo</Radio> }/>
//                     </div>
//                 </Card>    
//             </div> 

//                 <Card className={classes.buttondiv}>
//                     <Button onClick={handlesave} style={{width:"100%"}}>Save</Button>
//                     <Button type="submit" onClick={handleCreate} style={{width:"100%"}}>Create</Button>
//                 </Card>   
//               <br/>
//               <br/>
//               <ShowDynamic/>
//             </>
//         )
//     }
    
    
    
//     export default NewDyanamic;       




// // UI For Form Filling

// const ShowDynamic=()=> {
//   const classes = useStyles();
  
// const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo }] = useFormState();
// const newdatas=[{name:"Name",type:"text"}];
// const [dynamicInputs, setDynamicInputs] = useState([]);   
// const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo };


// const DynamicForm=(props)=> {

// const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo }] = useFormState();
// const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo };
// return (
//   <form>
//     {props.dynamicInputs.map((inp, idx) => (
//       inp.type==="typo"?(
//         <div>
//         <Typography key={idx} {...mappers[inp.type]} style={{padding: "12px 20px",margin: "8px 0"}}
          
//         >{inp.name}</Typography>
//       </div>
//       ):(
//         <div>
//         <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//           name={inp.name} 
//        />
      
//       </div>
      
//     )))}
//     {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//     {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
//   </form>
// );
// }

// const handleCreate=(event)=> {
// event.preventDefault();
// setDynamicInputs(p => [...p, formState.values]);
// }
// const handlesave=()=>{
// const newdynamicinput = dynamicInputs;
// console.log(newdynamicinput);
// }
// const handleremove=(idx)=>{
//   const values=[...dynamicInputs];
//   values.splice(idx,1);
//   setDynamicInputs(values);
// }
// // const handlesubmit=(event)=>{
// //   event.preventDefault();
// //   console.log(formState.values,null,2);
// // }
//       return(
//           <>  
//           <div className={classes.container}>
//               <Card className={classes.card1}>
//                  <div>
//                 <div className="App">
//                  <form onSubmit={handleCreate}>

//                    {/* <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                    <pre>{JSON.stringify(formState, null, 2)}</pre> */}
//                  </form>
//                  <Typography variant="h5">Show Dynamic Forms</Typography>
//                  <DynamicForm dynamicInputs={dynamicInputs} />
//                  {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//                  </div>
//                 </div>
//               </Card>
               
//           </div> 

//               <Card className={classes.buttondiv}>
//                   <Button type="submit" onClick={handleCreate} style={{width:"100%"}}>Submit</Button>
//               </Card>   
              
//           </>
//       )
//   }
  
  
  
  















// updated version code before UI design


// const NewDyanamic=()=> {
// const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo }] = useFormState();
// const [dynamicInputs, setDynamicInputs] = useState([]);   
// const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo };


// const DynamicForm=(props)=> {
  
//   const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email,typo }] = useFormState();
//   const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email,typo };
//   return (
//     <form>
//       {props.dynamicInputs.map((inp, idx) => (
//         inp.type==="typo"?(
//           <div>
//           <Typography key={idx} {...mappers[inp.type]} style={{padding: "12px 20px",margin: "8px 0"}}
            
//           >{inp.name}</Typography>
//          <CloseIcon onClick={()=>handleremove(idx)} style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//         </div>
//         ):(
//           <div>
//           <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//             name={inp.name} 
//          />
//          <CloseIcon onClick={()=>handleremove(idx)}  style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//         </div>
        
//       )))}
//       {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//       {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
//     </form>
//   );
// }

// const handleCreate=(event)=> {
//   event.preventDefault();
//   setDynamicInputs(p => [...p, formState.values]);
// }
// const handlesave=()=>{
//   const newdynamicinput = dynamicInputs;
//   console.log(newdynamicinput);
// }
// const handleremove=(idx)=>{
//     const values=[...dynamicInputs];
//     values.splice(idx,1);
//     setDynamicInputs(values);
// }
// // const handlesubmit=(event)=>{
// //   event.preventDefault();
// //   console.log(formState.values,null,2);
// // }

//         return(
//             <>      
//               <div className="App">
//                 <form onSubmit={handleCreate}>
//                   <TextField {...text("name")} label="Create" />
//                   <Radio {...radio("type", "text")}>Text</Radio>
//                   <Radio {...radio("type", "checkbox")}>Checkbox</Radio>
//                   <Radio {...radio("type", "number")}>Number</Radio>
//                   <Radio {...radio("type", "date")}>Date</Radio>
//                   <Radio {...radio("type", "range")}>Range</Radio>
//                   <Radio {...radio("type", "url")}>Url</Radio>
//                   <Radio {...radio("type", "tel")}>Tel</Radio>
//                   <Radio {...radio("type", "search")}>search</Radio>
//                   <Radio {...radio("type", "email")}>email</Radio>
//                   <Radio {...radio("type", "typo")}>typo</Radio>
//                   <Button type="submit" onClick={handleCreate}>create</Button>
//                   <Button onClick={handlesave}>save</Button>
                  
//                   {/* <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                   <pre>{JSON.stringify(formState, null, 2)}</pre> */}
//                 </form>
//                 <h2>Dynamic form</h2>
//                 <DynamicForm dynamicInputs={dynamicInputs} />
//                 {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//             </div>
//             </>
//         )
// }

// export default NewDyanamic;



















































// More enhanced code version:

// const NewDyanamic=()=> {
//   const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email }] = useFormState();
//   const [dynamicInputs, setDynamicInputs] = useState([]);   
//   const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email };
  
  
//   const DynamicForm=(props)=> {
    
//     const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email }] = useFormState();
//     const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email };
//     return (
//       <form>
//         {props.dynamicInputs.map((inp, idx) => (
//           <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//               name={inp.name} 
//            />
//            <CloseIcon onClick={()=>handleremove(idx)} style={{position:"relative",top:"12px",left:"10px",margin:"5px 5px 5px 5px",cursor:"pointer"}}>Remove</CloseIcon>
//           </div>
//         ))}
//         {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//         {/* <pre>{JSON.stringify(formState.values)}</pre>  */}
//       </form>
//     );
//   }
  
//   const handleCreate=(event)=> {
//     event.preventDefault();
//     setDynamicInputs(p => [...p, formState.values]);
//   }
//   const handlesave=()=>{
//     const newdynamicinput = dynamicInputs;
//     console.log(newdynamicinput);
//   }
//   const handleremove=(idx)=>{
//       const values=[...dynamicInputs];
//       values.splice(idx,1);
//       setDynamicInputs(values);
//   }
//   // const handlesubmit=(event)=>{
//   //   event.preventDefault();
//   //   console.log(formState.values,null,2);
//   // }
  
//           return(
//               <>      
//                 <div className="App">
//                   <form onSubmit={handleCreate}>
//                     <TextField {...text("name")} label="Create" />
//                     <Radio {...radio("type", "text")}>Text</Radio>
//                     <Radio {...radio("type", "checkbox")}>Checkbox</Radio>
//                     <Radio {...radio("type", "number")}>Number</Radio>
//                     <Radio {...radio("type", "date")}>Date</Radio>
//                     <Radio {...radio("type", "range")}>Range</Radio>
//                     <Radio {...radio("type", "url")}>Url</Radio>
//                     <Radio {...radio("type", "tel")}>Tel</Radio>
//                     <Radio {...radio("type", "search")}>search</Radio>
//                     <Radio {...radio("type", "email")}>email</Radio>
//                     <Button type="submit" onClick={handleCreate}>create</Button>
//                     <Button onClick={handlesave}>save</Button>
                    
//                     <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                     <pre>{JSON.stringify(formState, null, 2)}</pre>
//                   </form>
//                   <h2>Dynamic form</h2>
//                   <DynamicForm dynamicInputs={dynamicInputs} />
//                   {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//               </div>
//               </>
//           )
//   }
  
//   export default NewDyanamic;
  
  





// inintial code for Dyanamic forms

// const NewDyanamic=()=> {
//   const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email }] = useFormState();
//   const [dynamicInputs, setDynamicInputs] = useState([]);   
//   const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email };
//   const[data,newdata]=useState({create:""})
  
//   const handlechange=(event)=>{
//     const name=event.target.name;
//     const value=event.target.value;
//     newdata({...data,[name]:value});
//   }
//   const DynamicForm=(props)=> {
    
//     const [formState, { checkbox, text, radio,number,date,range,url,tel,search,email }] = useFormState();
//     const mappers = { checkbox, text, radio,number,date,range,url,tel,search,email };
//     return (
//       <form onSubmit={handlechange}>
//         {props.dynamicInputs.map((inp, idx) => (
//           <div>
//             <input key={idx} {...mappers[inp.type](inp.name)} placeholder={inp.name} style={{width: "50%",padding: "12px 20px",margin: "8px 0", boxSizing:" border-box"}}
//               name={inp.name} 
//            />
//           </div>
//         ))}
//         {/* <pre>{JSON.stringify(formState, null, 2)}</pre>  */}
//         <pre>{JSON.stringify(formState.values)}</pre> 
//       </form>
//     );
//   }
  
//   const handleCreate=(event)=> {
//     event.preventDefault();
//     setDynamicInputs(p => [...p, formState.values]);
//   }
  
//   // const handlesubmit=(event)=>{
//   //   event.preventDefault();
//   //   console.log(formState.values,null,2);
//   // }
  
//           return(
//               <>      
//                 <div className="App">
//                   <form onSubmit={handleCreate}>
//                     <TextField {...text("name")} label="Create" />
//                     <Radio {...radio("type", "text")}>Text</Radio>
//                     <Radio {...radio("type", "checkbox")}>Checkbox</Radio>
//                     <Radio {...radio("type", "number")}>Number</Radio>
//                     <Radio {...radio("type", "date")}>Date</Radio>
//                     <Radio {...radio("type", "range")}>Range</Radio>
//                     <Radio {...radio("type", "url")}>Url</Radio>
//                     <Radio {...radio("type", "tel")}>Tel</Radio>
//                     <Radio {...radio("type", "search")}>search</Radio>
//                     <Radio {...radio("type", "email")}>email</Radio>
//                     <Button type="submit" onClick={handleCreate}>create</Button>
                    
//                     <pre>{JSON.stringify(dynamicInputs, null, 2)}</pre>
//                     <pre>{JSON.stringify(formState, null, 2)}</pre>
//                   </form>
//                   <h2>Dynamic form</h2>
//                   <DynamicForm dynamicInputs={dynamicInputs} />
//                   {/* <Button type="submit" onClick={handlesubmit}>submit</Button> */}
//               </div>
//               </>
//           )
//   }
  
//   export default NewDyanamic;
  







// const NewDyanamic=()=> {

// const[question,setquestion]=useState([{
//     questionText:"Questuion",
//     questionType:"radio",
//     options:[
//         {optionText:"Bangu"},
//         {optionText:"Bangu"},
//         {optionText:"Bangu"},
//         {optionText:"Bangu"},

//     ],

//     open:true,
//     required:false

// }]) 
   

    

//     // const handleclick=()=>{
//     //     const id="id";
//     //     const value="value";
//     //     const type="type";
//     //    setdata({...data,[type]:"text"})
//     //    console.log(data);
//     // }
//     // const handleradio=()=>{
//     //     const id="id";
//     //     const value="value";
//     //     const type="type";
//     //     setdata({...data,[type]:"radio"})
//     //     console.log(data);
//     //  }
    
//     function questionui(){
//         return question.map((ques,i)=>(
//             <Accordion expanded={ques.open} className={ques[i]?"add border":""} >
//                  <AccordionSummary
                           
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                     elevation={1} style={{width:'100%'}}
//                   >
//                     { !question[i].open ? (

                        
//                   <div className="saved_questions">
                    
                    
//                     <Typography  style={{fontSize:"15px",fontWeight:"400",letterSpacing: '.1px',lineHeight:'24px',paddingBottom:"8px"}} >{i+1}.  {ques.questionText}</Typography>
    
                    
//                     {ques.options.map((op, j)=>(
                     
//                      <div key={j} >
//                        <div style={{display: 'flex',}}>
//                         <FormControlLabel style={{marginLeft:"5px",marginBottom:"5px"}} disabled control={<input type={ques.questionType} color="primary" style={{marginRight: '3px', }} required={ques.type}/>} label={
//                             <Typography style={{fontFamily:' Roboto,Arial,sans-serif',
//                                 fontSize:' 13px',
//                                 fontWeight: '400',
//                                 letterSpacing: '.2px',
//                                 lineHeight: '20px',
//                                 color: '#202124'}}>
//                               {ques.options[j].optionText}
//                             </Typography>
//                           } />
//                        </div>
    
                     
//                      </div>

                         

//                     ))}  
//                   </div>            
//                   ): ""}   
//                   </AccordionSummary>
                 
//             </Accordion>
//         ))
//     }
    
//         return(
//             <>      
//                {questionui}
//             </>
//         )
//     }
    
    
    
// export default NewDyanamic;





 

// const NewDyanamic=()=> {
 
   

//     const[data,setdata]=useState([
//         {
//             id:"",
//             value:"",
//             type:"",
//         }
//     ])

//     const handleclick=()=>{
//         const id="id";
//         const value="value";
//         const type="type";
//        setdata({...data,[type]:"text"})
//        console.log(data);
//     }
//     const handleradio=()=>{
//         const id="id";
//         const value="value";
//         const type="type";
//         setdata({...data,[type]:"radio"})
//         console.log(data);
//      }
    
    
//         return(
//             <>      
//                     {console.log("return",data)}
                    
//                        {data.map((country)=>{
//                            country.type==="text" ?(
//                                <input variant="outline"/>
//                            ):(
//                                <input />
//                              )
//                        }

//                        )}
                    
   
    
//                 <Button onClick={handleclick}>add TextField</Button>
//                 <Button onClick={handleradio}>Radio Button</Button>
//             </>
//         )
//     }
    
    
    
// export default NewDyanamic;
    
// const NewDyanamic=()=> {
//     const classes = useStyles();
    
//     const[data,setdata]=useState([
//         {
//             id:"",
//             value:"",
//             type:"",
//         }
//     ])

//     const handleclick=()=>{
//         const id="id";
//         const value="value";
//         const type="type";
//        setdata({...data,[type]:"text"})
//        console.log(data);
//     }
//     const handleradio=()=>{
//         const id="id";
//         const value="value";
//         const type="type";
//         setdata({...data,[type]:"radio"})
//         console.log(data);
//      }
    
    
//         return(
//             <>  
//             <div className={classes.container}>
//                 <Card className={classes.card1}>
//                     <TextField variant="outlined"/>
//                 </Card>
//                 <Card className={classes.card2} >
//                 <div style={{paddingTop:"7px"}}>
//                     <Button style={{width:"100%"}}>TextField</Button>
//                     <Button style={{width:"100%"}}>Radio</Button>
//                     <Button style={{width:"100%"}}>Number</Button>
//                     <Button style={{width:"100%"}}>Date</Button>
//                     <Button style={{width:"100%"}}>Header</Button>
//                     <Button style={{width:"100%"}}>Radio Group</Button>
//                     <Button style={{width:"100%"}}>Select</Button>
//                     <Button style={{width:"100%"}}>Textarea</Button>
//                     <Button style={{width:"100%"}}>File Upload</Button>
//                     <Button style={{width:"100%"}}>CheckBox</Button>
//                     <Button style={{width:"100%"}}>Link</Button>
//                     <Button style={{width:"100%"}}>Image</Button>
//                     <Button style={{width:"100%"}}>Switch</Button>
//                 </div>
//                 </Card>    
//             </div> 

//                 <Card className={classes.buttondiv}>
//                     <Button style={{width:"100%"}}>Save</Button>
//                     <Button style={{width:"100%"}}>Submit</Button>
//                 </Card>   
                
//             </>
//         )
//     }
    
    
    
//     export default NewDyanamic;       




// // const Hookcounter=()=>{
// //     const[items,setItems]=useState([])
// //       const additem=()=>{
// //           setItems([...items,{
// //               id:items.length,
// //               value:Math.floor(Math.random()*10)*1
// //           }])
// //       }
// //       return(
// //           <>
// //              <div>
// //              <Button onClick={additem}>add items</Button>
// //               <ul>
// //                   {items.map(items=>(
// //                       <li key={items.id}>{items.value}</li>
// //                   ))}
// //               </ul>
// //              </div>
             
// //           </>
// //       )
  
// //   }














// class NewDyanamic extends Component {
 
//     state={
//         countries:[],
//     }
    
//     handleclick(){
//         this.setState({countries:[...this.state.countries,""]})
//     }
//     render(){
//         return(
//             <>
    
//             {
//                 this.state.countries.map((country,index)=>{
//                     return(
//                         <div key={index}>
//                             <input value={country}/>
//                         </div>
//                     )
    
//                 })
//             }
    
    
    
//                 <Button onClick={(e)=>this.handleclick(e)}>add TextField</Button>
//             </>
//         )
//     }
    
//     }
    
//     export default NewDyanamic;
    
    