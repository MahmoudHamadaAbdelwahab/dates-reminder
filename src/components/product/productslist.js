import React, { useEffect, useState } from 'react'
import '../../css/productList.css';
import Products from '../../products';

 function ProductsList() {
    const ApiUrl = "https://fakestoreapi.com/products";

    const [data,setData] = useState([]);
    const [categories,setCategories] = useState([]);

    const getProducts = ()=>{
        fetch(ApiUrl).then((res)=> res.json())
        .then((data) => 
        setData(data));
    };

    const getCategories = ()=>{
        fetch(`${ApiUrl}/categories`).then((res)=> res.json())
        .then((data) => 
        setCategories(data));
    };

    const getProductInCategory = (catName)=>{
        fetch(`${ApiUrl}/category/${catName}`).then((res)=> res.json())
        .then((data) => 
        setData(data));
    }

    useEffect(()=>{
        getProducts();
        getCategories();
    } , [])
  return (
    <div className='productsList'>
        <h2 className='text-center p-3'>our products</h2>
        <div className='text'>
        <div className='text-center p-3'>

            <button 
                onClick={()=>{getProducts();}} 
                className='btn btn-info'>
                All Category
            </button>
         </div>

        <div className='text-center p-3'>

             {
                categories.map((cat)=>{
                    return (
                        <button key={cat} 
                            onClick={()=>(getProductInCategory(cat))} 
                            className='btn btn-info'>
                                {cat}
                        </button>
                    )
                }) 
              } 
        </div>


        </div>

            <div className='row'>

                {
                    data.map((item)=>{
                        return(
                            <div className=' col-3 productCart' >
                             <Products key={item.id} item={item} showButtons={true}/>
                            </div>
                        )
                    })
                }
        
            </div>

    </div>
  )
}
export default ProductsList;