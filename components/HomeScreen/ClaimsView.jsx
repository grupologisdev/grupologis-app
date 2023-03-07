import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import {
  colors,
  employeeDownloadables,
  getFontStyles,
  heightPercentageToPx,
  images,
  widthPercentageToPx,
} from "../../utils";

import { useRef, useState } from "react";
import Layout from "../layout/Layout.jsx";
import MainCardInfo from "./homeView/MainCardInfo";
import ViewTitleCard from "./homeView/ViewTitleCard";

const Claim = (props) => {
  return (
    <Layout props={{ ...props }}>
      <ScrollView>
        <ViewTitleCard
          title={"Quejas y reclamos"}
          buttonText="+ Nueva"
          onPressAction={() => console.log("nueva queja")}
        />
        <MainCardInfo
          firstTitle={"Quejas"}
          secondTitle="y reclamos"
          description={
            "Podrás conocer el estado o trazabilidad de tus novedades"
          }
          image={images.employeeNimage}
        />
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  downloadContainer: {
    display: "flex",
    alignItems: "center",
  },
  welcomeText: {
    fontFamily: "Poppins-Bold",
    color: colors.mainBlue,
    ...getFontStyles(25),
  },
  toApp: {
    ...getFontStyles(17),
    fontFamily: "Poppins-Bold",
  },

  descriptionContainer: {
    width: widthPercentageToPx(60),
  },
  welcomeDesc: {
    fontFamily: "Poppins-Regular",
    color: colors.descriptionColors,
    ...getFontStyles(14, 0.5, 0.9),
  },

  workersImage: {
    height: heightPercentageToPx(20),
    width: widthPercentageToPx(40),
    left: 120,
    bottom: 105,
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
    height: heightPercentageToPx(20),
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
    height: 300,
    paddingTop: 10,
  },
  downloadableCardsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

export default Claim;
