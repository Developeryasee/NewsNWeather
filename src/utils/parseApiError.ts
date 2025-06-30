import { ApiResponse } from 'apisauce';

export const parseApiError = (response: ApiResponse<any>): string => {
  if (!response) return 'No response from server';

  const status = response.status;
  const problem = response.problem;
  const data = response.data;

  if (status === 400) {
    return data?.message || 'Bad Request';
  }

  if (status === 401) {
    return 'Unauthorized. Please log in again.';
  }

  if (status === 403) {
    return 'Forbidden. You do not have access.';
  }

  if (status === 404) {
    return 'Not found. The requested resource does not exist.';
  }

  if (status && status >= 500) {
    return 'Server error. Please try again later.';
  }

  if (problem === 'NETWORK_ERROR') {
    return 'Network error. Please check your internet connection.';
  }

  if (data?.message) {
    return data.message;
  }

  return problem || 'Unknown error occurred';
};
