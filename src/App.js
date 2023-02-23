import React, { useReducer } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./index";
import { Context, initialState, reducer } from "./App.Reduser";
import FullCard from "./components/FullCard/FullCard";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ dispatch, state }}>
      <div className="bg-gray-500 flex flex-col  min-h-full max-h-full">
        <Header />
        {state.idCurrentVideo === null && <Main />}
        {state.idCurrentVideo !== null && <FullCard />}
      </div>
    </Context.Provider>
  );
}

export default App;
