import React from 'react';
import { Button } from 'reactstrap';
import '../Styles/HomeComponent.css';
import sc1 from '../Images/skincare/sc1.jpg';
import sc2 from '../Images/skincare/sc2.jpeg';
import sc3 from '../Images/skincare/sc3.jpeg';
import sc4 from '../Images/skincare/sc4.jpeg';
import sc5 from '../Images/skincare/sc5.jpg';

const HomeComponent = ()=>{

    return(
        <div class='bodyBackg'>
            <div className='body1container'>
                <div className='textContainer'>
                    Pick new skin care combination every month upto $200 value. Only 79.90$/month
                    <button className='shopNowBtn'>Shop Now</button>
                </div>
                <div className='ProductContainer'>
                    <div className='ImgContainer'>
                        <img src={sc2} className='displayImg1'/>
                        <img src={sc3} className='displayImg1'/>
                        <img src={sc4} className='displayImg1'/>
                        <img src={sc5} className='displayImg1'/>
                        <img src={sc1} className='displayImg1'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeComponent;