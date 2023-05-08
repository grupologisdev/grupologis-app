import React, { useReducer } from "react";
import resumeContext from "./resumeContext";
import { resumeReducer } from "./resumeReducer";
import { GET_RESUME } from "../types";

const ResumeState = (props) => {
  const initialState = {
    resumeList: [
      {
        RAD: "099",
        nombre: "Jorge Castro",
        Identificacion: "102938392",
        fecha: "2022-06-16",
        estado: 1,
      },
      {
        RAD: "199",
        nombre: "Jorge Castro",
        Identificacion: "102938392",
        fecha: "2022-06-16",
        estado: 2,
      },
      {
        RAD: "299",
        nombre: "Jorge Castro",
        Identificacion: "102938392",
        fecha: "2022-06-16",
        estado: 3,
      },
    ],
  };

  const [state, dispatch] = useReducer(resumeReducer, initialState);

  const obtenerResume = (data) => {
    dispatch({
      type: GET_RESUME,
      payload: data,
    });
  };

  return (
    <resumeContext.Provider
      value={{ resumeList: state.resumeList, obtenerResume }}
    >
      {props.children}
    </resumeContext.Provider>
  );
};

export default ResumeState;
