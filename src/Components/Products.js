import React from "react";
import "./Product.css"
import Footer from "./Footer";

function Products(){

    return(
        <div>
            <h3 style={{marginLeft:"160px",marginTop:"30px"}}>DASH OF RCB</h3>
            <div className="dash">

                <div className="apple" style={{width:"350px"}}>
<img style={{ width:"250px",marginLeft:"50px",marginTop:"20px"}}src="/Images/GreenApple_1.png"/>
<div style={{fontSize:"15PX",marginLeft:"13PX"}}>GREEN APPLE SOUR COCKTAIL MIXER-PACK OF</div>
<div style={{fontSize:"15PX",marginLeft:"160PX"}}>4</div>
<div style={{fontSize:"15PX",marginLeft:"70PX"}}>FLAVOUR CAN BE CUSTOMIZED</div>
<div  style={{marginLeft:"90px",width:"140px"}}><i style={{color:"orange",padding:"14px"}} class="fa-solid fa-indian-rupee-sign"></i>99*4=   <i style={{color:"orange"}} class="fa-solid fa-indian-rupee-sign"></i>  396</div>
                   
                </div>

                <div className="apple" style={{width:"350px",marginLeft:'20px'}}>
<img style={{ width:"250px",marginLeft:"50px",marginTop:"20px"}}src="/Images/Pink-paloma_1.png"/>
<div style={{fontSize:"15PX",marginLeft:"30PX"}}>PINK PALOMA COCKTAIL MIXER-PACK OF 4</div>
<div style={{fontSize:"15PX",marginLeft:"160PX"}}>4</div>
<div style={{fontSize:"15PX",marginLeft:"70PX"}}>FLAVOUR CAN BE CUSTOMIZED</div>
<div  style={{marginLeft:"90px",width:"140px"}}><i style={{color:"orange",padding:"14px"}} class="fa-solid fa-indian-rupee-sign"></i>99*4=   <i style={{color:"orange"}} class="fa-solid fa-indian-rupee-sign"></i>  396</div>
                   
                </div>
                <div className="apple" style={{width:"350px",marginLeft:'20px'}}>
<img style={{ width:"250px",marginLeft:"50px",marginTop:"20px"}}src="/Images/Whiskey-Sour_1.png"/>
<div style={{fontSize:"15PX",marginLeft:"35PX"}}>WHISHKEY COCKTAIL MIXER-PACK OF 4</div>
<div style={{fontSize:"15PX",marginLeft:"160PX"}}>4</div>
<div style={{fontSize:"15PX",marginLeft:"70PX"}}>FLAVOUR CAN BE CUSTOMIZED</div>
<div  style={{marginLeft:"90px",width:"140px"}}><i style={{color:"orange",padding:"14px"}} class="fa-solid fa-indian-rupee-sign"></i>99*4=   <i style={{color:"orange"}} class="fa-solid fa-indian-rupee-sign"></i>  396</div>
                   
                </div>


            </div>

            <div className="apple" style={{width:"350px",marginLeft:'100px',marginTop:'20PX'}}>
<img style={{ width:"250px",marginLeft:"50px",marginTop:"20px"}}src="/Images/Tonic-Water_1.png"/>
<div style={{fontSize:"15PX",marginLeft:"100PX"}}>TONIC WATER-PACK OF</div>
<div style={{fontSize:"15PX",marginLeft:"160PX"}}>4</div>
<div style={{fontSize:"15PX",marginLeft:"70PX"}}>FLAVOUR CAN BE CUSTOMIZED</div>
<div  style={{marginLeft:"90px",width:"140px"}}><i style={{color:"orange",padding:"14px"}} class="fa-solid fa-indian-rupee-sign"></i>99*4=   <i style={{color:"orange"}} class="fa-solid fa-indian-rupee-sign"></i>  396</div>
                   
                </div>
                <Footer/>
        </div>
    )
}



export default Products