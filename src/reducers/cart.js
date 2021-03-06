import * as types from './../constants/ActionType';
import _ from 'lodash';

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data: [];

const cart = (state = initialState, action)=> {
  var {product, quantity} = action;
  var index = -1;
  switch(action.type) {
    case types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
        state[index].quantity += quantity;
      } else {
        state.push({
          product,
          quantity
        })
      };
      localStorage.setItem('CART',JSON.stringify(state));
      return [...state];
    case types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      // index = _.findIndex(data, function(chr){
      //   return chr.id === product.id;
      // })
      if(index !== -1) {
        state.splice(index,1);
      }
      localStorage.setItem('CART',JSON.stringify(state));
      return [...state];
    case types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if(index !== -1){
          state[index].quantity = quantity;
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    default: return [...state];
  }
}

var findProductInCart= (cart, product) =>{
  var index = _.findIndex(cart, (o)=>{
    return o.product.id === product.id;
  })
  return index;
}
export default cart;
