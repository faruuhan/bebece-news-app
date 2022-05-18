import React from "react";
import { AspectRatio, Image } from "@mantine/core";

const CardNewsVertical = (props) => {
  return (
    <>
      <div className="border-l-4 border-teal-700 mb-4 pl-4">
        <h3 className="text-[20px] font-medium">{props.titleHeader}</h3>
      </div>
      <div className="flex flex-col gap-2">
        {props?.news.map((items) => {
          return (
            <div className="flex gap-1">
              <AspectRatio ratio={4 / 3} style={{ width: 300 }}>
                <Image height={200} src={items.urlToImage} alt={items.title} withPlaceholder />
              </AspectRatio>
              <div className="flex flex-col w-full">
                <h3 className="font-semibold text-base">{items.title}</h3>
                <p className="text-neutral-400 font-normal">{items.publishedAt}</p>
                <p className="text-neutral-700 font-normal">{items.source.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
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
