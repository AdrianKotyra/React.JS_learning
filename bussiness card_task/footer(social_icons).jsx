import React from 'react';
import facebook from "./images/facebook-app.svg"
import twitter from "./images/ig-instagram.svg"
import linkedin from "./images/twitter-app.svg"
import instagram from "./images/linkedin-app.svg"


const Social_icons_content = () => {
    return(
        <div id="icons_section">
            <img className='social_icons_footer' src={facebook}></img>
            <img className='social_icons_footer' src={twitter}></img>
            <img className='social_icons_footer' src={linkedin}></img>
            <img className='social_icons_footer' src={instagram}></img>


        </div>

    )
}


export default Social_icons_content;
