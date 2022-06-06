/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-06-18 21:49:17
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-06 11:02:25
 */
import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import CButton from '../../components/CButton'
import './orders.less'

export default function OrderDetails() {
  
  const back = () => {
    Taro.navigateBack()
  }

  return (
    <View className="order-details container">
      <View className="product-name">产品1</View>
      <View className="phone-numbers vice-text">177xxxxxxxx</View>
      <View className="order-number flex between">
        <Text className="vice-text">123321</Text>
        <Text className="vice-text">复制</Text>
      </View>
      <View className="created-time flex between">
        <Text className="vice-text">状态</Text>
        <Text className="">待发货</Text>
      </View>
      <View className="created-time flex between">
        <Text className="vice-text">规格</Text>
        <Text className="">￥1000.00</Text>
      </View>
      <View className="created-time flex between">
        <Text className="vice-text">支付金额</Text>
        <Text className="">￥988.00</Text>
      </View>
      <View className="created-time flex between">
        <Text className="vice-text">创建订单时间</Text>
        <Text className="">2022/06/18 22:20:30</Text>
      </View>
      <View className="created-time flex between">
        <Text className="vice-text">支付订单时间</Text>
        <Text className="">2022/06/18 22:20:30</Text>
      </View>
      <CButton type="black" className="back-btn" onClick={back}>返回</CButton>
    </View>
  )
}
