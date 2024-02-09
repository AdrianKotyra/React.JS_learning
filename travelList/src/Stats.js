export function Stats({ items }) {
  const numItems = items.length;

  if (numItems === 0) {
    return <footer>
      <em> Start adding items to your basket</em>
    </footer>;
  } else {

    const numItemsPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round(numItemsPacked / numItems * 100);
    return <footer style={{ backgroundColor: numItemsPacked === numItems ? "blue" : "white", color: numItemsPacked === numItems ? "white" : "blue" }}>
      {numItemsPacked !== numItems ?
        <em>You have {numItems} items on your list, and you already packed {numItemsPacked} ({percentage}%)</em>
        : <em>You are ready to go</em>}

    </footer>;

  }


}
