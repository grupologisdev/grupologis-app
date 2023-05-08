import React, { useReducer } from "react";
import billsContext from "./billsContext";
import { billsReducer } from "./billsReducer";

import { FIND_BILL } from "../types";

const BillsState = (props) => {
  const initialState = {
    billsList: [
      {
        año: "2001",
        mes: "05",
        noFactura: "2022-06-16",
        subtipo: "12733",
        fecha: "2022-06-16",
        descripcion: "sin desc...",
        estado: 1,
      },
      {
        año: "2002",
        mes: "05",
        noFactura: "2022-06-16",
        subtipo: "12733",
        fecha: "2022-06-16",
        descripcion: "sin desc...",
        estado: 2,
      },
      {
        año: "2004",
        mes: "05",
        noFactura: "2022-06-16",
        subtipo: "12733",
        fecha: "2022-06-16",
        descripcion: "sin desc...",
        estado: 3,
      },
      {
        año: "2001",
        mes: "05",
        noFactura: "2022-06-16",
        subtipo: "12733",
        fecha: "2022-06-16",
        descripcion: "sin desc...",
        estado: 4,
      },
      {
        año: "2001",
        mes: "05",
        noFactura: "2022-06-16",
        subtipo: "12733",
        fecha: "2022-06-16",
        descripcion: "sin desc...",
        estado: 5,
      },
    ],
  };

  const [state, dispatch] = useReducer(billsReducer, initialState);

  const agregarFactura = (data) => {
    dispatch({
      type: FIND_BILL,
      payload: data,
    });
  };

  return (
    <billsContext.Provider
      value={{ billsList: state.billsList, agregarFactura }}
    >
      {props.children}
    </billsContext.Provider>
  );
};

export default BillsState;
