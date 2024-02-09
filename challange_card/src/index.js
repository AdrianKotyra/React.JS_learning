import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const Skills = [
  {
    skill: "HTML",
    Level: "Advanced",
    colur:  "red",
  },
  {
    skill: "Javascripts",
    Level: "intermidiate",
    colur:  "orange",
  },
  {
    skill: "PHP",
    Level: "intermidiate",
    colur:  "green",
  },
  {
    skill: "AJAX",
    Level: "beginner",
    colur:  "purple",
  },
  {
    skill: "CSS",
    Level: "Advanced",
    colur:  "blue",
  },
  {
    skill: "SQL",
    Level: "intermidiate",
    colur:  "gray",
  },


]




function Card() {
  return (
    <div className='container'>
      <div className='card'>
        <Avatar src="./imgs/profile.jpg"/>
        <div className='data'>
          <Intro description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          title="Adrian Kotyra"
          />
          <SkillList/>
           
      
        </div> 


     
        
          
          
     
      
        
        
      



      </div>
    </div>


  )

}
function SkillList(){
  return ( 
    <div className='skill-list'>
      {Skills.map((skill_data)=><Skill skill = {skill_data} />)}
    
    </div>
    )
 
}

function Skill({skill}) {

  return (
    <div className='skill'style={{backgroundColor:skill.colur} }>
    
      <p>{skill.skill}</p>
      <p>
        {skill.Level === "Advanced" && "😀" }
        {skill.Level === "beginner" && "😢" }
        {skill.Level === "intermidiate" && "😉" }
      </p>
     
    </div>
  )
}
function Intro(props) {
  return(
    <div>
      <h1>{props.title}</h1>

      <p>
        {props.description}
      </p>

    </div>

  )
}

function Avatar(props){

  return (
    <img className="avatar" src={props.src} alt="avatar"></img>


  )
}


function App(){
  return (
     
    <Card/>
          
     
  )
  
  
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);