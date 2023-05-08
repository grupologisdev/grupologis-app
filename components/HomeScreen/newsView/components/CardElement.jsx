import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors, getFontStyles } from "../../../../utils";

const CardElement = ({ head, content }) => {
  return (
    <View>
      <Text style={styles.textHead}>{head}</Text>
      <Text style={styles.textContent}>{content}</Text>
    </View>
  );
};

export default CardElement;

const styles = StyleSheet.create({
  textHead: {
    fontFamily: "Volks-Serial-Medium",
    color: colors.boldGray,
    ...getFontStyles(14, 0.5, 0.9),
  },
  textContent: {
    fontFamily: "Volks-Bold",
    color: colors.darkGray,
    ...getFontStyles(15, 0.5, 0.9),
  },
});
