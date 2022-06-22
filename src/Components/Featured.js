import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Featured = function () {
  const { products } = useGlobalContext();

  return (
    <section className='bg-[#e9ecef]'>
      <div className='container pt-14 pb-14'>
        <h2 className='text-4xl text-[#212529] capitalize font-bold mb-3 text-center'>
          featured products
        </h2>
        <div className='border border-b-4 border-[#f59f00] w-[6rem]  mx-auto'></div>
        <div className='grid grid-cols-3 pt-14 pb-14 place-items-center'>
          {products.slice(3, 6).map((footwear) => {
            return (
              <div key={footwear.id}>
                <img
                  src={footwear.image}
                  alt={footwear.name}
                  className='h-[15rem] w-[20rem] mb-3 rounded'
                />
                <div className='flex justify-between items-center'>
                  <h3 className='font-semibold text-lg'>{footwear.name}</h3>
                  <span className='font-semibold'>${footwear.price}</span>
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
