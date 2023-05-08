import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import newingContext from "../../../context/newing/newingContex";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";

import NewEntryCard from "./NewEntryCard";

const NewEntryList = (props) => {
  const { newingList } = props;

  return (
    <View style={styles.newsListContainer}>
      <View>
        {newingList.map((n5, index5) => (
          <NewEntryCard key={index5} {...n5} />
        ))}
      </View>
    </View>
  );
};

export default NewEntryList;

const styles = StyleSheet.create({
  newsListContainer: {
    width: widthPercentageToPx(90),
    height: "100%",
    marginTop: heightPercentageToPx(1),
  },
  titleContainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  firstTitle: {
    fontFamily: "Poppins-Regular",
    ...getFontStyles(18, 0.5, 0.9),
  },
  secondTitle: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(18, 0.5, 0.9),
  },
});
