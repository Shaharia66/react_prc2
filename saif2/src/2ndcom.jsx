import { useState } from "react";

// function Hideandshow(){
//     const display=false;
//     return(
//         <>
//         <h1>Hide and Show app</h1>
//         {display?<h1>here we see.</h1>:null}
//         </>
//     )
// }
// export default Hideandshow

// function Hideandshow(){
//     const [display,setDisplay]=useState(true);
//     return(
//         <>
//         <h1>Hide and Show app</h1>
//         {display?<h3>click the toggle button for hide this.</h3>:null}
//         <button onClick={()=>setDisplay(!display)}>Toggle!</button>
//         </>
//     )
// }
// export default Hideandshow

function Multcond(){
    const[count,setCount]=useState(0);
    return(
        <>
        <h1>Here i count 1-5.</h1>
        <h1>{count}</h1>
        {
            count==0?<h3>counter :0</h3>
            :count==1?<h3>counter :1</h3>
            :count==2?<h3>counter :2</h3>
            :count==3?<h3>counter :3</h3>
            :count==4?<h3>counter :4</h3>
            :count==5?<h3>counter :5</h3>
            :<h3>other conditions.</h3>
        }
        <button onClick={()=>setCount(count+1)}>counter</button>
        </>
    )
}
export default Multcond