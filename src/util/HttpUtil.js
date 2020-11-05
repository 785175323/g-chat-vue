import axios from 'axios';
import {Message} from 'element-ui'

const service = axios.create({
  baseURL: 'http://47.92.244.187:8081', //process.env.BASE_API
  timeout: 5000,
  responseType: "json",
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8"
  }
})

service.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json'
    }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);

service.interceptors.response.use(
  response => {
    if (response.data.code == -10) {
      router.push({
        path: "/login",
        query: {redirect: router.currentRoute.fullPath}
      })
    }
    if (response.data.code == -1) {
      Message.error({
        message: response.data.msg,
        center: true,
      });
    }
    return response;
  },
  error => {
    return Promise.reject(error)
  }
)

export function httpGET(url, params = {}) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function httpPOST(url, data = {}) {
  return new Promise((resolve, reject) => {
    service.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
