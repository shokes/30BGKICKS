import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';
import Error from './Pages/Error';
import Cart from './Pages/Cart';

import SingleProductPage from './Pages/SingleProduct';
import CheckOut from './Pages/CheckOut';
import PrivateRoute from './Pages/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />

        <Route path='/products/:id' element={<SingleProductPage />} />

        <Route
          path='checkout'
          element={
            <PrivateRoute>
              <CheckOut />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
