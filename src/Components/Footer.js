import React from "react";
import { Link } from "react-router-dom";

import "../Footer.css"

function Footer(){
    return(
        <div style={{marginTop:"30px"}}>
            <div style={{display:"flex"}}>
                <div style={{backgroundColor:"black",width:"70%",height:"180px"}}>
                   
                   <div className="F1" style={{display:"flex",justifyContent:"space-evenly",marginTop:"40px"}}>
                    <div>
                          <img src="/Images/rcb-logo-new.png" style={{width:"70px",height:"120px"}}/>
                    </div>
                          <div>
            <div ><Link to="/"className="A" style={{fontSize:"13px"}}>HOME</Link></div>
                <div ><Link to="/news" className="A" style={{fontSize:"13px"}}>NEWS</Link></div>
                <div ><Link to="/rcbtv" className="A" style={{fontSize:"13px"}}>RCB TV</Link></div>
                <div ><Link to="/images" className="A" style={{fontSize:"13px"}}>PHOTOS</Link></div>

                    </div>
                    <div>
                    <div ><Link to="/tickets"className="A" style={{fontSize:"13px"}}>TICKETS</Link></div>
                <div ><Link to="/fixtures" className="A" style={{fontSize:"13px"}}>FIXTURES</Link></div>
                <div ><Link to="/team" className="A" style={{fontSize:"13px"}}>TEAM</Link></div>
                <div><Link to="/shop"className="A" style={{fontSize:"13px"}}>SHOP</Link></div>
                    </div>
                               <div>
                    <div ><Link to=""className="A" style={{fontSize:"13px"}}>ABOUT US</Link></div>
                <div ><Link to="" className="A" style={{fontSize:"13px"}}>PRIVACY POLICY</Link></div>
                <div ><Link to="" className="A" style={{fontSize:"13px"}}>TERMS AND CONDITIONS</Link></div>
                <div><Link to=""className="A" style={{fontSize:"13px"}}>CONTACT US</Link></div>

                    </div>
                   </div>


               </div>

<div style={{backgroundColor:"black",width:"30%",marginLeft:"1px",height:"180px"}}>
                    <div style={{display:"flex",marginLeft:"150px",marginTop:"30px"}}>
                    <div style={{marginLeft:"20px",color:"white",marginTop:"13px"}}>
                <div style={{border:"1px solid white",borderRadius:"50%",width:"12px"}} ><Link to="https://www.facebook.com/RoyalChallengersBangalore/"><i class="fa-brands fa-facebook-f" style={{color:"white"}} ></i></Link>
                
                   
                             </div>
                             </div>

<div>
<div style={{marginLeft:"20px",color:"white",marginTop:"13px"}}>
<div style={{border:"1px solid white",borderRadius:"50%",width:"18px"}} > <Link to="https://twitter.com/rcbtweets?lang=en"><i class="fa-brands fa-twitter" style={{color:"white"}}></i></Link></div>
</div>

</div>

                 <div>

             <div style={{marginLeft:"20px",color:"white",marginTop:"13px"}}>
            <div style={{border:"1px solid white",borderRadius:"50%",width:"22px"}} ><Link to="https://www.instagram.com/royalchallengersbangalore/?hl=en" ><i class="fa-solid fa-camera"style={{padding:"2.5px",color:"white"}}></i></Link></div>
            </div>
            <div>
             
                

                
 </div>
                       
</div>

<div>

<div style={{marginLeft:"10px",color:"white",marginTop:"13px"}}>
<div style={{border:"1px solid white",borderRadius:"50%",width:"20px"}} > <Link to="https://www.youtube.com/channel/UCCq1xDJMBRF61kiOgU90_kw"><i class="fa-brands fa-square-youtube" style={{padding:"2.5px",color:"white"}}></i></Link></div>
   </div>
</div> 


 </div>
             <div className="last" >

                <div style={{color:"white",fontSize:"10px"}}>
                    <div>CONNECT WITH RCB</div>
                    <div>PLAYERS ON THE RCB APP.</div>
                    <div>DOWNLOAD NOW</div>
                </div>

                <div>

                <div  style={{marginTop:"15px"}}>
                   <Link to="https://play.google.com/store/apps/details?id=com.interactech.rcb&hl=en_IN"> <img src="/Images/playstore.png" style={{marginLeft:"15px",width:"15px"}}/></Link>
                </div>

                </div>

                <div>

                <div style={{marginTop:"15px"}}>
               <Link to="https://apps.apple.com/in/app/rcb-official-app/id516455943"> <i class="fa-brands fa-apple"style={{marginLeft:"20px",fontSize:"20px",color:"white"}}></i></Link>
                </div>

                </div>


                  
                  </div >
                               
           
 </div>
 
</div>        

</div>
    )
}

export default Footer