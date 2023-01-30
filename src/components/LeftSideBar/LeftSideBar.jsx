import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const LeftSideBar = ({ filter, setFilter, handleCheck }) => {
  const dispatch = useDispatch();
  const categorys = useSelector(
    (state) => state.getAllCategorysReducer.allCategorys
  );
  const brands = useSelector((state) => state.getAllBrandsReducer.allBrands);
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-[30%] h-fit -lg:hidden">
      <div className="flex w-[80%] justify-between h-fit py-2 text-primary">
        <h4 className="select-none font-extrabold">Categorias</h4>
      </div>
      <div className="h-1 w-[80%] bg-primary"></div>
      <div className="flex w-[80%] flex-col gap-4 justify-between h-fit py-2 text-primary">
        {categorys &&
          categorys.map((category) => (
            <div className="flex w-full items-center justify-center">
              <div className="flex w-full justify-between items-center gap-4">
                <button
                  value={category.id}
                  name="categoryId"
                  onClick={
                    filter.categoryId == category.id ? null : handleCheck
                  }
                  className={
                    filter.categoryId == category.id
                      ? "hover:cursor-not-allowed"
                      : "hover:cursor-pointer"
                  }
                >
                  {category.name}
                </button>
                {filter.categoryId == category.id ? (
                  <button
                    name="categoryId"
                    value=""
                    onClick={handleCheck}
                    className={
                      filter.categoryId == category.id ? "visible" : "hidden"
                    }
                  >
                    X
                  </button>
                ) : null}
              </div>
            </div>
          ))}
      </div>
      <div className="flex w-[80%] justify-between h-fit py-2 text-primary">
        <h4 className="font-extrabold select-none">Marcas</h4>
      </div>
      <div className="h-1 w-[80%] bg-primary"></div>
      <div className="flex w-[80%] flex-col gap-4 justify-between h-fit text-primary">
        {brands &&
          brands.map((brand) => (
            <div className="flex w-full items-center justify-center">
              <div className="flex w-full justify-between items-center gap-4">
                <button
                  value={brand.id}
                  name="brandId"
                  onClick={filter.brandId == brand.id ? null : handleCheck}
                  className={
                    filter.brandId == brand.id
                      ? "hover:cursor-not-allowed"
                      : "hover:cursor-pointer"
                  }
                >
                  {brand.name}
                </button>
                {filter.brandId == brand.id ? (
                  <button
                    name="brandId"
                    value=""
                    onClick={handleCheck}
                    className={
                      filter.brandId == brand.id ? "visible" : "hidden"
                    }
                  >
                    X
                  </button>
                ) : null}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
