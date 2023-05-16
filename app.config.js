export default ({
    expo: {
      // Otras opciones de configuración de Expo aquí
      ios: {
        bundleIdentifier: "mglio.com", // Reemplace esto con su identificador de paquete
        infoPlist: {
          CFBundleIconName: "icon",  // Asegúrate de que "icon-120" sea el nombre correcto de tu icono
        },
      },
      extra: {
        eas: {
          projectId: "00c0fd79-69a5-4fc0-9d1e-c64f5d218927"
        }
      }
    }
  });
  