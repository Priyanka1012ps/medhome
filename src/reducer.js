export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //Logic to add item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      //Logic to remove item
      //we cloned the basket
      let newBasket = [...state.basket];
      //we found the index of item to be removed
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //remove item at that index
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cant remove `);
      }
      return { ...state, basket: newBasket };
      break;
    default:
      return state;
  }
};

export default reducer;
