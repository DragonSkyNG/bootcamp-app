const CustomParagraph = (props) => {
  console.log("CustomParagraph is (re)evaluated");
  return <p>{props.children}</p>;
};

export default CustomParagraph;
