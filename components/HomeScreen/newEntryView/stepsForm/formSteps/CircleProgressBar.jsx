import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors, widthPercentageToPx } from "../../../../../utils";

const CircleProgressBar = ({ currentStep }) => {
  const steps = [0, 1, 2, 3];
  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={step} style={styles.stepContainer}>
          <View
            key={step}
            style={[styles.circle, currentStep >= step && styles.active]}
          >
            <Text
              style={[
                styles.number,
                currentStep >= step && styles.activeNumber,
              ]}
            >
              {step + 1}
            </Text>
          </View>
          {index < steps.length - 1 && (
            <View
              style={[styles.line, currentStep >= step && styles.activeLine]}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: colors.gray,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 99,
  },
  number: {
    fontSize: 17,
    color: colors.white,
    fontFamily: "Volks-Bold",
  },
  active: {
    borderColor: colors.blueIndicator,
    backgroundColor: colors.blueIndicator,
  },
  activeNumber: {
    color: colors.white,
  },
  line: {
    height: 2,
    backgroundColor: colors.gray,
    position: "absolute",
    top: 17,
    left: 15,
    width: widthPercentageToPx(20),
  },
  activeLine: {
    backgroundColor: colors.blueIndicator,
  },
});

export default CircleProgressBar;
