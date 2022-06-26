import Navigation from '../Components/Navigation';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Footer from '../Components/Footer';
import { GoDash } from 'react-icons/go';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';

const Cart = function () {
  const {
    cart,
    clearCart,
    total_amount,
    stockHandleDec,
    stockHandleInc,
    tempStock,
  } = useGlobalContext();

  if (cart.length < 1) {
    return (
      <section>
        {' '}
        <div>
          <Navigation />
        </div>
        <div className='container h-screen'>
          <h2 className='text-4xl text-[#212529] font-semibold py-14 '>Cart</h2>
          <div className='text-center'>
            <h3 className='text-4xl font-bold mb-7'>Your cart is empty</h3>
            <Link
              to='/products'
              className='bg-[#f59f00] px-6 py-2 rounded uppercase font-semibold hover:bg-[#ffec99] transition duration-700 ease-in-out'
            >
              fill it
            </Link>
          </div>
        </div>
        <Footer />
      </section>
    );
  }
  return (
    <section>
      {' '}
      <div>
        <Navigation />
      </div>
      <div className='container'>
        <h2 className='text-4xl text-[#212529] font-semibold py-14 '>Cart</h2>
        <div>
          <div className='capitalize text-2xl font-semibold grid grid-cols-4 place-items-center py-14'>
            <h3>item</h3>
            <h3>price</h3>
            <h3>quantity</h3>
            <h3>subtotal</h3>
          </div>
          <hr />

          {cart.map((item) => {
            const { image, name, price, amount, max, id } = item;
            console.log(amount, max);
            return (
              <div
                key={id}
                className='capitalize grid grid-cols-4 place-items-center py-14 items-center'
              >
                <div className='flex items-center gap-x-3'>
                  <img src={image} alt={name} className='w-[5rem] h-[5rem]' />
                  <h3>{name}</h3>
                </div>
                <h3>${price}</h3>
                <div className='flex items-center gap-x-4 font-bold text-3xl mb-4'>
                  <HiMinusSm
                    className='cursor-pointer'
                    // onClick={() => stockHandleDec(tempStock, max)}
                  />
                  <span>{tempStock}</span>
                  <HiPlusSm
                    className='cursor-pointer'
                    // onClick={() => stockHandleInc(tempStock, max)}
                  />
                </div>
                {/* <h3>{amount}</h3> */}
                <h3>${price * amount.toFixed(2)}</h3>
              </div>
            );
          })}

          {/* <h3>subtotal</h3> */}

          <hr />
          <div className='flex justify-between items-center my-7'>
            <Link
              to='/products'
              className='bg-[#f59f00] px-6 py-2 rounded uppercase font-semibold hover:bg-[#ffec99] transition duration-700 ease-in-out'
            >
              continue shopping
            </Link>

            <button
              className='bg-[#0f0f0f] text-white px-6 py-2 rounded uppercase font-semibold '
              onClick={clearCart}
            >
              clear shopping cart
            </button>
          </div>
          <div className='flex items-center gap-x-4 py-7'>
            <div className='flex items-center gap-x-12 border-solid border-2 w-[15rem] border-black py-2 capitalize font-semibold px-2'>
              <h2 className='flex items-center gap-x-3'>
                order total <GoDash />{' '}
              </h2>
              <span>{total_amount}</span>
            </div>

            <Link
              to='/products'
              className='bg-[#f59f00] px-6 py-2 rounded uppercase font-semibold hover:bg-[#ffec99] transition duration-700 ease-in-out'
            >
              login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Cart;
