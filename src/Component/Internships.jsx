import React from 'react'
import { Jumbotron ,Carousel} from 'react-bootstrap'
import Flexbox from './Flexbox'
import Search from './Search'
import programming from "./city/programming.svg"
import digital_marketing from "./city/digital_marketing.svg"
import web_development from "./city/web_development.svg"
import machine_learning from "./city/machine_learning.svg"
import advanced_excel from "./city/advanced_excel.svg"
import ethical_hacking from "./city/ethical_hacking.svg"
import autocad from "./city/autocad.svg"
import creative_writing from "./city/creative_writing.svg"
import ctc from "./city/ctc.svg"
import dream from "./city/dream.svg"
import verified from "./city/verified.svg"
import Footer from "./Footer"

function Internships() {
    return (
        <>
      
        <Search />
     
        <Carousel>
  <Carousel.Item>
    <img
      className="w-100 m-30"
      src="img/img1.jpeg"
      alt="First slide"
    />
    <Carousel.Caption>
     
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 m-30"
      src="img/img4.png"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/img1.jpeg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>






  
<h1>Internships</h1>


<p>Apply to 10,000+ internships for free
View all internships

</p>

<h2>
Popular cities
</h2>

<Flexbox />

<h1>Internshala Trainings</h1>

<h3>Learn new-age skills on the go</h3>
<div class="container1">
  <div class="scrollable_card">
            <a class="programming" href="">
            <div class="img">
                <img src={programming} alt="programming" />
            </div>
            <div class="text">programming</div>
            </a> 


            <a class="digital_marketing" href="">
            <div class="img">
                <img src={digital_marketing} alt="digital_marketing" />
            </div>
            <div class="text">digital_marketing</div>
            </a> 

            <a class="web_development" href="">
            <div class="img">
                <img src={web_development} alt="web_development" />
            </div>
            <div class="text">web_development</div>
            </a> 

            <a class="machine_learning" href="">
            <div class="img">
                <img src={machine_learning} alt="machine_learning" />
            </div>
            <div class="text">machine_learning</div>
            </a> 

            <a class="advanced_excel" href="">
            <div class="img">
                <img src={advanced_excel} alt="advanced_excel" />
            </div>
            <div class="text">advanced_excel</div>
            </a> 

            <a class="ethical_hacking" href="">
            <div class="img">
                <img src={ethical_hacking} alt="ethical_hacking" />
            </div>
            <div class="text">ethical_hacking</div>
            </a> 

            <a class="autocad" href="">
            <div class="img">
                <img src={autocad} alt="autocad" />
            </div>
            <div class="text">autocad</div>
            </a> 

            <a class="creative_writing" href="">
            <div class="img">
                <img src={creative_writing} alt="creative_writing" />
            </div>
            <div class="text">creative_writing</div>
            </a> 

  </div>

<h1>Fresher Jobs </h1>
<h3>Premium fresher jobs on your fingertips

</h3>
<div class="abc">
            <a class="ctc" href="">
            <div class="img">
                <img src={ctc} alt="ctc" />
            </div>
            <div class="text">ctc</div>
            </a> 

            <a class="dream" href="">
            <div class="img">
                <img src={dream} alt="dream" />
            </div>
            <div class="text">dream</div>
            </a> 

            <a class="verified" href="">
            <div class="img">
                <img src={verified} alt="verified" />
            </div>
            <div class="text">verified</div>
            </a> 

            </div>
</div>
          <Footer />

             
          
        </>


           
      
        
    )
}

export default Internships
