import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToPx } from "../../../utils";
import ReplyMessage from "../../common/messages/ReplyMessage";
import CapacitationsCard from "./CapacitationCard";

const CapacitationsList = ({ listado }) => {
  return (
    <View style={styles.newsListContainer}>
      <View>
        {listado.length > 0 ? (
          listado.map((ca, index) => <CapacitationsCard key={index} {...ca} />)
        ) : (
          <ReplyMessage message="SinRes" />
        )}
      </View>
    </View>
  );
};

export default CapacitationsList;

const styles = StyleSheet.create({
  newsListContainer: {
    width: widthPercentageToPx(90),
    height: "100%",
  },
});
