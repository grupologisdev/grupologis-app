import React, { useEffect } from "react";
import { useState } from "react";
import {
  FlatList,
  Modal,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";
import NewEntryList from "../components/HomeScreen/newEntryView/NewEntryList";
import ConfirmActivity from "../components/common/ConfirmActivity";
import { images } from "../utils";
import Toast from "react-native-toast-message";

import Layout from "../components/layout/Layout";
import { heightPercentageToPx, widthPercentageToPx } from "../utils";

import MultiStepForm from "../components/HomeScreen/newEntryView/MultiStepForm";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getSer, postSer } from "../utils/axiosInstance";
import LoaderItemSwitch from "../components/common/loaders/LoaderItemSwitch";
import { useFocusEffect } from "@react-navigation/native";

const NewEntryView = (props) => {
  const { navigation } = props;
  const [modal, setModal] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [listNoved, setListNoved] = useState([]);
  const [loader, setLoader] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const selectFechaActual = () => {
    let fecha = new Date();
    let mes = fecha.getMonth() + 1;
    let dia = fecha.getDate();
    let year = fecha.getFullYear();

    //  validar si dia y mes es menor a 10
    dia < 10 ? (dia = "0" + dia) : dia;
    mes < 10 ? (mes = "0" + mes) : mes;

    return `${year}-${mes}-${dia}`;
    // return `${dia}/${mes}/${year}`;
  };

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const closeAfterConfirm = async (info) => {
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel.trim().toUpperCase();
    const codEmp = infoLog.codEmp;

    const { stepOneData, stepTwoData, stepThreeData } = info;

    const fecIn = stepTwoData.fecIngreso.replaceAll("/", "-");
    const fecEg = stepTwoData.fecEgreso.replaceAll("/", "-");
    const jorn =
      stepTwoData.select.jornada.label ==
      "Jonada incompleta (Especificar la jornada)"
        ? stepTwoData.select.jornadaPer.label
        : stepTwoData.select.jornada.label.toUpperCase();

    let body = {
      cod_emp: stepOneData.identificacion,
      nom1_emp: stepOneData.nombre,
      nom2_emp: stepOneData.segundoNombre,
      ap1_emp: stepOneData.apellido,
      ap2_emp: stepOneData.segundoApellido,
      e_mail: stepOneData.email,
      cel_emp: stepOneData.tel,
      ciu_res: stepOneData.munic,
      dep_res: stepOneData.depar,
      fecha_ing: fecIn,
      fecha_egr: fecEg,
      tip_con: stepTwoData.select.contrato.value,
      tip_tra: stepTwoData.select.trabajador.label.toUpperCase(),
      cod_conv: stepTwoData.select.convenio.value,
      cod_car: stepTwoData.select.cargo.value,
      obra_labor: stepTwoData.laborOrden,
      tip_jor: jorn,
      pag_d31: stepTwoData.pago31 ? "1" : "0",
      cco_cli: stepThreeData.select.centCostos.value,
      tip_sal: stepThreeData.select.salario.label.toUpperCase(),
      nov_con: stepThreeData.select.auxBonif.value,
      nov_val: stepThreeData.select.valorAuxBonifi.label,
      nov_per: "0",
      sal_bas: stepThreeData.select.valorSalario.label,
      dot_emp: stepThreeData.dotacion ? "1" : "0",
      empresa: empSel,
      cod_cli: codEmp,
      tip_ide: "cedula",
      tip_nov: "INGRESO",
      fecha_oi: selectFechaActual(),
      camisa_emp: stepThreeData.dotacion
        ? stepThreeData.select.camisa.label
        : "",
      overol_emp: stepThreeData.dotacion
        ? stepThreeData.select.overol.label
        : "",
      guantes_emp: stepThreeData.dotacion
        ? stepThreeData.select.guantes.label
        : "",
      pantalon_emp: stepThreeData.dotacion
        ? stepThreeData.select.pantalon.label
        : "",
      zapatos_emp: stepThreeData.dotacion
        ? stepThreeData.select.zapatos.label
        : "",
    };

    body = JSON.stringify(body);
    const path = "CrearOrdenIngreso.php";

    const respApi = await postSer(path, body);
    if (respApi.status) {
      const { data } = respApi;

      if (data.status) {
        setShowForm(false);

        setTimeout(() => {
          setModal(false);
          setShowForm(true);
          getNovedadesAll();
        }, 3000);
      } else {
        showToast("Error en el servidor", "error");
      }
    } else {
      showToast("Ocurrio un error en el servidor", "error");
    }
  };

  const getNovedadesAll = async () => {
    setLoader(true);

    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel.trim().toUpperCase();
    const codEmp = infoLog.codEmp;

    const path = `ConsultarOrdenIngreso.php?cod_cli=${codEmp}&empresa=${empSel}`;
    const respApi = await getSer(path);
    if (respApi.status) {
      const { data } = respApi;
      if (data.orden_ingreso != null) {
        setListNoved(data.orden_ingreso);
        setLoader(false);
      } else {
        setListNoved([]);
        setLoader(false);
      }
    } else {
      showToast("Error al buscar las novedades", "error");

      setListNoved([]);
      setLoader(false);
    }
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);

    await getNovedadesAll();
    setRefreshing(false);
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getNovedadesAll();
      return () => {};
    }, [])
  );

  return (
    <Layout props={{ ...props }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CardEinfo
          title={"Novedades ingreso"}
          buttonText="Generar"
          showButton={true}
          showInput={false}
          onPressAction={() => setModal(!modal)}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
        />
        {!loader ? (
          <NewEntryList newingList={listNoved} />
        ) : (
          <LoaderItemSwitch />
        )}
      </ScrollView>
      {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalContainer}>
            {showForm ? (
              <MultiStepForm
                closeModal={() => setModal(false)}
                onConfirm={closeAfterConfirm}
              />
            ) : (
              <ConfirmActivity
                closeModal={() => {
                  setModal(false);
                  setShowForm(true);
                }}
                title="Se ha generado su solicitud de ingreso"
                description="Recuerde estar pendiente a su correo para recibir la respuesta"
                image={images.checkImage}
              />
            )}
          </View>
        </Modal>
      )}
    </Layout>
  );
};

export default NewEntryView;

const styles = StyleSheet.create({
  generalView: {
    height: heightPercentageToPx(100),
    width: widthPercentageToPx(100),
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
