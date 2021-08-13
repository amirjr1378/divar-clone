import React, { ReactElement, ReactNode } from 'react'
import s from './style.module.scss'

interface Props {
  width: number | string
  height: number | string
  isVisible: boolean
  children: ReactNode
}
const CustomDropDown = (props: Props): ReactElement => {
  const { height, width, children, isVisible } = props
  return (
    <div
      style={{
        width: width,
        height: height,
        display: isVisible ? 'visible' : 'none',
      }}
      className={s.dropDown}
    >
      {children}
    </div>
  )
}

export default CustomDropDown
