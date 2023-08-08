import React from 'react'
import {Row , Col} from "react-bootstrap"
 const Dates = (array) => {
  return (
        <Row className="justify-content-center">
          <Col sm="8" className="">
              لديك {array.length} مواعيد 
          </Col>
        </Row>
  )
}

export default Dates;