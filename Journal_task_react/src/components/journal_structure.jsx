import React from "react";
import map_marker from "./imgs/map-marker-alt-solid.svg";








function Journal_structure_content(props) {
    return(
        <div id="Journal_structure_box">
            <div id="Journal_img_content">
                <img id="Journal_img"src={props.element.image_url_data} alt="this is image"></img>
                
            </div>


            <div id="Journal_text">
                <a id="google_maps_link" href={props.element.google_maps_data}> <img id="map_marker" src={map_marker}></img> Google maps </a>
                <div id="title"> {props.element.title_data}</div>
                <div id="date_times">
                    <div id="start_date"><b>{props.element.start_date_data}</b> </div>   
                    
                    <div id="end_date"> - <b>{props.element.end_date_data} </b></div>
                </div>
                
                <div id="description">{props.element.description_data}</div>
            </div>



        </div>




    )
}








export default Journal_structure_content;
