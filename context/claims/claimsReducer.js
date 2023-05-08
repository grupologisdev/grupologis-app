import { NUEVO_RECLAMO } from "../types";

export const claimsReducer = (state, action) => {
  switch (action.type) {
    case NUEVO_RECLAMO:
      return {
        ...state,
        claimsList: [...state.claimsList, action.payload],
      };
    default:
      return state;
  }
};