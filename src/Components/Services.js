import { servicesOffer } from '../data';

const Services = function () {
  return (
    <section>
      <div className='container pt-14 pb-14'>
        <h2 className='text-4xl text-[#212529] capitalize font-bold mb-3 text-center'>
          services
        </h2>
        <div className='border border-b-4 border-[#f59f00] w-[6rem]  mx-auto'></div>
        <p className='mt-10 mb-10 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore
          temporibus cupiditate facilis qui nam aut a quam atque, ipsum fuga id
          praesentium iusto delectus?
        </p>
        <div className='flex gap-x-7 items-center justify-center'>
          {servicesOffer.map((item) => {
            return (
              <div
                key={item.id}
                className='bg-[#fcc419] flex flex-col gap-3 justify-center rounded items-center p-6'
              >
                <span className='text-3xl bg-[#fff] rounded-full p-3'>
                  {item.icon}
                </span>

                <h3 className='font-semibold text-xl capitalize'>
                  {item.service}{' '}
                </h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
