import { Link } from 'react-router-dom';
import {
  BsCartDashFill,
  BsFillPersonPlusFill,
  BsFillPersonDashFill,
} from 'react-icons/bs';
import { useGlobalContext } from '../context';
import { useUserContext } from '../userContext';
import { useState } from 'react';

const Navigation = function () {
  const { total_items } = useGlobalContext();
  const [status, setStatus] = useState(false);
  const { loginWithRedirect, myUser, logout } = useUserContext();
  const handleChange = (e) => {
    setStatus(e.target.checked);
  };
  return (
    <section className='relative'>
      <div className='container flex justify-between items-center pt-10'>
        <Link
          to='/'
          className='text-2xl font-semibold cursor-pointer text-[#212529] flex items-center'
        >
          30BG
          <span className='text-[#f59f00]'>KICKS</span>
        </Link>

        <label htmlFor='check' className='flex lg:hidden menu'>
          <input
            type='checkbox'
            id='check'
            value={status}
            onChange={(e) => handleChange(e)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className='hidden lg:flex items-center gap-x-4  '>
          <Link
            to='/about'
            className=' font-semibold hover:underline underline-offset-4 '
          >
            About
          </Link>
          <Link
            to='/products'
            className='font-semibold hover:underline underline-offset-4 '
          >
            Products
          </Link>
          {myUser && (
            <Link
              to='/checkout'
              className='font-semibold hover:underline underline-offset-4 '
            >
              Checkout
            </Link>
          )}
        </div>
        <div className='hidden lg:flex text-2xl font-semibold cursor-pointer text-[#212529]  gap-x-7'>
          <Link to='/cart' className='flex items-center gap-x-2'>
            Cart{' '}
            <span className='relative'>
              <BsCartDashFill />
              <span className='absolute top-[-16px] right-[-15px] bg-[#f59f00] w-7 h-7 text-lg rounded-full p-2 flex items-center justify-center '>
                {total_items}
              </span>
            </span>
          </Link>
          {myUser ? (
            <button
              className='flex items-center gap-x-2'
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout{' '}
              <span>
                <BsFillPersonDashFill />
              </span>{' '}
            </button>
          ) : (
            <button
              type='button'
              className='flex items-center gap-x-2'
              onClick={loginWithRedirect}
            >
              Login{' '}
              <span>
                <BsFillPersonPlusFill />
              </span>{' '}
            </button>
          )}
        </div>
      </div>
      {status && (
        <div className='p-3 bg-white w-[20rem] shadow-lg absolute top-[5rem] right-[2rem] rounded-lg z-40 '>
          <div className='grid  grid-cols-1 items-center gap-y-4 mb-5'>
            <Link
              to='/about'
              className=' font-semibold hover:underline underline-offset-4 '
            >
              About
            </Link>
            <Link
              to='/products'
              className='font-semibold hover:underline underline-offset-4 '
            >
              Products
            </Link>
            {myUser && (
              <Link
                to='/checkout'
                className='font-semibold hover:underline underline-offset-4 '
              >
                Checkout
              </Link>
            )}
          </div>

          <div className=' flex text-2xl font-semibold cursor-pointer text-[#212529]  '>
            <Link to='/cart' className='flex items-center gap-x-2 mr-12'>
              Cart{' '}
              <span className='relative'>
                <BsCartDashFill />
                <span className='absolute top-[-16px] right-[-15px] bg-[#f59f00] w-7 h-7 text-lg rounded-full p-2 flex items-center justify-center '>
                  {total_items}
                </span>
              </span>
            </Link>
            {myUser ? (
              <button
                // to='/login'
                className='flex items-center gap-x-2'
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout{' '}
                <span>
                  <BsFillPersonDashFill />
                </span>{' '}
              </button>
            ) : (
              <button
                // to='/login'
                type='button'
                className='flex items-center gap-x-2'
                onClick={loginWithRedirect}
              >
                Login{' '}
                <span>
                  <BsFillPersonPlusFill />
                </span>{' '}
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Navigation;
