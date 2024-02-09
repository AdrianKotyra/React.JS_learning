import { useState } from "react";
export default function Form({onAddITems}){
    // const [initialItemss, setinitialItems] = useState(initialItems);
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState();
  
  
    
    function handleSubmit(e){
      e.preventDefault();
      const newItem= {description, quantity, packed:false, id: Date.now()}
      
      onAddITems(newItem);
      setDescription('');
      setQuantity(1);
    
    }
   
    return (
    <form className="add-form" onSubmit={description? handleSubmit : null}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map(num=><option key={num} value={num}>{num}</option>)
        }
      </select>
      <input type="text" placeholder="item..." value={description} onChange={(e)=>setDescription(e.target.value)}/>
      <button>Add</button>
    </form>
    )
}