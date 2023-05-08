import { FIND_BILL } from "../types";

export const billsReducer = (state, action) => {
  switch (action.type) {
    case FIND_BILL:
      return {
        ...state,
        billsList: [...state.billsList, action.payload],
      };
    default:
      return state;
  }
};