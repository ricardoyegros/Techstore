import React from "react";
import { useSelector } from "react-redux";
export const LeftSideBar = () => {
  const categorys = useSelector(
    (state) => state.getAllCategorysReducer.allCategorys
  );
  const brands = useSelector((state)=>state.getAllBrandsReducer.allBrands);

  return (
    <div className="flex flex-col gap-2 justify-center items-center w-[30%] h-fit -lg:hidden">
      <div className="flex w-[80%] justify-between h-fit py-2 text-primary">
        <h4 className="select-none font-extrabold">Categorias</h4>
        <button className="hover:bg-details hover:rounded-lg px-1 text-gray1 font-bold">
          Reiniciar
        </button>
      </div>
      <div className="h-1 w-[80%] bg-primary"></div>

      <div className="flex w-[80%] flex-col gap-4 justify-between h-fit py-2 text-primary">
        {categorys &&
          categorys.map((category) => (
            <div  className="flex w-full items-center justify-center">
              <div className="flex w-full justify-between items-center gap-4">
                <label htmlFor={category.name} className="hover:cursor-pointer">
                  {category.name}
                </label>
                <input
                  type="checkbox"
                  id={category.id}
                  className="bg-details opacity-0 checked:opacity-100 w-6 h-6"
                />
              </div>
            </div>
          ))}
      </div>

      <div className="flex w-[80%] justify-between h-fit py-2 text-primary">
        <h4 className="font-extrabold select-none">Marcas</h4>
        <button className="hover:bg-details hover:rounded-lg px-1 text-gray1 font-bold">
          Reiniciar
        </button>
      </div>

      <div className="h-1 w-[80%] bg-primary"></div>

      <div className="flex w-[80%] flex-col gap-4 justify-between h-fit text-primary">
        {brands && brands.map((brand) => (
          <div key={brand.id} className="flex w-full items-center justify-center">
            <div className="flex w-full justify-between items-center gap-4">
              <label htmlFor={brand.name} className="hover:cursor-pointer">
                {brand.name}
              </label>
              <input
                type="checkbox"
                id={brand.id}
                className="bg-details opacity-0 checked:opacity-100 w-6 h-6"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
