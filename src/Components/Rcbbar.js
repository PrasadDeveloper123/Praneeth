import React from "react";

import "../Rcbbar.css"
import { Link } from "react-router-dom";


function Rcbbar(){

    return(
        <>
            <div className="bar1">

<div>

    <img src="/Images/bar1.jpg" className="img B2" style={{height:"500px"}} />
    <div className="content B " >INTRODUCING SUN&</div>
    <div className="B1">SCOTCH:BRUNCH HAS A</div>
    <div className="B3">NEW ADDRESSES</div>


</div>
<div style={{marginLeft:"80px",marginTop:"50px"}}>
    <img src="/Images/bar2.png" style={{width:"300px"}}/>
    <div style={{marginTop:"50px",display:"flex"}}>
        <div className="table" >Book a Table</div>
        <div className="table" style={{marginLeft:"60px"}}>Get Directions</div>
    </div>
    <div style={{display:"flex"}}>

        <div className="table" >See Virtual Tour</div>
        <div className="table" style={{marginLeft:"60px"}}>Buy Products</div>
        <div>

        </div>
    </div>
    <div style={{display:"flex"}}>
        <div style={{marginLeft:"160px",padding:"5px"}} className="r"><Link to="https://www.facebook.com/rcbbarcafe/"><i className="fa-brands fa-facebook-f I" ></i></Link>
</div>
        <div style={{marginLeft:"20px",padding:"5px",borderRadius:"90%"}} className="r"><Link to="https://twitter.com/rcbbarcafe"><i className="fa-brands fa-twitter I"></i></Link>
</div>
        <div style={{marginLeft:"20px",padding:"4px"}} className="r"><Link to="https://www.instagram.com/rcbbarcafe/"><i className="fa-brands fa-instagram I"></i></Link></div>
    </div>
    

</div>
<div>
<div style={{display:"flex",marginTop:'20px'}}>
        <div><img src="/Images/bar3.jpg" style={{width:"175px",marginLeft:"10px"}}/></div>
        <div><img src="/Images/bar4.jpg" style={{width:"175px",marginLeft:"3px"}}/></div>
        


        

    </div>
    <div style={{position:"absolute",marginTop:"3px"}} >
    <div style={{position:"absolute",marginTop:"210px",color:"black",marginLeft:"150px",backgroundColor:"white",height:"30px"}} className="table">View Gallery</div>
    <div style={{display:"flex",marginTop:"3px"}}>
    <div><img src="/Images/bar5.jpg" style={{width:"175px",marginLeft:"10px"}}/></div>
        <div><img src="/Images/bar6.jpg" style={{width:"175px",marginLeft:"3px"}}/></div>
        
    </div>


    </div>
    </div>

</div>

<div>


    
    
</div>

           



                
           
            

        </>
    )
}


export default Rcbbar