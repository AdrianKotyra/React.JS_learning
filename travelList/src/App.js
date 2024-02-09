import { useState } from "react";
import Logo from "./logo.js";
import Form from "./Form.js";
import { PackingList } from "./PackingList.js";
import { Stats } from "./Stats.js";

let initialItems = [
 {id: 1, description: "passports", quantity: 2, packed: false }, 
 {id: 2, description: "Socks", quantity: 12, packed: false }, 
 {id: 3, description: "Charger", quantity: 1, packed: false }, 

]
function App() {
  function deleteItemsHandler() {
    const cofirmWindow = window.confirm("Are you sure you want to delete all items?");
    if(cofirmWindow){ setItems([])}
  }
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items)=> [...items, item])
  }

  function handleDeleteItem(id) {
    setItems((items)=>items.filter(item=>item.id!==id))
  }
  function handleToggleItem(id) {
    setItems((items)=>
    items.map((item) => 
    item.id === id ? {...item, packed: !item.packed} : item))
  }
  

  return (
    <div className="app">
      <Logo/>
      <Form onAddITems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onDeleteItems={deleteItemsHandler}/>
      <Stats items={items}/>
    </div>
  );
}

export default App;
