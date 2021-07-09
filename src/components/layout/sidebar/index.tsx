// TODO: complete this component

import React, { ReactElement } from 'react'

import s from './styles.module.scss'

interface Props {}

function Sidebar({}: Props): ReactElement {
  return (
    <div className={s.sidebar__container}>
      <div className={s.top__sidebar}>
        <h6>دسته بندی ها</h6>
        <nav>
          <ul>
            <li>
              <span className="lnr lnr-apartment"></span>
              <span className="mr-2">املاک</span>
            </li>
            <li>
              <span className="lnr lnr-car"></span>
              <span className="mr-2">وسایل نقلیه</span>
            </li>
            <li>
              <span className="lnr lnr-smartphone"></span>
              <span className="mr-2">لوازم الکترونیک</span>
            </li>
            <li>
              <span className="lnr lnr-clock"></span>
              <span className="mr-2">مربوط به خانه</span>
            </li>
            <li>
              <span className="lnr lnr-highlight"></span>
              <span className="mr-2">خدمات</span>
            </li>
            <li>
              <span className="lnr lnr-lighter"></span>
              <span className="mr-2">وسایل شخصی</span>
            </li>
            <li>
              <span className="lnr lnr-bicycle"></span>
              <span className="mr-2">سرگرمی و فراغت</span>
            </li>
            <li>
              <span className="lnr lnr-users"></span>
              <span className="mr-2">اجتماعی</span>
            </li>
            <li>
              <span className="lnr lnr-store"></span>
              <span className="mr-2">برای کسب و کار</span>
            </li>
            <li>
              <span className="lnr lnr-briefcase"></span>
              <span className="mr-2">استخدام و کاریابی</span>
            </li>
          </ul>
        </nav>
      </div>
      <a
        className="btn btn-primary"
        data-toggle="collapse"
        href="#collapseExample"
        role="button"
        aria-expanded="false"
        aria-controls="collapseExample"
      >
        Link with href
      </a>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
    </div>
  )
}

export default Sidebar
