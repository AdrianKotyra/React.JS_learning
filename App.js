import React from "react";
import logo from "./assets/logo192.png"



const Top_bar =()=>{
    return(
        <div id="top_bar_container">
            <div id="logo_image_text">
                <img id="logo" src={logo}></img>
                <p id="text_logo">ReactFacts</p>

            </div>

            <div id="logo_text">
                <p>React Course - Project1 </p>
            </div>


        </div>

        
        





    )
}

const Middle_bar = () => {
    return(
        <div id="middle_bar_container">
            <div id="text_list">
                <h1 id="middle_title">Fun facts about React</h1>
                <ul id="middle_list">
                    <li className="bullet">Lorem ipsum dolor, sit amet consectetur adipisicing.</li>
                    <li className="bullet">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione.</li>
                    <li className="bullet">Lorem ipsum dolor sit.</li>
                    <li className="bullet">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt dolorem ipsum sunt.</li>
                    <li className="bullet">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>




                </ul>

            </div>
           




        </div>



    )
}









const App =() => {
    return(
        <>
            <Top_bar/>
            <Middle_bar/>
        </>

    )
}

export default App;



