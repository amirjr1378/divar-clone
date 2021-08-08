import React, { ReactElement } from 'react'
import Spinner from 'react-bootstrap/Spinner'

function Loading(): ReactElement {
  return (
    <Spinner
      animation="border"
      role="status"
      className="text-muted text-center d-block"
    />
  )
}

export default Loading
