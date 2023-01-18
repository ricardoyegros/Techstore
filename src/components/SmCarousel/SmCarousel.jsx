import React from "react";
import { CardCarousel } from "../CardCarousel/CardCarousel";
import { styleButton } from "../Carrousel/Carrousel";

export const SmCarousel = ({ device }) => {

    const [carruselImages, setCarruselImages] = useState()


  const toRender = (size) => {
    let n = 3;
    if (size === "Desktop") n = 3;
    if (size === "Tablet-portrait") n = 2;
    if (size === "Mobile-portrait" || size === "Mobile-landscape") n = 1;
    let r = [];
    for (let i = 0; i < n; i++) {
      r.push(<CardCarousel />);
    }
    return r;
  };

  return (
    <div className="w-full h-fit flex justify-center items-center p-4">
      <div className="bg-transparent flex justify-between flex-row mt-[15px] absolute w-full">
        <button className={styleButton + " text-black"}>{"<"}</button>
        <button className={styleButton + " text-black"}>{">"}</button>
      </div>
      <div className="w-[95%] flex gap-2 justify-between ">
        {toRender(device)}
      </div>
    </div>
  );
};
