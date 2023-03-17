import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../App.Reduser";
import MiniCard from "../MiniCard/MiniCard";

const FullPerson = () => {
  const [fullPerson, setFullPerson] = useState(null);
  const [arrayFilms, setArrayFilms] = useState(null);
  const { state } = useContext(Context);

  const createFetch = () => {
    const fetchMap = {};

    return (url, options) => {
      if (!fetchMap[url]) {
        fetchMap[url] = fetch(url, options)
          .then((res) => res.json())
          .then((res) => {
            setFullPerson(res);
            return res;
          })
          .then((res) => [...new Set(res.movies.map((movie) => movie.id))])
          .then((res) => {
            let tenMovies = res
              .slice(0, 10)
              .map((id) =>
                fetch(
                  `https://api.kinopoisk.dev/v1/movie/${id}?token=DSFRAHR-R5YMYQC-NYQTV0R-KBKGB5T`
                ).then((res) => res.json())
              );
            console.log("array of id =>>>", tenMovies);
            return Promise.allSettled(tenMovies);
          })
          .then((res) => setArrayFilms(res));
      }
      return fetchMap[url];
    };
  };
  const myFetch = createFetch();
  useEffect(() => {
    myFetch(
      `https://api.kinopoisk.dev/v1/person/${state.idCurrentPerson}?token=DSFRAHR-R5YMYQC-NYQTV0R-KBKGB5T`
    );
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {fullPerson !== null && (
        <div className="flex flex-col w-full py-8 gap-6 text-white">
          <div className="flex w-full gap-10 px-8 ">
            <img
              className=" rounded-xl w-64 h-96"
              src={`${fullPerson.photo}`}
              alt={`${fullPerson.name}`}
            />
            <div id="fio" className="flex flex-col gap-7 items-baseline">
              <div className="bg-black/50 rounded-full text-lg px-3">
                {`${new Date(fullPerson.birthday)
                  .getDate()
                  .toString()
                  .padStart(2, "0")} ${new Date(
                  fullPerson.birthday
                ).toLocaleString("default", {
                  month: "long",
                })} ${new Date(fullPerson.birthday).toLocaleString("default", {
                  year: "numeric",
                })}`}
              </div>
              <div className="text-6xl font-bold">{fullPerson.name}</div>
              <div className="text-4xl">
                {fullPerson.birthPlace.map((item) => item.value).join(", ")}
              </div>
            </div>
          </div>
          {arrayFilms !== null && (
            <div className="flex gap-4 overflow-auto py-6 px-3">
              {arrayFilms.map((film) => (
                <MiniCard key={film.value.id} item={film.value} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FullPerson;
