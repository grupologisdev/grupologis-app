import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors, getFontStyles } from "../../../utils";

const newsDailyHomeCard = ({ titleNot, descNot, imageNot }) => {
  return (
    <View style={styles.scrollStyle}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: imageNot }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{titleNot}</Text>
        <Text style={styles.description}>{descNot}</Text>
      </View>
    </View>
  );
};

export default newsDailyHomeCard;

const styles = StyleSheet.create({
  scrollStyle: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 17,
    paddingVertical: 13,
    paddingHorizontal: 13,
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    marginBottom: 10,
  },
  imgContainer: {
    width: "35%",
  },
  infoContainer: {
    width: "65%",
  },
  title: {
    ...getFontStyles(15, 0.9, 1.1),
    fontFamily: "Poppins-Bold",
    marginBottom: 0,
    color: colors.darkGray,
  },
  description: {
    fontFamily: "Volks-Serial-Light",
    color: colors.darkGray,
    ...getFontStyles(12, 0.9, 1.2),
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
  },
});
