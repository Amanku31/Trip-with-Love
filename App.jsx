import Tours from './Tours';
import { useState } from 'react';
import './App.css';
import Data from './Data';

function App() {

  const[tours,setTours]=useState(Data);
  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !==id); 
    setTours(newTours);   
  }

  if(tours.length===0){
    return (
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className="btn-1" onClick={()=>setTours(Data)}>Refresh</button>
      </div>

    );
  }


  return (
   <div className='main'>
    <Tours tours={tours} removeTour={removeTour}></Tours>
   </div>
  );
}

export default App;
