import moment from "moment";
import {
  CAMBIAR_CAMPO_NOVEDAD,
  NUEVA_NOVEDAD,
  REINICIAR_FORMULARIO_NOVEDADES,
} from "../types";

const mapNew = (data, length) => {
  const { type, endDate, startDate, comment, remunerated } = data;

  return {
    remunerated,
    comment,
    startDate,
    endDate,
    rad: length.toString().padStart(4, "0"),
    requestDate: moment().format("YYYY-MM-DD"),
    status: 1,
    newType: type.title,
  };
};

export const newsReducer = (state, action) => {
  switch (action.type) {
    case NUEVA_NOVEDAD:
      return {
        ...state,
        newsList: [
          ...state.newsList,
          mapNew(action.payload, state.newsList.length + 1),
        ],
      };
    case CAMBIAR_CAMPO_NOVEDAD:
      return {
        ...state,
        newForm: {
          ...state.newForm,
          [action.payload.field]: action.payload.value,
        },
      };
    case REINICIAR_FORMULARIO_NOVEDADES:
      return {
        ...state,
        newForm: {
          type: null,
          startDate: new Date(),
          endDate: new Date(),
          remunerated: false,
          comment: "",
          status: 1,
        },
      };
    default:
      return state;
  }
};
