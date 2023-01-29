import React from 'react';
import { useSelector } from 'react-redux';
import { MainCard } from '../MainCard/MainCard';
import { Pagination } from '../Pagination/Pagination';
export const RightSideBar = ({ filter, setFilter }) => {
  let allProducts = useSelector((state) => state.getAllProductsReducer.allProducts);
  console.log(allProducts);
  const categorys = useSelector((state) => state.getAllCategorysReducer.allCategorys);
  const brands = useSelector((state) => state.getAllBrandsReducer.allBrands);
  const classForSelects = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-3 w-60 ';
  return (
    <div className='flex-col w-[70%] h-full  '>
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
        {allProducts.content && (!allProducts.content[0] ? <h2>No se encontraron los productos</h2> : allProducts.content?.slice(0, 12).map((product) => (<MainCard {...product} />)))}
      </div>
      <Pagination pages={allProducts.totalPage} filter={filter} setFilter={setFilter} />
    </div>
  )
}
