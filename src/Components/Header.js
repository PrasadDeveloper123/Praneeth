import React from "react";
import "../Header.css"
import { Link } from "react-router-dom";
import Footer from "./Footer";


function Header(){
    return(
        
        <div className="background">
            <div className="relative">
            <div class="rowone">
                <div id="logo">
                   <img src="/Images/rcb-logo-new.png" style={{width:"70px",height:"110px"}}/>
                </div>
                <div style={{marginLeft:"30px"}}>
                   <img src="/Images/970---90-banner (1).gif" style={{width:"700px",height:"68px",marginTop:"3px",border:"1px solid white"}}/>
                </div>
                
                <div style={{marginLeft:"150px",color:"white",width:"20px",height:"10px",marginTop:"13px"}}>

                <i class="fa-solid fa-bag-shopping"></i>
                </div>
                <div style={{marginLeft:"20px",color:"white",marginTop:"13px"}}>
                    <div>|</div>
                </div>
                <div style={{marginLeft:"20px",color:"white",marginTop:"13px"}}>
                <div style={{border:"1px solid white",borderRadius:"50%",width:"12px"}} ><Link to="https://www.facebook.com/RoyalChallengersBangalore/"><i class="fa-brands fa-facebook-f" style={{color:"white"}} ></i></Link>
                
                   
               </div>
               <div style={{fontSize:"10px",marginTop:"15px"}}><span>Download</span>
                    <div>Our App</div></div>
              


            
        
               
                </div>
                <div style={{marginLeft:"20px",color:"white",marginTop:"13px"}}>
                <div style={{border:"1px solid white",borderRadius:"50%",width:"18px"}} > <Link to="https://twitter.com/rcbtweets?lang=en"><i class="fa-brands fa-twitter" style={{color:"white"}}></i></Link>
              
                </div>
                <div><div style={{marginTop:"15px"}}>
                   <Link to="https://play.google.com/store/apps/details?id=com.interactech.rcb&hl=en_IN"> <img src="/Images/playstore.png" style={{marginLeft:"15px"}}/></Link>
                </div></div>
                


            
           

                <div className="download">
                    
            
                </div>
                

                </div>
                    <div style={{marginLeft:"20px",color:"white",marginTop:"13px"}}>
                    <div style={{border:"1px solid white",borderRadius:"50%",width:"22px"}} ><Link to="https://www.instagram.com/royalchallengersbangalore/?hl=en" ><i class="fa-solid fa-camera"style={{padding:"2.5px",color:"white"}}></i></Link></div>
                    <div><div style={{marginTop:"15px"}}>
               <Link to="https://apps.apple.com/in/app/rcb-official-app/id516455943"> <i class="fa-brands fa-apple"style={{marginLeft:"20px",fontSize:"20px",color:"white"}}></i></Link>
                </div></div>
                       </div>
                       
                       <div style={{marginLeft:"20px",color:"white",marginTop:"13px"}}>
                       <div style={{border:"1px solid white",borderRadius:"50%",width:"20px"}} > <Link to="https://www.youtube.com/channel/UCCq1xDJMBRF61kiOgU90_kw"><i class="fa-brands fa-square-youtube" style={{padding:"2.5px",color:"white"}}></i></Link></div>
                       <div style={{display:"flex",marginRight:"40px",position:"absolute"}}>
                        </div>
                       </div>
                       


            </div>
            </div>
            <div className="third">
                <div className="A">#PLAYBOLD</div>
                <div ><Link to="/"className="A" style={{color:"yellow"}}>HOME</Link></div>
                <div ><Link to="/news" className="A">NEWS</Link></div>
                <div ><Link to="/rcbtv" className="A">RCB TV</Link></div>
                <div ><Link to="/images" className="A">PHOTOS</Link></div>
                <div ><Link to="/team"className="A">TEAM</Link></div>
                <div ><Link to="/fixtures" className="A">FIXTURES</Link></div>
                <div ><Link to="/tickets" className="A" style={{color:"yellow"}}>TICKETS</Link></div>
                <div><Link to="/rcbbar"className="A">RCB BAR& CAFE</Link></div>
                <div ><Link to="" className="A">HUSTLE</Link></div>
                <div ><Link to="/shop" className="A">SHOP</Link></div>
                <div ><Link to="/green" className="A">GO GREEN</Link></div>
                <div >
                    <div  >
                    <select value="MORE" style={{color:"yellow"}}  id="cars">
    <option  style={{display:"none"}} >MORE</option>
    <option style={{color:"white"}} >ABOUT US</option>
    <option style={{color:"white"}} >PRIVACY POLICY</option>
    <option style={{color:"white"}} >TERMS AND CONDITIONS</option>
    <option style={{color:"white"}}>CSR POLICY</option>
    <option style={{color:"white"}} >ANNUAL RETURN</option>
    <option style={{color:"white"}}>CONTACT US</option> 
   </select>
  


   </div>

  </div>










            </div>
            {/* <Footer/> */}
            </div>
       
    )
}

export default Header