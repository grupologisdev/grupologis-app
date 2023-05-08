import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, getFontStyles, widthPercentageToPx } from "../../../utils";

import { Entypo } from "@expo/vector-icons";

const FormStep = ({ number, description, icon }) => {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.numberContainer}>
        {number ? (
          <Text style={styles.numberText}>{number}</Text>
        ) : (
          <Entypo name={icon} size={24} color={colors.white} />
        )}
      </View>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );
};

export default FormStep;

const styles = StyleSheet.create({
  stepContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    width: "70%",
    marginBottom: widthPercentageToPx(5),
  },
  numberContainer: {
    backgroundColor: colors.stepGray,
    width: 47,
    height: 47,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  numberText: {
    color: colors.white,
    fontFamily: "Poppins-Bold",
    ...getFontStyles(27, 0.5, 0.9),
  },
  descriptionText: {
    ...getFontStyles(15, 0.7, 1.1),
    fontFamily: "Roboto-Light",
    color: colors.darkGray,
    flexWrap: "wrap",
  },
});
