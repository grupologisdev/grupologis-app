import { Feather } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import newsContext from "../../../context/news/newsContext";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../../utils";
import ConfirmActivityContent from "../../common/ConfirmActivityContent";
import NewInfoForm from "./components/NewInfoForm";
import SelectType from "./components/SelectType";
import Toast from "react-native-toast-message";

const FormNew = ({ closeModal }) => {
  const [formStep, setFormStep] = useState(1);
  const { newForm, agregarNovedad } = useContext(newsContext);

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const handleConfirmForm = () => {
    if (!newForm.type || !newForm.startDate || !newForm.endDate) {
      showToast("todos los campos son requeridos", "error");
      return;
    }

    if (newForm.endDate < newForm.startDate) {
      showToast(
        "La fecha de finalización debe ser mayor a la de inicio",
        "error"
      );
      return;
    }

    setFormStep(3);

    agregarNovedad(newForm);
  };

  return (
    <View style={styles.modalForm}>
      <Pressable onPress={closeModal}>
        <View style={styles.goBackButton}>
          <Feather name="x" size={24} color={colors.purpleIcons} />
        </View>
      </Pressable>
      <View style={{ height: heightPercentageToPx(75) }}>
        {formStep === 1 ? (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <SelectType continueWithForm={setFormStep} />
          </ScrollView>
        ) : formStep === 2 ? (
          <NewInfoForm
            confirmInformation={handleConfirmForm}
            setFormStep={setFormStep}
          />
        ) : (
          <ConfirmActivityContent
            closeModal={closeModal}
            title="Su solicitud ha sido enviada"
            description="Recuerde estar pendiente a su correo para recibir la respuesta"
            image={images.checkImage}
          />
        )}
      </View>
    </View>
  );
};

export default FormNew;

const styles = StyleSheet.create({
  modalForm: {
    top: 45,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    transform: [{ translateY: 50 }],
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(90),
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

  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginBottom: 15,
    marginTop: 15,
    ...getFontStyles(13, 0.5, 0.9),
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
