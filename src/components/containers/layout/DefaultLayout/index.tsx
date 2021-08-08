import React, { ReactElement, ReactNode } from 'react'

import Navbar from '../Navbar'

interface Props {
  children: ReactNode
}

function DefaultLayout({ children }: Props): ReactElement {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default DefaultLayout
