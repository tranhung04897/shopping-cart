import * as types from './../constants/ActionType';

// var data = JSON.parse(localStorage.getItem('CART'));
// var initialState = data ? data: [];

var initialState =[
  {
    product: {
      id: 1,
      name: 'Iphone 11',
      images: '',
      description: 'San pham moi',
      price: 500,
      inventory: 10,
      rating: 4
    }, 
    quantity: 3
  },
  {
    product: {
      id: 2,
      name: 'Iphone 12',
      images: '',
      description: 'San pham moi chua ra',
      price: 1500,
      inventory: 15,
      rating: 5
    }, 
    quantity: 3
  }
];
const cart = (state = initialState, action)=> {
  switch(action.types) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default: return [...state];
  }
}

export default cart;