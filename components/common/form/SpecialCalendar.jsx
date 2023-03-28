import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";

import moment from "moment";
import { ScrollView } from "react-native";
import { colors, getFontStyles } from "../../../utils";

import MonthYearPicker from "./MonthYearPicker";

let getDaysArray = function (year, month) {
  let monthIndex = month - 1;
  let names = ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"];
  let date = new Date(year, monthIndex, 1);
  let result = [];
  while (date.getMonth() == monthIndex) {
    result.push({
      day: date.getDate().toString().padStart(2, "0"),
      isSelectable: ![0, 6].includes(date.getDay()),
      weekdayName: names[date.getDay()],
    });
    date.setDate(date.getDate() + 1);
  }
  return result;
};

const SpecialCalendar = ({ placeholder, onChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(moment(value));
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonthYear, setSelectedMonthYear] = useState({
    month: selectedDate.get("M"),
    year: value.getFullYear(),
  });
  const [dayOptions, setDayOptions] = useState([]);

  useEffect(() => {
    const result = getDaysArray(value.getFullYear(), value.getMonth() + 1);

    setDayOptions(result);
  }, []);

  const handleChangeMonth = (e) => {
    setSelectedMonthYear({
      ...selectedMonthYear,
      month: e,
    });

    setSelectedDate(selectedDate.set("M", e));

    let newDate = selectedDate._d;

    const result = getDaysArray(newDate.getFullYear(), newDate.getMonth() + 1);

    setDayOptions(result);
  };
  const changeYear = (e) => {
    setSelectedMonthYear({
      ...selectedMonthYear,
      year: e,
    });

    setSelectedDate(selectedDate.set("y", e));

    let newDate = selectedDate._d;

    const result = getDaysArray(newDate.getFullYear(), newDate.getMonth() + 1);

    setDayOptions(result);
  };
  const handleChangeDay = (day) => {
    if (!day.isSelectable) return;
    const dayNumber = parseInt(day.day);

    setSelectedDate(selectedDate.set("D", dayNumber));
    setSelectedDay(day.day);

    onChange(selectedDate._d);
  };
  return (
    <SafeAreaView style={styles.specialCalendarContainer}>
      <View style={styles.headerData}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <Pressable onPress={() => setShowMonthPicker(true)}>
          <View style={styles.monthSelector}>
            <Text style={styles.monthText}>{selectedDate.format("MMMM")}</Text>
          </View>
        </Pressable>
        <MonthYearPicker
          visible={showMonthPicker}
          changeYear={changeYear}
          handleChangeMonth={handleChangeMonth}
          setVisible={setShowMonthPicker}
          selectedMonthYear={selectedMonthYear}
        />
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.dayOptions}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {dayOptions.map((day) => (
          <Pressable key={day.day} onPress={() => handleChangeDay(day)}>
            <View
              style={styles.dayElement(
                selectedDay === day.day,
                day.isSelectable
              )}
            >
              <Text style={styles.weekdayName}>{day.weekdayName}</Text>
              <Text style={styles.dayNumber}>{day.day}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpecialCalendar;

const styles = StyleSheet.create({
  specialCalendarContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: 5,
  },
  headerData: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  placeholder: {
    ...getFontStyles(15, 0.5, 0.9),
    color: colors.black,
    fontFamily: "Poppins-Bold",
  },
  monthSelector: {
    width: 70,
    height: 20,
    backgroundColor: "transparent",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.mainBlue,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  monthText: {
    fontFamily: "Poppins-Light",
    color: colors.mainBlue,
    ...getFontStyles(10, 0.5, 0.9),
  },
  dayOptions: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    height: 85,
    marginVertical: 10,
    marginLeft: 5,
  },
  dayElement: (isSelected, isSelectable) => ({
    width: 70,
    height: 73,
    borderRadius: 8,
    borderWidth: isSelected ? 2 : 0,
    borderColor: isSelected ? colors.green : colors.white,
    backgroundColor: isSelectable ? colors.white : colors.gray,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.0,

    elevation: 5,
  }),
  dayNumber: {
    fontFamily: "Volks-Bold",
    ...getFontStyles(16, 0.5, 0.9),
  },
  weekdayName: {
    fontFamily: "Volks-Serial-Light",
    color: colors.descriptionColors,
    ...getFontStyles(11, 0.5, 0.9),
  },
});
