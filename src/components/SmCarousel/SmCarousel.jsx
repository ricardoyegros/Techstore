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

    let products = ['Producto1', 'Producto2', 'Producto3', 'Producto4', 'Producto5', 'Producto6','Producto7','Producto8', 'Producto9'];
    
    const toRender = (size, slice, products) => {
        let total = 3;
        if (size === "Desktop") total = 3;
        if (size === "Tablet-portrait") total = 2;
        if (size === "Mobile-portrait" || size === "Mobile-landscape") total = 1;
        let r = [];
       
        for (let i = slice; i < products.length && r.length < total; i++) {
            r.push(<CardCarousel text={products[i]} />);
        }
        return r;
    };

    const components = [toRender(device, 0, products), toRender(device, 3, products), toRender(device, 6, products)];


    return (
        <>
            <div className="w-full h-fit flex justify-center items-center p-4">
                <div className="bg-transparent flex justify-between flex-row mt-[15px] absolute w-full">
                    <button className={styleButton + " text-black"} onClick={handlePrevClick}>{"<"}</button>
                    <button className={styleButton + " text-black"} onClick={handleNextClick}>{">"}</button>
                </div>
                <div className="w-[95%] flex gap-2 justify-between ">
                    {components[currentIndex]}
                </div>
            </div>
        </>
    );
};
