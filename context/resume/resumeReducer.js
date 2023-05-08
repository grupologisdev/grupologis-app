import { GET_RESUME } from "../types";

export const resumeReducer = (state, action) => {
  switch (action.type) {
    case GET_RESUME:
      return {
        ...state,
        resumeList: [...state.resumeList, action.payload],
      };
    default:
      return state;
  }
};
