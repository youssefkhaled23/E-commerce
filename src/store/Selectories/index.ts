import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const cartTotalQuantity = createSelector(
  (state : RootState) => state.cart.items,
  (items) => {
    const cartQuantity = Object.values(items).reduce((acc : number, cur : number) => {
      return acc + cur;
    }, 0);
    return cartQuantity;
  }
);

export { cartTotalQuantity };
