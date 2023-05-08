import React, { useContext } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import newsContext from "../../../../context/news/newsContext";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../../utils";
import GLButton from "../../../common/buttons/GLButton";
import FormStep from "../../../common/form/FormStep";
import SpecialCalendar from "../../../common/form/SpecialCalendar";

const NewInfoForm = ({ confirmInformation, setFormStep }) => {
  const { newForm, changeFormField } = useContext(newsContext);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.firstTitle}>Nuevo /</Text>
          <Text style={styles.secondTitle}>{newForm.type?.title}</Text>
        </View>
        <FormStep
          number={1}
          description="Ingrese fecha de inicio y fin del permiso"
        />
        <View style={{ paddingHorizontal: 10 }}>
          <SpecialCalendar
            placeholder={"Fecha inicio"}
            value={new Date()}
            onChange={(e) => changeFormField({ field: "startDate", value: e })}
          />
          <SpecialCalendar
            placeholder={"Fecha fin"}
            value={new Date()}
            onChange={(e) => changeFormField({ field: "endDate", value: e })}
          />
          <Pressable
            onPress={() =>
              changeFormField({
                field: "remunerated",
                value: !newForm.remunerated,
              })
            }
          >
            <View style={styles.remunerated(newForm.remunerated)}>
              <View style={styles.remuneratedIcon(newForm.remunerated)}></View>
              <Text style={styles.remuneratedText}>
                {newForm.remunerated ? "Remunerado" : "No Remunerado"}
              </Text>
            </View>
          </Pressable>
        </View>
        <FormStep number={2} description="Dejanos un comentario..." />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.descriptionContainer}
            multiline={true}
            value={newForm.comment}
            onChangeText={(e) =>
              changeFormField({ field: "comment", value: e })
            }
          ></TextInput>
          <GLButton
            onPressAction={confirmInformation}
            type="default"
            placeholder={"Enviar solicitud"}
            width={widthPercentageToPx(70)}
          ></GLButton>
          <GLButton
            type="second"
            placeholder={"Cancelar "}
            width={widthPercentageToPx(70)}
            onPressAction={() => setFormStep(1)}
          ></GLButton>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewInfoForm;

const styles = StyleSheet.create({
  titleContainer: {
    paddingBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  remunerated: (isRemunerated) => ({
    backgroundColor: isRemunerated ? colors.green : colors.red,
    height: 41,
    borderRadius: 9,
    paddingVertical: 7,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    gap: 10,
  }),
  remuneratedText: {
    color: colors.white,
    fontFamily: "Poppins-Bold",
    ...getFontStyles(14, 0.5, 0.9),
  },
  remuneratedIcon: (isRemunerated) => ({
    backgroundColor: isRemunerated ? colors.boldGreen : colors.boldRed,
    borderRadius: 20,
    height: 20,
    width: 20,
  }),
});
