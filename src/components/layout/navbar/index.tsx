// TODO: complete this component
import React, { ReactElement } from 'react'
import Image from 'next/image'
import logoPic from '@/../public/img/logo.svg'

import s from './styles.module.scss'

function Navbar(): ReactElement {
  return (
    <div className={s.navbar__container}>
      <h3>navbar</h3>
      <Image src={logoPic} width={48} height={48} />
    </div>
  )
}

export default Navbar
