import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";

const MainCardInfo = ({ firstTitle, secondTitle, description }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.title}>
          <Text style={styles.firstTitleText}>{firstTitle}</Text>
          <Text style={styles.secondTitleText}>{secondTitle}</Text>

          <View style={styles.descriptionContainer}>
            <Text style={styles.welcomeDesc}>{description}</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.workersImage}
        source={require("../../../assets/images/home/banners/imgEmployees.png")}
      />
    </View>
  );
};

export default MainCardInfo;

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: heightPercentageToPx(4),
  },
  firstTitleText: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(25),
  },
  secondTitleText: {
    ...getFontStyles(17),
    lineHeight: 14,
    fontFamily: "Poppins-Bold",
  },

  descriptionContainer: {
    width: widthPercentageToPx(40),
  },
  welcomeDesc: {
    fontFamily: "Volks-Serial-Light",
    color: colors.descriptionColors,
    ...getFontStyles(14, 0.5, 1.2),
  },

  workersImage: {
    height:
      Platform.OS === "android"
        ? heightPercentageToPx(22)
        : heightPercentageToPx(21),
    width: widthPercentageToPx(43),
    right: 0,
    bottom: 0,
    borderBottomRightRadius: 17,
    position: "absolute",
  },

  textInputContainers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 8,
    width: widthPercentageToPx(65),
    height: 50,
    marginTop: 10,
  },
  infoContainer: {
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(18),
    overflow: "hidden",
    backgroundColor: colors.white,
    borderRadius: 17,
    alignItems: "center",
  },

  title: {
    width: "100%",
    padding: 20,
  },
  containerScroll: {
    width: widthPercentageToPx(90),
    height: 300,
    paddingTop: 10,
  },
  downloadableCardsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
