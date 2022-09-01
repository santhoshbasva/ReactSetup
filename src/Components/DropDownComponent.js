import React, { useState } from "react";
import TextComponent from "./TextComponent";
export const DropDownComponent = (props) => {
  return (
    <div>
      <select
        style={{
          background: "#FFFFFF",
          border: "1px solid #E8E8EA",
          borderRadius: "5px",
          width: "340px",
          height: "55px",
        }}
      >
        {props.options?.map((m) => (
          <option value={m}>{m}</option>
        ))}
      </select>
    </div>
  );
};
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
          flexDirection:
            props.type === "text" || props.type === "number" ? "column" : "row",
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
          display: "flex",
          background: "#FFFFFF",
          border: "1px solid #E8E8EA",
          borderRadius: "5px",
          width: "450px",
          height: "53px",
          marginTop: "21px",
          backgroundColor: "#F2F2F2",
         
        }}
        type="text"
      ></input>
    </div>
  );
};

export const SelectComponent = () => {
  const [select, setSelects] = useState();
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
        }}
      >
        <option>19QSA011</option>
        <option>19HSM002</option>
        <option>19ASR008</option>
        <option>19CTR105</option>
        <option>19MNS202</option>
      </select>
    </div>
  );
};
export const BranchSelectComponent = () => {
  const [select, setSelects] = useState();
  return (
    <div>
      <select
        style={{
          background: "#FFFFFF",
          border: "1px solid #E8E8EA",
          borderRadius: "5px",
          width: "340px",
          height: "55px",
          opacity: "0.8",
          padding: "8px 16px",
        }}
      >
        <option>B.E</option>
        <option>B.TECH</option>
      </select>
    </div>
  );
};
export const DepartmentSelectComponent = () => {
  const [select, setSelects] = useState();
  return (
    <div>
      <select
        style={{
          background: "#FFFFFF",
          border: "1px solid #E8E8EA",
          borderRadius: "5px",
          width: "340px",
          height: "55px",
          padding: "8px 16px",
          opacity: "0.5",
          opacity: "0.8",
        }}
      >
        <option>EEE</option>
        <option>CSE</option>
        <option>ECE</option>
        <option>MECH</option>
      </select>
    </div>
  );
};
