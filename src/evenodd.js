import { useState } from 'react';
import './index.css';
import React from 'react';

function App9(){
       const [isEven,setIsEven]=useState(true)
       const [count,setCount]=useState(0)
       
       const content=isEven?"Even":"Odd"
       
      
       const num=count+Math.ceil(Math.random()*100)

     return(
        <div className='card card1'>
          <h1 className='randomcount'>Count<span>{count}</span></h1><br></br>
         <br></br>
         <p className='evenoddcount'>Count is {content}</p>
         <button className='increment'onClick={()=>setCount(num)}>Increment</button>
         <p className='numberbetween'>*Incresed By Random Number Between 0 to 100 </p>
         </div>
        
)
}
export default App9;