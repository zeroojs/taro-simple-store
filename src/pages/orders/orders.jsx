/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-18 22:31:24
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-18 09:24:31
 */

import { View, Text } from "@tarojs/components";
import { Component } from "react";
import SearchInput from '../../components/SearchIput'
import './orders.less'

function ListItem(props) {
  return (
    <View className="orders-list-item" { ...props }>
      <View className="product-name">产品1</View>
      <View className="phone-numbers vice-text">177xxxxxxxx</View>
      <View className="created-time flex between">
        <Text className="vice-text">状态</Text>
        <Text className="">待发货</Text>
      </View>
      <View className="created-time flex between">
        <Text className="vice-text">支付金额</Text>
        <Text className="">￥988.00</Text>
      </View>
    </View>
  )
}
export default class Orders extends Component {

  // 前往订单详情页面
  toDetails = (product) => {
    wx.navigateTo({
      url: '/pages/orders/details'
    })
  }

  render() {
    return (
      <View className="app-page">
        <View className="container">
          <SearchInput placeholder="联系电话或产品名称查询" />
          <View className="orders-list">
            {
              new Array(3).fill('-').map(order => {
                return <ListItem onClick={this.toDetails} />
              })
            }
          </View>
        </View>
      </View>
    )
  }
}