import axios from 'axios';

class Request {
  constructor({
    baseURL = '',
    timeout = '',
    headers = {},
    requestFn = (config) => config,
    responseFn = (response) => response
  } = {}) {
    this.instance = axios.create();
    this.instance.defaults.baseURL = baseURL;
    this.instance.defaults.headers = headers;
    this.instance.defaults.timeout = timeout || 100000;
    this.instance.interceptors.request.use(requestFn, (error) => {
      return Promise.reject(error);
    });
    this.instance.interceptors.response.use(responseFn, (error) => {
      return Promise.reject(error);
    });
  }

  get(url) {
    return this.instance.request({
      withCredentials: true,
      url,
      method: 'GET'
    });
  }

  post(url, data = {}) {
    return this.instance.request({
      withCredentials: true,
      url,
      method: 'POST',
      data
    });
  }
}

export default Request;
