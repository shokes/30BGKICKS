import { Link } from 'react-router-dom';
import {
  BsCartDashFill,
  BsFillPersonPlusFill,
  BsFillPersonDashFill,
} from 'react-icons/bs';
import { useGlobalContext } from '../context';
import { useUserContext } from '../userContext';

const Navigation = function () {
  const { total_items } = useGlobalContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <section>
      <div className='container flex justify-between items-center pt-10'>
        <Link
          to='/'
          className='text-2xl font-semibold cursor-pointer text-[#212529] flex items-center'
        >
          30BG
          <span className='text-[#f59f00]'>KICKS</span>
        </Link>
        <div className='flex items-center gap-x-4  '>
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
        </div>
        <div className='text-2xl font-semibold cursor-pointer text-[#212529] flex gap-x-7'>
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
              to='/login'
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
              to='/login'
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
    </section>
  );
};

export default Navigation;
