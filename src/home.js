import axios from "axios"
import { useEffect,useState } from "react"
import { Link} from "react-router-dom"
function Ho(){
      const [list,setList]=useState([''])
       useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setList(res.data))
        .catch(e=>console.log(e))
  }
  ,[])
      return (

          <div id="general">
            <div id="top">
               <h1>User's list:</h1>
               <Link to='contact'>-contact-</Link>
            </div>
            <div id="main">
               {list.map(element=>
                  <div id="first" style={{animation:"theDisplayer 2s"}}>
                    <h1>{element.id}</h1>
                    <h6>{element.name}</h6>
                    <Link to ="posts" state={element.id}>
                      <button type="button" class="btn btn-dark">{element.username}</button>
                    </Link>
                    <p>{element.email}</p>
                  </div>)}
            </div>
            
          </div>
      )

}
export default Ho;