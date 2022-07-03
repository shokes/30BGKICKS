import Navigation from '../Components/Navigation';
import { useState } from 'react';
import { PaystackButton } from 'react-paystack';
import { useGlobalContext } from '../context';
import Footer from '../Components/Footer';
const publicKey = 'pk_test_48943d1c6b316f95f54ff9bc7d5f15cdade0bef0';
const amount = 10000;

const CheckOut = function () {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { total_amount, clearCart } = useGlobalContext();

  const componentProps = {
    email,
    amount: total_amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: 'Pay Now',
    onSuccess: () => {
      alert('Thanks for doing business with us! Come back soon!!');
      clearCart();
    },

    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <section>
      <div>
        <Navigation />
      </div>
      <div className='container h-screen'>
        <h2 className='text-4xl text-[#212529] font-semibold py-14 '>
          Checkout
        </h2>
        <div className='text-center  text-xl w-full  md:w-[30rem] mx-auto py-8 shadow-lg rounded-md px-14'>
          <div className=''>
            <div className='flex items-center  w-[20rem] justify-between mb-6'>
              <label>Name</label>
              <input
                type='text'
                id='name'
                onChange={(e) => setName(e.target.value)}
                className=' p-2 border-b-2 border-black'
                placeholder='Enter your Name'
              />
            </div>
            <div className='flex items-center w-[20rem] justify-between mb-6'>
              <label>Email</label>
              <input
                type='text'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                className=' p-2 border-b-2 border-black'
                placeholder='Enter your email'
              />
            </div>
            <div className='flex items-center w-[20rem] justify-between mb-6'>
              <label>Phone</label>
              <input
                type='text'
                id='phone'
                onChange={(e) => setPhone(e.target.value)}
                className=' p-2 border-b-2 border-black'
                placeholder='Enter your phone'
              />
            </div>
            <PaystackButton
              className='bg-[#f59f00] px-2 rounded-sm'
              {...componentProps}
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CheckOut;
