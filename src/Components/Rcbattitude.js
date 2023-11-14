import React from "react";

import Footer from "./Footer";


function rcbattitude(){

    return(
        <div>
<div style={{marginTop:'100px'}} >
              <div style={{position:"absolute",marginLeft:"500px",marginTop:"180px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
 <video  style={{width:"80%",height:"500px"}} controls ><source  src="/Videos/rcbattitude.mp4"></source></video>
 <Footer/>
</div>

        </div>
    )
}


export default rcbattitude;