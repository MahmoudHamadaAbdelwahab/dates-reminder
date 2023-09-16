import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
 const User = () => {
  return (
    <div style={{minHeight:'670px'}}>

    <Container style={{minHeight:'600px'}}>
      <Row className='py-5 d-flex justify-content-center'>
        <Col sm="12" className="d-flex flex-column">
          <label className='mx-auto title-login'>loading in</label>
          <input
           placeholder='...Email'
           type="text"
           className='user-input my-3 text-center mx-auto'
          />
          <input
           placeholder='...Password'
           type="password"
           className='user-input my-3 text-center mx-auto'
          />
          <button className='btn-login mx-auto mt-4'>loading in</button>
          
          <label className='mx-auto my-5'>
          I dont have an account ? {" "}

            <Link to="/register" style={{textDecoration:'none'}}>
              
              <span style={{cursor:'pointer'}} className='text-danger'>
                Click here
              </span>

            </Link>

          </label>
        </Col>
      </Row>
    </Container>

    </div>
  )
}

export default User;
