import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { colors, getFontStyles, widthPercentageToPx } from "../../../utils";

const FormInput = ({ type, label, onChange, value, name, disabled }) => {
  return (
    <View style={styles.formInputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={!disabled}
        keyboardType={type}
        style={styles.input}
        value={value}
        onChangeText={(value) => onChange(name, value)}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  formInputContainer: {
    width: widthPercentageToPx(70),
    marginBottom: 12,
  },
  label: {
    fontFamily: "Poppins-Regular",
    marginLeft: 20,
    ...getFontStyles(14, 0.5, 0.9),
  },
  input: {
    backgroundColor: colors.inputBackground,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontFamily: "Poppins-Regular",
    height: 50,
    borderRadius: 17,
    paddingHorizontal: 21,
    paddingVertical: 8,
    color: colors.descriptionColors,
  },
});
