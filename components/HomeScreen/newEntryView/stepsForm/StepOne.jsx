import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { colors, widthPercentageToPx } from "../../../../utils";
import FormCountry from "./formSteps/FormCountry";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSer } from "../../../../utils/axiosInstance";
import listMun from "../../../../utils/json/municip.json";
import GLButton from "../../../common/buttons/GLButton";
import Toast from "react-native-toast-message";
import LoaderItemSwitch from "../../../common/loaders/LoaderItemSwitch";
import { useFocusEffect } from "@react-navigation/native";

const StepOne = ({ formData, onComplete }) => {
  // const [completed, setCompleted] = useState(false);
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [segundoApellido, setSegundoApellido] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [depar, setDepar] = useState("");
  const [munic, setMunic] = useState("");
  const [loader, setLoader] = useState(false);

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const handlePress = () => {
    if (
      !id ||
      !nombre ||
      !apellido ||
      !segundoApellido ||
      !email ||
      !tel ||
      !depar ||
      !munic ||
      munic == "Ciudad"
    ) {
      showToast("Por favor, rellene todos los campos", "error");
      return;
    }
    setLoader(true);
    onComplete({
      stepOneData: {
        identificacion: id,
        nombre,
        apellido,
        segundoNombre,
        segundoApellido,
        email,
        tel,
        depar,
        munic,
      },
    });
  };

  useEffect(() => {
    // if (completed) {
    if (id.length >= 8) {
      // buscar identificacion
      getIdentificacionSer();
    }
    // }
  }, [id]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setLoader(false);
      };
    }, [])
  );

  const getMunicipio = (idMun) => {
    let addDep = "";
    for (let i = 0; i < listMun.municipios.length; i++) {
      const item = listMun.municipios[i];
      if (item.nombre == idMun) {
        addDep = item.nombreDepart;
        break;
      }
    }
    setDepar(addDep);
    setMunic(idMun);
  };

  const getIdentificacionSer = async () => {
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel;
    const codEmp = infoLog.codEmp;
    let path = "GetRegistroEmpleado.php";
    path += `?cod_emp=${id}&empresa=${empSel}`;
    const respApi = await getSer(path);
    if (respApi.status) {
      const { data } = respApi;
      if (data.Existe === 1) {
        const { Perfil } = data;
        setNombre(Perfil.nom1_emp.trim());
        setSegundoNombre(Perfil.nom2_emp.trim());
        setApellido(Perfil.ap1_emp.trim());
        setSegundoApellido(Perfil.ap2_emp.trim());
        setEmail(Perfil.e_mail.trim());
        setTel(Perfil.tel_cel.trim());
        await getMunicipio(Perfil.ciulabora.trim());
      }
    }
  };

  const setSelCountry = (dep, mun) => {
    setDepar(dep);
    setMunic(mun);
  };

  const handleIdentificationChange = (text) => {
    const parsedText = text;
    setId(parsedText);
  };

  return (
    <View>
      <TextInput
        value={id}
        onChangeText={handleIdentificationChange}
        keyboardType="numeric"
        placeholder="Número de ID"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Primer Nombre"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <TextInput
        value={segundoNombre}
        onChangeText={setSegundoNombre}
        placeholder="Segundo Nombre"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <TextInput
        value={apellido}
        onChangeText={setApellido}
        placeholder="Primer Apellido"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <TextInput
        value={segundoApellido}
        onChangeText={setSegundoApellido}
        placeholder="Segundo Apellido"
        style={styles.input}
        placeholderTextColor={colors.placeholderColor}
      />
      <TextInput
        value={tel}
        onChangeText={setTel}
        placeholder="Telefono"
        style={styles.input}
        keyboardType="numeric"
        placeholderTextColor={colors.placeholderColor}
      />
      <FormCountry onSelectionChange={setSelCountry} dep={depar} ciu={munic} />
      <GLButton
        onPressAction={handlePress}
        type="default"
        placeholder={!loader ? "Siguiente" : <LoaderItemSwitch />}
        width={widthPercentageToPx(70)}
      />
      {/* {!loader ? (
        <GLButton
          onPressAction={handlePress}
          type="default"
          placeholder={"Siguiente"}
          width={widthPercentageToPx(70)}
        />
      ) : (
        <LoaderItemSwitch />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F3F3FF",
    width: "100%",
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

export default StepOne;
