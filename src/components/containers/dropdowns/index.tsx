import React, { ReactElement, ReactNode } from 'react'
import s from './style.module.scss'

interface IProps {
  width: number | string
  height: number | string
  visibility: boolean
  children: ReactNode
}
const CustomDropDown = (props: IProps): ReactElement => {
  const { height, width, children, visibility } = props
  return (
    <div
      style={{
        width: width,
        height: height,
        display: visibility == true ? 'inherit' : 'none',
      }}
      className={s.dropDownContainer}
    >
      {children}
    </div>
  )
}

export default CustomDropDown
