/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-05-07 20:02:51
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-18 08:50:01
 */
const config = {
  // baseURL: 'http://localhost:3000',
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  }
}

export const request = (url, method = 'GET', params = {}) => {
  url = config.baseURL + url
  return new Promise((resolve) => {
    wx.request({
      url,
      method,
      success(res) {
        resolve(res.data)
      }
    })
  })
}

export const cloudFunction = (funcName, data = {}) => {
  return new Promise((resolve, reject) => {
    wx.cloud.callFunction({
      name: funcName,
      data,
      success: (res) => resolve(res.result),
      fail: reject
    })
  })
}
