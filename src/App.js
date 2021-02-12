import { React, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { TourApp } from "./index";

const Loading = () => {
  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setIsloading(!isLoading);
  }, []);
  return (
    <main>
      <p>hello</p>
      <TourApp />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
