import { RefreshControl, ScrollView, Text } from "react-native";
import Layout from "../components/layout/Layout";
import React, { useState } from "react";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";
import LoaderItemSwitch from "../components/common/loaders/LoaderItemSwitch";
import LoaderItemSwitchDark from "../components/common/loaders/LoaderItemSwitchDark";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPost } from "../utils/functions";
import CapacitationsList from "../components/HomeScreen/capacitationsView/CapacitationsList";
import { useFocusEffect } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const Capacitations = (props) => {
  const { navigation } = props;
  const [refreshing, setRefreshing] = useState(false);
  const [loader, setLoader] = useState(false);
  const [listCapac, setListCapac] = useState([]);

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const getCapacitations = async () => {
    setLoader(true);
    let infoLog = await AsyncStorage.getItem("logged");
    infoLog = JSON.parse(infoLog);
    const empSel = infoLog.empSel;
    const codEmp = infoLog.codEmp.trim();

    const info = `NitCliente=${codEmp}`;
    const path = "usuario/getCapacitacionesEmp.php";

    const respApi = await fetchPost(path, info);
    const { status, data } = respApi;
    if (status) {
      if (data.Correcto == 1 && data.Programa.length > 0) {
        setLoader(false);
        setListCapac(data.Programa);
      } else {
        setLoader(false);
        setListCapac([]);
      }
    } else {
      setLoader(false);
      showToast("Error en el servidor", "error");
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getCapacitations();
      return () => {};
    }, [])
  );

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await getCapacitations();
    setRefreshing(false);
  }, []);

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
          title={"Capacitaciones"}
          showButton={false}
          showInput={false}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
        />

        {!loader ? (
          <CapacitationsList listado={listCapac} />
        ) : (
          <LoaderItemSwitchDark />
        )}
      </ScrollView>
    </Layout>
  );
};

export default Capacitations;
