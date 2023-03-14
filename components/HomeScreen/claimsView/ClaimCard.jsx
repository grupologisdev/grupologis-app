import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../utils";
import CardElement from "../newsView/components/CardElement";

import { AntDesign } from "@expo/vector-icons";
const ClaimCard = (props) => {
    return (
        <View style={styles.card}>
            <View styles={styles.leftContent}>
                <View style={styles.leftTopContent}>
                    <CardElement head={"RAD."} content={props.radicado} />
                    <CardElement
                        head={"Fecha"}
                        content={props.fecha}
                    />
                </View>
                <View style={styles.leftBottomContent}>
                    <Text>TODO: Estado del reclamo</Text>
                </View>
            </View>
            <View style={styles.rightContent}>
                <Pressable
                    onPress={() => {
                        console.log(`Visualizar: ${props.radicado}`);
                    }}
                >
                    <View style={styles.actionButton("ghost")}>
                        <AntDesign name="eye" size={18} color={colors.darkGray} />
                    </View>
                </Pressable>
            </View>
        </View>
    );
};
export default ClaimCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        height: 110,
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
        alignItems: "center",
        width: "85%",
    },
    rightContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-around",
        width: "15%",
        left: 90,
    },
    leftTopContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    leftBottomContent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
