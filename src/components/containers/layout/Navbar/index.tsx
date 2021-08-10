// TODO: complete this component

import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

import logoPic from '@/../public/img/headerI-icon.PNG'
import { useCity } from '@/redux/hooks'

import s from './styles.module.scss'
import { Badge} from 'react-bootstrap'

const NavLinkComponent = (props: Record<string, any>) => (
  <Link href={'/'}>
    <a {...props}>{props.children}</a>
  </Link>
)

function Navbar(): ReactElement {
  const city = useCity()
  console.log(city)

  return (
    <>
      <div className={s.navbar__container}>
        {/*####### right content #######*/}
        <div className={s.right__content}></div>

        {/*####### center content #######*/}
        <div className={s.center__content}>
          <Image src={logoPic} width={100} height={55} />
        </div>

        {/*####### left content #######*/}
        <div className={s.left__content}>
          <div className={s.search_icon_box}>
            <span className="lnr lnr-magnifier"></span>
            <span className="mr-1">جستجو</span>
            {/* <input type="text" placeholder="جستجو کالا ..."/> */}
          </div>
          <Nav activeKey="/">
            <Nav.Item></Nav.Item>
            <Nav.Item className="mr-1 ml-1">
              <Nav.Link
                href="/chat"
                as={NavLinkComponent}
                className={s.navbar__items}
              >
                <span className="lnr lnr-bubble" />
                <span>پشتیبانی</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className={s.navbar_login_box}>
              <Nav.Link
                href="/login"
                as={NavLinkComponent}
                className={s.navbar__items}
              >
                <span className="lnr lnr-user" />
                <span>ورود / ثبت نام</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="mr-2">
              <Nav.Link
                href="/basket"
                as={NavLinkComponent}
                className={s.navbar__basket}
              >
                <Badge bg="danger" className={s.badge__style}>
                  7
                </Badge>
                <span
                  className="lnr lnr-cart"
                  style={{ fontSize: '20px' }}
                ></span>
                {/* <span>پشتیبانی</span> */}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
      <div style={{ marginTop: 70 }} />
    </>
  )
}

export default Navbar
