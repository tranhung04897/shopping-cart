import React, { Component } from "react";
import { connect } from 'react-redux';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import { actDeleteProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';

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
    var {onDeleteProductInCart, onChangeMessage, onUpdateProductInCart} = this.props;
    var result =<tr>
                  <td>{Message.MSG_CART_EMPTY}</td>
                </tr>; 
    if(cart.length > 0) {
      result = cart.map((cartItem,index)=>{
        return <CartItem key={index} 
        cartItem={cartItem.product} 
        quantity={cartItem.quantity} 
        onDeleteProductInCart={onDeleteProductInCart} 
        onChangeMessage={onChangeMessage}
        onUpdateProductInCart= {onUpdateProductInCart}
        />
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

const mapDispatchToProps=(dispatch, props) =>{
  return{
    onDeleteProductInCart:(product) =>{
      dispatch(actDeleteProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onUpdateProductInCart:(product, quantity)=>{
      dispatch(actUpdateProductInCart(product, quantity));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
