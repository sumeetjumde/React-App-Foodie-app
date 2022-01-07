
import React, { useState } from "react";
import { Container, Typography ,TextField, Button} from "@material-ui/core";
import Feedbackform from "./Feedbackformcontactus";




const Contact=()=>{  
   
    return(
        <><Typography variant="h2" className="contactTitle">WELCOMEEEE</Typography>
        <Container className="container">
        <div>
        <img src="https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80" alt=""/>
        <Typography variant="h6">The precursor to the modern hotel was the inn of medieval Europe. For a period of about 200 years from the mid-17th century, coaching inns served as a place for lodging for coach travelers. Inns began to cater to richer clients in the mid-18th century. One of the first hotels in a modern sense was opened in Exeter in 1768. Hotels proliferated throughout Western Europe and North America in the early 19th century, and luxury hotels began to spring up in the later part of the 19th century.

        Hotel operations vary in size, function, complexity, and cost. Most hotels and major hospitality companies have set industry standards to classify hotel types. An upscale full-service hotel facility offers luxury amenities, full-service accommodations, an on-site restaurant, and the highest level of personalized service, such as a concierge, room service, and clothes pressing staff. Full-service hotels often contain upscale full-service facilities with many full-service accommodations, an on-site full-service restaurant, and a variety of on-site amenities. Boutique hotels are smaller independent, non-branded hotels that often contain upscale facilities. Small to medium-sized hotel establishments offer a limited amount of on-site amenities. Economy hotels are small to medium-sized hotel establishments that offer basic accommodations with little to no services. Extended stay hotels are small to medium-sized hotels that offer longer-term full-service accommodations compared to a traditional hotel.</Typography>
        </div></Container>
        <Typography variant="h3" className="contactHeading1">Our Crew</Typography>
        <div className="row">
        <div className="contactBox1">
            <Typography variant="h5" className="contactHeading">Manager</Typography>
            
        </div>
        <div className="contactBox2">
            <Typography variant="h5" className="contactHeading">Marketing Head</Typography>
        </div>
        <div className="contactBox3">
            <Typography variant="h5" className="contactHeading">Product Designer</Typography>
        </div>
        <div className="contactBox4">
            <Typography variant="h5" className="contactHeading">Ass. Advisor</Typography>
        </div>
        </div>
        
        <Feedbackform/>
     
        </>
    )
}

export default Contact;