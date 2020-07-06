

import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './styles.scss';
import "./Carousel.scss";
import secondBday from "../images/2ndbday.png";
import secondbdayParty from "../images/2ndBdaytwo.png";
import fifthBday from "../images/5thbday.png";



const Carousel = () => {

    return (
    <div className="carouselContainer">
      
          <AwesomeSlider cssModule={AwsSliderStyles}>
          <div className="carouselDisplay">
            <img className="photo" src={secondBday} alt="second"/>
            <div className="meImage">Birthday 1991</div>
          </div>
          <div className="carouselDisplay" >
          <img className="photo" src={fifthBday} alt="fifth"/>
            <p className="meImage">Birthday 1993</p>
          </div>
          <div className="carouselDisplay" >
              <img className="photo" src={secondbdayParty} alt="alt second"/>
            <p className="meImage">More from the turn up second birthday</p>
          </div>
        </AwesomeSlider>
        

        

    </div>
    )
}

export default Carousel
;