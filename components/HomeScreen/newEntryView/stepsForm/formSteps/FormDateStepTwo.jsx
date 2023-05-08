import { Feather, Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import {
  colors,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../../../utils";
import React, { useEffect, useState } from "react";
import SpecialCalendar from "../../../../common/form/SpecialCalendar";

const FormDateStepTwo = ({ changeResultDate }) => {
  const [modal, setModal] = useState(false);
  const [dateSel, setDateSel] = useState("");
  const [textDateIng, setTextDateIng] = useState("Fecha de ingreso");
  const [textDateEgr, setTextDateEgr] = useState("Fecha de egreso");
  const [formdate, setFormdate] = useState({
    ingreso: {},
    egreso: {},
  });
  const fechaAc = new Date();

  useEffect(() => {
    changeResultDate(formdate);
  }, [formdate]);

  const resDate = (date) => {
    if (dateSel == "ingreso") {
      setFormdate({
        ...formdate,
        ingreso: date,
      });
    } else {
      setFormdate({
        ...formdate,
        egreso: date,
      });
    }
  };
  return (
    <View>
      <Pressable
        style={styles.select}
        onPress={() => {
          setModal(true);
          setDateSel("ingreso");
        }}
      >
        <Text style={styles.selectText}>{textDateIng}</Text>
        <Ionicons name="md-close" size={25} color={colors.placeholderColor} />
      </Pressable>

      <Pressable
        style={styles.select}
        onPress={() => {
          setModal(true);
          setDateSel("egreso");
        }}
      >
        <Text style={styles.selectText}>{textDateEgr}</Text>
        <Ionicons name="md-close" size={25} color={colors.placeholderColor} />
      </Pressable>

      {/* modal  */}
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalForm}>
            <Pressable onPress={() => setModal(false)}>
              <View style={styles.goBackButton}>
                <Feather name="x" size={24} color={colors.purpleIcons} />
              </View>
            </Pressable>
            <SpecialCalendar
              placeholder={`Fecha de ${dateSel}`}
              value={new Date()}
              dia={dateSel == "ingreso" ? fechaAc.getDate() + 3 : ""}
              onChange={(e) => {
                dateSel == "ingreso"
                  ? setTextDateIng(e.date)
                  : setTextDateEgr(e.date);
                resDate(e);
              }}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default FormDateStepTwo;

const styles = StyleSheet.create({
  select: {
    backgroundColor: colors.mainBackgroundColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  selectText: {
    fontSize: 16,
    fontFamily: "Volks-Serial-Medium",
    color: colors.placeholderColor,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalForm: {
    top: 200,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    transform: [{ translateY: 0 }],
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(25),
    backgroundColor: "rgb(255,255,255)",
  },
  goBackButton: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    marginBottom: 10,
    height: 30,
    width: 30,
  },
});
