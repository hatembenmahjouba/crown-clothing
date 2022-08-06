import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51LQA5aF9lTTOzOxyk9QQSW3c7rCTJw0WAnwzcRq77D8qWyyAB38qE9NXyJUpGKGGY2063OilOxLmPbepFGWa8uon00LVS7cnGR';

  const onToken = (token) => {
    axios
      .post('payment', {
        amount: priceForStripe,
        token,
      })
      .then((response) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please sure you use the provided credit cart'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CROWN Clothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
