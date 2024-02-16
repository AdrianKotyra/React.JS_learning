
import { useState } from 'react';
import './App.css';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 0,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 0,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
    
  },
 
  
];

function App() {
  
  const [billPersonPaying, setbillPersonPaying] = useState("user");
  const [bill, setBill] = useState();
  const [myExpenses, setMyExpenses] = useState();
  const [friendExpenses, setFriendExpenses] = useState();

  const [selectedFriendObject, SetselectedFriendObject] = useState(null);
  const [splitBill, SetSplitBill] = useState(false);

  const [friendImage, SetFriendImage] = useState();
  const [friendBalance, SetFriendBalance] = useState(0);
  const [friendName, SetFriendName] = useState(null);
  const [items, setItems] = useState(initialFriends);
  
  function handleAddItems(item) {
    setItems((items)=> [...items, item])
  }

 


  const [openTab, setOpenTab] = useState(false);
 
  return (
    <div className="App">
      <div className='sidebar'>
        <FriendsList 
        myExpenses={myExpenses}
        friendExpenses={friendExpenses}
        bill={bill}
        onBill={setBill}
        onMyExpenses={setMyExpenses} 
        onFriendBill={setFriendExpenses}
        selectedFriendObject={selectedFriendObject} 
        onSelectFriend = {SetselectedFriendObject} 
        onOpentab = {setOpenTab} 
        openTab={openTab} items={items} 
        onSetSplitTips={SetSplitBill} 
        splitBill={splitBill}/>

        <AddFriendTab openTab = {openTab} 
        onAddfriendImage={SetFriendImage} 
        onAddFriendName={SetFriendName} 
        name={friendName} 
        onAddFriend={handleAddItems} 
        image={friendImage} 
        balance={friendBalance} 
        items={items}/>
      </div>
      <FormSplitBill friendExpenses={friendExpenses}
      onFriendBill={setFriendExpenses}
      myExpenses={myExpenses}
      bill={bill}
      billPersonPaying={billPersonPaying}
      onBillPerson = {setbillPersonPaying} 
      onBill={setBill}
      onMyExpenses={setMyExpenses}
      selectedFriendObject = {selectedFriendObject} 
      splitBill={splitBill} 
      onSplitBill={SetSplitBill}/>
     
    </div>
  );
}


function Button({children, 
  onSetSplitTips, 
  onSelectFriend, 
  friendObject, 
  onMyExpenses, 
  onFriendBill, 
  onBill, 
  bill, 
  friendExpenses, 
  myExpenses, 
  selectedFriendObject, 
  billPersonPaying,
  onSplitBill
   }) 
  {
 
  function readBalance(e) {
    const myBalance = (bill/2-friendExpenses-myExpenses)
    e.preventDefault();
    billPersonPaying==="user"? selectedFriendObject.balance = selectedFriendObject.balance - myBalance  :  
    selectedFriendObject.balance = selectedFriendObject.balance + myBalance
    onSplitBill(false)

  }
  function splitBillHandlerOpen() {
    onMyExpenses(0);
    onFriendBill(0);
    onBill(0);
    onSetSplitTips(true);
    onSelectFriend(friendObject);
  }
  function splitBillHandlerClose() {

    onMyExpenses(0);
    onFriendBill(0);
    onBill(0);
    onSetSplitTips(false);
    onSelectFriend(friendObject);
  }
  if(children==="Select") {
    return <button onClick={splitBillHandlerOpen} className='button' type='submit'>
    {children}
   </button> 
  }
  if(children==="Apply") {
    return <button onClick={readBalance} className='button' type='submit'>
    {children}
   </button> 
  }
  if(children==="Close")
  return <button onClick={splitBillHandlerClose} className='button' type='submit'>
  {children}
  
 </button> 
  else {
    return  <button className='button' type='submit'>
    {children}
   </button>
  }
 

}
function AddFriendTab({openTab, onAddfriendImage, onAddFriendName, onAddFriend, name, image, balance}) {
 
  function handleAddItems(e) {
   
    e.preventDefault();
    const newFriend= {id: Date.now(), name, image, balance}
    onAddFriend(newFriend);
    
    
  }

  return openTab&&<><form className='form-add-friend' onSubmit={handleAddItems}>
    <label>🧑‍🤝‍🧑 Friend name</label>
    <input type='text' onChange={(e)=>onAddFriendName(e.target.value)}/>
    <label>🖼️ Image URL</label>
    <input  type='text' onChange={(e)=>onAddfriendImage(e.target.value)}/>
  
    <Button  >Submit</Button>
  </form>
 
  </>
}

function FriendContainer({friendObject, onSetSplitTips, splitBill, onSelectFriend, selectedFriendObject, onMyExpenses, onFriendBill, onBill, bill, friendExpenses}) {

 
  return <li style={{backgroundColor: selectedFriendObject && friendObject.id === selectedFriendObject.id ? "#c5ebee" : "white"}}>
    <img src={friendObject.image}/>
    <h3>{friendObject.name}</h3>
    {friendObject.balance < 0 && <p className='red'> You owe {friendObject.name} {Math.abs(friendObject.balance)}£</p>}
    {friendObject.balance > 0 && <p className='green'>  {friendObject.name} owe You {Math.abs(friendObject.balance)}£</p>}
    {friendObject.balance === 0 && <p> You and {friendObject.name} are even</p>}
   
    <Button
    friendExpenses={friendExpenses}
    bill={bill}
    onBill={onBill}
    onMyExpenses={onMyExpenses} 
    onFriendBill={onFriendBill}
    friendObject={friendObject}
    onSelectFriend={onSelectFriend}
    onSetSplitTips={onSetSplitTips} 
    splitBill={splitBill}>
    {splitBill && friendObject.id === selectedFriendObject.id?"Close": "Select"}</Button>

   

  </li>
}
function FormSplitBill({onSplitBill, friendExpenses, splitBill, selectedFriendObject, onMyExpenses, onBill, onBillPerson, billPersonPaying, bill, myExpenses, onFriendBill}){
  



  function changeBillPerson(e) {
    onBillPerson(e.target.value)
    onMyExpenses(0);
    onFriendBill(0);
  }
  return ( 
    
    splitBill && <><form className='form-split-bill'>
      <h2>Split a bill with {selectedFriendObject.name}</h2>
      <label for="money">💰Bill Value</label>
      <input onChange={(e)=>onBill(parseInt(e.target.value))} name="money"type='text' value={bill}/>
      <label for="money">💰Your expenses</label>
      {billPersonPaying==="user"?<input onChange={(e)=>onMyExpenses(e.target.value)}name="money"type='text'value={myExpenses} /> : <input onChange={(e)=>onMyExpenses(e.target.value)}name="money"type='text' disabled value={bill-friendExpenses}/>}
      <label for="money">💰{selectedFriendObject.name} expenses</label>
      {billPersonPaying==="friend"?  <input name="money"type='text' onChange={(e)=>onFriendBill(e.target.value)} value={friendExpenses}/> :  <input name="money"type='text' disabled value={bill-myExpenses}/>}
     
      <label>Who is paying the bill?</label>
      <select onChange={changeBillPerson}>
        <option value="user">You</option>
        <option value="friend">{selectedFriendObject.name}</option>


      </select>
      <Button onSplitBill = {onSplitBill}splitBill={splitBill}billPersonPaying={billPersonPaying}selectedFriendObject={selectedFriendObject}myExpenses = {myExpenses} bill={bill} friendExpenses={friendExpenses}>Apply</Button>
      
      
    </form></>
    
    
  )
}

function FriendsList({
  onOpentab, 
  openTab,
  items, 
  onSetSplitTips,
  splitBill, 
  onSelectFriend, 
  selectedFriendObject, 
  onMyExpenses, 
  onFriendBill, 
  onBill, bill
  }) {
  function openTabHandler(){
    onOpentab(!openTab);
  }
  
  
  return <ul>
      {items.map((friend)=><FriendContainer 
     
      bill={bill}
      onBill={onBill}
      onMyExpenses={onMyExpenses}
      onFriendBill={onFriendBill}
      selectedFriendObject={selectedFriendObject}
      onSelectFriend={onSelectFriend }
      friendObject={friend} key={friend.id} 
      onSetSplitTips={onSetSplitTips} 
      splitBill={splitBill}/>)}
      <button className='button' onClick={openTabHandler}> {openTab===false? 'Add Friend' : 'Close'} </button> 
     
    </ul>
   
   
  }
   export default App;
   