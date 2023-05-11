import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FormInput from "./FormInput";
import GLButton from "../../common/buttons/GLButton";
import {
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";
import FormuBussines from "../../LoginScreen/FormBussinessEntry/FormBussinesEntry";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserForm = ({ userData, navigation, handleChange, handleUpdateUser }) => {
  // undefined;
  const estadoCiv = [
    [
      { label: "DESCONOCIDO", value: "0" },
      { label: "SOLTERO", value: "1" },
      { label: "CASADO", value: "2" },
      { label: "VIUDO", value: "3" },
      { label: "UNION LIBRE", value: "4" },
      { label: "RELIGIOSO", value: "5" },
      { label: "OTRO", value: "6" },
    ],
  ];

  const closeApp = async () => {
    try {
      // borrar todos los datos del almacenamiento local
      await AsyncStorage.clear();

      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <View style={styles.formContainer}>
      <FormInput
        type="numeric"
        name="codEmp"
        label={"Identificación"}
        value={userData.codEmp}
        onChange={handleChange}
      />
      <FormInput
        name={userData.Direccion !== undefined ? "Direccion" : "dir_res"}
        label={"Dirección"}
        value={userData.Direccion ?? userData.dir_res}
        onChange={handleChange}
        disabled={false}
      />
      <FormInput
        name={userData.Correo !== undefined ? "Correo" : "e_mail"}
        type="email-address"
        label={"Email"}
        value={userData.Correo ?? userData.e_mail}
        onChange={handleChange}
        disabled={false}
      />
      <FormInput
        type="phone-pad"
        name={userData.Telefono !== undefined ? "Telefono" : "tel_res"}
        label={"Teléfono"}
        value={userData.Telefono ?? userData.tel_res}
        onChange={handleChange}
        disabled={false}
      />
      {userData.type === "employee" && (
        <>
          <FormInput
            type="numeric"
            name="tel_cel"
            label={"Celular"}
            value={userData.tel_cel}
            onChange={handleChange}
            disabled={false}
          />
          <FormInput
            name="empSel"
            label={"Empresa"}
            value={userData.empSel}
            onChange={handleChange}
            disabled={false}
          />
          <View style={styles.formInputContainer}>
            <Text style={styles.label}>Estado Civil</Text>
            <FormuBussines
              title={userData.Est_Civ.trim()}
              list={estadoCiv[0]}
              onOptionSel={(e) => handleChange("Id_Est_Civ", e)}
            />
          </View>
        </>
      )}
      <GLButton
        type={"default"}
        placeholder="Actualizar"
        width={widthPercentageToPx(70)}
        onPressAction={handleUpdateUser}
      />
      <GLButton
        type={"second"}
        placeholder="Cancelar"
        width={widthPercentageToPx(70)}
        onPressAction={() => null}
      />
      <GLButton
        type={"default"}
        placeholder="Cerrar Sesión"
        width={widthPercentageToPx(70)}
        onPressAction={closeApp}
      />
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: heightPercentageToPx(15),
  },
  label: {
    fontFamily: "Poppins-Regular",
    // marginLeft: 10,
    paddingHorizontal: 20,
    ...getFontStyles(14, 0.5, 0.9),
  },
  formInputContainer: {
    width: widthPercentageToPx(70),
    marginBottom: 12,
  },
});
