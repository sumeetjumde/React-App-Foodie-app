import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { typography } from "@material-ui/system";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { James } from "./grid";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
        color:"#darkblue",
      }
  }));
  
const About=(props)=>{
    console.log(props);
    const classes = useStyles();
    return(
        <> 
        
        <div className="container">

           <Typography variant="h2" fontSize="20px"> Hello There Explore US</Typography>
           <Typography variant="h5" color="secondary">Who Are We</Typography><br/>
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="image"
              style={{width:"100%",position:"relative"}}
            />
           <br/><br/>
           <Typography variant="h6" paragraph="bool" >Launched in 2010, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.</Typography>
           <Typography variant="h3" fontSize="20px">Creating happier everyday lives</Typography><br/> 
          
           <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="image" style={{width:"100%",position:"relative"}}/>
            <Typography variant="h5">Some says</Typography>
           <Typography variant="h6">"To eat is a necessity, but to eat intelligently is an art." "We all eat, an it would be a sad waste of opportunity to eat badly." "If you really want to make a friend, go to someone's house and eat with him...the people who give you their food give you their heart."</Typography> <br/>
            <img src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" style={{width:"100%",position:"relative"}}/><br/><br/>
            <Typography variant="h4">OUR THREE GOLDEN RULES</Typography>
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>1.Outstanding Customer Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography >
          <img src="https://www.posist.com/restaurant-times/wp-content/uploads/2016/02/12-1-768x384.jpg" alt=""/><br/><br/>
          It’s not rocket science- an exceptional service is going to keep your customers coming back for more. Great food at a reasonable price, with a good ambiance and hospitality, completes an excellent dining experience. Ensure that every visit, be it the first, fifth or fiftieth, is consistently a good experience. However, outstanding service is a vague term. Customers’ expectations may vary from one another, but for retaining your customers, you must ensure that the service provided is remarkable and to the best of your efforts.
            Not just the quality of the food, but the quantity served and the price charged for it is also accountable for excellent service. You must balance the portion size and the price charged for the item to keep your food costs in check, and also keep your customers happy.
            Next, no matter how delicious the food is, if your customers have to wait an hour just to be served an entree, they are bound to get annoyed. Make sure you don’t make your customers wait too long to be seated, or served.
            Ideal waiter to table ratio is also an essential factor to consider. In casual dining restaurants where the service expectation is low and the volume of customers high, the ideal Table-to-Waiter ratio is high- 6 to 8 tables (seating an average of 4 people) per waiter. On the other hand, fine dining restaurants often have several courses and need constant supervision. In this case, the expectation of service is exceptionally high as the customers are paying significantly more, and any lack of service is frowned upon.
            Personal contact with the customers also adds a lot to customer service, which is an essential factor in customer retention. We have explained the point below.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>2.Creating A Personal Touch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
          <img src="https://www.posist.com/restaurant-times/wp-content/uploads/2016/02/12-1-768x384.jpg" alt=""/><br/><br/>
          It’s not rocket science- an exceptional service is going to keep your customers coming back for more. Great food at a reasonable price, with a good ambiance and hospitality, completes an excellent dining experience. Ensure that every visit, be it the first, fifth or fiftieth, is consistently a good experience. However, outstanding service is a vague term. Customers’ expectations may vary from one another, but for retaining your customers, you must ensure that the service provided is remarkable and to the best of your efforts.
            Not just the quality of the food, but the quantity served and the price charged for it is also accountable for excellent service. You must balance the portion size and the price charged for the item to keep your food costs in check, and also keep your customers happy.
            Next, no matter how delicious the food is, if your customers have to wait an hour just to be served an entree, they are bound to get annoyed. Make sure you don’t make your customers wait too long to be seated, or served.
            Ideal waiter to table ratio is also an essential factor to consider. In casual dining restaurants where the service expectation is low and the volume of customers high, the ideal Table-to-Waiter ratio is high- 6 to 8 tables (seating an average of 4 people) per waiter. On the other hand, fine dining restaurants often have several courses and need constant supervision. In this case, the expectation of service is exceptionally high as the customers are paying significantly more, and any lack of service is frowned upon.
            Personal contact with the customers also adds a lot to customer service, which is an essential factor in customer retention. We have explained the point below.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>3.Gathering Customer Feedback</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Typography >
          <img src="https://www.posist.com/restaurant-times/wp-content/uploads/2016/02/12-1-768x384.jpg" alt=""/><br/><br/>
          It’s not rocket science- an exceptional service is going to keep your customers coming back for more. Great food at a reasonable price, with a good ambiance and hospitality, completes an excellent dining experience. Ensure that every visit, be it the first, fifth or fiftieth, is consistently a good experience. However, outstanding service is a vague term. Customers’ expectations may vary from one another, but for retaining your customers, you must ensure that the service provided is remarkable and to the best of your efforts.
            Not just the quality of the food, but the quantity served and the price charged for it is also accountable for excellent service. You must balance the portion size and the price charged for the item to keep your food costs in check, and also keep your customers happy.
            Next, no matter how delicious the food is, if your customers have to wait an hour just to be served an entree, they are bound to get annoyed. Make sure you don’t make your customers wait too long to be seated, or served.
            Ideal waiter to table ratio is also an essential factor to consider. In casual dining restaurants where the service expectation is low and the volume of customers high, the ideal Table-to-Waiter ratio is high- 6 to 8 tables (seating an average of 4 people) per waiter. On the other hand, fine dining restaurants often have several courses and need constant supervision. In this case, the expectation of service is exceptionally high as the customers are paying significantly more, and any lack of service is frowned upon.
            Personal contact with the customers also adds a lot to customer service, which is an essential factor in customer retention. We have explained the point below.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
        <div className="customerReview">
        <br/><Typography variant="h4">Our Reviews-What People Thinks About Us</Typography>
     
        <div className="review1">
        <Typography variant="h6" color="primary" className="reviewsay">"I had breakfast there this morning and dinner tonight. All were well beyond my expectations. Everything is so fresh. Best clam chowder I have ever had. Clams and linguine were out of this world. Breakfast will knock your slippers off."</Typography>
        </div>
        <div className="review2">
        <Typography variant="h6" color="primary" className="reviewsay">"The food is excellent, generous portions and great prices. The service was fast and friendly. I highly recommended it if you’re in the Wellfleet area."</Typography>
        </div>
        <div className="review3">
        <Typography variant="h6" color="primary" className="reviewsay">"We like to go to The Fairway every time we come to the Cape. The food is always delicious! This is the first year we could make reservations (probably due to spacing because of the virus). Our waitress, Casey, was great!"</Typography>
        </div>
        <div className="review4">
        <Typography variant="h6" color="primary" className="reviewsay">"Fairway has great pizza, the best! I am picky about my pizza. Their pies are huge, not two much sauce and a great mixture of cheeses."</Typography>
        </div>
        <div className="review5">
        <Typography variant="h6" color="primary" className="reviewsay">"My husband and I had our Anniversary dinner at the Fairway last night. We sat outside on the terrace which was very pretty and private. Our waitress was wonderful and the food was absolutely delicious!! It could not have been more spectacular! We would highly recommend it to everyone!!"</Typography>
        </div>
        </div>
        </div>
        
        
        

        </>
    )


  }
export default About;
