import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../products';
import '../../css/details.css'
export default function Details() {
  const ApiUrl = "https://fakestoreapi.com/products";
  const param = useParams();
  const [product , setProduct] = useState({});

  useEffect(()=>{
    fetch(`${ApiUrl}/${param.indexId}`).then((res)=> res.json())
    .then((pro) => setProduct(pro));
  },[]);

  return (
    <div className='details'>
      <Products  item={product} showButtons={false}/>
    </div>
      )
}
