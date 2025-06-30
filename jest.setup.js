import { View } from 'react-native';
jest.mock('react-native-permissions');
jest.mock('@react-native-async-storage/async-storage');

jest.mock('react-native/Libraries/Components/RefreshControl/RefreshControl', () => {
  const React = require('react');
  const { View } = require('react-native');

  return (props) => {
    return React.createElement(View, props, props.children);
  };
});
jest.mock('react-native-geolocation-service', () => ({
  getCurrentPosition: jest.fn(),
}));

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => {
  return () => 'light'; // mock useColorScheme to always return 'light'
});

jest.mock('./src/theme/ThemeContext', () => ({
  useTheme: () => ({
    colors: {
      background: '#fff',
      textPrimary: '#000',
      // ... add others if needed
    },
    spacing: {
      base: 16,
    },
    typography: {
      fontSize: 16,
    },
  }),
}));
jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockImplementation((selector) => selector()),
  useDispatch: jest.fn(),
}));


jest.mock('react-native-svg', () => {
  const React = require('react');
  return {
    __esModule: true,
    Svg: (props) => React.createElement('Svg', props, props.children),
    Circle: (props) => React.createElement('Circle', props, props.children),
    Ellipse: (props) => React.createElement('Ellipse', props, props.children),
    G: (props) => React.createElement('G', props, props.children),
    Text: (props) => React.createElement('Text', props, props.children),
    TSpan: (props) => React.createElement('TSpan', props, props.children),
    TextPath: (props) => React.createElement('TextPath', props, props.children),
    Path: (props) => React.createElement('Path', props, props.children),
    Polygon: (props) => React.createElement('Polygon', props, props.children),
    Polyline: (props) => React.createElement('Polyline', props, props.children),
    Line: (props) => React.createElement('Line', props, props.children),
    Rect: (props) => React.createElement('Rect', props, props.children),
    Use: (props) => React.createElement('Use', props, props.children),
    Defs: (props) => React.createElement('Defs', props, props.children),
    LinearGradient: (props) => React.createElement('LinearGradient', props, props.children),
    RadialGradient: (props) => React.createElement('RadialGradient', props, props.children),
    Stop: (props) => React.createElement('Stop', props, props.children),
    Symbol: (props) => React.createElement('Symbol', props, props.children),
    ClipPath: (props) => React.createElement('ClipPath', props, props.children),
    // Mock default export as well
    default: (props) => React.createElement('Svg', props, props.children),
  };
});
