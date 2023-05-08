import { useState } from "react";
import { Modal, ScrollView, StyleSheet, View } from "react-native";
import { images } from "../utils";

import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import ViewTitleCard from "../components/HomeScreen/homeView/ViewTitleCard";
import FormNew from "../components/HomeScreen/newsView/FormNews";
import NewsList from "../components/HomeScreen/newsView/NewsList";
import Layout from "../components/layout/Layout.jsx";

const News = (props) => {
  const [modal, setModal] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const closeAfterConfirm = () => {
    setShowForm(false);
    setTimeout(() => {
      setModal(false);
    }, 3000);
  };
  return (
    <Layout props={{ ...props }}>
      <ViewTitleCard
        title={"Novedades"}
        buttonText="+ Nueva"
        onPressAction={() => setModal(!modal)}
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <MainCardInfo
          firstTitle={"Sistema"}
          secondTitle="de novedades"
          description={
            "Podrás conocer el estado o trazabilidad de tus novedades"
          }
          image={images.employeeNimage}
        />
        <NewsList />
      </ScrollView>
      {/* {modal && (
        <Modal animationType="slide" visible={modal} transparent={true}>
          <View style={styles.modalContainer}>
            {showForm && (
              <FormNew
                closeModal={() => setModal(false)}
                onConfirm={closeAfterConfirm}
              />
            )}
          </View>
        </Modal>
      )} */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default News;
