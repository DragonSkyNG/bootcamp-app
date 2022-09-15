import React from "react";
import CustomParagraph from "./CustomParagraph";

const DemoComponent = (props) => {
  console.log("DemoComponent is (re)evaluated");
  return (
    <div>
      <CustomParagraph>
        {props.paragraphIsTrue
          ? "This paragraph is true"
          : "This paragraph is false"}
      </CustomParagraph>
    </div>
  );
};
// Because we use React.memo in parent component child component won't be re-evaluated too
export default React.memo(DemoComponent);
