import React, { useReducer } from "react";
import authContext from "./authContext";
import { authReducer } from "./authReducer";

import {
  CAMBIAR_DATOS_USUARIO,
  ESTABLECER_EMPRESA,
  ESTABLECER_ROL,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    userData: {
      name: "Mary Quiñones",
      business: "",
      email: "mary33@gmail.com",
      phone: "3005658749",
      role: "business",
      identification: "1010101010",
      direction: "Tv 9b #34-198",
      gender: "female",
      imgmale:
        "/Users/jacs-developer/Documents/Grupologis-app/grupologis-app/assets/images/components/layout/userporfile/male/wanna1.png",
      imgfemale:
        "/Users/jacs-developer/Documents/Grupologis-app/grupologis-app/assets/images/components/layout/userporfile/female/wanna1.png",
      image: "",

      // image "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Fphotos%252Fwoman%252Fwanna6.ce59a86a87e87831fa7d.png.png?alt=media&token=b5969067-5adb-4412-80c5-f000500ba3e3"
    },
    businessOptions: [
      {
        label: "",
        value: null,
      },
      {
        label: "Empresa 1",
        value: "1",
      },
      {
        label: "Empresa 2",
        value: "2",
      },
    ],
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const setBusiness = (payload) => {
    dispatch({
      type: ESTABLECER_EMPRESA,
      payload,
    });
  };

  const setRole = (payload) => {
    dispatch({
      type: ESTABLECER_ROL,
      payload,
    });
  };

  const updateUser = (payload) => {
    dispatch({
      type: CAMBIAR_DATOS_USUARIO,
      payload,
    });
  };

  return (
    <authContext.Provider
      value={{
        userData: state.userData,
        businessOptions: state.businessOptions,
        setBusiness,
        setRole,
        updateUser,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
