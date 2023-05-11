import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors, getFontStyles, widthPercentageToPx } from "../../../utils";
import FormInput from "../profileView/FormInput";
const ViewTitleCard = ({
  title,
  inputText,
  buttonText,
  buttonIcon,
  onPressAction,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (isPressed) {
        setIsPressed(false);
      }
    }, 2000);
  }, [isPressed]);

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Pressable
        onPress={() => {
          setIsPressed(true);
          onPressAction();
        }}
      >
        <View style={styles.newButton(isPressed)}>
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
  newButton: (press) => ({
    borderRadius: 8,
    backgroundColor: press ? colors.gray : colors.yellow,
    textAlign: "center",
    padding: 8,
    width: 80,
  }),
  buttonText: {
    color: colors.white,
    fontFamily: "Poppins-Regular",
  },
});
