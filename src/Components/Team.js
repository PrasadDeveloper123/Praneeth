import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../Team.css"


function Team(){


    
    return(


    <div>
        
        <div style={{display:"flex",marginLeft:"40%",marginTop:"30px"}}>
        <div className="crush" ><Link to="" className="c" style={{textDecoration:"none",color:"red",fontSize:"25px"}}>MEN</Link></div>
        <div><Link to="women" className="crush"style={{textDecoration:"none",color:"red",fontSize:"25px",marginLeft:"80px"}}>WOMEN</Link></div>
        </div>
        <h3 style={{marginLeft:"44%",marginTop:"10px"}}>SQUAD</h3>
        
                <Outlet/>
                
    </div>

    )
    
}


export default Team