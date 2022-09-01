import React from "react";
import TextComponent from "./TextComponent";
import BigDdComponent from "./BigDdComponent";
import {
  BranchSelectComponent,
  DropDownComponent1,
  DepartmentSelectComponent,
} from "./DropDownComponent";
import { SubDateComponent } from "./SubDateComponent";
import { TimeRangeComponent } from "./TimeRangeComponent";

export const SubWrapperComponent = () => {
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
          <BranchSelectComponent />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TextComponent label="Department" />
          <DepartmentSelectComponent />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <TextComponent label="Semester" />
          <DropDownComponent1 />
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <TextComponent label="Exam Type" />
        <BigDdComponent />
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
