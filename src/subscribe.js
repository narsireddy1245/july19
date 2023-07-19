import { useState } from "react";


function Welcome1() {
    const [welcome, setwelcome] = useState("subscribe")

    const[isClicked, setisClicked]=useState(false)
    const onchangeHeading=()=>{
        setisClicked(!isClicked)
      
        const changedText=isClicked ? 'subscribed' : 'subscribe'
        setwelcome(changedText)
    }
    console.log(isClicked)
    console.log(welcome)
   
    return (
        <div className="container my-5">
            <div className="card jan6 text-center my-5">
                <h1 className="jan3">Welcome</h1>
                <p className="jan4">Thank you! Happy Learning</p>
           
                        <button className="  mx-5 jan5" onClick={onchangeHeading}>{welcome}</button>
                        
                     
                    </div>
                </div>

           

  
                       
                    
    );
}

export default Welcome1;