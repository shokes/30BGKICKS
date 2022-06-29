import { Link } from 'react-router-dom';
import { GoSearch } from 'react-icons/go';
import { footWears } from '../data';

const Featured = function () {
  return (
    <section className='bg-[#e9ecef]'>
      <div className='container pt-14 pb-14'>
        <h2 className='text-4xl text-[#212529] capitalize font-bold mb-3 text-center'>
          featured products
        </h2>
        <div className='border border-b-4 border-[#f59f00] w-[6rem]  mx-auto'></div>
        <div className='grid grid-cols-1 gap-y-10 md:gap-y-0 md:grid-cols-3 md:gap-x-3 pt-14 pb-14 place-items-center'>
          {footWears.slice(3, 6).map((footwear) => {
            return (
              <div key={footwear.id} className='image-container   relative'>
                <img
                  src={footwear.image}
                  alt={footwear.name}
                  className='h-[15rem] w-[20rem] mb-3 rounded  '
                />
                <div>
                  <div className='flex justify-between items-center'>
                    <h3 className='text-lg'>{footwear.name}</h3>
                    <span className='text-lg'>₦{footwear.price}</span>
                  </div>

                  <Link to={`/products/${footwear.id}`} className='search-btn'>
                    <GoSearch className='absolute w-10     h-10 bg-[#f59f00] text-white right-[45%] top-[37%] rounded-full  p-2' />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className='text-center'>
          <Link
            to='/products'
            className='bg-[#f59f00] px-7 py-3 rounded uppercase font-semibold hover:bg-[#ffec99] transition duration-700 ease-in-out'
          >
            all products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
