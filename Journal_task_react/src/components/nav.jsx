import React from "react";
import globe_icons from "./imgs/globe-europe-solid.svg"

function Navi() {
    return(

        <div id="navigation_content">


            <div id="nav_content">
                <img id="nav_icons" src={globe_icons}></img>

                
                <div id="nav_text">My Journal</div>
                
            </div>
        
        

        </div>
    )


}

export default Navi;