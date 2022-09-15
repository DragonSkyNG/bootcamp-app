import { useCallback, useState } from "react";
import DemoComponent from "./components/ExampleOne/DemoComponent";
import Button from "./components/UI/Button";
import "./App.css";

function App() {
  const [paragraphIsTrue, setParagraphIsTrue] = useState(true);
  // Here useCallback is used to momorize changeHandler function
  // And it will be re-evaluated only if the dependency changes
  // Because we're using state here we don't need to put it in dependency, react does it automatically
  const changeHandler = useCallback(() => {
    setParagraphIsTrue((prevParagraphIsTrue) => !prevParagraphIsTrue);
  }, []);
  console.log("App is (re)evaluated");
  return (
    <div className="App">
      {/* Here we can pass static boolean or state as prop
          If we pass static prop the component won't be re-evaluated     
          But if we pass state it will be re-evaluated */}
      <DemoComponent paragraphIsTrue={paragraphIsTrue} />
      {/* Even though we already useCallback on changeHandler
          we still need to use React.memo() on button component for it to not re-evaluate */}
      <Button onClick={changeHandler}>Change paragraph</Button>
    </div>
  );
}

export default App;
