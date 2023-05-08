import { Text, View, StyleSheet } from "react-native";
import { heightPercentageToPx, widthPercentageToPx } from "../../../utils";
import RealizarBusqueda from "../../../assets/images/components/sources/RealizarBusqueda";
import NoResultados from "../../../assets/images/components/sources/NoResutados";

const ReplyMessage = (props) => {
  const { message } = props;

  return (
    <View style={styles.container}>
      {/* <Text>{message}</Text> */}
      {message == "reaBusq" ? (
        <RealizarBusqueda />
      ) : (
        <Text>Sin Resultados</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: heightPercentageToPx(5),
    width: widthPercentageToPx(90),
    display: "flex",
    alignContent: "center",
    alignItems: "center",
  },
});
export default ReplyMessage;
