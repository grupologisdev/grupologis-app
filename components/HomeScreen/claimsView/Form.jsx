import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  colors,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";
import GLButton from "../../common/buttons/GLButton";
import FormTitle from "../../common/form/FormTitle";

const Form = ({ closeModal, onConfirm }) => {
  const [infoForm, setInfoForm] = useState({
    asunto: "",
    description: "",
  });

  return (
    <View style={styles.modalForm}>
      <Pressable onPress={closeModal}>
        <View style={styles.goBackButton}>
          <Feather name="x" size={24} color={colors.purpleIcons} />
        </View>
      </Pressable>
      <FormTitle
        title={"Nueva Quejas"}
        subtitle="y reclamos"
        description={
          "Puedes interponer una queja o reclamo por este medio o hacer seguimiento de las mismas"
        }
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.titleContainer}
          placeholder="Asunto"
          value={infoForm.asunto}
          onChangeText={(asu) => setInfoForm({ ...infoForm, asunto: asu })}
        ></TextInput>
        <TextInput
          style={styles.descriptionContainer}
          placeholder="Cuéntanos más..."
          multiline={true}
          value={infoForm.description}
          onChangeText={(des) => setInfoForm({ ...infoForm, description: des })}
        ></TextInput>
        <GLButton
          onPressAction={() => onConfirm(infoForm)}
          type="default"
          placeholder={"Enviar"}
          width={widthPercentageToPx(70)}
        />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  modalForm: {
    top: widthPercentageToPx(25),
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    transform: [{ translateY: 50 }],
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(70),
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
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  titleContainer: {
    backgroundColor: colors.mainBackgroundColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: widthPercentageToPx(70),
    fontFamily: "Poppins-Regular",
    height: 50,
    borderRadius: 17,
    padding: 15,
  },
  descriptionContainer: {
    backgroundColor: colors.mainBackgroundColor,
    width: widthPercentageToPx(70),
    fontFamily: "Poppins-Regular",
    height: heightPercentageToPx(20),
    borderRadius: 17,
    padding: 15,
    display: "flex",
    alignItems: "flex-start",
  },
  sendButton: {
    backgroundColor: colors.buttonsColor,
    fontFamily: "Poppins-Regular",
    width: widthPercentageToPx(70),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    height: 50,
    marginTop: 15,
  },
});
