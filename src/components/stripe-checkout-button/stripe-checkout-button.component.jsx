import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  // eslint-disable-next-line
  const publishableKey = "pk_test_pZpOaJ1TdqkNtfiUA3HvjY5700Le7FqT25";
  const priceForStripe = price * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      name='CRW Clothing Ltd.'
      label='Pay Now'
      panelLabel='Pay Now'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      stripeKey={publishableKey}
      image='http://svgshare.com/i/CUz.svg'
      token={onToken}
      billingAddress
      shippingAddress
    />
  );
};

export default StripeCheckoutButton;
