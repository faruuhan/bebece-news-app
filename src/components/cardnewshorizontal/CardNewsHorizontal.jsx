import React from "react";

const CardNewsHorizontal = (props) => {
  return (
    <div className="flex flex-col w-full lg:w-[23rem] relative">
      <img src={!props.news.urlToImage ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg" : props.news.urlToImage} alt={props.news.title} className="w-full aspect-[4/3]" />
      <div className="w-full h-full absolute top-0 left-0 bg-gray-800 bg-opacity-50"></div>
      <div className="absolute bottom-2 left-2">
        <h2 className="font-semibold text-white">{props.news.title}</h2>
        <h2 className="font-normal text-gray-200">{props.news.source.name}</h2>
      </div>
    </div>
  );
};

const CardNewsHorizontalLoad = (props) => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col w-[18rem] h-[250px] bg-slate-300 relative z-0" key={props.skeleton}>
        <div className="flex flex-col absolute bottom-2 left-2">
          <div className="bg-slate-500 h-4 w-full"></div>
          <div className="bg-slate-500 h-4 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export { CardNewsHorizontal, CardNewsHorizontalLoad };
