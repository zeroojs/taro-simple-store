/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-06-06 10:03:02
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-06 10:44:01
 */
import Taro from '@tarojs/taro'
import { setGlobalData, getGlobalData } from './global'

export const loginAction = () => {
  // 获取用户信息
  return new Promise(reslove => {
    wx.getUserProfile({
      desc: '信息展示',
      success(res) {
        // 后台登录认证（省略）
        Taro.setStorageSync('USER_INFO', res.userInfo)
        Taro.setStorageSync('IS_LOGIN', true)
        setGlobalData('userInfo', res.userInfo)
        setGlobalData('isLogin', true)
        reslove(res)
      }
    })
  })
}

// 登录后操作
export const loginDelayAction = (func) => {
  const isLogin = getGlobalData('isLogin')
  if (isLogin) return func()
  return loginAction().then(() => func())
}
