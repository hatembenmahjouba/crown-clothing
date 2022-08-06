import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {
  CheckoutPageContainer,
  CheckoutHeader,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from './checkout.styles';
import { createStructuredSelector } from 'reselect';

const CheckoutPage = () => {
  const { cartItems, total } = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      total: selectCartTotal,
    })
  );

  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Prive</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>TOTAL: ${total}</span>
      </TotalContainer>
      <StripeCheckoutButton price={total} />
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: Any future date - CVC: Any 3 digits
      </WarningContainer>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
