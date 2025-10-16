function callfun(abc){
        alert(abc);
    }

function First(){

    return(
        <>
        <h1>here i call a function through click. </h1>
        <button onClick={()=>callfun("apple")}>click for fruit!</button>
        </>
    )
}
export default First;