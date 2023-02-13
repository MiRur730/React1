import React from "react";
import vg from "../assets/top.jpg";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai";
const Home=()=>{
    return(
        <>
          <div className="home" id="home">
          <img alt="" src={require('../assets/bluelanding.jpg')} />
            <main>
            <h1>Welcome  to Startify</h1> 
           <p>We make your Searching Easier</p>
            </main>
           
        </div>

        <div className="home2" >
            <img src={vg} alt="" />
            <div>
                <p>
                    We are your one and only solution to the internship problems
                    We will lead you to all campus startups and provide you easy on campus working opportunities.
                </p>
            </div>
        </div>


        <div className="home3" id="about">
            <div>
                <h1>Who we are?</h1>
                <p>A startup of Students who wants to help students specially from first and second year to find the best internship opportunities online by providing direct connection with On-Campus Startups.
                    This will save so much time from searching on various websites or visiting campus offline.
                    
                
                </p>
            </div>
        </div>



        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>

                <article>
                    <div style={
                        {
                            animationDelay:"0.3s"
                        }
                    }>
                       < AiFillGoogleCircle />
                       <p>Google</p>
                    </div>


                    <div style={
                        {
                            animationDelay:"0.5s"
                        }
                    }>
                       < AiFillAmazonCircle />
                       <p>Amazon</p>
                    </div>


                    <div style={
                        {
                            animationDelay:"0.7s"
                        }
                    }>
                       < AiFillYoutube />
                       <p>Youtube</p>
                    </div>


                    
                    <div style={
                        {
                            animationDelay:"1s"
                        }
                    }>
                       < AiFillInstagram />
                       <p>Youtube</p>
                    </div>


                </article>
            </div>
        </div>
        </>
      
    )
}


export default Home;