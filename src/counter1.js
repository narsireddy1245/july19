import { useState } from "react";


function Counter1() {
    const [count, setCount] = useState(0)
    return (
        <div className="container my-5">
            <div className="card text-center my-5">
                <h1 className="counter">The Button has been clicked <br/> <span className="jan2" >{count}</span>Times</h1>

                <div className="my-5">
                    

                    <div>
                        <h1>click the button to increase the count</h1>
                        <button className="btn btn-primary mx-5" onClick={() => setCount(count + 1)}>Click me</button>

                        

                       
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Counter1;