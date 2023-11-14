import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../Fixture.css"


function Fixtures(){

    return(
        <div>
            <div className="Fixture">
            <div style={{display:'flex'}}>
                <div className="f1" >
                    

                    <div className="white">58TH IPL T20 D/N |MAY 13-2023 | SATURDAY | 03:30PM</div>
                <div className="orange" style={{marginLeft:"100px"}}>RAJIV GANDHI INTERNATIONAL</div>
                
                </div>
                <div className="up">UPCOMING</div>
                </div>
                <div className="f1" >

<div className="white">[1ST]</div>
<div className="orange" style={{marginLeft:"550px"}}>STADIUM,HYDERABAD</div>
</div>
<div className="sun">
<div style={{marginTop:'30px',marginLeft:"150px"}}>SUNRISES HYDERABAD</div>
<div><img src="/Images/SRH.png" className="match1"></img></div>
<div style={{marginTop:'30px',marginLeft:'40px'}}>VS</div>

<div><img src="/Images/lsg.png" className="match1"></img></div>
<div style={{marginTop:'30px',marginLeft:'50px'}}>LUCKNOW SUPER GIANTS</div>

</div>

            </div>


            <div className="Fixture" style={{marginTop:"40PX"}}>
            <div style={{display:'flex'}}>
                <div className="f1" >
                    

                    <div className="white">59TH IPL T20 D/N |MAY 13-2023 | SATURDAY | 07:30PM [1ST]</div>
                <div className="orange" style={{marginLeft:"100px"}}>ARUN JAITLEY STADIUM,DELHI</div>
                
                </div>
                <div className="up">UPCOMING</div>
                </div>
                
<div className="sun">
<div style={{marginTop:'30px',marginLeft:"150px"}}>DELHI CAPITALS</div>
<div><img src="/Images/DC.png" className="match1" style={{marginLeft:'100PX'}}></img></div>
<div style={{marginTop:'30px',marginLeft:'40px'}}>VS</div>

<div><img src="/Images/PBKS.png" className="match1"></img></div>
<div style={{marginTop:'30px',marginLeft:'50px'}}>PUNJAB KINGS</div>

</div>

            </div>


            <div className="Fixture" style={{marginTop:"40PX"}}>
            <div style={{display:'flex'}}>
                <div className="f1" >
                    

                    <div className="white">60TH IPL T20 D/N |MAY 14-2023 | SUNDAY | 03:30PM[1ST]</div>
                <div className="orange" style={{marginLeft:"100px"}}>SAWAI MANSINGH STADIUM,JAIPUR</div>
                
                </div>
                <div className="up">UPCOMING</div>
                </div>
                
<div className="sun">
<div style={{marginTop:'30px',marginLeft:"150px"}}>RAJASTHAN ROYALS</div>
<div><img src="/Images/RR.png" className="match1" style={{marginLeft:'100PX'}}></img></div>
<div style={{marginTop:'30px',marginLeft:'40px'}}>VS</div>

<div><img src="/Images/rcb.png" className="match1"></img></div>
<div style={{marginTop:'30px',marginLeft:'50px'}}>ROYAL CHALLENGERS BANGALORE</div>

</div>

            </div>

            <div className="Fixture" style={{marginTop:"40PX"}}>
            <div style={{display:'flex'}}>
                <div className="f1" >
                    

                    <div className="white">61TH IPL T20 D/N |MAY 14-2023 | SUNDAY | 07:30PM[1ST]</div>
                <div className="orange" style={{marginLeft:"100px"}}>MA CHIDAMBARAM STADIUM,CHENNAI</div>
                
                </div>
                <div className="up">UPCOMING</div>
                </div>
                
<div className="sun">
<div style={{marginTop:'30px',marginLeft:"150px"}}>CHENNAI SUPER KINGS</div>
<div><img src="/Images/CSK.png" className="match1" style={{marginLeft:'100PX'}}></img></div>
<div style={{marginTop:'30px',marginLeft:'40px'}}>VS</div>

<div><img src="/Images/KKR.png" className="match1"></img></div>
<div style={{marginTop:'30px',marginLeft:'50px'}}>KOLKATA KNIGHT RIDERS</div>

</div>

            </div>


            <div className="Fixture" style={{marginTop:"40PX"}}>
            <div style={{display:'flex'}}>
                <div className="f1" >
                    

                    <div className="white">62TH IPL T20 D/N |MAY 14-2023 | SUNDAY | 07:30PM[1ST]</div>
                <div className="orange" style={{marginLeft:"100px"}}>NARENDRA MODI STADIUM,AHMEDABAD</div>
                
                </div>
                <div className="up">UPCOMING</div>
                </div>
                
<div className="sun">
<div style={{marginTop:'30px',marginLeft:"150px"}}>GUJARATH TITANS</div>
<div><img src="/Images/gt.png" className="match1" style={{marginLeft:'100PX'}}></img></div>
<div style={{marginTop:'30px',marginLeft:'40px'}}>VS</div>

<div><img src="/Images/SRH.png" className="match1"></img></div>
<div style={{marginTop:'30px',marginLeft:'50px'}}>SUNRISES HYDERABAD</div>

</div>

            </div>

<Footer/>
        </div>
    )
}


export default Fixtures