import React from "react";
import MiniPerson from "../MiniPerson/MiniPerson";

const Persons = ({ persons }) => {
  return (
    <div className="flex flex-col text-white gap-4 pb-4">
      <div id="persons" className="text-2xl font-light">
        Режиссер
      </div>
      <div className="flex gap-4 overflow-auto pb-3">
        {persons
          .filter((item) => item.enProfession === "director")
          .map((person) => (
            <MiniPerson key={person.id} person={person} />
          ))}
      </div>

      <div id="persons" className="text-2xl font-light">
        Актеры
      </div>
      <div className="flex gap-4 overflow-auto pb-3">
        {persons
          .filter((item) => item.enProfession === "actor")
          .map((person) => (
            <MiniPerson key={person.id} person={person} />
          ))}
      </div>
    </div>
  );
};

export default Persons;
