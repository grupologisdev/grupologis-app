import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { colors, heightPercentageToPx } from "../../utils";
import Header from "./Header";
import { Text } from "react-native";
import LoaderProgContext from "../../context/loader/LoaderProgContext";
import LoaderProgress from "../common/loaders/LoaderProgress";

const Layout = ({ children, props }) => {
  const { showLoader } = useContext(LoaderProgContext);

  return (
    <View style={styles.mainContainer}>
      <Header />
      {showLoader && <LoaderProgress />}
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    height: heightPercentageToPx(100),
    backgroundColor: colors.generalBackgroundColor,
  },
});
