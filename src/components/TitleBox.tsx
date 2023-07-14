import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Icon } from "@iconify/react";
import "./style.css";

function TitleBox() {
  return (
    <div className="ml-[3.5rem] title-padding ">
      <div className="animate-shrink origin-bottom-left w-[30vw] relative -p-42">
        <img src="src/assets/TBB_logo.png" />
      </div>
      <p className="animate-hide font-netflix_sans_medium description-text text-zinc-100 w-1/3">
        A woman who moves into an apartment across the hall from two brilliant
        but socially awkward physicists shows them how little they know about
        life outside of the laboratory.
      </p>
      <div className="flex items-center">
        <div className="items-center flex button-area-padding">
          <button
            type="button"
            className="flex box-height rounded text-black bg-white hover:bg-zinc-300/[88%] leading-[88%] whitespace-nowrap"
          >
            <div className="flex items-center m-auto">
              <PlayArrowIcon id="playArrow" width="4rem" height="2rem" />
              <h2 className="text-clamp max-w-max">Play</h2>
            </div>
          </button>
          <button
            type="button"
            className="flex shrink-0 rounded long-box-height text-white ml-3 bg-zinc-500/80 hover:bg-zinc-700/70 leading-[88%] whitespace-nowrap"
          >
            <div className="flex items-center m-auto">
              <Icon id="playArrow" icon="icons8:info" color="white" />
              <h2 className="font-netflix_sans info-padding text-clamp w-max">
                More Info
              </h2>
            </div>
          </button>
        </div>
        <div className="flex items-center button-area-padding ml-auto gap-4">
          <span className="flex items-center justify-center rounded-full volume-ring border-solid border-white border-[1px]">
            <Icon id="volIcon" icon="mingcute:volume-line" fontSize="large" />
          </span>
          <div className="bg-zinc-800/70 pb-2 pl-3 pr-10 border-l-2">
            <img id="PgIcon" src="src/assets/PG.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleBox;
