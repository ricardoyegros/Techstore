import React from "react";


export const CardCarousel = ({}) => {
  return (
    <div className="w-[320px] h-[140px] border-solid border-2 border-border rounded-2xl flex items-center justify-center gap-6">
      <img
        src="https://images.fravega.com/f300/5ab6af9703136da67b83d8ffa568ecf0.jpg"
        alt="loading..."
        className="h-32 w-32"
      />
      <div className="h-full flex justify-center items-center text-primary flex-col bg-transparent">
        <h4>Notebook Test</h4>
        <h4>(6 items left)</h4>
      </div>
    </div>
  );
};
