import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import UserForm from "../components/HomeScreen/profileView/UserForm";
import UserInfo from "../components/HomeScreen/profileView/UserInfo";
import Layout from "../components/layout/Layout";
import authContext from "../context/auth/authContext";
import { heightPercentageToPx, widthPercentageToPx } from "../utils";

const UserView = ({ props }) => {
  const { userData, updateUser } = useContext(authContext);
  const [data, setData] = useState({ ...userData });

  const handleChangeInput = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const handleUpdateUser = () => {
    updateUser(data);
  };
  return (
    <Layout props={{ ...props }}>
      <ScrollView
        style={styles.userView}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <UserInfo data={data} />
        <UserForm
          userData={data}
          handleChange={handleChangeInput}
          handleUpdateUser={handleUpdateUser}
        />
      </ScrollView>
    </Layout>
  );
};

export default UserView;

const styles = StyleSheet.create({
  userView: {
    height: heightPercentageToPx(100),
    width: widthPercentageToPx(100),
  },
});
