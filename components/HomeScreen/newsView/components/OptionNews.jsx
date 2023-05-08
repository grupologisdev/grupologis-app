import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { colors, getFontStyles } from "../../../../utils";
import newsContext from "../../../../context/news/newsContext";

const OptionNews = ({ titleNews, descNews, image, id }) => {
  const { newForm } = useContext(newsContext);

  return (
    <View style={styles.scrollStyle(newForm.type?.id === id)}>
      <Image source={image} style={styles.optionImage} />
      <View>
        <Text style={styles.title}>{titleNews}</Text>
        <Text style={styles.description}>{descNews}</Text>
      </View>
    </View>
  );
};

export default OptionNews;

const styles = StyleSheet.create({
  scrollStyle: (selected) => ({
    width: "80%",
    backgroundColor: selected ? colors.generalBackgroundColor : colors.white,
    borderRadius: 17,
    paddingHorizontal: 35,
    paddingVertical: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }),
  optionImage: {
    width: 80,
    height: 80,
  },

  title: {
    ...getFontStyles(15, 0.9, 1.1),
    fontFamily: "Poppins-Bold",
    color: colors.darkGray,
  },
  description: {
    fontFamily: "Volks-Serial-Light",
    color: colors.darkGray,
    ...getFontStyles(12, 0.9, 1.2),
  },
});
