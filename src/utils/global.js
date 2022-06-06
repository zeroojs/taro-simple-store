/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-06-06 10:32:07
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-06 10:33:25
 */
const data = {}

export const getGlobalData = (key) => data[key]

export const setGlobalData = (key, val) => {
  data[key] = val
}
