import React from "react";

const CardNewsVertical = (props) => {
  return (
    <div className="flex gap-1">
      <img src={!props.news.urlToImage ? "https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg" : props.news.urlToImage} alt={props.title} className="aspect-[4/3] h-full w-[200px]" />
      <div className="flex flex-col w-full">
        <h3 className="font-semibold text-base">{props.news.title}</h3>
        <p className="text-neutral-400 font-normal">{props.news.publishedAt}</p>
        <p className="text-neutral-700 font-normal">{props.news.source.name}</p>
      </div>
    </div>
  );
};

const CardNewsVerticalLoad = (props) => {
  return (
    <div className="animate-pulse flex gap-1" key={props.skeleton}>
      <div className="aspect-[4/3] bg-slate-300 animate-pulse rounded-md h-full w-[150px]" />
      <div className="flex flex-col gap-3 w-full">
        <div className="h-3 bg-slate-300 rounded" />
        <div className="h-3 bg-slate-300 rounded" />
      </div>
    </div>
  );
};

export { CardNewsVertical, CardNewsVerticalLoad };
