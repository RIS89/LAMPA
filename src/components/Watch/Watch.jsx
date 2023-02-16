import React, { useEffect, useState } from "react";

const Watch = () => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setTimeout(() => {
      //   console.log("+1 sec");
      setDate(new Date());
    }, 10000);
  }, [date]);

  return (
    <div className="flex items-center gap-x-4">
      <div className=" flex items-center justify-center text-4xl leading-8 text-white font-medium align-middle">
        {`${date.getHours().toString().padStart(2, "0")}:${date
          .getMinutes()
          .toString()
          .padStart(2, "0")}`}
      </div>
      <div className="flex flex-col h-full mr-6 justify-around">
        <div className="text-l text-white leading-4 text-left">
          {`${date.getDate().toString().padStart(2, "0")} ${date.toLocaleString(
            "default",
            {
              month: "long",
            }
          )} ${date.toLocaleString("default", {
            year: "numeric",
          })}`}
          <br />
          {date.toLocaleString("default", {
            weekday: "long",
          })}
        </div>
      </div>
    </div>
  );
};

export default Watch;
