import React from "react";
import ReactDOM from "react-dom";
import { Faq } from "./components/Faq/index";
import { Header } from "./components/Title/index";
import "./style.css";

const App = () => {
  return (
    <main className="main">
      <Header />
      <Faq />
    </main>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
