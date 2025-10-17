// function Props({a,b,c,d,e,f,g,h}){
function Props({h}){
    return(
        <>
        {/* <h1>person 1</h1>

        <h1>name:{a}</h1>
        <h1>age:{b}</h1>
        <h1>roll:{c}</h1>
        <h1>email:{d}</h1>

        <h1>person 2</h1>

        <h1>name:{e}</h1>
        <h1>age:{f}</h1>
        <h1>email:{g}</h1> */}

        <h1>Person 3</h1>

        <h1>name:{h.name}</h1>
        <h1>age:{h.age}</h1>
        <h1>email:{h.email}</h1>

        </>
    )
}
export default Props