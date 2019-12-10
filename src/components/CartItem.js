import React, { Component } from "react";
import * as Message from './../constants/Message';

class CartItem extends Component {

  render() {
    var { cartItem, quantity } = this.props;
    return (
      <tr>
        <th scope="row">
          <img
            src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
            alt=""
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{cartItem.name}</strong>
          </h5>
        </td>
        <td>{cartItem.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              onClick={()=>this.onUpdateQuantity(cartItem, quantity -1)}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>—</a>
            </label>
            <label
              onClick={()=>this.onUpdateQuantity(cartItem, quantity +1)}
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{cartItem.price*quantity}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={()=> this.onDeleteProductInCart(cartItem)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }
  
  onDeleteProductInCart = (cartItem) =>{
    var {onDeleteProductInCart, onChangeMessage } = this.props;
    onDeleteProductInCart(cartItem);
    onChangeMessage(Message.MSG_DELETE_PRODUCT_CART_SUCCESS);
  }
  onUpdateQuantity=(product, quantity)=> {
    if(quantity > 0){
      var { onUpdateProductInCart, onChangeMessage } = this.props;
      onUpdateProductInCart(product, quantity);
      onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
  }
}

export default CartItem;
