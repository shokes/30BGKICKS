import Navigation from '../Components/Navigation';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Footer from '../Components/Footer';
import { GoDash } from 'react-icons/go';

import { useUserContext } from '../userContext';

import { CgCloseO } from 'react-icons/cg';

const Cart = function () {
  const {
    cart,
    clearCart,
    total_amount,
    // stockHandleDec,
    // stockHandleInc,
    // tempStock,
    decreaseCartAmount,
    increaseCartAmount,
    removeItem,
  } = useGlobalContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
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
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            {cart.map((item) => {
              const { image, name, price, amount, max, id } = item;

              return (
                <tbody key={id}>
                  <tr>
                    <td className='flex items-center '>
                      <CgCloseO
                        className='mr-7 text-red-700 w-5 h-5 cursor-pointer'
                        onClick={() => removeItem(id)}
                      />
                      <img
                        src={image}
                        alt={name}
                        className='w-[5rem] h-[5rem] mr-4'
                      />
                      {name}
                    </td>
                    <td>${price.toFixed(2)}</td>

                    <td className='text-4xl'>
                      <div>
                        <span
                          className='cursor-pointer'
                          onClick={() => decreaseCartAmount(id, amount, max)}
                        >
                          -
                        </span>
                        <span className='mx-4'>{amount}</span>{' '}
                        <span
                          className='cursor-pointer'
                          onClick={() => increaseCartAmount(id, amount, max)}
                        >
                          +
                        </span>
                      </div>{' '}
                    </td>
                    <td>${(price * amount).toFixed(2)}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>

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
          <div className='flex items-center gap-x-4 mt-14 mb-24'>
            <div className='flex items-center gap-x-12 border-solid border-2 w-[18rem] border-black py-2 capitalize font-semibold px-2'>
              <h2 className='flex items-center gap-x-3'>
                order total <GoDash />{' '}
              </h2>
              <span>${total_amount.toFixed(2)}</span>
            </div>

            <button
              to='/products'
              className='bg-[#f59f00] px-6 py-2 rounded uppercase font-semibold hover:bg-[#ffec99] transition duration-700 ease-in-out'
            >
              login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
export default Cart;
