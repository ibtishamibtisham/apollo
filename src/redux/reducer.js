import { BOOKSSHOW, CARTITEMS, SEARCHITEM, PRICE } from "./actionTypes"


initState = {
  books: [],
  cartitems: [],
  inputs: [],
  price: "",
};
export const Reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case BOOKSSH
      return { ..books: payload, inputs: payload };    case CARTITEMS:
      return { ...state, cartitems: payload };
    case SEARCHITEM:
      return { ...state, inputs: payload };
    case PRICE:
      return { ...s
      return state;
  }
};
