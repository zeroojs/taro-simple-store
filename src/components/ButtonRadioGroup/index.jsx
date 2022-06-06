/*
 * @Descripttion: your project
 * @version: 0.0.0
 * @Author: Minyoung
 * @Date: 2022-04-18 09:19:23
 * @LastEditors: Minyoung
 * @LastEditTime: 2022-05-07 20:53:03
 */
import { useState } from 'react'
import { View } from '@tarojs/components'
import CButton from '../CButton'
import './index.less'

export default function ButtonRadioGroup({ onChange, list }) {
  const [selected, setSelected] = useState((list || [])[0])

  const selectType = (item) => {
    if (selected.id === item.id) return
    setSelected(item)
    onChange && onChange(item)
  }

  return (
    <View className='button-radio-group'>
      {
        (list || []).map(item => (
          <CButton
            key={item.id}
            type={selected && selected.id === item.id ? 'black' : ''}
            onClick={() => selectType(item)}
          >
            { item.text }
          </CButton>
        ))
      }
      
    </View>
  )
}