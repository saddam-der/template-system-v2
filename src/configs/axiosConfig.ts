import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

interface AxiosConfig extends AxiosRequestConfig {
  baseURL: string | undefined;
  withCredentials: boolean;
  // headers: {
  //   [key: string]: string | undefined;
  // };
}

// const readTokenFromCookies = (): string | undefined => {
//   const cookies = document.cookie.split(";");
//   const token = cookies.find((cookie) => cookie.includes("token"));
//   return token?.split("=")[1];
// };

const clearTokenFromCookies = (): void => {
  document.querySelectorAll('cookie').forEach((cookie) => cookie.remove());
};

const axiosConfig: AxiosConfig = {
  baseURL: 'import.meta.env.VITE_BASE_API_URL',
  withCredentials: true,
  // headers: {
  //   Authorization: `Basic ${btoa(
  //     `${import.meta.env.VITE_BASE_API_USERNAME}:${
  //       import.meta.env.VITE_BASE_API_PASSWORD
  //     }`
  //   )}`,
  // },
};

const client: AxiosInstance = axios.create(axiosConfig);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleFailedRequest = (error: any): Promise<never> => {
  const status = error?.response?.status;

  if (status === 401 || status === 403) {
    clearTokenFromCookies();
    window.location.replace('/login');
  }
  return Promise.reject(error);
};

const request = async function (options: AxiosRequestConfig) {
  try {
    const response = await client(options);
    return response.data;
  } catch (error) {
    return handleFailedRequest(error);
  }
};

export default request;
