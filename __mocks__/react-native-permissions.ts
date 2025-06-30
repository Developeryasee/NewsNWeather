export const PERMISSIONS = {
  IOS: {},
  ANDROID: {},
};

export const RESULTS = {
  UNAVAILABLE: 'unavailable',
  DENIED: 'denied',
  BLOCKED: 'blocked',
  GRANTED: 'granted',
};

export const check = jest.fn(() => Promise.resolve(RESULTS.GRANTED));
export const request = jest.fn(() => Promise.resolve(RESULTS.GRANTED));
