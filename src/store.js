import { configureStore, createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name:'user',
  initialState:{name:'홍길동', age:'25'},
  reducers : {
    changeName(state){
      state.name = '박지성'
    },
    increase(state, action){
      state.age += action.payload
    }
  }
});

const cart = createSlice({
  name:'cart',
  initialState:[
    { id: 0,
      name: "White and Black",
      imgUrl: "img/shoes1.jpg",
      count:2
    },
    { id: 1,
      name: "Red Knit",
      imgUrl: "img/shoes2.jpg",
      count:1
    },
    { id: 2,
      name: "Grey Yordan",
      imgUrl: "img/shoes3.jpg",
      count:1
    }
  ],
  reducers:{
    addCount(state, action){
      const number = state.findIndex((a)=> {
        return a.id === action.payload;
      })
      console.log(number);
      state[number].count++;
    },
    decreaseCount(state, action){
      const number = state.findIndex((a)=> {
        return a.id === action.payload;
      })
      if(state[number].count>0){
      state[number].count--;
      }else if(state[number].count === 0) {
        alert('재고가 없습니다 슈볼탱아')
      }
    }
  }
})

