import React, { useContext } from "react";
import { Context } from "../../App.Reduser";

const MiniPerson = ({ person }) => {
  const { dispatch } = useContext(Context);

  return (
    <div
      className="flex rounded-lg hover:bg-white hover:text-black w-64"
      onClick={() => {
        dispatch({
          type: "setIdCurrentPerson",
          payload: person.id,
        });
        dispatch({
          type: "setIdCurrentVideo",
          payload: null,
        });
      }}
    >
      <div className="w-20 h-20">
        <img
          className="rounded-lg object-cover w-20 h-20"
          src={person.photo}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center px-4  whitespace-nowrap">
        <div className="flex-wrap text-lg">{person.name}</div>
        <div className="">{`${person.enProfession[0].toUpperCase()}${person.enProfession
          .slice(1)
          .toLowerCase()}`}</div>
      </div>
    </div>
  );
};

export default MiniPerson;
