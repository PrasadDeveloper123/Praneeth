import React from "react";
import "./Rcbtv.css"
import { Link } from "react-router-dom";


function Rcbtv2(){

    return(
        <div>

<div className="rcbtvone" style={{marginTop:"60px"}}>

           <div  style={{marginLeft:'20px'}}>
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
         <div style={{position:"absolute",marginLeft:"150px",marginTop:"80px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              <div style={{color:"white",backgroundColor:"yellow",width:"30px",marginTop:"180px",position:"absolute"}}>06</div>
 <div style={{color:"white",backgroundColor:"yellow",width:"30px",position:"absolute",marginTop:"200px"}}>May</div>
 <Link className="annanya"  to="/rcbkkr"  style={{textDecoration:"none"}}><video className="video" style={{width:"300px"}} controls ><source className="one"  src="/Videos/rcb vs kkr1.mp4"></source></video></Link>
 

 <Link className="annanya"  to="/rcbkkr"><div   style={{marginLeft:"40px"}}>Today match RCB vs KKR</div>
<div style={{marginLeft:"40px"}}>This Game is both teams have a crucial</div></Link>

 
 
 
 
</div>

<div  style={{marginLeft:'20px'}}>
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
         <div style={{position:"absolute",marginLeft:"150px",marginTop:"80px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              <div style={{color:"white",backgroundColor:"yellow",width:"30px",marginTop:"180px",position:"absolute"}}>06</div>
 <div style={{color:"white",backgroundColor:"yellow",width:"30px",position:"absolute",marginTop:"200px"}}>May</div>
 <Link className="annanya"  to="/rcbkkr1"  style={{textDecoration:"none"}}><video className="video" style={{width:"300px"}} controls ><source className="one"  src="/Videos/rcb vs kkr2.mp4"></source></video></Link>
 

 <Link className="annanya" to="/rcbkkr1" ><div   style={{marginLeft:"40px"}}>RCB Team squad with KKr match </div>
<div style={{marginLeft:"40px"}}>in 2023</div></Link>

 
 
 
 
</div>

<div  style={{marginLeft:'20px'}}>
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
         <div style={{position:"absolute",marginLeft:"150px",marginTop:"80px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              <div style={{color:"white",backgroundColor:"yellow",width:"30px",marginTop:"180px",position:"absolute"}}>06</div>
 <div style={{color:"white",backgroundColor:"yellow",width:"30px",position:"absolute",marginTop:"200px"}}>May</div>
 <Link className="annanya"  to="/rcbattitude"  style={{textDecoration:"none"}}><video className="video" style={{width:"300px"}} controls ><source className="one"  src="/Videos/rcbattitude.mp4"></source></video></Link>
 

<Link to="/rcbattitude" className="annanya"><div   style={{marginLeft:"40px"}}>RCB team watching MI vs Delhi</div>
<div style={{marginLeft:"40px"}}>if Mi will win Rcb will get the Playoffs</div></Link>

 
 
 
 
</div>
<div  style={{marginLeft:'20px'}}>
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
         <div style={{position:"absolute",marginLeft:"150px",marginTop:"80px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              <div style={{color:"white",backgroundColor:"yellow",width:"30px",marginTop:"180px",position:"absolute"}}>06</div>
 <div style={{color:"white",backgroundColor:"yellow",width:"30px",position:"absolute",marginTop:"200px"}}>May</div>
 <Link className="annanya"  to="/rcbpractice"  style={{textDecoration:"none"}}><video className="video" style={{width:"300px"}} controls ><source className="one"  src="/Videos/rcbpractice.mp4"></source></video></Link>
 

<Link to="/rcbpractice" className="annanya" style={{textDecoration:"none"}}><div   style={{marginLeft:"40px"}}>RCB Practice session</div>
<div style={{marginLeft:"40px"}}>Special videos</div></Link>

 
 
 
 
</div>






           </div>
        </div>
    )
}


export default Rcbtv2