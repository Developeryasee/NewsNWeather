export const kelvinToCelsius = (kelvin: number, decimals = 0): number => {
  const celsius = kelvin - 273.15;
  return parseFloat(celsius.toFixed(decimals));
};
