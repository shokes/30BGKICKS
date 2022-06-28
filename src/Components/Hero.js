import { Link } from 'react-router-dom';
import hero1 from '../Images/hero1.jpg';
import hero2 from '../Images/hero2.jpg';

const Hero = function () {
  return (
    <section>
      <div className='flex justify-between container items-center pt-14 pb-10'>
        <div className='w-[30rem]'>
          <h2 className='text-4xl text-[#212529] capitalize font-bold mb-3'>
            get your afforadable footwears
          </h2>
          <p className='mb-7 leading-8 text-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            itaque numquam laborum assumenda quisquam deleniti. Expedita tempore
            nobis consequuntur eligendi Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea esse reprehenderit eos vitae consequatur!
            Voluptates quaerat magnam in possimus voluptas?!
          </p>
          <Link
            to='/products'
            className='bg-[#f59f00] px-7 py-3 rounded uppercase font-semibold hover:bg-[#ffec99] transition duration-700 ease-in-out'
          >
            shop now
          </Link>
        </div>
        <div className='relative'>
          <img
            src={hero2}
            alt='sneekers'
            className='h-[32rem] w-[26rem] rounded hidden md:block'
          />
          <img
            src={hero1}
            alt='sneekers'
            className='h-[10rem] w-[15rem] absolute  hidden lg:block bottom-0 -left-[125px] rounded'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
