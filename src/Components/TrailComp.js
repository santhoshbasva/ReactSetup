import React, { useState } from "react";

export const Head = () => {
  return (
    <>
      <div style={styled.HeadContainer}>
        <h1 style={styled.HeadFont}>Incresco Technologies</h1>
      </div>
    </>
  );
};

export const Main = () => {
  return (
    <div style={styled.Main}>
      <UseArray />
    </div>
  );
};
export const UseArray = () => {
  const bioData = [
    { id: 0, name: "Sandy", age: "21", role: "SDE" },
    { id: 1, name: "Sanju", age: "20", role: "UI UX" },
    { id: 2, name: "Sudha", age: "21", role: "Marketing" },
  ];
  const [arr, setArr] = useState(bioData);
  

  const clrAry = () => {
   setArr([])
  };
  const refresh =()=>{
    setArr(bioData)
  }
  return (
    <>
      {arr.map((ce) => (
        <h1 style={styled.H1} key={ce.id}>
         <p style={{marginLeft:"20px"}}> Name:{ce.name}</p>    <p> Age:{ce.age}     Role:{ce.role}</p>
        </h1>
      ))}
      <button onClick={clrAry}>
        Clear
      </button>
      <button onClick={refresh}>REFRESH</button>
    </>
  );
};


    // const [myVal,setMyVal]=useState(true)
    // const ChangeVal=()=>
    // {
    //     setMyVal(!myVal)
    // }
    // return(
    //     <>
    //         <h1>{myVal ? "BYE":"HELLO"}</h1> 
    //         <button onClick={(event) =>{
    //             console.log(event);
    //         }}>
    //          Click Here
    //         </button>
    //     </>
    // )


export const Foot = () => {
  return (
    <>
      <div style={styled.FootCont}>
        <p style={styled.FootFont}>Powered By Inc </p>
      </div>
    </>
  );
};

const styled = {
  HeadContainer: {
    padding: "1.5rem 1px",
    backgroundColor: "#1C3879",
    color: "white",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  HeadFont: {
    padding: "1px 50px",
    lineHeight: "20px",
  },
  FootCont: {
    padding: "1px 1px ",
    width: "100%",
    backgroundColor: "#1C3879",
  },
  FootFont: {
    display: "flex",
    justifyContent: "center",
    color: "white",
  },
  Main: {
    heigth: "100%",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#e6e6ff",
    marginTop: "-20px",
  },
  H1: {
    padding: "30px",
    display: "flex",
    justifyContent: "center",
  },
};