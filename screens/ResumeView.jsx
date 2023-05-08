import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import CardEinfo from "../components/HomeScreen/homeView/CardEinfo";
import ResumeList from "../components/HomeScreen/resumeView/ResumeList";
import Layout from "../components/layout/Layout";
import { heightPercentageToPx, widthPercentageToPx } from "../utils";
import { useFocusEffect } from "@react-navigation/native";

const ResumeView = (props) => {
  const { navigation } = props;
  const [identif, setIdentif] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      handleInputChange("");
      return () => {};
    }, [])
  );

  const handleInputChange = (text) => {
    setIdentif(text);
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);

    handleInputChange("");
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
          title={"Hojas de vida"}
          showInput={true}
          onPressAction={() => setModal(!modal)}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
          onInputChange={handleInputChange}
        />
        <ResumeList idenHoja={identif} />
      </ScrollView>
    </Layout>
  );
};

export default ResumeView;

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
