import React, { useState } from "react";
import { CardCarousel } from "../CardCarousel/CardCarousel";
import { styleButton } from "../Carrousel/Carrousel";

export const SmCarousel = ({ device }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentIndex((currentIndex + 1) % components.length);
    };

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex - 1 + components.length) % components.length);
    };

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

    const components = [<>
    <CardCarousel />
    <h1>Soy Miqueas</h1>
    </>, <h2>Que tal</h2>, <h3>Soy Miqueas</h3>];


    return (
        <>
            <div className="w-full h-fit flex justify-center items-center p-4">
                <div className="bg-transparent flex justify-between flex-row mt-[15px] absolute w-full">
                    <button className={styleButton + " text-black"} onClick={handleNextClick}>{"<"}</button>
                    <button className={styleButton + " text-black"} onClick={handlePrevClick}>{">"}</button>
                </div>
                <div className="w-[95%] flex gap-2 justify-between ">
                    {components[currentIndex]}
                </div>
            </div>
        </>
    );
};
