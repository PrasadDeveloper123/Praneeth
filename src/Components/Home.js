import React from "react";
import "../Home.css"
import { Link, Outlet } from "react-router-dom";
import "../Header.css"
import Footer from "./Footer";

function Home(){

    return(
        <div>
            <div className="home">

            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className="one" style={{color:"white",position:"absolute",fontSize:"35PX"}}>
        <div className="two">KOLKATA KNIGHT RIDERS HOPE TO</div>
        <div className="two">AVENGE EARLIER DEFEAT AS THEY</div>
        <div className="two">STEP INTO SUNRISES HYDERABAD'S</div>
        <div className="two" style={{width:"70px"}}>DEN</div> 
        <div className="day" style={{fontSize:"15PX",width:"70px"}}>1 day ago</div>
        </div>
        
      <img src="/Images/home1.jpg"  style={{width:"860px",height:"520PX"}} />
       
      
      
    </div>
    <div class="carousel-item">
      <img src="/Images/home21.jpg" style={{width:"800px"}}/>
    </div>
    <div class="carousel-item">
      <img src="/Images/home3.jpg"  style={{width:"800px"}}/>
    </div>
    <div class="carousel-item">
      <img src="/Images/home4.jpg"  style={{width:"800px"}}/>
    </div>
    <div class="carousel-item">
      <img src="/Images/home5.jpg"  style={{width:"800px"}}/>
    </div>
  </div>
 

</div>


<div className="rr" style={{width:"350px",justifyContent:"space-evenly"}}>
    <div style={{marginLeft:"15px",marginTop:"10px"}}>
    <div className="GJ" style={{marginLeft:"90px"}}>MAY 05-2023</div>
    <div className="GJ" style={{marginTop:"10px"}}>GUJARATH TITANS  WON BY 9 WICKETS</div>
    <div style={{display:"flex",marginTop:"10px"}}>
        <div ><img src="/Images/RR.png" style={{width:"50px"}}></img></div>
        <div>
        <div className="score" style={{color:'white',marginLeft:"10px",padding:"8px",height:"40px"}}>118/10</div>
<div className="GJ">17.5 Overs</div>
        </div>
        <div className="GJ" style={{marginTop:'15px'}}>Vs</div>
        <div>
        <div className="score" style={{color:'white',marginLeft:"10px",padding:"8px",height:"40px"}}>119/1</div>
<div className="GJ">13.5 Overs</div>
        </div>
        <div style={{marginLeft:"10px"}} ><img src="/Images/GT (1).png" style={{width:"50px"}}></img></div>
    </div>
    </div>
    <div style={{display:"flex",marginLeft:"70px",marginTop:"20px",fontSize:"12px"}}>
<Link to="https://www.royalchallengers.com/live-match-cricketscore"style={{textDecoration:"none"}}><div className="GJ">IPL 2023</div></Link>
<Link to="https://www.royalchallengers.com/ipl-live-cricket-score/903/107/rajasthan-royals-vs-gujarat-titans" style={{textDecoration:"none"}}><div className="GJ" style={{marginLeft:"70px"}}>SCORE CARD</div></Link>
</div>

<div className="chennai">
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <div><img src="/Images/CSK.png" style={{width:"80px",marginTop:"10px"}} ></img></div>
        <div className="GJ" style={{fontSize:"28px"}}><div className="GJ" style={{marginTop:"10px"}}>06</div><div>MAY</div></div>
        <div><img src="/Images/MI.png" style={{width:"80px",marginTop:"10px"}}></img></div>
    </div>
</div>
<div style={{display:'flex'}}>
  <div style={{backgroundColor:"red",height:"60px"}}>
  <Link to="/shop/merchandise" style={{textDecoration:"none"}}><div className="buy"  style={{color:"white",padding:"20px",paddingLeft:"13px"}}>BUY MERCHANDISE</div></Link>
  </div>
  <div   style={{backgroundColor:"red",height:"60px",marginLeft:"1px",width:"50%"}}>
  <Link  to="/shop" style={{textDecoration:"none"}}><div className="buy" style={{color:"white",padding:"20px"}}>BUY TICKETS</div></Link>
  </div>
  </div>
  <h4 style={{marginLeft:"60px",marginTop:"10px",color:"white"}}>STAY CONNECTED</h4>
  <h4  className="GJ"style={{marginLeft:"60px"}}>WITH RCB FAMILY</h4>
<div style={{display:"flex",marginLeft:"60px"}}>

  <div><Link to="https://play.google.com/store/apps/details?id=com.interactech.rcb&hl=en_IN"><img src="/Images/google-play (1).png" style={{width:"100px"}}></img></Link></div>
  <div><Link to="https://apps.apple.com/in/app/rcb-official-app/id516455943"><img src="/Images/app-store (1).png" style={{width:"100px",marginLeft:'5px'}}></img></Link></div>
</div>

</div>



            </div>
            <div style={{marginLeft:"40px",marginTop:"40px",display:"flex"}}>
            <div >
              <div style={{color:"white",backgroundColor:"red",width:"110px",position:"absolute"}}>12TH MAN TV</div>
              <div style={{position:"absolute",marginLeft:"200px",marginTop:"180px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              <div style={{position:"absolute",marginTop:"200px",fontSize:"25px",backgroundColor:"white",marginLeft:"20px"}}>DC VS RCB FAN PREVIEW ON 12TH </div>
              <div style={{position:"absolute",marginTop:"240px",fontSize:"25px",backgroundColor:"white",marginLeft:"20px"}}>MAN TV</div>
 <Link to="/kohli" >
  
  <video  style={{height:"340px",width:"500px"}} controls ><source  src="/Videos/King-Of-IPL-Today-Revenge-Cricket-Match-Short-Clip-Video-Status.mp4"></source></video></Link>
</div>
<div  style={{marginLeft:'20px'}}>
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
              <div style={{position:"absolute",marginLeft:"150px",marginTop:"80px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              <div style={{color:"white",backgroundColor:"yellow",width:"30px",marginTop:"180px",position:"absolute"}}>06</div>
 <div style={{color:"white",backgroundColor:"yellow",width:"30px",position:"absolute",marginTop:"200px"}}>May</div>
 <Link to="/rcbteam"  style={{textDecoration:"none"}}><video  style={{height:"180px",width:"350px"}} controls ><source  src="/Videos/Rcb ipl team.mp4"></source></video>
<div style={{marginLeft:"40px",color:"black"}}>RCB 2023 TEAM PREVIEW</div>
 </Link>
 <div style={{marginLeft:"40px"}}>A Chance to break into the top 4,who</div>
 <div style={{marginLeft:"40px"}}>keeps a close eye on the points table in</div>
 <div style={{marginLeft:"40px"}}>the team and the ground condition in the delhi</div>
 <div style={{marginLeft:"40px"}}>and more,on @HombaleFilms brings to</div>
 <div style={{marginLeft:"40px"}}>you Game day</div>
 
 
 
</div>
<div>
<div className="poll" >

  <h4 className="the"  style={{color:"red",textAlign:"center"}} >THE</h4>
  <h4 style={{textAlign:"center"}}>How many half Centuries</h4>
  <h4 style={{textAlign:"center"}}>has Faf duplessis scored so</h4>
  <h4 style={{textAlign:"center"}}>far in Ipl 2023?</h4>

<div style={{marginLeft:"30px"}}>4</div>
<div style={{display:"flex"}}>
  <div style={{backgroundColor:"white",borderRadius:"20%",width:"250px",height:"20px",marginLeft:"30px"}}>
    <div style={{background:"yellow",width:"40px",height:"20px"}}></div>
  </div>
  <div style={{marginLeft:"10px"}}>20%</div>
  </div>
  <div style={{marginLeft:"30px",fontSize:"12px"}}>401 VOTES</div>

  <div style={{marginLeft:"30px",marginTop:"15px"}}>7</div>
<div style={{display:"flex"}}>
  <div style={{backgroundColor:"white",borderRadius:"20%",width:"250px",height:"20px",marginLeft:"30px"}}>
    <div style={{background:"yellow",width:"60px",height:"20px"}}></div>
  </div>
  <div style={{marginLeft:"10px"}}>22%</div>
  </div>
  <div style={{marginLeft:"30px",fontSize:"12px"}}>443 VOTES</div>

  <div style={{marginLeft:"30px",marginTop:"15px"}}>5</div>
<div style={{display:"flex"}}>
  <div style={{backgroundColor:"white",borderRadius:"20%",width:"250px",height:"20px",marginLeft:"30px"}}>
    <div style={{background:"yellow",width:"140px",height:"20px"}}></div>
  </div>
  <div style={{marginLeft:"10px"}}>52%</div>
  </div>
  <div style={{marginLeft:"30px",fontSize:"12px"}}>1056 VOTES</div>

  <div style={{marginLeft:"30px",marginTop:"15px"}}>3</div>
<div style={{display:"flex"}}>
  <div style={{backgroundColor:"white",borderRadius:"20%",width:"250px",height:"20px",marginLeft:"30px"}}>
    <div style={{background:"yellow",width:"14px",height:"20px"}}></div>
  </div>
  <div style={{marginLeft:"10px"}}>6%</div>
  </div>
  <div style={{marginLeft:"30px",fontSize:"12px"}}>114 VOTES</div>
  <h6 style={{marginLeft:"30px",marginTop:"20px"}}>TOTAL VOTES:2014</h6>
  </div>

</div>

</div> 

<div><img src="/Images/970---90-banner (1).gif"style={{marginLeft:"160px",marginTop:"35px",width:"1000px"}}/></div>

<div style={{marginLeft:"40px",marginTop:"60px",display:"flex"}}>
            <div >
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
              <div style={{position:"absolute",marginLeft:"200px",marginTop:"180px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              <div style={{position:"absolute",marginTop:"200px",fontSize:"25px",backgroundColor:"white",marginLeft:"20px"}}>STORIES FROM VIRAT HOHLI'S</div>
              <div style={{position:"absolute",marginTop:"240px",fontSize:"25px",backgroundColor:"white",marginLeft:"20px"}}>CHILDHOOD IN DELHI | BOLD DIARIES </div>
              
 <Link to="/kohlidiaries" >
  
  <video  style={{height:"340px",width:"500px"}} controls ><source  src="/Videos/Kohli2.mp4"></source></video></Link>
</div>
<div  style={{marginLeft:'20px'}}>
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
              <div style={{position:"absolute",marginLeft:"150px",marginTop:"80px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              <div style={{color:"white",backgroundColor:"yellow",width:"30px",marginTop:"180px",position:"absolute"}}>06</div>
 <div style={{color:"white",backgroundColor:"yellow",width:"30px",position:"absolute",marginTop:"200px"}}>May</div>
 <Link to="/kohlidiaries1"  style={{textDecoration:"none"}}><video  style={{height:"180px",width:"350px"}} controls ><source  src="/Videos/kohli3.mp4"></source></video>
<div style={{marginLeft:"40px",color:"black"}}>RCB 2023 TEAM PREVIEW</div>
 </Link>
 <div style={{marginLeft:"40px"}}>A Chance to break into the top 4,who</div>
 <div style={{marginLeft:"40px"}}>keeps a close eye on the points table in</div>
 <div style={{marginLeft:"40px"}}>the team and the ground condition in the</div>
 <div style={{marginLeft:"40px"}}>and more,on @HombaleFilms brings to</div>
 <div style={{marginLeft:"40px"}}>you Game day</div>
 
 
 
</div>


<div  style={{marginLeft:'20px'}}>
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
              <div style={{position:"absolute",marginLeft:"150px",marginTop:"80px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              <div style={{color:"white",backgroundColor:"yellow",width:"30px",marginTop:"180px",position:"absolute"}}>06</div>
 <div style={{color:"white",backgroundColor:"yellow",width:"30px",position:"absolute",marginTop:"200px"}}>May</div>
 <Link to="/kohlidiaries2"  style={{textDecoration:"none"}}><video  style={{height:"180px",width:"350px"}} controls ><source  src="/Videos/kohli4.mp4"></source></video>
<div style={{marginLeft:"40px",color:"black"}}>RCB 2023 TEAM PREVIEW</div>
 </Link>
 <div style={{marginLeft:"40px"}}>Rcb players are watching </div>
 <div style={{marginLeft:"40px"}}>Delhi Vs Mumbai match</div>
 <div style={{marginLeft:"40px"}}>if Mumbai will win the game </div>
 <div style={{marginLeft:"40px"}}>RCB enter to the Playoffs</div>
 
 
 
 
</div>

</div>
                  

<div style={{marginLeft:"40px",marginTop:"60px",display:"flex"}}>
            <div >
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
              <div style={{position:"absolute",marginLeft:"60px",marginTop:"50px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              
              
 <Link to="/anushka3" >
  
  <video  style={{height:"150px",width:"130px"}} controls ><source  src="/Videos/teamindiakohli.mp4"></source></video></Link>
</div>
<div>
<Link to="/anushka3" className="annanya" ><div  style={{marginLeft:"30px",fontSize:"18px"}}>Top Takeaways</div>
<div   style={{marginLeft:"20px",fontSize:"18px"}}>From LSG VS RCB|</div>
<div style={{marginLeft:"30px",fontSize:"18px"}}>12th Man TV</div>
</Link>
<div style={{backgroundColor:"yellow",width:"40px",marginTop:"18px"}}>06</div>
<div style={{backgroundColor:"yellow",width:"40px",padding:"1px"}} >MAY</div>



</div>

<div  style={{marginLeft:"10px"}}>
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
              <div style={{position:"absolute",marginLeft:"60px",marginTop:"50px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              
              
 <Link to="/anushka4" >
  
  <video  style={{height:"150px",width:"130px"}} controls >
    <source  src="/Videos/teamindia2.mp4"></source>
    </video></Link>
</div>
<div>
<Link to="/anushka4" className="annanya" ><div  style={{marginLeft:"30px",fontSize:"18px"}}>LSG vs RCB,Game</div>
<div style={{marginLeft:"20px",fontSize:"18px"}}>Day:Dressing|</div>
<div style={{marginLeft:"30px",fontSize:"18px"}}>Room Reaction....</div></Link>
<div style={{backgroundColor:"yellow",width:"40px",marginTop:"18px"}}>06</div>
<div style={{backgroundColor:"yellow",width:"40px",padding:"1px"}} >MAY</div>


</div>

<div  style={{marginLeft:"10px"}}>
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
              <div style={{position:"absolute",marginLeft:"60px",marginTop:"50px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              
              
 <Link to="/anushka5" >
  
  <video  style={{height:"150px",width:"130px"}} controls ><source  src="/Videos/Faf.mp4"></source></video></Link>
</div>
<div>
<Link to="/anushka5" className="annanya">
  <div style={{marginLeft:"30px",fontSize:"18px"}}>Net Session</div>
<div style={{marginLeft:"20px",fontSize:"18px"}}>Entertainment</div>
<div style={{marginLeft:"30px",fontSize:"18px"}}>Ft.Virat,Faf An...</div></Link>
<div style={{backgroundColor:"yellow",width:"40px",marginTop:"18px"}}>06</div>
<div style={{backgroundColor:"yellow",width:"40px",padding:"1px"}} >MAY</div>


</div>

<div  style={{marginLeft:"10px"}}>
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
              <div style={{position:"absolute",marginLeft:"30px",marginTop:"50px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              
              
 <Link to="/anushka6" >
  
  <video  style={{height:"150px",width:"130px"}} controls ><source  src="/Videos/Rcb.mp4"></source></video></Link>
</div>
<div>
<Link to="/anushka6" className="annanya"><div style={{marginLeft:"30px",fontSize:"18px"}}>Fan Preview</div>
<div style={{marginLeft:"20px",fontSize:"18px"}}>Vs RCB|12th Man</div>
<div style={{marginLeft:"30px",fontSize:"18px"}}>TV</div></Link>
<div style={{backgroundColor:"yellow",width:"40px",marginTop:"18px"}}>06</div>
<div style={{backgroundColor:"yellow",width:"40px",padding:"1px"}} >MAY</div>


</div>



</div>
<div style={{marginLeft:"40px",marginTop:"60px",display:"flex"}}>
            <div >
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
              <div style={{position:"absolute",marginLeft:"60px",marginTop:"50px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              
              
 <Link to="/anushka3" >
  
  <video  style={{height:"150px",width:"130px"}} controls ><source  src="/Videos/teamindiakohli.mp4"></source></video></Link>
</div>
<div>
<Link to="/anushka3" className="annanya" ><div  style={{marginLeft:"30px",fontSize:"18px"}}>Top Takeaways</div>
<div   style={{marginLeft:"20px",fontSize:"18px"}}>From LSG VS RCB|</div>
<div style={{marginLeft:"30px",fontSize:"18px"}}>12th Man TV</div>
</Link>
<div style={{backgroundColor:"yellow",width:"40px",marginTop:"18px"}}>06</div>
<div style={{backgroundColor:"yellow",width:"40px",padding:"1px"}} >MAY</div>



</div>

<div >
              <div style={{color:"white",backgroundColor:"red",width:"60px",position:"absolute"}}>RCB TV</div>
              <div style={{position:"absolute",marginLeft:"60px",marginTop:"50px"}}><i style={{color:"white",backgroundColor:"red",width:"30px",height:"30px",padding:'5px',fontSize:"20px"}}class="fa-brands fa-youtube"></i></div>
              
              
 <Link to="/anushka3" >
  
  <video  style={{height:"150px",width:"130px"}} controls ><source  src="/Videos/Faf.mp4"></source></video></Link>
</div>
<div>
<Link to="/anushka3" className="annanya" ><div  style={{marginLeft:"30px",fontSize:"18px"}}>LSG Vs RCB</div>
<div   style={{marginLeft:"30px",fontSize:"18px"}}>Parody</div>
<div style={{marginLeft:"30px",fontSize:"18px"}}>press conference |R....</div>
</Link>
<div style={{backgroundColor:"yellow",width:"40px",marginTop:"18px"}}>06</div>
<div style={{backgroundColor:"yellow",width:"40px",padding:"1px"}} >MAY</div>



</div>
</div>
<div >
  <div style={{display:"flex"}}>
    <div style={{marginTop:"50px"}}><Link to="/rcbtv" style={{textDecoration:'none',color:"red",backgroundColor:"whitesmoke",marginLeft:"400px",border:"1px solid wheat",fontSize:"20px"}}>TUNE IN TO RCB TV</Link></div>
   
<div style={{marginTop:"50px"}}><Link to="/news"  style={{textDecoration:'none',color:'red',backgroundColor:"whitesmoke",marginLeft:"50px",border:"1px solid wheat",fontSize:"20px"}}>VIEW ALL ARTICLES</Link></div>

  </div>
  
  </div>
<div style={{width:"100%",height:"800px",backgroundSize:"cover",backgroundImage:"url('/Images/prasad.jpg')",marginTop:"40px"}}>

<div style={{display:"flex"}}>
    <div style={{marginLeft:"550px"}}><Link to="" style={{textDecoration:"none",fontSize:"25px",color:"red"}}>MEN</Link></div>
    <div><Link to="girls" style={{textDecoration:"none",color:"red",fontSize:"25px",marginLeft:"30px"}}>WOMEN</Link></div>

</div>
<h3 id="squad" style={{color:"red",marginLeft:'550px',backgroundColor:"white",width:"220px",marginTop:"20px"}}>THE</h3>

<Outlet/>
</div>
<div className="car">
  <div>
  
    <img src="/Images/virat kohli RCB (1).png" className="virat"/>
    
    
    
    
  </div>
  
  <div className="Harshal">
  <h2 className="tag">THE</h2>
  <div className="grid">

  <div className="menu">
   <Link to="shop/merchandise" style={{textDecoration:"none"}}>
    <div className="line siraj" style={{padding:"20px",marginLeft:'30px'}}>RCB REPLICA JEANS</div>
    <div className="line siraj">RCB GRAPHIC MENS</div>
    <div className="line siraj">POLO</div>
    <div className="line siraj">RCB GRAPHIC MENS</div>
    <div className="line siraj">POLO</div>
    <div className="line siraj">RCB AOP MENS POLO</div>
    <div className="line siraj">RCB AOP MENS POLO</div>
    <div className="line siraj">RCB GRAPHIC MENS</div>
    <div className="line siraj" >T-SHIRT</div></Link>
    
   <Link to="shop/merchandise" style={{textDecoration:"none"}}><div style={{marginTop:"50px",marginLeft:'10px'}}className="siraj c">VIEW THE ENTIRE COLLECTIONS</div></Link> 
    
  </div>
  
  <div className="ra"> <div  className="gridone">
<Link to="shop/merchandise" style={{color:"black",textDecoration:"none"}}><img src="/Images/rcb jersey.jpg " style={{width:'120px',marginLeft:'40px',marginTop:'5px'}}></img>
<div style={{marginLeft:"28px"}}>RCB REPLICA JERSY</div>


<div id="rate" style={{marginLeft:"50px",width:"100px"}}><i style={{color:"orange",padding:"14px"}} class="fa-solid fa-indian-rupee-sign"></i>1999</div>
</Link>
      

 </div>
 </div>

 <div className="ra"> <div  className="gridone">
 <Link to="shop/merchandise" style={{color:"black",textDecoration:"none"}}><img src="/Images/JERSEY2.jpg" style={{width:'120px',marginLeft:'40px',marginTop:'5px'}}></img>
<div style={{marginLeft:"28px"}}>RCB REPLICA JERSY</div></Link>


<div id="rate" style={{marginLeft:"50px",width:"100px"}}><i style={{color:"orange",padding:"14px"}} class="fa-solid fa-indian-rupee-sign"></i>1999</div>

      

 </div>
 </div>

 <div className="ra"> <div  className="gridone">
 <Link to="shop/merchandise" style={{color:"black",textDecoration:"none"}}><img src="/Images/JERSEY3.jpg" style={{width:'120px',marginLeft:'40px',marginTop:'5px'}}></img>
<div style={{marginLeft:"28px"}}>RCB REPLICA JERSY</div></Link>


<div id="rate" style={{marginLeft:"50px",width:"100px"}}><i style={{color:"orange",padding:"14px"}} class="fa-solid fa-indian-rupee-sign"></i>1999</div>

      

 </div>
 </div>
 <div > <div  className="gridtwo">
 <Link to="shop/merchandise" style={{color:"black",textDecoration:"none"}}><img src="/Images/JERSEY4.jpg" style={{width:'120px',marginLeft:'40px',marginTop:'5px'}}></img>
<div style={{marginLeft:"28px"}}>RCB REPLICA JERSY</div>


<div id="rate" style={{marginLeft:"50px",width:"100px"}}><i style={{color:"orange",padding:"14px"}} class="fa-solid fa-indian-rupee-sign"></i>1999</div>
</Link>
      

 </div>
 </div>
 <div > <div  className="gridtwo">
 <Link to="shop/merchandise" style={{color:"black",textDecoration:"none"}}><img src="/Images/JERSEY5.jpg" style={{width:'120px',marginLeft:'40px',marginTop:'5px'}}></img>
<div style={{marginLeft:"28px"}}>RCB REPLICA JERSY</div>


<div id="rate" style={{marginLeft:"50px",width:"100px"}}><i style={{color:"orange",padding:"14px"}} class="fa-solid fa-indian-rupee-sign"></i>1999</div>
</Link>
      

 </div>
 </div>

 <div > <div  className="gridtwo">
 <Link to="shop/merchandise" style={{color:"black",textDecoration:"none"}}><img src="/Images/JERSEY6.jpg" style={{width:'120px',marginLeft:'40px',marginTop:'5px'}}></img>
<div style={{marginLeft:"28px"}}>RCB REPLICA JERSY</div>


<div id="rate" style={{marginLeft:"50px",width:"100px"}}><i style={{color:"orange",padding:"14px"}} class="fa-solid fa-indian-rupee-sign"></i>1999</div>
</Link>
      

 </div>
 </div>
 
 
  </div>

  </div>
  
  <div id="rose"></div>
</div>
<div style={{display:'flex'}}>

<div style={{marginTop:'40px',marginLeft:'70px'}}><img src="/Images/stay-connected.png" style={{width:'350px'}}></img></div>
<div style={{marginTop:"100px"}}>
  <h2>GET ACCESS TO EXCLUSIVE</h2>
  <h1 style={{color:'red'}}>RCB CONTENT</h1>
  <div style={{display:"flex"}}>
    <div className="airways" style={{marginLeft:"6px"}}>01</div>
    <div>
    <div className="happilo">LIVE </div>
    <div className="pant"><h6>VIDEOS</h6></div>
    </div>
    <div className="airways">02</div>
    <div>
    <div className="happilo">CHAT WITH </div>
    <div className="pant"><h6>PLAYERS</h6></div>
    </div>
    <div className="airways">03</div>
    <div>
    <div className="happilo">LIVE </div>
    <div className="pant"><h6>SCORES</h6></div>
    </div>
    <div className="airways">04</div>
    <div>
    <div className="happilo">CONNECTED WITH </div>
    <div className="pant"><h6>FANS</h6></div>
    </div>
  </div>

  <div style={{display:"flex",marginTop:"50px",marginLeft:"20px"}}>
    <div><Link to="https://play.google.com/store/apps/details?id=com.interactech.rcb&hl=en_IN"><img src="/Images/google-play (2).png"></img></Link></div>
    <div><Link to="https://apps.apple.com/in/app/rcb-official-app/id516455943"><img src="/Images/app-store (1).png"></img></Link></div>
  </div>
</div>


</div>
<div className="companys">
  <h1  style={{textAlign:'center'}} className="names">MEN'S TEAM PARTNERS</h1>
  <div  style={{textAlign:'center'}} className="names">MAIN PRINCIPAL PARTNER</div>
  <div style={{textAlign:'center',marginTop:'20px'}}>
   <Link to="https://www.qatarairways.com/"> <img src="/Images/Qatar-Airways_30.jpg" style={{width:"250px"}}></img></Link>
  </div>
  <div style={{textAlign:'center',marginTop:'20px'}} className="names">PRINCIPLE PATNERS</div>
  <div style={{display:'flex'}}>

    <div style={{marginLeft:"500px",marginTop:'30px'}}><img src="/Images/KEI Wires & Cables.png" style={{width:'100px'}}></img></div>
    <div style={{marginTop:'40px',marginLeft:"20px"}}><img src="/Images/Happilo.png" style={{width:'100px'}}></img></div>
    <div style={{marginTop:'15px',marginLeft:"20px"}}><img src="/Images/jio.png" style={{width:'100px'}}></img></div>

    <div></div>
  </div>
  <div style={{textAlign:'center',marginTop:"40px"}} className="names">ASSOCIATE PARTNER</div>

  <div style={{display:'flex',marginTop:'40px'}}>

    <div><img src="/Images/PUMA.png" style={{width:'80px',marginLeft:"350px"}}></img></div>
    <div><img src="/Images/Hindware.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/boat.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/Equitas.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/Mahindra.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/Nippon.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
  </div>
  <div style={{textAlign:'center',marginTop:"30px"}} className="names">OFFICIAL PARTNER</div>
<div style={{display:'flex',marginTop:"40px"}}>
<div><img src="/Images/Eat Sure.png" style={{width:'80px',marginLeft:"60px"}}></img></div>
    <div><img src="/Images/Rario.png" style={{width:'80px',marginLeft:'30px',marginTop:'15px'}}></img></div>
    <div><img src="/Images/MUNCH.jpg" style={{width:'80px',marginLeft:'30px',marginTop:'10px'}}></img></div>
    <div><img src="/Images/Ampere.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/Restolex.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/Dream11.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/Bira.png" style={{width:'80px',marginLeft:'30px',marginTop:'0px'}}></img></div>
    <div><img src="/Images/RC Water.png" style={{width:'80px',marginLeft:'30px',marginTop:'10px'}}></img></div>
    <div><img src="/Images/Ampere.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/Hombale.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/MANIPAL.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
</div>


<div style={{display:'flex',marginTop:"40px"}}>
<div><img src="/Images/itc.png" style={{width:'80px',marginLeft:"280px"}}></img></div>
    <div><img src="/Images/NVY.png" style={{width:'80px',marginLeft:'30px',marginTop:'15px'}}></img></div>
    <div><img src="/Images/fm.png" style={{width:'80px',marginLeft:'30px',marginTop:'10px'}}></img></div>
    <div><img src="/Images/bella.png" style={{width:'80px',marginLeft:'30px',marginTop:'30px'}}></img></div>
    <div><img src="/Images/jio cinema.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/birla.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
    <div><img src="/Images/Alstone.png" style={{width:'80px',marginLeft:'30px'}}></img></div>
</div>

<div style={{textAlign:'center',marginTop:"30px"}} className="names">OFFICIAL COMMERCIAL PARTNER</div>
<div style={{textAlign:'center',marginTop:"30px"}} className="names"><img src="/Images/DNA.png" style={{width:"100px"}}></img></div>
<h1  style={{textAlign:'center',marginTop:"30px"}} className="names">WOMEN'S TEAM PARTNERS</h1>
<div style={{textAlign:'center',marginTop:"30px"}} className="names">TITLE SPONSOR</div>
<div style={{textAlign:'center',marginTop:"30px"}} className="names"><img src="/Images/KAJARIA.png" style={{width:"150px"}}></img></div>
<div style={{textAlign:'center',marginTop:"30px"}} className="names">PRINCIPAL PATNERS</div>
<div style={{display:'flex',marginLeft:'530px',marginTop:"30px"}}>
  <div><img src="/Images/MIA.png" style={{width:"100px"}}></img></div>
  <div><img src="/Images/Dream11.png" style={{width:"100px",marginLeft:"20px"}}></img></div>
  
</div>
<div style={{textAlign:"center",marginTop:"30px"}} className="names">ASSOCIATE PARTNER</div>
<div style={{display:'flex',marginTop:"40px"}}>
  <div style={{marginLeft:"500px"}}><img src="/Images/PUMA.png" style={{width:"80px",marginLeft:'20px'}}></img></div>
  <div><img src="/Images/himalaya.jpg" style={{width:"80px",marginLeft:'20px'}}></img></div>
  <div><img src="/Images/VEGA.png" style={{width:"80px",marginLeft:'20px'}}></img></div>
</div>
<div style={{textAlign:"center",marginTop:"30px"}} className="names">OFFICIAL PARTNER</div>
<div><img src="/Images/ZUNO.png" style={{width:"80px",marginLeft:'600px',marginTop:"30px"}}></img></div>
</div>
<Footer/>
        </div>
    )
}


export default Home