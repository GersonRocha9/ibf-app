module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          alias: {
            '@components': './src/components',
            '@models': './src/models',
            '@routes': './src/routes',
            '@schemas': './src/schemas',
            '@services': './src/services',
            '@utils': './src/utils',
          },
        },
      ],
      'react-native-reanimated/plugin',
      'nativewind/babel',
      require.resolve('expo-router/babel'),
      [
        'module:react-native-dotenv',
        {
          moduleName: '@env',
          path: '.env',
        },
      ],
    ],
  }
}
