import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckOutItem from '../../components/checkout-item/checkout-item.components';
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

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
        cartItems.map(cartItem => (
          <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        ))
    }
    <div className='total' > TOTAL : ${total} </div>
    <div className='test-warning'>
      *Please use the following test cards for payments*
      <br />
      4242 4242 4242 4242 - EXP:01/22 - CVV : 123 
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:SelectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
