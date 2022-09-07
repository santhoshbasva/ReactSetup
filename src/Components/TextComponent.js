import React from "react";

const TextComponent = (props) => {
  const { className,label,children} = props;
  return (
    <div className= {className}>
      {label}
      {children}
    </div>
  );
};
export default TextComponent;
