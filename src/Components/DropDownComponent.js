import React, { useState } from "react";

export const DropDownComponent1 = (props) => {
  return (
    <div>
      <input
        style={{
          background: "#FFFFFF",
          border: "1px solid #E8E8EA",
          borderRadius: "5px",
          width: "340px",
          height: "51px",
        }}
      ></input>
    </div>
  );
};
export const InputComponent = (props) => {
  return (
    <div>
      <input
        style={{
          background: "#FFFFFF",
          border: "1px solid #E8E8EA",
          borderRadius: "5px",
          width: "450px",
          height: "53px",
          marginTop: "7px",
          backgroundColor: "#F2F2F2",
          ...props.style
         
        }}
        type="text"
      ></input>
    </div>
  );
};

export const SelectComponent = (props) => {
  const {data}=props;
  return (
    <div>
      <select
        style={{
          background: "#FFFFFF",
          border: "1px solid #E8E8EA",
          borderRadius: "5px",
          width: "210px",
          height: "55px",
          padding: "8px 16px",
          opacity: "0.8",
          ...props.style
        }}
      >
        {data.map((item)=>{return <option value="">{item}</option>})}
      </select>
    </div>
  );
};
