

import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from './styles.scss';
import "./Carousel.scss";
import passwordImage from "../images/passwordManager3.jpg"
import secondBday from "../images/2ndbday.png"
import fifthBday from "../images/5thbday.png"
//import passwordImage from "../images/lavender-background.jpg"
import okra from "../images/okra2.png"



const Carousel = () => {

    // const content = [
    //     { image: passwordImage, title: '1Password', description: 'Lorem ipsum'},
    //     { image: okra,title: 'Second item', description: 'Lorem ipsum'}
    // ]
    return (
    <div className="carouselContainer">
      
          <AwesomeSlider cssModule={AwsSliderStyles}>
          <div className="carouselDisplay"  >
            <img className="photo" src={secondBday}/>
            <div className="meImage">I want to see what you got.</div>
          </div>
          <div className="carouselDisplay" >
          <img className="photo" src={fifthBday}/>
            <p className="meImage">I want to see what you got.</p>
          </div>
          <div className="carouselDisplay" sdata-src="/path/to/image.jpg">
              <img className="photo" src={secondBday}/>
            <p className="meImage">I want to see what you got.</p>
          </div>
        </AwesomeSlider>
        


{/* <Slider classNames={horizontalCss}>
 //data-src={okra}
    {content.map((item, index) => (
        <div
            key={index}
            style={{ background: `url('${item.image}') no-repeat center center`, width: '100%',  backgroundSize: "cover" }}
        >
            <div className="carouselDisplay">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <img className="meImage" src={okra} alt="party" />
            </div>
        </div>
))}
</Slider> */}
        

    </div>
    )
}

export default Carousel
;