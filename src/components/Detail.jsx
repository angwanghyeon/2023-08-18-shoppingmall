import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Detail = (props) => {
  let {id} = useParams();
  
  id = parseInt(id || '0');
  // const { title, imgUrl, price, content} = props.data[id];
  const { title, imgUrl, price, content} = props.data.find(d => id === d.id);
  // const { title, imgUrl, price, content} = props.data.filter(d => id === d.id)[0];
  const [tap, setTap] = useState(0)
  // console.log(id);
  // console.log(props.data[id].id);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={'../'+imgUrl} alt={title} />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{title}</h4>
          <p>{content}</p>
          <p>{price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>

    <Nav variant='tabs' defaultActiveKey = 'link0'>
      <Nav.Item>
        <Nav.Link onClick={()=>{setTap(0)}}
        eventKey='link0'>상세내역</Nav.Link>
      </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTap(1)}}
          eventKey='link1'>배송안내</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{setTap(2)}}
          eventKey='link2'>문의하기</Nav.Link>
        </Nav.Item>
    </Nav>

    <TabContent tap={tap} ></TabContent>  
    </div>
  );
};


// function TabContent({tap}){
//   return [<div>내용0</div>,<div>내용1</div>,<div>내용2</div>] [tap]
// }
function TabContent({tap}){
  switch(tap){
    case 0 :
    return  <div>내용0</div>
    case 1 :
    return  <div>내용1</div>
    case 2 :
    return  <div>내용2</div>
    default :
    return  <div>문제 발생</div>
  }
}

export default Detail;