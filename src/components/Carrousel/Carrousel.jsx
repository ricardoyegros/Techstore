import React, { useEffect, useState } from 'react';

export const styleButton = ' bg-trasparent font-extrabold p-2 my-0 mx-[5px] text-4xl';
export default function Carousel(props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(props.images[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.autoPlay || !props.showButtons) {
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, props.images);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, []);

    const selectNewImage = (index, images, next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500);
    };

    const previous = () => {
        selectNewImage(selectedIndex, props.images, false);
    };

    const next = () => {
        selectNewImage(selectedIndex, props.images);
    };

    const styleNoLoaded = "w-full h-auto transition";

    return (
        <div className='h-full flex items-center'>
            <img
                src={`/src/assets/${selectedImage}`}
                alt="Loading..."
                className={loaded ? styleNoLoaded + " opacity-100" : styleNoLoaded + " opacity-0"}
                onLoad={() => setLoaded(true)}
            />
            <div className='bg-transparent flex justify-between flex-row mt-[15px] absolute w-full'>
                {props.showButtons ? (
                    <>
                        <button className={styleButton + "  text-text2"} onClick={previous}>{"<"}</button>
                        <button className={styleButton + " text-text2"} onClick={next}>{">"}</button>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>

    );
}