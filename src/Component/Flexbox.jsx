import React from 'react'
// import './App.css';
// import Work from "./images/work_from_home.svg";
// import Delhi from "./images/delhi_ncr.svg";
// import Bangalore from "./images/bangalore.svg";
// import Mumbai from "./images/mumbai.svg";
// import Hyderabad from "./images/hyderabad.svg";
// import Chennai from "./images/chennai.svg";
// import Kolkata from "./images/kolkata.svg";
// import International from "./images/international.svg";
// import Parttime from "./images/part_time.svg";
// import Engineering from "./images/engineering.svg";
// import Ngo from "./images/ngo.svg";
// import Mba from "./images/mba.svg";
// import Design from "./images/design.svg";
// import Science from "./images/science.svg";
// import Media from "./images/media.svg";
// import Humanities from "./images/humanities.svg";


const flexbox = () => {
  return (
    <div class="container">
        <h4>Popular cities</h4>
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
            <div class="text">Media</div>
            </a>
            <a class="humanities" href="">
            <div class="img">
                <img src={Humanities} alt="Humanities" />
            </div>
            <div class="text">Humanities</div>
            </a>
        </div>
      <h1>hello</h1>
    </div>

  );
}

export default flexbox;
