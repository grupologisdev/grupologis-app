import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, getFontStyles, widthPercentageToPx } from "../../../utils";
import FormInput from "../profileView/FormInput";
const ViewTitleCard = ({ title,inputText,buttonText, buttonIcon, onPressAction }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Pressable onPress={onPressAction}>
        <View style={styles.newButton}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default ViewTitleCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: widthPercentageToPx(90),
    padding: 13,
    backgroundColor: colors.white,
    borderRadius: 12,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
});
