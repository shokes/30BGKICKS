import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import { useGlobalContext } from '../context';
import { footWears } from '../data';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';

const Products = function () {
  const {
    products,
    price,
    max_Price,
    minPrice,
    sortHandler,
    handleCategory,
    activeFilter,
    handleCompany,
  } = useGlobalContext();

  const noOfProducts = products.length;
  let category = [];
  let company = [];

  {
    footWears.map((product) => {
      category.push(product.category);
    });
  }
  {
    footWears.map((product) => {
      company.push(product.company);
    });
  }
  return (
    <section>
      {' '}
      <div>
        <Navigation />
      </div>
      <div className='container'>
        <h2 className='text-4xl text-[#212529] font-semibold py-14 '>
          Products{' '}
        </h2>
        <div className='flex gap-x-[12rem]'>
          <div>
            <h3 className='font-semibold capitalize text-xl mb-4'>category</h3>

            <ul className='mb-5'>
              {['all', ...new Set(category)].map((item, index) => {
                return (
                  <li
                    key={index}
                    className={` mb-1 capitalize text-lg cursor-pointer ${
                      activeFilter === item.toLowerCase()
                        ? 'text-[#f59f00] font-bold'
                        : null
                    }`}
                    onClick={() => {
                      handleCategory(item);
                    }}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
            <div>
              <h3 className='font-semibold capitalize text-xl mb-4'>company</h3>

              <ul>
                {['all', ...new Set(company)].map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={` mb-1 capitalize text-lg cursor-pointer ${
                        activeFilter === item.toLowerCase()
                          ? 'text-[#f59f00] font-bold'
                          : null
                      }`}
                      onClick={() => {
                        handleCompany(item);
                      }}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className='font-semibold capitalize text-xl mb-4'>price</h3>
              <p>{price}</p>
              <input
                type='range'
                name={price}
                min={minPrice}
                max={max_Price}
                value={price}
              />
            </div>
          </div>
          <div>
            <div className='flex items-center text-lg justify-between'>
              {' '}
              <span>{noOfProducts} products are available</span>
              <div>
                <span>Sort by</span>
                <select name='' onChange={(e) => sortHandler(e.target.value)}>
                  <option value='lowest'>Price (Lowest)</option>
                  <option value='highest'>Price (Highest)</option>
                  <option value='accending'>Name (A-Z)</option>
                  <option value='decending'>Name (Z-A)</option>
                </select>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-x-5 mt-3 pb-14 place-items-center'>
              {products.map((footwear) => {
                return (
                  <div key={footwear.id} className='mb-6'>
                    <div className='image-container   relative'>
                      <img
                        src={footwear.image}
                        alt={footwear.name}
                        className='h-[15rem] w-[20rem] mb-1 rounded hover:duration-700 ease-in-out  '
                      />
                      <div className='search-btn'>
                        <GoSearch className='absolute w-10     h-10 bg-[#f59f00] text-white right-[40%] top-[43%] rounded-full  p-2' />
                      </div>
                    </div>

                    <div className='flex justify-between items-center'>
                      <h3 className='font-semibold text-lg'>{footwear.name}</h3>
                      <span className='font-semibold'>${footwear.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Products;
