import React, { useReducer } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./index";
import { Context, initialState, reducer } from "./App.Reduser";
import FullCard from "./components/FullCard/FullCard";
import FullPerson from "./components/FullPerson/FullPerson";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ dispatch, state }}>
      <div className="bg-gray-500 flex flex-col  min-h-screen max-h-full">
        <Header />
        {state.idCurrentVideo === null &&
          state.idCurrentPerson === null &&
          !state.showFavorites && <Main />}
        {state.idCurrentVideo !== null && <FullCard />}
        {state.idCurrentPerson !== null && <FullPerson />}
        {state.showFavorites && <Favorites />}
      </div>
    </Context.Provider>
  );
}

export default App;
