import React, { Component } from "react";
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';

class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.total(cart)}
      </Cart>
    );
  }
  showCartItem= (cart) => {
    var result =<tr>
                  <td>{Message.MSG_CART_EMPTY}</td>
                </tr>; 
    if(cart.length > 0) {
      result = cart.map((cartItem,index)=>{
        return <CartItem key={index} cartItem={cartItem.product} quantity={cartItem.quantity}  />
      })
    }
    return result;
  }
  total= (cart) => {
    var result = 0;
    if(cart.length > 0) {
      for(var i = 0; i< cart.length;i++){
        result += cart[i].product.price * cart[i].quantity;
      }
    }
    return <CartResult total={result} />;
  }
}
const mapStateToProps = (state)=>{
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps, null)(CartContainer);
