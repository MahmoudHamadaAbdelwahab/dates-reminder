import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './css/products.css'
 function Products(props) {

  const {item , showButtons} = props;

  return (
    <div className='product-cart'>
          <img src={item.image} alt={item.title}/>
          <Card.Body>
              <Card.Title className='card-title'>{item.title}</Card.Title>
              <Card.Text className='card-price'>price :-{item.price}$</Card.Text>
              {
               showButtons && ( <Link className='btn btn-primary' to={`products/${item.id}`}> Details </Link>  )
              }
          </Card.Body>
    </div>
  )
}
export default Products