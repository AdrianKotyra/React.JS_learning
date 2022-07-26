

import React from "react";



function Joke(props) {
    return(
    
    <div id="joke_structure">

        <div id="joke_setup_structure">
            {props.setup}

        </div>
        <br></br>

        <div id="joke_punchline_structure">
            {props.punchline}

        </div>

    </div>
    )
   
}

export default Joke;
