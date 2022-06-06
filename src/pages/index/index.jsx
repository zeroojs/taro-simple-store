/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-17 16:59:55
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-18 08:55:37
 */
import { Component, useState } from 'react'
import { View, Text, CoverImage } from '@tarojs/components'
import SearchIput from '../../components/SearchIput'
import CButton from '../../components/CButton'
import ProductCard from '../../components/ProductCard'
import Navbar from '../../components/Navbar'
import ButtonRadioGroup from '../../components/ButtonRadioGroup'
import my from '../../assets/icons/my.png'
import orders from '../../assets/icons/orders.png'
import { cloudFunction } from '../../api'
import './index.less'

// 筛选选按钮组
const types = [
  {
    id: 0,
    text: '全部'
  },
  {
    id: 1,
    text: '卖得最好'
  },
  {
    id: 2,
    text: '好评最多'
  },
  {
    id: 3,
    text: '其他'
  }
]
export default class Index extends Component {

  constructor() {
    super()
    this.state = {
      products: [],
      filterActionText: '全部',
      statusBarHeight: wx.getStorageSync('statusBarHeight')
    }
    this.navigationBarFullHeight = wx.getStorageSync('navigationBarFullHeight')
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleFilterActionsChange = ({ text }) => {
    this.setState({ filterActionText: text })
  }

  // 前往我的页面
  toMinePage = () => {
    wx.navigateTo({
      url: '/pages/mine/mine'
    })
  }

  // 前往订单列表页面
  toOrdersPage = () => {
    wx.navigateTo({
      url: '/pages/orders/orders'
    })
  }

  // 前往产品详情页面
  toProduct = (product) => {
    wx.navigateTo({
      url: '/pages/product/product' + '?id=' + product.id
    })
  }

  // 获取产品列表
  getProducts = async () => {
    const result = await cloudFunction('getProducts')
    if (result && result.code === 200) {
      this.setState({
        products: result.data
      })
    }
  }

  componentDidMount() {
    this.getProducts()
  }

  render () {
    return (
      <View className='page' style={`padding-top:${this.navigationBarFullHeight}px`}>
        <Navbar>
          <CoverImage src={my} className='navbar-icon' onClick={this.toMinePage} />
          <CoverImage src={orders} className='navbar-icon' onClick={this.toOrdersPage} />
        </Navbar>
        <View className='app-page'>
          <View className='container'>
            <SearchIput />
          </View>
          <View className='filter-title'>
            <View className='filter-title__inner container flex between'>
              <Text className='main-text'>筛选心意商品</Text>
              <Text className='vice-text'>{this.state.filterActionText}</Text>
            </View>
          </View>
          <View className='container'>
            <ButtonRadioGroup list={types} onChange={this.handleFilterActionsChange} />
          </View>
          <View className='product-group container'>
            {
              this.state.products.map((product, index) => {
                return (
                  <View key={index} className='product-item'>
                    <ProductCard
                      product={product}
                      onClick={this.toProduct.bind(this, product)}
                    />
                  </View>
                )
              })
            }
            
          </View>
        </View>
      </View>
    )
  }
}
