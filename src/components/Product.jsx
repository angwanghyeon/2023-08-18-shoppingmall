import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = (props) => {
  const navigate = useNavigate();
  const {id, title, imgUrl, price} = props.data;
  // console.log(id);
  return (
     <div className='col-md-4' >
       <div className='c1' onClick={()=>navigate('/detail/'+id)}>
         <img src={imgUrl} alt={title} />
         <h4>{title}</h4>
         <p>{price}</p>
       </div>
     </div>    
  );
};

export default Product;