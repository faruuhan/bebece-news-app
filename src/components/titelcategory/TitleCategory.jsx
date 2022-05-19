import React from "react";

const TitleCategory = (props) => {
  return (
    <div className="border-l-4 border-teal-700 mb-4 pl-4">
      <h3 className="text-[20px] font-medium">{props.titleHeader}</h3>
    </div>
  );
};

const TitleCategoryLoad = () => {
  return (
    <div className="animate-pulse border-l-4 slate-teal-300 mb-4 pl-4">
      <div className="bg-slate-300 h-6 w-32 rounded" />
    </div>
  );
};

export { TitleCategory, TitleCategoryLoad };
