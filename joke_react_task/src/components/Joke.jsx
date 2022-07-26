import React from "react";
import Jokesdata from "./jokes_data";
import Joke from "./joke_structure";


 
function Jokeslist() {
    const Jokes = Jokesdata.map(function(joke_from_data) {
        return <Joke setup={joke_from_data.setup} punchline={joke_from_data.punchline}/>

    })

    return Jokes
}















// const Jokes =() => {
//     return(
//         <div id="list_of_jokes">


//             <Joke setup="Whats the best thing about Switzerland?" punchline="I dont know, but the flag is a big plus."/>
//             <Joke setup="Did you hear about the mathematician who’s afraid of negative numbers?" punchline="Hell stop at nothing to avoid them."/>
//             <Joke setup="Why do we tell actors to “break a leg?”" punchline="Because every play has a cast. Here are some dark jokes to check out if you have a morbid sense of humor."/>
//             <Joke setup="Helvetica and Times New Roman walk into a bar." punchline="“Get out of here!” shouts the bartender. “We dont serve your type.”"/>
//             <Joke setup="Hear about the new restaurant called Karma?" punchline="Theres no menu: You get what you deserve."/>
           
           
            
           



//         </div>
        






//     )
// }

export default Jokeslist;