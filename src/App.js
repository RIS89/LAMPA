import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./index";

function App() {
  return (
    <div className="bg-gray-500 flex flex-col  min-h-full max-h-full">
      <Header />
      <Main />
    </div>
  );
}

export default App;
