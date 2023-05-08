import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import React, { useState } from "react";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";

import { InputWithIcon } from "../common/form/Input";
import { fetchPost, validatePhone } from "../../utils/functions";

import CloseLogin from "../../assets/images/auth/svg/CloseLogin";
import LoaderItemSwitch from "../common/loaders/LoaderItemSwitch";

const BusinessEmployeeLogin = ({ navigation, route }) => {
  const { type } = route.params;
  const [identification, setIdentification] = useState("");
  const [phone, setPhone] = useState("");
  const [loader, setLoader] = useState(false);
  const [reintentar, setReintentar] = useState(false);

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const handleIdentificationChange = (ident) => {
    setIdentification(ident);
  };

  const handlePhoneChange = (phon) => {
    setPhone(phon);
  };

  const returnPag = async () => {
    navigation.goBack();
    await AsyncStorage.clear();
  };

  const submitForm = async () => {
    if (identification != "" && phone != "") {
      if (!validatePhone(phone)) {
        showToast("El celular es incorrecto", "error");
      } else {
        setLoader(true);
        setReintentar(false);
        const typeCli = type === "business" ? 2 : 1;
        const body = `contactTipoClienteField=${typeCli}
            &contactIdentificacionField=${identification}
            &contactNumeroTelefonico=${phone}
            &contactApp=true`;
        const path = "usuario/saveUsuarioNew.php";
        const respApi = await fetchPost(path, body);
        const { status, data } = respApi;

        if (status) {
          const data = respApi.data;
          if (typeof data == "object") {
            await AsyncStorage.setItem("type", type);
            await AsyncStorage.setItem("identi", identification);
            await AsyncStorage.setItem("phone", phone);
            await AsyncStorage.setItem("code", data.codigo);
            navigation.navigate("CodeAuth", { type: "business" });
          } else {
            setLoader(false);
            showToast("El usuario o celular no son validos", "error");
          }
        } else {
          if (data == "limitExe") {
            setLoader(false);
            showToast("El servicio demoro mas de lo normal", "error");
            setReintentar(true);
          } else {
            setLoader(false);
            showToast("ocurrio un error en el sistema", "error");
          }
        }
      }
    } else {
      showToast("Todos los campos son requeridos", "error");
    }
  };

  return (
    <View style={styles.businessBackground(type)}>
      <View style={styles.formContainer}>
        <Pressable onPress={() => returnPag()}>
          <View style={styles.goBackButton}>
            <CloseLogin />
          </View>
        </Pressable>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImage} source={{ uri: images.whiteLogo }} />
        </View>

        <View style={styles.textsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.welcomeText}>SOY</Text>
            <Text style={styles.subtitle}>
              {type === "business" ? "EMPRESA" : "EMPLEADO"}
            </Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.welcomeDesc}>
              Por favor ingresa tu número de identificación y número de celular
            </Text>
          </View>
        </View>
        <View style={styles.textInputContainers}>
          <InputWithIcon
            icon={"user"}
            iconColor={type === "business" ? colors.mainBlue : colors.mainPink}
            iconSize={24}
            onInputChange={handleIdentificationChange}
            placeholder="Identificación"
            type="numeric"
            value={identification}
          ></InputWithIcon>
          <InputWithIcon
            icon={"mobile1"}
            iconColor={type === "business" ? colors.mainBlue : colors.mainPink}
            iconSize={24}
            onInputChange={handlePhoneChange}
            placeholder="Celular"
            type="numeric"
            value={phone}
          ></InputWithIcon>
          <Pressable onPress={() => submitForm()}>
            <View style={styles.asIngresaButton}>
              <Text style={{ color: colors.white }}>
                {!loader ? (
                  !reintentar ? (
                    "Ingresar"
                  ) : (
                    "Reintentar"
                  )
                ) : (
                  <LoaderItemSwitch />
                )}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.loginBackgroundImages}
          source={
            type === "business"
              ? images.businessLoginImage
              : images.employeeLoginImage
          }
        />
      </View>
    </View>
  );
};

export default BusinessEmployeeLogin;

const styles = StyleSheet.create({
  businessBackground: (type) => {
    return {
      backgroundColor: type === "business" ? colors.mainBlue : colors.mainPink,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: heightPercentageToPx(4),
      height: heightPercentageToPx(107),
    };
  },
  formContainer: {
    width: widthPercentageToPx(100),
    height: heightPercentageToPx(50),
  },
  textsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: widthPercentageToPx(100),
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 30,
  },
  logoImage: {
    width: widthPercentageToPx(35),
    height: heightPercentageToPx(9),
    overflow: "visible",
  },
  goBackButton: {
    position: "absolute",
    top: 20,
    left: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    height: 30,
    width: 30,
    zIndex: 99,
  },
  welcomeText: {
    fontFamily: "Poppins-Light",
    color: colors.white,
    ...getFontStyles(28),
  },
  subtitle: {
    ...getFontStyles(28),
    color: colors.white,
    fontFamily: "Poppins-Bold",
  },
  descriptionContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
    width: widthPercentageToPx(65),
    marginBottom: 20,
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.white,
    ...getFontStyles(13, 0.7, 1.2),
    textAlign: "center",
  },
  loginFormInput: {
    fontFamily: "Poppins-Regular",
    width: widthPercentageToPx(60),
    height: 50,
    margin: 5,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 7,
  },
  asIngresaButton: {
    backgroundColor: "transparent",
    fontFamily: "Poppins-Regular",
    height: 50,
    width: widthPercentageToPx(60),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: colors.white,
    zIndex: 99,
  },
  textInputContainers: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: widthPercentageToPx(100),
    marginTop: 10,
  },
  imageContainer: {
    height: heightPercentageToPx(45),
    width: widthPercentageToPx(100),
  },
  loginBackgroundImages: {
    height: "90%",
    width: "100%",
  },
});
