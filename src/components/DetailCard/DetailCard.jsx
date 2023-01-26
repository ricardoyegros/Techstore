import React, { useEffect, useState } from "react";
import { StarRating } from "../StarsRating/StarRating";
import FavLogo from "../../assets/Fav-logo.svg";
import FavNoLogo from "../../assets/FavNo-logo.svg";
import CartLogo from "../../assets/cart-logo-product.svg";
import { useSelector } from "react-redux";
import { getDetailProduct } from "../../redux/actions/getDetailProduct";
import { useSearchParams } from "react-router-dom";

export const DetailCard = () => {
  const [state, setState] = useState(false);
  const [available, setAvailable] = useState("Si");
  const [id, setId] = useState();
  const [searchParams] = useSearchParams();
  useEffect(()=>{
      setId(searchParams.get('id'))
      getDetailProduct(id)
      console.log(id)
    },[id])
  let detailProduct = useSelector((state)=>state.getDetailProductReducer.detailProduct)
console.log(detailProduct);
  return (
    <div className="flex w-[90%] h-fit justify-center gap-4 -sm:flex-col">
      {/* Este es el div contenedor */}
      <div className="flex w-[60%] h-fit items-center flex-col gap-4 -sm:w-full">
        {/* Este div tiene las Imagenes */}

        <img
          className="w-[60%] -sm:w-[80%] rounded-2xl border-2 border-border"
          src="https://images.fravega.com/f300/5ab6af9703136da67b83d8ffa568ecf0.jpg"
          alt="Loading..."
        />

        <div className="flex w-[60%] -sm:w-[80%] justify-between gap-2">
          <img
            className="w-[48%] h-[30%] border-2 border-border rounded-2xl mb-4"
            src="https://images.fravega.com/f300/5ab6af9703136da67b83d8ffa568ecf0.jpg"
            alt="Loading..."
          />
          <img
            className="w-[48%] h-[30%] border-2 border-border rounded-2xl mb-4"
            src="https://images.fravega.com/f300/5ab6af9703136da67b83d8ffa568ecf0.jpg"
            alt="Loading..."
          />
        </div>
      </div>

      <div className="flex w-[40%] flex-col gap-2 text-2xl text-primary -sm:w-full -lg:text-xl">
        {/* Este div tiene el lado de la derecha */}

        <div className="flex w-full flex-col gap-2 -sm:w-full -sm:justify-center -sm:items-center">
          <div className="flex justify-between">
            <h2 className="font-bold">Notebook</h2>
            <div className="flex gap-2">
            <button
              onClick={() => setState(!state)}
              className="rounded-full p-2 bg-[#eee]"
            >
              {
                <img
                  src={state ? FavLogo : FavNoLogo}
                  alt="loading..."
                  className="w-6 h-6 hover:scale-125 transition-all"
                />
              }
            </button>
            <button className=' rounded-full p-2 bg-[#eee]'>
                    {<img src={CartLogo} alt="cart logo" className='w-6 h-6 hover:scale-125 transition-all' />}
                </button>
                </div>
          </div>

          <h2>Precio: 50$</h2>
          <StarRating numberOfStars={3.5} sizeStar={12} />
          <h2>
            Disponible: <strong>{available}</strong>
          </h2>
          <h2>Stock: 25</h2>
        </div>

        <div className="bg-border h-0.5 w-full mt-6"></div>

        <h2 className="font-bold">Descripción</h2>
        <p className="text-xl -lg:text-[1rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis
          voluptate aliquam, officia itaque nobis tenetur repellat laboriosam
          animi tempora accusantium, ipsum, rem quia accusamus necessitatibus
          dolor perspiciatis corporis voluptatibus.
        </p>
        <div className="bg-border h-0.5 w-full mt-6"></div>
        {available == "Si" && (
          <div className="w-full flex justify-center items-center mt-4">
            <div className="flex gap-4">
              <button className="bg-secondary p-1 rounded-none text-[1rem] text-text1 hover:font-bold">
                Comprar
              </button>
              <button className="bg-secondary p-1 rounded-none text-[1rem] text-text1 hover:font-bold">
                Agregar carrito
              </button>
            </div>
          </div>
        )}
        <div className="bg-border h-0.5 w-full mt-6"></div>
      </div>
    </div>
  );
};
