import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import MyWork from "./components/MyWork";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <hr className="h-0.25 bg-white w-full" />
      <About />
      <hr className="h-0.25 bg-white w-full" />
      <MyWork />
    </div>
  );
};

export default App;
