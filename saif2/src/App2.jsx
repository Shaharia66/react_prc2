import Props from "./props";
function App2(){
    let name="saif";
    let age=25;
    let roll=66;
    let email="saif@text.com"
    const userInfo={
        name:"taif",
        age:23,
        email:"taif@text.com",
    }
    const userInfo2={
        name:"raif",
        age:23,
        email:"raif@text.com",
    }
    const userInfo3={
        name:"paif",
        age:23,
        email:"paif@text.com",
    }
    const userInfo4={
        name:"daif",
        age:23,
        email:"daif@text.com",
    }
    return(
        <>
        <h1>Here start new component.</h1>
        {/* <Props a={name} b={age} c={roll} d={email} e={userInfo.name} f={userInfo.age} g={userInfo.email} h={userInfo2}/> */}
        {/* <Props h={userInfo2}/> */}
        <Props h={userInfo3}/>
        <Props h={userInfo4}/>
        {/* <props e={userInfo.name} f={userInfo.age} g={userInfo.email}/> */}
        </>
    )
}
export default App2
