import React,{useState} from 'react';
import '../Styles/ProductSelc.css';
import ModalComponent from './Modal';

let ProductList=[
            {item:1,image:require('../Images/ProductList/cleansing_cloth.jpeg'),price:15,name:'Cleansing Cloth'},
            {item:2,image:require('../Images/ProductList/daycream_71.jpeg'),price:45,name:'Daycream 71'},
            {item:3,image:require('../Images/ProductList/luminous_whip.jpeg'),price:33,name:'Luminuous Whip'},
            {item:4,image:require('../Images/ProductList/miracle_boost.jpeg'),price:18,name:'Miracle Boost'},
            {item:5,image:require('../Images/ProductList/moisturising_lotion.jpeg'),price:240,name:'Moisturising Lotion'},
            {item:6,image:require('../Images/ProductList/night_cream.jpeg'),price:28,name:'Night Cream'},
            {item:7,image:require('../Images/ProductList/pivotale.jpeg'),price:18,name:'Pivotale'},
            {item:8,image:require('../Images/ProductList/retinol.jpeg'),price:37,name:'Retinol'},
            {item:9,image:require('../Images/ProductList/revitalising_cream.jpeg'),price:42,name:'Revitalising Cream'},
            {item:9,image:require('../Images/ProductList/foaming_cleanser.jpeg'),price:30,name:'Foaming Cleanser'},
        ];



const ProductSelectionComp=({priceLimit})=>{  
    const [totVal,setTotVal] = useState(0);
    const [conclusion, setConclusion] = useState('');
    const [toggleModal, setToggleModal] = useState(false);
    const [selItem, setselItem] = useState([]);
    

    const clickProduct =(event,item)=>{
        console.log(selItem);
        let cartList = selItem;
        
        if(event.target.style.opacity==0.5 ) {                                           //unselect items
            event.target.style.opacity =1;
            event.target.style.boxShadow = 'none';
            setTotVal(totVal-item.price);      
            
            let count = 0;
            cartList.map((cartItem)=>{
                if (cartItem.item==item.item){
                    cartList.splice(count,1);
                }
                count++;
            });

            console.log(`ItemList after unselecting`);
            console.log(cartList)
            setselItem(cartList);
            
        }else{
            if(totVal<priceLimit){                                                                          // select items
                event.target.style.opacity=0.5;     
                event.target.style.boxShadow = '0 0 3pt 2pt white';
              
                setTotVal(totVal+item.price)
                cartList.push(item);        
                setselItem(cartList);
                console.log(`ItemList after selecting`)
                console.log(cartList)

                if((totVal+item.price)>priceLimit) {
                    setConclusion('Price exceeds the maximmum cap. Please reselect some items')
                }
            }else {
                setConclusion('Price exceeds the maximmum cap')
            }
        }
    }

    return(
        <div className='bodyback'>
            <div className='ProductSelc'>
                {ProductList.map(((item,index)=>{
                    return(
                        <div className='ImageList'>
                            <img src={item.image} alt={item.item} onClick={(event)=>{clickProduct(event,item)}}/>
                            <button className='btn btn-light infoBtn'> Info </button>    
                        </div>
                    ); 
                }))}
                <br></br>
            </div>
            <div className='endpg'>
                <div className='rightEnd'>
                    <span>Total Value:${totVal} </span> 
                    <br></br>
                    <span>{conclusion}</span>
                </div>
            <button className='nxtBtn' onClick={()=>{setToggleModal(true)}}>Next</button>
            </div>

            <ModalComponent toggleModal={toggleModal} setToggleModal={setToggleModal} price={totVal} selItem={selItem}/>
        </div>
    )
}
export default ProductSelectionComp;