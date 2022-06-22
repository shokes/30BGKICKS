import Navigation from '../Components/Navigation';
import about from '../Images/about.jpg';
import Footer from '../Components/Footer';

const About = function () {
  return (
    <section>
      <div>
        <Navigation />
      </div>
      <div className='container'>
        <h2 className='text-4xl text-[#212529] font-semibold py-14 '>About</h2>
        <div className='flex gap-x-28'>
          <img
            src={about}
            alt='about'
            className='w-full h-[30rem] mb-5 rounded '
          />
          <div>
            <h2 className='text-4xl text-[#212529] capitalize font-bold mb-3 '>
              our story
            </h2>
            <div className='border border-b-4 border-[#f59f00] w-[6rem] mb-7'></div>
            <p className='leading-8'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque voluptate corporis laudantium illum odit cum veritatis
              nisi at! Sunt modi, vel possimus, saepe error, harum totam
              consequatur cupiditate ut qui provident asperiores quasi voluptate
              quas iure recusandae iusto praesentium repellendus! Excepturi
              tenetur repudiandae consequuntur enim qui numquam ab quo dicta?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate nihil illum vitae nobis totam impedit, earum id
              doloribus quaerat tenetur optio laudantium quod ratione provident.
              Tempore dolor et ipsa vero reiciendis at doloremque tempora quasi
              nesciunt dolore aliquam ad accusantium modi porro dicta distinctio
              illum, totam nulla, ratione dolorum quia.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
