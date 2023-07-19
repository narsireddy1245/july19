import { useState } from "react";


function Fruit() {
    const [fruit1, setCount] = useState(0)
    const [fruit2, setCount1] = useState(0)
   
    return (
        <div className="container my-5">
            <div className="card text-center my-5">
            <h1 className="counter">Bob ate <br/> <span className="jan2" >{fruit1}</span>mangoes<span className="jan2">{fruit2}</span>bananas</h1>

                <div className="my-5">
                   

                    <div>
                        <button className="btn btn-primary mx-5" onClick={() => setCount(fruit1 + 1)}>Eat Mango</button>
                        
                        <button className="btn btn-success mx-5" onClick={() => setCount1(fruit2 + 1)}>Eat Banana</button>
                    </div>
                </div>

            </div>

        </div>
                       
                    
    );
}

export default Fruit;