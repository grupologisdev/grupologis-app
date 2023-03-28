import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { heightPercentageToPx, widthPercentageToPx } from "../../../../utils";
import Layout from "../../../layout/Layout";
import CardEinfo from "../../homeView/CardEinfo";
import ResumeList from "../../resumeView/ResumeList";

const ResumeView = (props) => {
  const { navigation } = props;
  return (
    <Layout props={{ ...props }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CardEinfo
          title={"Hojas de vida"}
          buttonText="  Buscar"
          onPressAction={() => setModal(!modal)}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
        />

        <ResumeList />
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
