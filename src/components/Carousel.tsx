import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface MovieCardProps {
  movie: any;
  num: number;
}

function MovieCard({ movie, num }: MovieCardProps) {
  const [open, setOpen] = useState(false);
  var padding = "";

  if (num === 0) {
    padding = "ml-0";
  } else {
    padding = "ml-2";
  }

  return (
    <div className="">
      <div
        className={
          " w-[18rem] rounded transition ease-in-out overflow-hidden " +
          (open === true
            ? "bg-zinc-800 scale-x-[1.4] scale-y-[1.3] origin-center fixed block shadow-2xl shadow-black"
            : "") +
          padding
        }
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <img
          className={open === true ? "rounded-t" : "rounded"}
          src={"https://image.tmdb.org/t/p/w500/" + movie.backdrop_path}
        />
        <div
          className={
            (open === true ? "h-max" : "h-0") +
            " transition ease-in-out overflow-hidden "
          }
        >
          <div className="flex p-3 gap-1">
            <span className="flex items-center justify-center rounded-full card-icon-ring border-solid bg-white border-[1px]">
              <Icon
                id="cardIcons"
                icon="teenyicons:play-solid"
                fontSize="large"
                className="text-black"
              />
            </span>
            <span className="flex items-center justify-center rounded-full card-icon-ring border-solid border-white border-[1px]">
              <Icon id="cardIcons" icon="mdi-light:plus" fontSize="large" />
            </span>
            <span className="flex items-center justify-center rounded-full card-icon-ring border-solid border-white border-[1px]">
              <Icon id="cardIcons" icon="bi:hand-thumbs-up" fontSize="large" />
            </span>
            <span className="flex items-center justify-center rounded-full card-icon-ring border-solid border-white border-[1px]">
              <Icon
                id="cardIcons"
                icon="system-uicons:cross"
                fontSize="large"
              />
            </span>
            <span className="flex items-center justify-center rounded-full card-icon-ring border-solid border-white border-[1px] ml-auto">
              <Icon id="cardIcons" icon="ep:arrow-down" fontSize="large" />
            </span>
          </div>
          <h5 className="mb-2 ml-2 tracking-tight text-gray-900 dark:text-white font-netflix_sans text-[1.2rem] font-semibold">
            {movie.title}
          </h5>
        </div>
      </div>
    </div>
  );
}

interface genreProps {
  genre: string;
}

function Carousel({ genre }: genreProps) {
  var genreDict = {
    Comedy: 35,
    Horror: 27,
    Mystery: 9648,
    Romance: 10749,
    Action: 28,
    Fantasy: 14,
    "Science Fiction": 878,
  };

  var dataList: string[] = [];
  const [Data, setData]: [string[], Function] = useState([]);

  if (Data.length === 0) {
    $.getJSON(
      "https://api.themoviedb.org/3/discover/movie?api_key=dfce89c104fbe14bd8a1cf3145859620&with_genres=" +
        genreDict[genre].toString(),
      function (data) {
        for (var i = 0; i < 10; i++) {
          dataList.push(data.results[i]);
        }
        setData(dataList);
      }
    );
  }
  return (
    <div className="ml-[3.5rem] mt-[2rem] text-slate-200">
      <h1 className="font-netflix_sans text-[1.4rem] font-semibold tracking-wide">
        {genre}
      </h1>
      <div className="flex overflow-x-hidden mt-0 pt-0">
        {Data.map((item, index) => (
          <MovieCard key={index.toString()} movie={item} num={index} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
