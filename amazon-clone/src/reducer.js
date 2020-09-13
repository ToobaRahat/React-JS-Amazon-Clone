export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action); //it is iportant, we can see which action is passed
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        //you need to return what new data layer will look like,, here we are saying return it with exactly what state look like but change the basket
        ...state,
        basket: [...state.basket, action.item], // updating the basket : whatever in the state before plus new item in the basket
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1); // here 1 indicates minus 1, we are removing 1 item from the basket
      } else {
        console.warn(`Cannot remove product (id: ${action.id})`);
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
