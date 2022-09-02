import React from "react";
import TextComponent from "../Components/TextComponent";
import ButtonComponent from "../Components/ButtonComponent";

const Image = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          align: "center",
          marginLeft: "36%",
          marginTop: "1%",
        }}
      >
        <img src="https://i.ibb.co/m6n1ZR4/Events-rafiki-1.png"  />
      </div>
      <div
        style={{
          marginLeft: "34%",
          marginBottom: "1%",
          fontSize: "19px",
          fontFamily: "Nunito",
          marginTop: "1px",
          posotion: "absolute",
          bottom: "0px",
        }}
      >
        <TextComponent label="There are no schedules get started by creating schedules" />
      </div>
      <ButtonComponent />
    </div>
  );
};

export default Image;

export const Bin = () => {
  return (
    <div style={{ position: "relative"}}>
    <div style={{
      width:"19px",
      height:"19px",
      marginLeft:"150px",
      marginTop:"25px",
      display:"flex",
      direction:"row"
    }}>
    <img src="https://i.ibb.co/jVpb71G/Vectorpen.png"/>
   <div style={{marginLeft:"20px"}}> <img src="https://i.ibb.co/sVjxfbf/Vectorbin.png"/></div>
    </div>
    </div>
  )
}
export const Tic = () => {
  return (
    <div style={{ position: "relative"}}>
    <div style={{ marginTop:"17px",
          marginLeft:"210px"}}>
    <img src="https://i.ibb.co/spfFJZT/Vectortic.png"/>
    </div>
    </div>

  )
}
export const Filter = () => {
  return (
    <div style={{marginTop:"15px",marginLeft:"15px"}}>
      <img src="https://i.ibb.co/K2tR9XX/Vector-Filter.png"/>
    </div>
  )
}

