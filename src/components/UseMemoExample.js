import { useMemo, useState } from "react";

const UseMemoExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const sum = (a, b) => {
    return Number(a) + Number(b);
  };
  const changeAHandler = (event) => {
    setA(event.target.value);
  };
  const changeBHandler = (event) => {
    setB(event.target.value);
  };
  // useMemo will call sum whenever one of the dependencies changes
  // This is not the best example as useMemo should be called on computation heavy functions
  const memorizedSum = useMemo(() => sum(a, b), [a, b]);
  return (
    <div>
      <input type="number" onChange={changeAHandler} />
      <input type="number" onChange={changeBHandler} />
      <p>{memorizedSum}</p>
    </div>
  );
};

export default UseMemoExample;
