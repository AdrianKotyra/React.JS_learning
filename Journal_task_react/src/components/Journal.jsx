
import React from "react"
import Journal_structure_content from "./journal_structure"
import Journal_data from "./main_content_data";








function Journalstructurefromdata() {
    const journal_list = Journal_data.map(function(journal){
        return <Journal_structure_content 
        element = {journal}
        
        
        />




        // title={journal.title_data} 
        // description={journal.description_data}
        // image_url={journal.image_url_data}
        // start_date={journal.start_date_data}
        // end_date={journal.end_date_data}
        // google_maps={journal.google_maps_data}
        
        
                       
    })
    return journal_list

    
}


export default Journalstructurefromdata;
