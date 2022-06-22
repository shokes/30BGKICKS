import Navigation from '../Components/Navigation';
import Hero from '../Components/Hero';
import Featured from '../Components/Featured';
import Services from '../Components/Services';
import Footer from '../Components/Footer';

const Home = function () {
  return (
    <section>
      <div>
        <Navigation />
        <Hero />
        <Featured />
        <Services />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
