import { useParams } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useState } from 'react';

import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
const SingleProductPage = function () {
  const [tempStock, setTempStock] = useState(1);
  console.log(tempStock);

  const { id } = useParams();

  const { allProducts } = useGlobalContext();
  const single = allProducts.find((product) => product.id === +id);
  // console.log(single.stock);

  const stockHandleInc = (value) => {
    let tempValue = value + 1;

    if (tempValue === single.stock) {
      // console.log(single.stock);
      return setTempStock(single.stock);
    }
    return setTempStock(tempValue);
  };

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

        <div className='flex gap-x-28'>
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
              <HiMinusSm className='cursor-pointer' />
              <span>{tempStock}</span>
              <HiPlusSm
                className='cursor-pointer'
                onClick={() => stockHandleInc(tempStock)}
              />
            </div>
            <Link
              to='/cart'
              className='bg-[#f59f00] px-6 py-2 rounded uppercase font-semibold hover:bg-[#ffec99] transition duration-700 ease-in-out'
            >
              add to cart
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default SingleProductPage;
