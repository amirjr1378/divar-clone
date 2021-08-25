import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement, useState } from 'react'
import { Badge, ButtonGroup, Dropdown } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

import logoPic from '@/../public/img/headerI-icon.PNG'

import s from './styles.module.scss'

const NavLinkComponent = (props: Record<string, any>) => (
  <Link href={'/'}>
    <a {...props}>{props.children}</a>
  </Link>
)

function Navbar(): ReactElement {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <span
      style={{ cursor: 'pointer' }}
      className={s.navbar__items}
      ref={ref}
      onClick={(e) => {
        e.preventDefault()
        onClick(e)
      }}
    >
      {children}
    </span>
  ))
  return (
    <>
      <div className={s.navbar__container}>
        {/*####### right content #######*/}
        <div className={s.right__content}>
          <Nav>
            <Nav.Item className="mr-1 ml-1">
              <Dropdown>
                <Dropdown.Toggle
                  as={CustomToggle}
                  id="dropdown-custom-components"
                  className={s.navbar__Right_items}
                >
                  وسایل برقی
                </Dropdown.Toggle>

                <Dropdown.Menu className={s.dropDown__menu}>
                  <Dropdown.Item className={s.dropDown__item} eventKey="1">
                    لباس شویی
                  </Dropdown.Item>
                  <Dropdown.Item className={s.dropDown__item} eventKey="2">
                    جارو برقی
                  </Dropdown.Item>
                  <Dropdown.Item className={s.dropDown__item} eventKey="3">
                    سه کاره
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </div>

        {/*####### center content #######*/}
        <div className={s.center__content}>
          <Image src={logoPic} width={100} height={55} alt="logoImage" />
        </div>

        {/*####### left content #######*/}
        <div className={s.left__content}>
          <div className={s.search_icon_box}>
            <span className="lnr lnr-magnifier"></span>
            <span className="mr-1">جستجو</span>
          </div>
          <Nav activeKey="/">
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
                <Badge className={s.badge__style}>7</Badge>
                <Image
                  width={20}
                  height={24}
                  src="/img/shopping.png"
                  alt="navbar-icon"
                />
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
