import { Text } from "react-native";
import { View } from "react-native-animatable";
import GLButton from "../../../common/buttons/GLButton";
import LoaderItemSwitch from "../../../common/loaders/LoaderItemSwitch";
import { getSer } from "../../../../utils/axiosInstance";
import { useState } from "react";
import Toast from "react-native-toast-message";
import { widthPercentageToPx } from "../../../../utils";

const DeleteNovIng = (props) => {
  const { infoDel, showModal } = props;
  const [loader, setLoader] = useState(false);

  const showToast = (smg, type) => {
    Toast.show({
      type: type, //"success", error
      text1: smg,
      position: "bottom",
      visibilityTime: 2000,
    });
  };
  const deleteReg = async () => {
    const { id, emp, est } = infoDel;
    let path = "EliminarOrdenIngreso.php";
    path += `?empresa=${emp}&ID_oi=${id}`;
    path += `&estado=${est}`;

    const respApi = await getSer(path);
    const { status, data } = respApi;

    if (status) {
      if (data.status) {
        showModal(true);
        showToast("se elimino el registro correctamente", "success");
      } else {
        showModal(true);
        showToast("error al eliminar el registro", "error");
      }
    } else {
      showModal(true);
      showToast("error al eliminar el registro", "error");
    }
  };
  return (
    <View>
      <Text>Desea Eliminar este registro?</Text>

      <GLButton
        onPressAction={() => deleteReg()}
        type="default"
        placeholder={!loader ? "Eliminar" : <LoaderItemSwitch />}
        width={widthPercentageToPx(70)}
      />

      <GLButton
        onPressAction={() => showModal(true)}
        type="second"
        placeholder={"Cancelar"}
        width={widthPercentageToPx(70)}
      />
    </View>
  );
};

export default DeleteNovIng;
