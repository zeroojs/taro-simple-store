/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-17 22:23:17
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-06 10:34:05
 */
export * from './auth'
export * from './global'

export function getNavigationBarHeight() {
  const { statusBarHeight, platform } = wx.getSystemInfoSync()
  const { top, height } = wx.getMenuButtonBoundingClientRect()
  let navigationBarHeight = 0

  // 状态栏高度
  wx.setStorageSync('statusBarHeight', statusBarHeight)
  // 胶囊按钮高度 一般是32 如果获取不到就使用32
  wx.setStorageSync('menuButtonHeight', height ? height : 32)

  // 判断胶囊按钮信息是否成功获取
  if (top && top !== 0 && height && height !== 0) {
    navigationBarHeight = (top - statusBarHeight) * 2 + height
    // 导航栏高度
    wx.setStorageSync('navigationBarHeight', navigationBarHeight)
  } else {
    wx.setStorageSync(
      'navigationBarHeight',
      platform === 'android' ? 48 : 40
    )
  }
  wx.setStorageSync('navigationBarFullHeight', statusBarHeight + navigationBarHeight)
}

// 校验手机号
export function isPhoneNmber(num) {
  return !!num
}

// 格式化价格
export function formatAmount(num = 0) {
  return Number(num).toFixed(2)
}

// 生成随机字符串
export function randStr() {
  return Math.random().toString(16).substring(2)
}