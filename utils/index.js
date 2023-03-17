import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import iconCertificadoLaboral from "../assets/images/home/downloadView/iconCertificadoLaboral.svg";
import iconHojaDeVida from "../assets/images/home/downloadView/iconHojadevida.svg";
import iconIngresoYretencion from "../assets/images/home/downloadView/iconIngresoYretencion.svg";
import iconVolanteDeNomina from "../assets/images/home/downloadView/iconVolanteDeNomina.svg";

const permisosImage = require("../assets/images/home/newsView/mano.png");
const incapacidadesImage = require("../assets/images/home/newsView/medico.png");
const vacacionesImage = require("../assets/images/home/newsView/vacacones.png");
const retirosImage = require("../assets/images/home/newsView/retiros.png");
const historiaLaboralImage = require("../assets/images/home/newsView/hlaboral.png");

export const getFontStyles = (
  size,
  ptPercentage = 0.6,
  lhPercentage = 0.75
) => {
  return {
    fontSize: size,
    lineHeight: size * lhPercentage,
    paddingTop: size - size * ptPercentage,
  };
};

export const colors = {
  light: "#ffff",
  white: "#FFFFFF",
  mainBackgroundColor: "#f0f0fd",
  generalBackgroundColor: "#F1F1FE",
  mainBlue: "#1A68FC",
  buttonsColor: "#999AF6",
  notificationsBackgroundColor: "#F1F1FE",
  formInputsColorBackground: "#F1F1FE",
  mainPink: "#D6007F",
  descriptionColors: "#808080",
  gray: "#CCCCCC",
  descarga: "#67C9B9",
  black: "#000000",
  lightGray: "#F7F7F7",
  darkGray: "#606060",
  yellow: "#FDA428",
  purpleIcons: "#9293F5",
  green: "#67C9B9",
  red: "#FF6B86",
  inputBackground: "#EBEBFF",
  stepGray: "#D9D9D9",
  boldRed: "#FF002E",
  boldGreen: "#00FF38",
  boldGray: "#989898",
};

export const images = {
  loginImage:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FLoginWorkers.png?alt=media&token=f5dd37cd-ee96-4f3c-a7f6-db0a2bc37549",
  colorLogo:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FlogoColor.png?alt=media&token=cce21b6a-ad7d-4da4-9015-ec672632f72d",
  whiteLogo:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FwhiteColor.png?alt=media&token=d506f814-bc0b-4f78-9b28-76460324332a",
  BusinessEmployeeLoginImage:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Fworkers.png?alt=media&token=471853f4-fa12-4500-8113-45871c6829fd",
  employeeLoginImage:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Fbusiness.png?alt=media&token=65d34ae8-2712-4304-ba00-232acdfad60f",
  payrollFlyer:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Ficons-sidebar-m-02.svg.png?alt=media&token=faad7c32-b792-4417-8cd8-bca82cf81f0e",
  certificadoImage3:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2Ficons-sidebar-m-03.svg.png?alt=media&token=0e81171e-bf75-48a7-b321-542940756328",
  certificadoImage4:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FGrupo%2063.png?alt=media&token=0d6c5a70-2c24-42a3-aa79-46e8096b3ddc",
  employeeNimage:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FEnmascarar_grupo_33x%201.png?alt=media&token=747c3d91-3780-4617-8482-ae8fe7d70fa5",
  checkImage:
    "https://firebasestorage.googleapis.com/v0/b/grupologis-app.appspot.com/o/images%2FcheckImage.png?alt=media&token=66e7b9e5-9079-4dc8-829a-ebff3d983334",
};

export const svg = {
  certificadoLaboral: iconCertificadoLaboral,
  volanteDeNomina: iconVolanteDeNomina,
  ingresoYretencion: iconIngresoYretencion,
  hojaDeVida: iconHojaDeVida,
};

export const widthPercentageToPx = (percentage) => {
  return (windowWidth * percentage) / 100;
};

export const heightPercentageToPx = (percentage) => {
  return (windowHeight * percentage) / 100;
};

export const notificationInfo = [
  {
    id: "noti1",
    title: "Su solicitud de permiso ha sido enviada",
    description:
      "Recuerde estar pendiente a su correo para recibir la respuesta.",
  },
  {
    id: "noti2",
    title: "Su solicitud de permiso ha sido aprobada por empleador",
    description:
      "Recuerde estar pendiente a su correo para recibir la respuesta.",
  },
  {
    id: "noti3",
    title: "Su solicitud de permiso se está validando en Nómina",
    description:
      "Recuerde estar pendiente a su correo para recibir la respuesta.",
  },
  {
    id: "noti4",
    title: "Su solicitud de permiso ha sido completada con éxito",
    description:
      "Recuerde estar pendiente a su correo para recibir la respuesta.",
  },
];

export const employeeDownloadables = [
  {
    id: "laboralCertificate",
    title: "Certificado laboral",
    description:
      "Descargar tu certificado laboral sin necesidad de pedirlo a Grupologis",
    image: svg.certificadoLaboral,
  },
  {
    id: "payrollFlyer",
    title: "Volante de nómina",
    description:
      "Descargar tu certificado laboral sin necesidad de pedirlo a Grupologis",
    image: svg.volanteDeNomina,
  },
  {
    id: "laboralCertificate2",
    title: "Ingreso y retención",
    description:
      "Descargar tu certificado laboral sin necesidad de pedirlo a Grupologis",
    image: svg.ingresoYretencion,
  },
  {
    id: "laboralCertificate3",
    title: "Hoja de vida laboral",
    description:
      "Descargar tu certificado laboral sin necesidad de pedirlo a Grupologis",
    image: svg.hojaDeVida,
  },
];
export const businessDownloadables = [
  {
    id: "humanResourcesIndicator",
    title: "Indicador de gestion humana",
    description:
      "Descarga tus indicadores de gestión humana indica la fecha inicial y final",
    image: svg.certificadoLaboral,
  },
  {
    id: "generalPayroll",
    title: "Volante de nómina general",
    description: "Descarga tu volante de nómina desde la App",
    image: svg.certificadoLaboral,
  },
  {
    id: "capacitations",
    title: "Capacitaciones",
    description: "Ahora puedes descargar tus capacitaciones desde la App",
    image: svg.certificadoLaboral,
  },
  {
    id: "ausentism",
    title: "Ausentismos",
    description: "Ahora puedes descargar tus certificados desde la App",
    image: svg.certificadoLaboral,
  },
];
export const newsInfo = [
  {
    id: "permisos",
    title: "Permisos",
    image: permisosImage,
    description: "Solicita tus permisos y conoce el estado del tramite",
  },
  {
    id: "incapacidades",
    title: "Incapacidades",
    image: incapacidadesImage,
    description: "Solicita tus permisos y conoce el estado del tramite",
  },
  {
    id: "vacaciones",
    title: "Vacaciones",
    image: vacacionesImage,
    description: "Solicita tus permisos y conoce el estado del tramite",
  },
  {
    id: "retiros",
    title: "Retiros",
    image: retirosImage,
    description: "Solicita tus permisos y conoce el estado del tramite",
  },
  {
    id: "hlaboral",
    title: "Cambio historia laboral",
    image: historiaLaboralImage,
    description: "Solicita tus permisos y conoce el estado del tramite",
  },
];

export const employeeManagement = [
  {
    id: "hvida",
    title: "Hoja de vida",
    description:
      "Ahora puedes descargar las hojas de vida de tus empleados",
    //image: svg.
  },
  {
    id: "novedai",
    title: "Novedad ingresos",
    description:
      "Ahora puedes generar una novedad de ingreso desde la App",
   // image: svg.
  },
  {
    id: "maestroe",
    title: "Maestro empleado",
    description:
      "Ahora puedes descargar tu certificado de maestro empleado",
    //image: svg.
  },
];

export const validDates = () => {
  let actualDate = new Date();
  let currentYear = actualDate.getFullYear();
  let validYears = [];

  for (let i = currentYear; i < currentYear + 10; i++) {
    validYears.push(i);
  }

  return {
    validYears,
    validMonths: [
      "Ene.",
      "Feb.",
      "Mar.",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Sept.",
      "Oct.",
      "Nov.",
      "Dic.",
    ],
  };
  
};
