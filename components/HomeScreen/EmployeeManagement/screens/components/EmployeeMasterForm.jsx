import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  colors,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../../../utils";
import FormStep from "../../../../common/form/FormStep";
import SpecialCalendar from "../../../../common/form/SpecialCalendar";

const EmployeeMasterForm = () => {
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.formCard}>
      <FormStep
        icon="info"
        description={
          "Debes rellenar el formulario para generar la descarga al darle click en siguiente."
        }
      />
      <SpecialCalendar
        placeholder={"Fecha inicial"}
        value={date}
        onChange={setDate}
      />
      <SpecialCalendar
        placeholder={"Fecha final"}
        value={date}
        onChange={setDate}
      />
    </View>
  );
};

export default EmployeeMasterForm;

const styles = StyleSheet.create({
  formCard: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 20,
    height: heightPercentageToPx(60),
    width: widthPercentageToPx(90),
  },
});
