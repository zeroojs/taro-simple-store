/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-17 21:17:26
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-05-07 20:23:39
 */
import { View, Image } from '@tarojs/components'
import './index.less'

export default function ProductCard(props) {
  const product = props.product
  return (
    <View { ...props } className='product-card'>
      <View className='flex center'>
        <Image src={product.cover} mode='aspectFill' className='product-banner' />
      </View>
      <View className='product-footer'>
        <View>{ product.title }</View>
        <View className='vice-text product-amount'>
          ￥{product.price[0] / 100} 起
        </View>
      </View>
    </View>
  )
}