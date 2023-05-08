import React from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  colors,
  getFontStyles,
  validCountry,
  validCity,
  widthPercentageToPx,
  heightPercentageToPx,
} from "../../../utils";

const { optionsCountry } = validCountry();
const { optionsCity } = validCity();

import GLButton from "../buttons/GLButton";

const LocationPicker = ({
  setVisible,
  handleChangeMonth,
  changeYear,
  selectedMonthYear,
  visible,
  showCity,
  showCountry,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        <View style={styles.monthPicker}>
          {showCountry ? (
            <ScrollView contentContainerStyle={styles.dayOptions}>
              {optionsCountry.map((country, idx) => (
                <Pressable key={idx} onPress={() => changeYear(country)}>
                  <View
                    style={styles.dayElement(
                      selectedMonthYear.year === country
                    )}
                  >
                    <Text style={styles.dayNumber}>{country}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          ) : null}

          {showCity ? (
            <ScrollView contentContainerStyle={styles.dayOptions}>
              {optionsCity.map((city, idx) => (
                <Pressable key={idx} onPress={() => handleChangeMonth(city)}>
                  <View
                    style={styles.dayElement(selectedMonthYear.year === city)}
                  >
                    <Text style={styles.dayNumber}>{city}</Text>
                  </View>
                </Pressable>
              ))}
            </ScrollView>
          ) : null}

          <GLButton
            type="default"
            placeholder={"Continuar"}
            width={widthPercentageToPx(70)}
            onPressAction={() => setVisible(false)}
          ></GLButton>
        </View>
      </View>
    </Modal>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  monthPicker: {
    width: widthPercentageToPx(80),
    borderRadius: 17,
    padding: 20,
    backgroundColor: colors.white,
    elevation: 5,
    height: heightPercentageToPx(40),
  },
  placeholder: {
    ...getFontStyles(15, 0.5, 0.9),
    color: colors.black,
    fontFamily: "Poppins-Bold",
  },
  dayOptions: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  dayElement: (isSelected) => ({
    width: 70,
    height: 30,
    borderRadius: 8,
    borderWidth: isSelected ? 2 : 0,
    borderColor: isSelected ? colors.green : colors.white,
    backgroundColor: colors.white,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  dayNumber: {
    fontFamily: "Volks-Bold",
    ...getFontStyles(16, 0.5, 0.9),
  },
});
