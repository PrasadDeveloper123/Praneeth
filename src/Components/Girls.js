import React from "react";


function Girls(){

    return(
        <div style={{marginTop:'10px'}}>
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
<img src="/Images/smriti mandhana (1).png" className="d" />

<h1 className="f">SMIRTI</h1>
<h1 className="f">CAPTAIN</h1>

    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="/Images/vanitha.png" className="d" />
      <h1 className="f">VANITHA</h1>
<h1 className="f">BATSMAN</h1>
    </div>
    <div class="carousel-item">
<img src="/Images/sophie devine.png"  className="d" />
<h1 className="f">SOPHIA</h1>
<h1 className="f">BOWLER</h1>
    </div>
    <div class="carousel-item">
<img src="/Images/sanjana.png"  className="d" />
<h1 className="f"> SANJANA</h1>
<h1 className="f">ALLROUNDER</h1>
    </div>
    <div class="carousel-item">
<img src="/Images/sania.png"  className="d" />
<h1 className="f">SANIA</h1>
<h1 className="f">BATSMAN</h1>
    </div>
    <div class="carousel-item">
<img src="/Images/renuka singh.png"  className="d" />
<h1 className="f">RENUKA</h1>
<h1 className="f">BOWLER</h1>
    </div>

    <div class="carousel-item">
<img src="/Images/richa ghosh.png"  className="d" />
<h1 className="f">RICHA</h1>
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

export default Girls