const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const configDefaults = getDefaultConfig(__dirname);

const modifiedConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: configDefaults.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...configDefaults.resolver.sourceExts, 'svg'],
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
  },
  watchFolders: [path.join(__dirname, '../')],
};

/**
 * Merges the default Metro config with the custom config
 * @type {import('metro-config').MetroConfig}
 */
module.exports = mergeConfig(configDefaults, modifiedConfig);
