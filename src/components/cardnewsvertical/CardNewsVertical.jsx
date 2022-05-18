import React from "react";

const CardNewsVertical = (props) => {
  return (
    <div className="flex flex-col gap-2">
      {props.news.map((items) => {
        return (
          <div className="flex gap-1">
            <img src={items.urlToImage} className="aspect-[4/3] rounded-md h-full w-[150px]" alt={items.title} />
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-base">{items.title}</h3>
              <p className="text-neutral-400 font-normal">{items.publishedAt}</p>
              <p className="text-neutral-700 font-normal">{items.source.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const CardNewsVerticalLoad = (props) => {
  return (
    <div className="flex flex-col gap-2">
      {props.skeleton.map((items) => {
        return (
          <div className="animate-pulse flex gap-1" key={items}>
            <div className="aspect-[4/3] bg-slate-300 animate-pulse rounded-md h-full w-[150px]" />
            <div className="flex flex-col gap-3 w-full">
              <div className="h-3 bg-slate-300 rounded" />
              <div className="h-3 bg-slate-300 rounded" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { CardNewsVertical, CardNewsVerticalLoad };
