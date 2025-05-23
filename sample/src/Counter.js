import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0)
  return (
    
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <h2>I am Here :{count}</h2>
        </div>
  )
}

export default Counter