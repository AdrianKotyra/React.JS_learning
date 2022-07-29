import React from "react";
import Fuji_img from "./imgs/fuji.jpg"
import Kilimanjaro_img from "./imgs/Kilimanjaro.jpg"
import MontBlanc_img from "./imgs/Mont_Blanc.jpg"


const Journal_data = [
    {
        title_data: "Mount Fuji",
        location_data: "Japan",
        google_maps_data: "https://goo.gl/maps/5rFe9Lcrzb9ivrLz5",
        start_date_data: "12/06/2021",
        end_date_data: "06/07/2021",
        description_data: "Japans Mt. Fuji is an active volcano about 100 kilometers southwest of Tokyo.Commonly called Fuji-san,its the countrys tallest peak, at 3,776 meters. A pilgrimage site for centuriesits considered one of Japans 3 sacred mountains, and summit hikes remain a popular activity.",
        image_url_data: Fuji_img

    },

    {
        title_data: "Mount Kilimanjaro", 
        location_data: "Africa",
        google_maps_data: "https://goo.gl/maps/v9vwdGKeAcaAKUnd8",
        start_date_data: "01/04/2020", 
        end_date_data: "07/05/2020", 
        description_data: "is a dormant volcano in United Republic of Tanzania. It has three volcanic cones: Kibo, Mawenzi, and Shira. It is the highest mountain in Africa ",
        image_url_data: Kilimanjaro_img

    },

    {
        title_data: "Mont Blanc",
        location_data: "France",
        google_maps_data: "https://goo.gl/maps/KcZmaWAPnub5LFmk7",
        start_date_data: "04/12/2018",
        end_date_data: "15/02/2018",
        description_data: "highest mountain in the Alps and Western Europe, rising 4,807.81 m (15,774 ft) above sea level",
        image_url_data: MontBlanc_img

    },
    


]

export default Journal_data;