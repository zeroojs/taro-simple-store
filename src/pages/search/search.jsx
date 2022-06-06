import { Component } from 'react'
import { View } from "@tarojs/components";
import SearchIput from "../../components/SearchIput";

/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-17 17:19:51
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-04-17 17:25:20
 */
export default class Search extends Component {

  render() {
    return (
      <View>
        <SearchIput />
      </View>
    )
  }
}