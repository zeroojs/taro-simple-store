/*
 * @Descripttion: SearchIput Component
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-17 17:22:09
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-04-18 22:35:43
 */
import { Input, View, Image } from "@tarojs/components"
import search from '../../assets/icons/search.png'
import './index.less'

export default function SearchIput(props) {
  return (
    <View className="search-input flex between">
      <Input
        placeholder="请输入产品名称"
        className="search-input__inner"
        { ...props }
      />
      <Image src={search} className="icon" />
    </View>
  )
}
