import { useState } from "react";
import "./assets/css/App.css";
import Button from "./Components/Button/Button";

function App() {
  const [calc, setCalc] = useState("");
  const operators = ["/", "*", "+", "-", ".", "%"];
  const updateClick = (value) => {
    console.log(value, typeof value);
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);
  };

  const calculate = () => {
    if (!/[+\-*./%]/.test(calc.charAt(calc.length - 1)))
      setCalc(eval(calc).toString());
  };

  const changeSign = () => {
    if (!/[+\-*/%]/.test(calc.substring(1, calc.length))) {
      if (calc.charAt(0) === "-") {
        setCalc(calc.substring(1));
      } else {
        setCalc("-" + calc);
      }
    }
  };
  return (
    <div className="app">
      <div className="app__calculator__wrapper">
        <div className="screen">
          <span>{calc.substring(0, 10) || "0"}</span>
        </div>
        <Button clicked={() => setCalc("")}>AC</Button>
        <Button clicked={changeSign}>+/-</Button>
        <Button clicked={() => updateClick("%")}>%</Button>
        <Button orange clicked={() => updateClick("/")}>
          /
        </Button>

        <Button clicked={() => updateClick("7")}>7</Button>
        <Button clicked={() => updateClick("8")}>8</Button>
        <Button clicked={() => updateClick("9")}>9</Button>
        <Button orange clicked={() => updateClick("*")}>
          X
        </Button>

        <Button clicked={() => updateClick("4")}>4</Button>
        <Button clicked={() => updateClick("5")}>5</Button>
        <Button clicked={() => updateClick("6")}>6</Button>
        <Button orange clicked={() => updateClick("-")}>
          -
        </Button>

        <Button clicked={() => updateClick("1")}>1</Button>
        <Button clicked={() => updateClick("2")}>2</Button>
        <Button clicked={() => updateClick("3")}>3</Button>
        <Button orange clicked={() => updateClick("+")}>
          +
        </Button>

        <Button expand clicked={() => updateClick("0")}>
          0
        </Button>
        <Button clicked={() => updateClick(".")}>.</Button>
        <Button orange clicked={() => calculate()}>
          =
        </Button>
      </div>
    </div>
  );
}

export default App;
