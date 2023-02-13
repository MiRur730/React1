import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/top.jpg";
import img2 from "../assets/job.jpg";
import img3 from "../assets/work.jpg";

const Service=()=>{
    return  <div className="service" id="service">
<Carousel infiniteLoop  autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs={false} showIndicators={false}> 

<div>

    <img src={img1} alt="item1" />
    <p>Post Job Requirement</p>
</div>
<div>

    <img src={img2} alt="item2" />
    <p>Get Hired by Startups</p>
</div>
<div>

    <img src={img3} alt="item3" />
    <p>Share Your skills and connect</p>
</div>




</Carousel>

    </div>
}
export default Service;