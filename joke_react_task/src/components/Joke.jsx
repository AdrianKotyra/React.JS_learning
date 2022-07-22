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





const Jokes =() => {
    return(
        <ol id="list_of_jokes">

            <li><Joke setup="Whats the best thing about Switzerland?" punchline="I dont know, but the flag is a big plus."/></li>
            <br></br>

            
    
            <li> <Joke setup="Did you hear about the mathematician who’s afraid of negative numbers?" punchline="Hell stop at nothing to avoid them."/></li>
            <br></br>
            <li> <Joke setup="Why do we tell actors to “break a leg?”" punchline="Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor."/></li>
            <br></br>
            <li> <Joke setup="Helvetica and Times New Roman walk into a bar." punchline="“Get out of here!” shouts the bartender. “We dont serve your type.”"/></li>
            <br></br>
            <li> <Joke setup="Hear about the new restaurant called Karma?" punchline="Theres no menu: You get what you deserve."/></li>
           
           
            
           



        </ol>
        






    )
}

export default Jokes;