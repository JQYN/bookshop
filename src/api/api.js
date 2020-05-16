import axios from "axios"

const api = "http://127.0.0.1:8000/api/"

export const register = () => {
  return axios.request({
    method: "post",
    url: "account/create/",
    baseURL: api
  })
}

export const authGetToken = (username, password) => {
  return axios.request({
    method: "post",
    baseURL: api,
    url: "account/token/obtain/",
    data: {
      username: username,
      password: password
    }
  })
}

export const authRefreshToken = (refresh) => {
  return axios.request({
    method: "post",
    baseURL: api,
    url: "account/token/refresh/",
    data: {
      refresh: refresh,

    }
  })
}

export const accountGet = (id = "") => {
  return axios.request({
    method: "get",
    baseURL: api,
    url: `account/${id}/`,
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token")).access}`
    }
  })
}

export const accountUpdate = (id, user) => {
  return axios.request({
    method: "put",
    baseURL: api,
    url: `account/${id}/`,
    data: user,
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token")).access}`
    }
  })
}

export const bookGet = (id = "") => {
  return axios.request({
    method: "get",
    baseURL: api,
    url: `book/${id}`
  })
}

export const bookCreate = (book) => {
  return axios.request({
    method: "post",
    baseURL: api,
    url: "book",
    data: book
  })
}