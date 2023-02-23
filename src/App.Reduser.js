import { createContext } from "react";

export const Context = createContext({});

export const initialState = {
  idCurrentVideo: null,
};
export const action = {
  type: "setIdCurrentVideo",
};

export function reducer(state, action) {
  switch (action.type) {
    case "setIdCurrentVideo":
      const newStateAdd = {
        ...state,
        idCurrentVideo: action.payload,
      };
      //   localStorage.setItem("cityColl", JSON.stringify(newStateAdd.cityColl));
      return newStateAdd;
    // case "addCityStorage":
    //   return { ...state, cityColl: action.payload };
    // case "removeCity":
    //   const newStateDel = {
    //     ...state,
    //     cityColl: state.cityColl.filter(
    //       (city) => city.cityId !== action.payload
    //     ),
    //   };
    //   localStorage.setItem("cityColl", JSON.stringify(newStateDel.cityColl));
    //   return newStateDel;
    // case "changeIsShowDrop":
    //   return { ...state, isShowDrop: action.payload };

    default:
      return state;
  }
}

export function AddCity(city, cityId) {}
