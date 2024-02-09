import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';



// function Date() {
//   const today = new Date();
//   const month = today.getMonth() + 1;
//   const year = today.getFullYear();
//   const date = today.getDate();
//   const todayDate = `${month}/${date}/${year}`;
 

// }





function App() {
  const [currentcount, setcurrentcount] = useState(0);
  const [currentStep, setcurrentStep] = useState(1);
  
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const [currentDate, setcurrentDate] = useState(today.getDate());
  
  
  return <div className="container">
    
    <div>
      <button onClick={()=>setcurrentStep((s)=>s-1)}  className="counter-button minus-step">-</button>
      <span>Step:{currentStep}</span>
      <button onClick={()=>setcurrentStep((s)=>s+1)} className="counter-button plus-step">+</button>
    </div>

    <div>
      <button onClick={()=>setcurrentcount((c)=>c-1)} className="counter-button minus-count">-</button>
      <span>Count:{currentcount}</span>
      <button onClick={()=>setcurrentcount((c)=>c+1)} className="counter-button plus-count">+</button>
    </div>
  
  
    {`${month}/${currentDate}/${year}`}
    
  </div>
     


 
  
  
  

  
}

export default App;
