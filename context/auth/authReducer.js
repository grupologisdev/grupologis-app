import {
  CAMBIAR_DATOS_USUARIO,
  ESTABLECER_EMPRESA,
  ESTABLECER_ROL,
} from "../types";

export const authReducer = (state, action) => {
  switch (action.type) {
    case CAMBIAR_DATOS_USUARIO:
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
      };
    case ESTABLECER_EMPRESA:
      return {
        ...state,
        userData: {
          ...state.userData,
          business: action.payload,
        },
      };
    case ESTABLECER_ROL:
      return {
        ...state,
        userData: {
          ...state.userData,
          role: action.payload,
        },
      };
    default:
      return state;
  }
};
