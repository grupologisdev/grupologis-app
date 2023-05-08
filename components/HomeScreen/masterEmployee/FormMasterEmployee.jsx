import { Entypo, Feather } from "@expo/vector-icons";
import moment from "moment";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, getFontStyles, widthPercentageToPx } from "../../../utils";
import GLButton from "../../common/buttons/GLButton";
import FormStep from "../../common/form/FormStep";
import FormuBussines from "../../LoginScreen/FormBussinessEntry/FormBussinesEntry";
import SpecialCalendar from "../../common/form/SpecialCalendar";
import Toast from "react-native-toast-message";

const FormBillsModal = ({ closeModal, onConfirm }) => {
  const now = moment();
  const [values, setValues] = useState({
    status: "",
    startDate: "",
    endDate: "",
  });
  const optionsMasterEmp = [
    [
      { value: null, label: "Seleccione el estado" },
      { value: "1", label: "Todos" },
      { value: "2", label: "Ingresos" },
      { value: "3", label: "Retiros" },
    ],
  ];

  const handleValidation = () => {
    // Validamos los campos aquí
    if (
      values.endDate === "" ||
      values.startDate === "" ||
      values.status === ""
    ) {
      Toast.show({
        type: "error",
        text1: "Por favor, completa todos los campos",
        position: "bottom",
        visibilityTime: 2000,
      });
      return;
    }

    // Llamar a la función onConfirm si los campos son válidos
    onConfirm(values);
  };

  return (
    <View style={styles.modalForm}>
      <View style={styles.modalContent}>
        <View style={{ width: "85%" }}>
          <FormStep
            icon={"info"}
            description="Selecciona las fechas en las cuales deseas buscar."
          />
        </View>
        <View style={{ width: "85%" }}>
          <SpecialCalendar
            placeholder={"Fecha inicio"}
            value={new Date()}
            onChange={(e) => setValues({ ...values, startDate: e.date })}
          />
        </View>

        <View style={{ width: "85%" }}>
          <SpecialCalendar
            placeholder={"Fecha fin"}
            value={new Date()}
            onChange={(e) => setValues({ ...values, endDate: e.date })}
          />
        </View>
        <FormuBussines
          title="Seleccione el estado"
          list={optionsMasterEmp[0]}
          onOptionSel={(selected) => setValues({ ...values, status: selected })}
        />

        <GLButton
          onPressAction={handleValidation}
          type="default"
          placeholder={"Descargar"}
          width={widthPercentageToPx(70)}
        />
      </View>
    </View>
  );
};

export default FormBillsModal;

const styles = StyleSheet.create({
  modalForm: {
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 50,
    paddingHorizontal: 15,
    width: widthPercentageToPx(90),
  },
  goBackButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    marginBottom: 10,
    height: 30,
    width: 30,
  },
  modalContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  selectorOption: {
    height: 50,
    borderRadius: 8,
    backgroundColor: colors.mainBackgroundColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  selectorText: {
    fontFamily: "Volks-Bold",
    color: colors.boldGray,
    ...getFontStyles(16, 0.8, 0.9),
  },
});
