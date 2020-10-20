import React, { createRef, useEffect, useRef } from 'react';
import { Button } from 'reactstrap';
import ProductSelection from '../Components/ProductSelectionComp';
import '../Styles/HomeComponent.css';
import sc1 from '../Images/skincare/sc1.jpg';
import sc2 from '../Images/skincare/sc2.jpeg';
import sc3 from '../Images/skincare/sc3.jpeg';
import sc4 from '../Images/skincare/sc4.jpeg';
import sc5 from '../Images/skincare/sc5.jpg';

const HomeComponent = ()=>{

    const scrollRef = useRef(null);

    const scrollToRef = () => {
        scrollRef.current.scrollIntoView({behavior: 'smooth'})
    }
    
    return(
        <div class='bodyBackg'>
            <div className='body1container'>
                
                <div className='textContainer'>
                    Pick new skin care combination <br></br>
                    every month upto $200 value. <br></br>
                    Only 79.90$/month
                    
                    <button className='shopNowBtn' onClick={scrollToRef}>Shop Now</button>
                </div>

                <div className='ProductContainer'>
                    <div className='ImgContainer'>
                        <img src={sc2} className='displayImg1' alt='skincare product'/>
                        <img src={sc3} className='displayImg1' alt='skincare product'/>
                        <img src={sc4} className='displayImg1' alt='skincare product'/>
                        <img src={sc5} className='displayImg1' alt='skincare product'/>
                        <img src={sc1} className='displayImg1' alt='skincare product'/>
                    </div>
                </div>

            </div>

            <div ref= {scrollRef} className='scrollSty' >
                <ProductSelection priceLimit='50'/>
            </div>
                
            
        </div>
    )
}

export default HomeComponent;