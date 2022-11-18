import { useEffect,useState } from 'react'
import { Link,useLocation } from "react-router-dom"
import axios from "axios"
export let Posts=()=>{
    const location=useLocation()
    const state=location.state
    const [posts,setPosts]=useState([])
    useEffect(
      ()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${state}`)
        .then((response)=>setPosts(response.data))
        .catch(e=>console.log(e))
      }
      ,[])
    return (
        <div id="general">
            <div id="top">
                <h1>User {state} posts: </h1>
            </div>
            <div id="main1">
                {posts.map(element=>
                    <div id="first1">
                        <h3>{element.id}</h3>
                        <h3>{element.title}</h3>
                        <p>{element.body}</p>
                        <Link to='Comments' state={element.id}>
                          <button type="button" class="btn btn-warning">See comments</button>
                        </Link>
                    </div>
                    )}
            </div>        
        </div>
    )

}