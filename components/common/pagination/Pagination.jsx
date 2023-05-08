import { StyleSheet, Text } from "react-native";
import { TouchableOpacity, View } from "react-native";

const Pagination = (props) => {
  const { pagAct, cantInfo, changeOpt } = props;
  return (
    <View style={styles.pagination}>
      {cantInfo != 0 && (
        <View>
          {pagAct > 1 && (
            <TouchableOpacity onPress={() => changeOpt(pagAct - 1)}>
              <Text>Ant</Text>
            </TouchableOpacity>
          )}
          <Text>
            {pagAct} de {cantInfo}
          </Text>
          {pagAct != cantInfo && (
            <TouchableOpacity onPress={() => changeOpt(pagAct + 1)}>
              <Text>Sig</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  pagination: {
    marginBottom: 160,
  },
});
