import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HBOY5FJGlPtgRQdkkLlo35f2L6U7v1OSeM8QzlzRYbrlZMdrLq7v28PtkWMv9Yz4nzHRCaSwVOt4z9mfGL17wkl00BJg5mpEA";

  const onToken = (token) => {
    console.log(token);
    alert("PAYMENT SUCCESFUL");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
