import React from "react";
import MiniCard from "../MiniCard/MiniCard";

const Favorites = () => {
  const currentFavorites = JSON.parse(localStorage.getItem("favorites"));

  return (
    <div className="flex gap-6 p-8">
      {currentFavorites &&
        currentFavorites.map((item) => <MiniCard item={item} key={item.id} />)}
      {(currentFavorites === null || currentFavorites.length === 0) && (
        <div className="text-white text-3xl font-bold">
          <span className="block">None</span>
        </div>
      )}
    </div>
  );
};

export default Favorites;
