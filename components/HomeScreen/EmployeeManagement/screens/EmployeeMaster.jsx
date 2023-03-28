import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Layout from "../../../layout/Layout";
import CardEinfo from "../../homeView/CardEinfo";
import EmployeeMasterForm from "./components/EmployeeMasterForm";

const EmployeeMaster = (props) => {
  const { navigation } = props;
  return (
    <Layout props={{ ...props }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CardEinfo
          title={"Maestro empleado"}
          buttonText="  Buscar"
          showInput={false}
          handleGoBack={() => navigation.navigate("EmployeeManagement")}
          handleChangeText={(e) => console.log(e)}
        />
        <EmployeeMasterForm />
      </ScrollView>
    </Layout>
  );
};

export default EmployeeMaster;

const styles = StyleSheet.create({});
