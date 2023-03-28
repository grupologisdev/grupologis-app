import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../../utils";

const Select = ({ options, value, onChange }) => {
  return (
    <View style={styles.selectorField}>
      <Text>Select</Text>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  selectorField: {
    fontFamily: "Poppins-Regular",
    height: 50,
    margin: 5,
    padding: 10,
    backgroundColor: colors.mainBackgroundColor,
    borderRadius: 7,
  },
});
