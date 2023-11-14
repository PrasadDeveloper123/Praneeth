
import React from 'react';
import Header from './Components/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Photos from "./Components/Photos";
import News from './Components/News';
import Team from './Components/Team';
import Pra from './Components/Pra';
import Men from './Components/Men';
import Women from './Components/Women';
import Shop from './Components/Shop';
import Ticketing from './Components/Ticketing';
import Merchandise from './Components/Merchandise';
import Products from './Components/Products';
import Tickets from './Components/Tickets';
import Home from './Components/Home';
import Homevideo1 from './Components/Homevideo1';
import Homevideo2 from './Components/Homevideo2';
import Kohlidiaries from './Components/Kohlidiaries';
import Anushka from './Components/Anushka';
import Anushka1 from './Components/Anushka1';
import Anushka3 from './Components/Anushka3';
import Anushka4 from './Components/Anushka4';
import Anushka2 from './Components/Anushka2';
import Anushka5 from './Components/anushka5';
import RCBTV from './Components/RCBTV';
import Rcbtv2 from './Components/Rcbtv2';
import Rcbkkr from './Components/Rcbkkr';
import Rcbkkr1 from './Components/Rcbkkr1';

import Rcbpractice from './Components/Rcbpractice';
import Rcbattitude from './Components/Rcbattitude';
import India1 from './Components/India1';
import India2 from './Components/India2';
import India3 from './Components/India3';
import India4 from './Components/India4';
import Green from './Components/Green';
import Rcbbar from './Components/Rcbbar';
import Fixtures from './Components/Fixtures';
import Boys from './Components/Boys';
import Girls from './Components/Girls';



function App() {
  return (
    <div>
     
      
      <BrowserRouter>
      <Header/>
      
      
      <Routes>
        
        <Route path="/images" element={<Photos/>} ></Route>
        <Route path="/news" element={<News/>} ><Route path='loadmore' element={<Pra/>}></Route></Route>
        <Route path="/team" element={<Team/>} >
        <Route path="" element={<Men/>}></Route>
        <Route path='women' element={<Women/>}></Route></Route>
        <Route path="/shop" element={<Shop/>} >
        <Route path="" element={<Ticketing/>}></Route>
        <Route path="merchandise" element={<Merchandise/>}></Route>
        <Route path="products" element={<Products/>}></Route>
          </Route> 
          <Route path="/tickets" element={<Tickets/>} ></Route>
          <Route path="/" element={<Home/>} ><Route path="" element={<Boys/>} ></Route>
          <Route path="girls" element={<Girls/>} ></Route></Route>
          <Route path="/kohli" element={<Homevideo1/>} ></Route>
          <Route path="/rcbteam" element={<Homevideo2/>} ></Route>
          <Route path="/kohlidiaries" element={<Kohlidiaries/>} ></Route>
          <Route path="/kohlidiaries1" element={<Anushka/>} ></Route>
          <Route path="/kohlidiaries2" element={<Anushka1/>} ></Route>
          <Route path="/anushka3" element={<Anushka3/>} ></Route>
          <Route path="/anushka4" element={<Anushka4/>} ></Route>
          <Route path="/anushka5" element={<Anushka2/>} ></Route>
          <Route path="/anushka6" element={<Anushka5/>} ></Route>
          <Route path="/rcbtv" element={<RCBTV/>} >

          <Route path="viewmore" element={<Rcbtv2/>} ></Route>
          </Route>

          <Route path="/rcbkkr" element={<Rcbkkr/>} ></Route>
          <Route path="/rcbkkr1" element={<Rcbkkr1/>} ></Route>
          <Route path="/rcbpractice" element={<Rcbpractice/>} ></Route>
          <Route path="/rcbattitude" element={<Rcbattitude/>} ></Route>

          <Route path="/india1" element={<India1/>} ></Route>
          <Route path="/india2" element={<India2/>} ></Route>
          <Route path="/india3" element={<India3/>} ></Route>
          <Route path="/india4" element={<India4/>} ></Route>
          <Route path="/green" element={<Green/>} ></Route>
          <Route path="/rcbbar" element={<Rcbbar/>} ></Route>
          <Route path="/fixtures" element={<Fixtures/>} ></Route>
      </Routes>
      
      </BrowserRouter>

      
      

      
    </div>
  );
}

export default App;
