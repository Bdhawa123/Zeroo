import React from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import './../Styles/modal.css';

const ModalComponent = ({toggleModal,setToggleModal,price,selItem})=>{
    
    return(
        <div>
            <Modal isOpen={toggleModal} toggle={()=>{setToggleModal(!toggleModal)}}>
                <ModalHeader toggle={()=>{setToggleModal(!toggleModal)}}>
                    Cart Basket 
                </ModalHeader>
                {selItem.map((item)=>{
                   return(
                    <div className='productList'>
                        <div>{item.name}</div>
                        <div>{item.price}</div>
                    </div>
                );
                })}
                
                <div className='endModal'>Total Price:${price}</div>
                
            </Modal>
        </div>
    )
}

export default ModalComponent;