import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import { useGlobalContext } from '../context';
import { footWears } from '../data';

const Products = function () {
  const { products, mainProducts, sortHandler } = useGlobalContext();
  const noOfProducts = products.length;
  let category = [];
  {
    mainProducts.map((product) => {
      category.push(...product.category);
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
            <h3 className='font-semibold capitalize text-xl'>category</h3>

            <ul>
              {[...new Set(category)].map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
          <div>
            <div className='flex items-center text-lg justify-between'>
              {' '}
              <span>{noOfProducts} products are available</span>
              <div>
                <span>Sort by</span>
                <select
                  name=''
                  id=''
                  onChange={(e) => sortHandler(e.target.value)}
                >
                  <option value='lowest'>Price (Lowest)</option>
                  <option value='highest'>Price (Highest)</option>
                  <option value='accending'>Name (A-Z)</option>
                  <option value='decending'>Name (Z-A)</option>
                </select>
              </div>
            </div>
            <div className='grid grid-cols-3 gap-x-5 mt-7 pb-14 place-items-center'>
              {products.map((footwear) => {
                return (
                  <div key={footwear.id} className='mb-6'>
                    <img
                      src={footwear.image}
                      alt={footwear.name}
                      className='h-[15rem] w-[20rem] mb-1 rounded'
                    />
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
