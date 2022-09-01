import React from "react";
import TextComponent from "./TextComponent";
const ButtonComponent = () => {
  return (
    <div>
      <div>
        <button
          type={type}
          style={{
            marginLeft: "43%",
            backgroundColor: "#5375E2",
            borderRadius: "7px",
            border: "white",
            marginBottom: "5%",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "white",
              padding: "13px 41px",
              fontFamily: "Nunito",
            }}
          >
            <TextComponent label="+ Create New" />
          </div>
        </button>
      </div>
    </div>
  );
};
export const Button1 = () => {
  return (
    <button
      onclick=""
      style={{
        boxSizing: "border-box",
        left: "0%",
        right: "0%",
        top: "0%",
        bottom: "0%",
        border: " 1px solid #5375E2",
        borderRadius: "5px",
        padding: "20px",
        background: "white",
        marginTop: "21px",
        color:"#5375E2"
      }}
    >
      FN
    </button>
  );
};
export const Button2 = () => {
  return (
    <button
      onclick=""
      style={{
        boxSizing: "border-box",
        left: "0%",
        right: "0%",
        top: "0%",
        bottom: "0%",
        border: " 1px solid #5375E2",
        borderRadius: "5px",
        padding: "20px",
        background: "white",
        marginTop: "21px",
        color:"#5375E2"
      }}
    >
      AN
    </button>
  );
};
export const ButtonSave = () => {
  return (
    <div>
      <button
        style={{
          position: "absolute",
          width: "174px",
          height: "40px",
          left: "1175px",
          top: "205%",
          background: "#5375E2",
          borderRadius: "5px",
          border:"white"
        }}>
         <div
            style={{
              fontSize: "20px",
              color: "white",
              fontFamily: "Nunito",
              marginTop:"-15px"
            }}
          >
            <TextComponent label="Save" />
          </div>

        </button>
    </div>
  );
};
export const TimeButton = () => {
  return (
    <div><input
    type="Number"
    style={{
      marginLeft:"41px",
      background: "#FFFFFF",
      border: "1px solid #E5E5E5",
      width: "52px",
      height: "48px",
      borderRadius: "4px",
      opacity: "0.5",
      padding:""
    }}
  /></div>
  )
}
export const CheckButton = ()=>{
  return (
    
    <div style={{padding:"15px",marginLeft:"170px",borderColor:"#5375E2"}}>
      <input type="checkbox" class="large" color="blue"/>
    </div>
    )};

export default ButtonComponent;
