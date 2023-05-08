import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";
// cambiar vista Download al terminar vista claim
import { Picker } from "@react-native-picker/picker";
import { useContext, useEffect, useRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import authContext from "../../context/auth/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPost } from "../../utils/functions";

import FormuBussines from "./FormBussinessEntry/FormBussinesEntry";
import LoaderItemSwitch from "../common/loaders/LoaderItemSwitch";
import LoadFullScreen from "../../components/common/loaders/LoadFullScreen";
import Toast from "react-native-toast-message";

const BusinessE = ({ navigation }) => {
  const { setBusiness } = useContext(authContext);
  const [businessOptionsNew, setBusinessOption] = useState([]);
  const pickerRef = useRef(null);
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [loaderComp, setLoaderComp] = useState(false);
  const [loader, setLoader] = useState(false);
  const [optionsHtml, setOptionsHtml] = useState("");
  const [reintentar, setReintentar] = useState(false);

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const returnPag = async () => {
    await AsyncStorage.clear();
    navigation.goBack();
    // navigation.navigate("Login");
  };

  const getOptionsBusiness = async () => {
    setLoaderComp(true);
    const type = await AsyncStorage.getItem("type");
    const typeCli = type === "business" ? 2 : 1;
    const identification = await AsyncStorage.getItem("identi");
    const phone = await AsyncStorage.getItem("phone");

    let body = `tipousuarioId=${typeCli}&identificacionId=${identification}`;
    body += `&contactNumeroTelefonico=${phone}`;
    const path = "usuario/getEmpresa.php";
    const respApi = await fetchPost(path, body);

    if (respApi.status) {
      const data = respApi.data;
      if (data != "falseEmpresa") {
        setOptionsHtml(data);
      } else {
        showToast("No tiene acceso al sistema", "error");
      }
    } else {
      showToast("Error en el sistema", "error");
    }
  };

  useEffect(() => {
    getOptionsBusiness();
  }, []);

  useEffect(() => {
    if (optionsHtml != "") {
      setLoaderComp(true);
      const regex =
        /<option[^>]*value=['"]([^'"]*)['"][^>]*>([^<]*)<\/option>/g;
      const result = [];

      [...optionsHtml.matchAll(regex)].forEach((match, idx) => {
        result.push({
          label: match[2],
          value: match[1] || null,
        });
      });

      setBusinessOption((businessOptionsNew) =>
        businessOptionsNew.concat(result)
      );
      setLoaderComp(false);
    }
  }, [optionsHtml]);

  const handleSelectBusiness = async () => {
    if (selectedBusiness != null) {
      setLoader(true);
      setReintentar(false);
      const type = await AsyncStorage.getItem("type");

      const typeCli = type === "business" ? 2 : 1;
      const identification = await AsyncStorage.getItem("identi");

      const info = `empresaId=${selectedBusiness}&identificacionId=${identification}`;
      const path =
        typeCli === 1
          ? "usuario/getPerfilInfo.php"
          : "usuario/getPerfilClienteInfo.php";
      const respApi = await fetchPost(path, info);

      const { status, data } = respApi;
      if (status) {
        if (typeof data === "object") {
          data.codEmp = identification;
          data.empSel = selectedBusiness;
          data.type = type;
          await AsyncStorage.clear();
          const loggedIn = JSON.stringify(data);
          await AsyncStorage.setItem("logged", loggedIn);
          navigation.navigate("Home");
        } else {
          showToast("ocurrio un error en el sistema", "error");
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
    } else {
      showToast("Seleccione una empresa", "error");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={64}
    >
      {!loaderComp ? (
        <View style={styles.container}>
          <Pressable onPress={() => returnPag()}>
            <View style={styles.goBackButton}>
              <Feather name="x" size={24} color="black" />
            </View>
          </Pressable>
          <View style={styles.topContainer}>
            <Image
              style={styles.logoImage}
              source={{ uri: images.colorLogo }}
            />
            <View style={styles.title}>
              <Text style={styles.subtitle}>Elija</Text>
              <Text style={styles.subtitle}>la empresa.</Text>
              <View style={styles.descriptionContainer}>
                <Text style={styles.welcomeDesc}>
                  Seleccione la empresa donde desea realizar la consulta.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.formContent}>
            <View style={styles.pickerContainer}>
              <FormuBussines
                title="Seleccione la empresa"
                list={businessOptionsNew}
                onOptionSel={(selected) => setSelectedBusiness(selected)}
              />
            </View>

            <Pressable
              onPress={() => handleSelectBusiness()}
              style={styles.pressable}
            >
              <View style={styles.asBusinessButton}>
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

          <View style={styles.imageContainer}>
            <Image
              style={styles.loginBackgroundImages}
              // source={{ uri: images.loginImage }}
              source={images.loginImage}
            />
          </View>
        </View>
      ) : (
        <LoadFullScreen />
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.generalBackgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: heightPercentageToPx(4),
    height: heightPercentageToPx(107),
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    // height: heightPercentageToPx(100), // The height percentage was changed so that the box has 100%
    width: widthPercentageToPx(75),
  },
  // imageContainer: {
  //   height: heightPercentageToPx(10),
  //   width: widthPercentageToPx(100),
  // },
  logoImage: {
    width: widthPercentageToPx(35),
    height: heightPercentageToPx(9),
    marginTop: 50,
    marginBottom: 50,
    overflow: "visible",
  },
  welcomeText: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(30),
  },
  subtitle: {
    ...getFontStyles(22),
    fontFamily: "Poppins-Bold",
  },
  descriptionContainer: {
    width: widthPercentageToPx(60),
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    marginTop: 1,
    ...getFontStyles(14, 0.5, 0.9),
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: widthPercentageToPx(100),
    marginTop: 30,
  },
  selectedBusiness: {
    fontFamily: "Poppins-Light",
    color: colors.descriptionColors,
    ...getFontStyles(18, 0.5, 0.9),
  },
  asEmployeeButton: {
    backgroundColor: colors.mainPink,
    fontFamily: "Poppins-Regular",
    height: 55,
    width: widthPercentageToPx(65),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  pressable: {
    zIndex: 99999,
  },
  pickerContainer: {
    zIndex: 99,
  },
  asBusinessButton: {
    backgroundColor: colors.mainBlue,
    fontFamily: "Poppins-Regular",
    height: 55,
    width: widthPercentageToPx(65),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },
  loginBackgroundImages: {
    width: "100%",
    height: "100%",
  },
  selectorContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: widthPercentageToPx(65),
    height: heightPercentageToPx(7),
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: colors.white,
  },
  goBackButton: {
    position: "absolute",
    top: 20,
    left: widthPercentageToPx(-45),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    opacity: 0.4,
    borderRadius: 15,
    height: 30,
    width: 30,
  },
});

export default BusinessE;
