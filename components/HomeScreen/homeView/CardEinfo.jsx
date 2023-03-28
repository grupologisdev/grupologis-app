import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors, widthPercentageToPx } from "../../../utils";
const CardEinfo = ({
  title,
  onPressAction,
  handleGoBack,
  handleChangeText,
  showInput = true,
}) => {
  return (
    <View style={styles.cardContainer}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Pressable onPress={handleGoBack}>
          <View style={styles.goBackButton}>
            <Entypo name="chevron-left" size={24} color={colors.purpleIcons} />
          </View>
        </Pressable>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      {showInput && (
        <TextInput
          style={styles.titleContainer}
          placeholder="Ingresa la identificación"
          onChangeText={(value) => handleChangeText(value)}
        ></TextInput>
      )}
    </View>
  );
};

export default CardEinfo;

const styles = StyleSheet.create({
  cardContainer: {
    width: widthPercentageToPx(90),
    padding: 13,
    backgroundColor: colors.white,
    borderRadius: 12,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
    fontSize: 18,
  },
  titleText: {
    color: colors.black,
    textTransform: "uppercase",
    fontFamily: "Poppins-Bold",
  },
  newButton: {
    borderRadius: 8,
    backgroundColor: colors.yellow,
    textAlign: "center",
    padding: 8,
    width: 80,
  },
  buttonText: {
    color: colors.white,
    fontFamily: "Poppins-Regular",
  },
  titleContainer: {
    backgroundColor: colors.mainBackgroundColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    fontFamily: "Poppins-Regular",
    height: 50,
    borderRadius: 17,
    padding: 15,
  },
  goBackButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    height: 30,
    width: 30,
    marginRight: 30,
  },
});
