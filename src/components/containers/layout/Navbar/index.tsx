// TODO: complete this component

import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'

import logoPic from '@/../public/img/logo.svg'
import { useCity } from '@/redux/hooks'

import s from './styles.module.scss'

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
        {/* right content */}
        <Link href="/">
          <a>
            <Image src={logoPic} width={48} height={48} />
          </a>
        </Link>
        <hr />

        {city?.name && (
          <div className="d-flex align-items-center">
            <span className="lnr lnr-map-marker ml-2" />
            <span className="text-muted">{city?.name}</span>
          </div>
        )}

        <div className="mr-auto" />
        {/* left content */}
        <Nav activeKey="/">
          <Nav.Item>
            <Nav.Link href="/me" as={NavLinkComponent}>
              <span className="lnr lnr-user" />
              <span>دیوار من</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/chat" as={NavLinkComponent}>
              <span className="lnr lnr-bubble" />
              <span>چت</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/support" as={NavLinkComponent}>
              <span>پشتیبانی</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Button type="primry">ثبت آگهی</Button>
      </div>
      <div style={{ marginTop: 70 }} />
    </>
  )
}

export default Navbar
