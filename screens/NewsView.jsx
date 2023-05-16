import { useState } from "react";
import { Modal, ScrollView, StyleSheet, View, Text } from "react-native";
import { images, widthPercentageToPx } from "../utils";
import { heightPercentageToPx } from "../utils";

import MainCardInfo from "../components/HomeScreen/homeView/MainCardInfo";
import ViewTitleCard from "../components/HomeScreen/homeView/ViewTitleCard";
import FormNew from "../components/HomeScreen/newsView/FormNews";
import NewsList from "../components/HomeScreen/newsView/NewsList";
import Layout from "../components/layout/Layout.jsx";

import DevIcon from "../assets/images/DevIcon";

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
        {/* <NewsList /> */}
        <ScrollView>
          <View style={styles.containerInfo}>
            <DevIcon />
            <Text style={styles.ttlInfo}>
              Este modulo estara disponible muy pronto
            </Text>
            <Text style={styles.txtInfo}>
              trabajamos para que este disponible lo antes posible.
            </Text>
          </View>
        </ScrollView>
      </ScrollView>
      {modal && (
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
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerInfo: {
    marginTop: heightPercentageToPx(5),
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
  ttlInfo: {
    textAlign: "center",
    fontFamily: "Volks-Bold",
    fontSize: 24,
    width: widthPercentageToPx(65),
    marginTop: 20,
    marginBottom: 5,
  },
  txtInfo: {
    textAlign: "center",
    fontFamily: "Volks-Serial-Light",
    fontSize: 17,
    width: widthPercentageToPx(65),
  },
});

export default News;
