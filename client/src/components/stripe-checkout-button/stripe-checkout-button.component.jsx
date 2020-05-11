import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const publishableKey = "pk_test_pZpOaJ1TdqkNtfiUA3HvjY5700Le7FqT25";
  const priceForStripe = price * 100;
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        console.log("success", response);
        alert("Payment Successful.");
      })
      .catch((error) => {
        console.log("error ", error);
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
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
