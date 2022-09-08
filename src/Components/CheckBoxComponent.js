import React from "react";
export const CheckBox = (props) => {
    return (
      <div
      >
        <input type="checkbox" onChange={()=>{
          const value = props.cardDetails.filter(val=>{
            return val.completed === true;
          })
          props.setCardDetails(value)

        }}/>
      </div>
    );
  };