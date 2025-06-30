import { parseApiError } from '../utils/parseApiError';

export const wrapApiCall = async <T>(
  fn: () => Promise<any>
): Promise<{ success: true; data: T } | { success: false; error: string }> => {
  try {
    const response = await fn();

    if (!response.ok || !response.data) {
      const message = parseApiError(response);
      return { success: false, error: message };
    }

    // Optional: if your API includes `success: false` in the payload
    if (response.data?.success === false) {
      const msg = response.data.message || 'API responded with an error';
      return { success: false, error: msg };
    }

    return { success: true, data: response.data };
  } catch (err: any) {
    return { success: false, error: err.message || 'Unexpected error' };
  }
};
