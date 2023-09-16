import React  from 'react';
import { Container} from "react-bootstrap";
import {Routes , Route} from 'react-router-dom'
import ShopCard from './components/Ather/shop';
import User from './components/Ather/user';
import Details from './components/product/Details';
import NavbarCart from './components/Ather/navbar';
import HomePage from './homepage';
import Footer from './components/home/footer';
import RegisterPage from './components/Ather/register';
function App() {

  return (
    <div className="color-body">
      <Container>
        <NavbarCart/>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/shop" element={<ShopCard />} />
              <Route path="/user" element={<User/>} />
              <Route path="products/:indexId" element={<Details/>} />
              <Route path="/register" element={<RegisterPage/>} />
          </Routes>
          <Footer/>
      </Container>
    </div>
  );
}

export default App;
