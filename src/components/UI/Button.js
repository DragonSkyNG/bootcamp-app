import React from "react";

const Button = (props) => {
  console.log("Button is (re)evaluated");
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default React.memo(Button);
