import axios, { AxiosInstance } from 'axios';
import { getTokenFromLocalStorage } from '../helpers/localStorage.helper';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
export const instance = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    Authorization: 'Bearer ' + getTokenFromLocalStorage() || '',
  },
});
