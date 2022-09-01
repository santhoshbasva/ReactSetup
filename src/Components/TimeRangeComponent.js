import React from "react";
import TextComponent from "./TextComponent";
import { TimeButton,CheckButton } from "./ButtonComponent";
export const TimeRangeComponent = () => {
  return (
    <div>
    <div style={{ display: "flex", direction: "row",marginTop:"5px",marginLeft :"2px"}}>
      <div style={{ fontWeight: "700", fontSize: "16px", lineHeight: "22px" }}>
        <TextComponent label="FN" />
      </div>
      <TimeButton />
      <TimeButton />
      <TimeButton />
      <div
        style={{
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "22px",
          marginLeft: "35px",
        }}
      >
        <TextComponent label="to" />
      </div>
      <TimeButton />
      <TimeButton />
      <TimeButton />  
      <CheckButton />
      <TextComponent styleProps={{opacity:"0.5"}}
      label="Set all for FN" />
    </div>
    <div style={{ display: "flex", direction: "row",marginTop:"20px"}}>
      <div style={{ fontWeight: "700", fontSize: "16px", lineHeight: "22px" }}>
        <TextComponent label="AN" />
      </div>
      <TimeButton />
      <TimeButton />
      <TimeButton />
      <div
        style={{
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "22px",
          marginLeft: "35px",
        }}
      >
        <TextComponent label="to" />
      </div>
      <TimeButton />
      <TimeButton />
      <TimeButton />  
      <CheckButton />
      <TextComponent styleProps={{opacity:"0.5"}}
      label="Set all for AN" />
    </div>
    </div>
  );
};
