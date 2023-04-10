import React, { Component, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  colors,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../../../utils";

class Formulario extends Component {
  state = {
    select1: "Centro de costos",
    select2: "Tipo de salario",
    select3: "Cargo",
    select4: "Obra / Labor (Descripción)",
    select5: "Aux / bonificaciones ",
    inputValue1: "",
    inputValue2: "",
    modalVisible: false,
    modalOptions: [],
    modalSelect: "",
  };

  openModal = (select) => {
    let modalOptions = [];
    switch (select) {
      case "select1":
        modalOptions = ["empresa 1", "empresa 2", "Opción 3"];
        break;
      case "select2":
        modalOptions = ["Opción 4", "Opción 5", "Opción 6"];
        break;
      case "select3":
        modalOptions = ["Opción 7", "Opción 8", "Opción 9"];
        break;
      case "select4":
        modalOptions = ["Opción 10", "Opción 11", "Opción 12"];
        break;
      case "select5":
        modalOptions = ["Opción 13", "Opción 14", "Opción 15"];
        break;
      default:
        break;
    }
    this.setState({ modalVisible: true, modalOptions, modalSelect: select });
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxForm}>
          {/* Selects */}
          <TouchableOpacity
            style={styles.select}
            onPress={() => this.openModal("select1")}
          >
            <Text style={styles.selectText}>{this.state.select1}</Text>
            <Ionicons
              name="chevron-down-outline"
              size={24}
              color={colors.placeholderColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.select}
            onPress={() => this.openModal("select2")}
          >
            <Text style={styles.selectText}>{this.state.select2}</Text>
            <Ionicons
              name="chevron-down-outline"
              size={24}
              color={colors.placeholderColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.select}
            onPress={() => this.openModal("select3")}
          >
            <Text style={styles.selectText}>{this.state.select3}</Text>
            <Ionicons
              name="chevron-down-outline"
              size={24}
              color={colors.placeholderColor}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.select}
            onPress={() => this.openModal("select4")}
          >
            <Text style={styles.selectText}>{this.state.select4}</Text>
            <Ionicons
              name="chevron-down-outline"
              size={24}
              color={colors.placeholderColor}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Salario base"
            placeholderTextColor={colors.placeholderColor}
            value={this.state.inputValue1}
            onChangeText={(text) => this.setState({ inputValue1: text })}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.select}
            onPress={() => this.openModal("select5")}
          >
            <Text style={styles.selectText}>{this.state.select5}</Text>
            <Ionicons
              name="chevron-down-outline"
              size={24}
              color={colors.placeholderColor}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Valor de Aux / bonificaciones"
            placeholderTextColor={colors.placeholderColor}
            value={this.state.inputValue2}
            onChangeText={(text) => this.setState({ inputValue2: text })}
          />
        </View>

        {/* Modal */}
        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          transparent={true}
          backgroundColor="white"
        >
          <View style={styles.modal}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => this.closeModal()}
            >
              <Ionicons
                name="md-close"
                size={32}
                color={colors.placeholderColor}
              />
            </TouchableOpacity>
            <View style={styles.selectContainer}>
              {this.state.modalOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={styles.modalOptionBox}
                  onPress={() => {
                    // Aquí actualizamos el estado del select correspondiente con la opción seleccionada
                    this.setState({
                      [this.state.modalSelect]: option,
                      modalVisible: false,
                      modalOptions: [],
                      modalSelect: "",
                    });
                  }}
                >
                  <Text style={styles.modalOption}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

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
    flex: 1,
    margin: 16,
    borderRadius: 8,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "white",
    width: widthPercentageToPx(100),
    height: heightPercentageToPx(40),
    borderRadius: 40,
    padding: 30,
    position: "absolute",
    bottom: -20,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 30,
  },
  selectOption: {
    borderColor: "white",
    marginBottom: 25,
  },
  selectContainer: {
    marginTop: heightPercentageToPx(5),
  },
  modalOptionBox: {
    fontSize: 15,
    padding: 18,
    borderWidth: "1px",
    borderColor: colors.purpleIcons,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalOption: {
    fontSize: 15,
    fontFamily: "Volks-Serial-Medium",
  },
  input: {
    backgroundColor: colors.mainBackgroundColor,
    height: 50,
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
    width: "100%",
    fontFamily: "Volks-Serial-Medium",
    fontSize: 16,
    fontWeight: "normal",
  },
  boxForm: {
    marginBottom: 10,
  },
});

export default Formulario;