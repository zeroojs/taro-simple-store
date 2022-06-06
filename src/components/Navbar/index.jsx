/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-17 23:00:15
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-04-18 08:29:37
 */
import { CoverView, View } from '@tarojs/components'
import './index.less'

const statusBarHeight = wx.getStorageSync('statusBarHeight')
const navigationBarHeight = wx.getStorageSync('navigationBarHeight')

export default function Navbar(props) {
  return (
    <CoverView className='navbar' style={`height:${statusBarHeight + navigationBarHeight}px`}>
      <CoverView className='navbar-body' style={`height:${statusBarHeight + navigationBarHeight}px`}>
        <CoverView style={`height:${statusBarHeight}px;`}></CoverView>
        <CoverView
          className='menu-btn-bar container flex'
          style={`height:${navigationBarHeight}px;`}
        >
          { props.children }
        </CoverView>
      </CoverView>
    </CoverView>
  )
}