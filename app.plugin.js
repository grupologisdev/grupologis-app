const { withInfoPlist, IOSConfig } = require('@expo/config-plugins');

const withCustomInfoPlist = (config) => {
    config = withInfoPlist(config, (config) => {
      // Aquí es donde puedes hacer tus modificaciones personalizadas
      if (!config.modResults.CFBundleIconName) {
        config.modResults.CFBundleIconName = 'icon-120';
      }
  
      return config;
    });
  
    return config;
  };
  
  module.exports = withCustomInfoPlist;