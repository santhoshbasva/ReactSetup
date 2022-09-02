import React from "react";
import { BlueBorder, OrangeBorder } from "./Border";
import { Create } from "./Create";
import { Bin, Tic } from "../Layouts/Image";
import TextComponent from "./TextComponent";

export const DotBox = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "392px",
        height: "252px",
        left: "102px",
        top: "175px",
        background: "#F6F6F6",
        border: "1px",
        borderStyle: "Dashed",
        borderWidth: "1px",
        borderRadius: "10px",
        margin: "50px 30px 35px 102px",
      }}
    >
      <Create />
    </div>
  );
};
export const OrangeBox = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "392px",
        height: "252px",
        left: "524px",
        top: "176px",
        border: "1px solid #FFA500",
        borderRadius: "10px",
        margin: "50px 30px 35px 30px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div style={{display:"flex",direction:"row"}}>
        <TextComponent
          label="BE IT SEM 3"
          styleProps={{ fontWeight: "600", fontSize: "24px", lineHeight: "33px" ,marginLeft:"25px"}}
        />
        <Bin />
      </div>

      <OrangeBorder />
    </div>
  );
};
export const BlueBox = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "392px",
        height: "252px",
        left: "524px",
        top: "176px",
        border: "1px solid #5375E2",
        borderRadius: "10px",
        margin: "50px 30px 35px 30px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    ><div style={{display:"flex",direction:"row"}}>
        <TextComponent
          label="BE IT SEM 3"
          styleProps={{ fontWeight: "600", fontSize: "24px", lineHeight: "33px" ,marginLeft:"25px"}}
        />
      <Bin />
      </div>
      <BlueBorder />
    </div>
  );
};
