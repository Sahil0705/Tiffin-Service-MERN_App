export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((curElem) => {
        return curElem.id !== action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, item: [] };
  }

  if (action.type === "INCREMENT") {
    const updatedCart = state.item.map((curElem) => {
        if (curElem.id === action.payload) {
            const actual_price = curElem.price/curElem.quantity
            const updated_quantity = curElem.quantity + 1;
            const updated_price = actual_price*updated_quantity;
          return { ...curElem, quantity: updated_quantity, price: updated_price };
        }
      return curElem;
    });

    return { ...state, item: updatedCart };
  }

  if (action.type === "DECREMENT") {
    const updatedCart = state.item
      .map((curElem) => {
        if (curElem.id === action.payload) {
            const actual_price = curElem.price/curElem.quantity;
            const updated_quantity = curElem.quantity - 1;
            const updated_price = actual_price*updated_quantity;
          return { ...curElem, quantity: updated_quantity, price: updated_price };
        }
        return curElem;
      })
      .filter((curElem) => curElem.quantity !== 0);
    return { ...state, item: updatedCart, };
  }

  if (action.type === "GET_TOTAL") {
    let { totalItem, totalAmount } = state.item.reduce(
      (accum, curVal) => {
        let { price, quantity } = curVal;

        let updatedTotalAmount = price * quantity;
        accum.totalAmount += updatedTotalAmount;

        accum.totalItem += quantity;
        return accum;
      },
      {
        totalItem: 0,
        totalAmount: 0,
      }
    );
    return { ...state, totalItem, totalAmount };
  }
  return state;
};
