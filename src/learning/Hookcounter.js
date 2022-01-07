import { Button } from "@material-ui/core"
import { useState } from "react"


// USe state with Array

const Hookcounter=()=>{
  const[items,setItems]=useState([])
    const additem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)*1
        }])
    }
    return(
        <>
           <div>
           <Button onClick={additem}>add items</Button>
            <ul>
                {items.map(items=>(
                    <li key={items.id}>{items.value}</li>
                ))}
            </ul>
           </div>
           
        </>
    )

}



// // complex use state examples

// const Hookcounter=()=>{
  
//     const [name,setName]=useState({firstName:"",Lastname:""})
//     return(
//         <>
//             <form>
//                 <input type="text"
//                  value={name.firstName} 
//                  onChange={event=>setName({...name,firstName:event.target.value})}

//                  />
//                 <input type="text" 
//                 value={name.Lastname} 
//                 onChange={event=>setName({...name,Lastname:event.target.value})}

//                 />
//                 <h2>your frist name is:{name.firstName}</h2>
//                 <h2>your Last name is:{name.Lastname}</h2>
//                 {/* <Button onClick={submitform=()=>console.log()}>Submit</Button> */}
//             </form>
//         </>
//     )

// }




// // prevstate counter

// const Hookcounter=()=>{
//     const incrementfive=()=>{
//     for(let i=0;i<5;i++){
//         setCount(prevCount=>prevCount+1)
//     }
    
// }
// const increment=()=>{
//     setCount(Count+1)
// }
//     const[Count,setCount]=useState(0);
//     return(
//         <>
//             <h1>Now count is :{Count}</h1>
//             <Button onClick={increment}>increment</Button>
//             <Button onClick={()=>setCount(0)}>Reset</Button>
//             <Button onClick={()=>setCount(Count-1)}>Decrement</Button>
//             <Button onClick={incrementfive}>incrementby5</Button>
//         </>
//     )

// }



// simple counter

// const Hookcounter=()=>{
//     const[Count,setCount]=useState(0);
//     return(
//         <>
//             <h1>Now count is :{Count}</h1>
//             <Button onClick={()=>setCount(Count+1)}>click me</Button>
//         </>
//     )

// }

export default Hookcounter;