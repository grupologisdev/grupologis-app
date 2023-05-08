import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import newsContext from "../../../context/news/newsContext";
import { colors, getFontStyles, widthPercentageToPx } from "../../../utils";

import { FontAwesome5 } from "@expo/vector-icons";
import NewCard from "./NewCard";

const NewsList = () => {
  const { newsList } = useContext(newsContext);
  return (
    <View style={styles.newsListContainer}>
      <View style={styles.titleContainer}>
        <FontAwesome5 name="calendar-alt" size={24} color={colors.mainBlue} />
        <Text style={styles.firstTitle}>Novedades /</Text>
        <Text style={styles.secondTitle}>Permisos</Text>
      </View>
      <View>
        {newsList.map((n, index) => (
          <NewCard key={index} {...n} />
        ))}
      </View>
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  newsListContainer: {
    width: widthPercentageToPx(90),
    height: "100%",
  },
  titleContainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 10,
    marginBottom: 10,
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
