import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import UserForm from "../components/HomeScreen/profileView/UserForm";
import UserInfo from "../components/HomeScreen/profileView/UserInfo";
import Layout from "../components/layout/Layout";
import authContext from "../context/auth/authContext";
import { heightPercentageToPx, widthPercentageToPx } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPost } from "../utils/functions";
import Toast from "react-native-toast-message";
import LoadFullScreen from "../components/common/loaders/LoadFullScreen";
import { useFocusEffect } from "@react-navigation/native";

const UserView = (props) => {
  const { navigation } = props;
  const { userData, updateUser } = useContext(authContext);
  const [dataUs, setDataUs] = useState({ ...userData });
  const [loaderComp, setLoaderComp] = useState(false);

  const getUserDataFromAsyncStorage = async () => {
    try {
      const userDataJSON = await AsyncStorage.getItem("logged");
      if (userDataJSON !== null) {
        const userData = JSON.parse(userDataJSON);
        setDataUs(userData);
        setLoaderComp(false);
      }
    } catch (error) {
      console.log(error);
      setLoaderComp(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setLoaderComp(true);
      getUserDataFromAsyncStorage();
      //
      return () => {};
    }, [])
  );

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const handleChangeInput = (field, value) => {
    setDataUs({
      ...dataUs,
      [field]: value,
    });
  };

  const handleUpdateUser = async () => {
    try {
      let infoLog = await AsyncStorage.getItem("logged");
      infoLog = JSON.parse(infoLog);

      let path;
      let info;
      if (infoLog.type === "employee") {
        // es 1
        path = "usuario/getLoadEditar.php";
        info = `CodEmpleado=${dataUs.codEmp.trim()}&Direccion=${dataUs.dir_res.trim()}&Email=${dataUs.e_mail.trim()}`;
        info += `&Telefono=${dataUs.tel_res.trim()}&Celular=${dataUs.tel_cel.trim()}`;
        info += `&EstadoCivil=${dataUs.Id_Est_Civ.trim()}&Empresa=${dataUs.empSel.trim()}`;
      } else {
        // es 2
        path = "usuario/getLoadEditarClien.php";
        info = `NitCliente=${dataUs.codEmp.trim()}&Direccion=${dataUs.Direccion.trim()}`;
        info += `&Email=${dataUs.Correo.trim()}&Telefono=${dataUs.Telefono.trim()}`;
      }

      const respApi = await fetchPost(path, info);

      const { status, data } = respApi;
      if (status) {
        if (data == "Perfil actualizado correctamente") {
          showToast("Perfil actualizado correctamente", "success");

          await updateUser(dataUs);
          await AsyncStorage.setItem("logged", JSON.stringify(dataUs));
        } else {
          showToast("Ocurrio un error al actualizar", "error");
        }
      } else {
        showToast("Ocurrio un error en el servidor", "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout props={{ ...props }}>
      <ScrollView
        style={styles.userView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        {!loaderComp ? (
          <>
            <UserInfo userData={dataUs} />
            <UserForm
              userData={dataUs}
              navigation={navigation}
              handleChange={handleChangeInput}
              handleUpdateUser={handleUpdateUser}
            />
          </>
        ) : (
          <LoadFullScreen />
        )}
      </ScrollView>
    </Layout>
  );
};

export default UserView;

const styles = StyleSheet.create({
  userView: {
    height: heightPercentageToPx(100),
    width: widthPercentageToPx(100),
    marginTop: heightPercentageToPx(2),
  },
});
