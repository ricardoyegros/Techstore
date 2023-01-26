import React from 'react';
import { useSelector } from 'react-redux';
import { MainCard } from '../MainCard/MainCard';
export const RightSideBar = () => {
  let allProducts = useSelector((state)=>state.getAllProductsReducer.allProducts.content)
  console.log(allProducts);
  const categorys = useSelector((state)=>state.getAllCategorysReducer.allCategorys);
  const brands = useSelector((state)=>state.getAllBrandsReducer.allBrands);
  const classForSelects = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-60 ';
  return (
    <div className='w-[70%] h-full  '>
                <div className='lg:hidden flex gap-5 justify-center m-5'>
                <select className={classForSelects}>
                    <option selected disabled>Categorias</option>
                    {categorys && categorys.map((category) => (<option key={category.id}>{category.name}</option>))}
                </select>
                <select className={classForSelects}>
                  <option selected disabled>Marcas</option>
                  {brands && brands.map((brand) => (<option key={brand.id}>{brand.name}</option>))}
                </select>
            </div>
      <div className='flex flex-row justify-center flex-wrap gap-8'>
        {allProducts && allProducts.slice(0,12).map((product) =>(<MainCard {...product} />))}
      </div>
    </div>
  )
}
