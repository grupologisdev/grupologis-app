import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

// Import Views

import EmployeeMaster from "./components/HomeScreen/EmployeeManagement/screens/EmployeeMaster";
import ResumeView from "./components/HomeScreen/EmployeeManagement/screens/ResumeView";
import BusinessEmployeeLogin from "./components/LoginScreen/BusinessEmployeeLogin";
import BusinessEntry from "./components/LoginScreen/BusinessEntry";
import CodeAuth from "./components/LoginScreen/CodeAuth";
import ClaimsView from "./screens/ClaimsView";
import ClientsInvoiceView from "./screens/ClientsInvoiceView";
import DownloadView from "./screens/DownloadView";
import EmployeeManagement from "./screens/EmployeeManagement";
import LoginScreen from "./screens/LoginScreen";
import NewsView from "./screens/NewsView";
import UserView from "./screens/UserView";

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
      <Tab.Screen name="EmployeeMaster" component={EmployeeMaster} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Volks-Serial-Light": require("./assets/fonts/VolksSerialLight.ttf"),
    "Volks-Bold": require("./assets/fonts/Volks-Serial-Bold.ttf"),
    "Volks-Serial-Medium": require("./assets/fonts/VolksSerialMedium.ttf"),
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
                <NavigationContainer>
                  <StatusBar style="auto" hidden={false} />
                  <Stack.Navigator
                    initialRouteName="Login"
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
              </NewingState>
            </ResumeState>
          </BillsState>
        </ClaimsState>
      </NewsState>
    </AuthState>
  );
}
