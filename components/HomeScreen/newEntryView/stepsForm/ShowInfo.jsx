import { StyleSheet, Text, View } from "react-native";
import StatusLine from "../../../common/StatusLine";
import { colors, getFontStyles } from "../../../../utils";
import InfoClaim from "../../../../assets/images/components/infoModal/InfoClaim";

const ShowInfo = ({ modul, info }) => {
  return (
    <View>
      {modul == "NovIngreso" ? (
        <View>
          {/* <Text>{JSON.stringify(info)}</Text> */}
          <Text>Identificacion</Text>
          <Text>{info.cod_emp.trim()}</Text>

          <Text>Apellidos</Text>
          <Text>
            {info.ap1_emp.trim()} {info.ap2_emp.trim()}
          </Text>

          <Text>Nombre</Text>
          <Text>
            {info.nom1_emp.trim()} {info.nom2_emp.trim()}
          </Text>

          <Text>Celular</Text>
          <Text>{info.cel_emp.trim()}</Text>

          <Text>Correo</Text>
          <Text>{info.e_mail.trim()}</Text>

          <Text>Tipo Novedad</Text>
          <Text>{info.tip_nov.trim()}</Text>

          <Text>Estado</Text>
          <Text>{info.estado.trim()}</Text>

          <Text>Fecha Ingreso</Text>
          <Text>{info.fecha_ing.trim()}</Text>

          <Text>Fecha Egreso</Text>
          <Text>{info.fecha_egr.trim()}</Text>

          <Text>Empresa</Text>
          <Text>{info.empresa_grupo.trim()}</Text>

          <Text>Fecha Realizada</Text>
          <Text>{info.fecha_oi.trim()}</Text>

          <Text>Convocatoria</Text>
          <Text>{info.cod_conv.trim()}</Text>

          <Text>Cliente</Text>
          <Text>{info.cod_cli.trim()}</Text>

          <Text>Salario</Text>
          <Text>
            {info.tip_sal.trim()} {parseInt(info.sal_bas.trim())}
          </Text>

          <Text>Tipo trabajo</Text>
          <Text>{info.tip_tra.trim()}</Text>

          {info.camisa_emp && (
            <View>
              <Text>Talla camiseta</Text>
              <Text>{info.camisa_emp.trim()}</Text>

              <Text>Talla overol</Text>
              <Text>{info.overol_emp.trim()}</Text>

              <Text>Talla guantes</Text>
              <Text>{info.guantes_emp.trim()}</Text>

              <Text>Talla pantalon</Text>
              <Text>{info.pantalon_emp.trim()}</Text>
            </View>
          )}
        </View>
      ) : (
        <View style={styles.infoBoxContainer}>
          <View style={styles.infoBoxImag}>
            <InfoClaim />
          </View>
          <View>
            {/* <Text>{JSON.stringify(info)}</Text> */}
            <StatusLine status={info.Estado} />
          </View>
          <View style={styles.infoBox}>
            <View>
              <Text style={styles.textHead}>Año</Text>
              <Text>{info.Fecha.trim().split("/")[2]}</Text>
            </View>
            <View>
              <Text style={styles.textHead}>Mes</Text>
              <Text>{info.Fecha.trim().split("/")[1]}</Text>
            </View>
            <View>
              <Text style={styles.textHead}>No. Radicado</Text>
              <Text>{info.Documento.trim()}</Text>
            </View>
          </View>

          <Text style={styles.secondTitle}>{info.Asunto.trim()}</Text>
          <Text style={styles.descrip}>{info.Comentario.trim()}</Text>

          {modul == "Capac" && (
            <>
              <Text>Personal</Text>
              <Text>{info.Personal.trim()}</Text>
              <Text>Tema</Text>
              <Text>{info.Tema.trim()}</Text>
              {info.Tipo != null && (
                <>
                  <Text>Tipo</Text>
                  <Text>{info.Tipo.trim()}</Text>
                </>
              )}
            </>
          )}

          {modul == "Quejas" && info.Respuesta.trim() != "" && (
            <>
              <Text>Respuesta</Text>
              <Text style={styles.descrip}>{info.Respuesta.trim()}</Text>
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default ShowInfo;

const styles = StyleSheet.create({
  infoBoxContainer: {
    marginBottom: 40,
  },
  infoBox: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  secondTitle: {
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    ...getFontStyles(18, 0.5, 0.9),
  },
  descrip: {
    fontFamily: "Volks-Serial-Light",
    color: colors.descriptionColors,
    ...getFontStyles(14, 1, 1.2),
    textAlign: "center",
  },
  textHead: {
    fontFamily: "Volks-Serial-Medium",
    color: colors.boldGray,
    ...getFontStyles(14, 0.5, 0.9),
  },
  infoBoxImag: {
    alignItems: "center",
  },
});
