import React from "react";
import TextComponent from "./TextComponent";
export const DateComponent = () => {
    return (
      <div style={{marginTop:"-37px"}}>
      <TextComponent label="Date" />
        <input
          type="date"
          style={{
         
          display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContents: "center",
            border: "1px solid #E8E8EA",
            background: "#FFFFFF",
            border: "1px solid #E8E8EA",
            borderRadius: "5px",
            width: "155px",
            marginTop:"21px",
            padding:"2px 40px",
            height: "52px",
          }}
          
        />
      </div>
    );
  };
  export default DateComponent