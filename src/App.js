import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import bg from './img/bg.jpg'
import Product from './components/Product';
import shoes from './data';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './components/Detail';
import Cart from './components/Cart';
import { useState } from 'react';
import Title2 from './components/Title2';
import bask from './nike';
import Nike from './components/Nike';
import axios from 'axios';
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState(shoes);
  const [count, setCount] = useState(1);
  const [nike, setNike] = useState(bask);


  return (
    <div className='App'>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
            <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
            <Nav.Link onClick={() => navigate('/about')}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to='/'>홈</Link>
      <hr />
      <Link to='/detail'>상세페이지</Link> */}
      <Routes>
        <Route path='/' element={<div>
          <div className='slider'></div>
          <Title></Title>
          <Button variant='outline-primary' onClick={() => {
            // console.log(shoes);
            let data1 = [...shoes].sort((a, b) =>
              a.title > b.title ? 1 : -1);
            setData(data1);
          }}>이름순 정렬</Button>{'  '}
          <Button variant='outline-secondary' onClick={() => {
            let data2 = [...shoes].sort((a, b) =>
              a.price > b.price ? 1 : -1);
            setData(data2)
          }}>낮은 가격순 정렬</Button>{'  '}
          <Button variant='outline-danger' onClick={() => {
            let data3 = [...shoes].sort((a, b) =>
              a.price < b.price ? 1 : -1);
            setData(data3)
          }}>높은 가격순 정렬</Button>
          <div className='container'>
            <div className='row'>
              {data.map((id, index) => {
                return (
                  <Product data={data[index]} key={data[index].id} ></Product>
                )
              })}
            </div>
          </div>
          <Title2></Title2>

          <Button variant='outline-success' count={count} onClick={()=>{
            if(count === 1){
              axios.get('https://raw.githubusercontent.com/angwanghyeon/react-data-nike/main/nike2.json')
              .then((result)=>{
                const nike2 = [...nike, ...result.data];
                setNike(nike2);
                setCount(count+1);
              })
            }else if (count === 2){
              axios.get('https://raw.githubusercontent.com/angwanghyeon/react-data-nike/main/nike3.json')
              .then((result)=>{
                const nike3 = [...nike, ...result.data];
                setNike(nike3);
                setCount(count+1);
              })
            }else {
              alert('상품이 없다')
            }
          }}> + 3개 상품 더 보기</Button>
          <div className='container mt-5'>
            <div className='row'>
              {nike.map((element, index) => {
                return (
                  <Nike nike={nike[index]} key={nike[index].id}></Nike>
                )
              })}
            </div>
          </div>
          <Footer></Footer>
        </div>}>

        </Route>
        {/*/:id는 useParam을 사용해야한다. */}
        <Route path='/detail/:id?' element={<Detail data={data}></Detail>}>

        </Route>
        <Route path='/cart' element={<Cart></Cart>}>

        </Route>
        <Route path='/about' element={<About></About>}>
          <Route path='member' element={<Member></Member>}></Route>
          <Route path='location' element={<Location></Location>}></Route>
        </Route>
      </Routes>
      {/* <div className='bg' style={{backgroundImage:'url('+bg+')'}}></div> */}

    </div>
  );
}

const Title = () => {
  const cssTitle1 = {
    marginTop: '70px',
    textAlign: 'center',
  }
  return (
    <div>
      <h3 style={cssTitle1}>MD's Pick</h3>
      <p style={{ textAlign: 'center' }}>시선을 사로잡는 스타일링, 제품을 만나보세요</p>
    </div>
  )
}

function About() {
  return (
    <>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </>
  )
}

function Member() {
  return (
    <>
      <h4>현재 조직원</h4>
    </>
  )
}

function Location() {
  return (
    <>
      <h4>회사 위치</h4>
    </>
  )
}

export default App;
