// import { useState } from "react";
function Button({selectednumber,setSelectNumber,rule}){
    const arrNumber =[1,2,3,4,5,6];
    return(
        <>

        <div className="Btn_div">
            {arrNumber.map((value,i)=>
               <div
                className="btn" key={i} 
                onClick={()=>setSelectNumber(value)}>
                {value}
               </div>
                )}
        </div>
        <h2 className="error_h2"> {selectednumber?"Your Selected Number is = "+ selectednumber:' Select  a Number'}</h2>
        </>
    )
}
export default Button;