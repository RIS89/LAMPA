import React from "react";
import BestFilms from "../BestFilms/BestFilms";
import BestSeries from "../BestSeries/BestSeries";
import NewAdds from "../NewAdds/NewAdds";

const Main = () => {
  return (
    <div className="bg-transparent h-full w-full px-8 pt-8 ">
      <BestFilms />
      <BestSeries />
      {/* <NewAdds /> */}
    </div>
  );
};

export default Main;
