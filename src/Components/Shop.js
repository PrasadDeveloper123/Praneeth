import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Ticketing.css"



function Shop(){


    return(
        <div>

           <div style={{display:"flex",marginLeft:"35%",marginTop:"35px"}}>
<div className="Item"><Link to="" id="a"  style={{color:"black",textDecoration:"none"}}>Ticketing</Link></div>
<div className="Item"  style={{marginLeft:"80px"}}><Link  style={{color:"black",textDecoration:"none"}} to="merchandise">Merchandise</Link></div>
<div className="Item"  style={{marginLeft:"80px"}}><Link style={{color:"black",textDecoration:"none"}} to="products">Products</Link></div>

           </div>
           <Outlet/>
        </div>
    )
}



export default Shop