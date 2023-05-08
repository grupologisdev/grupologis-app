import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { colors, widthPercentageToPx } from "../../../utils";

export const InputWithIcon = ({
  icon,
  iconSize,
  iconColor,
  placeholder,
  type,
  value,
  onInputChange,
}) => {
  return (
    <View style={styles.inputWithIcon}>
      <View style={styles.iconContainer}>
        <AntDesign name={icon} size={iconSize} color={iconColor}></AntDesign>
      </View>
      <TextInput
        style={styles.loginFormInputWithIcon}
        placeholder={placeholder}
        placeholderTextColor={iconColor}
        keyboardType={type}
        value={value}
        onChangeText={onInputChange}
      ></TextInput>
    </View>
  );
};

const Input = (props) => {
  const { hasIcon, placeholder, type, value, onChangeText, iconSize } = props;
  if (hasIcon)
    return (
      <InputWithIcon
        icon={icon}
        iconSize={iconSize}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        type={type}
      />
    );
  return (
    <View>
      <TextInput
        style={styles.loginFormInput}
        placeholder="Identificación"
        type={type}
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  loginFormInput: {
    fontFamily: "Poppins-Regular",
    width: widthPercentageToPx(60),
    height: 50,
    margin: 5,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 7,
  },
  loginFormInputWithIcon: {
    fontFamily: "Poppins-Regular",
    backgroundColor: colors.white,
    width: widthPercentageToPx(50),
    height: 50,
    padding: 10,
    borderBottomRightRadius: 7,
    borderTopRightRadius: 7,
  },
  iconContainer: {
    backgroundColor: colors.white,
    height: 50,
    width: widthPercentageToPx(10),
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputWithIcon: {
    display: "flex",
    flexDirection: "row",
  },
});
