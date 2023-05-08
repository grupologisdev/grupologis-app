import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import resumeContext from "../../../context/resume/resumeContext";
import {
  colors,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../../../utils";

import ResumeCard from "./ResumeCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchPost } from "../../../utils/functions";
import Toast from "react-native-toast-message";
import { Text } from "react-native";
import LoaderItemSwitch from "../../common/loaders/LoaderItemSwitch";
import ReplyMessage from "../../common/messages/ReplyMessage";

const showToast = (smg, type) => {
  Toast.show({
    type: type, //"success", error
    text1: smg,
    position: "bottom",
    visibilityTime: 2000,
  });
};

const ResumeList = (props) => {
  const { idenHoja } = props;
  // const { resumeList } = useContext(resumeContext);
  const [resumeList, setResumeList] = useState([]);
  const [codEmpleado, setCodEmpleado] = useState(null);
  const [prevIdenHoja, setPrevIdenHoja] = useState(null);
  const [loading, setLoading] = useState(true);

  let buscar = true;

  useEffect(() => {
    if (prevIdenHoja !== idenHoja) {
      buscar = false;
      // Verifica si idenHoja ha cambiado
      setPrevIdenHoja(idenHoja); // Actualiza el valor anterior

      if (idenHoja == "") {
        buscar = true;
        setLoading(true);
        setCodEmpleado("%");
      } else if (idenHoja.length > 5) {
        buscar = true;
        setLoading(true);

        setCodEmpleado(idenHoja);
      } else {
        buscar = false;
        setCodEmpleado(null);
      }
    }

    if (buscar) {
      if (codEmpleado != null) {
        const getHojaVida = async (codEmpleado) => {
          let infoLog = await AsyncStorage.getItem("logged");
          infoLog = JSON.parse(infoLog);
          const empSel = infoLog.empSel;
          const codEmp = infoLog.codEmp;
          const info = `NitCliente=${codEmp}&Empresa=${empSel}&CodEmpleado=${codEmpleado}`;

          const path = "usuario/getDocs.php";
          const respApi = await fetchPost(path, info);

          const { status, data } = respApi;
          if (status) {
            if (data.Docs.length > 0) {
              setResumeList(data.Docs);
              setLoading(false);
            } else {
              setResumeList([]);
              setLoading(false);
            }
          } else {
            showToast("Error al buscar las hojas de vida", "error");

            setLoading(false);
          }
        };
        getHojaVida(codEmpleado);
      }
    }
  }, [idenHoja, prevIdenHoja, codEmpleado, loading]);

  return (
    <View style={styles.newsListContainer}>
      <View>
        {/* {loading ? <LoaderItemSwitch /> : null} */}
        {!loading ? (
          resumeList.length > 0 ? (
            resumeList.map((n4, index4) => <ResumeCard key={index4} {...n4} />)
          ) : (
            <ReplyMessage message="SinRes" />
          )
        ) : (
          <LoaderItemSwitch />
        )}
      </View>
    </View>
  );
};

export default ResumeList;

const styles = StyleSheet.create({
  newsListContainer: {
    width: widthPercentageToPx(90),
    height: "100%",
    marginTop: heightPercentageToPx(1),
  },
  titleContainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  firstTitle: {
    fontFamily: "Poppins-Regular",
    ...getFontStyles(18, 0.5, 0.9),
  },
  secondTitle: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(18, 0.5, 0.9),
  },
});
