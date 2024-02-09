import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>

      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({data}) {
  const [isOpen, setIsopen] = useState(null)
  return <div className="accordian">
    {data.map((dataItem, index)=> 
    <AccordionItem 
    isOpen={isOpen}
    onOpen={setIsopen}
    num={index+1} 
    title={dataItem.title} 
    key={index}> 
    {dataItem.text}
    </AccordionItem>
    )}
    
    <AccordionItem 
    isOpen={isOpen}
    onOpen={setIsopen}
    num={22} 
    title={"test 1"} 
    key={23}>
  
    <p>
      lorem33
    </p>
    </AccordionItem>

    
    
    
    
  </div>;
}


function AccordionItem({num, title, children, isOpen, onOpen }){
  const titleText = isOpen===num;
  function handleOpen() {
    onOpen(titleText? null : num)
  }
  return <div onClick={handleOpen}  className={`item ${titleText? "open" : ""}`} >
    <p className="number">{num}</p>
    <p className={`'title' ${titleText? 'text' : ''}`}>{title}</p>
    <p className="icon" >{titleText? '-' : '+'}</p>
    {titleText && <div className="content-box">{children}</div>}
    
   

  </div>
}
