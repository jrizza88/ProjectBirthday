

import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './styles.scss';
import "./Carousel.scss";
import firstBday from "../images/1stpresents.png";
import firstBdayCake from "../images/1stbday.png";
import secondBday from "../images/2ndbday.png";
import secondbdayParty from "../images/2ndBdaytwo.png";
import ateCake from "../images/atecake.png";
import fifthBday from "../images/5thbday.png";
import tenthbday from "../images/10thbday.png";
import thirtyFirst from "../images/31stbday.png";
import quarantineBday from "../images/32ndbday.png"


const Carousel = () => {

    return (
    <div className="carouselContainer">
      
          <AwesomeSlider cssModule={AwsSliderStyles}>
          <div className="carouselDisplay">
            <img className="photo" src={firstBday} alt="first"/>
            <div className="meImage">My first birthday when I quickly learned the gift of presents</div>
          </div>
          <div className="carouselDisplay">
            <img className="photo" src={firstBdayCake} alt="first cake"/>
            <div className="meImage">First cake, joined by my older cousin</div>
          </div>
          <div className="carouselDisplay">
            <img className="photo" src={secondBday} alt="second"/>
            <div className="meImage">Being two was cute, so was this outfit</div>
          </div>
          <div className="carouselDisplay" >
              <img className="photo" src={secondbdayParty} alt="alt second"/>
            <p className="meImage">We were ready to turn upppp</p>
          </div>
          <div className="carouselDisplay" >
              <img className="photo" src={ateCake} alt="ate the cake"/>
            <p className="meImage">Snuck in and ate cake before the party started. Little has changed since.</p>
          </div>
          <div className="carouselDisplay" >
          <img className="photo" src={fifthBday} alt="fifth"/>
            <p className="meImage">5th birthday - this is album cover material</p>
          </div>
          <div className="carouselDisplay" >
              <img className="photo" src={tenthbday} alt="tenth"/>
            <p className="meImage">When you realized you're about to be a whole entire decade</p>
          </div>
          <div className="carouselDisplay" >
              <img className="photo" src={thirtyFirst} alt="last year"/>
            <p className="meImage">Last year's bday</p>
          </div>
          <div className="carouselDisplay" >
              <img className="photo" src={quarantineBday} alt="quarantine"/>
            <p className="meImage">Birthday 2020!</p>
          </div>
        </AwesomeSlider>
        

        

    </div>
    )
}

export default Carousel
;