import React from 'react'
import {Row , Col} from "react-bootstrap";

 const DatesList = ({array}) => {
  return (
    <Row className="justify-content-center my-3">
    <Col sm="8" className="">
         <div className="rectangle p-2">
         {array.length ? ( array.map((item) =>{
          return (
            <div key={item.id} className="d-flex border-bottom mx-5">
           
            <img src={item.Im} className="img-avatar"/>
          
            <div className="px-3">
              <p className='d-lineName fs-5'>{item.name}</p>
              <p className='fs-6'>{item.date}</p>
            </div>
        
           </div>
          )
         })) : <h2 className="p-5 text-center" >لا يوجد اي مواعيد اليوم </h2>}                  

         </div>
    </Col>
  </Row>
  )
}

export default DatesList;