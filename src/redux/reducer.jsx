import {
  ADD_ITEM,
  DELETE_ITEM,
} from './actions';

const INITIAL_STATE = {
  wishList: [],
};

// Complete the three cases below
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM: //Add new item to wishlist
      return {
        wishList: [...state.wishList, action.payload],
      };
    case DELETE_ITEM: //Remove selected item from wishlist
      const itemIndex = state.wishList.indexOf(action.payload)
      return {
        wishList: [ ...state.wishList.slice(0, itemIndex),
          ...state.wishList.slice(itemIndex + 1)],
      };
    default: //Return unchanged state by default
      return {
        wishList: state.wishList ,
      };
  }
};

export default reducer;