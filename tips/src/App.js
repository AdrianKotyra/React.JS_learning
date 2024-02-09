import React from "react";
import { useState } from "react";


function BillInput({onSetSum, sum}){
  return <div className="container">
    <label>How much you want to pay?</label>
    <input type="text" name="billCost" value={sum} onChange={(e)=>onSetSum(e.target.value)} >
    </input>



  </div>
}

function ServiceLike({onSetTips}){
  
  return <>
  
    <label for="like">How much do you like the service?</label>
    
    
    <select name="like" onChange={(e)=>onSetTips(e.target.value)}>
      <option value={0}>0%</option>
      <option value={5}>5%</option>
      <option value={10}>10%</option>
      <option value={15}>15%</option>

    </select>
  </>
}

function FriendServiceLike({onSetTipsFriend}){
  
  return  <>
  <br></br>
  <label for="like">How much your friend like the service?</label>
  <select name="friendlike" onChange={(e)=>onSetTipsFriend(e.target.value)}>
    <option value={0}>0%</option>
    <option value={5}>5%</option>
    <option value={10}>10%</option>
    <option value={15}>15%</option>

  </select>
  </>
}

function App() {
  return <div>
    <TipCalculator/>
  </div>
 
  
  
}

function TipCalculator() {
  function resetHandler(){
    setfriendTips(0);
    setTips(0);
    setSum(0);
    
  }
  const [friendTips, setfriendTips] = useState(5);
  const [Tips, setTips] = useState(5);
  const [sum, setSum] = useState(null)
  let tips = (sum*parseInt(friendTips)/100) + (sum*parseInt(Tips)/100);
  let total = parseInt(sum)+parseInt(tips);
  return (
    <>
    <BillInput billContent="How much was the bill?" onSetSum={setSum} sum={sum} />
    <ServiceLike onSetTips={setTips}/>
    <FriendServiceLike onSetTipsFriend={setfriendTips}>
    <option value={5}>5%</option>
    <option value={10}>10%</option>
    <option value={15}>15%</option>
    </FriendServiceLike>
  
    {sum>0?<p>You pay {sum} {tips>0?"plus " + tips: null} <br/> total of {total}</p> : null}
    <br/>
    <button onClick={resetHandler}>Reset</button>

   </>
  );
}

export default App;
