import { Button } from "@material-ui/core"
import React,{ useState,useEffect } from "react"
import axios from "axios"





 //how to fetch datat with useeffect on input and button clicked

const Datafetching=()=>{
    const[post,setpost]=useState({})
    const[id,setid]=useState(1)    
    const[idfrombuttonclick,setidfrombuttonclick]=useState(1)


    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
       .then(res=>{
           console.log(res)
           setpost(res.data)
       })
       .catch(err=>{
           console.log(err)
       })
     },[idfrombuttonclick] )


     const handleclick=()=>{
         setidfrombuttonclick(id)
     }
    return(
        <>
            <h4>This is Datafetching with UseEffect:</h4>
            <h4>{post.title}</h4>
            <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
           <Button onClick={handleclick}>Fetch</Button>
        </>
    )
}



//  //how to fetch datat with useeffect on input and button clicked

//  const Datafetching=()=>{
//     const[post,setpost]=useState({})
//     const[id,setid]=useState(1)    



//     useEffect(()=>{
//        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//        .then(res=>{
//            console.log(res)
//            setpost(res.data)
//        })
//        .catch(err=>{
//            console.log(err)
//        })
//      },[id] )



//     return(
//         <>
//             <h4>This is Datafetching with UseEffect:</h4>
//             <h4>{post.title}</h4>
//             <input type="text" value={id} onChange={e=>setid(e.target.value)}/>
//              <ul>
//                 {
//                     post.map(posts=>(<li key={posts.id}>{posts.title}</li>))
//                 }
//             </ul> 
//           
//         </>
//     )
// }








// //how to fetch datat with useeffect


// const Datafetching=()=>{
//     const[post,setpost]=useState([])

    
//     useEffect(()=>{
//        axios.get("https://jsonplaceholder.typicode.com/posts")
//        .then(res=>{
//            console.log(res)
//            setpost(res.data)
//        })
//        .catch(err=>{
//            console.log(err)
//        })
//      },[] )
//     return(
//         <>
//             <h4>This is Datafetching with UseEffect:</h4>
//             <ul>
//                 {
//                     post.map(posts=>(<li key={posts.id}>{posts.title}</li>))
//                 }
//             </ul>
           
//         </>
//     )
// }





// Automatic counter with use Effect

// const Automaticounter=()=>{
//     const[Count,setCount]=useState(0)

//     const tick=()=>{
//         setCount(prevState=>prevState+1)
//     }
    
//     useEffect(()=>{
//         const interval=setInterval(tick,1000)
//         return()=>{clearInterval(interval)}
//     },[Count])
//     return(
//         <>
//             <h4>This is Automatic Count with UseEffect:{Count}</h4>
           
//         </>
//     )
// }





// const Automaticounter=()=>{
//     const[Count,setCount]=useState(0)

//     useEffect(()=>
//     {
//         document.title=`you clicked ${Count} times`
//     })

//     const increment=()=>{
//         setCount(prevstate=>prevstate+1)
//     }
//     return(
//         <>
//             <h1>This is Count with UseEffect:{Count}</h1>
//             <Button onClick={increment}>Click me to change title</Button>
//         </>
//     )
// }




//documnet title to counter value

// const UseEffect=()=>{
//     const[Count,setCount]=useState(0)

//     // UseEffect(()=>
//     // {
//     //     document.title=`you clicked ${Count} times`
//     // })

//     const increment=()=>{
//         setCount(prevstate=>prevstate+1)
//     }
//     return(
//         <>
//             <h1>This is Count with UseEffect:{Count}</h1>
//             <Button onClick={increment}>Click me to change title</Button>
//         </>
//     )
// }


export default Datafetching;