import React from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'
import { Link } from 'react-router-dom';


const Details = ({data}) => {
   const {id}=useParams()
   const product1=data[id-1];
   const {title,description,price,category,image}=product1
    return (
        <div className='detail1'>
            <img src={image}/>
            <div >
                <p>{description}</p>
                <h1>{price} $</h1>
                
            </div>
           <Link style={{fontSize:"1.5rem"}} to={'/products'}>Back..</Link>
        </div>
    );
};

export default Details;