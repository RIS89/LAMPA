import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App.Reduser";
import youtube from "../../img/yt.svg";
const FullCard = () => {
  const [fullInfo, setFullInfo] = useState(null);
  const { state } = useContext(Context);
  const createFetch = () => {
    const fetchMap = {};

    return (url, options) => {
      if (!fetchMap[url]) {
        fetchMap[url] = fetch(url, options)
          .then((res) => res.json())
          .then((res) => setFullInfo(res));
      }
      return fetchMap[url];
    };
  };
  const myFetch = createFetch();
  useEffect(() => {
    myFetch(
      `https://api.kinopoisk.dev/v1/movie/${state.idCurrentVideo}?token=DSFRAHR-R5YMYQC-NYQTV0R-KBKGB5T`
    );
    // eslint-disable-next-line
  }, []);

  const getCountries = (setCountries) =>
    setCountries.map((item) => item.name).join(" | ");
  const getGenres = (setGenres) =>
    setGenres.map((item) => item.name).join(" | ");
  const getAllComments = (setComments) =>
    Object.values(setComments).reduce((sum, item) => item + sum, 0);

  return (
    <>
      {fullInfo !== null && (
        <div className="bg-transparent h-full w-full px-8 pt-8 ">
          <div className="flex w-full gap-9">
            <div className=" w-64 h-96">
              <img
                className=" rounded-xl"
                src={`${fullInfo.poster.previewUrl}`}
                alt={`logo ${fullInfo.alternativeName}`}
              />
            </div>
            <div className=" h-full w-full flex flex-col">
              <div id="year-country" className="text-white mb-8">
                <span>{fullInfo.year}</span>
                <span className="text-slate-300">{`, ${getCountries(
                  fullInfo.countries
                )}`}</span>
              </div>
              <div className="text-white text-6xl mb-8">
                {fullInfo.names[0].name}
              </div>
              <div id="raitings" className="flex gap-5 mb-4">
                <div className="text-white flex">
                  <div className="bg-black/20 text-base items-center  rounded flex">
                    <div className="text-xl flex justify-center bg-black/50 rounded w-9 h-7 text-center">
                      {fullInfo.rating.kp.toFixed(1)}
                    </div>
                    <div className="px-3 ">KP</div>
                  </div>
                </div>
                <div className="text-white flex">
                  <div className="bg-black/20 text-base items-center  rounded flex">
                    <div className="text-xl flex justify-center bg-black/50 rounded w-9 h-7 text-center">
                      {fullInfo.rating.imdb}
                    </div>
                    <div className="px-3 ">IMDB</div>
                  </div>
                </div>
              </div>
              <div id="genres" className="flex flex-wrap text-white gap-3 mb-4">
                <div>{fullInfo.movieLength} мин</div>
                <div>●</div>
                <div>{getGenres(fullInfo.genres)}</div>
                <div>●</div>
                <div>Все отзывы: {getAllComments(fullInfo.votes)}</div>
              </div>
              <div id="youtube" className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-black/50 rounded-xl flex px-2 items-center justify-center">
                  <div>
                    <a
                      href={fullInfo.videos.trailers[0].url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img src={youtube} alt="" width={28} height={28} />
                    </a>
                  </div>
                </div>
                <div className="text-center before:content-[''] before:inline-block before:h-full before:align-middle ">
                  <svg
                    // height="60"
                    // width="120"
                    // preserveAspectRatio="xMidYMid"
                    viewBox="-4 -4 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=" stroke-zinc-50 hover:stroke-zinc-900 hover:bg-zinc-50 hover:rounded-full inline align-middle w-12 h-12"
                  >
                    {/* <g clip-path="url(#clip0_429_11040)"> */}
                    <path
                      d="M16 3H8C6.89543 3 6 3.89543 6 5V21L12 18L18 21V5C18 3.89543 17.1046 3 16 3Z"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* </g> */}
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-16">
            <div className="flex flex-col w-3/4 gap-5">
              <div className="text-white text-lg font-light  text-justify">
                <div className="text-white mb-3 w-full text-2xl">Подробно</div>
                {fullInfo.description}
              </div>
              <div className="text-white text-lg font-light text-justify flex  flex-col">
                <div className="text-white mb-3 w-full text-2xl">
                  {fullInfo.genres.length > 1 ? "Жанры" : "Жанр"}
                </div>
                <div className="flex gap-4">
                  {fullInfo.genres.map((genre) => (
                    <button className="bg-black/50 py-1 px-3 rounded-xl">
                      {`${genre.name[0].toUpperCase()}${genre.name
                        .slice(1)
                        .toLowerCase()}`}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-white text-lg font-light w-3/4 text-justify flex  flex-col">
                <div className="text-white mb-3 w-full text-2xl">
                  Производство
                </div>
                <div className="flex gap-4">
                  {fullInfo.productionCompanies.map((company) => (
                    <button className="bg-black/50 py-1 px-3 rounded-xl">
                      {`${company.name[0].toUpperCase()}${company.name
                        .slice(1)
                        .toLowerCase()}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-white flex flex-col ">
                <span className="">Дата релиза </span>
                <span className="text-2xl font-extralight">
                  {`${new Date(fullInfo.premiere.world)
                    .getDate()
                    .toString()
                    .padStart(2, "0")} ${new Date(
                    fullInfo.premiere.world
                  ).toLocaleString("default", {
                    month: "long",
                  })} ${new Date(fullInfo.premiere.world).toLocaleString(
                    "default",
                    {
                      year: "numeric",
                    }
                  )}`}
                </span>
              </div>
              <div className="text-white flex flex-col">
                <span className="">Бюджет</span>
                <span className="text-2xl font-extralight">{`${fullInfo.budget.currency} ${fullInfo.budget.value}`}</span>
              </div>
              <div className="text-white flex flex-col">
                <span className="">
                  {fullInfo.countries.length > 1 ? "Страны" : "Страна"}
                </span>
                <span className="text-2xl font-extralight">{`${getCountries(
                  fullInfo.countries
                )}`}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FullCard;
