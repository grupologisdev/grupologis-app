import { Feather } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../utils";
import ConfirmActivityContent from "./ConfirmActivityContent";

const ConfirmActivity = ({ closeModal, image, title, description }) => {
  return (
    <View style={styles.modalForm}>
      <Pressable onPress={closeModal}>
        <View style={styles.goBackButton}>
          <Feather name="x" size={24} color={colors.purpleIcons} />
        </View>
      </Pressable>
      <ConfirmActivityContent
        closeModal={closeModal}
        image={image}
        title={title}
        description={description}
      />
    </View>
  );
};

export default ConfirmActivity;

const styles = StyleSheet.create({
  modalForm: {
    top: 45,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    transform: [{ translateY: 50 }],
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(100),
  },
  goBackButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    height: 30,
    width: 30,
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
  },
  topContent: {
    height: "65%",
    display: "flex",
    alignItems: "center",
    gap: 15,
  },
  iconImage: {
    width: 109,
    height: 109,
  },
  textsContainer: {
    paddingHorizontal: 30,
  },
  titleText: {
    fontFamily: "Volks-Bold",
    marginTop: 2,
    color: colors.black,
    textAlign: "center",
    ...getFontStyles(25, 0.6, 0.9),
  },
  descriptionText: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginBottom: 10,
    textAlign: "center",
    ...getFontStyles(13, 0.5, 0.9),
  },
  closeButton: {
    backgroundColor: colors.gray,
    width: widthPercentageToPx(70),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
    marginTop: 15,
  },
  closeButtonText: {
    fontFamily: "Volks-Bold",
    color: colors.black,
  },
});
