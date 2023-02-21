import React, { useEffect, useState } from "react";
import MiniCard from "../MiniCard/MiniCard";

const BestSeries = () => {
  const [bestSeries, setBestSeries] = useState([]);
  const createFetch = () => {
    const fetchMap = {};

    return (url, options) => {
      if (!fetchMap[url]) {
        fetchMap[url] = fetch(url, options)
          .then((res) => res.json())
          .then((res) => setBestSeries(res.docs)); // !!!!!!!!!!!!!!!!!!!!
      }

      return fetchMap[url];
    };
  };

  const myFetch = createFetch();

  useEffect(() => {
    myFetch(
      "https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2017-2023&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=DSFRAHR-R5YMYQC-NYQTV0R-KBKGB5T"
    );
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {bestSeries.length > 0 && (
        <div className="bg-transparent w-full overflow-auto px-4">
          <h2 className=" text-white  my-3 text-xl">Лучшие сериалы</h2>
          <div className="flex gap-5">
            {bestSeries.map((item, index) => (
              <MiniCard item={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BestSeries;
