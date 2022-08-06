import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();
  const { itemCount } = useSelector(
    createStructuredSelector({
      itemCount: selectCartItemsCount,
    })
  );
  const handleToggleCartHidden = () => {
    dispatch(toggleCartHidden());
  };
  return (
    <CartIconContainer onClick={handleToggleCartHidden}>
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
