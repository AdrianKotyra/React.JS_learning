import React from 'react'; 
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 20;
  const isOpen = hour >= openHours && hour <= closeHours;
  
    
  
  return <footer className='footer'>
      
    {isOpen? 
      
      <Order openhoursrgument = {openHours }closehoursArgument= {closeHours}/> : <p> We are currently closed.</p>
    }
    
      
      
   
    </footer>

}

function Order({closehoursArgument, openhoursrgument}) {
  return (
    <div className='order'>
      <p> We are open from {closehoursArgument} until {openhoursrgument}</p>
      <button className='btn'>order</button>
  </div>
  )
}
function Header() {
   
    return (
    <header className='header'>
        <h1  >Fast React Pizza Co.</h1>
    </header>
    )
    
}

function Menu() {
  const pizzas = pizzaData;
    const pizzasNum = pizzas.length;

    return (

          <main className='menu'>
            <h2>Our Menu</h2>
           
            {pizzasNum>=0? (
              <React.Fragment>
               <p>Authentic Italian Cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
               <ul className='pizzas'>
                {pizzas.map((pizza)=><Pizza pizzaObject={pizza}/>)
                   
                 
                 
                 
              }
 
 
              </ul>
             </React.Fragment>
            ): <p>We are still working on our menu</p>}


            {/* {pizzasNum>=0 && (
               <ul className='pizzas'>
               {pizzas.map((pizza)=><Pizza pizzaObject={pizza}/>)
                   
                 
                 
                 
               }
 
 
             </ul>
            )} */}
           

            {/* <Pizza name='Pizza spinaci' 
            ingredients='Tomato, mozarella, ham, aragula, and burrata cheese'
            photoName='pizzas/spinaci.jpg'
            price={10}
            />
            <Pizza name='Funghi' 
            ingredients='Tomato, aragula, and  cheese'
            photoName='pizzas/funghi.jpg'
            price={20}
            /> */}

           

          </main>
   
    )

}
function Pizza({pizzaObject}) {

  return (
    <li className={`pizza ${pizzaObject.soldOut? "sold-out" : ""}`}>
      <div>
        <img src={pizzaObject.photoName}/> 
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.soldOut? <p>SOLD OUT</p> : pizzaObject.price +3}</span>
          
      </div>
      
    </li>
      
  
  )



}


function App(){
  return (
      <>
          <Header/>
          <Menu/>
          <Footer/>
          
      </>
  )
  
  
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);