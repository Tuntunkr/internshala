import React from 'react'
// import './index.css';
import Work from "./city/work_from_home.svg";
import Delhi from "./city/delhi_ncr.svg";
import Bangalore from "./city/bangalore.svg";
import Mumbai from "./city/mumbai.svg";
import Hyderabad from "./city/hyderabad.svg";
import Chennai from "./city/chennai.svg";
import Kolkata from "./city/kolkata.svg";
import International from "./city/international.svg";
import Parttime from "./city/part_time.svg";
import Engineering from "./city/engineering.svg";
import Ngo from "./city/ngo.svg";
import Mba from "./city/mba.svg";
import Design from "./city/design.svg";
import Science from "./city/science.svg";
import Media from "./city/media.svg";
import Humanities from "./city/humanities.svg";




const flexbox = () => {
  return (
    <div class="container">
        
       
        <div class="scrollable_cards">
            <a class="wfm" href="">
            <div class="img">
                <img src={Work} alt="Work" />
            </div>
            <div class="text">Work from home</div>
            </a>
            <a class="delhi" href="">
            <div class="img">
                <img src={Delhi} alt="Delhi" />
            </div>
            <div class="text">Delhi/NCR</div>
            </a>
            <a class="bangalore" href="">
            <div class="img">
                <img src={Bangalore} alt="Bangalore" />
            </div>
            <div class="text">Bangalore</div>
            </a>
            <a class="mumbai" href="">
            <div class="img">
                <img src={Mumbai} alt="Mumbai" />
            </div>
            <div class="text">Mumbai</div>
            </a>
            <a class="hyderabad" href="">
            <div class="img">
                <img src={Hyderabad} alt="Hyderabad" />
            </div>
            <div class="text">Hyderabad</div>
            </a>
            <a class="chennai" href="">
            <div class="img">
                <img src={Chennai} alt="Chennai" />
            </div>
            <div class="text">Chennai</div>
            </a>
            <a class="kolkata" href="">
            <div class="img">
                <img src={Kolkata} alt="Kolkata" />
            </div>
            <div class="text">Kolkata</div>
            </a>
            <a class="international" href="">
            <div class="img">
                <img src={International} alt="International" />
            </div>
            <div class="text">International</div>
            </a>
        </div>
        


        <h4>Popular categories</h4>
        <div class="scrollable_cards">
            <a class="parttime" href="">
            <div class="img">
                <img src={Parttime} alt="Parttime" />
            </div>
            <div class="text">Part-time</div>
            </a>
            <a class="engineering" href="">
            <div class="img">
                <img src={Engineering} alt="Engineering" />
            </div>
            <div class="text">Engineering</div>
            </a>
            <a class="ngo" href="">
            <div class="img">
                <img src={Ngo} alt="Ngo" />
            </div>
            <div class="text">NGO</div>
            </a>
            <a class="mba" href="">
            <div class="img">
                <img src={Mba} alt="Mba" />
            </div>
            <div class="text">MBA</div>
            </a>
            <a class="design" href="">
            <div class="img">
                <img src={Design} alt="Design" />
            </div>
            <div class="text">Design</div>
            </a>
            <a class="science" href="">
            <div class="img">
                <img src={Science} alt="Science" />
            </div>
            <div class="text">Science</div>
            </a>
            <a class="media" href="">
            <div class="img">
                <img src={Media} alt="Media" />
            </div>
            <div class="text"></div>
            </a>
            <a class="humanities" href="">
            <div class="img">
                <img src={Humanities} alt="Humanities" />
            </div>
            <div class="text">Humanities</div>
            </a>
        </div>
      
       </div>
    

  );
}

export default flexbox;
