import React, { useState } from "react";
import {
  Pressable,
  View,
  Button,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";
import { Feather } from "@expo/vector-icons";
import GLButton from "../../common/buttons/GLButton";
import StepOne from "./stepsForm/StepOne";
import StepTwo from "./stepsForm/StepTwo";
import StepThree from "./stepsForm/StepThree";
import StepFour from "./stepsForm/StepFour";
import Toast from "react-native-toast-message";

import CircleProgressBar from "./stepsForm/formSteps/CircleProgressBar";
import StepIdent from "./stepsForm/StepIdent";
import { useFocusEffect } from "@react-navigation/native";
import LoaderItemSwitch from "../../common/loaders/LoaderItemSwitch";

const MultiStepForm = ({ onConfirm, closeModal }) => {
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [loader, setLoader] = useState(false);

  const handleStepComplete = (data) => {
    setFormData({ ...formData, ...data });
    handleNextStep();
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setLoader(false);
      };
    }, [])
  );

  const steps = [
    {
      component: <StepOne onComplete={handleStepComplete} />,
    },
    {
      component: (
        <StepTwo
          onComplete={handleStepComplete}
          completed={currentStep == 1 ? true : false}
        />
      ),
    },
    {
      component: (
        <StepThree
          formData={formData}
          onComplete={handleStepComplete}
          completed={currentStep == 2 ? true : false}
        />
      ),
    },
    {
      component: (
        <StepFour
          formData={formData}
          onComplete={handleStepComplete}
          completed={currentStep == 3 ? true : false}
        />
      ),
    },
  ];

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const handleNextStep = () => setCurrentStep(currentStep + 1);
  const handlePrevStep = () => setCurrentStep(currentStep - 1);

  const StepComponent = steps[currentStep].component;
  const onComplete = steps[currentStep].onComplete;

  return (
    <View style={styles.modalForm}>
      <Pressable onPress={closeModal} style={styles.headFormStep}>
        <View style={styles.goBackButton}>
          <Feather name="x" size={24} color={colors.purpleIcons} />
        </View>
        <View>
          <Text style={styles.ttlFormStep}>NUEVA NOVEDADES INGRESO</Text>
        </View>
      </Pressable>

      <View>
        <CircleProgressBar currentStep={currentStep} />
      </View>

      <ScrollView>
        {steps.map((step, index) => (
          <View
            key={index}
            style={{ display: currentStep === index ? "flex" : "none" }}
          >
            {step.component}
          </View>
        ))}

        <View style={styles.buttonsContainer}>
          {currentStep > 0 && (
            <GLButton
              onPressAction={handlePrevStep}
              type="second"
              placeholder={"Atras"}
              width={widthPercentageToPx(70)}
            />
          )}
          {currentStep === steps.length - 1 && (
            <GLButton
              onPressAction={() => {
                setLoader(true);
                onConfirm(formData);
              }}
              type="default"
              placeholder={!loader ? "Enviar" : <LoaderItemSwitch />}
              width={widthPercentageToPx(70)}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default MultiStepForm;

const styles = StyleSheet.create({
  modalForm: {
    top: widthPercentageToPx(25),
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
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
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 1,
    paddingBottom: heightPercentageToPx(5),
  },
  headFormStep: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  ttlFormStep: {
    fontFamily: "Poppins-Bold",
    ...getFontStyles(16),
    marginLeft: 15,
  },
});
