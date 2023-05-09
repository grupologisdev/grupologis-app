import { Entypo } from "@expo/vector-icons";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity, View } from "react-native";
import { colors } from "../../../utils";

const Pagination = (props) => {
  const { pagAct, cantInfo, changeOpt } = props;
  return (
    <View>
      {cantInfo != 0 && (
        <View style={styles.pagination}>
          <View>
            {pagAct > 1 && (
              <TouchableOpacity onPress={() => changeOpt(pagAct - 1)}>
                <View style={styles.backButtonPrevious}>
                  <Entypo
                    name="chevron-left"
                    size={30}
                    color={colors.purpleIcons}
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>
          <Text style={styles.textInfo}>
            {pagAct} de {cantInfo}
          </Text>
          <View>
            {pagAct != cantInfo && (
              <TouchableOpacity onPress={() => changeOpt(pagAct + 1)}>
                <View style={styles.backButtonPrevious}>
                  <Entypo
                    name="chevron-right"
                    size={30}
                    color={colors.purpleIcons}
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  pagination: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    marginBottom: 100,
  },
  backButtonPrevious: {},
  textInfo: {
    paddingTop: 6,
  },
});
