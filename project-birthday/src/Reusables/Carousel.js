

import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './styles.scss';
import "./Carousel.scss";
import secondBday from "../images/2ndbday.png"
import fifthBday from "../images/5thbday.png"



const Carousel = () => {

    return (
    <div className="carouselContainer">
      
          <AwesomeSlider cssModule={AwsSliderStyles}>
          <div className="carouselDisplay">
            <img className="photo" src={secondBday} alt="second"/>
            <div className="meImage">I want to see what you got.</div>
          </div>
          <div className="carouselDisplay" >
          <img className="photo" src={fifthBday} alt="fifth"/>
            <p className="meImage">I want to see what you got.</p>
          </div>
          <div className="carouselDisplay" sdata-src="/path/to/image.jpg">
              <img className="photo" src={secondBday}/>
            <p className="meImage">I want to see what you got.</p>
          </div>
        </AwesomeSlider>
        

        

    </div>
    )
}

export default Carousel
;