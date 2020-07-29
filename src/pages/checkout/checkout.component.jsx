import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.styles.scss";
import { selectCartItems ,SelectCartTotal } from "../../redux/cart/cart.selectors";

const CheckOutPage = ({cartItems, total}) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
        cartItems.map(cartItem => cartItem.name)
    }
    <div className='total' > TOTAL : ${total} </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:SelectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
