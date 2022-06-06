/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-18 08:57:25
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-06 11:07:03
 */
import { getCurrentInstance } from '@tarojs/taro'
import { Image, View, Text, Swiper, SwiperItem } from '@tarojs/components';
import { Component } from 'react';
import { getGlobalData, loginDelayAction } from '../../utils'
import { cloudFunction } from '../../api'
import ButtonRadioGroup from '../../components/ButtonRadioGroup'
// import img from '../../assets/images/WeChat0a696c6524bc1485d2a105fb07a4d4a0.png'
import CButton from '../../components/CButton';
import './product.less'

export default class Product extends Component {
  constructor(props) {
    super()
    this.state = {
      isLogin: getGlobalData('isLogin'),
      product: {
        spec: [],
        banners: []
      },
      amount: Number(0).toFixed(2),
      spec: 0
    }
  }

  handleRadioGroupChange = ({ id, text }) => {
    const amount = this.state.product.price[id]
    this.setState({ 
      spec: Number(text),
      amount: ((amount || 0) / 100).toFixed(2)
    })
  }

  // 获取产品详情
  getProducts = async (id) => {
    const result = await cloudFunction('getProduct', { id })
    if (result.code === 200) {
      const amount = result.data.price[0]
      const spec = result.data.spec[0]
      this.setState({
        product: result.data,
        spec,
        amount: ((amount || 0) / 100).toFixed(2)
      })
    }
  }

  // 购买
  buy = async () => {
    const params = {
      amount: this.state.amount,
      spec: this.state.spec
    }
    const query = `?amount=${this.state.amount}&spec=${this.state.spec}&id=${this.routeParams.id}`
    wx.navigateTo({
      url: `/pages/confirm/confirm${query}`
    })
    console.log(params)
  }

  componentDidMount() {
    const { params } = getCurrentInstance().router
    this.routeParams = params
    this.getProducts(params.id || '6275179b19498bec41b4e709')
  }

  render() {
    const { product } = this.state
    const spec = product.spec.map((item, index) => ({ id: index, text: item }))
    return (
      <View className='app-page'>
        <View className='img-container'>
          <Swiper
            autoplay
            circular
            indicatorDots
            className='product-swiper'
          >
            {
              product.banners.map(banner => {
                return (
                  <SwiperItem>
                    <Image src={banner} mode='widthFix' className='product-banner' />
                  </SwiperItem>
                )
              })
            }
          </Swiper>
        </View>
        <View className='container product-page__footer'>
          <View className='product-name'>{product.title}</View>
          <View className='product-desc vice-text'>[ 产品描述 ]</View>
          <View className='product-sizes'>
            {
              !spec.length ?
              <ButtonRadioGroup 
                list={[{ id: 0, text: '加载中...' }]} 
              />
              :
              <ButtonRadioGroup 
                list={spec} 
                onChange={this.handleRadioGroupChange} 
              />
            }
          </View>
          <CButton type='black' className='buy-btn' onClick={() => loginDelayAction(this.buy)}>
            <Text>立即购买</Text>
            <Text className='product-amount'>￥{this.state.amount}</Text>
          </CButton>
        </View>
      </View>
    )
  }
}