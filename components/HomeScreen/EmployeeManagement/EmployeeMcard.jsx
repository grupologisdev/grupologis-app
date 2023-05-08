import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors, getFontStyles } from "../../../utils";
const EmployeeMcard = ({ title, desc, image, id, onRedirect }) => {
  return (
    <View style={styles.scrollStyle}>
      <View style={styles.containerCard}>
        <View style={styles.certificadoImage}>{image}</View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{desc}</Text>
        <Pressable onPress={() => onRedirect(id)}>
          <View style={styles.downloadButton}>
            <Text
              style={{
                color: colors.light,
                fontFamily: "Volks-Serial-Light",
                fontSize: 40,
                lineHeight: 40,
              }}
            >
              {">"}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default EmployeeMcard;

const styles = StyleSheet.create({
  scrollStyle: {
    width: 180,
    backgroundColor: colors.white,
    borderRadius: 17,
    paddingHorizontal: 25,
    paddingVertical: 25,
    alignItems: "flex-start",
    flexDirection: "column",
  },
  certificadoImage: {
    marginBottom: 1,
    height: 75,
    width: 75,
  },
  title: {
    ...getFontStyles(15, 0.9, 1.1),
    fontFamily: "Poppins-Bold",
    marginBottom: 5,
  },
  description: {
    fontFamily: "Volks-Serial-Light",
    color: colors.descriptionColors,
    ...getFontStyles(12, 0.9, 1.2),
    flex: 1,
  },
  downloadButton: {
    backgroundColor: colors.buttonsColor,
    fontFamily: "Volks-Bold",
    height: 41,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginTop: 10,
    padding: 0,
    flex: 0,
  },
});
