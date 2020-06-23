import React, {useState} from 'react';
import "./Donate.scss"
import change from "../../images/change.png"
// import fortune from "../../images/fortunesociety.png"
import fortune from "../../images/fortune.jpeg"
import nysylc from "../../images/nysylc3.jpeg"
import okra from "../../images/okra2.png"

const Donate = () => {
const cause1 = {
        backgroundImage: 'url(' + change + ')',
        borderRadius: '10% 0 0 0 ',
        // marginTop: '37.5px'
}

const cause2 = {
    backgroundImage: 'url(' + nysylc + ')',
    borderRadius: '0 10% 0 0 ',
    // marginTop: '37.5px'
}

const cause3 = {
    backgroundImage: 'url(' + fortune + ')',
    borderRadius: '0 0 0 10% '
}

const cause4 = {
    backgroundImage: 'url(' + okra + ')',
    borderRadius: '0 0 10% 0 ',
    // paddingRight: '30px',
    // paddingBottom: '199px',
    color: 'black'
}
    return (
    <div className="donateContainer">
        <div className="donationImageSection">
            <ul className="imageNav">
                <li className="tabNav"><a href="https://secure.actblue.com/contribute/page/support-us"><section className="title2">Color of Change</section><span className="imgHolder" style={cause1}></span></a></li>
                <li className="tabNav"><a href="https://www.nysylc.org/donate"><section className="title2"> NYSYLC </section><span className="imgHolder" style={cause2}></span></a></li>
                <li className="tabNav"><a href="https://fortunesociety.org/ways-to-give/"><span className="imgHolder" style={cause3}></span><section className="title2">The Fortune Society</section></a></li>
                <li className="tabNav"><a href="https://www.theokraproject.com/"><span className="imgHolder" style={cause4}></span><section className="title2">The Okra Project</section></a></li>
            </ul>
        </div>
        <div className="donationInfoSection">
            <h1>Donate to a cause</h1>
        
            <div className="info">Please donate to one of four causes
                 that are near and dear to my heart. 
                These donations go to a local based organization that is in complete support of the movements, ranging from ....
                Org 1 supports the Black Lives Matter movement, Org 2 supports the Latinx in that, Org 3 supports Mental Health Endeavour, 
                and Org 4 supports formely incarcerated men who are in need of mental health services to get their feet off the ground. 
            </div>
        </div>
    </div>
    )
}

export default Donate;