import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Temp() {
    const [data, setData] = useState([])
  return (
    <div>Temp
        <button onClick={()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts').then((responce)=>{
                console.log(responce.data)
                setData(responce.data)
            })

        }}
        > Hello</button>
        {
            data.map((obj,index)=>{
                return(
                    <div>
                        <h1>{index}</h1>
                        <h3>{obj.title}</h3>
                        <h4>{obj.body}</h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Temp