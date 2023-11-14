import React from "react";
import "../Ticketing.css"
import Footer from "./Footer"
import { Link } from "react-router-dom";

function Ticketing(){

    return(
        <div>
            <div id="swamy" style={{width:"1000px",height:"60px",marginLeft:"12%"}}>
                <div style={{position:"absolute",paddingLeft:"40%",paddingTop:"16px",fontSize:"20px"}}>M.CHINNASWAMY STADIUM</div>
            <div id="sun"style={{width:"400px",fontSize:"20px",position:"absolute"}}>SUN,MAY 21,2023 07:30PM</div>
           </div>
           <div style={{backgroundColor:"whitesmoke",marginLeft:"12%",width:"1000px",height:"200px"}}>
            <div className="Bangalore">
                <div id="royal" style={{marginLeft:"70px",marginTop:"70px"}} >
           <div>Royal Challengers  </div>
           <div>Bangalore</div>

                                 </div>
<div id="royal"><img src="/Images/rcb.png"/></div>
<div id="royal" style={{marginTop:"80px"}}>VS</div>
<div id="royal" ><img src="/Images/gt.png"/></div>
<div id="royal" style={{marginTop:"80px"}}>Gujarath Titans</div>

<div id="royal" className="online" style={{marginTop:"70px",width:"240px",height:"40px"}}>ONLINE TICKETS SOLID OUT</div>

           </div>
            </div>
            <div style={{marginLeft:"12%"}}><Link id="courier" to="https://www.tpcindia.com/Default.aspx">Track Courier status</Link></div>
            <div style={{marginLeft:"12%"}}>Note:You will receive the AWB Tracking Number Via or SMS Once the Ticket is dispatched.if you are still Unable track, write to us at rcbtickets@ticketgenie.in</div>
            <div id="courier"style={{marginLeft:"12%"}} onClick={prasad}>Purchase History</div>
            <Footer/>
        </div>
    )


    function prasad(){

        console.log("hi iam prasad")
    }
}



export default Ticketing