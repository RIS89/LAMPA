import React from "react";

const MiniCard = () => {
  return (
    <div>
      <div className="bg-red-500 text-white rounded w-5 h-5 text-sm text-center relative top-12 right-2">
        TV
      </div>
      <div className="w-48 h-72 bg-white flex items-end justify-end rounded-xl hover:outline hover:outline-offset-4 hover:outline-4 hover:outline-white mb-3">
        <div className="w-9 h-7 bg-black opacity-50 text-white text-base font-semibold text-center rounded-br-xl rounded-tl-lg ">
          7.8
        </div>
      </div>
      <div className="text-xl text-white">Name film</div>
      <div className="text-base text-white">Year</div>
    </div>
  );
};

export default MiniCard;
