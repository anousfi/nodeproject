import axios from "axios"
import { useState,useEffect } from "react"
import { useLocation } from "react-router-dom"
export let Comments=()=>{
    const location1=useLocation()
    const state=location1.state
    const [coms,setComs]=useState([])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${state}`)
        .then(r=>setComs(r.data))
        .catch(e=>console.log('Error!!!'))
    },[])

    
    return (
        <div id="general">
            <div id="top">
                <h1>Post {state} comments: </h1>
            </div>
            <div id="main">
              {coms.map(element=>
                <div id="first1">
                  <h1>{element.id}</h1>
                  <h4>{element.name}</h4>
                  <h6>{element.email}</h6>
                  <p>{element.body}</p>
                </div>)}
            </div>  
        </div>
    )

}