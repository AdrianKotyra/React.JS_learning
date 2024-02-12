
import { useState } from 'react';
import './App.css';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [items, setItems] = useState(initialFriends);
  function handleAddItems(item) {
    setItems((items)=> [...items, item])
  }

  const [openTab, setOpenTab] = useState(false);
 
  return (
    <div className="App">
      <div className='sidebar'>
        <FriendsList onOpentab = {setOpenTab} openTab={openTab}/>
        <AddFriendTab openTab = {openTab} onAddFriends={handleAddItems}/>
      </div>
     
    </div>
  );
}
function Button({children}) {
  return  <button className='button'>
   {children}
  </button>
}
function AddFriendTab({openTab, onAddFriends}) {

  function onAddFriends(e) {
    e.preventDefault();
  }
  return openTab&&<><form className='form-add-friend'>
    <label>🧑‍🤝‍🧑 Friend name</label>
    <input type='text'/>
    <label>🖼️ Image URL</label>
    <input type='text'/>
    
  </form>
  <Button onClick={onAddFriends}>Apply</Button>
  </>
}
function FriendContainer({friendObject}) {
  return <li>
    <img src={friendObject.image}/>
    <h3>{friendObject.name}</h3>
    {friendObject.balance < 0 && <p className='red'> You owe {friendObject.name} {Math.abs(friendObject.balance)}£</p>}
    {friendObject.balance > 0 && <p className='green'>  {friendObject.name} owe You {Math.abs(friendObject.balance)}£</p>}
    {friendObject.balance === 0 && <p> You and {friendObject.name} are even</p>}
    <Button>Select</Button>

   

  </li>
}

function FriendsList({onOpentab, openTab}) {
  function openTabHandler(){
    onOpentab(!openTab);
  }
  
  const friendList = initialFriends;
  return <ul>
      {friendList.map((friend)=><FriendContainer friendObject={friend} key={friend.id}/>)}
      <button className='button' onClick={openTabHandler}> Add Friend</button>
    </ul>
   
    
   


   
  }
   export default App;
   