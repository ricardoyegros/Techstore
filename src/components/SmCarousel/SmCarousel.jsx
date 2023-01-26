import React, { useState } from "react";
import { CardCarousel } from "../CardCarousel/CardCarousel";
import { styleButton } from "../Carrousel/Carrousel";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export const SmCarousel = ({ device }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const allProducts = useSelector((state) => state.getAllProductsReducer.allProducts.content);
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % components.length);
  };
  
  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + components.length) % components.length);
  };

  let products = [];
  if(allProducts){
    for(let i = 0; i < 9 ; i++){
      products.push(allProducts[Math.floor(Math.random()*allProducts.length)]);
    }
  }
  
  const toRender = (size, slice, products) => {
    let total = 3;
    if (size === "Desktop") total = 3;
    if (size === "Tablet-portrait") total = 2;
    if (size === "Mobile-portrait" || size === "Mobile-landscape") total = 1;
    let r = [];

    for (let i = slice; i < products.length && r.length < total; i++) {
      r.push(<CardCarousel product={products[i]} />);
    }
    return r;
  };

  const components = [
    toRender(device, 0, products),
    toRender(device, 3, products),
    toRender(device, 6, products),
  ];
  const divButtonClass = "bg-gray-400 rounded-full h-14 w-14 mx-5"
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center p-4">
        <div className="bg-transparent flex justify-between flex-row mt-[15px] absolute w-full">
          <div className={divButtonClass}>
            <button
              className={
                styleButton + " text-black mx-1 -mt-1"
              }
              onClick={handlePrevClick}
            >
              {"<"}
            </button>
          </div>
          <div className={divButtonClass}>
            <button
              className={
                styleButton + " text-black mx-2 -mt-1"
              }
              onClick={handleNextClick}
            >
              {">"}
            </button>
          </div>
        </div>
        <motion.div
          key={currentIndex}
          initial={{ x: 150 }}
          animate={{ x: 0 }}
          exit={{ x: -150 }}
          transition={{ duration: 0.5 }}
          className="w-[95%] flex gap-2 justify-between -md:justify-center"
        >
          {components[currentIndex]}
        </motion.div>
      </div>
    </>
  );
};
