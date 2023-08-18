import React from 'react';

const Nike = (props) => {
  const {title, price, content, imgUrl} = props.nike
  console.log(props);
  return (
    <div className='col-md-4'>
      <img src={imgUrl} alt={title} />
      <h5>{title}</h5>
      <span>{content}</span>
      <p>{price}</p>
    </div>
  );
};

export default Nike;