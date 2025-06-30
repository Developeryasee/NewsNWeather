const Geolocation = {
  getCurrentPosition: jest.fn((success, error, options) =>
    success({
      coords: {
        latitude: 37.7749,
        longitude: -122.4194,
        accuracy: 1,
      },
      timestamp: Date.now(),
    })
  ),
  watchPosition: jest.fn(),
  clearWatch: jest.fn(),
  stopObserving: jest.fn(),
};

export default Geolocation;
