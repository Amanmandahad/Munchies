import Home from './pages/home/Home';
import './App.css'
import Product from './pages/product/Product';
import Products from './pages/products/Products';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div>

      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
      <Footer/>


    </div>
  )
}

export default App
