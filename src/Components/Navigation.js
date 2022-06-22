import { Link } from 'react-router-dom';
import { BsCartDashFill, BsFillPersonPlusFill } from 'react-icons/bs';

const Navigation = function () {
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
            <span>
              <BsCartDashFill />
            </span>
          </Link>
          <Link to='/login' className='flex items-center gap-x-2'>
            Login{' '}
            <span>
              <BsFillPersonPlusFill />
            </span>{' '}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
