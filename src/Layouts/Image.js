import React from "react";
import TextComponent from "../Components/TextComponent";
import ButtonComponent from "../Components/ButtonComponent";

const Image = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          align: "center",
          marginLeft: "36%",
          marginTop: "1%",
        }}
      >
        <img src="https://i.ibb.co/m6n1ZR4/Events-rafiki-1.png"  />
      </div>
      <div
        style={{
          marginLeft: "34%",
          marginBottom: "1%",
          fontSize: "19px",
          fontFamily: "Nunito",
          marginTop: "1px",
          posotion: "absolute",
          bottom: "0px",
        }}
      >
        <TextComponent label="There are no schedules get started by creating schedules" />
      </div>
      <ButtonComponent />
    </div>
  );
};

export default Image;
