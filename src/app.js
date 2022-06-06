/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-17 16:59:55
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-06 10:35:02
 */
import { Component } from 'react'
import Taro from '@tarojs/taro'
import './app.less'
import { getNavigationBarHeight, setGlobalData } from './utils'
import '../cloudbase/getProducts'

class App extends Component {

  constructor() {
    super()
    getNavigationBarHeight()
    wx.cloud.init({
      traceUser: true
    })
    this.init()
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  init = () => {
    const userInfo = Taro.getStorageSync('USER_INFO')
    const isLogin = Taro.getStorageSync('IS_LOGIN')
    if (!isLogin) return
    setGlobalData('userInfo', userInfo)
    setGlobalData('isLogin', isLogin)
  }

  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}

export default App
