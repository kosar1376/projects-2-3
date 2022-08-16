import React from 'react';
import './Product.css';
import Plus from '../Logos/Plus.svg'
import Trash from '../Logos/Trash.svg'
import {Link,Route} from 'react-router-dom'

;



const Product = ({img,price,id,data}) => {
    
  
    return (
        <div className='container'>
            <img src={img} className={'img-product'} loading='lazy'/>
                <Link to={`/products/${id}`} style={{paddingLeft:"4%",paddingTop:"2%"}}>Details</Link>
            <div className='price-container'>
                <h4 style={{color:"green"}}>{price} $</h4>
                <div className='button-container'>
                    <button className='bt1'>
                        <img src={Plus} alt='' className='bt1-img'/>
                    </button >
                    <button className='bt2' > 
                        <img src={Trash} className='bt2-img'/>
                    </button>


                  
                </div>
                
                
             
            </div>
            
            
            
        </div>
    );
};

export default Product;