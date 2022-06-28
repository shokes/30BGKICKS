import { useParams } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useState } from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import GoToTop from '../GoToTop';

const SingleProductPage = function () {
  const { id } = useParams();

  const { allProducts, addToCart, stockHandleInc, stockHandleDec, tempStock } =
    useGlobalContext();
  const single = allProducts.find((product) => product.id === +id);

  return (
    <section>
      <div>
        <Navigation />
      </div>
      <div className='container'>
        <div className='py-14'>
          <Link
            to='/products'
            className='bg-[#f59f00] px-6 py-2 rounded uppercase font-semibold hover:bg-[#ffec99] transition duration-700 ease-in-out'
          >
            back to products
          </Link>
        </div>

        <h3 className='font-bold text-4xl mb-7'>{single.name}</h3>

        <div className='grid grid-cols-1 lg:flex pb-7 lg:pb-0 gap-x-28'>
          <div>
            <img
              src={single.image}
              alt={single.name}
              className='w-[80rem] h-[30rem] mb-5 rounded-sm'
            />
          </div>
          <div>
            <h3 className='font-semibold text-3xl'>{single.name}</h3>
            <span className='text-[#f59f00] text-xl font-semibold'>
              ${single.price}
            </span>
            <p className='leading-8 text-lg mb-5'>{single.description}</p>
            <div className='mb-5'>
              <span className='capitalize font-semibold text-xl'>
                sku : <span className='font-normal text-lg '>{single.id}</span>
              </span>
              <span className='block capitalize font-semibold text-xl'>
                price :{' '}
                <span className='font-normal text-lg '>${single.price}</span>
              </span>
              <span className='block capitalize font-semibold text-xl'>
                brand :{' '}
                <span className='font-normal text-lg '>{single.company}</span>
              </span>
            </div>
            <div className='flex items-center gap-x-4 font-bold text-3xl mb-4'>
              <HiMinusSm
                className='cursor-pointer'
                onClick={() => stockHandleDec(tempStock, single.stock)}
              />
              <span>{tempStock}</span>
              <HiPlusSm
                className='cursor-pointer'
                onClick={() => stockHandleInc(tempStock, single.stock)}
              />
            </div>
            <Link
              to='/cart'
              className='bg-[#f59f00] px-6 py-2 rounded uppercase font-semibold hover:bg-[#ffec99] transition duration-700 ease-in-out'
              onClick={() => addToCart(single.id, tempStock, single)}
            >
              add to cart
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <GoToTop />
    </section>
  );
};

export default SingleProductPage;
