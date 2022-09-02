import React from 'react'
import TextComponent from './TextComponent'

export const Create = () => {
  return (
    <div>
        <button
        style={{
          width: "174px",
          height: "40px",
          backgroundColor:"#5375E2",
          border:" 1px solid #5375E2",
          borderRadius:"5px",
          margin:"100px"
        }}
      >
        <div
          style={{
            fontSize: "40px",
            color: "white",
            fontFamily: "Nunito",
            marginTop:"-15px"
          }}
        >
          <TextComponent label="+ Create New" />
        </div>
      </button>
    </div>
  )
}

export const Allocate = () => {
  return (
    <div>
      <button
        style={{
          width: "100px",
          height: "36px",
          backgroundColor:"#ffffff",
          border:" 1px solid #5375E2",
          borderRadius:"5px",
          marginTop:"10px",
          marginLeft:"105px"
        }}
      >
        <div
          style={{
            fontSize: "16px",
            color: "#5375E2",
            fontFamily: "Nunito",
            marginTop:"-15px"
          }}
        >
          <TextComponent label="Allocate" />
        </div>
      </button>
    </div>
  )
}
export const CheckButton = () => {
  return (
    <div
      style={{ padding: "16px", borderColor: "#5375E2" }}
    >
      <input type="checkbox" class="large" color="blue" />
    </div>
  );
};


