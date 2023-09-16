import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from './../../imags/computer.jpg';
import img2 from './../../imags/iphone-x.png';
import img3 from './../../imags/t-shirt.jpeg';
import '../../css/slider.css'
 function Slider() {
  return (
    <Carousel className='slider'>
      <Carousel.Item>
      <img src={img1}/>
        <Carousel.Caption className='info'>
          <h3 className='text'>There is a 40% discount</h3>
          <p className='description'>on this computers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2}/>
        <Carousel.Caption className='info'>
          <h3>There is a 40% discount</h3>
          <p>on this phones</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3}/>
        <Carousel.Caption className='info'>
          <h3>There is a 40% discount</h3>
          <p>on this t-shits</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  )
}
export default Slider;