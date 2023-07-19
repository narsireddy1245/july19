import { useState } from "react";


function Hide1() {
    const[isJohnyclicked, setJohnyclicked]=useState(true);
    const changeJhonnycss=()=>{
        setJohnyclicked(!isJohnyclicked);

    };
    const [isSinsclicked, setSinsclicked]=useState(true);
   
    const changeSinscss=()=>{
        setSinsclicked(!isSinsclicked);
    };
   
    return (
        <div className="container m-4">
         
                <h1 className="">task5</h1>
                <center>
           <div className="mainContainer m-3 P-4" >
            <div >
                <h4>show/hide</h4>
                <div className="d-flex flex-row justify-content-center">
                    <div className="m-5">
                        <button  onClick={changeJhonnycss}className="hidebutton">show/hide firstName</button>
                        <div className={isJohnyclicked ?"johnyDisplay" : "johnyDisplayNone" }>
                          johny
                        </div>
                        </div>
                        <div className="m-5">
                            <button  onClick={changeSinscss}className="hidebutton">show/hide LastName</button>
                            <div className={isSinsclicked ? "sinDisplay" : "sinDisplayNone"}>
                          sins
                        </div>
                        </div>
                        </div>
                        </div> 
                        </div>
                        </center>
                     
                       
                </div>

           

  
                       
                    
    );
}

export default Hide1;