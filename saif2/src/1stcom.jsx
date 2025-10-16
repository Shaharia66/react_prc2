// function callfun(abc){
//         alert(abc);
//     }

// function First(){

//     return(
//         <>
//         <h1>here i call a function through click. </h1>
//         <button onClick={()=>callfun("apple")}>click for fruit!</button>
//         </>
//     )
// }
// export default First;


// export function Fruit1(){
//     let a="mango";
//     function handleFtuit1(){
//         a="Banana";
//         console.log(a);
//     }
//     return(
//         <>
//         <h1>Here i don normal code .for changing mango when i click buttom.</h1>
//         <h1>{a}</h1>
//         <button onClick={handleFtuit1}>button for change</button>
//         </>

//     )
// }

import { useState } from "react";
import Counter from "./Counter";
function Fruit2(){
    const[fruit1,setfruit2]=useState("mango");
    function handleFtuit2(){
        setfruit2("banana");
    }
    return(
        <>
        <h1>here we use state for change mango.</h1>
        <h2>{fruit1}</h2>
        <button onClick={handleFtuit2}>change again!</button>
        <Counter/>
        </>
    )
}
export default Fruit2