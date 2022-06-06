/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-17 16:59:55
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-06 10:02:25
 */
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/mine/mine',
    'pages/orders/orders',
    'pages/product/product',
    'pages/confirm/confirm',
    'pages/orders/details',
    'pages/search/search',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
