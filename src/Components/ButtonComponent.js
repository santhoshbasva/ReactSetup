import React,{useState} from "react";
import TextComponent from "./TextComponent";
const ButtonComponent = () => {
  return (
    <div>
      <div>
        <button
          type={type}
          style={{
            marginLeft: "43%",
            backgroundColor: "#5375E2",
            borderRadius: "7px",
            border: "white",
            marginBottom: "5%",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              color: "white",
              padding: "13px 41px",
              fontFamily: "Nunito",
            }}
          >
            <TextComponent label="+ Create New" />
          </div>
        </button>
      </div>
    </div>
  );
};
export const Button1 = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);}
  return (
    <button
     
      style={{
        boxSizing: "border-box",
        border: " 1px solid #5375E2",
        borderRadius: "5px",
        background: "white",
        marginTop: "21px",
        color: "#5375E2",
        backgroundColor: isActive ? "#5375E2" : "white",
        color: isActive ? "white" : "",
      }}
    >
      <div
        style={{
          padding:"19px",
          width:"15px",
        }}
        onClick={handleClick}
      >
       FN
       </div>
    </button>
  );
};
export const Button2 = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);}
  return (
    <button
     
      style={{
        boxSizing: "border-box",
        border: " 1px solid #5375E2",
        borderRadius: "5px",
        background: "white",
        marginTop: "21px",
        color: "#5375E2",
        backgroundColor: isActive ? "#5375E2" : "white",
        color: isActive ? "white" : "",
      }}
    >
      <div
        style={{
          padding:"19px",
          width:"15px",
        }}
        onClick={handleClick}
      >
       AN
       </div>
    </button>
  );
};

export const ButtonSave = () => {
  return (
    <div>
      <button
        style={{
          position: "absolute",
          width: "174px",
          height: "40px",
          left: "1175px",
          top: "205%",
          background: "#5375E2",
          borderRadius: "5px",
          border: "white",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            color: "white",
            fontFamily: "Nunito",
            marginTop: "-15px",
          }}
        >
          <TextComponent label="Save" />
        </div>
      </button>
    </div>
  );
};
export const HourButton = () => {
  return (
    <div>
      <input
        min="0"
        max="12"
        type="Number"
        style={{
          marginLeft: "41px",
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          width: "52px",
          height: "48px",
          borderRadius: "4px",
          opacity: "0.5",
          padding: "",
        }}
      />
    </div>
  );
};
export const MinButton = () => {
  return (
    <div>
      <input
        min="00"
        max="59"
        type="Number"
        style={{
          marginLeft: "41px",
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          width: "52px",
          height: "48px",
          borderRadius: "4px",
          opacity: "0.5",
          padding: "",
        }}
      />
    </div>
  );
};
export const TimeButton = () => {
  return (
    <div>
      <input
       type="text"
        style={{
          marginLeft: "41px",
          background: "#FFFFFF",
          border: "1px solid #E5E5E5",
          width: "52px",
          height: "48px",
          borderRadius: "4px",
          opacity: "0.5",
          padding: "",
        }}
      />
    </div>
  );
};
export const CheckButton = () => {
  return (
    <div
      style={{ padding: "15px", marginLeft: "170px", borderColor: "#5375E2" }}
    >
      <input type="checkbox" class="large" color="blue" />
    </div>
  );
};

export default ButtonComponent;
