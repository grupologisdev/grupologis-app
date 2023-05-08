import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../utils";

const DefaultButton = ({ placeholder, onPressAction, width }) => (
  <Pressable onPress={onPressAction}>
    <View style={styles.defaultButton(width)}>
      <Text style={{ color: colors.white, fontFamily: "Poppins-Regular" }}>
        {placeholder}
      </Text>
    </View>
  </Pressable>
);

const SecondButton = ({ placeholder, onPressAction, width }) => (
  <Pressable onPress={onPressAction}>
    <View style={styles.secondButton(width)}>
      <Text style={{ fontFamily: "Poppins-Regular" }}>{placeholder}</Text>
    </View>
  </Pressable>
);

const GLButton = ({ type, placeholder, onPressAction, width }) => {
  switch (type) {
    case "second":
      return (
        <SecondButton
          placeholder={placeholder}
          width={width}
          onPressAction={onPressAction}
        />
      );
    case "default":

    default:
      return (
        <DefaultButton
          placeholder={placeholder}
          width={width}
          onPressAction={onPressAction}
        />
      );
  }
};

export default GLButton;

const styles = StyleSheet.create({
  defaultButton: (width) => ({
    width,
    backgroundColor: colors.buttonsColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
    marginTop: 10,
  }),
  secondButton: (width) => ({
    backgroundColor: colors.gray,
    width,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
    marginTop: 10,
  }),
});
