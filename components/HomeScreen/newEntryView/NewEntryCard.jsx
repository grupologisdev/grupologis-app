import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import {
  colors,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";
import CardElement from "../newsView/components/CardElement";
import ShowInfo from "./stepsForm/ShowInfo";
import { TouchableOpacity } from "react-native";
import DeleteNovIng from "./stepsForm/DeleteNovIng";

const NewEntryCard = (props) => {
  const [modal, setModal] = useState(false);
  const [SerCons, setSerCons] = useState("");
  const [infoDel, setInfoDel] = useState({});
  const closeModal = () => {
    setModal(false);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.leftContent}>
        <View style={styles.cardColumn}>
          <CardElement head={"RAD."} content={props.ID_oi} />
          <CardElement
            head={"Nombre"}
            content={props.nom1_emp + " " + props.ap1_emp}
          />
        </View>

        <View style={styles.cardColumn}>
          <CardElement head={"Fecha"} content={props.fecha_ing} />
          <CardElement head={"Cargo"} content={props.tip_tra} />
        </View>
      </View>
      <View style={styles.cardColumn}>
        <CardElement head={"Identificacion"} content={props.cod_emp} />
      </View>

      <View style={styles.rightContent}>
        {/* <Pressable onPress={showToast} style={styles.rightContent}>
          <View style={styles.actionButton("ghost")}>
            <AntDesign name="download" size={18} color={colors.darkGray} />
          </View>
        </Pressable> */}
        <Pressable
          onPress={() => {
            setSerCons("info");
            setModal(!modal);
          }}
          style={styles.rightContent}
        >
          <View style={styles.actionButton("ghost")}>
            <AntDesign name="eye" size={18} color={colors.darkGray} />
          </View>
        </Pressable>

        {/* cambiar por una X  */}
        {props.estado == "PENDIENTE" && (
          <Pressable
            onPress={() => {
              setInfoDel({
                id: props.ID_oi,
                emp: props.empresa_grupo,
                est: props.estado,
              });
              setSerCons("delete");
              setModal(true);
            }}
            style={styles.rightContent}
          >
            <View style={styles.actionButton("ghost")}>
              <AntDesign name="eye" size={18} color={colors.darkGray} />
            </View>
          </Pressable>
        )}
      </View>
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => closeModal()}
              >
                <Ionicons
                  name="md-close"
                  size={32}
                  color={colors.placeholderColor}
                />
              </TouchableOpacity>
              <View style={styles.modalContainer}>
                {SerCons == "info" ? (
                  <ShowInfo modul="NovIngreso" info={props} />
                ) : (
                  <DeleteNovIng
                    infoDel={infoDel}
                    showModal={(c) => c && closeModal()}
                  />
                )}
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};
export default NewEntryCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.white,
    borderRadius: 17,
    marginBottom: 20,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardColumn: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  actionButton: (type) => ({
    width: 36,
    height: 36,
    borderColor: type === "ghost" ? "#DBDBDB" : null,
    borderWidth: type === "ghost" ? 2 : 0,
    backgroundColor:
      type === "ghost" ? colors.white : colors.mainBackgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  }),
  modal: {
    backgroundColor: "white",
    width: widthPercentageToPx(100),
    height: heightPercentageToPx(100),
    borderRadius: 40,
    padding: 30,
    position: "absolute",
    bottom: -20,
  },
  modalContainer: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
