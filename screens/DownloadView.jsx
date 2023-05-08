import {
  Image,
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  View,
} from "react-native";
import {
  businessDownloadables,
  colors,
  employeeDownloadables,
  getFontStyles,
  heightPercentageToPx,
  widthPercentageToPx,
} from "../utils";

import { useContext, useState } from "react";
import DownloadableCard from "../components/HomeScreen/downloadView/DownloadableCard";
import Layout from "../components/layout/Layout.jsx";
import authContext from "../context/auth/authContext";

import NewsDailyHome from "../components/HomeScreen/newsDaily/newsDailyHome";

import SvgLaboralCertificate from "../assets/images/home/downloadView/SvgLaboralCertificate";
import SvgLaboralCertificate2 from "../assets/images/home/downloadView/SvgLaboralCertificate2";
import SvglaboralCertificate3 from "../assets/images/home/downloadView/SvgLaboralCertificate3";
import SvgPayrollFlyer from "../assets/images/home/downloadView/SvgPayrollFlyer";

import SvgAusentism from "../assets/images/home/downloadView/SvgAusentism";
import SvgCapacitations from "../assets/images/home/downloadView/SvgCapacitations";
import SvgHumanResourcesIndicator from "../assets/images/home/downloadView/SvgHumanResourcesIndicator";
import { LoaderProgContextProvider } from "../context/loader/LoaderProgContext";

const displaySvg = (type) => {
  switch (type) {
    case "laboralCertificate":
      return <SvgLaboralCertificate />;
    case "payrollFlyer":
      return <SvgPayrollFlyer />;
    case "laboralCertificate2":
      return <SvgLaboralCertificate2 />;
    case "laboralCertificate3":
      return <SvglaboralCertificate3 />;
    case "generalPayroll":
      return <SvgPayrollFlyer />;
    case "humanResourcesIndicator":
      return <SvgHumanResourcesIndicator />;
    case "capacitations":
      return <SvgCapacitations />;
    case "ausentism":
      return <SvgAusentism />;
    default:
      return null;
  }
};

const Download = (props) => {
  const { userData } = useContext(authContext);
  const [dataCards, setDataCards] = useState(
    userData.role === "employee" ? employeeDownloadables : businessDownloadables
  );
  return (
    <Layout props={{ ...props }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.downloadContainer}>
          <View style={styles.infoContainer}>
            <View style={styles.title}>
              <Text style={styles.welcomeText}>Descarga!</Text>
              <Text style={styles.subtitle}>Certificados y documentos</Text>

              <View style={styles.descriptionContainer}>
                <Text style={styles.welcomeDesc}>
                  Trabajamos para mejorar tu experiencia como empleado o
                  empresa.
                </Text>
              </View>
            </View>
            <Image
              style={styles.workersImage}
              source={require("../assets/images/home/banners/imgDownloadDocuments.png")}
            />
          </View>
          <View style={styles.containerScroll}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.downloadableCardsContainer}>
                {dataCards.map((e) => (
                  <DownloadableCard
                    key={e.id}
                    desc={e.description}
                    image={displaySvg(e.id)}
                    title={e.title}
                    id={e.id}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.newsDailyContainer}>
          <NewsDailyHome />
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  downloadContainer: {
    display: "flex",
    alignItems: "center",
  },
  newsDailyContainer: {
    display: "flex",
    alignItems: "center",
    width: widthPercentageToPx(90),
    paddingBottom: heightPercentageToPx(15),
  },
  welcomeText: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(25),
  },
  subtitle: {
    ...getFontStyles(17),
    fontFamily: "Poppins-Bold",
  },
  toApp: {
    ...getFontStyles(17),
    fontFamily: "Poppins-Bold",
  },

  descriptionContainer: {
    width: widthPercentageToPx(70),
  },
  welcomeDesc: {
    fontFamily: "Volks-Serial-Light",
    color: colors.descriptionColors,
    ...getFontStyles(14, 0.5, 1.1),
  },

  workersImage: {
    height: heightPercentageToPx(30),
    width: widthPercentageToPx(80),
    left: 21,
    bottom: 90,
  },

  textInputContainers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 8,
    width: widthPercentageToPx(65),
    height: 50,
    marginTop: 10,
  },
  infoContainer: {
    width: widthPercentageToPx(90),
    height: heightPercentageToPx(33),
    overflow: "hidden",
    marginBottom: 7,
    backgroundColor: colors.white,
    borderRadius: 17,
    alignItems: "center",
  },
  title: {
    width: "100%",
    padding: 20,
  },
  containerScroll: {
    width: widthPercentageToPx(90),
    height:
      Platform.OS === "android"
        ? heightPercentageToPx(34)
        : heightPercentageToPx(31),
    paddingTop: 10,
  },
  downloadableCardsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

export default Download;
