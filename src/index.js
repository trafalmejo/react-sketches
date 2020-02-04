import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./css/dice.css";
import Counter from "./components/counter";
import Dices from "./components/dices";

const element = <h1>Hello World</h1>;
console.log(element);

ReactDOM.render(<Dices amount={100} />, document.getElementById("root"));
