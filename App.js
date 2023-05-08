import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as ScreenOrientation from "expo-screen-orientation";
import { useFonts } from "expo-font";

import { PermissionsAndroid, KeyboardAvoidingView } from "react-native";
import * as MediaLibrary from "expo-media-library";
import * as Permissions from "expo-permissions";

// Import Views

import BusinessEmployeeLogin from "./components/LoginScreen/BusinessEmployeeLogin";
import BusinessEntry from "./components/LoginScreen/BusinessEntry";
import CodeAuth from "./components/LoginScreen/CodeAuth";
import ClaimsView from "./screens/ClaimsView";
import ClientsInvoiceView from "./screens/ClientsInvoiceView";
import DownloadView from "./screens/DownloadView";
import EmployeeManagement from "./screens/EmployeeManagement";
import LoginScreen from "./screens/LoginScreen";
import NewsView from "./screens/NewsView";
import ResumeView from "./screens/ResumeView";
import UserView from "./screens/UserView";
import NewEntryView from "./screens/NewEntryView.jsx";
import MasterEmployee from "./screens/MasterEmployeeView";
import NewsDailyView from "./screens/NewsDailyView";

// Import components

import { StatusBar } from "expo-status-bar";
import Toast from "react-native-toast-message";
import { ErrorToast, SuccessToast } from "./components/common/toast/Toasts";
import Footer from "./components/layout/Footer";

// Import States
import AuthState from "./context/auth/authState";
import BillsState from "./context/bills/billsState";
import ClaimsState from "./context/claims/claimState";
import NewingState from "./context/newing/newingState";
import NewsState from "./context/news/newsState";
import ResumeState from "./context/resume/resumeState";

import moment from "moment";
import { useEffect } from "react";
import { LoaderProgContextProvider } from "./context/loader/LoaderProgContext";
import Capacitations from "./screens/Capacitations";

async function getMediaLibraryPermission() {
  const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
  console.log("status al", status);
  if (status !== "granted") {
    alert("Se requiere permiso para acceder la biblioteca multimedia");
  }
}
async function requestStoragePermission() {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    ]);
    if (
      granted["android.permission.READ_EXTERNAL_STORAGE"] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted["android.permission.WRITE_EXTERNAL_STORAGE"] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log("Storage permissions granted");
    } else {
      console.log("Storage permissions denied");
    }
  } catch (err) {
    console.warn(err);
  }
}

moment.locale("es", {
  months:
    "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
      "_"
    ),
  monthsShort: "Enero_Feb_Mar_Abr_May_Jun_Jul_Ago_Sept_Oct_Nov_Dec".split("_"),
  weekdays: "Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado".split("_"),
  weekdaysShort: "Dom_Lun_Mar_Mier_Jue_Vier_Sab".split("_"),
  weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sa".split("_"),
});
moment().utcOffset("-05:00");

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const toastConfig = {
  success: (props) => <SuccessToast {...props} />,
  error: (props) => <ErrorToast {...props} />,
};

const HomeScreens = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <Footer {...props} />}
    >
      <Tab.Screen name="DownloadView" component={DownloadView} />
      <Tab.Screen name="ClaimsView" component={ClaimsView} />
      <Tab.Screen name="NewsView" component={NewsView} />
      <Tab.Screen name="ProfileView" component={UserView} />
      <Tab.Screen name="EmployeeManagement" component={EmployeeManagement} />
      <Tab.Screen name="ClientsInvoices" component={ClientsInvoiceView} />
      <Tab.Screen name="ResumeView" component={ResumeView} />
      <Tab.Screen name="NewEntryView" component={NewEntryView} />
      <Tab.Screen
        name="NewsDailyView"
        component={NewsDailyView}
        options={({ route }) => {
          return {
            tabBarVisible: route.name !== "NewsDailyView", // Oculta el Footer solo en la vista NewsDailyView
          };
        }}
      />
      <Tab.Screen name="MasterEmployee" component={MasterEmployee} />
      <Tab.Screen name="Capacitations" component={Capacitations} />
    </Tab.Navigator>
  );
};

export default function App() {
  useEffect(() => {
    getMediaLibraryPermission();
    requestStoragePermission();
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }, []);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),

    "Volks-Serial-Light": require("./assets/fonts/VolksSerialLight.ttf"),
    "Volks-Bold": require("./assets/fonts/Volks-Serial-Bold.ttf"),
    "Volks-Serial-Medium": require("./assets/fonts/VolksSerialMedium.ttf"),

    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  console.log("🚀 ~ reloading");

  return (
    <AuthState>
      <NewsState>
        <ClaimsState>
          <BillsState>
            <ResumeState>
              <NewingState>
                <LoaderProgContextProvider>
                  <NavigationContainer>
                    <StatusBar style="auto" hidden={false} />
                    <Stack.Navigator
                      initialRouteName="Login"
                      // initialRouteName="Home"
                      screenOptions={{
                        headerShown: false,
                      }}
                    >
                      <Stack.Screen name="Login" component={LoginScreen} />
                      <Stack.Screen
                        name="BusinessEmployeeLogin"
                        component={BusinessEmployeeLogin}
                      />
                      <Stack.Screen name="CodeAuth" component={CodeAuth} />
                      <Stack.Screen
                        name="BusinessEntry"
                        component={BusinessEntry}
                      />
                      <Stack.Screen name="Home" component={HomeScreens} />
                    </Stack.Navigator>

                    <Toast config={toastConfig} />
                  </NavigationContainer>
                </LoaderProgContextProvider>
              </NewingState>
            </ResumeState>
          </BillsState>
        </ClaimsState>
      </NewsState>
    </AuthState>
  );
}
