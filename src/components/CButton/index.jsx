import { Button } from "@tarojs/components";

/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-17 21:01:24
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-06-18 23:05:19
 */
import './index.less'

export default function CButton(props) {
  return (
    <Button
      { ...props }
      className = {
        `btn 
        flex 
        center
        ${props.type === 'black' ? ' is-black' : ''} 
        ${props.size === 'large' ? ' is-large' : ''} 
        ${props.className || ''}
        `
      }
    >
      { props.children }
    </Button>
  )
}