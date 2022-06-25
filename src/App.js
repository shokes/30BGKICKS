import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Error from './Pages/Error';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import SingleProductPage from './Pages/SingleProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />

        <Route path='/products/:id' element={<SingleProductPage />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
