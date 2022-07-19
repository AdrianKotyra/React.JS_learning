import React from 'react';
import email_img from "./images/envelope-solid.svg"
import linedin_img from "./images/linkedin-app.svg"




const Buttons =() => {
    return(
        <div id="buttons_container">
            <button className='Button_profile'>
                <img src={email_img} className="button_logos"></img>
                Email

            </button>

            <button id="right_button" className='Button_profile'>
                <img src={linedin_img} className="button_logos"></img>
                Linkedin
                
            </button>

        
        </div>



    )
}

export default Buttons;