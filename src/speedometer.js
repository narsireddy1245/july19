import { useState } from "react";


function Speedometer1() {
    const [speed, setCount] = useState(0)
    return (
        <div className="container my-5">
            <div className="card text-center my-5">
            <h1 className="counter">Speed is <br/> <span className="jan2" >{speed}</span>kmph</h1>

                <div className="my-5">
                   

                    <div>
                        <button className="btn btn-primary mx-5" onClick={() => setCount(speed + 10)}>Increment</button>
                        
                        <button className="btn btn-success mx-5" onClick={() => setCount(speed - 10)}>Decrement</button>
                    </div>
                </div>

            </div>

        </div>
                       
                    
    );
}

export default Speedometer1;