/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-06-18 22:12:47
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-06 10:47:42
 */
import { getCurrentInstance, showToast } from '@tarojs/taro'
import { Text, Textarea, View } from "@tarojs/components";
import { Component } from "react";
import CButton from '../../components/CButton'
import { isPhoneNmber, formatAmount, randStr } from "../../utils";
import './confirm.less'

export default class Confirm extends Component {
  
  constructor() {
    super()
    this.state = {
      price: 48,
      spec: 0,
      payAmount: 48,
      length: 0
    }
  }

  // 文本域变换
  handleTextareaChange = ({ detail: { value } }) => {
    const { length } = splitPhoneNumber(value)
    this.setState({
      length,
      loading: false // 支付loading
    })
  }

  // 支付
  pay = async () => {
    const self = this
    this.setState({ loading: true })
    // 支付
    wx.requestPayment({
      timeStamp: ((+new Date()) / 1000) + '',
      nonceStr: randStr(),
      nonceStr: '',
      package: 'prepay_id=',
      signType: 'MD5',
      paySign: '',
      success (res) {
        // 创建订单
        console.log('success', res)
      },
      fail (res) {
        console.log('fail', res)
        showToast({
          title: '支付失败',
          icon: 'error'
        })
      },
      complete (res) {
        self.setState({ loading: false })
      }
    })
  }

  componentDidMount() {
    const { params } = getCurrentInstance().router
    this.routeParams = params
    this.setState({
      spec: Number(params.spec),
      price: Number(params.amount),
      payAmount: Number(params.amount),
    })
  }

  render() {
    return (
      <View className="app-page">
        <View className="container">
          <View className="product-name confirm-item">产品名称</View>
          <View className="product-size flex between confirm-item">
            <Text>产品规格</Text>
            <CButton type="" className="product-size-number">{this.state.spec}</CButton>
          </View>
          <View className="flex between confirm-item">
            <Text>当前价格</Text>
            <CButton type="black" className="product-size-number">￥{ formatAmount(this.state.price) }</CButton>
          </View>
          <View className="flex between confirm-item">
            <Text>支付金额</Text>
            <CButton type="black" className="product-size-number">￥{ formatAmount(this.state.payAmount) }</CButton>
          </View>
          <View className="phone-number-input-container">
            <Textarea
              placeholder="联系电话号码，每行一个"
              className="phone-number-input"
              autoHeight
              onInput={this.handleTextareaChange}
            />
          </View>
          <View className="vice-text phone-number-count">
            已输入有效电话号码<Text className="phone-number-count__inner"> {this.state.length} </Text>个
          </View>
          <CButton
            type="black"
            size="large"
            className="pay-btn"
            loading={this.state.loading}
            disabled={this.state.loading}
            onClick={this.pay}
          >
            立即支付
          </CButton>
        </View>
      </View>
    )
  }
}

// 分割手机号
function splitPhoneNumber(numbers = '', price = 0) {
  let invalidNumber = '' // 错误格式的号码
  let amount = 1
  numbers = numbers.trim()
  const numberArr = []
  for (const item of numbers.split('\n')) {
    if (item) {
      if (!isPhoneNmber(item)) {
        invalidNumber = item
        break
      }
      numberArr.push(item)
    }
  }
  return {
    invalidNumber,
    amount: amount * price * numberArr.length,
    length: numberArr.length
  }
}