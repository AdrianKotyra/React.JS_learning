export function Item({ itemData, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" value={itemData.packed} onChange={() => onToggleItem(itemData.id)} />
      <span style={itemData.packed ? { textDecoration: "line-through" } : {}}>

        {itemData.quantity}
        {" "}
        {itemData.description}
      </span>
      <button onClick={() => onDeleteItem(itemData.id)}>X</button>

    </li>
  );





}
