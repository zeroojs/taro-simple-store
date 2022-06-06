/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-06-18 00:08:56
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-06 10:10:38
 */
import Taro from '@tarojs/taro'
import { Image, View, Text } from "@tarojs/components";
import { Component } from "react";
import { loginAction } from '../../utils'
import Cbutton from '../../components/CButton'
import arrow from '../../assets/icons/arrow-right.png'
import './mime.less'

export default class Mine extends Component {
  constructor() {
    super()
    this.state = {
      userInfo: {},
      isLogin: false
    }
  }

  // 登录
  login = async () => {
    const result = await loginAction()
    if (!result) {
      Taro.showToast({
        title: '获取授权失败',
        icon: 'error'
      })
      return
    }
    this.setState({
      userInfo: res.userInfo,
      isLogin: true
    })
  }

  // 退出登录
  loginout = () => {
    Taro.clearStorageSync()
    this.setState({
      isLogin: false
    })
  }

  init = () => {
    const userInfo = Taro.getStorageSync('USER_INFO')
    const isLogin = Taro.getStorageSync('IS_LOGIN')
    if (!isLogin) return
    this.setState({
      userInfo,
      isLogin
    })
  }

  componentDidMount() {
    this.init()
  }

  render() {
    const { userInfo, isLogin } = this.state
    return (
      <View className={`app-page${!isLogin ? ' wait-auth' : ''}`}>
        {
          isLogin &&
          <View className="container">
            {/* 用户信息 */}
            <View className="user-info flex">
              <Image src={userInfo.avatarUrl} mode='aspectFill' className="avatar" />
              <View className="username">
                <View className="wel-text vice-text">你好，</View>
                <View className="username-text">{userInfo.nickName}</View>
              </View>
            </View>
            {/* 统计卡片 */}
            <View className="count-card flex between">
              <View className="card-item">
                <View className="card-item__value">0 个</View>
                <View className="card-item__label vice-text">完成订单</View>
              </View>
              <View className="card-item">
                <View className="card-item__value">0 个</View>
                <View className="card-item__label vice-text">浏览历史</View>
              </View>
              <View className="card-item">
                <View className="card-item__value">￥0.00</View>
                <View className="card-item__label vice-text">余额</View>
              </View>
            </View>
            {/* 其他列表 */}
            <View className="list">
              <View className="list-item flex between">
                <Text>赏金猎人计划</Text>
                <Image src={arrow} className='icon' />
              </View>
              <View className="list-item flex between">
                <Text>关于我们</Text>
                <Image src={arrow} className='icon' />
              </View>
            </View>
          </View>
        }
        
        {/* 退出|登录按钮 */}
        <Cbutton
          type='black'
          className='logout-btn'
          onTap={isLogin ? this.loginout : this.login}
        >
          { isLogin ? '退出' : '立即' }登录
        </Cbutton>
      </View>
    )
  }
}