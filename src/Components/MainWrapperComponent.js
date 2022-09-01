import React from "react";
import SubWrapperComponent from "./SubWrapperComponent";
import { ButtonSave } from "./ButtonComponent";

export const MainWrapperComponent = () => {
  return (
    <div style={{ padding: "35px 122px 185px" }}>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <img
          style={{
            height: "24px",
            width: "24px",
            flexDirection: "row",
            display: "flex",
            marginTop: "4px",
          }}
          src="https://i.ibb.co/HnM1WDs/Vectorarrow.png"
        />
        <div
          style={{
            marginLeft: "19px",
            marginBottom: "4px",
            flexDirection: "row",
            display: "flex",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "24px",
            lineHeight: "33px",
          }}
        >
          Create new schedule
        </div>
      </div>
      <SubWrapperComponent/>
      <ButtonSave />
    </div>
  );
};
export default MainWrapperComponent;
