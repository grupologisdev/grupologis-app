import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  colors,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";
import { Colors } from "react-native/Libraries/NewAppScreen";

class FormuBussines extends Component {
  state = {
    optSelectLab: this.props.title,
    modalVisible: false,
    modalOptions: [],
    modalSelect: "",
  };

  openModal = (select) => {
    let modalOptions = [];
    switch (select) {
      case "select":
        modalOptions = this.props.list;
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
      <View>
        {/* Selects */}
        <TouchableOpacity
          style={styles.select}
          onPress={() => this.openModal("select")}
        >
          <Text style={styles.selectText}>{this.state.optSelectLab}</Text>
          <Ionicons
            name="chevron-down-outline"
            size={24}
            color={colors.placeholderColor}
          />
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          visible={this.state.modalVisible}
          animationType="slide"
          transparent={true}
          backgroundColor="white"
        >
          <View style={styles.modalContainer}>
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
                    key={option.value}
                    style={
                      option.value === null
                        ? styles.selectOption
                        : styles.modalOptionBox
                    }
                    onPress={() => {
                      // Aquí actualizamos el estado del select correspondiente con la opción seleccionada
                      this.setState({
                        [this.state.modalSelect]: option.value,
                        modalVisible: false,
                        modalOptions: [],
                        optSelectLab: option.label,
                      });
                      this.props.onOptionSel(option.value);
                    }}
                  >
                    <ScrollView>
                      <Text style={styles.modalOption}>{option.label}</Text>
                    </ScrollView>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  select: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 8,

    marginTop: 20,
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
    marginTop: 20,
  },
  modalOptionBox: {
    fontSize: 15,
    padding: 18,
    borderWidth: 1,
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
});

export default FormuBussines;
