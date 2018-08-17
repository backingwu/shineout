/**
 * cn - 垂直布局
 *    -- 默认为水平布局，设置 block 属性可以改为垂直布局
 * en - Block
 */
import React from 'react'
import { Radio } from 'shineout'

const data = [
  { id: 1, color: 'red' },
  { id: 2, color: 'orange' },
  { id: 3, color: 'yellow' },
  { id: 4, color: 'green' },
  { id: 5, color: 'cyan' },
  { id: 6, color: 'blue' },
  { id: 7, color: 'violet' },
]

export default function () {
  return (
    <Radio.Group
      keygen="id"
      block
      data={data}
      datum={{ format: 'id' }}
      onChange={d => console.log(d)}
      defaultValue={3}
      renderItem="color"
    />
  )
}