import React, { useReducer } from "react";
import claimsContext from "./claimsContext";
import { claimsReducer } from "./claimsReducer";

import { NUEVO_RECLAMO } from "../types";

const ClaimsState = (props) => {
  const initialState = {
    claimsList: [
      {
        radicado: "0001",
        fecha: "2022-06-16",
        estado: 1,
      },
      {
        radicado: "0002",
        fecha: "2022-06-16",
        estado: 2,
      },
      {
        radicado: "0003",
        fecha: "2022-06-16",
        estado: 3,
      },
    ],
  };

  const [state, dispatch] = useReducer(claimsReducer, initialState);

  const agregarReclamo = (data) => {
    dispatch({
      type: NUEVO_RECLAMO,
      payload: data,
    });
  };

  return (
    <claimsContext.Provider value={{ claimsList: state.claimsList, agregarReclamo }}>
      {props.children}
    </claimsContext.Provider>
  );
};

export default ClaimsState;