import React  from 'react';
import { Container} from "react-bootstrap";
import Slider from './components/home/slider';
import ProductsList from './components/product/productslist';
function HomePage() {

  return (
    <div className="color-body">
      <Container>
        <Slider/>
        <ProductsList/>
      </Container>
    </div>
  );
}

export default HomePage;
