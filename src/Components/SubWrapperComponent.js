import React,{useState} from "react";
import TextComponent from "./TextComponent";

import {
  SelectComponent,
  DropDownComponent1,
} from "./DropDownComponent";
import { SubDateComponent } from "./SubDateComponent";
import { TimeRangeComponent } from "./TimeRangeComponent";

export const SubWrapperComponent = () => {
  const [branch,setBranch]=useState(['B.E','B.TECH'])
  const [dept,setDept]=useState([['EEE','ECE','CSE','MECH'],'IT'])
  const [exam,setExam]=useState(['Internal','Model','Semester'])
  return (
    <div style={{ padding: "37px 51px 50px", backgroundColor: "#FBFBFB" }}>
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
          marginTop: "-15px",
        }}
      >
        <div>
          <TextComponent label="Branch" />
          <SelectComponent data={branch } style={{width:"340px"}}/>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TextComponent label="Department" />
          <SelectComponent data={branch[0] && dept[0]} style={{width:"340px"}}/>
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TextComponent label="Semester" />
          <DropDownComponent1 />
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <TextComponent label="Exam Type" />
        <SelectComponent data={exam} style={{width:"96.9%"}}/>
      </div>
      <div style={{ marginTop: "30px" }}>
        <TextComponent label="Time Range" />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TimeRangeComponent />
        </div>
      </div>

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
          marginTop: "-17px",
        }}
      >
        <div
          style={{
            marginTop: "30px",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "27px",
          }}
        >
          <TextComponent label="Subjects" />
          <DropDownComponent1 />
        </div>
        <div
          style={{
            marginTop: "30px",
            fontWeight: "700",
            fontSize: "20px",
            lineHeight: "27px",
            marginLeft: "30px",
          }}
        >
          <TextComponent label="Lab" />
          <DropDownComponent1 />
        </div>
      </div>
      <div>
        <div style={{ display: "flex", direction: "right" }}>
          <TextComponent label="Subject 1" />
          <TextComponent />
        </div>
        <SubDateComponent />
      </div>
      <div>
        <TextComponent label="Subject 2" />
        <SubDateComponent />
      </div>
      <div>
        <TextComponent label="Subject 3" />
        <SubDateComponent />
      </div>
      <div>
        <TextComponent label="Subject 4" />
        <SubDateComponent />
      </div>
      <div>
        <TextComponent label="Subject 5" />
        <SubDateComponent />
      </div>
      <div
        style={{
          marginTop: "30px",
          fontWeight: "700",
          fontSize: "20px",
          lineHeight: "27px",
        }}
      >
        <TextComponent label="Lab" />
      </div>
      <div>
        <TextComponent label="Lab 1" />
        <SubDateComponent />
      </div>
      <div>
        <TextComponent label="Lab 2" />
        <SubDateComponent />
      </div>
    </div>
  );
};
export default SubWrapperComponent;
