import { Text, View } from "react-native";

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
        <View>
          {/* <Text>{JSON.stringify(info)}</Text> */}
          <Text>Identificacion</Text>
          <Text>{info.Documento.trim()}</Text>

          <Text>Fecha</Text>
          <Text>{info.Fecha.trim()}</Text>

          <Text>Asunto</Text>
          <Text>{info.Asunto.trim()}</Text>

          <Text>Comentario</Text>
          <Text>{info.Comentario.trim()}</Text>

          <Text>Estado</Text>
          <Text>{info.Estado}</Text>

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
          {modul == "Quejas" && (
            <>
              <Text>Respuesta</Text>
              <Text>{info.Respuesta.trim()}</Text>
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default ShowInfo;
