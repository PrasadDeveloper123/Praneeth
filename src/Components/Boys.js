import React from "react";
import "../Boys.css"



function Boys(){

    return(
        <div style={{marginTop:'10px'}}>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
<img src="/Images/faf du plessis RCB (1).png" className="d" />
<h1 className="f">DUPLESSIS</h1>
<h1 className="f">CAPTAIN</h1>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/Images/glenn maxwell RCB_0.png" className="d" />
      <h1 className="f">MAXWELL</h1>
<h1 className="f">BATSMAN</h1>
    </div>
    <div class="carousel-item">
<img src="/Images/Karn Sharma RCB.png"  className="d" />
<h1 className="f">KARN SHARMA</h1>
<h1 className="f">BOWLER</h1>
    </div>
    <div class="carousel-item">
<img src="/Images/Wanindu Hasaranga_Website_0.png"  className="d" />
<h1 className="f"> HASARANGA</h1>
<h1 className="f">ALLROUNDER</h1>
    </div>
    <div class="carousel-item">
<img src="/Images/virat kohli RCB.png"  className="d" />
<h1 className="f">KING KOHLI</h1>
<h1 className="f">BATSMAN</h1>
    </div>
    <div class="carousel-item">
<img src="/Images/vijaykumar RCB.png"  className="d" />
<h1 className="f">VIJAY KUMAR</h1>
<h1 className="f">BOWLER</h1>
    </div>

    <div class="carousel-item">
<img src="/Images/dinesh karthik RCB.png"  className="d" />
<h1 className="f">DINESH</h1>
<h1 className="f">WICKET KEEPER</h1>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

  


        </div>
    )
}

export default Boys