import React from "react";
export const CheckBox = (props) => {
    return (
      <div
      >
        <input type="checkbox" onClick={()=>{
          const value = props.cardDetails.filter(val=>{
            return val.completed === true;
          })
          props.setCardDetails(value)

        }}/>
      </div>
    );
  };