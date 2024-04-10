import Button from "./components/Button";
import AdviceDsiplay from "./components/AdviceDisplay";
import getAdvice from "./api";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");

  const handleClick = async () => {
    const res = await getAdvice();
    setAdvice(res.slip.advice);
    console.log(res.slip.advice);
  };

  return (
    <div>
      <Button adviceOnClick={handleClick} />
      <AdviceDsiplay advice={advice} />
    </div>
  );
}

export default App;
