module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|@react-navigation' +
      '|react-native-geolocation-service' +
      '|@react-native-async-storage' +
      '|react-native-screens' +
      '|react-native-size-matters' +
      '|react-native-svg' +
      '|react-redux' +
      ')/)',
  ],
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svgMock.js",
  },
};
