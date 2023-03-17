import { createContext } from "react";

export const Context = createContext({});

export const initialState = {
  idCurrentVideo: null,
  currentBgUrl: null,
  idCurrentPerson: null,
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
      return newStateAdd;
    case "setUrlBg":
      return { ...state, currentBgUrl: action.payload };
    case "setIdCurrentPerson":
      return { ...state, idCurrentPerson: action.payload };
    case "setShowFavorites":
      return { ...state, showFavorites: action.payload };

    default:
      return state;
  }
}

export function AddCity(city, cityId) {}
