import React from "react";
import TextComponent from "./TextComponent";
import {InputComponent,SelectComponent } from "./DropDownComponent";
import DateComponent from "./DateComponent";
import { Button1,Button2 } from "./ButtonComponent";

export const SubDateComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        direction: "row",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "22px",
        display: "flex",
        flexDirection: "row",
        fontFamily: "Nunito",
        
      }}
    >
      <div style={{marginTop:"22px"}}>
        <SelectComponent />
      </div>
      <div style={{ marginLeft: "30px",marginBottom:"px" }}>
        <TextComponent label="" />
        <InputComponent />
      </div>
      <div style={{ marginLeft: "24px" }}>
        <TextComponent label="" />
        <DateComponent />
      </div>
      <div style={{ marginLeft: "30px" }}>
        <Button1 />
      </div>
      <div style={{ marginLeft: "30px" }}>
        <Button2 />
      </div>
    </div>
  );
};
