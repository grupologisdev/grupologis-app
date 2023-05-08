import React, { useReducer } from "react";
import newsContext from "./newsContext";
import { newsReducer } from "./newsReducer";

import {
  CAMBIAR_CAMPO_NOVEDAD,
  NUEVA_NOVEDAD,
  REINICIAR_FORMULARIO_NOVEDADES,
} from "../types";

const NewsState = (props) => {
  const initialState = {
    newsList: [
      {
        rad: "0001",
        requestDate: "2022-06-16",
        newType: "Cita Médica",
        remunerated: false,
        comment: "hola mundo",
        status: 1,
      },
      {
        rad: "0002",
        requestDate: "2022-06-16",
        newType: "Retiro",
        remunerated: false,
        comment: "hola mundo",
        status: 2,
      },
      {
        rad: "0003",
        requestDate: "2022-06-16",
        newType: "Cita Médica",
        remunerated: false,
        comment: "hola mundo",
        status: 3,
      },
    ],
    newForm: {
      type: null,
      startDate: new Date(),
      endDate: new Date(),
      remunerated: false,
      comment: "",
      status: 1,
    },
  };

  const [state, dispatch] = useReducer(newsReducer, initialState);

  const agregarNovedad = (data) => {
    dispatch({
      type: NUEVA_NOVEDAD,
      payload: data,
    });

    dispatch({
      type: REINICIAR_FORMULARIO_NOVEDADES,
    });
  };

  const changeFormField = (data) => {
    dispatch({
      type: CAMBIAR_CAMPO_NOVEDAD,
      payload: data,
    });
  };

  return (
    <newsContext.Provider
      value={{
        newsList: state.newsList,
        newForm: state.newForm,
        agregarNovedad,
        changeFormField,
      }}
    >
      {props.children}
    </newsContext.Provider>
  );
};

export default NewsState;
