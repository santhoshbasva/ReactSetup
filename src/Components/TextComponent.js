import React from "react";
const TextComponent = (props) => {
  const { styleProps,label, className, isMandatory, children, CustomTag = "div" } = props;
  return (
    <div
      style={{
        marginTop: "15px",
        fontWeight: "700",
        fontSize: "16px",
        lineHeight: "22px",
      }}
    >
      <CustomTag className={className} style={styleProps}>
        {label}
        {isMandatory && <span>*</span>}
        {children}
      </CustomTag>
    </div>
  );
};

export default TextComponent;
