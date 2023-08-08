import React , {useState} from 'react';
import { Container} from "react-bootstrap";
import {array} from './Data';
import Dates from './compounent/Dates'
import DatesList from "./compounent/DatesList";
import DatesAction from "./compounent/DatesAction"

function App() {

  const [personData , setPersondata] = useState(array);

  const onDelete=()=>{
    setPersondata([]);
  }

  const onViewData = () =>{
    setPersondata(array);
  }

  return (
    <div className="font color-body">

      <Container className="py-5">
 
      <Dates array={personData}/>

      <DatesList array={personData}/>

      <DatesAction deleteData={onDelete} onViewData={onViewData}/>

      </Container>
    </div>
  );
}

export default App;
