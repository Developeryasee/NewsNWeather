import { useCallback } from 'react';
import { Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

export const useLocationPermission = () => {
  const requestLocationPermission = useCallback(async (): Promise<{
    granted: boolean;
    unavailable: boolean;
    blocked: boolean;
  }> => {
    const permissionType =
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

    const status = await check(permissionType);

    if (status === RESULTS.UNAVAILABLE) {
      return { granted: false, unavailable: true, blocked: false };
    }

    if (status === RESULTS.BLOCKED) {
      return { granted: false, unavailable: false, blocked: true };
    }

    if (status === RESULTS.DENIED) {
      const newStatus = await request(permissionType);
      return {
        granted: newStatus === RESULTS.GRANTED,
        unavailable: false,
        blocked: newStatus === RESULTS.BLOCKED,
      };
    }

    return { granted: status === RESULTS.GRANTED, unavailable: false, blocked: false };
  }, []);

  return { requestLocationPermission };
};
