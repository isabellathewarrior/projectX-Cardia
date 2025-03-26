const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // react-native-svg-transformer için gerekli ayar
  config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');

  return config;
})();
