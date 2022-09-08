import React from "react";
export const CheckBox = ({onChange=()=>null}) => {
    return (
      <div>
        <input type="checkbox" onClick={onChange}/>
      </div>
    );
  };