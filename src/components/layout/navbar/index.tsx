// TODO: complete this component

import React, { ReactElement } from 'react'

import Image from 'next/image'
import logoPic from '@/../public/img/logo.svg'
import s from './styles.module.scss'

function Navbar(): ReactElement {
  return (
    <div className={s.navbar__container}>
      <div className="row align-items-center">
        <Image src={logoPic} width={48} height={48} />
        <div className="col-6 mr-4" style={{ borderRight: '1px solid #ddd' }}>
          <span
            className="lnr lnr-map-marker"
            style={{ fontSize: '16px' }}
          ></span>
          <span className={s.city__name}>تهران</span>
        </div>
      </div>
      <div className="row align-items-center">
        <nav>
          <ul className="row align-items-center">
            <li>
              <span class="lnr lnr-user"></span>
              <div className="mr-2">دیوار من</div>
            </li>
            <li>
              <span class="lnr lnr-bubble"></span>
              <div className="mr-2">چت</div>
            </li>
            <li>پشتیبانی</li>
            <li>
              <button className="btn-primary">ثبت آگهی</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
