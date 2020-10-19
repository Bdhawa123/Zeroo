import React from 'react';
import '../Styles/ProductSelc.css';

let ProductList=[
            {item:1,image:require('../Images/ProductList/cleansing_cloth.jpeg')},
            {item:2,image:require('../Images/ProductList/daycream_71.jpeg')},
            {item:3,image:require('../Images/ProductList/luminous_whip.jpeg')},
            {item:4,image:require('../Images/ProductList/miracle_boost.jpeg')},
            {item:5,image:require('../Images/ProductList/moisturising_lotion.jpeg')},
            {item:6,image:require('../Images/ProductList/night_cream.jpeg')},
            {item:7,image:require('../Images/ProductList/pivotale.jpeg')},
            {item:8,image:require('../Images/ProductList/retinol.jpeg')},
            {item:9,image:require('../Images/ProductList/revitalising_cream.jpeg')},
            {item:9,image:require('../Images/ProductList/foaming_cleanser.jpeg')},
            
        ];



const ProductSelectionComp=()=>{   

    const clickProduct =(event)=>{
        
        if(event.target.style.opacity==0.5) {
            event.target.style.opacity =1;
            event.target.style.boxShadow = 'none';
            
        }else{
            event.target.style.opacity=0.5;
            event.target.style.boxShadow = '0 0 3pt 2pt white';
        }
    }

    return(
        <div className='bodyback'>
            <div className='ProductSelc'>
                {ProductList.map(((item,index)=>{
                    return(
                        <div className='ImageList'>
                            <img src={item.image} alt={item.item} onClick={(event)=>{clickProduct(event)}}/>
                            <button className='btn btn-light'> Info </button>    
                        </div>
                    ); 
                }))}
                <br></br>
            </div>
            <button className='nxtBtn'>Next</button>
        </div>
    )

}
export default ProductSelectionComp;