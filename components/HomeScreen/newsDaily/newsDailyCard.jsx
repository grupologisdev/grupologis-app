import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { colors, getFontStyles, widthPercentageToPx } from "../../../utils";

const newsDailyCard = ({ titleNot, descNot, imageNot, dateIn, link }) => {
  return (
    <View style={styles.scrollStyle}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: imageNot }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{titleNot}</Text>
        <Text style={styles.description}>{descNot}</Text>
        <Text style={styles.description}>{dateIn}</Text>
        {link != "" && (
          <TouchableOpacity onPress={() => Linking.openURL(link)}>
            <Text>Ver Más</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default newsDailyCard;

const styles = StyleSheet.create({
  scrollStyle: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 17,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    marginBottom: 10,
    width: widthPercentageToPx(90),
  },
  imgContainer: {
    width: "100%",
  },
  infoContainer: {
    width: "100%",
    paddingHorizontal: widthPercentageToPx(3),
  },
  title: {
    ...getFontStyles(19, 0.9, 1.1),
    fontFamily: "Volks-Bold",
    marginBottom: 0,
    color: colors.darkGray,
  },
  description: {
    fontFamily: "Volks-Serial-Light",
    color: colors.darkGray,
    ...getFontStyles(13, 0.9, 1.2),
  },
  image: {
    width: "100%",
    height: 350,
    borderRadius: 10,
    marginBottom: 15,
  },
});
