import React from "react";
import TextComponent from "./TextComponent";
import { Tic } from "../Layouts/Image";
import { Allocate } from "./Create";


export const BlueBorder = () => {
  return (
    <div
      style={{
        width: "392px",
        height: "56px",
        left: "102px",
        top: "680px",
        background: "#5375E2",
        borderRadius: "10px",
        marginTop:"151px",
      }}
    >
      <div style={{display:"flex",directoin:"row"}}><TextComponent
        label="Allocated"
        styleProps={{
          width: "96px",
          height: "27px",
          left: "986px",
          top: "365px",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "27px",
          color: "#FFFFFF",
          marginLeft:"35px" 
        }}
      />
      <Tic/>
      </div>
      
    </div>
  );
};
export const OrangeBorder = () => {
    return (
      <div
        style={{
          width: "392px",
          height: "56px",
          left: "102px",
          top: "680px",
          background: "#FFA500",
          borderRadius: "10px",
          marginTop:"151px",
          
        }}
      >
        <div style={{display:"flex",directoin:"row"}}><TextComponent
          label="Not Allocated"
          styleProps={{
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "27px",
            color: "#FFFFFF",
            marginLeft:"30px"
            
          }}
        />
        <Allocate/>
        </div>
      </div>
    );
  };
  
