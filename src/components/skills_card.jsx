import React from "react";

function Card({ topic, status, percentage = 50 }) {
  return (
    <div className="bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 shadow-md rounded-lg border border-white mx-8 my-4 w-full md:w-1/2 lg:w-1/3 card_glow cursor-pointer">
      <h3 className="text-lg font-mono font-bold mb-2 text-white">{topic}</h3>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-medium inline-block py-1 px-2 uppercase rounded-full text-white bg-white-200">
              {status}
            </span>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold inline-block text-cyan-400">
              {percentage}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-black border border-cyan-400 glow_skill">
          <div
            style={{ width: `${percentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-cyan-400"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Card;