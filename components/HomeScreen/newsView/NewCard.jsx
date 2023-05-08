import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../../utils";
import CardElement from "./components/CardElement";

import { AntDesign } from "@expo/vector-icons";
import StatusLine from "../../common/StatusLine";

const NewCard = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.leftContent}>
        <View style={styles.leftTopContent}>
          <CardElement head={"RAD."} content={props.rad} />
          <CardElement head={"F. de Solicitud"} content={props.requestDate} />
          <CardElement head={"Tipo de Permiso"} content={props.newType} />
        </View>
        <View style={styles.leftBottomContent}>
          <StatusLine status={props.status} />
        </View>
      </View>
      <View style={styles.rightContent}>
        <Pressable
          onPress={() => {
            console.log(`Eliminar: ${props.rad}`);
          }}
        >
          <View style={styles.actionButton("ghost")}>
            <AntDesign name="close" size={18} color={colors.darkGray} />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log(`Editar: ${props.rad}`);
          }}
        >
          <View style={styles.actionButton("normal")}>
            <AntDesign name="edit" size={18} color={colors.black} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default NewCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    height: 120,
    width: "100%",
    borderRadius: 17,
    marginBottom: 12,
    padding: 12,
    display: "flex",
    flexDirection: "row",
  },
  leftContent: {
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    width: "80%",
  },
  rightContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "25%",
  },
  leftTopContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  leftBottomContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
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
});
