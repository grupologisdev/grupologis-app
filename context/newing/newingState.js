import React, { useReducer } from "react";
import newingContext from "./newingContex";
import { newingReducer } from "./newingrReducer";
import { NUEVO_INGRESO } from "../types";

const newingState = (props) => {
  const initialState = {
    newingList: [
      {
        RAD: "099",
        nombre:"Jorge Castro",
        Identificacion:"102938392",
        fechaEnvio:"2022-06-16",
        cargo:"Aprendiz Etap...",
        estado: 1,
      },
      {
        RAD: "199",
        nombre:"Jorge Castro",
        Identificacion:"102938392",
        fechaEnvio:"2022-06-16",
        cargo:"Aprendiz Etap...",
        estado: 2,
      },
      {
        RAD: "299",
        nombre:"Jorge Castro",
        Identificacion:"102938392",
        fechaEnvio:"2022-06-16",
        cargo:"Aprendiz Etap...",
        estado: 3,
      },
    ],
  };

  const [state, dispatch] = useReducer(newingReducer, initialState);

  const nuevoIngreso = (data) => {
    dispatch({
      type: NUEVO_INGRESO,
      payload: data,
    });
  };

  return (
    <newingContext.Provider value={{ newingList: state.newingList, nuevoIngreso }}>
      {props.children}
    </newingContext.Provider>
  );
};

export default newingState;