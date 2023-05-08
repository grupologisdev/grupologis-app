import {NUEVO_INGRESO} from "../types";

export const newingReducer = (state, action) =>{
    switch (action.type) {
        case NUEVO_INGRESO:
          return {
            ...state,
            newingList: [...state.newingList, action.payload],
          };
        default:
          return state;
      }

}