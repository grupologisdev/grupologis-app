import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Text, Switch } from "react-native";
import FormStepThree from "./formSteps/FormStepThree";
import GLButton from "../../../common/buttons/GLButton";
import { widthPercentageToPx } from "../../../../utils";
import FormDotacion from "./formSteps/FormDotacion";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSer } from "../../../../utils/axiosInstance";
import Toast from "react-native-toast-message";
import LoaderItemSwitch from "../../../common/loaders/LoaderItemSwitch";
import { useFocusEffect } from "@react-navigation/native";

const StepThree = ({ formData, onComplete, completed }) => {
  const [value, setValue] = React.useState();
  const [dotacion, setDotacion] = useState(false);
  const [listCenCost, setListCenCost] = useState([]);
  const [listAuxBon, setListAuxBon] = useState([]);
  const [loader, setLoader] = useState(false);

  const toggleDotacion = () => setDotacion((previousState) => !previousState);

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  useEffect(() => {
    if (completed) {
      const getServiciosSel = async () => {
        let infoLog = await AsyncStorage.getItem("logged");
        infoLog = JSON.parse(infoLog);
        const empSel = infoLog.empSel.toUpperCase();
        const codEmp = infoLog.codEmp;
        const codCon = formData.stepTwoData.select.convenio.value;

        let pathCenCos = `GetDatosOrdenIngreso.php`;
        pathCenCos += `?cod_cli=${codEmp}&empresa=${empSel}&cod_conv=${codCon}`;
        const pathAuxBon = `GetNovedadesFijas.php?empresa=${empSel}`;

        const respCenCos = await getSer(pathCenCos);
        if (respCenCos == "limitExe") {
          console.log("limitExe");
        } else {
          if (respCenCos.status) {
            const respAuxBon = await getSer(pathAuxBon);
            if (respAuxBon.status) {
              setListCenCost(respCenCos.data.centro_costos);
              respAuxBon.data.Correcto === 1
                ? setListAuxBon(respAuxBon.data.novedades)
                : showToast("Error al buscar Aux / bonific", "error");
            } else {
              showToast("Error al buscar Aux / bonific", "error");
            }
          } else {
            showToast("Error al listado de cargos", "error");
          }
        }
      };

      getServiciosSel();
    }
  }, [completed]);

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setLoader(false);
      };
    }, [])
  );

  const setSeleccForm = (selec) => {
    setValue({ ...value, ...selec });
  };

  const handlePress = () => {
    if (value) {
      const {
        auxBonif,
        camisa,
        centCostos,
        guantes,
        overol,
        pantalon,
        salario,
        valorAuxBonifi,
        valorSalario,
        zapatos,
      } = value;

      if (
        auxBonif.label == "Aux / bonificaciones" ||
        centCostos.label == "Centro de costos" ||
        salario.label == "Tipo de salario" ||
        valorAuxBonifi.label == "" ||
        valorSalario.label == ""
      ) {
        showToast("Por favor, rellene todos los campos", "error");
      } else if (
        dotacion &&
        (!zapatos ||
          !pantalon ||
          !guantes ||
          !overol ||
          !camisa ||
          zapatos.label == "" ||
          pantalon.label == "" ||
          guantes.label == "Talla guantes" ||
          overol.label == "Talla overol" ||
          camisa.label == "Talla Camisa")
      ) {
        showToast("Por favor, rellene todos los campos", "error");
      } else {
        setLoader(true);
        onComplete({
          stepThreeData: {
            select: value,
            dotacion: dotacion,
          },
        });
      }
    } else {
      showToast("Por favor, rellene todos los campos", "error");
    }
  };

  return (
    // salario -
    // valor salario -
    // centro costos -
    // auxilio bon
    // auxilio bon valor
    // dotacion
    <View>
      <FormStepThree
        lisCenCost={listCenCost}
        lisAuxBon={listAuxBon}
        onSelectionChange={setSeleccForm}
      />
      <Text>Dotacion Aspirante</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={dotacion ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDotacion}
        value={dotacion}
      />
      {dotacion && <FormDotacion onSelectionChange={setSeleccForm} />}
      <GLButton
        onPressAction={handlePress}
        type="default"
        placeholder={!loader ? "Siguiente" : <LoaderItemSwitch />}
        width={widthPercentageToPx(70)}
      />
    </View>
  );
};

export default StepThree;
